EXPERIMENT 001: Cross-reference Navigation in Obsidian

[

Alexander Obenauer
==================

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

EXPERIMENT 001

09•12•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/015) [Next](/labnotes/016) [Latest](/labnotes/040)

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

Cross-reference Navigation in Obsidian
======================================

In [LN 015](/labnotes/015), we explored the concept of cross-reference navigation: a way to browse your things by the common connections found among the items stored in your personal computing graph.

I’ve assembled an early demo of this concept that you can use as a plugin for [Obsidian](https://obsidian.md).

It works on the notes in an Obsidian vault, using tags as the method of organization. It surfaces commonly cross-referenced tags as you browse through your things, and it makes great use of nested tags (e.g. `#status/inprogress`).

Here’s how it works:

**Plugin demo**

Watch this demo of the plugin, which lets you navigate your notes in Obsidian by your most common tags and cross-references ([YouTube](https://www.youtube.com/watch?v=sm5HXFNN8jE))



With the tag structure I use in my personal notes vault, this plugin effectively gives me a handful of useful interfaces. Some examples:

*   “In Progress” shows me my current workspace: all of the things I’m learning and working on right now.
*   “Up Next” is filled with new and interesting things to explore.
*   “Done” is a nicely organized archive.
*   “Reading” brings up things I’ve read, things I’m in the middle of, and what I’d like to read next.
*   “Writing” brings up the things I’ve written recently, am currently writing, and might work on next.

And of course, I can dive deeper from there: I might pull up just the things I’m reading in the topic of music, or specifically the things I’m currently writing on personal computing, or the things I’d like to read next by Doug Engelbart.



If you want to try out this plugin, be aware: It is early, so I’d recommend using it with a sample vault, such as the one I’ve published. It may be slow in vaults with many notes and tags, and there will be bugs!

Here’s how to try it out:

1.  If you don’t have it yet, download and install [Obsidian](https://obsidian.md).
2.  Download [the most recent release of the plugin](https://github.com/alexobenauer/obsidian-tag-navigator/tags), and unzip it.
3.  Move the unzipped directory into your vault’s `.obsidian/plugins` directory.
4.  In Obsidian’s settings window, open “Community plugins,” hit the refresh button on “Installed plugins,” and enable “Cross-reference Navigation.”
5.  Open the command palette (press CMD + P), and search for the command “Cross-reference Navigation: Open Cross-references View”. Press enter when it’s highlighted.

If you want to use it with a sample vault, I’ve published the one from the demo video, and it already has the plugin installed.

1.  If you don’t have it yet, download and install [Obsidian](https://obsidian.md).
2.  Download [the sample vault](/assets/files/exp001/Sample_Vault.zip), and unzip it. Note: this vault features an old version of the plugin.
3.  Open Obsidian, click the vault icon in the bottom left of Obsidian’s window (“Open another vault”), then select the unzipped sample vault directory.
4.  Click “Turn off safe mode” if asked, and close the settings window if it’s open.
5.  Open the command palette (press CMD + P), and search for the command “Cross-reference Navigation: Open Cross-references View”. Press enter when it’s highlighted.



I’ve published [the full source on GitHub](https://github.com/alexobenauer/obsidian-tag-navigator/).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 015](/labnotes/015)

[TOC](/labnotes/000)

[Next: LN 016 »](/labnotes/016)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)