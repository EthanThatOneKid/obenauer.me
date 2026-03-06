import { GoogleGenAI } from "@google/genai";
import { join } from "@std/path";

import { FileSearchStore, OperationHelper, PagerHelper } from "../types.ts";

// https://alexanderobenauer.com/
const STORE_DISPLAY_NAME = "Alexander Obenauer Website";
const DATA_DIR = "documents";
const CHECKPOINT_FILE = join(Deno.cwd(), "checkpoint.json");

interface Checkpoint {
  concepts?: {
    processed: string[];
    queue: string[];
  };
  ingest?: {
    uploadedFiles: string[];
  };
}

async function loadCheckpoint(): Promise<Checkpoint> {
  try {
    const data = await Deno.readTextFile(CHECKPOINT_FILE);
    return JSON.parse(data) as Checkpoint;
  } catch {
    return {};
  }
}

async function saveIngestCheckpoint(files: string[]) {
  const current = await loadCheckpoint();
  current.ingest = { uploadedFiles: files };
  await Deno.writeTextFile(
    CHECKPOINT_FILE,
    JSON.stringify(current, null, 2),
  );
}

const client = new GoogleGenAI({
  apiKey: Deno.env.get("GOOGLE_GENERATIVE_AI_API_KEY"),
});

async function getOrCreateStore(displayName: string): Promise<FileSearchStore> {
  console.log(`Checking for existing store: ${displayName}...`);

  const pager = await client.fileSearchStores.list() as unknown as PagerHelper<
    FileSearchStore
  >;

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

// (Removed getExistingFileNames)

async function main() {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME);
  if (!store.name) {
    throw new Error("Store name is undefined");
  }

  // Read data directory recursively
  async function walkFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    for await (const dirEntry of Deno.readDir(dir)) {
      const entryPath = join(dir, dirEntry.name);
      if (dirEntry.isDirectory) {
        files.push(...(await walkFiles(entryPath)));
      } else if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        // Return path relative to DATA_DIR to preserve ingest logic
        // Return path relative to the root rather than stripping it completely
        // so that we can distinguish between documents/ and concepts/
        files.push(entryPath.replace(/^[/\\]+/, ""));
      }
    }
    return files;
  }

  try {
    const docFiles = await walkFiles(DATA_DIR);

    console.log(`Found ${docFiles.length} markdown files to ingest locally.`);

    const checkpoint = await loadCheckpoint();
    const checkpointedFiles = new Set(checkpoint.ingest?.uploadedFiles || []);

    const filesToProcess = docFiles.filter((f) => !checkpointedFiles.has(f));
    if (filesToProcess.length < docFiles.length) {
      console.log(
        `Skipping ${
          docFiles.length - filesToProcess.length
        } files that are already in the store.`,
      );
    }

    if (filesToProcess.length === 0) {
      console.log("All files already ingested. Exiting.");
      return;
    }

    console.log(`Processing ${filesToProcess.length} files...`);

    for (const filePath of filesToProcess) {
      console.log(`Uploading ${filePath}...`);

      try {
        // @ts-ignore: cast to unknown to avoid lint errors with internal type mismatches
        let uploadOp = await client.fileSearchStores.uploadToFileSearchStore(
          {
            fileSearchStoreName: store.name,
            file: filePath,
            config: {
              mimeType: "text/markdown",
              displayName: filePath, // Using full relative path to avoid display name collisions
            },
          },
        ) as unknown as OperationHelper;

        console.log(`Upload started for ${filePath}:`, uploadOp.name);

        // Poll for completion
        while (!uploadOp.done) {
          console.log(`Waiting for ${filePath} processing...`);
          await new Promise((r) => setTimeout(r, 1000));

          // Refresh operation status
          // Cast argument to any because valid types are not fully inferred/available
          uploadOp = await client.operations.get(
            // deno-lint-ignore no-explicit-any
            { operation: uploadOp } as any,
          ) as unknown as OperationHelper;
        }

        console.log(`Successfully processed ${filePath}`);

        // Update checkpoint after successful upload
        checkpointedFiles.add(filePath);
        await saveIngestCheckpoint(Array.from(checkpointedFiles));
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error(`Data directory '${DATA_DIR}' not found. Exiting.`);
      Deno.exit(1);
    }
    throw error;
  }

  console.log("Ingestion complete.");
}

if (import.meta.main) {
  main();
}
