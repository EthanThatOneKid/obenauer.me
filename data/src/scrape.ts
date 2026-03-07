import TurndownService from "turndown"
import fs from "node:fs/promises"
import path from "node:path"
import { JSDOM } from "jsdom"
import { GoogleGenAI } from "@google/genai"
import { RSS_URL, SITEMAP_PATH, DATA_DIR, STORE_DISPLAY_NAME } from "./lib/config"
import { loadCheckpoint, saveCheckpoint } from "./lib/checkpoint"
import { FileSearchStore, OperationHelper, PagerHelper } from "./lib/types"

// --- Sitemap ---

async function syncSitemap() {
  console.log(`Fetching RSS feed from ${RSS_URL}...`)
  const rssRes = await fetch(RSS_URL)
  if (!rssRes.ok) throw new Error(`Failed to fetch RSS: ${rssRes.statusText}`)
  const rssText = await rssRes.text()

  const linkRegex =
    /<(?:link|guid)[^>]*>(https:\/\/alexanderobenauer\.com\/[^<]+)<\/(?:link|guid)>/g
  const rssLinks = [...rssText.matchAll(linkRegex)].map((m) => m[1])

  let sitemapLinks: string[] = []
  try {
    const sitemapText = await fs.readFile(SITEMAP_PATH, "utf-8")
    const sitemapRegex = /<loc>(https:\/\/alexanderobenauer\.com\/[^<]+)<\/loc>/g
    sitemapLinks = [...sitemapText.matchAll(sitemapRegex)].map((m) => m[1])
  } catch (error: any) {
    if (error.code !== "ENOENT") throw error
  }

  const normalizedLinks = [...new Set([...rssLinks, ...sitemapLinks])].map((url) => {
    if (url.match(/\.(xml|png|jpg|pdf|txt|json|webmanifest|ico)$/)) return url
    return url.endsWith("/") ? url : url + "/"
  })

  const uniqueLinks = [...new Set(normalizedLinks)].sort()

  let newSitemap = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n'
  newSitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for (const url of uniqueLinks) {
    newSitemap += `  <url>\n    <loc>${url}</loc>\n  </url>\n`
  }
  newSitemap += "</urlset>\n"

  await fs.writeFile(SITEMAP_PATH, newSitemap)
  console.log(`✓ Sitemap updated.`)
}

// --- Scrape ---

function cleanHtml(html: string, url: string): string {
  const tokenSinks = [
    /My book, .*available for purchase now/gi,
    /Want to support my work\? See memberships\./gi,
    /Go to the member portal/gi,
    /Something spark a thought\? Email me/gi,
  ]

  let preCleanedHtml = html
  for (const sink of tokenSinks) preCleanedHtml = preCleanedHtml.replace(sink, "")

  const dom = new JSDOM(preCleanedHtml)
  const doc = dom.window.document

  const commonRemovals = [
    "#subpageHeader",
    "#footer",
    "#footerLinks",
    "#themeSelector",
    "#newsletter",
    "nav",
    "footer",
    "header",
    "aside",
    "script",
    "style",
    ".membership-promo",
    'a[href="/membership"]',
    'a[href*="buddybindery.com"]',
    'a[href*="mailto:"]',
    ".social-links",
    ".site-footer",
  ]

  if (url.includes("/weekly/"))
    commonRemovals.push("#weekly .column.hide900", ".verticalBorder", ".weekly-archives")
  else if (url.includes("/labnotes/"))
    commonRemovals.push(".labnotes-header", ".labnotesnav", "#labnotes-list", "hr + p")
  else if (url.includes("/thinking/")) commonRemovals.push(".thinking-header")

  for (const selector of commonRemovals) doc.querySelectorAll(selector).forEach((el) => el.remove())
  doc.querySelectorAll("div:empty, p:empty, section:empty").forEach((el) => el.remove())
  return doc.body.innerHTML
}

async function scrape() {
  const turndownService = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" })
  turndownService.remove([
    "script",
    "style",
    "nav",
    "footer",
    "form",
    "aside",
    "iframe",
    "noscript",
    "button",
    "svg",
  ] as any)

  await fs.mkdir(DATA_DIR, { recursive: true })

  const sitemapText = await fs.readFile(SITEMAP_PATH, "utf-8")
  const urls: string[] = []
  let match
  const regex = /<loc>(.*?)<\/loc>/g
  while ((match = regex.exec(sitemapText)) !== null) urls.push(match[1])

  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`)
      const response = await fetch(url)
      if (!response.ok) continue
      const html = await response.text()

      const titleMatch = html.match(/<title>(.*?)<\/title>/i)
      const title = titleMatch ? titleMatch[1].trim() : "Untitled"

      const cleanedHtml = cleanHtml(html, url)
      const markdown = turndownService.turndown(cleanedHtml)

      const urlObj = new URL(url)
      let pathName = urlObj.pathname
      if (pathName.endsWith("/")) pathName += "index"
      else if (!pathName.includes(".")) pathName += "/index"

      const relativePath = pathName.startsWith("/") ? pathName.slice(1) : pathName
      const filepath = path.join(DATA_DIR, `${relativePath}.md`)

      await fs.mkdir(path.dirname(filepath), { recursive: true })

      const frontmatter = [
        "---",
        `title: "${title.replace(/"/g, '\\"')}"`,
        `url: ${url}`,
        `scraped_at: ${new Date().toISOString()}`,
        "---",
        "",
        "",
      ].join("\n")

      await fs.writeFile(filepath, frontmatter + markdown)
    } catch (err) {
      console.error(`Error processing ${url}:`, err)
    }
  }
  console.log(`✓ Scraping complete.`)
}

// --- Ingest ---

const aiClient = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY as string })

async function getOrCreateStore(displayName: string): Promise<FileSearchStore> {
  const pager = (await aiClient.fileSearchStores.list()) as unknown as PagerHelper<FileSearchStore>
  let currentPager = pager
  while (true) {
    if (currentPager.page) {
      for (const store of currentPager.page) {
        if (store.displayName === displayName) return store
      }
    }
    if (currentPager.hasNextPage && currentPager.hasNextPage() && currentPager.nextPage) {
      currentPager = await currentPager.nextPage()
    } else break
  }
  return (await aiClient.fileSearchStores.create({
    config: { displayName },
  })) as unknown as FileSearchStore
}

async function walkFiles(dir: string, baseDir: string = dir): Promise<string[]> {
  const files: string[] = []
  try {
    const dirEntries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of dirEntries) {
      const entryPath = path.join(dir, entry.name)
      if (entry.isDirectory()) files.push(...(await walkFiles(entryPath, baseDir)))
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        // Use relative path from the base directory and ensure forward slashes
        files.push(path.relative(baseDir, entryPath).replace(/\\/g, "/"))
      }
    }
  } catch {}
  return files
}

async function ingest() {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME)
  if (!store.name) throw new Error("Store name is undefined")

  const docFiles = await walkFiles(DATA_DIR)
  const checkpoint = await loadCheckpoint()
  const checkpointedFiles = new Set(checkpoint.ingest?.uploadedFiles || [])

  const filesToProcess = docFiles.filter((f) => !checkpointedFiles.has(f))
  if (filesToProcess.length === 0) {
    console.log("✓ All files already ingested.")
    return
  }

  for (const filePath of filesToProcess) {
    console.log(`Uploading ${filePath}...`)
    try {
      let uploadOp = (await aiClient.fileSearchStores.uploadToFileSearchStore({
        fileSearchStoreName: store.name,
        file: filePath,
        config: { mimeType: "text/markdown", displayName: filePath },
      })) as unknown as OperationHelper

      while (!uploadOp.done) {
        await new Promise((r) => setTimeout(r, 1000))
        uploadOp = (await aiClient.operations.get({
          operation: uploadOp,
        } as any)) as unknown as OperationHelper
      }
      checkpointedFiles.add(filePath)
      await saveCheckpoint({ ingest: { uploadedFiles: Array.from(checkpointedFiles) } })
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }
  console.log("✓ Ingestion complete.")
}

// --- Main ---

async function main() {
  console.log("🚀 Starting consolidated update pipeline...")
  try {
    await syncSitemap()
    await scrape()
    await ingest()
    console.log("\n✅ Pipeline Finished!")
  } catch (error) {
    console.error("\n❌ Pipeline Failed:", error)
    process.exit(1)
  }
}

main()
