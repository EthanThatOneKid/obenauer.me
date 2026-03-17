---
title: "LN 001: Composing application interfaces"
url: https://alexanderobenauer.com/labnotes/001/
scraped_at: 2026-03-06T21:06:00.699Z
---

[

LAB NOTES

](/labnotes/000)

[

LAB NOTES

](/labnotes/000)

LN 001

01•10•2021

# Composing application interfaces

In order to build the many experiments for my research on [the future of personal computing](/os), and the subsequent demos for these [Lab Notes](/labnotes/000), I needed a way to build much faster than was presently possible (the work simply won’t work if it takes weeks or months to scale up each experiment; the learning has to be faster than that).

Here’s what I’ve been building:

**Conductor framework - first demo**

([YouTube](#))

## How it works

The framework explores a new way of writing apps through composition in place of data piping.

It is made up of interface components built in [React](https://reactjs.org/) that you use very much like you’d use HTML to construct a website.

But the real magic is when you give a component an `itemId` attribute: the framework automatically handles syncing its value to the server, and reloading it later, wherever that `itemId` appears.

You don’t have to worry about piping data around your app, syncing, binding state to interface components, etc. You just construct your app.

You can combine the fundamental building blocks provided by the framework to create increasingly sophisticated interfaces. And as you combine the pieces, the framework automatically handles everything else — you just give out the `itemId`s and you’re set.

The hope is to create a [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/) by making it possible to write entire apps in the same way you’d write a simple webpage in HTML, using an expressive set of fundamentals to build complete applications.

That’s not to say you can’t go beyond composition — it does expose the hooks for you to do custom things with the framework if you’d like to, while still handling all of the rote complexity.

This framwork allows me to [build and rebuild](/thinking/rebuild), a critical process for making software great, since [quantity is the journey to quality](/thinking/quality).

I’ll dive more into it in the coming weeks, because it exposes some pretty interesting possibilities and consequences.

**Something spark a thought?** , or come chat [on Bluesky](https://bsky.app/profile/alexanderobenauer.com), [on Mastodon](https://mastodon.social/@alexobenauer), or [on Twitter](https://twitter.com/alexobenauer).

---

[« Previous: LN 000](/labnotes/000)

[TOC](/labnotes/000)

[Next: LN 002 »](/labnotes/002)

---
