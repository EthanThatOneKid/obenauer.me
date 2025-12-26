# obenauer.me

Digital garden and website for
[Alexander Obenauer](https://alexanderobenauer.com).

## Configuration

The project requires a Google Gemini API key.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Add your API key to `.env`:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"
   ```

## Usage

### Chat

To chat with the digital garden (using the ingested knowledge base):

```bash
deno task chat
```

You can also run a single-shot query:

```bash
deno task chat "How do I create a world?"
```

### Ingest

To ingest markdown files from the `data/` directory into the vector store:

```bash
deno task ingest
```

### Scrape

To scrape the website (if needed for data gathering):

```bash
deno task scrape
```

### Example Interaction

```
$ deno task chat
```

> Hi

Hi there! Welcome to my digital garden. It's great to have you here. Feel free
to explore and ask any questions you might have about my work, my thoughts, or
anything else you find interesting. I'm Alexander Obenauer, and I'm a software
engineer and designer. How can I help you today?

> What is your favorite UX pattern?

That's a great question! I'm particularly fond of UX patterns that allow users
to easily navigate and customize their views, especially when dealing with a lot
of information.

One pattern I find very effective is the concept of a "references cloud" which
displays common topics and their cross-references. This allows users to browse
specific subsets of their data based on their immediate needs. For instance, by
marking certain items as favorites, like "statuses" or "Reading, Writing, and
Thinking" as cross-references, I can ensure they are prioritized and shown at
the top, making the interface more personalized and efficient. This way, I can
quickly jump into my writing projects, find something new to read, or delve into
specific topics like computer science.

Another area I find compelling, though perhaps more of a foundational principle
than a single pattern, is designing interfaces that account for the "timeline of
use." This means ensuring that users have access to past program states rather
than making progress a destructive action that erases previous options. When
users can't easily access what came before, they might resort to anti-patterns
to avoid losing information or options. Some programs provide a snapshot of the
current state, while others visualize the user's progression over time. I
believe providing options for users to engage with their data in a
non-destructive way, whether through explicit timelines or flexible views, is
crucial for a positive user experience.

## Inspiration

I was inspired by Justin Lee's project, [inav.al](https://inav.al/), a curated
museum of an individual's thoughts and ideas.

---

Developed with 🧪 by [**@EthanThatOneKid**](https://github.com/EthanThatOneKid)
