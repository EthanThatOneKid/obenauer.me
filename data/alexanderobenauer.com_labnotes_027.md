LN 027: Personal Computing Network & Devices

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

LN 027

05•07•2022

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/026) [Next](/labnotes/028) [Latest](/labnotes/040)

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

Personal Computing Network & Devices
====================================

In [LN 026](/labnotes/026), we saw how we might publish modules made of items, views, services, and automations on the internet to allow others to interact with specific services we wish to make available, such as a meeting scheduler.

But what if we could also make modules for our own personal computing network?

And what if we could add various hardware devices to our personal computing network to gain additional functionality for these software modules?



Imagine your personal computing network as your own personal, internet-connected network of your private devices and data, along with some things occasionally published or shared with others.

This network is host to all of your devices: the standard ones, like your laptop, phone, and tablet. And potentially some other ones, like your printer, speakers, doorbell camera, and more.

Your needed data can automatically duplicate itself among the devices in your network, giving you local-first on each of your devices, plus some additional redundancy.

In the last lab note, we explored how itemized “modules” could be built using items, views, actions, automations, and the other fundamental pieces of the itemized system, to publish items with behavior that others can interact with online. But what if you wanted to create such a module for use within your own, personal computing network?

For example, you could describe the “notification center” ([LN 019](/labnotes/019)) feature of your itemized OS as such a module. And with this thinking, we can construct one and place it within our network, allowing it to float between our devices, always in sync: when we review a notification on one device, it would not also need to be reviewed on another; as part of the same module, its status will stay up-to-date no matter how you access it.



And what if you could simply add devices to your network? For example, you could add a doorbell camera to it, which would also introduce its module that allows for interacting with the device’s features and viewing its camera feed. As a low-power device, it can rely on the other devices in your network for video processing and storage. Notably, this arrangement keeps your data and processing all within your own devices and network. Plus, you can see its camera feed and notifications on any device, with the module running on your personal computing network (rather than the manufacturer needing to “ship” an “app” for each of your preferred devices).

Or imagine if you could buy a device that plugs into your wall, and gives your network access to its high-power processors, high-volume storage, and always-on and always-connected status. It could host the things that you share over the internet, run key services for your personal computing network (such as ML-based spam filtering for inbound items), handle intensive tasks from your other devices (like video rendering or compiling software for many kinds of devices at once), run scheduled actions (such as sending an email later), and keep a complete backup of all your items, as well as sync your backup to another, remote location if desired. With an uninterruptible power supply and a 5G modem, it might even be your lifeline to your data and the rest of the internet when the terrestrial power or internet at your location is unavailable.

A personal computing network should be home to the things within your life and work. Being able to add various hardware components seamlessly to it lets you evolve your system over time. Each device could maintain a local copy of your item graph, and whenever you get a new device, you can trust it to become part of your personal computing network — it’ll pick up your item graph as well as your software modules.

Once you have some module running within your personal computing domain, it can float between your devices, so you can replace a computer without even pausing your modules — they keep running elsewhere.

This system becomes a cross-device platform, giving you one, uniform personal computing experience across your entire domain of any number of devices.



You’d be able to add devices to your personal computing network, seamlessly gaining new functionality for it.

Today, there are some examples of this that give us glimpses at what could be: AirPrint is one of them. You can just throw a printer on your network and all of your devices then get a new feature: the ability to print.

Another example is [Sonos](https://www.sonos.com/): you can easily add various devices to your speaker network, including different kinds of speakers, controllers, and other useful hardware. You can customize and evolve this network over time as you see fit. Teenage Engineering has a similar glimpse: if you have one of their speakers, you can also add [their controller](https://teenage.engineering/products/orthoremote) to your network, which lets you remotely control your music.

Device manufacturers could play with wild ideas. For example, like Andrew Schmelyun’s [GitHub issues receipt printer](https://aschmelyun.com/blog/i-built-a-receipt-printer-for-github-issues/): you could add a thermal receipt printer to your network that automatically prints out items that you take a specific action on, allowing you to – from any device – print out specific things you need easy, physical reference to: scratch notes that you’ll review, a grocery list, some to-dos, notes to other household members, etc.

Personal computing hardware presents a mesmerizing prompt: [hardware for making music](https://en.wikipedia.org/wiki/Roland_TR-808), for example, is possible because we understand the fundamentals with which we create today’s music. Once we understand the core fundamentals of today’s personal computing, what hardware becomes possible? How might that hardware allow us to interact with our personal computing systems? And how do those new, physical interactions allow us to be more creative, focused, productive, inventive, and so forth?



P.S. One thing Alan Kay likes to say is “if I could buy a $30,000 computer, I would!” likening the purchase to that of a car (which is often in that ballpark).

Coincidentally enough, since initially drafting this lab note, Blackmagic came out with a $29,995 computer, the [Blackmagic Cloud Store](https://www.blackmagicdesign.com/products/blackmagiccloudstore) that does for film and television production what the always-on personal “super” computer I’ve described above does for personal computing. It’s a rare and delightful extension on the vision for what computing could be.

P.P.S. User-configurable devices could present wonderful ways to integrate into the itemized world: in [LN 026](/labnotes/026), we explored how a store’s shopping module would naturally expose actions for purchasing their products, so you could set up a “refill” button, like Amazon’s [Dash](https://en.wikipedia.org/wiki/Amazon_Dash) buttons, to automatically place one order when clicked (limited to one active order at a time, of course, to prevent button-loving toddlers from scoring the family a mother lode of coffee or paper towels).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

* * *

[« Previous: LN 026](/labnotes/026)

[TOC](/labnotes/000)

[Next: LN 028 »](/labnotes/028)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)