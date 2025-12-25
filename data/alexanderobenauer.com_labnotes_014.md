LN 014: The Graph OS

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

LN 014

08•21•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/013) [Next](/labnotes/015) [Latest](/labnotes/040)

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

The Graph OS
============

A concept that has been gaining traction in recent years is the notes graph: a way to write many discrete notes that are deeply linked to one another. This lets you to grow your notes graph over time, and traverse its contents by the many links and backlinks embedded within. Some notes graphs have even been published by their authors, so it’s easy to show you an example: here’s [Andy Matuschak’s notes graph](https://notes.andymatuschak.org/About_these_notes).

The application I’ve used to take notes this way is [Obsidian](https://obsidian.md), which produces a map of all the notes in my graph (though I’ve found this to be more interesting to look at than useful):

![Map of many nodes](/assets/imgs/labnotes/LN014.1.jpg)

Each node is one of my notes. At this scale, lines between the nodes are not visible, but each node is connected to all of its links and backlinks, and located near them, forming little neighborhoods of different thinking.



With all the fervor lately around notes graphs, I can’t help but wonder what it would be like if the entire operating system were to work this way. What if every individual digital thing could be linked or backlinked in your overall digital graph?

You can see how this framing may intersect heavily with the itemized operating system concept in [my lab notes](https://alexanderobenauer.com/labnotes/000/).

In the itemized paradigm, with many deeply embedded references, you end up with an overall items graph — which becomes a distinct concept as it grows. Let’s consider the Graph OS.



In the Graph OS, all of your things are within your system as nodes, or items, within your graph. Emails, calendar events, articles, web pages, podcast episodes, to do lists as well as the to dos inside them; everything. And each thing may have references to, or be referenced by, any other thing. What is the net effect of this arrangement?

Though it would be difficult to identify the biggest benefits looking at it from our understanding of today’s operating systems, we can start to identify some trailheads to point us in the right direction.

In my work, I receive messages from customers in many different places: email, Slack, public social posts, private messages on Twitter, and so forth. Today, when I capture a feature request or bug report, I also add details around who sent it in and where that message is, so that I can follow up with questions whenever I’m working on it. This is, of course, prone to some problems, and is needlessly cumbersome.

In the Graph OS, I can simply point a reference specifically to that message, wherever it is, from my to do item. Or, better yet, I can use [transclusions](https://en.wikipedia.org/wiki/Transclusion), much like we saw in my lab notes on [Universal data portability](https://alexanderobenauer.com/labnotes/002/) and [Universal reference containers](https://alexanderobenauer.com/labnotes/003/): I might highlight the pertinent piece of the message, and write my to do, which now includes that piece of the message embedded within it. But this isn’t a copy-and-paste, nor is it a screenshot; the embedded text from the message is itself a reference to the full conversation, which I can navigate to whenever I need.

Here’s a screenshot of an example transclusion implementation by Toby Shorin that [you can see live here](https://subpixel.space/entries/open-transclude/#tutorial-start):

[](https://subpixel.space/entries/open-transclude/#tutorial-start)

[![Piece of an article transcluded in another](/assets/imgs/labnotes/LN014.2.jpg)](https://subpixel.space/entries/open-transclude/#tutorial-start)

You could do the same thing with any of the items you use: you might reference an email from a calendar event, or transclude an insightful passage from an article in a note.

Further, the Graph OS could automatically save metadata on our things, much like EXIF data on photographs, to help embed each thing we work on within our graph for expanded recall. For example, when we take a quick note, it might capture as metadata what event from our calendar we were presently attending, the people we were with, or what our location was. These little details add another layer to the overall graph connected by the references you intentionally place among your things.

As your graph grows, you start to find your things by searching _and_ browsing: rather than having to navigate a system of files-and-folders, where there is only one predefined path to get to each thing, there are many inroads that will take you to something you’re looking for. You can navigate to a desired item however you’re thinking about it at the present moment, or based on what other item(s) you already have open.

What’s most freeing, for me, is that this concept means you aren’t tied to having something stored in one location: if I receive an email that addresses two separate projects, I can transclude the right pieces within the right projects in my graph. The concept offers ultimate freedom in how you organize all of your digital things, letting you reflect your thinking across your entire personal computing domain.

Your graph would grow over time with things you’ve created, things others have sent you, and things that you’ve found as you explore. It would connect thoughts with resources, assets with tasks, tasks with the thoughts or conversations they were provoked by, and so on.

Then you could look at your map like the one we saw before, but not just of notes; of all the things in your digital domain. You could explore your entire personal computing environment through the links and backlinks in your graph, across email conversations, calendar events, notes, tasks, dates, contacts, webpages, PDFs, articles, design files… it would all be within your graph.

This thinking is early, and as I mentioned the biggest benefits are likely unknown to us at this point, since our imaginations are mostly limited to the benefits of the next few steps towards this concept from where we happen to be today.

But it is a concept that warrants further exploration. Although I’ve begun working on a demo of such a system, it is so expansive it might take some time to make it presentation-worthy.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1428776093759287299).

* * *

[« Previous: LN 013](/labnotes/013)

[TOC](/labnotes/000)

[Next: LN 015 »](/labnotes/015)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)