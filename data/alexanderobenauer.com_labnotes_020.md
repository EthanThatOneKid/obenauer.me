LN 020: Item Actions

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

LN 020

01•09•2022

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/019) [Next](/labnotes/021) [Latest](/labnotes/040)

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

Item Actions
============

In [LN 018](/labnotes/018), we explored how the OS of the future can have services which bring additional items into our system — things like emails, podcast episodes, calendar event invites, and so forth. We can use these items as freely as the ones we create ourselves, as seen in many of the earlier Lab Notes (e.g. [LN 002](/labnotes/002), [LN 004](/labnotes/004), [LN 015](/labnotes/015)).

Services that provide items to our system may also provide actions that can be taken on items of a specific type. For example, a service that brings calendar event invite items into our system may provide an action to RSVP.

So far in these Lab Notes, we’ve seen how the separation of the services which bring items into our system from the views we use to render and interact with those items has allowed us tremendous flexibility in creating the personal computing environments that best suit our lives and life’s work. Items become the fundamental unit with which we can more flexibly do our personal computing.

Similarly, actions are provided as-is by the system and services, and can be used any way we see fit. For example, views can render more than just item data; they can also take advantage of the actions related to an item being rendered.

In fact, when services make actions available along with items, we can make use of the functionality provided by a service through any means of interaction we would like (including many that the service vendor may never have thought to support — via new technologies, assistive devices, and so forth).



At the most basic, it’s straightforward to imagine menus that make actions available for a selected item. These menus could be customized by the user, who can prioritize favorite actions or customize specific actions (such as setting commonly-used parameters in advance). Alternatively, the system could automatically customize this menu, prioritizing frequently-used actions.

Extending into further use cases:

A command palette, seen increasingly in applications today, could allow use of the keyboard to quickly drill down to desired actions.

Users could assign hotkeys to specific actions.

Programmable devices (e.g. [Stream Deck](https://www.elgato.com/en/stream-deck)) could make use of favorite actions.



Extending into more advanced uses:

Using actions in new kinds of environments or with new technologies would not require new development from the service vendor. This is a compelling deviation from the way software is often built today, which would require each vendor to adopt support for a new class of device.

Users could set up automations that make use of available actions. For example, the arrival of a new email could trigger an automation that checks if it is from a specific sender, and if so, it could take some specific action on the email server in response (more on this in the next lab note).

Creating a shortcut that runs multiple actions would be simple as well. For example, you could add a button to your email item view that both (1) attempts to unsubscribe and (2) archives the email. Users would be able to add such buttons themselves, as seen in [LN 009](/labnotes/009).

Users could choose favorite actions to appear on notifictions. For example, you could add “archive” and “remind in 1 day” buttons to notifications about new, important emails (see more on notifications in [LN 019](/labnotes/019)).

And of course there are system-level item actions that can be used in these same controls too: things like adding references ([LN 012](/labnotes/012)), opening associated items ([LN 005](/labnotes/005)), switching views ([LN 006](/labnotes/006)), assigning dates ([LN 016](/labnotes/016)), or opening a new browsing path ([LN 004](/labnotes/004)).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

* * *

[« Previous: LN 019](/labnotes/019)

[TOC](/labnotes/000)

[Next: LN 021 »](/labnotes/021)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)