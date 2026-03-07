import fs from "fs/promises"
import path from "path"

const CONTENT_DIR = "content"
const CHECKPOINT_FILE = "data/checkpoint.json"

async function verifyLinks() {
  console.log("--- Starting Link Verification ---")

  // 1. Catalog all files/slugs in content directory
  const catalog = new Set()
  const allFiles = []

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath)
      } else if (entry.name.endsWith(".md")) {
        const relativePath = path.relative(CONTENT_DIR, fullPath)
        const slug = relativePath.replace(/\\/g, "/").replace(/\.md$/, "")
        catalog.add(slug)
        allFiles.push({ path: fullPath, slug })
      }
    }
  }

  try {
    await walk(CONTENT_DIR)
  } catch (err) {
    console.error(`Error walking content directory: ${err.message}`)
    process.exit(1)
  }

  console.log(`Cataloged ${catalog.size} pages.`)

  // 2. Audit checkpoint.json
  try {
    const checkpointData = JSON.parse(await fs.readFile(CHECKPOINT_FILE, "utf-8"))
    const processedConcepts = checkpointData.concepts.processed || []

    console.log(`\n--- Concept Audit ---`)
    console.log(`Total concepts in checkpoint: ${processedConcepts.length}`)

    const missingConcepts = processedConcepts.filter((c) => !catalog.has(c))
    if (missingConcepts.length > 0) {
      console.log(
        `Found ${missingConcepts.length} concepts in checkpoint that don't have a file in content/:`,
      )
      missingConcepts.forEach((c) => console.log(`  - ${c}`))
    } else {
      console.log("All processed concepts have corresponding files in content/.")
    }

    const untrackedFiles = []
    for (const slug of catalog) {
      // Basic check: if it's not in processed concepts and not index or graph
      if (!processedConcepts.includes(slug) && slug !== "index" && slug !== "graph") {
        untrackedFiles.push(slug)
      }
    }
    if (untrackedFiles.length > 0) {
      console.log(
        `Found ${untrackedFiles.length} files in content/ not listed as processed concepts (excluding index/graph):`,
      )
      untrackedFiles.forEach((f) => console.log(`  - ${f}`))
    }
  } catch (err) {
    console.warn(`Could not read checkpoint file: ${err.message}`)
  }

  // 3. Scan for broken wikilinks [[link]] or [[link|alias]]
  console.log(`\n--- Wikilink Verification ---`)
  const wikilinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g
  let brokenCount = 0
  let totalLinks = 0

  for (const file of allFiles) {
    const content = await fs.readFile(file.path, "utf-8")
    let match
    const fileBrokenLinks = []

    while ((match = wikilinkRegex.exec(content)) !== null) {
      totalLinks++
      const target = match[1].trim()

      // Basic resolution logic:
      // Quartz often just uses the filename for 'shortest' path resolution if unique.
      // For this script, we'll check if the exact slug exists.
      if (!catalog.has(target)) {
        // Try case-insensitive or other common resolutions if needed,
        // but Quartz is usually strict with slug matching.
        fileBrokenLinks.push(target)
        brokenCount++
      }
    }

    if (fileBrokenLinks.length > 0) {
      console.log(`In ${path.relative(".", file.path)}:`)
      fileBrokenLinks.forEach((link) => console.log(`  - Broken link to: [[${link}]]`))
    }
  }

  console.log(`\n--- Summary ---`)
  console.log(`Total links scanned: ${totalLinks}`)
  console.log(`Broken links found: ${brokenCount}`)
  if (brokenCount === 0) {
    console.log("✅ No broken wikilinks found!")
  } else {
    console.log("❌ Broken links detected.")
  }
}

verifyLinks()
