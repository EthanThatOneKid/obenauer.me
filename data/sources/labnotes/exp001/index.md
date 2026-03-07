---
title: "EXPERIMENT 001: Cross-reference Navigation in Obsidian"
url: https://alexanderobenauer.com/labnotes/exp001/
scraped_at: 2026-03-06T21:06:01.716Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

EXPERIMENT 001

09•12•2021

# Cross-reference Navigation in Obsidian

In [LN 015](/labnotes/015), we explored the concept of cross-reference
navigation: a way to browse your things by the common connections found among
the items stored in your personal computing graph.

I’ve assembled an early demo of this concept that you can use as a plugin for
[Obsidian](https://obsidian.md).

It works on the notes in an Obsidian vault, using tags as the method of
organization. It surfaces commonly cross-referenced tags as you browse through
your things, and it makes great use of nested tags (e.g. `#status/inprogress`).

Here’s how it works:

**Plugin demo**

Watch this demo of the plugin, which lets you navigate your notes in Obsidian by
your most common tags and cross-references
([YouTube](https://www.youtube.com/watch?v=sm5HXFNN8jE))

With the tag structure I use in my personal notes vault, this plugin effectively
gives me a handful of useful interfaces. Some examples:

- “In Progress” shows me my current workspace: all of the things I’m learning
  and working on right now.
- “Up Next” is filled with new and interesting things to explore.
- “Done” is a nicely organized archive.
- “Reading” brings up things I’ve read, things I’m in the middle of, and what
  I’d like to read next.
- “Writing” brings up the things I’ve written recently, am currently writing,
  and might work on next.

And of course, I can dive deeper from there: I might pull up just the things I’m
reading in the topic of music, or specifically the things I’m currently writing
on personal computing, or the things I’d like to read next by Doug Engelbart.

If you want to try out this plugin, be aware: It is early, so I’d recommend
using it with a sample vault, such as the one I’ve published. It may be slow in
vaults with many notes and tags, and there will be bugs!

Here’s how to try it out:

1. If you don’t have it yet, download and install
   [Obsidian](https://obsidian.md).
2. Download
   [the most recent release of the plugin](https://github.com/alexobenauer/obsidian-tag-navigator/tags),
   and unzip it.
3. Move the unzipped directory into your vault’s `.obsidian/plugins` directory.
4. In Obsidian’s settings window, open “Community plugins,” hit the refresh
   button on “Installed plugins,” and enable “Cross-reference Navigation.”
5. Open the command palette (press CMD + P), and search for the command
   “Cross-reference Navigation: Open Cross-references View”. Press enter when
   it’s highlighted.

If you want to use it with a sample vault, I’ve published the one from the demo
video, and it already has the plugin installed.

1. If you don’t have it yet, download and install
   [Obsidian](https://obsidian.md).
2. Download [the sample vault](/assets/files/exp001/Sample_Vault.zip), and unzip
   it. Note: this vault features an old version of the plugin.
3. Open Obsidian, click the vault icon in the bottom left of Obsidian’s window
   (“Open another vault”), then select the unzipped sample vault directory.
4. Click “Turn off safe mode” if asked, and close the settings window if it’s
   open.
5. Open the command palette (press CMD + P), and search for the command
   “Cross-reference Navigation: Open Cross-references View”. Press enter when
   it’s highlighted.

I’ve published
[the full source on GitHub](https://github.com/alexobenauer/obsidian-tag-navigator/).

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 015](/labnotes/015)

[TOC](/labnotes/000)

[Next: LN 016 »](/labnotes/016)

---
