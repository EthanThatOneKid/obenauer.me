import fs from "fs/promises"
import path from "path"

const CHECKPOINT_PATH = path.join(process.cwd(), "data", "checkpoint.json")

async function run() {
  const data = JSON.parse(await fs.readFile(CHECKPOINT_PATH, "utf-8"))

  if (data.sources && Array.isArray(data.sources.processed)) {
    // If it's already an array of objects, skip
    if (data.sources.processed.length > 0 && typeof data.sources.processed[0] === "object") {
      console.log("Already migrated")
      return
    }

    data.sources.processed = data.sources.processed.map((url) => {
      const urlObj = new URL(url)
      let p = urlObj.pathname
      if (p.startsWith("/")) p = p.slice(1)
      if (!p.endsWith("/")) p += "/"
      const file = p + "index.md"

      // verify it exists in uploadedFiles
      const exists = data.ingest && data.ingest.uploadedFiles.includes(file)
      if (!exists) {
        console.warn(`File ${file} not found in ingest.uploadedFiles for URL ${url}`)
      }
      return { url, file: exists ? file : null }
    })

    await fs.writeFile(CHECKPOINT_PATH, JSON.stringify(data, null, 2), "utf-8")
    console.log("Migrated checkpoint.json")
  } else {
    console.log("Could not find sources.processed array")
  }
}

run().catch(console.error)
