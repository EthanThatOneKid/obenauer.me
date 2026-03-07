import fs from "node:fs/promises"
import path from "node:path"

export const CHECKPOINT_FILE = path.join(process.cwd(), "checkpoint.json")

export interface Checkpoint {
  concepts?: {
    processed: string[]
    queue: string[]
  }
  ingest?: {
    uploadedFiles: string[]
  }
}

export async function loadCheckpoint(): Promise<Checkpoint> {
  try {
    const data = await fs.readFile(CHECKPOINT_FILE, "utf-8")
    return JSON.parse(data) as Checkpoint
  } catch {
    return {}
  }
}

export async function saveCheckpoint(update: Partial<Checkpoint>) {
  const current = await loadCheckpoint()
  const next = { ...current, ...update }
  await fs.writeFile(CHECKPOINT_FILE, JSON.stringify(next, null, 2))
}
