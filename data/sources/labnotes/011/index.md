---
title: "LN 011: General purpose personal computing software"
url: https://alexanderobenauer.com/labnotes/011/
scraped_at: 2026-03-06T21:06:00.988Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 011

04•10•2021

# General purpose personal computing software

Today’s lab note is a bit of a departure from the previous ten. Rather than exploring demos, I want to explore some ideas and implications from the previous two.

The immediate predecessors to the kinds of computers we have today were [analog computers](https://en.wikipedia.org/wiki/Analog_computer). They consisted of hardware physically arranged to compute specific things. The computers physically embodied the program they were meant to run.

Imagine that you have to build a physical machine that could double numbers given to it (forgive that the simplicity of this initial example does not require an analog computer to solve). You might have one dial that the user would rotate to point to an input number, and another dial that rotates as a result to point to its double. With the right gear ratio between two cylinders behind the dials (or even just a specific set of labels on the face), your physical computer would work perfectly.

If you continue to imagine ways in which analog computers might use physical arrangements of hardware to calculate increasingly complex kinds of problems, you can see how our computers worked before they were digital.

The most well-known was probably [Vannevar Bush’s differential analyzer](https://en.wikipedia.org/wiki/Differential_analyser) in the early 1930s. It took up an entire room with its many gears, rods, and wheel-and-disc “integrators.” It was a groundbreaking machine.

But these analog computers were inherently built to perform one kind of calculation. Often they had to be physically rearranged to represent a different set of variables or inputs, sometimes even requiring a few days’ manual labor to arrange the calculation physically.

The key to unlocking the future of computing was general purpose hardware. As you know, we did make it there, though only after a number of critical steps. [\[1\]](#note1)

The final keystone was when the program that a computer runs was moved to where the data is stored, rather than being represented or input physically. This effectively created what we now know of as software. Obvious in hindsight, yet almost impossible to see from the past’s vantage point.

The instructions that the hardware would run could be kept in the computer’s storage, just like any other data. But it was _special_ data. It could be called up and executed. This gave us truly general purpose hardware. Your computer could now run any supported program without requiring any hardware changes, or even inputs.

In [LN 009](/labnotes/009), we explored how a user might swap out or even redesign view components for any items in their system (where items are all of the “things” we work with — emails, todos, events, lists, list items, and so on).

In [LN 010](/labnotes/010), we explored how a user might do the same for application or system views, designing new such views in a simple composer interface.

Within the system, the result of using the composer interface is a view definition item. It is an item just like everything else in your system — just another digital “thing.”

In fact, every view in my demo operating system now works this way: they are view definition items, stored as a part of the system, which the user can modify, replace, destroy, or recreate as they please.

As I’ve been rebuilding my demo OS with this architecture, it strikes me how simple the convention has become: the entire system is simple items, all the way down. From system views, to application views, to things within those views, like inboxes, and further things within those things, like emails and recipients — it’s all items.

As an example of the implications that result from this arrangement: This means you could freely duplicate some app, should you decide you want to use two separate instances of it, with separate data inside.

In this way, the entire operating system is largely an item hierarchy. And the system renders items using view definition items stored within that hierarchy. The system that the user interacts with is almost entirely constructed within their hierarchy, which they are free to remix or reshape as they co-evolve their system with their work and processes.

It is remarkably simple, and also incredibly flexible. From [LN 010](/labnotes/010):

> With provided building blocks, you could start the OS from scratch and build up any interface system you wanted. Or starting with a selected default set, you could swap components \[in and\] out. Or following the lead of someone with working styles similar to your own, you might use their published view definitions and hierarchy to get started.

Essentially, if you want the system to behave differently, it is only a matter of changing or replacing your stored items.

Recall the last critical step that gave us truly general purpose hardware. It involved:

1. Storing programs just like any other data,
2. But treating them as special data that could be executed by the system,
3. Allowing the hardware to become general purpose hardware.

Given the architecture of my system after the last few Lab Notes, we are now:

1. Storing view definitions just like any other data items,
2. But treating them as special data items that the system uses to render other data items
3. Allowing the software to become general purpose personal computing software?

Just as hardware eventually became general purpose, now could the software become general purpose personal computing software so that each user might be free to co-evolve, discern, and arrange their best personal computing environment?

I’ve found this parallel to be an interesting perspective to consider the architecture and implications of the system I’ve been building, or at least of one important aspect of it.

Is it meaningful? Is anything within it novel? I’m not sure just yet. Lots left to explore. What would general purpose personal computing software meaningfully afford us — if anything?

Of course this question is bigger than the work I’ve put forward thus far, but this is the point: to see what bigger questions might lead us to the bigger answers. This is ultimately, always, the goal of my research: To open up our thinking.

Thanks for reading along!

## Notes

[\[1\]](#return1) Figuring out that using the binary (or base-2) numeral system, rather than our preferred decimal (or base-10), was one such critical step: it made possible the representation of increasingly complex things within a system whose components would be simple enough to reason about and construct. Figuring out how logic gates could be arranged in different ways for basic arithmetic was another series of critical breakthroughs. [\[Return\]](#return1)

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 010](/labnotes/010)

[TOC](/labnotes/000)

[Next: LN 012 »](/labnotes/012)

---
