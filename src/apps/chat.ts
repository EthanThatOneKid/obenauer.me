import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const STORE_DISPLAY_NAME = "Alexander Obenauer Website";
const STORE_NAME = "fileSearchStores/alexander-obenauer-website-ifief78chjms";

// Define specific message structure if CoreMessage is not found
type LocalCoreMessage = 
  | { role: 'system'; content: string }
  | { role: 'user'; content: string }
  | { role: 'assistant'; content: string };

async function main() {
  const model = "gemini-2.5-flash";

  console.log("---------------------------------------------------------");
  console.log(
    `Chatting with ${STORE_DISPLAY_NAME} using ${model} (via AI SDK)`,
  );
  console.log("Type 'exit' or 'quit' to stop.");
  console.log("---------------------------------------------------------");

  const messages: LocalCoreMessage[] = [
    {
      role: "system",
      content:
        "You are Alexander Obenauer. You are a software engineer and designer. You are chatting with a user who is visiting your website/digital garden. You are helpful, thoughtful, and articulate. You should use the available tools to answer questions based on your notes and writings.",
    },
  ];

  while (true) {
    const userInput = prompt(">");
    if (
      !userInput ||
      userInput.trim().toLowerCase() === "exit" ||
      userInput.trim().toLowerCase() === "quit"
    ) {
      break;
    }

    messages.push({ role: "user", content: userInput });

    try {

      // @ts-ignore: 'sources' property or 'maxSteps' might be missing in Deno's type resolution for this version
      const { text, sources } = await generateText({
        model: google(model),
        tools: {
          file_search: google.tools.fileSearch({
            fileSearchStoreNames: [STORE_NAME],
          }),
        },
        // @ts-ignore: maxSteps is supported in runtime but type definition might be outdated in this environment
        maxSteps: 5, 
        messages: messages as any, // Cast to any to avoid CoreMessage mismatch if library version differs
      });

      console.log(`\n${text}`);

      // Typed source 
      type GroundingSource = { uri?: string; title?: string };

      if (sources && sources.length > 0) {
        console.log("\n--- Citations ---");
        // Cast strict or check
        (sources as GroundingSource[]).forEach((source, i) => {
          console.log(
            `[${i + 1}] ${source.uri || source.title || "Unknown source"}`,
          );
        });
      }

      messages.push({ role: "assistant", content: text });
    } catch (e: unknown) {
      if (
        e instanceof Error &&
        (
          (e as any).status === 429 ||
          e.message?.includes("429") ||
          e.message?.includes("RESOURCE_EXHAUSTED")
        )
      ) {
        console.error(
          "\nSystem > Rate limit exceeded. Please wait a moment before trying again.",
        );
      } else {
        console.error("Error sending message:", e);
      }
    }
  }
}

if (import.meta.main) {
  main();
}
