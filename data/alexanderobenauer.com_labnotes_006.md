LN 006: Swappable views

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 006

02•17•2021

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/005) [Next](/labnotes/007)
[Latest](/labnotes/040)

---

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

# Swappable views

As discussed in previous lab notes, items in your system can show up anywhere —
in a [browsing path](/labnotes/004), within [other items](/labnotes/003), and so
on.

In [LN 002](/labnotes/002), I left the discussion on how items are displayed to
this description:

> When you pull an item into some other place, it is still rendered by its
> hosting application. Hosting applications provide the view components for
> rendering data items in different situations or sizes.

But let’s push this definition further… what if you could change the view used
to render items of a certain type? Or the view used for one item in particular?
What if you could use different views provided by different apps in any
situation?

This brings us to _swappable views_, a simple (but consequential) foundational
feature in the operating system of the future that I have been designing.

All data items have a type (email, note, task, task list, event, and so on). You
can pick what view component is used to render all items of a certain type
across your system, or you can quickly flip between applicable view components
for one specific item. These view components can come from any installed app.

Consider: Say you prefer to compose your emails in markdown. Or rich text. Or in
a minimalistic writing environment. Or any of the three, depending on the day.
You could pick one to be your default. And you could easily switch between them
whenever you wanted.

[![Different kinds of views a user might choose for composing their email drafts.](/assets/imgs/labnotes/LN006.A-1.png)](/assets/imgs/labnotes/LN006.A-1.png)

Further say you found a view for your inbox that you like better — maybe it lets
you archive things more easily, or maybe it batches up your newsletters grouped
by sender. You could install and use that view for your inbox.

But here is the important implication: you would not have to stop using the
compose window you prefer for drafting your outgoing messages.

In today’s systems, you pick one email app, and if you like the compose window
of another, you’re out of luck — you have to choose one, with every aspect of
the app along with it.

In this operating system of the future, since you can pick any view for any item
type, you are free to more flexibly choose exactly what you want for any
particular item, purpose, or day. And no choice is binding: you can set
defaults, but flip around on specific items.

Extending the above example, you could install an email renderer that blocks
images, or one that offers a simplified reader view, etc. All of your things are
simply items in the system. You can tell the system what views you want to
render each item, and you can even flip to different views on the spot.

In today’s operating systems, if you wanted a new feature for your drafts or the
rendering of emails, you’d be on the hunt for a new email client — which means
everything changes; you have to worry about whether that email app has all the
features you need, whether it adheres to your or your workplace’s privacy
requirements, whether it allows you to navigate your emails the way you prefer,
etc. — all just to get that one new feature you prefer. Compromises are made in
droves by users of today’s operating systems.

If your search for a new app turned up nothing, you could theoretically build
it, but you would have to build every other aspect of the application as well —
likely too much time to invest unless if what you build would be purchased by a
few thousand others, who want that feature as well, to fund the development.

But in this operating system of the future, since you can pick a new view to
render any item type, you could simply find and use a view that supports the
feature you want. Or as a developer, you would only need to build that view in
order to realize your vision for it.

Besides setting a new default view for items of a specific type, you can also
quickly flip between applicable views on any one item.

Consider: Say you like to occasionally use timeblocking, on your busy days. On
calmer days, you’ve found timeblocking to be too cumbersome for your regular
workload. In today’s operating systems, that would likely mean using different
planner or task apps on different days, or even more likely, it’d mean being
left experiencing frustration with your software for its inability to keep up on
certain days.

In this OS of the future, we can flip to a different view for any one item; so
for a single day within our planner, we can use a timeblocking view (rather than
the standard list of todos).

Your browser does not support the video tag.

Video showing a user flipping between three different views for one date in
their planner: a standard list of tasks, one with time estimates, and one with
time blocks.

Or consider: You may want to navigate and use a collection of items in different
views at different times — one might make more sense when you’re fleshing out
your thoughts, another when you’re updating the current status, and another when
you’re presenting at a meeting.

In this example, you see that we can switch between a freeform canvas, a
navigable and sortable list, and a Kanban-style board of columns.

Your browser does not support the video tag.

Video showing the user flipping between three different views for a collection
of items: a list, a canvas in which one item is dragged and moved, and a board
of columns that show each item's child items within lists.

You can flip between these views whenever you want, even if the views themselves
are offered by different apps.

Swappable views are an effortless way for users to get the kind of functionality
they’re looking for from their software, without having to regularly throw out
entire apps and all of their data to get it.

And for developers, entirely new types of things can be built that are simply
not possible or economical today.

As a developer, you might want to overhaul how we interact with the inbox. Even
though your innovation touches just one aspect of the overall email client,
today you have to rebuild the entire thing — from implementing IMAP to drafts
and so on… email clients are quite large things when you consider all of their
features, and you largely cannot reinvent one portion of them without rebuilding
the entire thing.

In this concept for the future OS, you can freely ship one view. Or a few. And
people can select any of the views you’ve built whenever and wherever they want
to.

Which also means you can develop wild ideas without having to invest months to
years of development time on pieces you don’t care much about; instead you can
focus on just the piece that you’ve got something new for, today.

Instead of every developer in one field all receiving the same feature requests,
needing to rebuild what everyone else is building too, more developers can
explore more deeply on their specific experiment, and users will still have
access to all of the features they’ve come to expect.

Swappable views, along with some other concepts we’ll cover in the next few Lab
Notes, mean fewer unending and duplicative feature requests for every developer,
and more focusing on solving problems really well.

Being able to swap these things out quickly and freely, or system-wide and
permanently, offers us an enormous amount of leverage with our systems as users,
and an incredible new way to build better things for ourselves and others as
developers.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 005](/labnotes/005)

[TOC](/labnotes/000)

[Next: LN 007 »](/labnotes/007)

---

My book, _Bootstrapping Computing_, is
[available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // /
[Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A)
// [Bluesky](https://bsky.app/profile/alexanderobenauer.com) /
[Mastodon](https://mastodon.social/@alexobenauer) /
[Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) /
[Newsletter](/weekly/)

My work is graciously supported by the community.
[Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)
