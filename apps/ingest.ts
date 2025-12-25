import { join } from "jsr:@std/path";

const API_KEY = Deno.env.get("GOOGLE_API_KEY");
const STORE_DISPLAY_NAME = "Alexander Obenauer Website";
const DATA_DIR = "data";

if (!API_KEY) {
  console.error("Error: GOOGLE_API_KEY environment variable is not set.");
  Deno.exit(1);
}

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const UPLOAD_BASE_URL = "https://generativelanguage.googleapis.com/upload/v1beta";

async function getOrCreateStore(displayName: string) {
  console.log(`Checking for existing store: ${displayName}...`);
  const listUrl = `${BASE_URL}/fileSearchStores?key=${API_KEY}`;
  const listResp = await fetch(listUrl);

  if (!listResp.ok) {
    throw new Error(`Failed to list stores: ${listResp.status} ${await listResp.text()}`);
  }

  const listData = await listResp.json();
  const stores = listData.fileSearchStores || [];
  const existing = stores.find((s: any) => s.displayName === displayName);

  if (existing) {
    console.log(`Found existing store: ${existing.name}`);
    return existing;
  }

  console.log(`Creating new store: ${displayName}...`);
  const createUrl = `${BASE_URL}/fileSearchStores?key=${API_KEY}`;
  const createResp = await fetch(createUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ displayName }),
  });

  if (!createResp.ok) {
    throw new Error(`Failed to create store: ${createResp.status} ${await createResp.text()}`);
  }

  const newStore = await createResp.json();
  console.log(`Created store: ${newStore.name}`);
  return newStore;
}

async function uploadFileToStore(storeName: string, filePath: string, displayName: string) {
  // Read file content
  const fileContent = await Deno.readFile(filePath);
  const fileSize = fileContent.length;

  // Simple upload (media upload)
  // https://ai.google.dev/api/file-search/file-search-stores#method:-media.uploadtofilesearchstore
  // Using multipart upload is often cleaner for metadata + content, but simple upload might work if we only care about content.
  // However, the docs show "Request body" with metadata.
  // Let's try to use the multipart upload protocol which is standard for Google APIs if we want to send metadata.
  // Or, since the docs show `displayName` in the request body, we might be able to use the `uploadType=multipart` query param.

  // Actually, looking at the REST example often implies:
  // POST /upload/v1beta/{name}:uploadToFileSearchStore?uploadType=multipart

  const metadata = {
    displayName: displayName,
    mimeType: "text/markdown"
  };

  const boundary = "-------314159265358979323846";
  const delimiter = "\r\n--" + boundary + "\r\n";
  const closeDelimiter = "\r\n--" + boundary + "--";

  const metadataContentType = "application/json; charset=UTF-8";
  const fileContentType = "text/markdown";

  // Construct the body
  const bodyParts = [
    delimiter,
    `Content-Type: ${metadataContentType}\r\n\r\n`,
    JSON.stringify(metadata),
    delimiter,
    `Content-Type: ${fileContentType}\r\n\r\n`,
  ];

  // We need to combine text parts and the binary file content.
  // Deno's fetch accepts a Blob, BufferSource, FormData, URLSearchParams, or string.
  // Using a Blob is probably easiest to combine parts.

  const textEncoder = new TextEncoder();
  const blobParts: (Uint8Array | Blob)[] = [];

  for (const part of bodyParts) {
      blobParts.push(textEncoder.encode(part));
  }
  blobParts.push(fileContent);
  blobParts.push(textEncoder.encode(closeDelimiter));

  const fullBody = new Blob(blobParts);

  const uploadUrl = `${UPLOAD_BASE_URL}/${storeName}:uploadToFileSearchStore?uploadType=multipart&key=${API_KEY}`;

  console.log(`Uploading ${displayName} to ${storeName}...`);
  const resp = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "Content-Type": `multipart/related; boundary=${boundary}`,
      "X-Goog-Upload-Protocol": "multipart",
    },
    body: fullBody,
  });

  if (!resp.ok) {
    throw new Error(`Failed to upload file ${displayName}: ${resp.status} ${await resp.text()}`);
  }

  const result = await resp.json();
  return result;
}

async function main() {
  const store = await getOrCreateStore(STORE_DISPLAY_NAME);

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

    try {
      const result = await uploadFileToStore(store.name, filePath, filename);
      console.log(`Successfully uploaded ${filename}:`, result.name); // Result name is the operation name

      // Basic rate limiting
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
