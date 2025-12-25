LN 012: References box & Topics

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

LN 012

05•2•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/011) [Next](/labnotes/013) [Latest](/labnotes/040)

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

References box & Topics
=======================

To set the context for this lab note, here’s a quick recap on the future OS proposed thus far: In [LN 002](/labnotes/002), we discussed how everything in your system is an item. Emails, todos, events, lists, notes, podcast episodes, tweets, web pages, articles, and so on… they are all items. And in [LN 003](/labnotes/003), we saw how these items can all be referenced from within any other item. This left open lots of flexibility that we will explore today.

In our OS of the future, whenever you have an item open, you can expand its references box. This box shows all of the other items from which the open item is referenced. Additionally, you can add the open item to other items from within this box (the same action happening in [LN 003](/labnotes/003), but being initiated from the other side).

When I have a task open, for example, I might see that it is located in both my Development project list as well as on a certain date in my planner.

![...](/assets/imgs/labnotes/LN012.A-2.png)

I could change the date it’s referenced from right here, which would move it on my planner. When the new date arrives, I’ll see the task in my todo list.



In your references box, you can also create new items to refer to the open item. You type its title, and optionally give it an item type. By default, these items are topics.

Topics can be anything — an area of interest, a source or author, a type of thing, a status of thing, etc.

And like any references, you can add them to items of any type — a note, an image, a webpage, an article, a podcast episode, etc.

Consider: You’re reading a book on a topic you like. In a new note, you’ve captured some notes and quotes from the book, and when you open the references box, you add some references.

![...](/assets/imgs/labnotes/LN012.B.png)

Later, you might have an idea or insight that you record in a note. You add “Topic: Computational Thinking” to its references, along with “Status: To Review”.

One day, you might see an article about the topic that you want to read later. You can simply tag _the webpage itself_ with “Topic: Computational Thinking” and “Status: Up Next”. Same with a podcast episode you run into, or any other kind of item.

Now, whenever you’d like to, you can open your “Computational Thinking” topic item and see everything you’ve referenced within it. You can see what you’re thinking about currently. You can pull up what you’ve marked to read next. You can pull up everything that you have under Doug Engelbart. You can pull up all the books you’ve read this year. And so on…

And of course, as we saw in [LN 003](/labnotes/003), we can do this the other way around, if that’s how our mind or process is working at the moment: we can open a Topic, and from within it, create a new note. Either approach works.



Topics allow you to fully express into your system the ways an item of any type fit within your thinking.



To support the implementation of organizational systems, you can pin certain topics in the references box. The references box of new items will automatically show pinned topics, so they can be easily added. Your pinned topics can be a single on-off toggle, or they can be grouped to allow for one or more selections.

![...](/assets/imgs/labnotes/LN012.C-1.png)

In my system, I’ve pinned the “To Review” topic, on by default, because I like to re-read almost all of my notes and thoughts some time after writing them (such as when I’m closing out my week or a project).

I’ve also pinned groups for Reading / Writing / Thinking — the primary categorization I use for the notes in my system, and Next Up / Now / Past which is how I find the new things I want to dive into next, and the things I’m currently reading or working on.



**What’s most interesting?** The ability to easily associate anything with a topic. It could be a note, a website, an email, a podcast episode. And once you have a topic, that page can fill with all kinds of items related to it. Then you can organize that page all you want. It effectively ends up working like tagging, but without an additional construct; it’s based on the existing fundamentals of this itemized system. As such, just like every other item, each topic inherently gets its own item page: you can add stuff to it, organize it, change its views ([LN 006](/labnotes/006)), refer to it from other places, make it an associated item ([LN 005](/labnotes/005)), etc. Additionally, we can pin topics or other references to implement systems of organization.

**What’s most important?** The opportunity to organize all of your things — of any type — into a hierarchy or graph that allows you to collect your things into topics. An item can be in any number of topics, and any kind of item can be included in a topic.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1388815904176279555).

* * *

[« Previous: LN 011](/labnotes/011)

[TOC](/labnotes/000)

[Next: LN 013 »](/labnotes/013)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)