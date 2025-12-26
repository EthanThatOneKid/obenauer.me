import { GoogleGenAI } from "@google/genai";

const storeDisplayName = "Alexander Obenauer Website";

const client = new GoogleGenAI({
  apiKey: Deno.env.get("GOOGLE_GENERATIVE_AI_API_KEY"),
});

export const fileSearchStore = await client.fileSearchStores.get({
  name: storeDisplayName,
});
