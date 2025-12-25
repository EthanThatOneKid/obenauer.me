LN 039: Notes on time

[

# Alexander Obenauer

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 039

10•19•2023

These Lab Notes document my research in progress. My research area is in the
future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/038) [Next](/labnotes/039)
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

# Notes on time

Our sense of time is, like computing, based on some unchanging fundamentals, and
we build on those with more concepts that help us. Our days and years are set by
the earth’s rotation and orbit around the sun. Our weeks and months are imagined
constructs to help us.

We experience everything within one linear progression of time. This simplicity
lets us root lots of our understanding and thinking within it. It serves as a
fundamental organizing principle for our memories of the past and our plans for
the future. We experience and use its various scales — seconds, minutes, hours,
days, weeks, months, years, decades, centuries — all quite differently, yet each
of these measures is simply embedded within the next.

When we fabricate a digital world, a freeform environment in which our digital
artifacts and experiences live, we can ground that limitless realm with a deep
understanding of time [\[1\]](#note1); one formed with more than an only literal
interpretation of it, but also with a more human interpretation of time, which
often ebbs and flows, stretches and compresses, as our mental constructs relate
to different periods of time with varying weight and associations. Rooting the
digital realm on a fundamental understanding of time would allow its human
operators to rely on intuitions we’ve long honed and harbored, reigning in some
of the complexity inherent in our work, in our lives, and in operating the
digital realm in support of these.

**Aligning timelines, and considering irregular timelines**

In the [last lab note](https://alexanderobenauer.com/labnotes/038/), we saw a
demo in which a runner brought weather data into the same timeline in which he
was reviewing his pace from a recent run. This let him compare his pace with
temperature and humidity data shown in the same timeline. When items are
associated with timestamps, users can bring them together into unified
interfaces, even when items are independent of one another (of different types
and/or from difference sources). Users can do this without needing a developer
to build some “integration” between the two; the system is capable of
integrating this related but independent data when using the items’ associated
timestamps.

But there is a catch from last week’s example: the runner’s timeline was
irregular. The runner doesn’t think of their workout in terms of what happened
from 12:00 to 12:30, then 12:30 to 1:00, and so on; they think of the first
mile, second mile, etc. What is depicted in the pace chart are time slices which
aren’t exactly the same as one another; the first mile may have taken a little
longer than the second, the third has its own timestamps, and so on.

This chart matches the user’s understanding of the data they would like to
interpret, so it’s important that the system understands this irregular timeline
as well. When the system understands even this irregular timeline, it can allow
the user to take advantage of the same properties of their system that allow
combining independent, related data: dragging the weather data into the
mile-based timeline is not a problem; the system can overlay the changing
humidity at each mile’s timestamp.

This opens up lots of opportunities to bring together independent data which is
related by time.

**Timeline of use**

Whether it’s visualized or not, consider the timeline that forms as you use some
program: each action you take moves you forward in this timeline. This “timeline
of use” is one of the ways we experience the operating system’s understanding of
time. Your actions are associated with the specific times at which you took
them. But: are there ways to move around this timeline?

If users don’t have simple access to past program states, then progressing in
the software is a destructive action; it erases options that were available
before. Where this dynamic is unintentional, it undercuts the user’s success in
the program. In programs where progress is a destructive action, I often find
myself falling into various anti-patterns to avoid missing out on other paths
forward.

Many software programs’ interfaces are a cross-section snapshot from the end of
the “timeline of use,” showing you the current state or composition. Some
programs show you the timeline of use, depicting your progression through them
in the interface as you go. And sometimes you can pick in which of these modes
you work: When you use a text editor without editing what you’ve written, only
adding to the text downwards, even as you add new ways of saying or
understanding something written earlier in the text, you’re implicitly using
this interface in the latter way; the document exists as a visualization of your
timeline of use. On the other hand, when you use a text editor by continuously
modifying the text, you’re using the interface in the former way, as a snapshot
of the most recent state.

Your actions move you forward in this timeline of use, but in some programs, you
can conceptually “move backwards” too. When you undo a few recent changes, the
program may return to a state a few frames back on the timeline. In reality,
you’re still moving forward, however: your timeline of use is simply progressing
forward with your new actions. You’re working with actions that have timestamps
in the past, and to do so, you’re taking actions that have new timestamps in the
present.

The operating system of the future should have a clear physics for moving around
your timeline of use — think of “undo” as a light-weight instantiation of this
thinking.

In some kinds of programs, like a DAW or NLE, what you’re composing within the
software is a timeline. In these programs, the depicted timeline you’re working
with is the most recent state in your timeline of use. From left to right, you
see the audio or video composition. The timeline of use is perpendicularly
oriented to the timeline of your composition, flowing backwards away from what
you currently see on screen. If an operating system had a more complete
understanding of time, with universal physics or interactions to navigate the
timeline of use, it would likely want to make careful consideration for how
operators interact with timeline compositions such as these.

**Moving between timescales**

While working on the prior lab note, not being a runner myself, I watched videos
from runners who use the same app as my friend so I could become more familiar.
Something that struck me: a surprising percentage of the videos had various tips
about seeing different overviews of your data. One tip was to see your weekly
recap, which involved a series of taps around the interface, leaving your latest
race overview, going to your profile, and into a fairly plain interface
summarizing the week. Another gave the tip of seeing your yearly summary, which
was somewhere else, and was visually rich. Then another gave a tip that you
could see a portion of the yearly summary before the year was over (it may have
been a month, or some other duration larger than a week), which was retrieved in
some other way.

Is there room for a universal physics for moving between different timescales?
It is a common interaction, but always implemented in a different way. If there
were a common set of interactions, regardless of data type, for navigating
timescales, users wouldn’t need these kinds of “tips” in each and every
different app; the runners could navigate to the larger summaries from the
overview of their latest run. They could also navigate down to more specific
detail within their latest run from that same starting point, using the
system-wide interactions for adjusting timescales.

Or, instead of moving between different timescales, are there ways to explore
how different timescales can be represented in singular, fluid interfaces? For
example, a calendar might show a lot of detail for your events today, and it
might show decreasingly-detailed overviews of future or past days or weeks on
the periphery, as a sort of fish-eye lens focused on the present.

**Where to from here**

A “universal physics” for combining independent but time-associated data,
traversing the timeline of use, and moving between different timescales would
allow our operating system of the future to be more supportive of the ways we
think in our lives and work. With a proper understanding of time, our interfaces
can become more expected and more combinatorial. They can tap into our nature;
our intuitions we’ve honed over the millennia. We can have a consistent set of
interactions for the self-organizing dimension in which all of our experiences
are rooted.

The last two lab notes looked at making
[gestural view construction](https://alexanderobenauer.com/labnotes/037/)
possible. A fundamental understanding of time is instrumental to unlocking many
of these ideas with all of the time-aligned data in our lives. Time-aligning
things helps make it easier to spin up interfaces quickly: instead of calling up
today’s rigid, one-size-fits-all interfaces, we want to spin up what we need for
each day’s work. Time-aligning and similar approaches make it possible to do
this without needing a developer to have built a custom integration between two
data types or services. You get implicit relationships among lots of items,
without having to set up any references manually, allowing you to create
extemporaneous, meaningful organizations later as needed.

## Notes

[\[1\]](#return1) We can construct the digital realm out of an infinite
arrangement of concepts. Concepts can be imported from the physical realm,
manufactured as new abstractions, or based on the concepts we use to understand
and explore the physical realm, but iterated into the digital world.
[\[Return\]](#return1)

\[P.S.\] An additional consideration for time in the OS of the future: ambiguous
times / soft edges. One of the goals of
[OLLOS](https://lab.alexanderobenauer.com/updates/spaced-review) is to explore
reifying the development and decay of the importance of the things in our lives.
Quite often, things don't have a hard start and end time or date; sometimes
things bubble up into an important class in our lives, after starting as
something small; and sometimes things slowly drift away, taking up less of our
attention and time as time goes on, eventually becoming unimportant. But rigid
interfaces require we make firm decisions about things — timestamps must be hard
edges, set down to the second.

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or
come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com),
[on Mastodon](https://mastodon.social/@alexobenauer/111262886087612420), or
[on Twitter](https://twitter.com/alexobenauer/status/1715059061509763508).

---

[« Previous: LN 038](/labnotes/038)

[TOC](/labnotes/000)

[Next: LN 039 »](/labnotes/039)

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
