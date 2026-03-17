---
title: "LN 026: Internet Modules"
url: https://alexanderobenauer.com/labnotes/026/
scraped_at: 2026-03-06T21:06:01.321Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 026

04•09•2022

# Internet Modules

In the last lab note ([LN 025](/labnotes/025)), we explored publishing items. But in that exploration, these items were mostly static: people could see an item’s current state, and subscribe to any changes made in the future.

Today, let’s explore publishing items _with behavior._

Previously, we explored how automations allow us to define ways our itemized OS should respond to certain conditions ([LN 021](/labnotes/021)). Now, let’s explore how we can use automations along with published items to offer specific functionality over the internet.

The itemized system consists of items, which are rendered by item views, and modified by mutations, to which automations can respond, calling actions on services as needed.

Now let’s say you can compose a _module_ of these things: items, views, actions, and so forth; and you can publish it on the internet for others to interact with.

For example, you could publish an item that displays your upcoming availability, and make an action available to schedule a call with you at a time you’re free. This module could have an automation that, when an event is created, generates a meeting link on a chosen video platform, and sends it to all participants (in an itemized world, that might be by appending it to the event item; in today’s world, that might be by sending an email).

You’ve effectively built, as a user, a service for taking appointments, which you can tailor to your needs and design as you see fit: for example, you could build it to wait for your approval for meetings with anyone not already known within your system, turning it into a service for others to request appointments.

If this was a service you offered clients or customers, you could design a similar system that requires payment first. You might even include some digital good made available to your client after payment, like an ebook.

And it’s all nicely integrated with your system, as it’s all itemized: If someone buys a digital good, they get the item itself. And on your end, their customer item and the transaction item become things you can see and reference within your own workspace as you oversee and conduct your business.

Taking this further, let’s say you’re opening a store. An online shop made of items (products, orders, etc.), public actions (purchase, message, etc.), views, and automations that trigger service actions (like one for charging credit cards) is effectively an itemized system; you could build an itemized module with these components to publish online (and maybe later, to use in a physical store).

The published shop is made of product and promotion items, along with actions like “add to cart” and “buy now.” It triggers an action from your payment processor’s service to place the charge, and might trigger product fulfillment too, or print the shipping label. Successful purchases trigger the automations you need, such as one to reduce inventory count, keeping your in-store systems and online shop in sync with your physical inventory.

Being an itemized module carries some real advantages. For example, when an order item is updated with a new status, that item update can be seen by the customer, too. This item is in their personal computing domain as well, and both you (the shop owner) and they (the customer) can see its status change. They can set up an automation that responds to changes on its status, such as a user-defined notification ([LN 019](/labnotes/019)) when it ships. You might pick some subset of fields that become shared when the order item is made available to your customer, though it can still be the same item; if your customer references it in an email, you would see your full version of the item as it exists in your system!

With the itemized system, publishing updates to some module could include a clear diff of all the mutations made to the items since it was last published, the automations created or modified, and so forth. Since the transformation of data is treated as an important piece of data itself in the itemized OS ([LN 024](/labnotes/024)), this would be fairly straightforward.

Once we’ve published a shop module with items and actions, it can now act like a service too: its items and actions could be used by a POS (point of sale) system within a physical store, or a customer could set up a physical button similar to Amazon Dash to order refills from your shop with ease from their homes.

These modules can be defined entirely by users with sufficient understanding of the computer thinking reified by their itemized systems. And they can use actions exposed by services throughout their modules as needed.

In this way, many services that are used via APIs by developers today would become more useful to all people who use an itemized system, since they could use various service APIs as part of their modules’ behaviors.

You can come up with fairly simple things that you might publish: For example, you might have a form that you want visitors to fill out. When they do, you might have an automation that creates some item with their inputs, making a reference to it in the right place within your private system.

And you can come up with fairly big things, too, like the store.

And they could all, potentially, be represented by the same core fundamentals we’ve explored for the itemized OS so far.

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/status/1512724993750228996).

---

[« Previous: LN 025](/labnotes/025)

[TOC](/labnotes/000)

[Next: LN 027 »](/labnotes/027)

---
