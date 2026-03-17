---
title: "LN 018: Services &amp; Item Drives"
url: https://alexanderobenauer.com/labnotes/018/
scraped_at: 2026-03-06T21:06:01.136Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 018

10•28•2021

# Services & Item Drives

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

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 017](/labnotes/017)

[TOC](/labnotes/000)

[Next: LN 019 »](/labnotes/019)

---
