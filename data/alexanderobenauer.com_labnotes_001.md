LN 001: Composing application interfaces

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 001

01•10•2021

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/000) [Next](/labnotes/002)
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

# Composing application interfaces

In order to build the many experiments for my research on
[the future of personal computing](/os), and the subsequent demos for these
[Lab Notes](/labnotes/000), I needed a way to build much faster than was
presently possible (the work simply won’t work if it takes weeks or months to
scale up each experiment; the learning has to be faster than that).

Here’s what I’ve been building:

**Conductor framework - first demo**

([YouTube](#))

## How it works

The framework explores a new way of writing apps through composition in place of
data piping.

It is made up of interface components built in [React](https://reactjs.org/)
that you use very much like you’d use HTML to construct a website.

But the real magic is when you give a component an `itemId` attribute: the
framework automatically handles syncing its value to the server, and reloading
it later, wherever that `itemId` appears.

You don’t have to worry about piping data around your app, syncing, binding
state to interface components, etc. You just construct your app.

You can combine the fundamental building blocks provided by the framework to
create increasingly sophisticated interfaces. And as you combine the pieces, the
framework automatically handles everything else — you just give out the
`itemId`s and you’re set.

The hope is to create a
[pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)
by making it possible to write entire apps in the same way you’d write a simple
webpage in HTML, using an expressive set of fundamentals to build complete
applications.

That’s not to say you can’t go beyond composition — it does expose the hooks for
you to do custom things with the framework if you’d like to, while still
handling all of the rote complexity.

This framwork allows me to [build and rebuild](/thinking/rebuild), a critical
process for making software great, since
[quantity is the journey to quality](/thinking/quality).

I’ll dive more into it in the coming weeks, because it exposes some pretty
interesting possibilities and consequences.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 000](/labnotes/000)

[TOC](/labnotes/000)

[Next: LN 002 »](/labnotes/002)

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
