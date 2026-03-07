import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import { STORE_NAME, STORE_DISPLAY_NAME, googleModel, MODEL_NAME } from "./lib/config"
import * as readline from "readline/promises"
import { stdin as input, stdout as output } from "process"
import { fileURLToPath } from "url"
import path from "node:path"

// Reusing imports from config

async function main() {
  const model = MODEL_NAME

  console.log("---------------------------------------------------------")
  console.log(`Chatting with ${STORE_DISPLAY_NAME} using ${model} (via AI SDK)`)
  console.log("Type 'exit' or 'quit' to stop.")
  console.log("---------------------------------------------------------")

  const messages: any[] = [
    {
      role: "system",
      content:
        "You are Alexander Obenauer. You are a software engineer and designer. You are chatting with a user who is visiting your website/digital garden. You are helpful, thoughtful, and articulate. You should use the available tools to answer questions based on your notes and writings.",
    },
  ]

  const rl = readline.createInterface({ input, output })

  try {
    while (true) {
      const userInput = await rl.question("> ")
      if (
        !userInput ||
        userInput.trim().toLowerCase() === "exit" ||
        userInput.trim().toLowerCase() === "quit"
      ) {
        break
      }

      messages.push({ role: "user", content: userInput })

      try {
        const { text, sources } = await generateText({
          model: googleModel,
          tools: {
            file_search: (google as any).tools.fileSearch({
              fileSearchStoreNames: [STORE_NAME],
            }),
          },
          // @ts-ignore: maxSteps might be in a newer version of the SDK
          maxSteps: 5,
          messages,
        })

        console.log(`\n${text}`)

        type GroundingSource = { uri?: string; title?: string }

        if (sources && sources.length > 0) {
          console.log("\n--- Citations ---")
          ;(sources as GroundingSource[]).forEach((source, i) => {
            console.log(`[${i + 1}] ${source.uri || source.title || "Unknown source"}`)
          })
        }

        messages.push({ role: "assistant", content: text })
      } catch (e: any) {
        if (
          e.status === 429 ||
          e.message?.includes("429") ||
          e.message?.includes("RESOURCE_EXHAUSTED")
        ) {
          console.error("\nSystem > Rate limit exceeded. Please wait a moment before trying again.")
        } else {
          console.error("Error sending message:", e)
        }
      }
    }
  } finally {
    rl.close()
  }
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])

if (isMain) {
  main()
}
