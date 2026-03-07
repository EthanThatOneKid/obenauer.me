import fs from "fs/promises"
import path from "path"

const CONTENT_DIR = "content"

const MAPPINGS = {
  // Terminology shifts
  cognition: "thinking",
  apps: "software",
  itemcentric: "items",
  evolution: "iteration",
  ideation: "thinking",
  data: "facts",
  local: "localfirst",
  services: "automations",
  nodes: "graph",
  corpus: "knowledge",
  recollection: "memory",
  hierarchy: "organization",
  interconnected: "graph",
  malleable: "malleability",
  interoperable: "interoperability",
  itemization: "items",
  ideation: "thinking",
  linking: "graph",
  workspace: "workspaces",
  item: "items",
  mutation: "mutations",

  // Pluralization / Minor typos
  workspace: "workspaces",
  container: "containers",
  desktop: "desktops",
  asset: "assets",
  window: "windows",
  unit: "units",
  view: "views",
  task: "tasks",
  note: "notes",
  project: "projects",
  domain: "domains",
  triple: "triples",
  query: "queries",
  plan: "plans",
  axiom: "axioms",
  habit: "habits",
  device: "devices",
  log: "logs",
  layer: "layers",
  model: "models",
  system: "system", // Already correct but here for completeness

  // Final refinements
  ideas: "thinking",
  work: "workflow",
  environments: "environment",
  thought: "thinking",
  workflows: "workflow",
  itemized: "items",
  evolve: "evolvability",
  structure: "architecture",
  collections: "metadata",
  think: "thinking",
  automation: "automations",
  meta: "metadata",
  live: "interaction",
}

async function fixLinks() {
  console.log("--- Starting Link Fixes ---")

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

  let totalFixes = 0

  for (const filePath of allFiles) {
    const originalContent = await fs.readFile(filePath, "utf-8")
    let content = originalContent

    // Regex matches [[target]] or [[target|alias]]
    // Group 1: target, Group 2: optional |alias
    const wikilinkRegex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g

    let modified = false
    content = content.replace(wikilinkRegex, (match, target, alias) => {
      const trimmedTarget = target.trim()
      if (MAPPINGS[trimmedTarget]) {
        totalFixes++
        modified = true
        const newTarget = MAPPINGS[trimmedTarget]

        // If there's no alias, we now directly rename to the new target
        if (!alias) {
          return `[[${newTarget}]]`
        } else {
          // If there's already an alias, we just update the target part
          return `[[${newTarget}${alias}]]`
        }
      }
      return match
    })

    if (modified) {
      console.log(`Fixed links in ${path.relative(".", filePath)}`)
      await fs.writeFile(filePath, content, "utf-8")
    }
  }

  console.log(`\n--- Summary ---`)
  console.log(`Total link instances updated: ${totalFixes}`)
  console.log("✅ Done! Run verify-links.mjs to check remaining broken links.")
}

fixLinks()
