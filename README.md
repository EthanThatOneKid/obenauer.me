# obenauer.me

> "Itemize everything. Emails, notes, tasks—just triples in a graph."

This is the digital garden and research repository for [Alexander Obenauer](https://alexanderobenauer.com), deployed at [obenauer.etok.me](https://obenauer.etok.me). It serves as a living document of core philosophies—Agency, Malleability, Augmentation, and the Itemized OS—built as a networked graph of concepts.

The site is powered by [Quartz v4](https://quartz.jzhao.xyz/).

## Core Concepts

- **[[item|Itemization]]**: Breaking down digital silos into atomic, interrelated units.
- **[[graph|The Graph]]**: Moving beyond hierarchical folders into a fluid web of triples.
- **[[sovereignty|Sovereignty]]**: Architecting personal computing environments that prioritize human agency.
- **[[localfirst|Local-first]]**: Building tools that are fast, private, and owned by the user.

## Getting Started

1.  **Install dependencies**: `npm install`
2.  **Start the development server**: `npm run start`

## Scripts

- `npm run start`: Build and serve the site locally with hot reloading.
- `npm run build`: Build the production site.
- `npm run check`: Run TypeScript type checking and Prettier linting.
- `npm run format`: Format the codebase using Prettier.

## Data & Intelligence Workflow

This project includes a specialized `data` workspace for content processing, scraping, and AI-assisted synthesis.

- `npm run scrape`: Scrape content from external research sources.
- `npm run generate`: Process data and generate concept pages.
- `npm run chat`: Interactive CLI for data management and research tasks.

Commands in the `data` workspace use environment variables defined in the root `.env` file.

## License

This project is licensed under the MIT License.
