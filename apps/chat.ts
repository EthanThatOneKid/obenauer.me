import { GoogleGenAI } from "@google/genai";

const STORE_DISPLAY_NAME = "Alexander Obenauer Website";

const client = new GoogleGenAI({
  apiKey: Deno.env.get("GOOGLE_GEMINI_API_KEY"),
});

type FileSearchStore = {
  name: string;
  displayName: string;
};

async function getOrCreateStore(displayName: string): Promise<FileSearchStore> {
  // console.log(`Checking for existing store: ${displayName}...`);
  const pager: any = await client.fileSearchStores.list();
  let currentPager = pager;
  while (true) {
    if (currentPager.page) {
      for (const store of currentPager.page) {
        if (store.displayName === displayName) {
          // console.log(`Found existing store: ${store.name}`);
          return store;
        }
      }
    }
    if (currentPager.hasNextPage && currentPager.hasNextPage()) {
      currentPager = await currentPager.nextPage();
    } else {
      break;
    }
  }
  throw new Error(`Store '${displayName}' not found. Please run 'deno task ingest' first.`);
}

async function main() {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME);
  
  // See https://ai.google.dev/gemini-api/docs/file-search#javascript
  // We need to define the tool with the fileSearchStore
  

  // https://ai.google.dev/gemini-api/docs/models
  const model = "gemini-2.5-flash"; 

  console.log("---------------------------------------------------------");
  console.log(`Chatting with ${STORE_DISPLAY_NAME} using ${model}`);
  console.log("Type 'exit' or 'quit' to stop.");
  console.log("---------------------------------------------------------");

  // Keep history if we want a chat session, but the prompt asked for "infinite looping text prompt that uses the prompt API"
  // "uses the prompt API" could mean Deno prompt() or something else.
  // Assuming standard chat style, we'll use a chat session.

  // Note: The SDK documentation says we can pass tools to the generation config.
  // "generateContent" or "chats.create"

  // Let's try to start a chat session.
  // We need to check exact syntax for tools in this SDK.
  // Based on other files, it seems to be `tools: [{ fileSearch: { fileSearchStoreNames: [store.name] } }]`?
  // Or just `fileSearchStore: ...`?
  // Let's assume standard Gemini API JSON structure tailored for this SDK.

  /*
    SDK usage from docs (inferred/general knowledge + ingest.ts):
    const chat = client.chats.create({
      model: "...",
      config: {
        tools: [{ fileSearch: { fileSearchStoreNames: [storeName] } }]
      }
    });
   */

  // We are not sure if `client.chats.create` exists or if it returns an object we can loop with.
  // ingest.ts used "client.fileSearchStores...", "client.operations..."

  // Let's inspect `client.chats` or use `client.models.generateContent` if we don't want history management (though "chat" implies history).
  // The user said "chat with the user while logging relevant citations and assistant replies".
  // Let's try `client.chats.create`.

  // It seems the SDK might have a different surface. Checking `debug_list.ts` output:
  // Client keys: [ ..., "chats", ... ]
  // So `client.chats` exists.

  // Let's try to initialize a chat. I'll use `any` to avoid TS issues until verified.

  // NOTE: The user prompt said: "logging relevant citations".
  // Citations usually come in the `landingGroundingAttribution` or similar fields in the response.

  const chatSession: any = await client.chats.create({
    model: model,
    config: {
        systemInstruction: "You are Alexander Obenauer. You are a software engineer and designer. You are chatting with a user who is visiting your website/digital garden. You are helpful, thoughtful, and articulate. You should use the available tools to answer questions based on your notes and writings.",
        tools: [{ fileSearch: { fileSearchStoreNames: [store.name] } }], 
    }
  });

  while (true) {
    const userInput = prompt(">");
    if (!userInput || userInput.trim().toLowerCase() === "exit" || userInput.trim().toLowerCase() === "quit") {
      break;
    }

    try {
      const result: any = await chatSession.sendMessage({ message: userInput });
      // The result should contain the text and potentially grounding metadata.
      
      const responseText = result.text;
      console.log(`\n${responseText}`);

      // Check for citations
      // API structure for citations (groundingMetadata)
      // Inspecting result structure if possible, but assuming standard candidate access works or helper exists.
      // Based on error `ContentUnion is required` usually implies input issue.
      // If result has .text, it might be a simplified object wrapper. 
      // Let's check candidates on the raw response if available, or just look for groundingMetadata on result.
      
      if (result.groundingMetadata?.groundingChunks) {
          console.log("\n--- Citations ---");
          result.groundingMetadata.groundingChunks.forEach((chunk: any, i: number) => {
              if (chunk.retrievedContext) {
                  console.log(`[${i+1}] ${chunk.retrievedContext.uri || chunk.retrievedContext.title}`);
              }
          });
      } else if (result.candidates?.[0]?.groundingMetadata?.groundingChunks) {
           console.log("\n--- Citations ---");
           result.candidates[0].groundingMetadata.groundingChunks.forEach((chunk: any, i: number) => {
              if (chunk.retrievedContext) {
                  console.log(`[${i+1}] ${chunk.retrievedContext.uri || chunk.retrievedContext.title}`);
              }
           });
      }

    } catch (e: any) {
      if (e.status === 429 || e.message?.includes("429") || e.message?.includes("RESOURCE_EXHAUSTED")) {
         console.error("\nSystem > Rate limit exceeded. Please wait a moment before trying again.");
      } else {
         console.error("Error sending message:", e);
      }
    }
  }
}

if (import.meta.main) {
  main();
}
