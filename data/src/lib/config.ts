import { google } from "@ai-sdk/google"
import path from "node:path"

export const STORE_DISPLAY_NAME = "Alexander Obenauer Website"
export const STORE_NAME = "fileSearchStores/alexander-obenauer-website-ifief78chjms"
export const DATA_DIR = path.resolve(process.cwd(), "sources")
export const CONCEPTS_DIR = path.resolve(process.cwd(), "../content") // concepts are now at the root of content/
export const MODEL_NAME = "gemini-3.1-flash-lite-preview"
export const RSS_URL = "https://alexanderobenauer.com/assets/feed/rss.xml"
export const SITEMAP_PATH = path.resolve(process.cwd(), "sitemap.xml")

export const googleModel = google(MODEL_NAME)
