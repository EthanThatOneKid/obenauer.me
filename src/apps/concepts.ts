import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { join } from "@std/path";
import { emptyDir, ensureDir } from "@std/fs";

const STORE_NAME = "fileSearchStores/alexander-obenauer-website-ifief78chjms";
const CONCEPTS_DIR = join(Deno.cwd(), "concepts");
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

async function saveCheckpoint(processed: Set<string>, queue: string[]) {
  const current = await loadCheckpoint();
  current.concepts = {
    processed: Array.from(processed),
    queue: queue,
  };
  await Deno.writeTextFile(CHECKPOINT_FILE, JSON.stringify(current, null, 2));
}

const model = "gemini-3.1-flash-lite-preview";

// Helper to delay to avoid rate limits
// Gemini free tier has roughly 15 req/min. each generateText with tools can take multiple steps.
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
}

async function getRootConcepts(): Promise<string[]> {
  console.log("Identifying root concepts across the digital garden...");

  const result = await generateText({
    model: google(model),
    system:
      "You are Alexander Obenauer. Identify the most fundamental, atomic concepts from your writing. Follow the 'Atomic Concept Manual' style: single-word, lowercase nouns or gerunds (e.g., 'writing', 'leverage'). Use hyphens for multi-word concepts (e.g., 'zero-sum'). No spaces. Be exhaustive and thorough; extract every core concept that matters.\n\nOutput only a JSON object matching this schema: { \"concepts\": [\"array\", \"of\", \"strings\"] }",
    prompt: "Extract the core concepts from the available files.",
    // @ts-ignore: tools might not be in the type definition but works at runtime
    tools: {
      file_search: google.tools.fileSearch({
        fileSearchStoreNames: [STORE_NAME],
      }),
    },
  });

  try {
    const object = JSON.parse(result.text);
    return object.concepts || [];
  } catch (_e) {
    console.error("Failed to parse JSON for root concepts:", result.text);
    return [];
  }
}

async function extractConceptNode(
  concept: string,
  existingConcepts: Set<string>,
): Promise<{ description: string; relatedConcepts: string[] }> {
  console.log(`Extracting thoughts on: "${concept}"`);

  const existingList = Array.from(existingConcepts).join(", ");

  const result = await generateText({
    model: google(model),
    system:
      `You are Alexander Obenauer. Define this concept based *only* on your notes. 
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
      file_search: google.tools.fileSearch({
        fileSearchStoreNames: [STORE_NAME],
      }),
    },
  });

  try {
    return JSON.parse(result.text);
  } catch (_e) {
    console.error("Failed to parse JSON for concept extract:", result.text);
    return { description: result.text, relatedConcepts: [] };
  }
}

async function writeConceptFile(
  concept: string,
  description: string,
  relatedConcepts: string[],
) {
  await ensureDir(CONCEPTS_DIR);
  const slug = slugify(concept);
  const filePath = join(CONCEPTS_DIR, `${slug}.md`);

  const dateStr = new Date().toISOString().split("T")[0];

  let content = `---
title: ${concept}
date: ${dateStr}
tags:
  - concept
---

`;
  content += `${description}\n\n`;

  if (relatedConcepts.length > 0) {
    content += `## Related\n\n`;
    for (const related of relatedConcepts) {
      const relatedSlug = slugify(related);
      content += `- [[${relatedSlug}]]\n`;
    }
  }

  await Deno.writeTextFile(filePath, content);
  console.log(`✓ Saved ${slug}.md`);
}

async function linkConcepts(processedConcepts: string[]) {
  console.log("Starting retroactive wikilinking pass...");

  // Sort concepts by length descending, so we match "itemized-environments" before "items"
  const sortedConcepts = [...processedConcepts].sort((a, b) =>
    b.length - a.length
  );

  const files = [];
  for await (const dirEntry of Deno.readDir(CONCEPTS_DIR)) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
      files.push(join(CONCEPTS_DIR, dirEntry.name));
    }
  }

  let updatedCount = 0;

  for (const file of files) {
    let content = await Deno.readTextFile(file);
    const originalContent = content;

    const match = content.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)/);
    if (match) {
      const frontmatter = match[1];
      let body = content.slice(frontmatter.length);

      for (const concept of sortedConcepts) {
        // Regex to match the concept as a whole word, case-insensitively.
        // Lookbehinds/lookaheads ensure it's not already inside [[ ]] or part of a URL or existing dash-separated word.
        const escapedConcept = concept.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        // Match the concept string (e.g. "malleable-software" or "agency")
        // Not preceded by [[, a hyphen, or slash. Not followed by ]], a hyphen, or dot (file extension).
        const regex = new RegExp(
          `(?<!\\[\\[|\\-|\\/)(\\b${escapedConcept}\\b)(?!\\]\\]|\\-|\\.[a-z])`,
          "gi",
        );

        body = body.replace(regex, (match) => {
          // If it matches exactly the slug, or matches case-insensitively, wrap it.
          // We use the matched text so we don't destroy casing (e.g. if it said "Agency", it becomes "[[Agency]]", not "[[agency]]").
          // However, we want the link to point to the correct file slug, so we use [[slug|Match]].
          // Actually, Obsidian is case-insensitive for file routing most of the time, but [[concept|Match]] is safest.
          const lowerMatch = match.toLowerCase();
          if (lowerMatch === concept) {
            return `[[${concept}|${match}]]`;
          }
          return match;
        });
      }

      const newContent = frontmatter + body;
      if (newContent !== originalContent) {
        await Deno.writeTextFile(file, newContent);
        updatedCount++;
      }
    }
  }

  console.log(
    `Finished linking! Updated ${updatedCount} concept files with retroactive wikilinks.`,
  );
}

async function main() {
  const isReload = Deno.args.includes("--reload") || Deno.args.includes("-r");
  const isLinkMode = Deno.args.includes("--link");
  const targetConcepts = Deno.args.filter(
    (arg) => !arg.startsWith("-") && arg.trim() !== "",
  );

  if (isReload) {
    console.log(
      "Reload flag detected. Clearing conceptual checkpoint and concepts directory...",
    );
    try {
      const current = await loadCheckpoint();
      delete current.concepts;
      await Deno.writeTextFile(
        CHECKPOINT_FILE,
        JSON.stringify(current, null, 2),
      );
    } catch (e) {
      if (!(e instanceof Deno.errors.NotFound)) {
        console.error("Failed to update checkpoint:", e);
      }
    }

    try {
      await emptyDir(CONCEPTS_DIR);
    } catch (e) {
      console.error("Failed to clear concepts directory:", e);
    }
  }

  await ensureDir(CONCEPTS_DIR);

  let processedConcepts = new Set<string>();
  let conceptQueue: string[] = [];

  const checkpoint = await loadCheckpoint();
  if (checkpoint.concepts) {
    console.log(
      `Resuming from checkpoint: ${checkpoint.concepts.processed.length} processed, ${checkpoint.concepts.queue.length} in queue.`,
    );
    processedConcepts = new Set(checkpoint.concepts.processed);
    conceptQueue = checkpoint.concepts.queue;
  }

  if (isLinkMode) {
    await linkConcepts(Array.from(processedConcepts));
    return;
  }

  // Always look for new root concepts to discover terms that might have been
  // missed originally or newly added to the user's codebase notes.
  let rootConcepts: string[];
  try {
    console.log("Looking for any undiscovered root concepts...");
    rootConcepts = await getRootConcepts();
  } catch (e) {
    // deno-lint-ignore no-explicit-any
    console.error("Error fetching root concepts:", (e as any)?.message || e);
    return;
  }

  const rootSlugs = rootConcepts.map((c) => slugify(c));
  let addedRoots = 0;
  for (const slug of rootSlugs) {
    if (!processedConcepts.has(slug) && !conceptQueue.includes(slug)) {
      conceptQueue.push(slug);
      addedRoots++;
    }
  }

  if (addedRoots > 0) {
    console.log(`Discovered ${addedRoots} new root concepts to process.`);
    await saveCheckpoint(processedConcepts, conceptQueue);
  } else {
    console.log(`No completely new root concepts discovered.`);
  }

  // Prepend targeted concepts if any
  if (targetConcepts.length > 0) {
    const slugs = targetConcepts.map((c) => slugify(c));
    console.log(`Injecting targeted concepts into queue:`, slugs);
    for (const slug of slugs) {
      if (!processedConcepts.has(slug) && !conceptQueue.includes(slug)) {
        conceptQueue.unshift(slug); // Put them at the front!
      }
    }
    await saveCheckpoint(processedConcepts, conceptQueue);
  }

  let count = 0;
  const MAX_CONCEPTS = 300; // Safety valve, but allow the subagents to naturally exhaust the conceptual space

  while (conceptQueue.length > 0 && count < MAX_CONCEPTS) {
    const currentConcept = conceptQueue.shift()!;

    if (processedConcepts.has(currentConcept)) continue;

    processedConcepts.add(currentConcept);
    count++;

    try {
      const { description, relatedConcepts } = await extractConceptNode(
        currentConcept,
        processedConcepts,
      );
      await writeConceptFile(currentConcept, description, relatedConcepts);

      for (const related of relatedConcepts) {
        const relatedSlug = slugify(related);
        if (
          !processedConcepts.has(relatedSlug) &&
          !conceptQueue.includes(relatedSlug)
        ) {
          conceptQueue.push(relatedSlug);
        }
      }

      await saveCheckpoint(processedConcepts, conceptQueue);

      // Wait 15 seconds to stay safe with Gemini free tier
      await sleep(15000);
    } catch (error) {
      console.error(
        `Error processing concept "${currentConcept}":`,
        // deno-lint-ignore no-explicit-any
        (error as any)?.message || error,
      );
      // Wait a bit longer on error
      await sleep(30000);
    }
  }

  console.log(`\nFinished processing ${count} concepts.`);
}

if (import.meta.main) {
  main();
}
