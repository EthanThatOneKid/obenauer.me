LN 037: Gestural view construction

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

LN 037

7•29•2023

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/036) [Next](/labnotes/038) [Latest](/labnotes/040)

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

Gestural view construction
==========================

The more I live in itemized environments for my personal computing needs, the more I see how view construction needs to be a common part of daily interactions.

The power of many of the concepts discussed in these lab notes is realized when people are able to craft unique interfaces that support their specific needs and context.

But once someone takes the time to craft the unique interfaces they believe will support their best, they’ll immediately learn something new — about themselves, the interfaces they envisioned, or both — and they’ll need to iterate on these creations. Back to the crafting, in a feedback loop that will happen as the individual evolves, and their context and needs change, turning this into a lifelong process which few may put up with.

I’ve experienced this firsthand: living in itemized interfaces like [OLLOS](https://lab.alexanderobenauer.com/updates/spaced-review), as I consider changes which might better support my days, I’m in a cycle that involves coding each time around. This makes the feedback loop so long that it’s hard to really learn much from it; the pace is too slow.

I’ll get concrete in just a moment — but for now, free yourself from the concept of an email client app.

What if reading your new email messages involved essentially constructing the view you want to see your new messages within, each time, as a byproduct of your natural actions to gather and lay out these email items? You might construct this view a little bit differently each time as you learn more about yourself, as you evolve, and as you discover different ways new interfaces allow you to do what you need to do better. It’s kind of like search: we usually write a new search from scratch every time, only saving searches that are particularly complex and which we wish to return to often. What if views were just as easy to construct, letting you do so from scratch each time as needed, only needing to be saved for reuse in particular circumstances?



Let’s dive into an early experiment that looks at making view construction a natural part of interacting with your items.

In earlier conceptions and constructions of an itemized OS, items could be rendered by item views ([LN 006](/labnotes/006/)), but making an item view required coding or the many clicks and drags of WYSIWYG-style view builders ([LN 009](/labnotes/009/)). There’s a clear build step, and a use step.

For this experiment, I’ve created a new, gestural itemized environment on the iPad. The goal is as described above: reduce the friction to spin up desired views instead of having to pick among some set of prebuilt ones. Make experimentation so quick and easy that it could become a normal part of our daily use; idealistically, “at the speed of thought.”

The way I like to see my emails is in a horizontal or vertical list, with each email already rendered in full (this allows me to quickly scan through my received emails, and reply to the important ones, without having to navigate around different screens). Here’s how I might accomplish this in my gestural itemized environment:

 Your browser does not support the video tag.

To view my emails in a horizontal path, I double tap to create a new query in which I look for email items. This query’s set of results appears in the environment as a stack, which I can fan out into a horizontal path, and resize according to my needs.

You can imagine that this influences a view hierarchy that is updated by my gestures as I go, e.g. for the first few steps:

 Your browser does not support the video tag.

You can see the view layers and settings in the tray on the left change in response to the gestures.

In prior implementations of an itemized environment, this view layers tray was the kind of thing that I’d have to interact with (if not code) in order to build a new kind of view like this one.

Instead, this new experiment looks for ways to have view construction begin as the byproduct of natural gestures as you look for the items you want to see and lay them out how you want to see them. Double-tap, type, fan out, resize.

When “fanning out” the stack, I could have also fanned out the items vertically, to move towards a list of emails, as you might see them in a typical email client today. And the direction in which I fan them out inherently determines a sort order: if I fanned them out in the other direction, the items are reversed in the resulting view. This single gesture has lots of information and intention in it, and it is a far closer match to our natural sensibilities for dealing with our things than, say, the WYSIWYG builder.

You could imagine spinning up this view whenever you want to see your emails in this way; it is a fairly straightforward set of interactions. Or, you could imagine that over time you might design a more sophisticated inbox view which you could save for reuse.

In this demo, the query item is a tool. Tools can fetch and create items, and they can be piped together. The query item stays in the environment, minified temporarily, when we focus on its set of results. Sticking around is one of the first hooks we have into introducing more powerful behavior: we can pipe other tools onto the query, such as a filter.

The set of results is itself an item, which we can treat all together, or separate to handle individually.

With tools like query, and layouts defined as the result of gestures, we can move towards calendar views, item lists, and more. We start with gestures that let us gather, lay out, and interact with our items as we’ve seen here. In the next few lab notes, we’ll explore how this environment can continue to move up the complexity gradient.



“Make simple things simple, and complex things possible.” (Alan Kay)

If view construction became fiercely easy, we could increase the amount of experimentation that will be done to create and explore creative, supportive interfaces in people’s lives. If the friction to create an interface was so low that you’d often “spin new ones up” fresh, every day, as a common usage pattern, then you could make this the first step towards custom, complex, personal interfaces.

This is a moral imperative for an operating system of the future. Restructuring our physical spaces, tools, processes, or habits to uniquely suit each of us and our lives is a normal part of evolving and improving, yet the fundamental introspection which powers this kind of restructuring becomes off-limits as more of our work collapses into the rigid world of today’s mass-produced software. Anything that makes us, our work, or our lives unique often makes today’s rigid software more frustrating to use. People deserve environments and tools which become more powerful, not more frustrating, as they learn what makes them and their lives more unique. People deserve environments which can evolve with them. People deserve the opportunity to introspect, and craft their digital environments to support their best. With today’s software, users don’t even consider how they think of their things, or how they would ideally interact with them — because there’s nothing they can do with these insights anyway.

This is what drives this latest experiment, which I’ll continue to explore in the next several lab notes.



_Thanks to John Underkoffler and Henrik Karlsson for the discussions on these topics and experiments._

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer/110797520161150095), or [on Twitter](https://twitter.com/alexobenauer/status/1685275022611365888).

* * *

[« Previous: LN 036](/labnotes/036)

[TOC](/labnotes/000)

[Next: LN 038 »](/labnotes/038)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)