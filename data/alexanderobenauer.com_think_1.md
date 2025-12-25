Cracks in the desktop

[

**You’re reading Part 1 of _The Interfaces With Which We Think_**

☜ Return to the introduction](/think/)[

**You’re reading Part 1 of
_The Interfaces With Which We Think_**

☜ Return to the introduction](/think/)

[

ALEXANDER OBENAUER

](/)

[Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20reading%20The%20Interfaces%20With%20Which%20We%20Think%2C%20and...%0A%0A)   [Bluesky](https://bsky.app/profile/alexanderobenauer.com)   [Mastodon](https://mastodon.social/@alexobenauer)   [Twitter](https://twitter.com/alexobenauer)

Want to receive my work as I publish it?

[

ALEXANDER OBENAUER

](/)

[Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20reading%20The%20Interfaces%20With%20Which%20We%20Think%2C%20and...%0A%0A)   [Bluesky](https://bsky.app/profile/alexanderobenauer.com)   [Mastodon](https://mastodon.social/@alexobenauer)   [Twitter](https://twitter.com/alexobenauer)

Want to receive my work as I publish it?

* * *

For the first decade of my career, I was deep in the world of email, building products on both sides of the protocols — clients and services.

Email gets a lot of pieces right: there’s a split between client and server, with standardized protocols mediating communication between them. This means email is largely decentralized; it isn’t owned or controlled by any one party. And it means that your data is fully portable: you can change email servers or clients while bringing all of your past data with you. Plus, having been designed for a time when constant connection was a thing of the future, email clients can be capable programs when offline; they keep a copy of your email data locally, letting you access and use your client even when you don’t have an internet connection.

Data portability, decentralization, no vendor lock-in, standardized protocols, local-first… these are things we wish for with modern software and services, almost always in vain! Yet, in many ways, email is the original internet application, predating the _World Wide Web_ by almost two decades. Those standardized protocols essential to email’s best features are quite archaic, making them tedious to develop on. To complete what a user would think of as one action, a client often has to make many round trips to the server, managing its connections and order of operations. Decades’ worth of server implementations scattered throughout the internet impose varying expectations on clients and servers to successfully integrate with the whole ecosystem. Plus, users come with their own surprisingly diverse needs and expectations of email, few of which are candidates for compromise when it comes to such an important daily-use application. In any email client, lots of code needs to be written which every other email client needs too; the code that lets the email client successfully and efficiently talk to any email server on the ‘net doesn’t need to be different from client to client, yet every developer is doing this double-work any time they want to introduce a new idea to the market. This work can take years.

That’s the world I unknowingly walked into when I started my work in email. I had some simple ideas for how email could be better, but in order to introduce even small changes to the email client, I’d first have to build one from scratch.

![Screenshot of macOS' Mail app open to inbox with a compose window next to it](/assets/imgs/articles/think.1.jpg)

Your email app is a lot of things: a service that uses IMAP or POP to sync the contents of your email accounts to your local filesystem, a view that combines the inboxes from all of your accounts into one list, a message view and a thread view, a compose window, plus lots of things you don’t use every day, like authorization flows that differ for many of the common email providersIn fact, if you were to develop an email client today, you’d quickly find out that many email providers now require you to have an agreement in place with them in order for users to use the email client you build with their email accounts. Some of these providers make this process clear; others leave it to you to find the right contact!, a place to add and edit signatures, and so forth.

All of these pieces come glued together. If a developer has an idea for a better way to interact with your inbox that they want to build, they’d have to rebuild _every single component_ of the client — syncing, database, message threading, every bit of the interface, etc. To introduce a new idea for one of these components, all of them need to be rebuilt — even though no other component needs to be markedly different.

This was the problem I experienced as a developer in email. But as a user in email, we experience one even worse: none of this is even possible.

If you see a way your email client could be better for your days, there’s little you can do about it. You’re left submitting feature requests to developers or hunting for new apps that get closer to your needs. If you find one, you’d replace the whole email client — you’d have to find one that has not only your desired new feature, but that also adheres to your and your workplace’s security requirements when syncing emails, your workflow requirements when displaying your inbox and messages, and so forth.

Since the app is all glued together, users can’t make simple changes themselves, and developers must engage in lots of double work to ship them.

On the flip side, apps and windows have these artificial boundaries: they are each a data silo keeping their things in and other things out. Although an email, a calendar event, and a note might all be inextricably related, you have no way to reflect that in today’s operating systems.

![Screenshot of a mail app, calendar app, and notes app, all open to their native items pertaining to one meeting.](/assets/imgs/articles/think.2.jpg)

I find myself wanting to drag the email and the calendar event into the top of this note, so that they appear as two cards above what I write from the meeting: the email card on the top left, and the calendar event to its right, letting me quickly find and reference any needed details from either, whether now or far into the future. But this simply isn’t possible; I can’t break through the barriers of these windows. I also can’t return to this workspace in the future: I’ve collected some related things together; finding and arranging them is some amount of work, yet this workspace is volatile. I’ll have to do this work again anytime I need these things gathered back together.

The developer of any individual app can’t fix this problem: sure, an email client could add “notes” and “reminders” to emails, but these only live inside this app; they wouldn’t integrate with the rest of your system. The problem lies in the operating system, in its architecture, in how we think about personal computing software and implement the systems in which it lives.

Our software interfaces are fiercely rigid; they can’t be meaningfully nudged — in big ways or small — to more closely reflect our mental models or meet our individual needs. We can’t modify the interfaces which render our things, and we can’t bring things together to reflect our thinking. Each thing lives in its pre-determined box, can’t be taken elsewhere, and can only be seen in a handful of pre-determined ways.

So, you can’t iterate on your interfaces… what’s the big deal? Why does that matter so much?

[☞ Part 2: The moral imperative for composable systems](/think/2/)

* * *

**Contents** [Intro: Constructs of human imagination](/think/) [Part 1: Cracks in the desktop](/think/1/) [Part 2: The moral imperative for composable systems](/think/2/) _Part 3: Coming soon_

* * *

Want to receive my work as I publish it?

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)