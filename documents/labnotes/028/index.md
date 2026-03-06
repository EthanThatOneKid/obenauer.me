---
title: "LN 028: Designing systems for computer literacy and evolvability"
url: https://alexanderobenauer.com/labnotes/028/
scraped_at: 2026-03-06T21:06:01.380Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 028

05•21•2022

# Designing systems for computer literacy and evolvability

When I chat with folks building tools on top of graph or graph-like data
structures, they often hit some “fork in the road” around how to make their
system meaningful and useful to new users. They wonder if their tool or system
should be more flexible or more guided. Should it allow more of the inherent
interactions that an underlying graph data model makes possible? Or should it be
specifically tailored into known use cases that the user would want on day one,
forgoing the “limitless” possibilities of the underlying graph?

With a graph as the underlying data structure, and an interface that lets users
directly interact with and control that graph, there are very many
possibilities. Strictly implemented, these kinds of tools can be extremely
flexible but, at the same time, kind of a blank canvas when first run. It’s like
looking at a Pocket Operator for the first time: even if you’re a professional
musician, and you generally know what you’re aiming for, it takes a bit of
“wading in” to really intuit the thing.

![](/assets/imgs/labnotes/LN028.A.jpg)

The [Pocket Operator Module](https://teenage.engineering/products/po/modular)
(pictured) and the [Pocket Operator](https://teenage.engineering/products/po)
are flexible music-making devices.

Just as with the Pocket Operator, when left with their full flexibility, users
of these flexible systems can make a lot of “bad music.” But in the case of
software and information management, they probably don’t have a natural sense of
what the “bad music” looks like, other than to assume the software isn’t all
that useful.

On the other hand, some system could instead implement an interface that scopes
down what the user can do, guaranteeing success on the initial use, but really
capping the upside of what the user can get the system to do as they learn more,
get more comfortable, and start needing to demand more specific things from it.
(In this scenario, the underlying graph model’s flexibility is primarily a
benefit to the developer, who may build new functionality more freely, rather
than to the user.)

If “Thing A” (e.g. a reminder) should be an ancestor of “Thing B” (e.g. a note)
so that some feature will be most meaningfully useful in the app, then how does
the user know to make that arrangement? In the graph, they can similarly make
“Thing B” the ancestor of “Thing A” and miss out on some ultimately important
feature or result. How does the system help the user make the right decision, or
how does it make itself equally useful regardless of the user’s chosen
arrangement? How can it help the user fall into a “pit of success,” despite
being capable of arranging any item of any type in any way? How do we keep users
from making “bad music”? How do we help users of flexible systems make “good
music”?

In some ways, I don’t _want_ to keep users from making bad music! They should be
able to; “bad music” is where “new music” comes from! Taking away their
opportunity to create bad music means taking away the opportunity for people to
bring new thinking and perspectives. But at the same time, the problem does
still exist: new users should have an easy way to make “good music” based on
today’s best principles for what “good music” is, while all users should have
the ability to create “new music” even if that music would not have been
considered within the realm of “good music” at the system’s creation.

Here’s how these systems, in my humble opinion, should work:

Rather than limiting the scope of what’s possible within the graph (which makes
it, often, no longer a graph), the system should be designed to use its
underlying, powerful, maybe-too-flexible-for-new-users structures for the
intended use cases. This could mean that some commonly-desired feature is built
using the system’s user-accessible primitives, and offered ready-to-go for new
users. Then, interested users can look at what that feature is built on and how
it works. They can see the underlying fundamental pieces of the system that the
feature uses, they can learn those things, they can modify how this feature
works, or build their own new features.

This is somewhat similar to how math works: when we first learn math, we aren’t
learning some different, simplified math. We learn the same, basic operations
that the more advanced stuff is based on. You can move into deeper literacy with
what you first learn.

By creating the more instantly useful features out of the more fundamental and
limitless ones, we can promote computer literacy: users can learn computer
thinking by using, exploring, and tinkering with their systems. The systems and
features they use are built with discerned, fundamental primitives of computing.
They can see how their whole system is built, and they could use the underlying
components to build their own new systems. They get to engage with the computer
thinking our underlying systems reify, and consider how they might leverage that
thinking to harness more of computing’s potential in their own work and lives.
The system and its potential can then be evolved by _any user_, not just the
developer.

In these Lab Notes, we explored how user-defined notifications could be offered
to the user as a very easy, one-button kind of feature, but built using item
automations under-the-hood. That under-the-hood implementation should actually
not be under-the-hood at all; or at least, the hood should be user-accessible:
when users dig into their one-button notifications, they should be able to see
how those notifications work, how automations power them, and start to learn how
they might modify those automations to do even more powerful or custom-tailored
things. And best of all, they might start to think about how automations could
be used to build other features entirely!

Taking this approach, systems can achieve two very important higher aims:

**1\. Promoting computer literacy for all users.** It means we’re looking for
the fundamental computer thinking that powers all the features we expect from
our systems, and we make that layer of the system available; the user is able to
learn that underlying, fundamental computer thinking and use it to improve their
systems, and in turn, design their systems to improve their work and lives. Just
as we become literate with language and arithmetic when we’re young, the kids of
tomorrow should become literate with the discerned fundamentals of computing.

**2\. Being an evolvable system;** the meaningful, user-facing features are
built using fundamental, user-accessible building blocks, which means users can
build new kinds of systems entirely by iterating on the concepts in today’s, or
even by starting from a blank slate, without the features and niceties of
today’s. This allows our personal computing systems to be improved by any “node”
within its “ecosystem”; the best thinking from anyone using this system can help
find ways to make them better for everyone, or for specific groups of people
with niche needs.

> “You can write the history of electronic music as the creative misuse of
> available tools. DJing starts off because people say a turntable doesn’t only
> have to be playback; we can scratch it, we can layer it, we can turn it into a
> performance machine. And so with autotune, it becomes creative precisely at
> the moment when producers stop using it the way it was intended. That’s the
> seed of creativity.”
>
> _— Jace Clayton_

Thanks to Emil Bruckner for reading an earlier draft of this lab note.

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/status/1528005344349368322).

---

[« Previous: LN 027](/labnotes/027)

[TOC](/labnotes/000)

[Next: LN 029 »](/labnotes/029)

---
