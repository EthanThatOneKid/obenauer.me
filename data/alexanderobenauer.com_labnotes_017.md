LN 017: Today & Daily summary

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

LN 017

10•03•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/016) [Next](/labnotes/018) [Latest](/labnotes/040)

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

Today & Daily summary
=====================

Using an operating system that allows us to put references to items of any type in _other_ items of any type affords us refreshing flexibility.

But how might our operating system of the future use what it knows about the connections among our items to be a better companion to us and our work? We’ve explored some answers to this question in recent lab notes, and today we’ll explore one more.

In [LN 016](/labnotes/016), we saw how we might put items of any type onto dates. A task, a note, an event — anything. Let’s carry forward some of this thinking.



With items on specific dates, our system can bring these references to us in helpful ways both at our request and automatically.

Consider: some form of “home screen” in our operating system of the future might have a summary of the items referenced on today’s date.

![A home screen with a date summary '2 events and 3 tasks remaining today' and an on-hover box showing the two events](/assets/imgs/labnotes/LN017.1.jpg)

When using a cursor, hovering over this summary might offer some expanded details, and clicking would navigate to the day item in full.

Some form of system status or menu bar might have a shorter summary that similarly brings you to your day’s items from any other screen. When an event is to begin within the next 10 minutes, it could change to display a prompt, and offer an action such as opening a linked chat.



Around 4:30 pm (configurable), your system could offer a “daily summary” for tomorrow. By synthesizing what it knows about your references on the date, it can offer you a prepared agenda for the upcoming day. It might contain the events you have planned, the tasks you’ve created (with the ability to modify them or add more), any other notes or items such as travel itineraries, as well as the weather in your location and any other locations to which you’ll be traveling.

![A daily summary for tomorrow showing the weather, two calendar items, and three tasks.](/assets/imgs/labnotes/LN017.2.png)

You could pull up these daily summaries for a date range too: if you’re traveling over the next few days, you might pull up a summary that ranges from the day you leave to the day you return. You’ll get a full rundown of what you have scheduled, what materials you’ll need, what the weather will be like, and so forth; all generated from the things associated with the in-range dates.

In my prototypes of this system, I’ve found myself drawn to pulling up my daily summary for today along with a daily note next to it, and sometimes an item feed of everything I’ve modified recently (I’ll probably cover this in more detail in a future lab note).

![A browsing path with today's items on the left, and a daily note for today on the right.](/assets/imgs/labnotes/LN017.3.png)

This same view comes up whenever I click on the home screen or status bar summary, as it always returns to the most recent browsing path starting with today’s day item (see more in [LN 004: Browsing contexts & recent paths](/labnotes/004)).



Daily summaries could be pulled up for the past too, and could expand to show you even more about what happened each day.

A daily summary for a date in the past could show you the items specifically referenced on the date, as well as all the tasks you completed (even those not referenced on the date itself), and a feed of all the items you created or modified on that date.

![A daily summary for a date in the past showing the weather, tasks completed, items modified, items referenced, and a work summary that says 'Most work was Reading and Writing in History of the OS'.](/assets/imgs/labnotes/LN017.4.png)

Similar to what we saw in [LN 015: Cross-references & References cloud](/labnotes/015), it can even identify what projects or other general areas in which you were working each day, based on the common cross-references among the items created and modified on each date. Then you could see what areas you worked on or within across your past calendar date views (and you could imagine also being able to see for each project or area some kind of heatmap that shows when you’ve worked within it, much like GitHub’s contributions graph).

So in my personal setup (as seen above), the summary can know that I mostly spent one day working on “Reading” and “Writing” items within my topic “History of the OS” (for more on topics, see [LN 012: References box & Topics](/labnotes/012)). The system can determine this summary even though I didn’t touch any of those items directly by looking at the common cross-references on the items I did work on. I can click within this summary to quickly see what I wrote on the topic that day, similar to what we saw in [EXP 001](/labnotes/exp001).

Being able to distill my activities from each day using common cross-references lets my system explore ways to offer helpful summaries of my work in the past, automatically generated from how my personal graph is connected.



Of course, the daily summary is just one of the many ways an itemized OS allows us better flexibility within personal computing, and just one of the ways a growing personal computing graph enables the operating system to be a higher-gear companion to our knowledge work and life’s pursuits.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1444670972037115906).

* * *

[« Previous: LN 016](/labnotes/016)

[TOC](/labnotes/000)

[Next: LN 018 »](/labnotes/018)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)