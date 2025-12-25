import TurndownService from "npm:turndown";

if (import.meta.main) {
  try {
    const sitemap = await Deno.readTextFile("sitemap.xml");
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls: string[] = [];

    while ((match = regex.exec(sitemap)) !== null) {
      urls.push(match[1]);
    }

    const turndownService = new TurndownService();

    // Ensure data directory exists
    await Deno.mkdir("data", { recursive: true });

    // Limit concurrency to avoid overwhelming the server or getting blocked
    // For now, doing it sequentially as it's safer and likely fast enough for < 100 pages
    for (const url of urls) {
      try {
        console.log(`Fetching ${url}...`);
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`Failed to fetch ${url}: ${response.statusText}`);
          continue;
        }
        const html = await response.text();
        const markdown = turndownService.turndown(html);

        // Generate filename from URL
        let filename = url.replace("https://", "").replace("http://", "");
        // Remove trailing slash if present
        if (filename.endsWith("/")) {
            filename = filename.slice(0, -1);
        }
        // Replace slashes with underscores or keep directory structure?
        // User asked for "a new directory, data which contains all of the scraped markdown files"
        // Flattening is safer to avoid creating deep directory structures.
        filename = filename.replace(/\//g, "_");

        // If filename is empty (root), call it index
        if (filename === "alexanderobenauer.com") {
             filename = "alexanderobenauer.com_index";
        }

        const filepath = `data/${filename}.md`;
        await Deno.writeTextFile(filepath, markdown);
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
