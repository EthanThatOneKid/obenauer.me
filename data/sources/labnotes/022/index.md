---
title: "LN 022: Undo Actions"
url: https://alexanderobenauer.com/labnotes/022/
scraped_at: 2026-03-06T21:06:01.232Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 022

02•27•2022

# Undo Actions

In [LN 018](/labnotes/018), we explored services, which are the components that store or supply items: an email service might supply email, draft, and contact items; a calendar service might supply calendar and event items.

And in [LN 020](/labnotes/020), we explored item actions, which services could also make available: an email service might supply an action to archive an email, or a calendar service might supply an action to RSVP to an event invite.

But when providing each action, services might provide some additional information that we’ll cover in the next few Lab Notes, starting with this one.

Each service, which might be stock or from a third-party, supplies with each action it makes available another action that will undo the original action.

With both actions, the system is able to offer the user a consistent, system-wide undo and redo experience. And each individual developer doesn’t need to build their own implementations; they only need to identify what actions undo their undoable actions.

For example, your email service might provide an action to archive an email, and with it, the service provides an action that will unarchive the email. When you archive an email via any of the action triggers explored in [LN 018](/labnotes/018), the system will add the action to an undo / redo stack, where – even after other changes or a system restart – you’re able to see the action that was taken, and optionally undo it. And the system can make the undo / redo stack available to you with straightforward controls (modern systems tend to rely on global shortcuts and menu items, either of which could be easily offered on this itemized system as well).

Undo / redo is well-defined and almost always expected by the user. And yet, developers have to rebuild the concept within their software surprisingly often, and it can become surprisingly complex. This constant double-work runs rampant in software development today, an issue intentionally addressed by the itemized OS of the future in a number of ways.

Both actions and items serve as higher-level primitives for software development, allowing third-party developers to build far less, while allowing the system to provide users with more cohesive interactions and experiences. We’ll explore more on this in a future lab note.

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 021](/labnotes/021)

[TOC](/labnotes/000)

[Next: LN 023 »](/labnotes/023)

---
