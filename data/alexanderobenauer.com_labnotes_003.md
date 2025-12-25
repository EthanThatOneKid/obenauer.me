LN 003: Universal reference containers

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

LN 003

01•24•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/002) [Next](/labnotes/004) [Latest](/labnotes/040)

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

Universal reference containers
==============================

In [last week’s lab note](/labnotes/002), we explored the first principle for the operating system of the future: Universal data portability.

So much of our lives now exists as digital things (notes, tasks, events, invites, images, documents, etc.) which are all siloed within their various apps. With universal data portability, we are able to pull these things out of the rigid containers which once held them and bring them wherever we wish.

One of last week’s examples of this principle in action: you could take a podcast episode and pull it into your note where you are jotting down your thoughts as you listen.

 Your browser does not support the video tag.

The note is a natural container; it is fairly obvious to users of today’s operating systems that a note might be such a place where they can put any of their things in this new system. But notes aren’t the only things which can contain other things. In fact, _all_ things can.

This brings us to our second principle for the future OS: Universal reference containers.



All items can contain other items. How those things might be displayed to a user depends on both the containing item and the contained item, which inherently shapes the functionality different types of things might offer to users.

For example, a todo list and a note function similarly: they are both lists of text. But they offer interaction with their items in slightly different ways: unlike a note, a todo list offers checkboxes along the side next to each item within it.



Things get even more interesting when we start to create new items within (or encapsulating) other items.

Consider: Say you notice an unexpected pending charge in your bank account. You could create a reminder and put the charge item within it, to check into it in a few days when it posts. When the reminder comes up, you would be able to directly open the charge to see all the details, like the merchant name and phone number.

 Your browser does not support the video tag.

Video showing the user creating a reminder and dragging a pending charge into it.

Or: Say you have an upcoming meeting, during which you’ll need to reference a PDF with the meeting agenda, a project board with the current status, and a few other things. You can put all of these things — even the active email thread regarding the meeting — into the event on your calendar. During the meeting, these items will all be gathered together and ready to go.

 Your browser does not support the video tag.

Video showing the user having created an event, dragging needed files into it.

Or, for a simpler example: Say you have a gate code you need to get into your public storage facility. You could create a note within the business’ map location card to save the gate code. Whenever you’ve mapped to the location, upon arrival, the location card would already be up with your gate code ready to go.

![](/assets/imgs/labnotes/LN003.C.png)

Image showing the user having entered text details in a location detail card.



A final thought to consider:

All items can contain a note, a reminder, or a link to a webpage. These features are often added to every app over time (an event in a calendar app gains the feature to add notes and URLs to it, for example).

But with this inverted OS setup, each individual app doesn’t need to build each of these features. The system inherently provides them, and the user is able to choose exactly what kinds of things (and rendered by what kinds of apps) they want. For example, a user might want to use an app that operates reminders on some other heuristic than just a simple date and time (current location for example, or spaced repetition).

My own email app brought what felt like a ground-breaking feature to email almost ten years ago when we introduced adding reminders to emails. In this operating system of the future, no app would have to build such a feature, as a reminder can be added to anything the user wants.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 002](/labnotes/002)

[TOC](/labnotes/000)

[Next: LN 004 »](/labnotes/004)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)