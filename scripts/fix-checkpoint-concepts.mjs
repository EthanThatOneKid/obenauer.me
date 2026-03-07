import fs from "fs/promises"
import path from "path"

const CHECKPOINT_PATH = path.join(process.cwd(), "data", "checkpoint.json")
const CONTENT_DIR = path.join(process.cwd(), "content")

async function fixCheckpointConcepts() {
  const checkpoint = JSON.parse(await fs.readFile(CHECKPOINT_PATH, "utf-8"))
  
  // Read exact filenames in content/ directory
  const contentFiles = await fs.readdir(CONTENT_DIR)
  const actualConcepts = contentFiles
    .filter(f => f.endsWith(".md") && f !== "index.md")
    .map(f => f.replace(".md", ""))

  // Overwrite the processed array with the actual singularized concepts
  checkpoint.concepts.processed = actualConcepts

  await fs.writeFile(CHECKPOINT_PATH, JSON.stringify(checkpoint, null, 2), "utf-8")
  console.log(`Updated checkpoint.json with ${actualConcepts.length} singular concepts derived from content/*.md`)
}

fixCheckpointConcepts().catch(console.error)
