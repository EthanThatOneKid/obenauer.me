---
title: "LN 031: Fluid workspaces"
url: https://alexanderobenauer.com/labnotes/031/
scraped_at: 2026-03-06T21:06:01.449Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 031

09•18•2022

# Fluid workspaces

We have previously explored how workspaces in the itemized OS might work, such
as in [LN 004](/labnotes/004), which includes some demos of browsing paths.

The concept involves having an item just like every other in your itemized
system: it has a type, attributes, and references to other items. In this case,
its type is _workspace_, it might have a title, and it references the items you
have opened within it.

This gives you non-volatile workspaces over heterogenous collections of items,
to which you can return in the future as you wish, to continue or review some
line of work or train of thought.

But when starting to use these workspace items, I immediately ran into a
limitation:

With this itemized setup, whenever you returned to a workspace item, you’d
return to it at the same level of detail that you last left it. This makes sense
in the case of continuing past work, but it is quite often, maybe more often,
that I return to past work to work off of its results; I need a summary of its
thinking, to embark on new work with its own, new details.

It seemed that our digital workspaces should be more fluid, less rigid; that
thinking [native to the digital realm](/labnotes/013/) would be more flexible
with what level of detail you view items with.

Here’s a simple example:

Let’s say you’re in a workspace, listening to a podcast episode. Maybe you
opened the podcast episode from a webpage you had open. As the episode plays,
you realize that you would like to take some related notes. You open a new pane
within your workspace, and take your notes. You can pause and play the podcast
in the pane on the left, and you can take your notes in the pane on the right.

![Workspace with a podcast episode playing on the left and a note about it being written on the right.](/assets/imgs/labnotes/LN031.A.png)

This whole workspace is non-volatile, so you can freely leave it when you’re
done or when you need to work on something else, and you’ll be able to open it
back up in the future to see all of these things — the note, and the podcast
episode (along with anything else you had open in the workspace, such as the
webpage that led you there).

_But there’s a catch._ You’ll return to it at this same level of detail: a full
browsing path with each of these items taking up an entire pane. In reality,
quite often you’d probably want to bring it into a new workspace where you’re
developing some other thinking or work in other panes. Ideally, you would want
all of these items related to the podcast episode collapsed into one.

There are some solutions to this problem that we already have available: When
you’re finished with your note and podcast episode, you could drag the podcast
episode into the note itself, as we saw in [LN 002](/labnotes/002). But why
should you have to prepare items for some future use that you can’t predict? You
would have to do this kind of prep work constantly as you use your system, even
though you would only use some small percentage of those prepared-in-advance
items. You could always start notes that way: with the podcast episode and note
in one pane; but why should there be one specific course of action required in
order to gain the benefits of the system in the future? Shouldn’t you be able to
simply move through your course of work more freely – representing these items
as two separate panes if that’s what made sense to you – and not be stuck with
an inferior representation in the future as a result?

Once I hit this issue, I was curious to explore better solutions. Here’s one
such experiment.

What if, instead of workspaces being a specific _type_ of item, they were an
_item view_ that you could use with _any_ item?

We discussed item views starting in [LN 006](/labnotes/006), where we saw that
you can flip around various item views for an item you have open. Your items are
separate from the interfaces that render them (and from the services that supply
them), which lets you choose the exact view components you want to use with any
given item.

So let’s go back to our note and podcast episode, but this time, instead of
these items being open in a workspace, they’re simply references within an item
rendered by a workspace item view.

The difference is unidentifiable at this point, but this new thinking leads to
some changes in what we can do:

Consider: With this root item open in a workspace, with its two references in
their own panes, if we want to “collapse” these items together, all we need to
do is open our current root item within a new root item, where it will take up
only one pane.

And we can give this “zooming out” action an easy button:

Your browser does not support the video tag.

Video showing the user pressing a "collapse" button that brings the two visible
panes into one; the root item that was presented fullscreen before is now
represented as one pane within a new fullscreen, root item.

Now we can continue our work with other items alongside this collapsed item.

We can also “zoom in” — pressing a button to open one item fullscreen; this
takes us back to the original level of detail.

Your browser does not support the video tag.

Video showing the user pressing an "expand" button that brings the collapsed
pane back into two; the item is now the fullscreen, root item as it was before.

And if we give this overarching item a title, in the future when we look for
this episode and note, we will find this complete item. We can then open it as
one item in a new workspace, or as the fullscreen workspace itself, depending on
which level of detail we’re interested in.

Instead of getting stuck with your note and podcast episode being separate
because that’s how you happened to start, you can more flexibly move among
potential views; no matter how you start, or how you want it to appear later,
you are now able to do it, clearly.

In this scenario though, once you open the “collapsed” item, you would be
presented with summary views for the podcast episode and the note you took. For
the podcast episode, that’s fine, but if you want to edit the note, would you
need to open it in a separate pane? What if you’re working through a path with
lots of other things, shouldn’t you be able to work on that note in this newly
collapsed pane?

One way might be unfolding the view in-place as we saw in the last lab note,
[LN 030](/labnotes/030).

But there’s another way that doesn’t take up more horizontal space:

Let’s try expanding a summary item view into its full, editable counterpart —
inline.

Your browser does not support the video tag.

Video showing the user back in the collapsed item, but now expanding the note
inline so they can continue editing it without taking up more panes.

Now we can modify the note within our collapsed item pane.

Plus, if we can do this recursively, expanding inline items within inline items,
we end up with something familiar: an outliner. And if we can create these items
inline too, by indenting as we go, it opens up full outliner views within these
itemized interfaces. This is a useful alternative way to interact with our
itemized graph: outliners let you construct, view, and modify many levels of
referential (or hierarchical) depth at once.

This entire experiment raises some interesting questions. When workspaces are no
longer specific item types themselves, but are instead fullscreen views on any
of your items, we change some of the core concepts of using this system.

The buttons that let us change what item is fullscreen introduce navigation
along another dimension within the system, seemingly giving our interface a
z-axis to allow us to move in and out of detail within our graph of items.

Any item can be opened fullscreen, and we can use any item view we like to
render them when they’re fullscreen. In this lab note, we saw all items as paths
of their (outgoing) references.

Taking it further, you might have an item that represents a certain project, and
you could use some other kind of view to render it when fullscreen, such as a
two-dimensional canvas in which you arrange the items relevant to that project.

But there is now less of a technical distinction between this project item and
an item you spin up as a “temporary” workspace to gather some items as you
follow one train of thought or line of work.

Items you use as transient workspaces are simply items within your graph, like
all others. And all items can be opened as their own working space.

This has some interesting consequences.

For example, an item could _progressively develop_ from a transient working
space into a long-term item representing something important. This fluidity more
closely matches how we interact with the things of our lives! Ideas and projects
often start as quick dives before becoming big, important pieces of our life’s
work. Being able to move fluidly from thinking about some item as a transient
workspace to a more permanent item within your graph would be quite useful.

But with no type distinction between transient working items and long-term,
important items, how does your system handle prioritizing things when you’re
searching your graph, or when it offers related items? (The answer would likely
consider frequency of usage, and the references your items have with other items
in your graph. But what else?)

Finally, how would we show recent workspaces to users so that they are still
“non-volatile”? Before, we would simply show a list of the recent workspace
items (see “recent paths” in [LN 004](/labnotes/004)). But with this new
experiment, when workspaces aren’t an item type, and we’re additionally moving
through our items across the dimension of detail, how would we want our recent
items displayed so that we could easily pick up on ongoing work later?

**Something spark a thought?** , or come chat
[on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer), or
[on Twitter](https://twitter.com/alexobenauer/status/1571534031749251072).

---

[« Previous: LN 030](/labnotes/030)

[TOC](/labnotes/000)

[Next: LN 032 »](/labnotes/032)

---
