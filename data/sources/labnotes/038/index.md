---
title: "LN 038: Semantic zoom"
url: https://alexanderobenauer.com/labnotes/038/
scraped_at: 2026-03-06T21:06:01.649Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 038

8•28•2023

# Semantic zoom

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

## Notes

[\[1\]](#return1) The word “heresy” here is an intentional lens that John sees works like these through; after seeing an experimental demo, he once asked what was “heretical” about it for the context we were building it within, and the question has stuck with me since. I can see the heresy implicit within his own works, and I now look for it in mine. When I can't find it, I often instead find that I'm only making something meant to appease.

It reminds me of this lovely passage in Rosanne Cash’s memoir in which a mentor helping her improve her songwriting, whenever her songs were too “perfect,” would ask, “but where is the _madness_, Rose?!” [\[Return\]](#return1)

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer/110967916618246105), or [on Twitter](https://twitter.com/alexobenauer/status/1696180486983307488).

---

[« Previous: LN 037](/labnotes/037)

[TOC](/labnotes/000)

[Next: LN 039 »](/labnotes/039)

---
