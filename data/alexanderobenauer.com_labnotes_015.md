LN 015: Cross-references & References cloud

[

Alexander Obenauer
==================

](/)

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 015

09•05•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/014) [Next](/labnotes/exp001) [Latest](/labnotes/040)

* * *

[

LN 040

The venerable hyperlink

](/labnotes/040)[

LN 039

Notes on time

](/labnotes/039)[

LN 038

Semantic zoom

](/labnotes/038)[

LN 037

Gestural view construction

](/labnotes/037)[

LN 036

Free and easy organizations and associations

](/labnotes/036)[

LN 035

The Messy Desktop

](/labnotes/035)[

LN 034

Live items & Contextual notifications

](/labnotes/034)[

LN 033

Swappable reference views

](/labnotes/033)[

LN 032

System injections

](/labnotes/032)[

LN 031

Fluid workspaces

](/labnotes/031)[

LN 030

Foldable views

](/labnotes/030)[

LN 029

Experimenting with the item as the core primitive

](/labnotes/029)[

LN 028

Designing systems for computer literacy and evolvability

](/labnotes/028)[

LN 027

Personal Computing Network & Devices

](/labnotes/027)[

LN 026

Internet Modules

](/labnotes/026)[

LN 025

Publishing items

](/labnotes/025)[

LN 024

Mutations & Item change logs

](/labnotes/024)[

LN 023

Higher-level primitives

](/labnotes/023)[

LN 022

Undo Actions

](/labnotes/022)[

LN 021

Automations

](/labnotes/021)[

LN 020

Item Actions

](/labnotes/020)[

LN 019

Notifications

](/labnotes/019)[

LN 018

Services & Item Drives

](/labnotes/018)[

LN 017

Today & Daily summary

](/labnotes/017)[

LN 016

Calendar views

](/labnotes/016)[

EXPERIMENT 001

Cross-reference Navigation in Obsidian

](/labnotes/exp001)[

LN 015

Cross-references & References cloud

](/labnotes/015)[

LN 014

The Graph OS

](/labnotes/014)[

LN 013

Why is our thinking on computers so restrained?

](/labnotes/013)[

LN 012

References box & Topics

](/labnotes/012)[

LN 011

General purpose personal computing software

](/labnotes/011)[

LN 010

User-created application and system views

](/labnotes/010)[

LN 009

User-created item views

](/labnotes/009)[

LN 008

Unified views

](/labnotes/008)[

LN 007

Atomized apps

](/labnotes/007)[

LN 006

Swappable views

](/labnotes/006)[

LN 005

Associated items

](/labnotes/005)[

LN 004

Browsing contexts & recent paths

](/labnotes/004)[

LN 003

Universal reference containers

](/labnotes/003)[

LN 002

Universal data portability

](/labnotes/002)[

LN 001

Composing application interfaces

](/labnotes/001)[

LN 000

The Lab Notes

](/labnotes/000)

Cross-references & References cloud
===================================

In [LN 012](/labnotes/012), we explored how references might be used to organize all of our digital things. And in [LN 014](/labnotes/014), we explored how these items’ references to one another, taken together, form one large digital items graph that contains everything within our personal computing domain.

Given the difficulty discussed in [LN 013](/labnotes/013) of representing our things in a strict files-and-folders hierarchy, the graph gives us newfound freedom to represent our digital things in the various ways we think about them.

Our system can make use of the rich data it has on how all of our things connect to one another. Here are some initial thoughts.



Let’s say we’ve added items into our graph with references from:

*   An item for type, e.g.: Book, Website, Article, etc.
*   An item for status: Up Next, In Progress, Done
*   An item for topic, e.g.: Personal Computing, Guitar Making, etc.
*   An item for activity, e.g.: Reading, Writing, etc.
*   An item for person or author
*   …and so on.

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

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

* * *

[« Previous: LN 014](/labnotes/014)

[TOC](/labnotes/000)

[Next: EXP 001 »](/labnotes/exp001)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)