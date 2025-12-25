LN 038: Semantic zoom

[

Alexander Obenauer
==================

](/)

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 038

8•28•2023

These Lab Notes document my research in progress. My research area is in the future of personal computing.

[TOC](/labnotes/000) [Previous](/labnotes/037) [Next](/labnotes/039) [Latest](/labnotes/040)

* * *

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

Semantic zoom
=============

In the [last lab note](/labnotes/037/), we started to explore how users might construct the interfaces they need with natural gestures. It held a glimpse at semantic zoom in an itemized environment:

 Your browser does not support the video tag.

As the email item view gets bigger, the preview text of the email’s contents eventually turns into the fully-rendered email. At smaller sizes, this view makes less sense, so the system can swap it out for the preview text as needed. As seen in previous lab notes, earlier constructions of this environment had two to three view definitions for items (small, large, and full screen). The latest, as seen in this demo, allows for view components within one item view definition to swap out depending on the space available. This allows for the physicality and fluidity that this latest experiment required.

Let’s take this thinking further.



Our computers and networks host massive amounts of data. Our field of view on all of that data is defined by the interfaces we use. Rigid, pre-packaged interfaces don’t let us move our field of view around, should we wish to get a different vantage point on some data we care about. Let’s look at something towards the other end of the spectrum:

An interface that allows users to scale the level of detail shown on different nodes as needed, by John Underkoffler. [View it on Vimeo](https://vimeo.com/126755294).

This “undulant interface” was made by John Underkoffler. The heresy implicit within [\[1\]](#note1) is the premise that the user, not the system, gets to define what is most important at any given moment; where to place the jeweler’s loupes for more detail, and where to show only a simple overview, within one consistent interface. Notice how when a component is expanded for more detail, the surrounding elements adjust their position, so the increased detail remains in the broader context. This contrasts sharply with how we get more detail in mainstream interfaces of the day, where modal popups obscure surrounding context, or separate screens replace it entirely. Being able to adjust the detail of different components within the singular context allows users to shape the interfaces they need in each moment of their work.

Pushing towards this style of interaction could show up in many parts of an itemized personal computing environment: when moving in and out of sets, single items, or attributes and references within items.



As he’s preparing for his first appearance in the Ironman 70.3 World Championship, Colin Lord continues the intense regimen of practice that has helped him finish seven prior 70.3 Ironman triathlons, and one full-length Ironman. His training gives him lots of data, of which he walks away with many questions. Here’s his data view following a recent run:

![A summary of Colin's recent run shown in a table on the left, a map on the right, and a timeline on the bottom.](/assets/imgs/labnotes/LN038.A.png)

A summary of Colin's recent run shown in a table on the left, a map on the right, and a timeline on the bottom.

Though he knows it’s not fairly common, Colin’s left needing more:

> What if there was a way to overlay somehow that I drank half a bottle of BodyArmor when I started the run? And at mile 6, I briefly stopped to drink some water and eat an energy gel.
>
> And then how can I compare how that nutrition impacted my metrics compared to two weeks earlier when I did the exact same run but ate/drank food at different times?
>
> But wait, there’s more. Two weeks ago, it was much more humid than it was on Sunday. How can I connect the weather data, such as temperature, cloud cover, humidity, etc to each run? And can I see how that impacts my pace?
>
> Everything I just typed out is basically from memory. There is no tool that lets me put on a map or a workout how all those things are connected together. This product doesn’t exist because 95% of people running don’t need to know, nor care about a variation in humidity or the amount of calories consumed from one Sunday morning run to another.

In a very specific way, this is what we explored in the last lab note: everyone has unique needs and context, yet that which makes our lives more unique makes today’s rigid software interfaces more frustrating to use.

How might Colin use the gestural, itemized interface, combined with semantic zoom on this plethora of data, to elicit the interfaces and answers he’s looking for with his data?

This exploration is far from perfect, and could be improved greatly with more time spent experimenting with these environments in the course of Colin’s training, but it’s a glimpse at where we might begin:

If we have the latest run in our gestural itemized environment, we can look at more data by magnifying the item, just as seen in the last lab note’s demo. But now, we will also focus in on pace, to get complete detail of this important stat, add some notes to the timeline, and expand the elevation detail:

 Your browser does not support the video tag.

Expanding a workout item with a magnification gesture, we can see the summary of stats expand into more detail. Clicking pace then shows it on a timeline, to which we can add notes with further detail. Finally, clicking elevation adds this data to the timeline chart.

It’s a similar set of interactions with weather: various stats can be expanded into a timeline, or left as a summary. Then we can connect the workout and weather items, so that we can see their data together:

 Your browser does not support the video tag.

Expanding a weather item's humidity for more detail, then connecting the workout item to it, so that the weather detail appears in the workout item.

As an aside: We will explore this more in an upcoming lab note, but you can see here how the system has an understanding of time that follows our own and supports our work and interactions. Colin might think of his workouts in terms of each mile, but mile 1 may have been 10 minutes, mile 2 may have been 8.5 minutes, and so on. These are sequential blocks of time, but they have an irregular rhythm. Even so, our system has an understanding of this data, allowing us interactions that combine previously independent data that describes the same time periods onto uniform timelines.

Finally, we can open up the last run from this route to compare our pace:

 Your browser does not support the video tag.

Opening the most recent related workout to compare how pace was impacted by the details unique to each.



There are other ways to move into this example, with concepts from previous lab notes. For example, since workout items each have data with associated timestamps and locations, the system knows it can offer both a timeline and map view. And since the items are of one kind, it knows it can offer a table view. Instead of selecting one view to switch to, as we first explored in [LN 006](/labnotes/006/), we could drag them into the space to have multiple open at once.

Either way, the bigger picture is this: as we understand our unique needs better, it should become easier, not harder, to see how our interfaces could support our improvement and serve our daily lives.

This was explored abstractly in [LN 011: General purpose personal computing software](/labnotes/011/), and more concretely in this latest experiment.



_A big thank you to Colin Lord and John Underkoffler for letting me include the demos, data, and screenshots in this lab note, and for the conversations that led to it._

_The IRONMAN 70.3 World Championship is wrapping up in Lahti, Finland as this lab note is being published. Colin set a new personal record for the 70.3 race. (Congratulations, Colin!)_



Notes
-----

[\[1\]](#return1) The word “heresy” here is an intentional lens that John sees works like these through; after seeing an experimental demo, he once asked what was “heretical” about it for the context we were building it within, and the question has stuck with me since. I can see the heresy implicit within his own works, and I now look for it in mine. When I can't find it, I often instead find that I'm only making something meant to appease.

It reminds me of this lovely passage in Rosanne Cash’s memoir in which a mentor helping her improve her songwriting, whenever her songs were too “perfect,” would ask, “but where is the _madness_, Rose?!” [\[Return\]](#return1)

**Something spark a thought?** [Email me](mailto:alexander@obenauer.com), or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer/110967916618246105), or [on Twitter](https://twitter.com/alexobenauer/status/1696180486983307488).

* * *

[« Previous: LN 037](/labnotes/037)

[TOC](/labnotes/000)

[Next: LN 039 »](/labnotes/039)

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)