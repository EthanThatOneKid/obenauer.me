LN 023: Higher-level primitives

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 023

03•05•2022

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/022) [Next](/labnotes/024)
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

# Higher-level primitives

We are constantly re-developing concepts like undo and redo or drag and drop
within our software today. These are core primitives, they are well-defined, and
they are almost always expected by the user. They are strong candidates for
higher-level primitives that allow the system to offer a more coherent, uniform
user experience, without the need for the duplicative work from every developer
on a platform.

Though these things are now conceptually basic, presumed by users to be
available in most software, they are fiercely complex to develop, requiring far
longer than the average person would assume. We’ve had many of these concepts in
personal computing since the very first mass-produced personal computers hit the
shelves, and yet, today, developers are regularly forced to re-implement them.
Though there are times when that might be favorable, it shouldn’t be the norm
for much longer. Looking ahead, we should find and settle into higher-level
primitives.

For example, the itemized OS we’ve explored features primitives like actions
([LN 020](/labnotes/020)). By providing the system with actions available for
items of specific types, services are able to pick up major, fundamental
features without having to rebuild them. The system could automatically queue
actions when offline, or retry actions following network failure. Services can
provide an undo action for each action ([LN 022](/labnotes/022)), allowing the
system to give the user a consistent, system-wide undo and redo experience. And
with items as a higher-level primitive ([LN 002](/labnotes/002)), global
features like drag and drop can be built into the platform, rather than every
third-party developer having to build implementations or compatibility services
to handle.

More broadly, the amount of double work done by developers everywhere is
condemning.

Offering new ways to interact with a user’s email inbox means recreating an
entire IMAP and Exchange sync engine — a feat that takes years to make right,
complete, and compatible with the myriad of server implementations and protocol
extensions in the wild.

By separating items from the views that render them and the services that supply
them, the itemized OS gives developers the opportunity to build only the pieces
relevant to the innovation they have to offer users, making far more things
possible that simply are not economically, technically, or securely feasible
today. A developer with a new idea for how users can interact with their email
inboxes would only need to build a new view component, or a developer of a new
email sync protocol would only need to build a new service. In order to ship a
new service, one should not have to cobble together inferior, replacement
interfaces; and vice-versa. And in order to use a service with a new email
protocol, users should not have to give up the views which support their best
workflows; and vice-versa.

Being able to target specific use cases as a developer and contribute to
someone’s overall personal computing domain is critical. Rather than having to
ship an entire, new mini-universe (“app”) in which users must create or recreate
their data, organizations, etc.; developers should be able to ship components
that support user’s overall systems. For example, with the itemized OS, a
developer can ship an item that allows users to attach spaced repetition
reminders to any other item if they so wish; they do not need to bring data into
the developer’s “app” to use it with their innovation; the developer can ship
something that expands the user’s entire personal computing domain.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/).

This lab note is an excerpt from the first issue of the Member Magazine. The
full issue is available in the [member portal](/membership/portal/), and
memberships are [available here](/membership/).

---

[« Previous: LN 022](/labnotes/022)

[TOC](/labnotes/000)

[Next: LN 024 »](/labnotes/024)

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
