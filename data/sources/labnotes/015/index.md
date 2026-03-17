---
title: "LN 015: Cross-references &amp; References cloud"
url: https://alexanderobenauer.com/labnotes/015/
scraped_at: 2026-03-06T21:06:01.074Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 015

09•05•2021

# Cross-references & References cloud

In [LN 012](/labnotes/012), we explored how references might be used to organize all of our digital things. And in [LN 014](/labnotes/014), we explored how these items’ references to one another, taken together, form one large digital items graph that contains everything within our personal computing domain.

Given the difficulty discussed in [LN 013](/labnotes/013) of representing our things in a strict files-and-folders hierarchy, the graph gives us newfound freedom to represent our digital things in the various ways we think about them.

Our system can make use of the rich data it has on how all of our things connect to one another. Here are some initial thoughts.

Let’s say we’ve added items into our graph with references from:

- An item for type, e.g.: Book, Website, Article, etc.
- An item for status: Up Next, In Progress, Done
- An item for topic, e.g.: Personal Computing, Guitar Making, etc.
- An item for activity, e.g.: Reading, Writing, etc.
- An item for person or author
- …and so on.

This means within our Book item, we have references to many items that are also referenced within items representing their different statuses and topics. Similarly, our Up Next item would have references to many items with various types and topics.

Our system knows this, and can surface the most common cross-references automatically. It can do this without us setting up these complex relationships; we only set up each individual item’s references through the course of our work, as seen in [LN 012: References box & Topics](/labnotes/012). Our system can adapt more useful views according to the references we use.

For example, rather than seeing one long list of everything within our graph that represents a book, we might have a layout within our Book item that allows us to view common cross-references as columns. We might have a set of columns for the status of each book, and another set of columns for our frequently explored topics.

![A view of books items in separate columns for each status.](/assets/imgs/labnotes/LN015.1.png)

The columns for status could even allow us to drag and drop items, automatically adjusting the references on dragged items to reflect their new status.

Another view could surface cross-references one level deeper. So, rather than seeing specific items listed under a status, we might see the topics most commonly found among the items in that status, allowing us to directly click into more specific views from one higher-level overview.

The system can figure out a lot on its own, based on how frequently I use some references. But by being able to mark some items as favorites among the references, I can ensure the interface I’d like is presented. In this example, I’ve marked statuses as favorites, so that they are shown at the top. I’ve also marked Reading, Writing, and Thinking as favorite cross-references.

![The references cloud, showing the most common topics and their most common cross-references.](/assets/imgs/labnotes/LN015.3.png)

This forms a “references cloud” in our system, showing the most common topics and their most common cross-references. We can browse into specific subsets of our data according to our needs at any moment.

For example, looking at this screen, I can see that in Up Next, I have some things I plan to read next, some writing projects queued up, and so forth. If I’m digging into my work for the day, I can jump into what writing I have in progress. Or if I’m looking for something new to read, I can click to directly jump into what books I have listed as up next. Or further down, I can click to directly jump into only the books specific to computer science.

If I go to In Progress, the references cloud becomes a workspace for what I’m currently working on.

![A references cloud of things in In Progress, with columns containing deeper cross-references.](/assets/imgs/labnotes/LN015.4.png)

Of if I go to Up Next, the items view becomes a space filled with the things I’d like to explore next.

![Viewing the items in Up Next in columns by type - reading, writing, and thinking.](/assets/imgs/labnotes/LN015.5.png)

My system adapts a number of interfaces tailored to my workflow by reacting to the references I define among my items.

I’m working on a small plugin for [Obsidian](https://obsidian.md) that lets anyone use this concept. Naturally, it’s only for notes (rather than for all items in one’s personal computing domain), but it’s an interesting starting point to see how this lab note’s thinking unfolds in expanded practice.

If you’re interested in trying it out, stay tuned – I’ll let you know when I’ve published it.

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 014](/labnotes/014)

[TOC](/labnotes/000)

[Next: EXP 001 »](/labnotes/exp001)

---
