# obenauer.me

> "Itemize everything. Emails, notes, tasks—triples in a graph."

This is the digital garden and research repository for
[Alexander Obenauer](https://alexanderobenauer.com), deployed at
[obenauer.etok.me](https://obenauer.etok.me). It serves as a living document of
core philosophies—Agency, Malleability, Augmentation, and the Itemized OS—and
functions as a networked graph of concepts.

The site is powered by [Quartz v4](https://quartz.jzhao.xyz/).

## Core concepts

- **[[item|Itemization]]**: Break down digital silos into atomic, interrelated
  units.
- **[[graph|The Graph]]**: Move beyond hierarchical folders into a fluid web of
  triples.
- **[[sovereignty|Sovereignty]]**: Architect personal computing environments
  that prioritize human agency.
- **[[localfirst|Local-first]]**: Build tools that are fast, private, and owned
  by the user.

## Getting started

1. **Install dependencies**: `npm install`
2. **Start the development server**: `npm run start`

## Scripts

- `npm run start`: Build and serve the site locally with hot reloading.
- `npm run build`: Build the production site.
- `npm run check`: Run TypeScript type checking and Prettier linting.
- `npm run format`: Format the codebase using Prettier.

## Data & intelligence workflow

This project provides a specialized `data` workspace for content processing,
scraping, and AI-assisted synthesis.

- `npm run generate`: Process sources and generate concept pages. This performs
  a full pipeline: syncing from RSS, scraping content, and generating the
  research graph.
- `npm run generate -- --reload`: Reset the pipeline and regenerate all concepts
  from scratch.
- `npm run chat`: Interactive CLI for data management and research tasks.

### Pipeline overview

```mermaid
graph TD
    subgraph Scraping_Phase["Phase 1: Scraping & Ingestion"]
        RSS["RSS Feed"] -->|syncSources| Queue["URL Queue (checkpoint.json)"]
        Queue -->|scrape| Scraper["Scraper (Turndown)"]
        Scraper -->|save| SourcesDir["Sources Directory"]
        SourcesDir -->|ingest| FileStore["Google AI File Store"]
    end

    subgraph Generation_Phase["Phase 2 & 3: AI Synthesis"]
        FileStore -->|getRootConcepts| Discovery["AI Discovery"]
        Discovery -->|populate| ConceptQueue["Concept Queue"]
        ConceptQueue -->|extractConceptNode| AIGen["AI Generation (Gemini)"]
        AIGen -->|writeConceptFile| ContentDir["Content Directory (.md)"]
        ContentDir -->|find related| ConceptQueue
        ContentDir -->|retroactive| Linker["Wikilinking Pass"]
    end

    classDef ai fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    class AIGen,Discovery,FileStore ai;
```

Commands in the `data` workspace use environment variables defined in the root
`.env` file.

## License

This project is licensed under the MIT License.
