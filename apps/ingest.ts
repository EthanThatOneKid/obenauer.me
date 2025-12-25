import { GoogleGenAI } from "@google/genai";
import { join } from "jsr:@std/path";

const API_KEY = Deno.env.get("GOOGLE_API_KEY");
const STORE_DISPLAY_NAME = "Alexander Obenauer Website";
const DATA_DIR = "data";

if (!API_KEY) {
  console.error("Error: GOOGLE_API_KEY environment variable is not set.");
  Deno.exit(1);
}

const client = new GoogleGenAI({ apiKey: API_KEY });

async function getOrCreateStore(displayName: string) {
  console.log(`Checking for existing store: ${displayName}...`);

  const pager = await client.fileSearchStores.list();

  let existing: any = null;
  // Iterate asynchronously over the pager
  for await (const store of pager) {
    if (store.displayName === displayName) {
        existing = store;
        break;
    }
  }

  if (existing) {
    console.log(`Found existing store: ${existing.name}`);
    return existing;
  }

  console.log(`Creating new store: ${displayName}...`);
  // Based on .d.ts inspection:
  // CreateFileSearchStoreParameters { config?: CreateFileSearchStoreConfig }
  // CreateFileSearchStoreConfig { displayName?: string }
  // So it should be create({ config: { displayName: "..." } })

  const newStore = await client.fileSearchStores.create({
    config: { displayName }
  });

  console.log(`Created store: ${newStore.name}`);
  return newStore;
}

async function main() {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME);

  if (!store.name) {
    throw new Error("Store name is undefined");
  }

  // Read data directory
  const files: string[] = [];
  try {
    for await (const dirEntry of Deno.readDir(DATA_DIR)) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        files.push(dirEntry.name);
      }
    }
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
        console.error(`Data directory '${DATA_DIR}' not found.`);
        Deno.exit(1);
    }
    throw error;
  }

  console.log(`Found ${files.length} markdown files to ingest.`);

  for (const filename of files) {
    const filePath = join(DATA_DIR, filename);
    console.log(`Uploading ${filename}...`);

    try {
      // Based on .d.ts inspection:
      // uploadToFileSearchStore(params: { fileSearchStoreName: string, file: string | Blob, config?: ... })

      const uploadResult = await client.fileSearchStores.uploadToFileSearchStore({
        fileSearchStoreName: store.name,
        file: filePath,
        config: {
            mimeType: "text/markdown",
            displayName: filename,
        }
      });

      console.log(`Successfully uploaded ${filename}. Operation:`, uploadResult.name);

      await new Promise(r => setTimeout(r, 1000));
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  }

  console.log("Ingestion complete.");
}

if (import.meta.main) {
  main();
}
