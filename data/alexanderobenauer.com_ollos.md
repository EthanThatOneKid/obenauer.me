OLLOS  body, html { --background-color: #F2F0ED; background: #F2F0ED; } #top-left { margin-top: 50px; font-size: 28px; margin-left: -50px; } @media (max-width: 800px) { #top-left { margin-left: auto; margin-right: auto; } } article { font-family: 'Crimson Pro', serif; font-weight: 300; } article b, article strong { font-weight: 600; } article a:link:not(.no-underline) { text-decoration: underline; text-decoration-thickness: 1px; } .article-width { max-width: 90%; } @media (max-width: 760px) { .article-width, .fullwidth { max-width: none; } } .tufte-big { font-size: 26px; line-height: 32px; max-width: 600px; } .big-shadow { /\* https://smoothshadows.com/#djEsMSw1LDAuMDgsNzYsNjcsMCwjMDMwNzEyLCNmMmYwZWQsI2ZmZmZmZiwy \*/ box-shadow: 0px 3px 3px rgba(3, 7, 18, 0.02), 0px 11px 12px rgba(3, 7, 18, 0.03), 0px 24px 27px rgba(3, 7, 18, 0.05), 0px 43px 49px rgba(3, 7, 18, 0.06), 0px 67px 76px rgba(3, 7, 18, 0.08); } .wider { margin: 0 -60px; } p.dropcap::first-letter { float: left; line-height: 100%; font-size: 300%; /\* margin-top: 0.025em; \*/ margin-bottom: -0.2em; margin-right: 0.1em; } @media (max-width: 760px) { #link-list { word-break: break-all; } } .hidden { display: none; }

[AO |](/) EXP 002

![OLLOS logo](/assets/imgs/ollos.svg)

An itemized personal computing timeline

We experience life along a self-organizing dimension: time. We think of our experiences and the things that matter to us in its terms quite often. Our digital environments should match that understanding, to support our mental models for memory and recall, planning, and so forth.

OLLOS is an experiment that organizes everything in my personal computing environment on one unified timeline. It’s a personal interface I worked on and in from 2021 to 2023. This essay is mostly comprised of notes taken in 2022 during development, since polished for publication.

Let’s start with a demo. Here’s the first few minutes of a video I sent to [members](https://alexanderobenauer.com/membership/) in 2022 with a good overview:

[

ALEXANDER OBENAUER

](/)

[Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20reading%20about%20OLLOS%2C%20and...%20%0A%0A)   [Bluesky](https://bsky.app/profile/alexanderobenauer.com)   [Mastodon](https://mastodon.social/@alexobenauer)   [Twitter](https://twitter.com/alexobenauer)

Want to receive my work as I publish it?

Don’t fill this out if you’re human:

 Subscribe

![OLLOS icon](/assets/imgs/ollos-icon.png)

Experiment 002: OLLOS

Circa 2021 - 2023

Pub. Jan. 21, 2024

Swift, C

* * *

_In this essay, I’ll discuss how OLLOS works, how the concept and design evolved, what worked well in daily use, future work that it points toward, and what I learned about personal interfaces during this project._

I frequently find myself reaching for my digital things on dimensions of time, but mainstream software of the day almost always falls short.

In today’s personal computing landscape, the piece of software that primarily lets you view your things organized on the dimension of time is the calendar. It’s terribly limited: it only lets you put one kind of thing in it — the event. It’s also fiercely discrete: each thing must have a firm start and end date and time — you can’t have any of the fuzziness with which we treat most things in our heads. This applies to eventsI often find myself putting a “~” or a “?” at the beginning of an event title in my calendar to indicate that its timing isn’t exact, or that it hasn’t yet been confirmed / may not happen. It’s interesting to consider being able to imbue my calendar UI with an understanding of my little syntax, visualizing these other states in different ways., but stretches beyond them; other types of things interact with time in important, but sometimes unpredictable ways.Speaking broadly of varying types of items in your personal computing domain (projects, conversations, files, and so forth): some things have a clear start date, and fade out over time; some things develop in importance over time, from near none to one of the most important things in your days; some things matter for just a day, some things matter for the entire year. Sometimes we know in advance how long something will be relevant; other times, we can’t predict this in advance.

That our mainstream digital environments don’t operate with a fundamental understanding of time is quite unfortunate. As discussed in [LN 039: Notes on time](/labnotes/039):

> We experience everything within one linear progression of time. This simplicity lets us root lots of our understanding and thinking within it. It serves as a fundamental organizing principle for our memories of the past and our plans for the future. We experience and use its various scales — seconds, minutes, hours, days, weeks, months, years, decades, centuries — all quite differently, yet each of these measures is simply embedded within the next.
>
> When we fabricate a digital world, a freeform environment in which our digital artifacts and experiences live, we can ground that limitless realm with a deep understanding of time.

In [the lab notes](/labnotes/000), we have explored the concept of an “itemized” OS; one in which all of your digital things can be gathered together and used as needed, regardless of their type or source (standing in contrast to today’s siloed apps which only permit the use of the things within one silo and only with the pre-determined interfaces).

OLLOS experiments with an itemized OS’ user environment consisting solely of one unified timeline of all your items. You have everything in it: things you append to it, like notes, tasks, and reminders; and things you receive, like emails or PDFs. Everything appears together, listed chronologically, in one long log.⊕![Picture of Fuller's Chronofile with various items attached to a page](/assets/imgs/labnotes/EXP002.chronofile.jpg)OLLOS is reminiscent of [Buckminster Fuller’s Chronofile](https://en.wikipedia.org/wiki/Dymaxion_Chronofile). But its timeline hosts other things in addition to a log of the past, such as future plans, and mechanisms for reviewing items.

When you navigate to a past item (by clicking a reference, via search, etc.), it takes you to where that item exists within the timeline. So if you navigated to an email you sent last week, you would see the calendar event of the meeting you were in right above it, and a note you wrote or email you sent right after it, within the timeline.

It gives you this new dimension of context for free, as these things are related to one another, but you didn’t have to set up an association between them. When time is your organizing principle, your things organize themselves.

As you look to the past, your timeline might be like a messy desk: you see lots of things all over the place, but you generally know where everything is. You might remember that last March was when you went on that ski trip, and a receipt you’re looking for comes right after it. OLLOS enables this kind of “orienteering” we do in personal computing, where we navigate directly to something in a known location, and browse from there to the desired result. You’ve likely had this experience when looking for an old picture in your phone’s camera roll: you navigate directly to photos in a known time frame, then look more closely forward or backward from there. This sort of “orienteering” is well-supported when the system’s interfaces are well-rooted in our natural ways of thinking.

⊕[LN 036: Free and easy organizations and associations](/labnotes/036) covered these kinds of relationships which OLLOS helps create within a personal graph of items.
[LN 014: The Graph OS](/labnotes/014) discusses the benefits of such a system.In addition to this dimension of context that comes “for free” in the timeline interface, any item in OLLOS can also be replied to with any another, creating a direct link between the two. In fact, when creating a new item, you can make it a reply to multiple other items by simply scrolling around the timeline and picking them up with the reply button.

This makes each item type in OLLOS a potentially new feature for all other item types.This is discussed with respect to itemized systems in general in [The Potential Merits of an Itemized OS](https://alexanderobenauer.com/articles/os/1/). Consider how many software applications eventually include the ability to add notes and reminders to the things they contain (notes on calendar events, reminders or delays on emails, tasks in notes, and so forth). In OLLOS, since I can reply to any item with a note, task, or reminder, this same functionality exists on every item in my system, without having to build any particular integration. This “just works” because of how the computing environment is structured; this is one of the benefits of an itemized operating environment.

Within its timeline, OLLOS displays the past, as described above; the future, for any items scheduled in advance, like calendar events or scheduled to-dos; and a review mechanism for items which you wanted to return to, on a pre-determined schedule, or at an unknown time in the future, when more time might allow (e.g. links to articles you might want to read later) — more on this shortly.

Most items appear in the timeline at the time they were created.

If an item attribute can be updated, such as by completing a to-do, a small update line appears at that time in the timeline.

If an item is scheduled for a future date or time, it appears there instead, and a simple update line appears at the time it was created and / or scheduled.

⊕[![Screenshot of OLLOS, displaying items of different types.](/assets/imgs/labnotes/EXP002.screenshot.png)](/assets/imgs/labnotes/EXP002.screenshot.png)Screenshot of OLLOS, displaying items of different types, and the mention of a created event scheduled for the future.This means that all (scheduled) events appear in (at least) two places: primarily at the time they are scheduled _for_, and secondarily with a mention at the time they were created and / or scheduled. So if I create an event today that’s scheduled for next week, it will appear primarily (with its full item view) at its proper time next week, and in today’s log, I will see a small mention that the event was created and scheduled for next week (which I can click to navigate forward to it).

Showing when I created an event, not just when it is scheduled for, is an idiomatic byproduct of how OLLOS works, and it delightfully surprised me a couple of times in use. First, it helps me to see my past day completely: I can review my day, which includes seeing meetings I’ve scheduled for the future, in the context of what else happened in the day (e.g. during a call with a friend, we scheduled our next chat, and both of these events appear adjacent to one another in my timeline, likely along with the notes from today’s call). This co-location is OLLOS’ primary form of keeping things loosely “linked” by proximity in the timeline.Mirroring the title of [LN 002: Universal data portability](/labnotes/002), Justin Bennett described this property of OLLOS’ timeline as contributing to “Universal data context.”

Second, because Sarah, my wife, and I have shared calendars — one for each of our meetings, and a third for things we’ll do together — I see updates appear in my timeline when she schedules something. This is a very helpful transaction or record; I now know she set up an appointment for something I’m going to with her, or that she set up a meeting in the future, without any kind of extra “notification” feature, and without having to check future dates regularly for updates.

In OLLOS, I can schedule any item on a future date (and, optionally, at a specific time). Besides events, this is useful for things like planning out to-dos or dinner recipes.

Providers exist to bring in items from the exterior world: one for events on my Google and iCloud calendars, one for emails, one for weather forecasts, and so on. Other providers could be built to bring in other items, such as highlights in ebooks, transcripts of calls, photos, etc.

For the most part, provided items are included in the timeline. Emails work differently: received items are collapsed into one row per day. Clicking this row, I can review the list, adding any emails I care about to my timeline.Initially, I wasn’t sure if an email should appear in the timeline by when it arrived or when I’ve added it. I went with the latter, as that seemed more idiomatic in OLLOS, and it has felt right since. Sent emails are always added to the timeline (and to the daily review mechanism if they don’t receive a reply).

Items are stored in the same “item store” I use for all of my itemized experiments, which maintains a chronological list of facts (each fact is an item id, attribute, value tuple — with some other data; most notably, a timestamp). There’s a very convenient property of this arrangement for OLLOS: its timeline interface is an ordered list of the facts, with an appropriate interface chosen for each row. Within each day, OLLOS’ core code is a loop on the facts created on that dayI have simplified a few things here, as groups of facts with the same timestamp and item id are often collapsed into one row, and items with scheduled dates are also injected into the list., passing off the fact to the item view registered for that item type.Item views are discussed in [LN 006: Swappable views](/labnotes/006) and several of the lab notes which follow.

One of the challenging aspects of the design was bringing all of these things into one interface. The solution may be obvious in retrospect, but took some iteration to feel right. Early instances featured a few separate views, notably _“Timeline”_ for the past, _“Planner”_ for the future, and _“Today”_, a special-case combination of parts from each (since “today” always contains some past and some future, plus the present, where the prompt input lives). ⊕![Three small, verticall stacked buttons](/assets/imgs/labnotes/EXP002.threebtns.png)The three-button toggle on the left-hand side of OLLOS. The top button represents the past, the bottom represents the future, and the middle button represents today, which includes pieces of the past and the future, plus some other features and design considerations. Each of these buttons are independent toggle buttons, allowing different permutations to be used for different focuses.Eventually, refinements connected these three into one view. The three-button toggle control on the left of OLLOS’ interface allows for seeing these particular views as portions of this timeline, e.g. allowing me to focus on just today.

Once these pieces were all connected, the prompt input was somewhere in the middle of this large timeline, and felt unanchored; I couldn’t quickly scan for it, or trust where it would be. In addition to making it stick to the top or bottom of the window when it would otherwise be scrolled out of view, I needed a visual anchor to show me where it was at a glance — this is why I added its yellow line.Peter van Hardenberg (PVH) gave this interface element its name: the “horizon of now.” Clicking anywhere around that line scrolls the timeline so that the prompt input is centered at the vertical middle of the view.

These little iterations allowed OLLOS to simplify into a single interface with just a few controls, and yet it supports a wide spectrum of needs in my personal computing life, which I’ve listed toward the end of this essay.

When the “today” section of the timeline is open, indicated by the middle toggle button in the left-hand control, the design changes slightly to put more focus on the present day, and an item review section is shown below the day’s usual items.

The review section includes items which aren’t scheduled for a particular date in the future, but are still considered “active” (such as to-dos that aren’t marked complete). Items can be set to appear in this review section on a regularly scheduled interval, such as once every week, but by default, active items are on a “spaced review” schedule.

From [an update](https://lab.alexanderobenauer.com/updates/spaced-review) sent to members:

> Beyond its primary function, OLLOS lets me see items for review every day: an email I sent that didn’t receive a reply, a link I saved but haven’t read yet, or a task I scheduled but never completed.
>
> It follows thinking that Andy Matuschak has published around [using spaced repetition to help maintain inboxes](https://notes.andymatuschak.org/Spaced_repetition_can_lower_the_stakes_around_destructive_inbox-maintenance_operations) (email inbox, reading list, etc.). Explore his notes for more detail, but generally: traditional clearing actions (e.g. “delete”) are too heavy, so we often don’t take them. This causes an inbox to fill without ever being cleared, rendering it useless. Using spaced repetition gives the user a much lighter action: “skip for now”, which can bring something back sooner at first, but if it is increasingly skipped, the system will wait longer and longer before resurfacing the item.
>
> In OLLOS, we have a spaced review system that brings our items back to us at the bottom of the today view. It surfaces incomplete tasks, links to read later, notes to review, emails to reply to, etc.
>
> In my first approach, I’ve tried to keep it as straightforward and simple as possible:
>
> The system works with items considered “active”: tasks that haven’t been completed, saved emails that haven’t been replied to, and all notes. Beyond this default, the user can set spaced review on or off for any item.
>
> Every item up for review simply has a “review later” button, which roughly doubles how long it’ll take before it’s up for review again. If you’re done with something, you can complete the task, reply to the email, or turn review off for the item. If you aren’t done with something, but you don’t have the time or interest for it right now, you can hit “review later”. The more you hit “review later”, the longer it takes for the item to return, allowing items you’re less interested in to “float away” from you without requiring more destructive or detailed actions.
>
> (This was an intentionally over-simplified approach to get started. My original thinking involved all kinds of overwrought interfaces; I instead opted for this simple take to start down the path.)
>
> As of today, I’ve been living in OLLOS for a month. I’ve found this spaced review system to be helpful with:
>
> **Surfacing past todos.** Plenty of systems will simply drop all past due tasks into some big “past due” list. Or worse, some will perpetually drop undone tasks into today’s list. Instead, in OLLOS, created tasks that were never completed and scheduled tasks are now past due become part of the spaced review system, and are shown in a group at the top of the review section. This has made not doing certain tasks a much less stressful choice any given day. I know that each undone task will show up in review later, where I’ll have the chance to make a fairly simple choice about it: I can do it, cancel it, or float it away — by a little bit at first, and more over time.
>
> **Reviewing notes.** I mainly add notes to OLLOS of little thoughts that don’t have a home yet, or which are still percolating. Trusting that these will come up in my review list has removed more tedious notes review tasks I’ve had in the past, which I’ll often forgo when time is in short supply. I’ve really enjoyed being able to use “review later” with these items, bringing back — multiple times — the notes that have needed more background thinking over the long-term. Having a place for fragments and percolating thoughts to gather more mass over their time in the spaced review was an unexpected new source of help in developing my thinking; I did not realize this was something I’d been missing before. It gives me a place to start the snow ball rolling down the hill; some peter out, others grow into much larger things as they roll.
>
> **Recommending things to read.** Whenever I find an article I might be interested in, I drop it into OLLOS’ prompt input, which adds it to my timeline. If I don’t read it that day, it starts to show up in my spaced review.
>
> **Replying to emails later,** and reviewing sent emails that haven’t received responses yet.
>
> [Experimenting with spaced review in OLLOS](https://lab.alexanderobenauer.com/updates/spaced-review)

This system worked well for things that I might want to dig into when more time allowed (such as links to read later, and review of past notes), but it often got clogged with things that I needed to do, but which I hadn’t scheduled or completed yet (such as tasks or emails which needed replies). Later iterations with different kinds of filters or sort orders helped, but I’ve since removed this part of OLLOS, and replaced it with a new concept. One of the primary goals when creating OLLOS was to have an interface which could reflect the development and decay in importance of the things in our lives, letting each item live on its own epoch. This implies a different “sort order” of active items, and indeed, it’s a particularly useful extension on the OLLOS concept. It still uses this “spaced review” mechanism, but in an interface dedicated to reviewing active items. As it leaves the timeline, I’ll save its discussion for another essay.

Another area for future work lies in note taking:

OLLOS is an append-only log of items, so you can’t edit an existing note. Instead, you build on past notes using replies: you can reply to any past note with a new one that goes into your timeline now, forming a thread. This maintains OLLOS’ eternal log. It works well for emerging thoughts, fleeting thoughts, and connecting early ideas. But once a line of thinking in some notes starts to accumulate into something bigger, I take the notes into other programs, where I can edit larger documents.

If I had a document I was composing in the itemized world, it would be interesting to consider having items that represent the changes made to it enter my timeline, while being able to open the document at its latest state. This raises lots of important but tricky design questions for these “change” items, and how they appear in my timeline.

This document could also be connected to all the original little notes that led to it, allowing me to easily pull up those inciting thoughts in the timeline, with all the context in which they were taken (meetings they were taken during, articles read shortly before, etc.).

Something that OLLOS doesn’t yet explore: different timescales.

How would OLLOS display the primary timeline at different levels of granularity? How might it display summaries of larger timescales, such as the last week, a month, or an entire year? Items which are threaded might be collapsed together, and items which were important for longer periods of time might be made more prominent.

Could a user manually “float” things into larger timescales — indicating that a note is relevant to this entire month, quarter, or year? Maybe there could be columns to the left or right of the current timeline that let you see and place items with longer epochs (e.g. a column to the left for things which matter all week, another available to the left of that for the month, and so on to the year)? Or is there a way for OLLOS to track the ongoing importance of an item from its use automatically?

Looking at the timeline, you can start to see other ways the itemized environment can work with the dimension of time, and consider new ways it might support your own time-structured life.

As an example that stuck out to me often, I found myself wanting to ask OLLOS to provide some info before repeated calls I have with people: the last time we spoke, the notes I took during that call, and for conversations in which we’ll usually “catch up” on what we’ve been up to, a summary of what I’ve worked on since then. It knows the last time I had a meeting with this person, and could grab everything that has happened since then. It could adjust the level of granularity with which it summarizes based on the amount of time since (a higher level summary if it’s been weeks or months, a more detailed summary if it’s been days). I also find myself wanting this “call prep summary” to have a more complete log of our relationship available; sometimes, I want to scroll back to past meetings for earlier notes, or to the very beginning, to remember how we met, or see some quick notes on the key things in their life and work.

Finally, there are some interesting items which would make nice additions to the timeline that deserve independent exploration: played music, workouts and health checkins, changing weather forecasts for current locations and those of upcoming calendar events, etc. What are our needs for seeing how different domains relate to time?

OLLOS has served me quite well. I’ll share reflections on personal interfaces in general at the end of this essay, but here I’ll discuss how OLLOS specifically supported my days.

There are a handful of interfaces I’ve wanted in my daily life, which this one interface mechanism — the unified timeline — gave me: **a daily agenda**, in which I can see my events, and into which I can drop my to-dos for the day; **a timeline of the past**, to see what I did yesterday, last week, and so on; **a planner for the future**, with more than just events on dates, but also tasks and other planned items such as dinner recipes; **quick entry log** of things like a chat interface with myself, where I could easily paste links or fleeting thoughts; a similar log but with greater focus: **a blank screen with just the last thing I wrote visible** for jotting notes while thinking deeply; a Google Now-style list of **things to jump into next**; **later review of or reminders on items** like notes, emails, and tasks; **batch review of emails** and other things that came in during the prior X hours; and **spaced repetition to clear a “read later” inbox** of newsletter emails, PDFs, and online articles. Many of my personal use cases compose from OLLOS’ small set of primitives, bringing these into a unified environment (for example, my today view has my notifications and what’s coming up today, which are in two very different places in iOS).

OLLOS has become a sort of terrarium for my research work, with its quick entry for notes and links, and mechanisms for item review. Seeing little bits of recent thought going up the timeline helped me notice interesting connections between what seemed like entirely unrelated things; the “messiness” of the chronological order had a way of highlighting relations between seemingly unrelated things considered around the same time.

OLLOS is also where I jot quick notes during meetings, since I can reply to the calendar event with any notes or tasks that I’d like to remember. Since I could rely on the relationships captured in the context of the timeline, I was much more likely to capture useful items like these. Taking after my friend Henrik Karlsson, who keeps a journal with notes from each call he has with a handful of friends, I write notes in OLLOS after even casual calls with friends, which helps us build on interesting threads over time. I also was more likely to save and return to articles I wanted to read, and to review older notes that held insights for present work. It often felt like simply having the right affordances helped me make healthier decisions.

OLLOS is an exercise in taking _“a simple idea”_ and _“taking it seriously.”__“This simple idea may appear too obvious to be useful, but there is an old two-part rule that often works wonders in business, science, and elsewhere: 1) Take a simple, basic idea and 2) take it very seriously. And as some evidence for the value of taking very seriously the fundamental organizing ethos, I offer the example of my own life.”_ — [Charlie Munger](https://www.stripe.press/poor-charlies-almanack/talk-five?progress=73.88%) Although we may not want an everyday OS to be made up of only a timeline, it’s an exercise to find what’s missing from today’s mainstream OSs as a result of them not taking the dimension of time seriously. We swing the pendulum far in the other direction to uncover the insights that will help us when we need to figure out what it’ll look like for the pendulum to be in the middle.

It also helps reduce the number of existential questions blocking progress: exploring a limited concept space compared to the full itemized OS lets us dive deep on its core ideas, and on some of the core magic of the itemized OS, while being able to actually hit the road with it and make faster progress.

This kind of timeline interface would be an important part of an OS of the future. Grounding the OS of the future with an understanding of time lets us rely on our millenia-honed faculties, giving us better support for orienteering, better reflection of [chunking](https://en.wikipedia.org/wiki/Chunking_\(psychology\)), and so forth.

In a complete OS, it would be complemented by other kinds of views, or the ability to “spin up” other kinds of views (e.g. via [gestural view construction, as explored in LN 037](/labnotes/037)), expressing other organizations of your things. And aided by its timeline views, an OS of the future could have easy ways of pulling up items that are closely related by time to any item I have open in the environment.

While building and living in OLLOS, I learned a few things about personal software:

First, personal interfaces are illuminating. Having my digital interfaces match my mental models more closely simply made my days easier — my software use was characterized by fewer anti-patterns in software that didn’t suit my tasks and fewer ad-hoc interfaces in lower-level programs like text editors.

Compounding this effect, once the core system was built, it was easy and acceptable to add simple capabilities that I might need for a week or so. (During a week that had lots of deep tasks I needed to get done, I introduced a “time block” item that would receive a title and start a timer. I never used it again, but for the five to ten minutes of development time, it greatly helped me that week, and kept everything together within my system.)

However, it was much more difficult to approach more complex capabilities. Software development is always needed to add new capabilities or interfaces to the system, making feedback loops often too long to produce meaningful results. This problem needs to be addressed in order for personal software to succeed. We will enter into co-evolutionary loops with digital environments of our own creation, needing to iterate on envisioned interfaces given what we learn once we use them, and to evolve them as we evolve ourselves (in part thanks to the improved systems we design for ourselves and live in). This sent me down the path that showed up in [LN 037: Gestural view construction](/labnotes/037), which looks at tightening up the feedback loop between envisioning a better interface and producing it, ideally as close to the speed of thought as possible.

_Thanks to Davey Morse for the regular inspiration and conversations on this project; to John Underkoffler for conversations early on in this project that helped me understand it better; for feedback from supporting members Andy Matuschak, Justin Bennett, and Illya Bomash; and for feedback from Paul Rony, Orion Reed, Peter van Hardenberg, Geoffrey Litt, Paul Sonnentag, Marcel Goethals, Sammy Guergachi, and Brian Joseff._

_Thanks to Steve Krouse for sponsoring my work, and to all [members of the Little Lab](/membership/) for supporting my independent research, helping to make it possible._

Appendix
--------

Working on OLLOS over the last several years has brought lots of related projects, research, and interface concepts into my inbox. Here are some of them:

*   [Buckminster Fuller’s Chronofile](https://en.wikipedia.org/wiki/Dymaxion_Chronofile)
*   [A demo of Leap / Canon Cat’s interface](https://www.youtube.com/watch?v=o_TlE_U_X3c) ([via Paul Rony](https://twitter.com/Paul_Rony/status/1584596015294058496))
*   [A demo of Lifestreams](https://www.youtube.com/watch?v=Ioki1q6yCok)
*   Some apps: [Pile](https://udara.io/pile/), [Mem](https://web.archive.org/web/20230307074552/https://get.mem.ai/), [Agenda](https://agenda.com)

Blog posts:

*   [Multi-layered calendars](https://julian.digital/2023/07/06/multi-layered-calendars/) by Julian Lehr
*   [Speculative Calendar Events](https://maggieappleton.com/speculative-events) by Maggie Appleton

Some interesting explorations of time and log interfaces:

*   [https://twitter.com/codexeditor/status/1584712707370266624](https://twitter.com/codexeditor/status/1584712707370266624)
*   [https://twitter.com/pranavpramod/status/1598745934388920321](https://twitter.com/pranavpramod/status/1598745934388920321)
*   [https://twitter.com/heestand\_xyz/status/1614261072760025092](https://twitter.com/heestand_xyz/status/1614261072760025092)
*   [https://twitter.com/rich\_cahill/status/1610646632546156545](https://twitter.com/rich_cahill/status/1610646632546156545)

Want to receive my work as I publish it?

Don’t fill this out if you’re human:

 Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)