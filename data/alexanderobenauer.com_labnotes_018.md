LN 018: Services & Item Drives

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

LN 018

10•28•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/017) [Next](/labnotes/019) [Latest](/labnotes/040)

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

Services & Item Drives
======================

In [LN 007](/labnotes/007), we explored how the items within your personal computing domain (emails, notes, tasks, articles, and so on), can be displayed by views that are separate from the services which provided the data. There is great freedom in this: with separation between the data we use and the interfaces we use to interact with that data, we are free to represent our things the way we wish, and to bring various related things together into a seamless workspace, regardless of each item’s origin or type.

Today, let’s begin to explore _services_, which are responsible for bringing items into our system (either at our request or automatically).



In this operating system of the future, we don’t have the same concept of “apps” or even “windows.” The basic primitive is “items,” and each item is of a specific type. Some items are created from scratch. For example, you might create a note or an event. Some items come from a service. For example, an incoming email would come from an email service, or a podcast episode would come from a podcast service.

Various services may be made available to users from the system or from third-party developers.



Along with items, services provide _actions_, specific to each item type. For example, an email service would offer the system a set of actions the user may want to take on an email item. Actions also contain undo functions within them, allowing the system to provide the user with a global undo & redo stack.

The system can make these actions available to users in different ways, for example: in menus (which the user or system can customize to prioritize frequently used actions), in command palettes that allow the user to type to filter all available actions, by voice command, or as steps within user-defined automations.



The system uses items that are automatically provided by services to gather and offer pertinent information to users in different ways.

For example, it could offer a feed of things automatically sorted based on priority / importance.

Or, it might offer a way for users to allow for notifications about new items based on their type and source.

Or, it can offer users a way to define the presence of a new item as a trigger for an automation, which could also make use of available actions. Consider a globally-available way, provided by your system, to set up automations: it would be trivial, for example, to set up an automation that moves certain new emails into a desired folder, or to automatically add a reference to a new email sent by a specific client within a list item in that client’s project workspace.



When the user creates an item not associated with a particular service (such as a note), or adds data to an item beyond its service’s own offering (such as adding a note to an email), this item data is saved in an _item drive_.

Item drives are a special kind of service. The user needs at least one, because they are responsible for the system’s item storage. But users might have additional item drives for specific purposes: an additional item drive might be shared with collaborators, or provide specific functionality around the syncing of their data (for example, by offering end-to-end encryption).

Like each service, every item drive is completely encapsulated, allowing developers to build new kinds of item drives that serve specific purposes or pursue new goals. One item drive might be built to prioritize reliability in syncing with collaborators, while another might be built to handle storing items in a local database for personal items.



Services allow for the integration of important data into our personal computing domain, without each provider — the place where you order your groceries, the place where you get your news, the place where you receive your local alerts — needing to build and rebuild entire apps for new platforms. Instead, only a service needs to be built for this system, providing the system with the user’s data items, and the actions they make available for those items.

And while services _can_ bundle available item views, providers of standard types would not even need to take this step: for example, a new email provider would not need to build any of the view components for emails, drafts, or contacts. Rather, anyone can build new view components for those types that users can install and use ([LN 006](/labnotes/006), [LN 009](/labnotes/009), [LN 010](/labnotes/010)).

Besides resulting in a better user experience, it would also future-proof these services’ integrations with a user’s system beyond the lifespan of an interface, and allow for the same data access regardless of the user’s means of interaction (for example, a user who interacts with their system only through audio and voice would have the same access to the service’s provided information).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

* * *

[« Previous: LN 017](/labnotes/017)

[TOC](/labnotes/000)

[Next: LN 019 »](/labnotes/019)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)