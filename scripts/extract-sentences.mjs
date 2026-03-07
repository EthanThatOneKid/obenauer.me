import fs from "fs/promises"
import path from "path"

const CONTENT_DIR = "content"

async function extractSentences() {
  console.log("--- Extracting Sentences with Wikilinks ---")

  const allFiles = []
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath)
      } else if (entry.name.endsWith(".md")) {
        allFiles.push(fullPath)
      }
    }
  }

  await walk(CONTENT_DIR)

  const results = []

  for (const filePath of allFiles) {
    const content = await fs.readFile(filePath, "utf-8")

    // Split into sentences (naive but better than nothing)
    // We look for . ! ? followed by space or newline
    const sentences = content.split(/(?<=[.!?])[\s\n]+/)

    for (const sentence of sentences) {
      if (sentence.includes("[[") && sentence.includes("]]")) {
        results.push({
          file: path.relative(".", filePath),
          sentence: sentence.trim(),
        })
      }
    }
  }

  await fs.writeFile("wikilink_sentences.json", JSON.stringify(results, null, 2), "utf-8")
  console.log(`Extracted ${results.length} sentences to wikilink_sentences.json`)
}

extractSentences()
