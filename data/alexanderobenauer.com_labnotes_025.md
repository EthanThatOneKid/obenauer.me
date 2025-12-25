LN 025: Publishing items

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 025

03•26•2022

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/024) [Next](/labnotes/026)
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

# Publishing items

So far, we’ve explored the idea of an itemized OS a good bit in these lab notes.
But a huge part of personal computing today happens beyond your local personal
computing domain.

Let’s start moving towards the internet: What might the internet look like when
we introduce items? We will spend some weeks exploring this question, starting
this week with _publishing items_.

The itemized OS treats everything as an item. But now let’s say people can
_publish_ items and bring published items into their systems.

You might publish something as a one-off thing, like one article. But since
items are made up of other items, you could also publish an item of items, such
as an item of many articles. This could be a blog-shaped thing, a book-shaped
thing, or something else entirely.

You could publish ongoing feeds of items if you wanted to: they could be split
by type, topic, length, etc.; it’s up to you (especially since items can be
collected regardless of type); the publisher decides how and what they publish
via these feeds, and the subscriber can decide what they subscribe to (which
could even be a filtered set of some feed).

A recording artist could publish a feed of their music, which they can add to as
they release new songs and albums. Fans can subscribe to receive new music
whenever it’s published, and they can bring tracks into their local libraries as
they wish, where they can live along with tracks from other artists.

The recording artist could also publish a feed of their events, which your
system could automatically filter and notify whenever they’ll be performing in
your area, potentially with user-defined notifications ([LN 019](/labnotes/019))
using automations ([LN 021](/labnotes/021)) under the hood.

Transclusion as a primary property of an itemized OS ([LN 002](/labnotes/002),
[LN 003](/labnotes/003)) means that published items can be richly embedded
within others. If you’re writing an article, it could have items of any type
embedded within it, such as an episode of a podcast that you’re referencing,
which your readers can play inline for greater context. Then, a paragraph from
your published article could be transcluded into another article in the future.

And since items can reference any other, the recording musician could include a
note with their latest song release to share some details or thoughts with their
fans, or an item that points to their merch store or a music video for the
track.

In the itemized OS, items are rendered by item views. You can swap or modify
views that render your items ([LN 006](/labnotes/006)), or even create entirely
new ones ([LN 009](/labnotes/009)). When publishing an item, you can design an
item view to go with it, and users can view your item with that view by default.
And since we already have view builders for item views, that means we’d have
easy tools for users to lay out their published items without code, if
preferred.

If you load something of a type you have your own item views for, you could use
those views instead. You might prefer to read an article in a view that is more
legible for you, for example, using specific contrast or type settings. Or if
you prefer to see the item as the publisher designed it, you can view it with
their included item view.

If you find a published item of a type your system has never seen before, your
system loads the item with the item view that the publisher included. In a way,
this lets your system learn new abilities, and it lets item publishers provide
remote systems with instructions on how to render new kinds of data. This means
that all the itemized systems connected to the itemized internet are evolvable
systems: they can learn new things from each other without a software update.

This arrangement means that something resembling a website inherently has the
sitemap published with it, and something resembling an RSS feed can be viewed as
RSS feeds are today, or with the aesthetic styling provided by the author
(something I’ve long wanted as a user of RSS, to enjoy people’s articles with
the basic styling that they’ve chosen for their websites).

This arrangement also advances support for a vast landscape of accessibility
needs; instead of mapping interfaces designed for one set of abilities into
other interfaces, an often inferior result, the right interfaces can be designed
for use with consuming others’ published items.

In [LN 024](/labnotes/024), we explored mutations, which describe the changes
made to items. Your system can use mutations to allow you to set up
notifications or other automations on the things that matter most to you. You
could add a published item to your system, and receive their mutations whenever
they are changed or updated, if you wish.

For example, you might be attending an event, or catching a flight. The item
representing the event or flight would be published with all the pertinent
details. You could set up a notification if the item changes (which you could
limit to just one field, like status or time, or keep it open to any change).
This way, your devices would watch for mutations to let you know if the flight
or event has changed.

You could set up automations based on these mutations beyond notifications
(which are automations themselves — similarly, “subscribing” to some feed of
things could be, under the hood, simply an automation that responds to changes
of the root item).

And of course, much of the power with itemized, published things is in the
fundamentals we’ve already explored. For example: when you bring published items
into your own workspaces, you can work with them alongside the items of your
own, as we saw in [LN 004](/labnotes/004).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 024](/labnotes/024)

[TOC](/labnotes/000)

[Next: LN 026 »](/labnotes/026)

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
