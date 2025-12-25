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

  // Use explicit 'any' casting to navigate the Pager object since TS definitions seem to mismatch or be opaque.
  const pager: any = await client.fileSearchStores.list();

  let existing: any = null;

  // Based on the tutorial:
  // let page = pager.page;
  // while(true) { for (const store of page) ... if (!pager.hasNextPage()) break; page = await pager.nextPage(); }

  let page = pager.page;
  // If page is undefined, maybe the pager is directly iterable or has items?
  // Let's assume standard pagination if .page exists, otherwise try fallback.

  if (!page && pager.fileSearchStores) {
      page = pager.fileSearchStores;
  }

  // Fallback for empty list or different structure
  if (!page) page = [];

  while (true) {
    for (const store of page) {
        if (store.displayName === displayName) {
            existing = store;
            break;
        }
    }

    if (existing) break;

    if (typeof pager.hasNextPage === 'function' && pager.hasNextPage()) {
         if (typeof pager.nextPage === 'function') {
            page = await pager.nextPage();
         } else {
             break;
         }
    } else {
        break;
    }
  }

  if (existing) {
    console.log(`Found existing store: ${existing.name}`);
    return existing;
  }

  console.log(`Creating new store: ${displayName}...`);
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
      let uploadOp = await client.fileSearchStores.uploadToFileSearchStore({
        fileSearchStoreName: store.name,
        file: filePath,
        config: {
            mimeType: "text/markdown",
            displayName: filename,
        }
      });

      console.log(`Upload started for ${filename}:`, uploadOp.name);

      // Poll for completion
      while (!uploadOp.done) {
          console.log(`Waiting for ${filename} processing...`);
          await new Promise(r => setTimeout(r, 1000));

          // The error said "Object literal may only specify known properties, and 'name' does not exist in type 'OperationGetParameters'"
          // It seems it expects the operation object itself or something else.
          // The tutorial said: advancedUploadOp = await ai.operations.get({ operation: advancedUploadOp });

          // We need to cast to 'any' or match the expected type.
          // Since uploadOp is the operation object, let's pass it.
          // TS might complain if the types don't exactly match (e.g. strict checks).

          uploadOp = await client.operations.get({ operation: uploadOp } as any);
      }

      console.log(`Successfully processed ${filename}`);

    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  }

  console.log("Ingestion complete.");
}

if (import.meta.main) {
  main();
}
