---
title: "LN 029: Experimenting with the item as the core primitive"
url: https://alexanderobenauer.com/labnotes/029/
scraped_at: 2026-03-06T21:06:01.403Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 029

06•12•2022

# Experimenting with the item as the core primitive

Today, we’ll start with a summary, on three main pieces. If you’ve been
following along, stay with me; we’re headed somewhere. If you’re new, click
through to the other, linked lab notes to see demos that illustrate any new
concepts.

First, in an OS of the future, everything is an item: emails, notes, webpages,
todo lists, podcast episodes, receipts… everything in our personal computing
domain is an item.

In our itemized OS, we can use items together, regardless of their type or
source ([LN 002](/labnotes/002)). So we might have a workspace into which we
gather a few things related to one train of thought: for example, an email, a
webpage, and a note ([LN 004](/labnotes/004), [LN 005](/labnotes/005)).

Second, each item can reference any other item ([LN 003](/labnotes/003),
[LN 012](/labnotes/012)). In fact, the workspace I mentioned above is an item
itself, which references each of the items opened within it.

This lets us bring items together in fairly infinite ways. We could drop the
email thread about an event into the event item itself. Or if we need to log an
expense tomorrow, we could put the receipt item directly into a todo item we
added to tomorrow’s list.

In many cases, items are made up of other items: a todo list is made up of
todos, and a podcast is made of up episodes.

We can also use these bi-directional references to create a graph that reflects
our thinking in higher fidelity ([LN 014](/labnotes/014)). A project might be
referenced from a contact item representing a client, and it might reference
various assets, tasks, conversations, and so forth.

Third, items are rendered by item views. An item view renders certain types of
items, and you can switch which item view you’re using at any time, or create a
new one entirely ([LN 006](/labnotes/006), [LN 009](/labnotes/009)). You might
have a new, preferred way of viewing your todo list or email inbox, or you might
toggle between different views when visualizing an emerging thought.

To summarize, the itemized OS’ useful functionality comes from some foundational
features: **items** that you can co-mingle, remix, and transclude;
**references** that are bi-directional and can be many-to-many; and **item
views** that are modifiable, swappable, and user-creatable. Plus, there’s a few
other things we haven’t recapped here, like automations
([LN 021](/labnotes/021)).

This supreme flexibility requires a thoughtful set of primitives to give power
to the user over the system, and a thoughtful set of features built with those
primitives for users to start off with.

What are those primitives? And what should today’s ready-made features be? It
will take quite a bit of experimentation to find out. But here’s one take that
these lab notes, and the software demoed within them, has implicitly
experimented with.

In an itemized OS, even the fundamental concepts like item views and references
are, themselves, items. You can do everything with these items that you can do
with others. This streamlines the mental model of how the system works, and it
makes the system even more evolvable. How? It means that better ideas can
replace even the “lower-level” concepts of references and item views in such an
itemized system of the future. Plus, since these items work like all others, you
can open them in an item view: for example, an item view for an item view might
let you modify that item view, as seen in [LN 009](/labnotes/009). If you want
to really track this out, this lets you open the item view for item views, and
modify how you can modify item views!

This makes the “item” the core primitive.

Building up: The system stores items. We can define new kinds of items, such as
views that render items, and references that relate items to one another. We can
keep building up this way, into larger structures that we might describe today
as “apps”: the interfaces we expect over the items in our domain.

Breaking down: Using our itemized system, we can see how our “app”-like software
is built: our inbox is an item rendered by an item view with references to
message items rendered by another item view. We can see how these views and
references are themselves items, which we can open to adjust their look or
behavior, to make our inbox work a little differently, or to build a new kind of
inbox in a similar way – such as an inbox for the things we want to read later.

In this way, we might put _using_ a personal computer and _developing_ for a
personal computer onto one, single trajectory. Making complex software is a
harder version of making simple software. _Making_ simple software is a harder
version of _using_ complex software. Using complex software is a harder version
of using simple software. This single trajectory allows users to become computer
literate by either breaking down: peeking into the inner-workings of the system
they’re using; or by building up: learning the fundamentals with which we “do”
personal computing (e.g., items) much as we learn the fundamentals of arithmetic
(e.g., addition) to build up to the more advanced stuff (e.g., items →
references; addition → multiplication).

Designing computing systems meant to improve lives and improve society means
designing systems that promote computer literacy and evolvability. The previous
lab note, [LN 028](/labnotes/028), sums up with a discussion on this.

In the next few lab notes, I’ll share with you my project that I’m currently
working on (here’s a
[little preview](https://twitter.com/alexobenauer/status/1513195682965995527)),
and lots of demos that take this experiment — of the item as the core primitive
— as far as we can.

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 028](/labnotes/028)

[TOC](/labnotes/000)

[Next: LN 030 »](/labnotes/030)

---
