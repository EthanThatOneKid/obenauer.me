---
title: "LN 014: The Graph OS"
url: https://alexanderobenauer.com/labnotes/014/
scraped_at: 2026-03-06T21:06:01.053Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 014

08•21•2021

# The Graph OS

A concept that has been gaining traction in recent years is the notes graph: a
way to write many discrete notes that are deeply linked to one another. This
lets you to grow your notes graph over time, and traverse its contents by the
many links and backlinks embedded within. Some notes graphs have even been
published by their authors, so it’s easy to show you an example: here’s
[Andy Matuschak’s notes graph](https://notes.andymatuschak.org/About_these_notes).

The application I’ve used to take notes this way is
[Obsidian](https://obsidian.md), which produces a map of all the notes in my
graph (though I’ve found this to be more interesting to look at than useful):

![Map of many nodes](/assets/imgs/labnotes/LN014.1.jpg)

Each node is one of my notes. At this scale, lines between the nodes are not
visible, but each node is connected to all of its links and backlinks, and
located near them, forming little neighborhoods of different thinking.

With all the fervor lately around notes graphs, I can’t help but wonder what it
would be like if the entire operating system were to work this way. What if
every individual digital thing could be linked or backlinked in your overall
digital graph?

You can see how this framing may intersect heavily with the itemized operating
system concept in [my lab notes](https://alexanderobenauer.com/labnotes/000/).

In the itemized paradigm, with many deeply embedded references, you end up with
an overall items graph — which becomes a distinct concept as it grows. Let’s
consider the Graph OS.

In the Graph OS, all of your things are within your system as nodes, or items,
within your graph. Emails, calendar events, articles, web pages, podcast
episodes, to do lists as well as the to dos inside them; everything. And each
thing may have references to, or be referenced by, any other thing. What is the
net effect of this arrangement?

Though it would be difficult to identify the biggest benefits looking at it from
our understanding of today’s operating systems, we can start to identify some
trailheads to point us in the right direction.

In my work, I receive messages from customers in many different places: email,
Slack, public social posts, private messages on Twitter, and so forth. Today,
when I capture a feature request or bug report, I also add details around who
sent it in and where that message is, so that I can follow up with questions
whenever I’m working on it. This is, of course, prone to some problems, and is
needlessly cumbersome.

In the Graph OS, I can simply point a reference specifically to that message,
wherever it is, from my to do item. Or, better yet, I can use
[transclusions](https://en.wikipedia.org/wiki/Transclusion), much like we saw in
my lab notes on
[Universal data portability](https://alexanderobenauer.com/labnotes/002/) and
[Universal reference containers](https://alexanderobenauer.com/labnotes/003/): I
might highlight the pertinent piece of the message, and write my to do, which
now includes that piece of the message embedded within it. But this isn’t a
copy-and-paste, nor is it a screenshot; the embedded text from the message is
itself a reference to the full conversation, which I can navigate to whenever I
need.

Here’s a screenshot of an example transclusion implementation by Toby Shorin
that
[you can see live here](https://subpixel.space/entries/open-transclude/#tutorial-start):

[](https://subpixel.space/entries/open-transclude/#tutorial-start)

[![Piece of an article transcluded in another](/assets/imgs/labnotes/LN014.2.jpg)](https://subpixel.space/entries/open-transclude/#tutorial-start)

You could do the same thing with any of the items you use: you might reference
an email from a calendar event, or transclude an insightful passage from an
article in a note.

Further, the Graph OS could automatically save metadata on our things, much like
EXIF data on photographs, to help embed each thing we work on within our graph
for expanded recall. For example, when we take a quick note, it might capture as
metadata what event from our calendar we were presently attending, the people we
were with, or what our location was. These little details add another layer to
the overall graph connected by the references you intentionally place among your
things.

As your graph grows, you start to find your things by searching _and_ browsing:
rather than having to navigate a system of files-and-folders, where there is
only one predefined path to get to each thing, there are many inroads that will
take you to something you’re looking for. You can navigate to a desired item
however you’re thinking about it at the present moment, or based on what other
item(s) you already have open.

What’s most freeing, for me, is that this concept means you aren’t tied to
having something stored in one location: if I receive an email that addresses
two separate projects, I can transclude the right pieces within the right
projects in my graph. The concept offers ultimate freedom in how you organize
all of your digital things, letting you reflect your thinking across your entire
personal computing domain.

Your graph would grow over time with things you’ve created, things others have
sent you, and things that you’ve found as you explore. It would connect thoughts
with resources, assets with tasks, tasks with the thoughts or conversations they
were provoked by, and so on.

Then you could look at your map like the one we saw before, but not just of
notes; of all the things in your digital domain. You could explore your entire
personal computing environment through the links and backlinks in your graph,
across email conversations, calendar events, notes, tasks, dates, contacts,
webpages, PDFs, articles, design files… it would all be within your graph.

This thinking is early, and as I mentioned the biggest benefits are likely
unknown to us at this point, since our imaginations are mostly limited to the
benefits of the next few steps towards this concept from where we happen to be
today.

But it is a concept that warrants further exploration. Although I’ve begun
working on a demo of such a system, it is so expansive it might take some time
to make it presentation-worthy.

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/status/1428776093759287299).

---

[« Previous: LN 013](/labnotes/013)

[TOC](/labnotes/000)

[Next: LN 015 »](/labnotes/015)

---
