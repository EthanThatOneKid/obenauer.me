/**
 * Synchronizes sitemap.xml with the RSS feed.
 * Fetches the RSS feed, extracts all links, merges them with the existing sitemap,
 * normalizes trailing slashes, and sorts the sitemap.
 */

const RSS_URL = "https://alexanderobenauer.com/assets/feed/rss.xml";
const SITEMAP_PATH = "sitemap.xml";

async function sync() {
  console.log(`Fetching RSS feed from ${RSS_URL}...`);
  const rssRes = await fetch(RSS_URL);
  if (!rssRes.ok) {
    throw new Error(`Failed to fetch RSS: ${rssRes.statusText}`);
  }
  const rssText = await rssRes.text();

  // Extract all links from RSS (both <link> and <guid>)
  const linkRegex =
    /<(?:link|guid)[^>]*>(https:\/\/alexanderobenauer\.com\/[^<]+)<\/(?:link|guid)>/g;
  const rssLinks = [...rssText.matchAll(linkRegex)].map((m) => m[1]);
  console.log(`Found ${rssLinks.length} links in RSS.`);

  // Load existing sitemap
  let sitemapLinks: string[] = [];
  try {
    const sitemapText = await Deno.readTextFile(SITEMAP_PATH);
    const sitemapRegex =
      /<loc>(https:\/\/alexanderobenauer\.com\/[^<]+)<\/loc>/g;
    sitemapLinks = [...sitemapText.matchAll(sitemapRegex)].map((m) => m[1]);
    console.log(`Loaded ${sitemapLinks.length} links from existing sitemap.`);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.log("No existing sitemap.xml found. Creating a new one.");
    } else {
      throw error;
    }
  }

  // Merge and normalize
  const allLinks = [...rssLinks, ...sitemapLinks];
  const normalizedLinks = allLinks.map((url) => {
    // If it mentions a file extension, don't add a trailing slash
    if (url.match(/\.(xml|png|jpg|pdf|txt|json|webmanifest|ico)$/)) {
      return url;
    }
    // Ensure trailing slash for directory-style URLs
    return url.endsWith("/") ? url : url + "/";
  });

  // Deduplicate and sort
  const uniqueLinks = [...new Set(normalizedLinks)].sort();
  console.log(`Final sitemap will have ${uniqueLinks.length} unique URLs.`);

  // Generate new sitemap XML
  let newSitemap = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n';
  newSitemap +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const url of uniqueLinks) {
    newSitemap += `  <url>\n    <loc>${url}</loc>\n  </url>\n`;
  }
  newSitemap += "</urlset>\n";

  // Write back to sitemap.xml
  await Deno.writeTextFile(SITEMAP_PATH, newSitemap);
  console.log(`Successfully updated ${SITEMAP_PATH}.`);
}

if (import.meta.main) {
  try {
    await sync();
  } catch (error) {
    console.error("Error syncing sitemap:", error);
    Deno.exit(1);
  }
}
