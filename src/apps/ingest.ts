import { GoogleGenAI } from "@google/genai";
import { join } from "@std/path";

import { Document, FileSearchStore, OperationHelper, PagerHelper } from "../types.ts";

// https://alexanderobenauer.com/
const STORE_DISPLAY_NAME = "Alexander Obenauer Website";
const DATA_DIR = "data";

const client = new GoogleGenAI({
  apiKey: Deno.env.get("GOOGLE_GENERATIVE_AI_API_KEY"),
});

async function getOrCreateStore(displayName: string): Promise<FileSearchStore> {
  console.log(`Checking for existing store: ${displayName}...`);

  const pager = await client.fileSearchStores.list() as unknown as PagerHelper<FileSearchStore>;

  // Iterate through all pages of stores
  let currentPager = pager;
  while (true) {
    if (currentPager.page) {
      for (const store of currentPager.page) {
        if (store.displayName === displayName) {
          console.log(`Found existing store: ${store.name}`);
          return store;
        }
      }
    }

    if (currentPager.hasNextPage && currentPager.hasNextPage()) {
      if (currentPager.nextPage) {
        currentPager = await currentPager.nextPage();
      } else {
        break;
      }
    } else {
      break;
    }
  }

  console.log(`Creating new store: ${displayName}...`);
  const newStore = await client.fileSearchStores.create({
    config: { displayName },
  });

  console.log(`Created store: ${newStore.name}`);
  return newStore as FileSearchStore;
}

async function getExistingFileNames(storeName: string): Promise<Set<string>> {
  const existingFileNames = new Set<string>();
  console.log("Checking for existing files in store...");

  try {
    // Use a larger page size to reduce requests, though default might be fine.
    // Cast to unknown first to avoid lint error, then to PagerHelper
    let currentPager = await client.fileSearchStores.documents.list({
      parent: storeName,
      pageSize: 100,
    } as unknown as any) as unknown as PagerHelper<Document>;

    while (true) {
      if (currentPager.page) {
        for (const doc of currentPager.page) {
          if (doc.displayName) {
            existingFileNames.add(doc.displayName);
          }
        }
      }

      if (currentPager.hasNextPage && currentPager.hasNextPage()) {
        if (currentPager.nextPage){
             currentPager = await currentPager.nextPage();
        } else {
             break;
        }
      } else {
        break;
      }
    }
    console.log(`Found ${existingFileNames.size} existing files.`);
  } catch (e) {
    console.warn(
      "Failed to list existing files, proceeding with all files:",
      e,
    );
  }
  return existingFileNames;
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

  console.log(`Found ${files.length} markdown files to ingest locally.`);

  const existingFileNames = await getExistingFileNames(store.name);

  const filesToProcess = files.filter((f) => !existingFileNames.has(f));
  if (filesToProcess.length < files.length) {
    console.log(
      `Skipping ${
        files.length - filesToProcess.length
      } files that are already in the store.`,
    );
  }

  if (filesToProcess.length === 0) {
    console.log("All files already ingested. Exiting.");
    return;
  }

  console.log(`Processing ${filesToProcess.length} files...`);

  for (const filename of filesToProcess) {
    const filePath = join(DATA_DIR, filename);
    console.log(`Uploading ${filename}...`);

    try {
      // @ts-ignore: cast to unknown to avoid lint errors with internal type mismatches
      let uploadOp = await client.fileSearchStores.uploadToFileSearchStore(
        {
          fileSearchStoreName: store.name,
          file: filePath,
          config: {
            mimeType: "text/markdown",
            displayName: filename,
          },
        },
      ) as unknown as OperationHelper;

      console.log(`Upload started for ${filename}:`, uploadOp.name);

      // Poll for completion
      while (!uploadOp.done) {
        console.log(`Waiting for ${filename} processing...`);
        await new Promise((r) => setTimeout(r, 1000));

        // Refresh operation status
        // Cast argument to any because valid types are not fully inferred/available
        // @ts-ignore: implicit any in cast
        uploadOp = await client.operations.get({ operation: uploadOp } as unknown as any) as unknown as OperationHelper;
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
