LN 016: Calendar views

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

LN 016

09•26•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/exp001) [Next](/labnotes/017) [Latest](/labnotes/040)

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

Calendar views
==============

In the operating system of the future, flexibility in putting your things exactly where they ought to live would be the new normal. Every item can be a container for references to other items, as we saw in [LN 003](/labnotes/003).

If you want to add a note and some to-dos to an email, or to an event, you can. And if you want to add the same note and to-dos into a project of yours, you can.

But what about putting items onto dates in my calendar?

In [LN 003](/labnotes/003), we saw how I might add some tasks to a date. In [LN 012](/labnotes/012), we saw that I might create a note that is referenced from a project as well as a date.

Let’s explore what that might look like from the date views.



Much of this thinking comes from my work on Symphonies Planner, a digital planner that lets you puts tasks, notes, and events onto dates.

Here are some of its calendar views:

 Your browser does not support the video tag.

Video showing the user viewing the next two days, then week, then month, finally moving a task from one day to another.

You can imagine how our operating system of the future might make similar views available, where each date is a container for references to any other items we’d like.

Consider the view for one day:

![...](/assets/imgs/labnotes/LN016.9.png)

People who prefer to timeblock might intermingle their tasks and events, but I tend to keep the two separate, as seen here.

Our day views can even surface the items we worked on in that day. For example, we might be able to pull up all tasks we completed that day, even if those tasks were not explicitly placed in the date. In this way, the system can more broadly generate daily summaries or agendas for dates in the past or future. We’ll dive more into this in the next lab note.



For some years, my wife and I traveled in an RV full-time, exploring and working from the various cities and parks that popped up on our path. When we are traveling around, we like to mark where we were each day to remember later and to build a travel map at the end of the year.

It’s straightforward to consider a programmable environment in this OS that would let me grab all of the locations I marked for one year, sorted by date, and plot them in a map via a map service’s API. Automating tasks like these would let me generate more of them; the only reason why I make one per year is because of the time it takes. What if I could call up such a map by month, region, etc., and have it generated on the fly?

What would you build if you could write a simple script that fetches all items of a certain type that have been added to dates in your system? This line of thinking can be taken in lots of directions, particularly when given the flexibility of representing and connecting our items as seen in these Lab Notes so far.



References or transclusions might be how we priamrily use our things and interact with our growing personal computing graph in the future.

The date is one specific type of reference container that can extend deeply into our operating system to execute on some concepts that I’ve wanted to see in operating systems for a long time. More on this in the coming lab notes!

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1442215354630033409).

* * *

[« Previous: EXP 001](/labnotes/exp001)

[TOC](/labnotes/000)

[Next: LN 017 »](/labnotes/017)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)