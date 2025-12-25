LN 004: Browsing contexts & recent paths

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

LN 004

01•31•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/003) [Next](/labnotes/005) [Latest](/labnotes/040)

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

Browsing contexts & recent paths
================================

We use our computers to work, learn, think, create, and collaborate. As we do, we navigate around all kinds of different things — notes, web pages, events, to-do lists, emails, and so on.

Typically, when using a present-day operating system, we do that “navigating” by flipping between a number of windows, sometimes rearranging and resizing them.

One reason why we navigate this way is because many of our things are contained within their own apps (i.e. emails in an email client, notes in a note app). But as we saw in the last two Lab Notes, our concept for the future operating system [breaks items out of these rigid containers (LN 002)](/labnotes/002), allowing you to [bring them anywhere you want among system and application views (LN 003)](/labnotes/003).

Extending that fluidity, today we’ll look at one way to navigate around your different items.



In my concept for the operating system of the future, you can open any item on its own. It could be _any_ individual item: an email, a note, an event, or a day from your planner; and it can be from any level of hierarchy within your system: a whole todo list or just one specific todo.

With just that item open, you’re now in an environment that allows you to focus on your task at hand, and you can bring in other items as you need them.

These items can be brought in using any of these three methods:

*   By opening an item associated with one you already have open
*   By searching for any existing item in your system
*   By creating a new item on the spot

As you open new items, they line up horizontally, forming a _browsing path_ (the general concept here is a “browsing context,” but in this particular horizontal execution you’ll see below, I’ve taken to using the friendlier “browsing path”).



Consider: Say you’re writing out a todo list for today’s work. You might start a new note to record some thoughts on a specific topic you’d like to refer to later. Further, you might pull up an article on Wikipedia to reference some information in your note.

 Your browser does not support the video tag.

Video showing the user creating a note beside their todo list, then opening a couple of Wikipedia articles next to the note as they write.

This interaction allows you to easily move through your unfolding thought process, and develop your work while exploring related resources.

In this view, you can resize the width of any item, and you can reorder the items if you need to pull two things closer together. You can open new items between or beside any other items. You can pin any item to the side so that stays in place when you scroll around the other items as you work.



Your browsing path typically forms one cohesive context in which you’re doing some specific body of work. Conceptually, you might liken this to tabs in the web browsers of today, but encompassing all kinds of items (rather than just web pages).

But, unlike the tabs stacked into a modern-day web browser’s window, they don’t all disappear if you close it out.

When you leave a browsing path to open some other application or system view (or another browsing path), it isn’t gone. Later, you can open your “recent paths,” a view that contains all of the paths you’ve gone down, sorted by recency. You can grab a specific item from any of the paths, or you can simply return to a path in its entirety, and it’ll open back up just as it was.

Consider an extension on the above demo: Say something else has come up, and you leave the path to tend to other work. Later, when you want to continue this work, you open your recent paths, and return to this one, which is opened just as it was when you left it last.

 Your browser does not support the video tag.

Video showing the user closing the context containing the previously opened items, then returning to it via their recent paths list.

Finding, opening, and arranging things to do some body of work is itself an amount of work. In today’s operating systems, this work is transient and volatile — a closed window is gone. But with recent paths, this work of gathering materials needed for some specific task is always remembered by the system and ready for reuse.

It’s a transformative new way to consider navigation on your system as a user, allowing for more graceful context-switching, greater focus on the present task, and no more worry that you might lose something that you’ve opened.

This help from the system is welcome: how many times have you lost a tab that you wished you had saved, or recorded long lists of links to try to keep that from happening?



Finally, just for fun: say you’ve typed an item in your note that you realize you’d rather have over in your day’s todo list instead. Thanks to universal data portability, you can just move it over.

 Your browser does not support the video tag.

Video showing the user creating a todo in their note, then later dragging it over to their todo list.

Dragging and dropping between different items you’ve opened in a browsing path allows you to move, copy, or reference.

This is where we are starting to see the flexibility of universal data portability.



There are plenty more interesting things we can do with browsing paths, which we will explore in future Lab Notes. Be sure to subscribe if you’d like to receive the next lab note via email.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 003](/labnotes/003)

[TOC](/labnotes/000)

[Next: LN 005 »](/labnotes/005)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)