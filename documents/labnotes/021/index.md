---
title: "LN 021: Automations"
url: https://alexanderobenauer.com/labnotes/021/
scraped_at: 2026-03-06T21:06:01.211Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 021

01•16•2022

# Automations

So far, we’ve considered an OS of the future that has these core pieces:

**1\. Items** — the fundamental unit of data we meaningfully interact with in
our personal computing. They are each of a certain type (which might even be of
our own creation), and can be used freely with all other items, regardless of
type or source (for example, items reference other items often; composition is
how we get many of the larger item types: task lists consist of tasks, podcasts
consist of episodes, and so forth; yet any item can refer to another in this
way: one task may be found in a project, on a date, _and_ in a task list).

**2\. Views** — the components that render our items, usually visually, to make
their data (and often their most pertinent actions) available to us. New or
alternate views can be installed from third-parties or created by the user, and
views are swappable: any view for an item type can be used with any item of that
type.

**3\. Services** — the programs which bring items into our system or allow us to
store or sync our items. Though they may come bundled with default views for
their items, services are independent from the views that render the items they
bring into our system. Compared to today’s OSs, this allows users far greater
flexibility within their personal computing environments, and each developer the
opportunity to focus on the work they are best-suited for.

**4\. Actions** — the actions that users can take on items, which are made
available by the system and by services. These are also independent, allowing
for wide exploration on how actions can be displayed and used within the
interface(s).

With these pieces in place, user-defined automation becomes straightforward, and
immensely powerful: we can remix and reuse these pieces to define behavior we
want our OS to exhibit in support of our various workflows.

An automation is made up of:

**1\. A trigger** — the event that causes an automation to run. This could be
the presence of a new item, such as a newly received email, or it could be an
action, such as when a task item is added to (referenced by) a date item. It can
contain conditions so that it only triggers when desired (such as when an email
from a specific sender is received).

**2\. A result** — the results we want to see. We can use any system actions,
such as creating relationships between items, or any of the actions made
available by the services that we use, such as sending an email.

Item actions are how services expose all of their functionality, so there is
great freedom for automations to make use of the actions available on any
service.

We’ve already mentioned one simple but powerful use case for automations in
[LN 019](/labnotes/019): notifications. In response to a new item of a certain
type (the trigger), given that the item matches the conditions, a notification
is added to the user’s notification list, and potentially presented on their
home screen, status bar, or other highly visible place (the actions). This is in
contrast to today’s modern OS notifications, which are issued by apps at the app
vendor’s discretion (often a distinctly non-personal computing experience).

A simple example from my own use: I’ve built an app to track my daily habits
(it’s called Simple Habits — you can
[try it out here](https://simplehabits.xyz), and you can
[read more about it in this thread](https://twitter.com/alexobenauer/status/1468306363394801672)).
It helps me make sure that I’m getting all the inputs into and outputs from my
core work that I’ve learned I need. Every day, I check off the habits that I’ve
completed, but many of them could be automatically checked off with an
automation. For example, I try to write 1,000+ words each morning — that’s the
first habit in my list. It would be relatively straightforward to create an
automation which checks this habit off once I’ve reached my minimum word count
every morning.

You can preemptively use automations to organize items which don’t exist yet:
Your system could automatically add new music from a favorite artist to a
playlist, or organize incoming emails from a client into the workspace you use
for their project.

Automations are one of those things that let the mind run wild with creativity;
if past automation tools are any indicator, these examples I’ve laid out are
going to be among the least imaginative. I’m curious to see, when this system is
in others’ hands, what automations people build.

This kind of automation in your personal computing domain is possible because of
the way this OS of the future works. Automations are a natural extension of the
itemized OS, and their impressive flexibility is a natural byproduct of its
design. You can define triggers like new items appearing or new connections
being made, and you can set results using all of the actions available from your
system and the third-party services you use.

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 020](/labnotes/020)

[TOC](/labnotes/000)

[Next: LN 022 »](/labnotes/022)

---
