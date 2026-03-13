import { generateText } from "ai"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { google } from "@ai-sdk/google"
import { JSDOM } from "jsdom"
import TurndownService from "turndown"
import {
  CONCEPTS_DIR,
  DATA_DIR,
  googleModel,
  RSS_URL,
  SITEMAP_PATH,
  STORE_DISPLAY_NAME,
  STORE_NAME,
} from "./lib/config.js"
import { clearCheckpoint, loadCheckpoint, saveCheckpoint } from "./lib/checkpoint.js"
import { GoogleGenAI } from "@google/genai"
import { FileSearchStore, OperationHelper, PagerHelper } from "./lib/types.js"

// Helper to delay to avoid rate limits
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const aiClient = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY as string,
})

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
}

// --- Sources ---

async function syncSources() {
  console.log(`Syncing sources from RSS feed: ${RSS_URL}...`)

  const checkpoint = await loadCheckpoint()
  const processed = new Set(checkpoint.sources?.processed || [])
  const queue = new Set(checkpoint.sources?.queue || [])

  const rssRes = await fetch(RSS_URL)
  if (!rssRes.ok) throw new Error(`Failed to fetch RSS: ${rssRes.statusText}`)
  const rssText = await rssRes.text()

  const linkRegex =
    /<(?:link|guid)[^>]*>(https:\/\/alexanderobenauer\.com\/[^<]+)<\/(?:link|guid)>/g
  const rssLinks = [...rssText.matchAll(linkRegex)].map((m) => m[1])

  let added = 0
  for (const url of rssLinks) {
    const normalized = url.match(/\.(xml|png|jpg|pdf|txt|json|webmanifest|ico)$/)
      ? url
      : url.endsWith("/")
        ? url
        : url + "/"

    if (normalized.includes("rss.xml")) continue

    if (!processed.has(normalized) && !queue.has(normalized)) {
      queue.add(normalized)
      added++
    }
  }

  if (added > 0) {
    console.log(`✓ Added ${added} new source URLs to the queue.`)
    await saveCheckpoint({
      sources: {
        processed: Array.from(processed),
        queue: Array.from(queue),
      },
    })
  } else {
    console.log("No new sources found.")
  }
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
  for (const sink of tokenSinks) {
    preCleanedHtml = preCleanedHtml.replace(sink, "")
  }

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

  if (url.includes("/weekly/")) {
    commonRemovals.push("#weekly .column.hide900", ".verticalBorder", ".weekly-archives")
  } else if (url.includes("/labnotes/")) {
    commonRemovals.push(".labnotes-header", ".labnotesnav", "#labnotes-list", "hr + p")
  } else if (url.includes("/thinking/")) {
    commonRemovals.push(".thinking-header")
  }

  for (const selector of commonRemovals) {
    doc.querySelectorAll(selector).forEach((el) => el.remove())
  }
  doc.querySelectorAll("div:empty, p:empty, section:empty").forEach((el) => el.remove())
  return doc.body.innerHTML
}

async function scrape() {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  })
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

  const checkpoint = await loadCheckpoint()
  const processed = new Set(checkpoint.sources?.processed || [])
  const queue = checkpoint.sources?.queue || []

  if (queue.length === 0) {
    console.log("✓ No new sources to scrape.")
    return
  }

  const remainingQueue = [...queue]
  while (remainingQueue.length > 0) {
    const url = remainingQueue.shift()!
    try {
      console.log(`Scraping ${url}...`)
      const response = await fetch(url)
      if (!response.ok) {
        processed.add(url) // Skip failed for now to avoid loops
        continue
      }
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
      processed.add(url)
      await saveCheckpoint({
        sources: {
          processed: Array.from(processed),
          queue: remainingQueue,
        },
      })
    } catch (err) {
      console.error(`Error processing ${url}:`, err)
    }
  }
  console.log(`✓ Scraping complete.`)
}

// --- Ingest ---

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
      if (entry.isDirectory()) {
        files.push(...(await walkFiles(entryPath, baseDir)))
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        if (entry.name === "rss.xml.md") continue
        files.push(path.relative(baseDir, entryPath).replace(/\\/g, "/"))
      }
    }
  } catch {}
  return files
}

async function clearStoreDocuments(storeName: string) {
  console.log(`Clearing all documents from store: ${storeName}...`)
  try {
    const documentsPager = (await (aiClient.fileSearchStores as any).listDocuments({
      fileSearchStoreName: storeName,
    })) as unknown as PagerHelper<{ name: string }>

    let currentPager = documentsPager
    while (true) {
      if (currentPager.page) {
        for (const doc of currentPager.page) {
          console.log(`Deleting document: ${doc.name}`)
          await (aiClient.fileSearchStores as any).deleteDocument({
            name: doc.name,
          })
        }
      }
      if (currentPager.hasNextPage && currentPager.hasNextPage() && currentPager.nextPage) {
        currentPager = await currentPager.nextPage()
      } else break
    }
  } catch (error) {
    console.warn("Error clearing documents (store might already be empty or missing):", error)
  }
}

async function ingest(isReload: boolean = false) {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME)
  if (!store.name) throw new Error("Store name is undefined")

  if (isReload) {
    console.log("Reload flag detected. Clearing ingestion checkpoint and file search store...")

    await clearStoreDocuments(store.name)

    try {
      await (aiClient.fileSearchStores as any).delete({
        name: store.name,
      })
      console.log(`✓ Deleted file search store: ${store.name}`)
    } catch (e) {
      console.warn("Could not delete file search store:", e)
    }

    // Checkpoint is cleared in the main generate() function for isReload

    // Re-fetch store after deletion
    const newStore = await getOrCreateStore(STORE_DISPLAY_NAME)
    if (!newStore.name) {
      throw new Error("Store name is undefined after recreation")
    }
    store.name = newStore.name
  }

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
        file: path.join(DATA_DIR, filePath),
        config: { mimeType: "text/markdown", displayName: filePath },
      })) as unknown as OperationHelper

      while (!uploadOp.done) {
        await new Promise((r) => setTimeout(r, 1000))
        uploadOp = (await aiClient.operations.get({
          operation: uploadOp,
        } as any)) as unknown as OperationHelper
      }
      checkpointedFiles.add(filePath)
      await saveCheckpoint({
        ingest: { uploadedFiles: Array.from(checkpointedFiles) },
      })
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }
  console.log("✓ Ingestion complete.")
}

// --- Concepts ---

async function getRootConcepts(): Promise<string[]> {
  console.log("Identifying root concepts across the digital garden...")

  let retryCount = 0
  const maxRetries = 3

  while (retryCount < maxRetries) {
    try {
      const result = await generateText({
        model: googleModel,
        system:
          'You are Alexander Obenauer. Identify the most fundamental, atomic concepts from your writing. Follow the \'Atomic Concept Manual\' style: strictly single-word, lowercase nouns or gerunds (e.g., \'writing\', \'leverage\'). Avoid multi-word hyphenated concepts completely. No spaces, no hyphens, no underscores. Be exhaustive and thorough; extract every core concept that matters.\n\nOutput only a JSON object matching this schema: { "concepts": ["array", "of", "strings"] }',
        prompt: "Extract the core concepts from the available files.",
        // @ts-ignore: tools might not be in the type definition but works at runtime
        tools: {
          file_search: (google as any).tools.fileSearch({
            fileSearchStoreNames: [STORE_NAME],
          }),
        },
      })

      const object = JSON.parse(result.text)
      return object.concepts || []
    } catch (e: any) {
      if (
        e.status === 429 ||
        e.message?.includes("429") ||
        e.message?.includes("RESOURCE_EXHAUSTED")
      ) {
        console.warn(
          `Rate limit exceeded during root concept extraction. Retrying in 30s... (Attempt ${
            retryCount + 1
          }/${maxRetries})`,
        )
        await sleep(30000)
        retryCount++
      } else {
        console.error("Failed to extract or parse root concepts:", e.message || e)
        return []
      }
    }
  }
  return []
}

async function extractConceptNode(
  concept: string,
  existingConcepts: Set<string>,
): Promise<{ description: string; relatedConcepts: string[] }> {
  console.log(`Extracting thoughts on: "${concept}"`)

  const existingList = Array.from(existingConcepts).join(", ")

  const result = await generateText({
    model: googleModel,
    system: `You are Alexander Obenauer. Define this concept based *only* on your notes. 
Tone: Reflective, vision-oriented, focused on reimagining the relationship between humans and computers.
Style Guide:
- Atomic: Distill the essence. Ensure it can be read in about a minute.
- Interconnected: Every page must link to at least three other atomic concepts within the first paragraph to encourage exploration.
- Formatting: Use Obsidian Flavored Markdown. Use [[concept-name]] for internal links. Use callouts like > [!note], > [!important], > [!idea] for key insights. Use ==highlights== for crucial phrases.
- Naming: Strictly use single-word lowercase concepts. Multi-word hyphenated concepts are forbidden. No spaces, no hyphens.

Known concepts to link to if relevant: [${existingList}]

Output only a JSON object matching this schema: { "description": "1 minute read text formatted in Obsidian Markdown", "relatedConcepts": ["tag1", "tag2"] }`,
    prompt: `Explain the concept of "${concept}" and list related concepts.`,
    // @ts-ignore: tools might not be in the type definition but works at runtime
    tools: {
      file_search: (google as any).tools.fileSearch({
        fileSearchStoreNames: [STORE_NAME],
      }),
    },
  })

  try {
    const parsed = JSON.parse(result.text)
    return {
      description: parsed.description || result.text,
      relatedConcepts: parsed.relatedConcepts || [],
    }
  } catch (_e) {
    console.error("Failed to parse JSON for concept extract:", result.text)
    return { description: result.text, relatedConcepts: [] }
  }
}

async function writeConceptFile(concept: string, description: string, relatedConcepts: string[]) {
  await fs.mkdir(CONCEPTS_DIR, { recursive: true })
  const slug = slugify(concept)
  const filePath = path.join(CONCEPTS_DIR, `${slug}.md`)

  const dateStr = new Date().toISOString().split("T")[0]

  const uniqueTags = Array.from(
    new Set([slugify(concept), ...relatedConcepts.map((c) => slugify(c))]),
  )

  let content = `---
title: ${concept}
date: ${dateStr}
tags:
${uniqueTags.map((t) => `  - ${t}`).join("\n")}
---

`
  content += `${description}\n\n`

  await fs.writeFile(filePath, content.trim() + "\n")
  console.log(`✓ Saved ${slug}.md`)
}

async function linkConcepts(processedConcepts: string[]) {
  console.log("Starting retroactive wikilinking pass...")

  const sortedConcepts = [...processedConcepts].sort((a, b) => b.length - a.length)

  let files: string[] = []
  try {
    const dirEntries = await fs.readdir(CONCEPTS_DIR, { withFileTypes: true })
    files = dirEntries
      .filter((d) => d.isFile() && d.name.endsWith(".md"))
      .map((d) => path.join(CONCEPTS_DIR, d.name))
  } catch (error) {
    console.error("Error reading concepts directory:", error)
  }

  let updatedCount = 0

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8")
    const originalContent = content

    const match = content.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)/)
    if (match) {
      const frontmatter = match[1]
      let body = content.slice(frontmatter.length)

      for (const concept of sortedConcepts) {
        const escapedConcept = concept.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        const regex = new RegExp(
          `(?<!\\[\\[|\\-|\\/)(\\b${escapedConcept}\\b)(?!\\]\\]|\\-|\\.[a-z])`,
          "gi",
        )

        body = body.replace(regex, (match) => {
          const lowerMatch = match.toLowerCase()
          if (lowerMatch === concept) {
            return `[[${concept}|${match}]]`
          }
          return match
        })
      }

      const newContent = frontmatter + body
      if (newContent !== originalContent) {
        await fs.writeFile(file, newContent)
        updatedCount++
      }
    }
  }

  console.log(`Finished linking! Updated ${updatedCount} concept files with retroactive wikilinks.`)
}

// --- Main Pipeline ---

export async function generate() {
  const args = process.argv.slice(2)
  const isReload = args.includes("--reload") || args.includes("-r")
  const isFixBrokenLinksMode = args.includes("--fix-broken-links")
  const targetConcepts = args.filter((arg) => !arg.startsWith("-") && arg.trim() !== "")

  let checkpoint = await loadCheckpoint()

  // Completion check
  const isComplete =
    checkpoint.concepts &&
    checkpoint.concepts.queue.length === 0 &&
    checkpoint.concepts.processed.length > 0 &&
    !isReload &&
    !isFixBrokenLinksMode &&
    targetConcepts.length === 0

  if (isComplete) {
    console.error(
      "\nGeneration is already complete according to checkpoint.json.\nUse --reload to restart from scratch.",
    )
    process.exit(1)
  }

  if (isReload) {
    console.log("Reload flag detected. Clearing checkpoint and concepts directory...")
    try {
      await clearCheckpoint()
    } catch (e: any) {
      if (e.code !== "ENOENT") {
        console.error("Failed to clear checkpoint:", e)
      }
    }

    try {
      await fs.rm(CONCEPTS_DIR, { recursive: true, force: true })
      await fs.mkdir(CONCEPTS_DIR, { recursive: true })
    } catch (e) {
      console.error("Failed to clear concepts directory:", e)
    }
  }

  // Phase 1: Ingestion
  await syncSources()
  await scrape()
  await ingest(isReload)

  // Phase 2: Generation Setup
  await fs.mkdir(CONCEPTS_DIR, { recursive: true })

  let processedConcepts = new Set<string>()
  let conceptQueue: string[] = []

  checkpoint = await loadCheckpoint()
  if (checkpoint.concepts) {
    console.log(
      `Resuming from checkpoint: ${checkpoint.concepts.processed.length} processed, ${checkpoint.concepts.queue.length} in queue.`,
    )
    processedConcepts = new Set(checkpoint.concepts.processed)
    conceptQueue = checkpoint.concepts.queue
  }

  if (isFixBrokenLinksMode) {
    await linkConcepts(Array.from(processedConcepts))
    return
  }

  let rootConcepts: string[]
  try {
    console.log("Looking for any undiscovered root concepts...")
    rootConcepts = await getRootConcepts()
  } catch (e: any) {
    console.error("Error fetching root concepts:", e.message || e)
    return
  }

  const rootSlugs = rootConcepts.map((c) => slugify(c))
  let addedRoots = 0
  for (const slug of rootSlugs) {
    if (!processedConcepts.has(slug) && !conceptQueue.includes(slug)) {
      conceptQueue.push(slug)
      addedRoots++
    }
  }

  if (addedRoots > 0) {
    console.log(`Discovered ${addedRoots} new root concepts to process.`)
    await saveCheckpoint({
      concepts: {
        processed: Array.from(processedConcepts),
        queue: conceptQueue,
      },
    })
  } else {
    console.log(`No completely new root concepts discovered.`)
  }

  if (targetConcepts.length > 0) {
    const slugs = targetConcepts.map((c) => slugify(c))
    console.log(`Injecting targeted concepts into queue:`, slugs)
    for (const slug of slugs) {
      if (!processedConcepts.has(slug) && !conceptQueue.includes(slug)) {
        conceptQueue.unshift(slug)
      }
    }
    await saveCheckpoint({
      concepts: {
        processed: Array.from(processedConcepts),
        queue: conceptQueue,
      },
    })
  }

  // Phase 3: Generation Loop
  let count = 0
  const MAX_CONCEPTS = 300

  while (conceptQueue.length > 0 && count < MAX_CONCEPTS) {
    const currentConcept = conceptQueue.shift()!

    if (processedConcepts.has(currentConcept)) continue

    processedConcepts.add(currentConcept)
    count++

    try {
      const { description, relatedConcepts } = await extractConceptNode(
        currentConcept,
        processedConcepts,
      )
      await writeConceptFile(currentConcept, description, relatedConcepts)

      for (const related of relatedConcepts) {
        const relatedSlug = slugify(related)
        if (!processedConcepts.has(relatedSlug) && !conceptQueue.includes(relatedSlug)) {
          conceptQueue.push(relatedSlug)
        }
      }

      await saveCheckpoint({
        concepts: {
          processed: Array.from(processedConcepts),
          queue: conceptQueue,
        },
      })
      await sleep(15000)
    } catch (error: any) {
      console.error(`Error processing concept "${currentConcept}":`, error.message || error)
      await sleep(30000)
    }
  }

  console.log(`\nFinished processing ${count} concepts.`)
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])

if (isMain) {
  generate().catch((error) => {
    console.error("Error during generation:", error)
    process.exit(1)
  })
}
