LN 002: Universal data portability

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

LN 002

01•16•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/001) [Next](/labnotes/003) [Latest](/labnotes/040)

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

Universal data portability
==========================

WIMP: Windows, icons, menus, pointer. This is the interface paradigm we’ve been accustomed to since personal computing began. It was initially developed at Xerox PARC in the 1970s and made popular with the introduction of the Macintosh in 1984.

The first item in the acronym, “windows,” is defined as such:

> A window runs a self-contained program, isolated from other programs that \[…\] run at the same time in other windows.
>
> _[From: Wikipedia](https://en.wikipedia.org/wiki/WIMP_\(computing\))_

In developing the concepts for the operating system of the future, my work unintentionally — yet regularly — upends this notion of “windows running self-contained programs”.



Our lives are filled with digital “things” that are important to us:

Notes, tasks, lists, articles, events, emails, reminders, bookmarks, images, and so on…

These things all relate to each other in different ways. Yet they remain siloed in their own respective apps (one for notes, one for events, and so on).

But what if these things could be pulled out of the “window” that contains them and be brought somewhere else? What if you could move data items, with views provided by their hosting applications, around system and application views? What if we could bring together a series of things that all relate, even if they are of different types, and are from different apps or windows? What if you could browse your things in one fluid interface, without regard for their differing data types?

This is the first major principle in the operating system of the future that I’ve been researching and designing: Universal data portability.



All digital things are universally movable throughout the system. They may begin within a hosting application — a podcast episode within a podcasts app, a single charge within a bank statement, a note within a journal — but they can be pulled wherever the user wants them.

When you pull an item into some other place, it is still rendered by its hosting application. Hosting applications provide the view components for rendering data items in different situations or sizes. It can be thought of much like a widget in today’s operating systems: the system defines what the data item is and what size it should take up, then it relies on the data item’s hosting application to provide the view component that renders it.

Any data item in your system could be used anywhere you wanted.

 Your browser does not support the video tag.

Consider: you could pull an episode of a podcast into the top of your note as you jot down thoughts and ideas while you listen. You could pause and play the episode from right within that note because it isn’t a _link_ to the podcast episode; it’s the episode itself, rendered by your podcast player of choice, within your note.

 Your browser does not support the video tag.

Or: say you are working on an email draft, but you need to put it away for a few hours to clear your thoughts, and you plan to return to it later in the day. You could pull that email draft right into your to do list for the day. Clicking it would immediately open the draft back up so you could continue your work.

Or: you could create a canvas upon which you arrange all of the resources you’ll need for a video conference during which your screen will be broadcast to all. Rather than fumbling through many different apps and windows for each resource, you’ll be able to organize the things you’ll need perfectly for the presentation, and you’ll be able to open each one inline — regardless of what data type it is (PDF, website, to do list, note, etc.).



With universal data portability, our operating system of the future becomes – in a sense – inverted, compared to today’s OS: the operating system makes use of interface components provided by the apps you choose to install. It allows you to use these components wherever you want to, creating a satisfyingly open and flexible environment for you to reflect your thinking and your workflows perfectly.

Increasingly, many of our things live in our computers. Universal data portability assists us by breaking our things out of their rigid containers.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1350412187588767746).

* * *

[« Previous: LN 001](/labnotes/001)

[TOC](/labnotes/000)

[Next: LN 003 »](/labnotes/003)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)