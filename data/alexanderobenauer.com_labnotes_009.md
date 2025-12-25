LN 009: User-created item views

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

LN 009

03•20•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/008) [Next](/labnotes/010) [Latest](/labnotes/040)

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

User-created item views
=======================

In an operating system of the future that allows you to use any items such as emails, notes, tasks, and so on ([LN 002](/labnotes/002)) anywhere you want ([LN 003](/labnotes/003), [LN 004](/labnotes/004)), and that renders those items in views you can swap out ([LN 006](/labnotes/006)), an important opportunity arises:

What if users could modify, or even create, their item views, within the system?



This is certainly not an unprecedented idea — [HyperCard](https://en.wikipedia.org/wiki/HyperCard) is effectively a cult classic, and plenty of other examples spring up as well.

Consider: Should you decide you don’t quite like how something is displayed, you could simply change it. In this case, the user decides to increase the size of the title in their notes view and separate it from the date.

 Your browser does not support the video tag.

Video showing a user modifying the view component for notes by moving the title to its own line, and making its font size bigger.

But let’s take it even further:

What if you could define new kinds of items, and views for those types?

Let’s say you want to create a new item type for some data that you’d like displayed in some particular way. We’re going to lose the generic nature of these examples, so extrapolate to some kind of item you’d like to have around your own system in your own work.

Consider: You have a handful of clients, and you want to represent them within your system as _client_ items, with a view that renders those items in a specific way: with links to different lists for you to track different resources, and a field to represent the current status of the client or their project.

Just like your system is home to the standard items like emails, notes, events, and more, it is now home to your client items as well. You can freely do with those what you can do with everything else: reference them in a note or in a todo list, add a note or todo list to them, and so on.

Being able to create, and at any point in the future, modify, custom items alongside standard items, means you can be always in control of your own tooling.

Consider: You’re learning guitar and want to keep all of your sheet music and guitar tabs in one place. Some are PDFs and some are links to various websites. You could create a new item for this type.

 Your browser does not support the video tag.

Video showing a user assemble a view component for sheet music, including a text field for the song name, a text field for the artist name, and a collection for adding URLs and PDFs.

Now that you have this “sheet music” item type, you can use it anywhere in your system.

As shown here, you could create a collection of these items. Further, you could reference these items from anywhere else in your system: within a todo list, a date, a note, etc.

 Your browser does not support the video tag.

Video showing a user navigate their collection of sheet music, selecting Bob Dylan's "Mr. Tambourine Man", which opens that item's card. The user then sees, and opens, the link to the song's guitar tabs.

Further consider: Say you start learning the piano, too, and you want to keep your sheet music in this same collection, since you’re learning some of the songs on both guitar and piano.

You could add a way to distinguish which items apply to guitar, which to piano, and which to both. This could make it possible for you to look at just the items that apply to one instrument when you’re practicing.

Even if you had already been using this system of your own creation for years with just guitar tabs, you can easily modify it now to also support sheet music for piano.

 Your browser does not support the video tag.

Video showing a user add a "tag field" component to the sheet music item view for identifying instruments, then previewing the component to test adding the instruments "Guitar" and "Piano" to the field.

Adding a new field like this is easy to do even for standard types, too. Say you want to track emails not by the read or unread state, but by an incomplete or complete state to indicate to yourself whether you completed any actions involved.

You could add such an element to the view for emails, and use it freely across your system. The OS automatically stores this metadata and keeps it around when you need to see it.

The implications and further directions from this functionality run quite far, and will be explored in future lab notes. Sign up to receive them when they are published.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 008](/labnotes/008)

[TOC](/labnotes/000)

[Next: LN 010 »](/labnotes/010)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)