import { generateText } from "ai"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { STORE_NAME, CONCEPTS_DIR, googleModel } from "./lib/config"
import { loadCheckpoint, saveCheckpoint } from "./lib/checkpoint"

// Helper to delay to avoid rate limits
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
}

async function getRootConcepts(): Promise<string[]> {
  console.log("Identifying root concepts across the digital garden...")

  let retryCount = 0
  const maxRetries = 3

  while (retryCount < maxRetries) {
    try {
      const result = await generateText({
        model: googleModel,
        system:
          "You are Alexander Obenauer. Identify the most fundamental, atomic concepts from your writing. Follow the 'Atomic Concept Manual' style: single-word, lowercase nouns or gerunds (e.g., 'writing', 'leverage'). Use hyphens for multi-word concepts (e.g., 'zero-sum'). No spaces. Be exhaustive and thorough; extract every core concept that matters.\n\nOutput only a JSON object matching this schema: { \"concepts\": [\"array\", \"of\", \"strings\"] }",
        prompt: "Extract the core concepts from the available files.",
        // @ts-ignore: tools might not be in the type definition but works at runtime
        tools: {
          file_search: (googleModel.provider as any).tools.fileSearch({
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
          `Rate limit exceeded during root concept extraction. Retrying in 30s... (Attempt ${retryCount + 1}/${maxRetries})`,
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
- Naming: Single-word lowercase whenever possible. Hyphens for multi-word. No spaces.

Known concepts to link to if relevant: [${existingList}]

Output only a JSON object matching this schema: { "description": "1 minute read text formatted in Obsidian Markdown", "relatedConcepts": ["tag1", "tag2"] }`,
    prompt: `Explain the concept of "${concept}" and list related concepts.`,
    // @ts-ignore: tools might not be in the type definition but works at runtime
    tools: {
      file_search: (googleModel.provider as any).tools.fileSearch({
        fileSearchStoreNames: [STORE_NAME],
      }),
    },
  })

  try {
    return JSON.parse(result.text)
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

  let content = `---
title: ${concept}
date: ${dateStr}
tags:
  - concept
---

`
  content += `${description}\n\n`

  if (relatedConcepts.length > 0) {
    content += `## Related\n\n`
    for (const related of relatedConcepts) {
      const relatedSlug = slugify(related)
      content += `- [[${relatedSlug}]]\n`
    }
  }

  await fs.writeFile(filePath, content)
  console.log(`✓ Saved ${slug}.md`)
}

async function linkConcepts(processedConcepts: string[]) {
  console.log("Starting retroactive wikilinking pass...")

  // Sort concepts by length descending, so we match "itemized-environments" before "items"
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

export async function generate() {
  const args = process.argv.slice(2)
  const isReload = args.includes("--reload") || args.includes("-r")
  const isFixBrokenLinksMode = args.includes("--fix-broken-links")
  const targetConcepts = args.filter((arg) => !arg.startsWith("-") && arg.trim() !== "")

  if (isReload) {
    console.log("Reload flag detected. Clearing conceptual checkpoint and concepts directory...")
    try {
      const current = await loadCheckpoint()
      delete current.concepts
      await saveCheckpoint(current)
    } catch (e: any) {
      if (e.code !== "ENOENT") {
        console.error("Failed to update checkpoint:", e)
      }
    }

    try {
      await fs.rm(CONCEPTS_DIR, { recursive: true, force: true })
      await fs.mkdir(CONCEPTS_DIR, { recursive: true })
    } catch (e) {
      console.error("Failed to clear concepts directory:", e)
    }
  }

  await fs.mkdir(CONCEPTS_DIR, { recursive: true })

  let processedConcepts = new Set<string>()
  let conceptQueue: string[] = []

  const checkpoint = await loadCheckpoint()
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
