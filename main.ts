
if (import.meta.main) {
  try {
    const sitemap = await Deno.readTextFile("sitemap.xml");
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;

    while ((match = regex.exec(sitemap)) !== null) {
      console.log(match[1]);
    }
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("sitemap.xml not found.");
    } else {
      console.error("Error reading sitemap.xml:", error);
    }
  }
}
