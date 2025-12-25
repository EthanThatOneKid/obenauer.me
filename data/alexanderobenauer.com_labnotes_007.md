LN 007: Atomized apps

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 007

02•22•2021

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/006) [Next](/labnotes/008)
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

# Atomized apps

What if the app that brings data into your system does not have to be the app
that renders it?

In the case of email, for example, the app that connects to IMAP, syncs changes
bidirectionally, and caches emails in a database could be separate from the app
that renders emails and the inbox environment with controls for acting on your
messages — and this separation has some real advantages.

In [LN 006](/labnotes/006) we began to explore this concept, starting with the
interface. To recap: the system allows you to pick what view component is used
to render all items of a certain type across your system, or to quickly flip
between applicable view components for one specific item. Further, these view
components can come from any installed app. See [LN 006](/labnotes/006) for the
demos and discussion.

Extending that definition of allowing for the atomization of the view, we also
allow for the atomization of other app components. This means you might have one
app that brings your email into your system and another app to render those
emails.

This form of atomized app has some important benefits for the user, the
developer, and for preparing the system for future expansion into new
technologies.

## Beyond the GUI

By separating our data sources from our rendering views, we free up the data we
use in our applications to be consumed not just by view components that render
the data in a GUI (graphical user interface) as we saw in
[LN 006](/labnotes/006), but also by components that offer user interaction with
that data through other media: voice, VR, and so on. This has important
ramifications for both accessibility and the development of personal computing
environments with future technologies.

Today, if a user cannot use just one of the main hardware components of their
devices (mouse, keyboard, screen, touchscreen), they are left with a
tremendously more difficult experience in personal computing. And, as personal
computing devices have increasingly become the nexus through which we engage
with much of life and many modern professions, this inaccessibility has
ramifications that run deep.

The atomization of our apps in personal computing opens up the ability to create
more fluid interactions through other media.

Today’s most widely available assistive technologies largely seek to map what a
GUI renders on screen into something more accessible — which helps, but is far
from ideal.

For example, using today’s operating systems by voice involves screen readers
that simply read aloud what is displayed in the interface: the text, menus, and
buttons; and voice control that allows you to activate the various controls
displayed.

Though helpful, this is fairly crude, with an often low quality result. It’s
clear why the result isn’t ideal: it maps the interfaces designed specifically
for certain abilities into other ways to use and control them without those
abilities.

These assistive tools are a great help to many people, but fall far short of
what they deserve.

With atomized apps, we can create the _right_ thing for voice control — no
longer an assistive technology, but a new one altogether; one that is focused on
accessibility from the start. If we have the data coming from one application,
we can install an application not for the rendering of those items in a GUI as
we saw in [LN 006](/labnotes/006), but for the use of them through other means,
such as voice. That application component would not be based upon some other
GUI, it would be written explicitly to be used as, say, a voice-based email
client, running off of the same base app (handling interaction with the server,
syncing changes, caching results, etc.) as the GUI apps.

Further, the operating system of the future is going to be taken for some long
rides through the transformation of technology. If it has outdated and
inflexible methods of interaction, large remnants of those methods will stick
around for too long within our new technology.

If instead, they are open to building in new forms as new technologies are just
being born, then the operating system of the future won’t inhibit their
exploration, but rather act as a multiplier force in helping find the unique new
ways the new technologies might allow for interaction within personal computing
environments.

## Benefits users and developers

Many workplaces and universities require the use of a specific email app, not so
they can control the user interface, but rather so they can control the protocol
or means of connection and data transmission. Even though well intended, many
users are then stuck with incredibly inadequate client applications. By allowing
for the atomization of our apps in the OS of the future, the workplace can just
as well require the use of a specific app that handles connecting to the server
and transporting the data according to their requirements, and the user is free
to use any view component(s) they prefer for rendering their inboxes and their
emails.

Sometimes you want the data from Gmail servers, but you don’t want to use the
Gmail app.

The strengths required to develop with IMAP and the strengths required to create
a fantastic user environment in email can be very different. The atomization of
these two sides of the email app allows for developers to focus on their core
strengths (and avoid giving users apps that are inferior in all other areas),
and for users to replace components of their system freely according to their
needs or preferences.

For example, your system might provide a module for accessing emails on a server
via IMAP, but you might install a replacement that also caches your emails in a
local database for faster searching. And since the app that accesses IMAP is
separate from the app that renders your emails, you can freely make that choice,
without having to compromise on other choices of views.

A disturbing trend in email apps of late has been the use of third-party servers
to duplicate users’ mailboxes. IMAP is notoriously difficult and slow, so
developers of many modern email clients have resorted to this technique which
many users do not realize is happening in the background, compromising their
privacy and security by putting their sensitive and personal data in unknown
hands. With atomized apps, developers could deliver their new idea for rendering
inboxes and emails without having to build their own IMAP implementations, and
particularly without having to compromise user privacy by putting those
implementations on their servers.

You might install a view for emails that lets you block images and a view for
your inbox that has a better method of organization — all without having to
worry about inferior IMAP implementations, or compromising your privacy and
security.

Though email is the example use here, this same phenomenon happens lots in
personal computing: your preferred source of some data is very often not where
you prefer to actually consume that data (sometimes, it’s the worst place).
Weather, podcasts, emails, news, and so on — these things are presented in ways
tailored to the publisher’s priorities rather than your own, or even lack the
accessibility you need.

Atomized apps let the developers focus on what they’re best at, and lets users
pick the best or right component for their setup.

It also lets us distribute independent development among separate, smaller
components of apps which can be contributed by separate developers — giving more
opportunity for distributed open source development to be a significant part of
the operating system of the future.

One thing to be clear on: of course a user does not want to source three
different apps to accomplish one task; the point isn’t to separate these pieces
as far as possible, rather just to make their separation within the system real.
It would be straightforward to offer a single bundle that allows a user to
connect to a new protocol and view the data that it transmits, without having to
worry about the individual components included.

For example, when podcasting was first introduced, you can imagine that a user
would only need to download one bundle to subscribe to and listen to their first
podcasts. Years down the line, they can freely swap out the view used to play
episodes (for example, to gain a feature like Overcast’s Smart Speed that drops
out silent moments).

When you install a new app you’re ready to start using it. But if you decide
that you’re happy with what the app gives you access to — say, an RSS service —
but you want to have a different view render its items — say, a reader view for
RSS feed items that supports dark mode — you can freely swap out that view
component.

On the contrary, consider that the operating system would ship with IMAP support
built in. When FastMail came out with JMAP, a new and more performant protocol
meant to replace the decades-old IMAP, but which still delivers the same data
type — emails — to your system, they could ship to our future OS an app that
allows your system to connect to its servers via JMAP. They wouldn’t need to
ship new view components for emails, drafts, folders, and so on — because you
already have those installed. You could install and use their JMAP
implementation without having to wait for your email client of choice to adopt
it. You could continue using the app you’ve chosen to organize your inbox, and
the app you’ve chosen to compose drafts; but now with the improved performance
and reliability of FastMail’s implementation of JMAP. And FastMail would not
have to worry about recreating all of these pieces of functionality that already
exist; they could focus specifically on delivering their implementation of JMAP
to users.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 006](/labnotes/006)

[TOC](/labnotes/000)

[Next: LN 008 »](/labnotes/008)

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
