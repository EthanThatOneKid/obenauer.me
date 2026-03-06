---
title: "LN 024: Mutations &amp; Item change logs"
url: https://alexanderobenauer.com/labnotes/024/
scraped_at: 2026-03-06T21:06:01.275Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 024

03•12•2022

# Mutations & Item change logs

What if the operating system of the future could treat the transformation of
data as an important piece of data itself?

In many of these Lab Notes, we’ve discussed the concept of an operating system
based around the _items_ of your personal computing domain: emails, tasks,
notes, events, articles, and so forth.

Your items can be described entirely in terms of the changes made to them over
time. Let’s call those changes _mutations_.

An example of a task item might be made up of these mutations:

1. Day 1: **Create** item of type task
2. Day 1: **Update** item title to “Send final proposal to Allaya”
3. Day 3: **Relate** item to an email item associated with the task
4. Day 7: **Update** item status to complete

All together, these mutations describe this item: its state from any point in
time can be derived by taking into account all of the mutations made up until
that time; its most current state can be derived by taking into account all
mutations ever made on it.

In the itemized OS, item drives ([LN 018](/labnotes/018)) serve up not just the
item graph as it stands at present, but also the mutations that led to the
current state (of course, it’s up to the item drive how it stores this data —
e.g. as state or as changes).

There are many interesting things we can do with mutations that we’ll cover in
future Lab Notes. But for now, let’s look at some of the benefits we get by
having this data be part of the system. As usual, I’ll start with the simplest
things, and move into the wilder ones as we go (so stick around / jump around).

Each item in this system inherently has a change log. This data is part of the
item storage itself, and can be surfaced by views ([LN 006](/labnotes/006)) in
various ways. In one kind of view, it might be useful to simply have a list of
the changes made to something being worked on, off to the side.

In another kind of view, it might be useful to have a scrubber that lets you
slide through the changes made to an item over time. For example, you could have
an item in which you’re drafting an article, and scrubbing through its history
could let you see, or share with others, the article’s evolution (and
potentially, therefore, watching the thinking behind it develop).

With mutations, we can recreate the item at any point in its history; it serves
as an automatic form of version control. You could even restore your entire
system to some specific point in time, or look at your entire system from some
specific date; it would recompute everything up to that point.

The daily summary ([LN 017](/labnotes/017)) can include items which had
significant changes, such as a task item being completed on that date, without
having to create extra references among the items. This is because the
information about an item’s relationship to that date is in the log of its
mutations. Your daily summary could be set up to show one section of tasks
completed on that date, and another section of all other items created or
modified on that date grouped by type: notes first, and on from there. These
changes would be associated with the date via mutations, and you could jump
between the two (the daily summary, and the items which have mutations from that
date).

You could also transclude an older version of some item as an artifact within
another: for example, a now-removed passage from an article being written could
be referenced from some other item for further thinking or writing.

Transclusion has been covered in these Lab Notes as an interesting way to view
the same data in different places with different representations. Similarly, you
could view the full, current state of an item or just the recent addition that
got it to that state, depending on your needs. For example, if you’re reading an
in-progress document for the first time, you simply want to read the current
draft. But if your collaborator has made some edits, say by adding a new
paragraph, your focus might now be on what’s changed since your last review.

When a mutation is the result of an action taken via a service
([LN 020](/labnotes/020)), the mutation could also hold some information on the
action that prompted it. Then little would be left to mystery when wondering why
something has changed.

One last thought for this lab note:

What if the “delete” mutation was, just like the others, kept in an item’s
change log, rather than erasing the data?

The delete mutation could, in some cases, include a reference to what the item
became. For example, when you send an email, the draft item is deleted, and the
delete mutation could include a reference to the new, sent message that it
resulted in.

Naming a successor when an item is deleted allows you to see the draft still in
a daily summary, or anywhere it’s referenced with other items, even though it is
now “deleted” from your system (which means it won’t accidentally be linked to
when you mean to reference the message you sent). Whenever you pull up the
deleted draft, from a daily summary or a reference made to it from before it was
sent, you will be able to easily jump to the sent email it eventually resulted
in. Similarly, when viewing the sent message, you’d be able to click into the
draft item that resulted in it, where you could see the history of changes made
to it, or the items referenced from or associated with it.

I’ve wanted this in my notes for a long time: quite often, one note succeeds
another; I want to remove the former from being referenced in the future by
accident, but it should still be kept around as an artifact, and the inbound
links to it should not be lost. It’s an important artifact, as I may want to dig
into more of the background thinking that was eventually replaced; but in future
notes referencing the ideas, I’d like its successor to be the source of truth
for that idea.

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/status/1502673485952430085).

---

[« Previous: LN 023](/labnotes/023)

[TOC](/labnotes/000)

[Next: LN 025 »](/labnotes/025)

---
