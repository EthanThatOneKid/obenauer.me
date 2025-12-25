LN 008: Unified views

[

Alexander Obenauer
==================

](/)

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 008

02•27•2021

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/007) [Next](/labnotes/009) [Latest](/labnotes/040)

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

Unified views
=============

In [LN 006](/labnotes/006), we saw how we can select any applicable view for an item, which can be supplied by any app in our system, and we explored some examples and demos.

In [LN 007](/labnotes/007), we discussed how this means the app providing some data to our system can be a different app than the one that allows us to interact with that data, and we explored the many benefits of this arrangement.

Now, we can take this one step further:

Not only does the application which retrieves some data not need to be the application which renders it, but our system can gather similar items into one place, regardless of their source, or even specific data type.

One well-used example of this today is the unified inbox of modern email clients that shows all of the emails you’ve received, even if some came from an account over Exchange and some from another account over IMAP.

We can extend this into other data types, but also into higher-level constructs, so that we do not need to visit multiple views or apps for one purpose.



Consider the moment in your day when you wish to catch up on correspondence. It might be first thing in the morning, mid-afternoon, or frequently throughout the day.

Usually this means going to your email client, wading through the many non-conversational emails from various companies and services, finding those threads which have new replies in them, and sending off a response.

But then, increasingly in the last decade or so, you aren’t done — it’s off to other apps and services. iMessage, Slack, GitHub Issues, Asana, and so on. Unifying these things has been a long-standing wishlist item for many users of today’s operating systems.



In our operating system of the future, since all items are simply treated as their own self-contained things, we can put them anywhere we want.

As we saw in [LN 002](/labnotes/002) and [LN 003](/labnotes/003), this means we can drag them (or create them) anywhere we’d like — such as pulling a podcast episode into the top of our note.

But we can also lean on the system to gather items together. And since any item can be gathered anywhere, ongoing conversations can be gathered into a single location — regardless of their original source. And since, as we saw in [LN 006](/labnotes/006), items are still rendered by their hosting applications, gathering them into a unified place does not mean we lose the capabilities of the hosting application (whether it’s end-to-end encryption, special formatting, linking to internally shared things, etc.).



This makes possible the ideal, single view for all of the conversations we care about, whether they are happening in email, Slack, GitHub, Asana, or anywhere else. Imagine going to a single conversations view that unifies all of the new threads you want to catch up on, regardless of what app each person used to send you a message.

We can also do this with notifications: Although notifications come from many different sources including email, push services, and even SMS, we can design our system to simply gather all of these notification items in one place. Imagine having one single center of notifications across your entire tech stack.

Finally, we can also do this for the things we want to read, listen to, and watch. We receive newsletters by email and RSS, podcast episodes by RSS, and we save articles and other things for later consumption. Whether it’s an email, an article, a PDF, a video, a Twitter thread, or anything else, it can be gathered by our system into one collected view for consumption when we’d like to read or watch something new.

This thinking can solve domain-specific problems too. Consider banking: US banks lack a uniform API, but when our system allows us to collect items from different apps in one place, we can gather our transactions from various banks into one local budgeting tool.



One additional note: With this arrangement, decisions about what is included as conversations or notifications are made by your local software; not a distant server. So you can configure it how you prefer — you don’t have to rely on something out of your control. Your notifications view does not have to include items that you don’t want in there (apps today can be known to abuse the notifications features on phones, for example), and you can trust that your email can be split up the way you prefer. You have the power within your local software to exclude a certain app if it contributes undesirable things to any of your unified views.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

* * *

[« Previous: LN 007](/labnotes/007)

[TOC](/labnotes/000)

[Next: LN 009 »](/labnotes/009)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)