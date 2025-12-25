LN 019: Notifications

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 019

11•18•2021

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/018) [Next](/labnotes/020)
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

# Notifications

Much has been written around modern operating systems’ notifications and the
negative effects they have on users today. The WSJ published
[a piece on this](https://www.wsj.com/articles/ping-ding-chirp-notifications-are-driving-us-crazy-11636952462)
just this week.

In modern OSes, notifications are defined and triggered by apps. Often, by
third-party apps. This code is not under the user’s control, but under the
third-party vendor’s control. And yet notifications are the thing that take up
most of the screen real estate on the default / lock screen, and they are the
only way that our personal computing devices initiate new interactions with us
(rather than, as is the case most of the time, us initiating new interactions
with them).

OS vendors have made steps towards making notifications more manageable and less
distracting. But fundamentally, the way notifications work in modern OSes is
backwards: someone else decides when (and how often) my device wakes up to
interrupt what I’m doing.

And yet, notifications stand to be one of the most important things in our
personal computing domain. Consider a notification center that contains only
what your want to know: it might contain deliveries arriving today, replies to
important emails, any weather or air quality alerts for your area, new physical
mail received today, changes to upcoming events or travel itineraries, maybe
even a new album released by a favorite artist, and so forth. The notification
center can become a singular space that keeps us up-to-date with what’s going on
in our lives. If done right, the notification center might become the most
trusted and impressive space within a person’s personal computing domain.

This concept reminds me in some ways of Google Now, a short-lived but insightful
product that would show all of the above, in addition to, if you scrolled far
enough, scores from your favorite sports teams and other items you’ve shown an
interest in knowing about.

Notifications stand to be an incredible, concise way for our personal computers
to show us everything we care about right now. But today, this sacred space
fails to achieve that ideal because it is home to others’ priorities over our
own, often filled with prompts from social networks to look at new posts, deals
emailed to us from online stores we’ve made a purchase from once before, and so
forth. Notifications are fundamentally backwards when they are issued by someone
else, and our control over them only exists in filtering or delaying them. This
is especially egregious when they exist on our device’s home or lock screen!

It wasn’t clear to me at first, but over time I’ve realized that the itemized OS
has the opportunity to get notifications fundamentally right.

As discussed in [LN 018](/labnotes/018), rather than apps, our OS of the future
has services that provide items to our operating system. Podcast episodes,
emails, calendar events and more — they all come into our system via services.

But notifications don’t.

Instead, our services simply supply our system with items. And we, the users,
tell our system what kinds of new items we want to be notified about. There is
no way for a service to tell the system to notify us about something; instead,
they only supply the system with their available items.

As users, we set sensible notification preferences, such as:

- I want to be notified about calendar events coming up soon
- I want to be notified about replies to emails I’ve sent
- I want to be notified about deliveries that have arrived
- I want to be notified about local weather alerts
- …and so forth

These notifications are posted to our system according to rules we have set up,
not unlike the rules described in [LN 018](/labnotes/018) to trigger
automations. In this way, notifications are simply automations themselves: if an
item meets conditions X, Y, and Z, then notify me about it.

Usually this pertains to new items, but sometimes it’s with items that already
existed, such as a reminder attached to an email we sent off a week ago that
we’d like to follow up on.

We can set up simple or complex rules, and we can define if we want the
notification to interrupt. All notifications may go into a notifications list,
which we can check when we have the time to do so. But only _interrupting_
notifications would also pop up on our screens automatically. This way, we can
set up notifications for items like upcoming deliveries to land in our
notifications list, but not interrupt. Then when the time is right, we can check
our notifications list and catch up with a running log of everything going on
that we care about (without those things interrupting us all day).

![A notifications list with an upcoming event, an update to a shipment that is now out for delivery, and information about an album that was released by a favorite artist.](/assets/imgs/labnotes/LN019.A.png)

In addition to the high-priority notifications you've set up to interrupt you,
your notifications list includes lower-priority notifications that you have not
set up to interrupt, becoming a running log for you to catch up with the things
you care most about.

Common notification rules would likely be presented to the user or enabled by
default, so that users get the functionality they expect with little or no
effort, and the ability to fully adjust their notifications whenever they wish.

So, most often, notifications look like this: A service brings a new item into
our system (as discussed in [LN 018](/labnotes/018)). Let’s say it’s an email
from a spouse. Our system checks our rules for new items, which include things
like automations as well as notifications. Following a rule we set up requesting
immediate notification about any kind of new message item from our spouse, it
posts the notification.

And we covered this before in [LN 005](/labnotes/005), but just for fun:
notifications can bring up helpful connections with other items whenever a
notification about an item posts. This has some really cool potential uses, such
as giving us the original email thread about a meeting when the notification for
the upcoming event appears:

Your browser does not support the video tag.

Video showing the home screen of the OS, where an event notification pops up
along with the associated PDF and email thread, which the user opens and types a
reply.

For more, see [LN 005: Associated items](/labnotes/005).

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 018](/labnotes/018)

[TOC](/labnotes/000)

[Next: LN 020 »](/labnotes/020)

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
