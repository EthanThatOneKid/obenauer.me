import fs from "fs/promises"
import path from "path"
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY })

const CHECKPOINT_PATH = path.join(process.cwd(), "data", "checkpoint.json")
const SOURCES_DIR = path.join(process.cwd(), "data", "sources")
const CONTENT_DIR = path.join(process.cwd(), "content")

async function run() {
  const checkpoint = JSON.parse(await fs.readFile(CHECKPOINT_PATH, "utf-8"))
  const sources = checkpoint.sources.processed // objects {url, file}

  // 1. Read all sources into memory to prevent multiple read overhead
  const sourceTexts = []
  for (const src of sources) {
    if (src.file) {
      try {
        const text = await fs.readFile(path.join(SOURCES_DIR, src.file), "utf-8")
        sourceTexts.push({ url: src.url, file: src.file, text })
      } catch (err) {}
    }
  }
  console.log(`Loaded ${sourceTexts.length} source files.`)

  // Read concepts from content dir directly so we don't map to old plural forms in checkpoint
  const contentFiles = await fs.readdir(CONTENT_DIR)
  const concepts = contentFiles
    .filter(f => f.endsWith(".md") && f !== "index.md")
    .map(f => f.replace(".md", "")) // list of concepts

  const processConcept = async (concept) => {
    const conceptFilePath = path.join(CONTENT_DIR, `${concept}.md`)
    let contentText = ""
    try {
      contentText = await fs.readFile(conceptFilePath, "utf-8")
    } catch {
      return // No file created for this concept yet
    }

    const escaped = concept.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")
    // Match the concept exactly or with common plural suffixes
    const regex = new RegExp(`\\b${escaped}(?:s|es)?\\b`, "i")
    const candidates = []

    for (const src of sourceTexts) {
      // split by double newlines for paragraphs
      const paragraphs = src.text.split(/\n\s*\n/)
      for (let p of paragraphs) {
        p = p.trim()
        // Ignore lines that look like frontmatter, headers/html uncleaned, or very short lines
        if (p.startsWith("---") || p.startsWith("<") || p.length < 30) continue

        if (regex.test(p)) {
          // Remove Markdown headers and trim
          p = p.replace(/^#+\s+/, "").trim()
          candidates.push({ url: src.url, text: p })
        }
      }
    }

    if (candidates.length === 0) return

    // Dedup identical texts from multiple files or same file
    const uniqueCandidates = []
    const seenTexts = new Set()
    for (const c of candidates) {
      if (!seenTexts.has(c.text)) {
        seenTexts.add(c.text)
        uniqueCandidates.push(c)
      }
    }

    let selectedCandidates = uniqueCandidates

    if (uniqueCandidates.length > 3) {
      console.log(`Evaluating ${uniqueCandidates.length} candidates for "${concept}"...`)
      const textToList = uniqueCandidates
        .map((c, idx) => `ID ${idx}:\n${c.text}`)
        .join("\n\n---\n\n")
      const prompt = `You are a meticulous editor. I will provide you with several excerpts from Alexander Obenauer's writings that mention the concept "${concept}".
Your task is to select up to 3 of the most relevant, insightful, and profound excerpts that best capture his unique perspective on this concept.
Important: Ignore simple passing mentions or logistical formatting. We want deep, relevant thoughts.
Return ONLY a JSON array of the IDs of the selected excerpts. Do not include \`\`\`json markdown formatting. Just a raw array, e.g. [0, 4, 1]

Here are the excerpts:

${textToList}`

      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        })

        // clean up the response
        let rawSelected = response.text
        rawSelected = rawSelected
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim()
        const selectedIds = JSON.parse(rawSelected)
        if (Array.isArray(selectedIds)) {
          selectedCandidates = selectedIds
            .map((id) => uniqueCandidates[id])
            .filter(Boolean)
            .slice(0, 3)
        } else {
          selectedCandidates = uniqueCandidates.slice(0, 3)
        }
      } catch (err) {
        // Fallback to top 3
        selectedCandidates = uniqueCandidates.slice(0, 3)
      }
    } else {
      console.log(`Found ${uniqueCandidates.length} candidate(s) for "${concept}".`)
    }

    if (selectedCandidates.length > 0) {
      const getFragment = (text) => {
        const stripped = text
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // replace links with just text
          .replace(/[*_~`#]/g, "") // remove formatting
          .replace(/\s+/g, " ") // normalize spacing
          .trim()
        const words = stripped.split(" ")
        if (words.length <= 8) return `#:~:text=${encodeURIComponent(stripped)}`
        return `#:~:text=${encodeURIComponent(words.slice(0, 4).join(" "))},${encodeURIComponent(words.slice(-4).join(" "))}`
      }

      const citationsMd = [
        "<!-- citations:start -->",
        "## Citations",
        "",
        selectedCandidates.map(
          (c) => `> [!quote]\n> ${c.text.split("\n").join("\n> ")}\n>\n> — [Source](${c.url}${getFragment(c.text)})`,
        ).join("\n\n"),
        "<!-- citations:end -->",
      ].join("\n")

      let updatedContent = contentText
      const startTag = "<!-- citations:start -->"
      const endTag = "<!-- citations:end -->"

      if (contentText.includes(startTag) && contentText.includes(endTag)) {
        const before = contentText.split(startTag)[0]
        const after = contentText.split(endTag)[1]
        updatedContent = before + citationsMd + after
      } else {
        updatedContent = contentText.trimEnd() + "\n\n" + citationsMd + "\n"
      }

      await fs.writeFile(conceptFilePath, updatedContent, "utf-8")
      console.log(`✅ Updated citations for ${concept}`)
    }
  }

  const CONCURRENCY = 15
  for (let i = 0; i < concepts.length; i += CONCURRENCY) {
    const chunk = concepts.slice(i, i + CONCURRENCY)
    await Promise.all(chunk.map(processConcept))
  }
}

run().catch(console.error)
