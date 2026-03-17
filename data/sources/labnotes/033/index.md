---
title: "LN 033: Swappable reference views"
url: https://alexanderobenauer.com/labnotes/033/
scraped_at: 2026-03-06T21:06:01.504Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 033

12•18•2022

# Swappable reference views

We explored how you might use _any_ item as a workspace in [LN 031: Fluid workspaces](/labnotes/031). In this lab note, we’ll expand on that thinking, with a new example.

Consider: With fluid workspaces, you could open a todo item from your day’s list of tasks as your fullscreen workspace. In this workspace, you’d open any of the things you need while you work on the task. If you switched over to working on something else, when you wanted to return to that task, you could simply open it as a fullscreen workspace again, and all of the items that you’d arranged and used before would be available. Or, if you opened the task within some other workspace, you could see these items that it references in a list; you’d always have access to the things that you need to complete the task, whether you open it as a list of resources, or as a fullscreen workspace — even though this item is itself a todo.

This is a wonderful flexibility in our systems that might enrich our interactions with our digital things. But it leaves one question: We previously explored how items have swappable views ([LN 006](/labnotes/006)), including how one might define the small and large size views for items ([LN 009](/labnotes/009)). We probably have a small item view for todo items in our system that consists of a checkbox on the left and a text input beside it. But what is a todo item’s _fullscreen_ view? We don’t actually need or want to define one; when a todo item is being used as a fullscreen workspace, we simply want to use our traditional workspace views, and we likely want to see the basic details of this todo: its completion status and title.

Further, as we look around the itemized system, we realize that many of our items do not actually need their own custom item views; they often simply display the items they reference in various ways (as a list, columns on a horizontal path, a canvas, and so forth). Even a note in the itemized environment may very well be a list of references to text / paragraph items. Besides a title at the top, the item view is primarily made up of its references (the blocks of text). A todo list is similar: it is a list of references to todo items, with a title, and maybe a summary, at the top.

We don’t need to define a custom item view for these, just as we don’t need to define a custom fullscreen workspace item view for our todo item to act as our workspace in the earlier example.

Instead, we will explore the concept of reference views, which give our systems more of their functionality and flexibility.

Consider: We might have an item that is a todo list associated with a date, but instead of having to build an item view for it, we can use a view that lists its references below its title. This reference list already works across our entire system, supports drag and drop, and so forth. We could also switch to an outline view (which lets us recursively open deeper lists of items’ references).

[![A todo list for December 13 with two todos in it, shown in a swappable reference view that could be a list of cards or an outliner.](/assets/imgs/labnotes/LN033.A.png)](/assets/imgs/labnotes/LN033.A.png)

When we open one of these todos as our fullscreen workspace, our system can continue to make use of the available reference views.

Consider: Without a dedicated fullscreen item view for todos, our system can use one of our workspace views, such as a browsing path. It can include the todo’s usual item view in a column on the left. Its usual list of references below can operate like the foldable views we saw in [LN 030.](/labnotes/030)

[](/labnotes/030)

[](/labnotes/030) [![A browsing path of a todo item's references, with the todo item on the left.](/assets/imgs/labnotes/LN033.B.png)](/assets/imgs/labnotes/LN033.B.png)

We can move around this horizontal browsing path, and open any other needed items, just as we’ve seen in [LN 004](/labnotes/004).

And, just as we saw in [LN 030: Foldable views](/labnotes/030), we can collapse some of these items back under the primary todo view on the left, letting us focus on the resources we need right now.

It’s also swappable: This browsing path is simply a fullscreen view of the references from any item. We can swap it out for another, such as a canvas, if we need.

These items we open in the workspace are now references within the enclosing todo item. When we close this todo workspace, we know that everything we used in the course of this task is saved within it. Later, if we open it back up, everything will remain in this non-volatile workspace.

Or, if we open this todo within another workspace, its items will come with it.

Consider: When we open this todo as a column in another browsing path, we see its item view above a list of its references — all the items we used to work on this task so far.

[![A list with the enclosing todo's view at the top, followed by a list of its four references to documents and links used in the course of working on the task.](/assets/imgs/labnotes/LN033.C.png)](/assets/imgs/labnotes/LN033.C.png)

With just one item view for todos — a simple view that horizontally stacks a checkbox and a text input — our system can use reference views to give us lots of other ways to make use of our todo items. We can swap these views out as needed, and new reference views can be built and used, with any item and its item view, to explore new ways of interacting with our things.

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer/).

---

[« Previous: LN 032](/labnotes/032)

[TOC](/labnotes/000)

[Next: LN 034 »](/labnotes/034)

---
