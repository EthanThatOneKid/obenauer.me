---
title: "LN 023: Higher-level primitives"
url: https://alexanderobenauer.com/labnotes/023/
scraped_at: 2026-03-06T21:06:01.252Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 023

03•05•2022

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

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
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
