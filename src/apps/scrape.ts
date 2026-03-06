import TurndownService from "turndown";
import { dirname, join } from "@std/path";
import { DOMParser, Element } from "deno-dom";

function cleanHtml(html: string, url: string): string {
  // Pre-process common text-based token sinks that might not be easily selectable
  const tokenSinks = [
    /My book, .*available for purchase now/gi,
    /Want to support my work\? See memberships\./gi,
    /Go to the member portal/gi,
    /Something spark a thought\? Email me/gi,
  ];

  let preCleanedHtml = html;
  for (const sink of tokenSinks) {
    preCleanedHtml = preCleanedHtml.replace(sink, "");
  }

  const doc = new DOMParser().parseFromString(preCleanedHtml, "text/html");
  if (!doc) return html;

  // Selectors for elements to remove across all pages
  const commonRemovals = [
    "#subpageHeader",
    "#footer",
    "#footerLinks",
    "#themeSelector",
    "#newsletter",
    "nav",
    "footer",
    "header",
    "aside",
    "script",
    "style",
    ".membership-promo",
    'a[href="/membership"]',
    'a[href*="buddybindery.com"]', // Book links
    'a[href*="mailto:"]', // Email links
    ".social-links",
    ".site-footer",
  ];

  // Page-specific removals
  if (url.includes("/weekly/")) {
    commonRemovals.push(
      "#weekly .column.hide900", // Sidebar
      ".verticalBorder",
      ".weekly-archives",
    );
  } else if (url.includes("/labnotes/")) {
    commonRemovals.push(
      ".labnotes-header",
      ".labnotesnav",
      "#labnotes-list",
      "hr + p",
    );
  } else if (url.includes("/thinking/")) {
    commonRemovals.push(
      ".thinking-header",
    );
  }

  for (const selector of commonRemovals) {
    doc.querySelectorAll(selector).forEach((el) => (el as Element).remove());
  }

  // Final cleanup of empty elements that might accumulate
  doc.querySelectorAll("div:empty, p:empty, section:empty").forEach((el) =>
    (el as Element).remove()
  );

  return doc.body.innerHTML;
}

if (import.meta.main) {
  try {
    const sitemap = await Deno.readTextFile("sitemap.xml");
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls: string[] = [];

    while ((match = regex.exec(sitemap)) !== null) {
      urls.push(match[1]);
    }

    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
    });

    // Default removals if they somehow survive pre-cleaning
    turndownService.remove([
      "script",
      "style",
      "nav",
      "footer",
      "form",
      "aside",
      "iframe",
      "noscript",
      "button",
      "svg",
    ]);

    // Ensure documents directory exists
    const DOCS_DIR = "documents";
    try {
      await Deno.remove(DOCS_DIR, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.NotFound)) {
        throw error;
      }
    }
    await Deno.mkdir(DOCS_DIR, { recursive: true });

    // Limit concurrency to avoid overwhelming the server or getting blocked
    for (const url of urls) {
      try {
        console.log(`Fetching ${url}...`);
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`Failed to fetch ${url}: ${response.statusText}`);
          continue;
        }
        const html = await response.text();

        // Extract title before cleaning
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : "Untitled";

        const cleanedHtml = cleanHtml(html, url);
        const markdown = turndownService.turndown(cleanedHtml);

        // Mirror URL structure in DOCS_DIR
        const urlObj = new URL(url);
        let pathName = urlObj.pathname;
        if (pathName.endsWith("/")) {
          pathName += "index";
        } else if (!pathName.includes(".")) {
          // If no extension, treat as directory with index
          pathName += "/index";
        }

        // Ensure pathName doesn't start with / for join
        const relativePath = pathName.startsWith("/")
          ? pathName.slice(1)
          : pathName;
        const filepath = join(DOCS_DIR, `${relativePath}.md`);

        // Ensure parent directory exists
        await Deno.mkdir(dirname(filepath), { recursive: true });

        const frontmatter = [
          "---",
          `title: "${title.replace(/"/g, '\\"')}"`,
          `url: ${url}`,
          `scraped_at: ${new Date().toISOString()}`,
          "---",
          "",
          "",
        ].join("\n");

        await Deno.writeTextFile(filepath, frontmatter + markdown);
        console.log(`Saved to ${filepath}`);
      } catch (err) {
        console.error(`Error processing ${url}:`, err);
      }
    }
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("sitemap.xml not found.");
    } else {
      console.error("Error reading sitemap.xml:", error);
    }
  }
}
