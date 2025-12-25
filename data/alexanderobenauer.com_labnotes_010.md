LN 010: User-created application and system views

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

LN 010

04•06•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/009) [Next](/labnotes/011) [Latest](/labnotes/040)

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

User-created application and system views
=========================================

In [LN 009](/labnotes/009), we saw how a user might create a new view for existing or new kinds of data items they want to store in their system.

One example was an item the user created to store their sheet music, guitar tabs, and notes on learning specific songs.

But let’s take that example further: what if the user wanted an application view to interact with these items in a way more fitting to the data within?

Consider that the user created the view for these custom items within a simple constructor interface (see the videos in [LN 009](/labnotes/009)). Expanding on that concept, consider that the user could similarly construct larger views, to create whole applications.

In this case, the user might come up with an application called “Setlist” in which they can create, browse, and manage their sheet music items.

 Your browser does not support the video tag.

Video showing an application with song items and ways to filter by instrument, artist, and mastery level. The user opens one song which contains a link to its guitar tabs as well as some notes the user took to remember their preferred capo placement. On the main application screen, the user filters to some specific artists to see only the songs by those artists.

Of course, keep in mind that these items can be referenced and used anywhere else in the system, as seen in [LN 002](/labnotes/002) and [LN 003](/labnotes/003) (among others). But this Setlist application can serve as a central hub for these data items.

Setlist is more than just our example here — it is a real application I’ve constructed, serving exactly this need in my life. It starts to illustrate what is possible with user-created application views.

This is a powerful concept that can be extended into lots of use cases, but we can take it one step further:



This kind of interface construction can be used for _system_ views, too.

Consider the impact if a user of the operating system could freely modify, duplicate, or construct any system view, just as they can with any item or application view.

Don’t like how the welcome screen is laid out? Need a more ergonomic navigation screen for your particular line of work? It’s yours to rearrange, recreate, or modify as you wish. After all, it is meant to be a _personal_ computer.

Should this be possible, the user is free to forge their own tools and workspace as they see fit. Just like a woodworker might start by [designing and building their workbench](https://www.reddit.com/r/Workbenches/), any user of this system can create the right workspace for their work.



In the last few weeks, I’ve rebuilt my demo operating system so that all of the system views are no longer hardcoded, but constructed with this system. Almost everything in the system can be redesigned by the user.

Incidentally, with this system in place, I now often create new system views within the system itself. But most importantly: a user can, too. The user has the power to implement ideas of their own at least as flexibly as I have.

Consider some of the implications: No longer would you have to rely on a third-party developer to make that one change which would make your day – every day – easier. For many potential changes, you could simply do it yourself.

If there is an update to a system view that you don’t like, you don’t have to accept it — you could keep your current view definition instead. Or you could combine elements of both as desired! Following this thinking, updates to system views would consist of: updated defaults or recommendations, and new components you can add to your views.



A number of considerations come to mind from this development, which I will cover in a handful of these Lab Notes. Here are a few to get started:

Expanding our thinking on interfaces in personal computing
----------------------------------------------------------

Today our thinking is severely constrained: “This text box is _here_. I can only change what’s inside it.” In fifteen years’ time, we should think of changing any data _or_ view as “changing my stuff” — effectively the same class of action; making your software reflect your thinking, just the way you want. Today, we don’t feel like these are personal computers. The text box is _there_. That is up to someone else. They might change it in an update. That isn’t up to me, the user.

So often, we want to redo our office, remodel our kitchen, reconfigure our workspace, refurbish our RV. Our minds naturally consider how our environments could be improved to better our experience and effectiveness within them. Yet we don’t do this with our software — for the most part, we can’t. We spend an enormous amount of our lives on our personal computing devices, and yet today, we do not have the freedom to redesign, remix, remodel, or reconfigure our digital workspaces.

Bootstrapping whole systems
---------------------------

Until now, my demo operating system has served me well as a tool for thought. But with this change, it becomes more than that: it is an engine for [Engelbart-inspired bootstrapping](https://www.dougengelbart.org/content/view/226/269/). A system with which you can, as a user, co-evolve both the tool and your methodologies simultaneously to build up better whole systems (those systems which include the human and the tool).

This is an opportunity to push for the higher, more important work: discovering ways in which people do important and hard things, their life’s work; and ways in which we might do those things more effectively, more efficiently, more intelligently, and so on. Consider: along with this OS of the future, how might we more effectively learn, think, and create?

It opens an opportunity to design not just an interface, but the processes and needed tools to do great work.

New outcomes from new tools
---------------------------

The tools we have naturally shape what we create.

For example, when the most popular web design tool of choice was Adobe Photoshop, a raster graphics editor, websites were filled with pictures as design elements. They had been edited, blurred, or used as large backgrounds. Over the years, popularity shifted to vector-based design tools. With that change, website designs changed too: the large background photographs gave way to illustrations and other design elements that could be easily expressed as vectors. The tool shapes the creation as much as the creator.

Our computers, operating systems, and apps all make up our digital toolset. But they are extremely rigid tools. All of us have vastly different kinds of work to do in our lives, yet we all have the same workshop from which to do it all.

This system I’m experimenting with would give people the opportunity to transform the tools they use to do their life’s work in order to suit that work and their own working styles better.

The impact here could be exceptional: Our tools naturally shape what we create, but our tools today are rigid and uniform. Exploring new, niche, tailored, expressive tools will radically expand what we can create in each of our fields.

Further thoughts
----------------

As a kid, I was obsessed with the [breadboard](https://en.wikipedia.org/wiki/Breadboard), on which I could arrange any number of switches, sensors, motors, or other items in circuits to make different things happen with a few batteries.

This concept for an OS’ user environment turns it into something of a breadboard: With provided building blocks, you could start the OS from scratch and build up any interface system you wanted. Or starting with some predefined defaults, you could swap components out. Or following the lead of someone with working styles similar to your own, you might use their published view definitions and hierarchy to get started.

The generated view definitions are items themselves, just like all other items in the system (emails, todos, and so on). Interestingly, since you can swap out or create new views for any item as seen in [LN 009](/labnotes/009), you could, in theory, build a better view _for modifying views_, and use that instead!

Further, you could share created views with others. And since views are stored as data items themselves, just as you might be able to navigate to someone else’s published data item, you could see it in their application view constructed for that specific purpose.

We can use these view definitions in any software stack; they become a meta UI language allowing the operating environment to be written in different languages with different interface libraries for different platforms but with the same view spec as defined by the user.

This is a first exploration into some impacts this setup might have; a topic to which future Lab Notes will return. To receive them by email when they are published, sign up below.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 009](/labnotes/009)

[TOC](/labnotes/000)

[Next: LN 011 »](/labnotes/011)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)