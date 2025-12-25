Mail Pilot 5: For the love of it

[

Alexander Obenauer
==================

](/)

Mail Pilot 5: For the love of it
================================

* * *

Publ. August 10, 2021 • Alexander Obenauer • Chattanooga, Tenn.

* * *

With little more than our first wild idea, dozens of ignored press pitches, and some hope, we launched an all-or-nothing crowdfunding campaign on Kickstarter in January, 2012.

The prior September, I had decided not to submit an assignment to my senior year computer science course on the design of information. The concept I came up with was too compelling to be a homework submission.

When the Kickstarter campaign launched, we didn’t quite know what to expect. But we certainly did not expect the outpour of support that we got, from an entire community equally as excited as us about the prospect of making email better. Just over 1,600 backers later, Mail Pilot’s campaign succeeded, and Mindsense was founded.



Flash forward ten years.

Mail Pilot, and our second product, Throttle, have together brought lots of new and renewed ideas to email — many of which have become industry-wide standard features for email apps and services over the years. It’s hard to believe how much time has passed or how much our products’ core questions and concepts have carried on.

At the same time, it’s also hard to see the future of indie software developers sustainably shipping native apps for macOS, iPadOS, and iOS. For a long time we’ve discussed the challenges of making pro apps on iOS a sustainable venture, as have others. Most often, the numbers simply don’t add up.

But in recent years, I’ve started to wonder if that can be viewed as somewhat of a good thing: When apps are on a fast track for needed revenue growth, they tend to sour quickly. As the team jockeys for even bigger success and scale, the user experiences less and less love within the app. When I was first attracted to the field of indie Mac apps as a teen, it was filled with apps like [Disco](http://discoapp.com/), a disc burner that would [emit smoke from its window](https://youtu.be/zklSrGUELjA) while it was burning your CD (the smoke would even react to your cursor or to you blowing into your Mac’s mic). Disco was an oddly delightful app that had a lot of love in it, made by creative and curious people who wanted to share some of their curiosity with you. If they had instead been in today’s race to venture stardom, the app would be juking competition, always expanding in use cases; it would eventually become a team-based product with per-seat pricing, a sales team would be hired, and the focus would turn to making sure revenue growth is high enough for the desired valuation during acquisition talks.

That simply isn’t what this medium is to me, or why I’m in software; those are not the challenges I’d like to dedicate my life’s work towards.



These days, much of my work is focused on researching [the future of personal computing](https://alexanderobenauer.com). For the last few years, I’ve been exploring new and renewed ideas around how the next operating system paradigm might expand people’s ability to think, create, and do. This is something I’ve been deeply fascinated with since I was a kid. This curiosity is what led me to Mail Pilot, and it’s what led me to what you’ll see next from me.

A significant piece of the personal computing experience is in email. I think about email clients a lot. An inordinate amount. I’m not sure why, but it’s true. I get the sense that Brent Simmons (creator of NetNewsWire) is the same way with RSS clients, and that Christian Reber (founder of WunderList) is the same way with task management apps, since both tend to find their way back the same way I have after thinking I was done with email a few times. My mind keeps going back to email clients: exploring all kinds of ways to make them more useful and more enjoyable, and all the experiments that could be built for people to try.

That’s what led me to clicking one of my favorite buttons on my Mac: Xcode \> File \> New \> New Project, and giving it a name: _Mail Pilot 5_.



In 2015, Brent Simmons wrote an article titled “[Love](https://inessential.com/2015/06/30/love)” in which he elaborated the near-impossibility of making indie app development on iOS sustainable. Ultimately, he declared: “This is the age of writing iOS apps for love.”

And I’ve come to realize over the years that’s exactly what Mail Pilot is for me: it’s an app I love to build, to experiment with, and to share with others. It does not have to be anything more or anything less than that.

So when the ideas for Mail Pilot 5 hit me, I quickly wondered: If it’s infeasible to grow an entire team and business around an indie email app, if I’ve got other things with hard problems that I’m spending lots of time on, but if I just can’t stop thinking about what I’d do to make Mail Pilot an even better email client next, what do I do?

I take a page out of Brent’s book. I do it for the love of it.



Meaning: I don’t make the thing that I think will sell the most units. I don’t worry about any conquer-the-market strategies that distract the product.

I just make a simply wonderful email app. I do it for the love of it.

I build the vision that’s bouncing around in my head, I make it simply great, and I share it with anyone else who enjoys what it becomes.

It’s not my sole focus, which is good, because that means I won’t be tediously searching for (i.e. manufacturing) hard problems to solve within it. I can keep things simple when I don’t expect it to be my outlet for big challenges. Plus, I have renewed freedom to explore making the best app I can, much like Disco, rather than making it the highest-growth business I can. I can focus on just making it great. I can focus on making an email app full of love, and no ulterior motives.

And that’s what Mail Pilot 5 is: it’s the director’s cut; the B-side single that the songwriter poured themselves into even though they know it isn’t chart-topping pop music. It’s the song they _had_ to write, the one they had to get out of their head before they lost their sanity. Mail Pilot 5 is what’s stuck in my head — and for whatever reason, I need to get it out.



In my research on personal computing, I regularly publish new and renewed concepts, writing, and experiments. Starting with Mail Pilot 5, I’ll expand this practice to include email as well. There are some experiments I’m eager to share and learn from, and some concepts I look forward to exploring publicly.

More generally, for the remainder of the project, I’ll be building in public: sharing the process of honing in on the app’s concept, the interface design, and the software architecture. If that’s the kind of thing you enjoy reading, you can [sign up for updates here](/weekly) or below this article by email or RSS.

In the coming weeks, I’ll share some deep dives into the specific areas that Mail Pilot 5 explores or addresses. But before we get into all of those, here are some basics you can expect:

It’s a cross-platform universal app, starting on both macOS and iPadOS (iPhone app to follow). It’s _super_ native. Five is written almost entirely in SwiftUI; it supports all of the windowing and multi-tasking features on iPadOS, and it supports multiple windows and tabs on macOS. It uses the native top toolbar (staying in place as you scroll, increasingly requested by users of Mail Pilot 4), and the native, collapsible sidebar on both Mac and iPad. It supports Dynamic Type, window restoration, and just about every other system-level setting, including Dark Mode. It has unified views for everything from your inbox to your archive and junk folders. It supports multi-message actions with virtually limitless undo and redo. Undo and redo in an IMAP email client with multi-account inboxes and views is an extremely fragile thing. I spent an entire month working on only this, exploring ways to make it work extraordinarily well. More on that soon.

And if you want to know some of the more unique things landing in Mail Pilot 5, stay tuned — I’ll be posting updates frequently.



What else can you expect from me this year? Every week, on Saturdays, I send out a newsletter with my most recent experiments and writing, mostly centered on my research into the future of the operating system and personal computing, and will now also include the topic of email. This involves prototyping new concepts, dissecting historical concepts from the last half century or so, learning and sharing new development environments and methods, and so forth. I’ve also been working on some new software products that may become public this year — more on that later.

I’ve learned a lot from ten years of building email clients, all of which Five builds on. Mail Pilot 4 was an ambitious project that explored an entirely new kind of design and interaction with email, and these experiments have more natural conclusions in Five. With everything learned, I hope to make Mail Pilot 5 simply great.

* * *

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)