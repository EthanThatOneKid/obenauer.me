---
title: "LN 040: The venerable hyperlink"
url: https://alexanderobenauer.com/labnotes/040/
scraped_at: 2026-03-06T21:06:01.693Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 040

12•30•2024

# The venerable hyperlink

Earlier this year, I published [OLLOS](/ollos/), an experiment in which all of the things in my digital life are organized into one long timeline. There’s an important benefit of this arrangement: things are naturally grouped with other things that were created, or that happened, around the same time. This implicit association matches one that runs deep in how we structure our memories and plans of things along the self-organizing dimension.

But quite often, things are associated with other things found elsewhere in the timeline. OLLOS has some ways of linking items to other items, regardless of the items’ types, sources, or placements on the timeline. One of the easiest ways to create a link is to “reply” to one or more items when creating a new one. Then these items would have links to one another, which would be exposed in both directions (on both the source and target items).

This made OLLOS more powerful in some interesting ways. Since the linking system is agnostic to items’ types and sources, new item types could be introduced and linked in with all other items. Anything you add to your system becomes an OS-level primitive you can use with anything else. There’s the basic examples: adding notes, reminders, or events to any other item, including each other. But it’s most interesting when this gets specific to the domains in which you live and work. You might introduce a spaced repetition reminder type, which could then be used in association with any of the other items in your system. Or maybe you need to create an index of the audio files you’ve worked on over the last several years. Maybe that index needs to include the projects you used each file with. In a system that supports links among items, this would be trivial. Being able to make your own OS-level primitives is an enticing aspect of an OS with deep links among all items.

Some systems that have enjoyed fairly wide use, covered later in this note, have made similar features available in personal computing over the decades. But for the most part, for all mainstream operating systems, this isn’t how our things are organized and accessed.

Since their invention in ancient Egypt, humanity has stored its recorded information and texts on scrolls: long sheets of parchment rolled up for easy storage, transportation, and safe-keeping. Over the course of centuries, we moved to the codex: many individual sheets of paper bound together. The latter allowed for random access to information within, given that an index was provided, though both of these formats largely featured long, linear blocks of text.

Hypertext, [coined by Ted Nelson and demonstrated in 1968 by Douglas Engelbart](https://www.historyofinformation.com/detail.php?id=830) during “The Mother of All Demos”, changed all that: now humanity’s information could be written in separate documents, and these documents could “link” to one another. We take the hyperlink for granted now, but this changed the form of humanity’s recorded information and texts from long, linear sequences to a graph, through which readers can take any path they choose. [\[1\]](#note1)

[When Tim Berners-Lee invented the World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web#History), he was keen on finding ways to make storage in linked graphs available to more people, over the tree-shaped filesystems of the day. With the World Wide Web, and its constituent inventions like Hypertext Markup Language (HTML) and Hypertext Transfer Protocol (HTTP), humanity’s information and text has taken a major transformation into a densely-linked graph.

But we largely don’t get this benefit in personal computing; we don’t or can’t store our stuff by linking personal information like contacts, dates, documents, etc. with the hyperlink as connective tissue holding together a graph, rather than a tree.

There are some lovely counter-examples. For decades, personal wikis have given people the ability to build out information graphs, and have enjoyed something of a cult following. Systems in this realm include [TiddlyWiki](https://en.wikipedia.org/wiki/TiddlyWiki), self-described as “a non-linear personal notebook”. More recently, notes graphs have become popular with their own cult following, with links and backlinks among written notes, and increasingly, other kinds of documents. Systems in this realm include [Obsidian](https://en.wikipedia.org/wiki/Obsidian_(software)), which we’ve discussed in [a previous lab note](/labnotes/014). Past systems often gestured at these ideas, sometimes with potency: Apple’s [HyperCard](https://en.wikipedia.org/wiki/HyperCard) featured cards in which users could add buttons which navigated to other cards. The functionality was there, but from my understanding 35 years on, the right affordances / ergonomics were not (of course, it’s important to note that HyperCard predates the World Wide Web, HTML, and so forth).

Little glimpses in modern OSs are almost always welcome surprises: the contact card you can open from a messages chat; the meeting link in a calendar event; or even simply linking to a webpage from an email, or a document hosted online. Most recently, Apple added reminders to the calendar: if you set a date or time on a reminder in the Reminders app, you’ll also see it in your calendar on the correct date or at the correct time, where you can mark it as complete without switching apps. When things are nicely integrated across apps, it often feels like magic — but only because we’ve structured operating systems in such a way that each individual integration across apps must be custom-built for each case. For an OS that supports deep linking of all its things, such integrations would be an inherent aspect of its design.

But for the most part, we have tree-shaped file systems, and in practice, many (if not most) of our things today aren’t even there; they’re locked up in a myriad of apps and cloud services.

Linking together versions across time is also poorly supported. When you do have versions, they’re often _somewhere else_ — a git repo’s commit history, copies of files with vaguely incrementing filenames, etc. Changelogs in sidebars à la Notion or Google Docs just barely scratch at the idea. [Time Machine](https://en.wikipedia.org/wiki/Time_Machine_(macOS)) is a separate app on macOS that lets you scrub through past versions of any folder or document down to fifteen-minute increments (though it has been pushed less in recent years, presumably in favor of storing files in iCloud and not really thinking about backups and versions).

I find myself wishing for the ability to link to specific, prior versions of items just like I’d link to any other item. [\[2\]](#note2)

[Alan Kay has talked about how](https://www.youtube.com/watch?v=PFc379hu--8) the personal computer should work like the Internet: lots of independent programs passing around messages. Similarly, I wish the interfaces on the OS were like the World Wide Web: riddled with tons of links. Everything has a URL or unique identifier, and anything can link to anything else.

The hyperlink fundamentally changed how we can think about, organize, and navigate lots of information, text, and media. It’s a shame we don’t get to use it more within our usual personal computing use cases on the modern OS!

## Notes

[\[1\]](#return1) This idea actually predates modern computers: in a 1945 essay for _The Atlantic_ titled “As We May Think”, Vannevar Bush describes an idea for a “memex”, with a mechanical implementation of linking separate texts together, inside a large desk. [\[Link\]](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/) [\[Return\]](#return1)

[\[2\]](#return2) OLLOS lightly gestured in this direction: Although you could change attributes of existing items (resulting in a little changelog on your timeline), OLLOS intentionally exposed no way to edit a note. Instead, I would reply to an existing note and write the new thoughts. This would result in a thread that I could open to travel back along prior versions or breadcrumbs of thought. [\[Return\]](#return2)

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 039](/labnotes/039)

[TOC](/labnotes/000)

---
