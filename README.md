# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Getting Started

1.  **Install dependencies**: `npm install`
2.  **Start the development server**: `npm run start`

The scripts use `npx quartz` to ensure the binary is correctly resolved.

## Scripts

- `npm run start`: Build and serve the site locally with hot reloading.
- `npm run docs`: Build and serve the site from the `docs` directory.
- `npm run check`: Run TypeScript type checking and Prettier linting.
- `npm run format`: Format the codebase using Prettier.
- `npm run test`: Run automated tests using `tsx`.

## Data Workflow

The project contains a `data` workspace for content management and processing.

- `npm run scrape`: Scrape content from external sources (configured in `data/src/scrape.ts`).
- `npm run generate`: Process scraped data and generate content (configured in `data/src/generate.ts`).
- `npm run chat`: Interactive CLI for data tasks (configured in `data/src/chat.ts`).

Commands in the `data` workspace use environment variables from the root `.env` file.

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
