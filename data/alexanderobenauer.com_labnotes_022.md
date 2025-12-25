LN 022: Undo Actions

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

LN 022

02•27•2022

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/021) [Next](/labnotes/023) [Latest](/labnotes/040)

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

Undo Actions
============

In [LN 018](/labnotes/018), we explored services, which are the components that store or supply items: an email service might supply email, draft, and contact items; a calendar service might supply calendar and event items.

And in [LN 020](/labnotes/020), we explored item actions, which services could also make available: an email service might supply an action to archive an email, or a calendar service might supply an action to RSVP to an event invite.

But when providing each action, services might provide some additional information that we’ll cover in the next few Lab Notes, starting with this one.



Each service, which might be stock or from a third-party, supplies with each action it makes available another action that will undo the original action.

With both actions, the system is able to offer the user a consistent, system-wide undo and redo experience. And each individual developer doesn’t need to build their own implementations; they only need to identify what actions undo their undoable actions.

For example, your email service might provide an action to archive an email, and with it, the service provides an action that will unarchive the email. When you archive an email via any of the action triggers explored in [LN 018](/labnotes/018), the system will add the action to an undo / redo stack, where – even after other changes or a system restart – you’re able to see the action that was taken, and optionally undo it. And the system can make the undo / redo stack available to you with straightforward controls (modern systems tend to rely on global shortcuts and menu items, either of which could be easily offered on this itemized system as well).



Undo / redo is well-defined and almost always expected by the user. And yet, developers have to rebuild the concept within their software surprisingly often, and it can become surprisingly complex. This constant double-work runs rampant in software development today, an issue intentionally addressed by the itemized OS of the future in a number of ways.

Both actions and items serve as higher-level primitives for software development, allowing third-party developers to build far less, while allowing the system to provide users with more cohesive interactions and experiences. We’ll explore more on this in a future lab note.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

* * *

[« Previous: LN 021](/labnotes/021)

[TOC](/labnotes/000)

[Next: LN 023 »](/labnotes/023)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)