The Potential Merits of an Itemized OS#header, #article { max-width: 640px; margin: 0 auto; } h1#headline { font-family: 'Nanum Myeongjo', serif; font-size: 80px; line-height: 83px; font-weight: normal; letter-spacing: normal; text-align: center; } @media (max-width: 499px) { h1#headline { font-size: 50px; line-height: 53px; } } h1#headline, div.wider { margin: 0 -50px; } @media (max-width: 799px) { h1#headline, div.wider { margin: 0; } } p#details { font-family: "Courier New"; font-size: 12px; text-align: center; color: var(--secondary-text-color); margin: 15px 0; } #article p:not(.sans) { font-size: 19px; line-height: 28px; font-weight: normal; font-family: 'Newsreader', serif; /\* font-family: 'Nanum Myeongjo', serif; font-size: 21px; \*/ margin-bottom: 15px; } #article p:not(.sans) .sans { font-size: 16px; } #article p.dropcap::first-letter { /\* font-family: 'Nanum Myeongjo', serif; font-size: 48px; \*/ font-family: 'Nanum Myeongjo', serif; float: left; line-height: 95%; /\* width: 120%; \*/ /\* width: .7em; \*/ font-size: 300%; } /\* #article p.dropcap::first-line { font-variant: small-caps; font-size: 22px; font-weight: 600; } \*/ #article h2 { margin-top: 45px; margin-bottom: 15px; letter-spacing: -0.5px; } #article h3 { margin-top: 25px; margin-bottom: 15px; font-size: 20px; line-height: 24px; letter-spacing: -0.25px; } #article h4 { margin-top: 25px; margin-bottom: 15px; font-size: 16px; letter-spacing: normal; }

[

Alexander Obenauer
==================

](/)

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

The Potential Merits of an Itemized OS
======================================

* * *

Publ. June 6, 2021 • Alexander Obenauer • Chattanooga, Tenn.

* * *

This article is part of my research into the future of the operating system, in which I explore how personal computing can fulfill more of the potential it harbors today.

To see these concepts-in-progress illustrated, go to [the Lab Notes](/labnotes/000/). For more, [head home](/).

Does an itemized personal computing user environment have the potential to be a new medium in which software could “actually change the thought patterns of an entire civilization” (Kay, 1989)?

Besides proposing a fundamentally more useful user environment, it may upend how we think of “apps” (or any unit of software in personal computing), and even move some activities done today by developers over to the user side, allowing users to become architects of their own systems. Further, developers may have the opportunity to focus on their specialty, without duplicating lots of other work already done by others — opening the door for far greater contribution to mainstream personal computing software from the distributed and independent open source community, and entirely new contributors as well.

This article is meant to serve as the starting point for discussion and exploration into an itemized personal computing user environment: how to make it technically feasible, sustainable, and favorable; how it might be more than only iteratively more useful than today’s operating system paradigms; how it might alter computer thinking; how it might enable new markets or means of software creation; and how it might enable consumer software with the users’ interests as the ultimate priority.

The first section covers the concept’s definitions and fundamentals. The second section follows with a narrative illustrating some examples of use. The third section is a discussion on the impacts such a system may have. The final section covers further reading and research.

Concepts
--------

Consider any discrete unit of digital thing used in personal computing: a note, an email, a list, a webpage, a podcast episode, an article, and so forth.

We will refer to these as _items_.

An item can be of any level within some hierarchy: a to-do list is an item that contains to-dos, which are items themselves. Further, to-dos might contain other items: notes, reminders, and the like.

Each item is some data that can be consumed by a _view_ (not necessarily a visual interface component, but in this article we will stick primarily to that case).

In this system, any item can contain references to any other items, and items can be referenced from multiple other items. In this way, the system achieves _universal data portability_ for its items: any item can be brought to and used anywhere else in the user’s system, regardless of its type or source.

As a result, items are _universal reference containers_ for any number or type of other items. How those things might be displayed to a user depends on both the containing item and the contained item, which inherently shapes the functionality different types of things might offer to users.

In this way, the basic structure of data that a user stores in their system is an item graph.

A user can add an item to another from either the to-be parent _or_ child, and they can create an item on-the-fly as a to-be parent _or_ child to another item. (Note: “Adding an item” to another, in this article, always means adding a reference to it.)

A user can gather multiple items into their workspace at once, again regardless of their type or source. These are _browsing contexts_. They allow for the collection of related items into one context of some work.

Consider one such style of browsing context displaying opened items side-by-side, in a horizontally-scrolling path. The user is able to work through their “train of thought” visually, on screen. This browsing context is specifically called a _browsing path_, or simply, a _path_.

Items are opened within the path in one of three ways: by their reference or association with the currently open items, by searching or browsing the entire system, or by creating a new item on the spot. In a path, items’ widths can be adjusted, their location in the path can be changed to bring two items closer together, and new items can be opened or created in between or beside any other items. Users can pin an item for it to remain in place as the rest of the path is scrolled.

When the user has a new train of thought, they might begin a new browsing path. Should they want to return to a past browsing path, a _recent paths_ list displays the items in each recent path, allowing the user to pick back up where they left off. This allows the daily, temporal management of their workspace to be non-volatile, in contrast to today’s operating systems’ implementations of window and tab management.

As the user opens new items within a single browsing path, the system records the association, later exposing these _associated items_ when their counterparts are present. The system handles many expected associations automatically by paying attention to how users move through items within different contexts, but users can further manage the associations manually.

Items are rendered by views, with more or less detail depending on whether they are being viewed alone or within a broader context.

The user is able to choose a view as the default for all items of a certain type, and they are able to quickly flip between applicable views on any open item.

Users can also modify existing views or create new ones by manipulating an item’s _view definition_ through a straightforward tool.

A view definition is an item itself; though a special one, as it is used by the system to render other items. It contains a list of the item types it renders, along with view definitions for rendering those items in different contexts (i.e. as a summary vs. when being viewed alone, in full).

Items can be shared with other users, alone or in entire subgraphs. Since view definitions are items as well, a user can share some set of their items, along with their custom views, to allow others to browse within an environment of their own design.

Many items are brought into a user’s system from external sources. This is done by _services_. By the nature of the system, services are independent from the views that render the items, though they may provide default views. Additionally, services expose to the system (and the system to the user) the possible _actions_ that can be taken on the items in relation to the service.

Views and services are collectively referred to as software _components,_ which can be provided by third-party developers. Further, third-party developers may provide _bundles_ that contain multiple components to users.

Choosing new views for certain item types does not affect the service used to bring that data into the system; the two are separate, and developers can independently provide a new view for a certain item type without having to replicate the implementation of the service used to bring that data into the system.

Many other features of the system build upon these fundamentals, some of which will be discussed in later sections.

Narrative
---------

For the purposes of illustration, this section is a narrative, about a friendly fellow named Joe.

Joe is a freelance copywriter who uses his itemized operating system throughout his day for both his work, and his general engagement with learning and exploring the world.

One Monday morning, Joe begins his day with a podcast episode he had queued up the night before, on a topic he has been exploring recently. He begins to play the episode, and during its intro, he creates a new note that he drags the podcast episode into. As the episode delves into deeper discussion, he begins typing his thoughts in the note, below the episode.

He can pause and play the episode as he develops his own thoughts, because the episode he dragged into his note is not a link, but rather it is the episode itself, as rendered by his chosen podcast player. He can see and interact with everything related to that episode within his note. In the future, whenever he returns to his note, it will come with the episode intact.

As the early-morning hours turn closer to the workday, Joe pulls up his day’s to-do list. The first thing he needs to do is draft an email to one of his clients with a project proposal he has been preparing. With half of the email drafted, Joe realizes it’s too important of an email to send without having had some coffee first. Instead of sending the email-in-progress, he drags the draft into his day’s to-do list. Later, he can open the draft directly from his list to finish up before the day is done.

After starting a pot of coffee, Joe begins to prepare for a call with another client. He arranges a series of resources he’ll need on a two-dimensional canvas within his system. He arranges items — some example articles, a language flashcard exercise, and a few worksheets — loosely based on when during his call he will refer to them. Conducting the workshop with his client will only require him to share this one canvas of items, rather than sending along many disparate resources and links of different types.

Next to his day’s to-do list, Joe starts a daily note. Since he does this every day, he made a special view for himself to take his daily note within. He was able to construct the component himself, using a drag-and-drop tool within the system. This allowed him to add fields for each of the things he likes to cover in his daily note (besides some space for reflection and ideating, he has a simple habit tracker component, among other things).

After checking off a few of the tasks he has just completed in his day’s to-do list on the left, he begins jotting some thoughts into his daily note on the right. He realizes that the third line he wrote is actually a task he needs to take care of later on, so he drags that line from his note into his day’s to-do list. The text appears the same in its new home, though now that it is in a to-do list, an unchecked checkbox appears to its left side.

While reviewing his most recent bank statement, Joe sees an unexpected charge. It hasn’t posted yet, so he creates a reminder for Friday to check into it. He drags the specific charge item from his bank statement into the reminder, so that when it comes up, he will be able to immediately open the charge item with the vendor phone number and other details.

Joe receives an email about a meeting later on in the week. He opens it in a new browsing path, and when he clicks on the meeting agenda attached, it opens within the path too. After reviewing the agenda, he clicks a “+” button to create a new item in the same path, chooses “event” as its type, and schedules the meeting on his calendar. Afterwards, he returns back to his last browsing path.

Later in the week, when the notification of the upcoming meeting appears, he also sees its associated items, which the system automatically linked: the email thread about it, and the meeting agenda. He clicks the meeting agenda, and prints it. He also opens the email thread to let everyone know he’s running just a few minutes late, but will be there shortly. He was able to pull up these needed items with ease; he did not have to set up the association himself, yet the system surfaced these items knowing that they are related, saving Joe from needless browsing and searching through his entire system.

An avid productivityist, Joe has found an ideal way to view his inbox, broken up in a way that helps him keep things clean with ease. He downloaded the view component that does this from a productivity blog he reads frequently. This new component works great for Joe, and adopting it doesn’t mean he needs to abandon any other part of his email workflow; the service he uses to connect to his email accounts is still in place, as is his favorite view for composing outgoing emails: a sparse editor that allows him to use Markdown syntax. In fact, Joe can quickly flip his inbox view to any other he has installed, if a certain day calls for it. He has another he likes to use after weekends and vacations that helps him quickly triage the new messages that have piled up. No choice of view is binding: Joe can set defaults, but flip around on any specific item.

Joe remembers a time when he couldn’t adopt these pieces as he likes to now, since traditional operating systems had always bundled each of these things — the email service, the inbox view, the compose window, etc. — into a single app, which would have to be tossed entirely in order to adopt a feature of another; and adopting the feature of another would mean adopting every aspect of it. At a past job, Joe wanted to use a Markdown composer, but he couldn’t find an email app that was also compatible with his workplace’s security requirements, let alone one that had all the features he wanted for the inbox along with the Markdown editor. The compromises Joe would make in his workflow were a daily frustration.

The blog that published the inbox component Joe likes was able to do so without having to build an entire email app; they only built the inbox view they had an idea for, and could leave all the other pieces — connecting to IMAP, compose windows, and so forth — to the rest of the system. This being the case is what allowed the blogger to create and publish their idea for a new inbox view for others to try out and use.

Joe’s inbox is actually a unified view that handles more than just email. Since he uses this itemized system, any view can contain any item, regardless of type or source. Besides the most important emails he has received, his inbox view contains new messages he received from his biggest client’s project management service of choice, and another client’s chat service. This used to be quite the pain for Joe, but now, his system simply includes all of his inbound work messages and ongoing conversations in one view. His system does this across many purposes; with it, Joe does not need to visit multiple views or apps for one purpose.

Extending his preferred workflow into his system even further, Joe also modified the view definition for messages to include a checkbox, so that just like a to-do list, he could check off individual messages whenever he had finished any of its associated actions. Joe can modify any system view he’d like to, which he does somewhat frequently to have his system behave in ways that best suit his current workflows.

While reading an email from a client, Joe sees that he will have to make some modifications to what he’s working on. This is something he’ll handle later on in the week, so below the body of the email, Joe creates a to-do, gives it a title, and a date. That task will now appear on his daily planner, with a reference to the email itself. Finally, he gives the to-do a reference to that client, so that when he opens the client’s outstanding to-dos, it will appear there, too.

Today is a light day, so in his planner, Joe has a few tasks in a list. But tomorrow he has quite a few meetings, among other tasks, so Joe would like to time-block his day to ensure he gets everything done on time. In his planner, he switches tomorrow’s view to a time-block-based view, which lets him drag his tasks onto times around his meetings.

Wanting to get into his core work for the morning, Joe opens up his “recent paths” where he sees all of his recent browsing paths, each displayed as a row with scaled-down views of their open items. He can pluck open just one item into a new path if he wishes, or he can recall an entire path, resuming the session he was in before. He selects the path in which he was doing some research for a project he’s currently working on. As he develops his work, he opens new articles and other assets within the browsing path, and he pins the document in which he is jotting ideas to the left side, so that it remains on the screen as the other items scroll.

Browsing paths let Joe focus on the task at hand. He does not have all the clutter of anything else he may have opened or used earlier hanging around on the screen (something that bothered him with the increasingly cluttered windows-based operating systems he used to use).

When something else comes up, he can freely switch to that task, allowing this path to leave his screen, without worry about saving references to these items. The system will remember the browsing path for later use. And since the browsing path is an item itself, Joe can even add a reference to it within his client item.

For work that requires lots of different resources, he can begin the body of work by assembling his workspace first, with all the items he will need in one context or path. And for ongoing work, he doesn’t need to reassemble his workspace; rather, he can resume a previously prepared context or path.

To check on the progress he has made this morning on a project, Joe opens one of his Client items. The Client item is an item just like any other in his system, except it’s one that Joe created himself, purpose-built for his specific need. It has a series of things within it that allow Joe to keep track of the status of the client’s projects, along with all the resource he’s received from them, the works in progress, and the deliverables he will send to them. Since this custom-made Client item is just like any other item in his system, Joe is able to do anything with it that he does with other things, such as reference to it from within an event on his calendar for a progress update meeting with his client. With this Client item open, Joe can see the browsing path he created a reference to, which he has found is a nice way to pin progress within each of his Client items.

He can also see the tasks related to this open client that he checked off in his to-do list earlier. Since every item can be referenced from multiple places, he has found that he can reference and view his things on different axes, depending on his need at the moment. Almost all of his tasks are referenced both by date and project, client, or some other item representing a larger initiative or body of work. This lets Joe look at everything he has to do on a specific day, across all of his interests and projects, or at everything he has to do for a specific project, across all dates. And since the same to-dos are referenced from each place, no matter how he gets to an item, when he updates it, he can see that update reflected everywhere.

While taking a bit of a break, Joe finds that he has stumbled onto a fascinating article. Too long to read right now, he opens the references box of the webpage, which similarly exists on every item in his system, and adds the webpage to a topic item titled “Next Up”. The “Next Up” topic item is where Joe adds references to all of the things he wants to check out next: podcast episodes, PDFs, webpages, and so on. When he opens “Next Up” this evening, he will see this webpage at the top, where he can open and read the article. In the operating systems Joe had during most of his youth, what he could do with any item completely changed depending on its type; but in his new itemized OS, he can gather things however he pleases.

This is just the start of Joe’s day, and it’s just the start of these ideas. Joe is still getting used to this new system, because it dramatically expands what he can do with his digital things, so he is taking the time to let his thinking catch up and expand too.

Discussion
----------

An itemized personal computing user environment is a set of new and renewed ideas, architectures, and metaphors that have the potential to expand, exponentially, what people are able to do with their computers.

This section discusses the impacts that these ideas could have not just on those who use the system, but also on those who develop software for it, and the very means of software creation.

### Usability

Our lives are filled with digital “things” that are important to us: Various notes, tasks, lists, articles, events, emails, reminders, bookmarks, images, podcasts, chats, and so forth.

These things all relate to each other in different ways. Yet in today’s operating systems, they remain siloed in their own respective apps (one for notes, one for events, and so on). What if these things could be pulled out of the “windows” or “apps” that contain them and be brought somewhere else? What if you could move data items, with views provided by their hosting applications, around system and item views? What if you could browse your things in one fluid interface, bring together a series of things that all relate, and associate any of your things with other things; all regardless of each items’ type or source?

The many different things we use on our personal computing devices all relate. The itemized user environment builds upon this fundamental understanding.

This itemized operating system of the future becomes — in a sense — inverted, compared to today’s OS: in an itemized user environment, the system makes use of interface elements provided by the things a user chooses to install. It allows users to use these components wherever they want to, creating a satisfyingly open and flexible environment for users to reflect their thinking and their workflows. Increasingly, many of our things live in our computers. The itemized OS assists us by breaking our things out of their rigid containers.

The preceding section illustrated many of the usability benefits of associated actions, universal data portability and reference containers, browsing paths, etc. This section will highlight some other benefits and perspectives.

#### Nonvolatile, discrete workspaces

In the previous section, we saw how Joe was able to drag his podcast episode into the top of the note in which he was journaling his thoughts as he listened.

Further, we saw how he was able to move through a task by opening things along a browsing path as he developed his work, which served him as a focused, clear workspace now dedicated to this task at hand.

Finally, for deeper and more focused work requiring many resources, we saw how he was able to begin by first gathering the things he needed to do that work into one browsing context, much like a chef’s “mise en place,” and how he was able to return to that context later.

This ability to gather needed resources, laying out the workspace as the user sees fit for any task at hand, is simply not possible in today’s apps-and-windows user environments. If a task’s needed resources include an email, a webpage, and a calendar event, then each of those apps is in focus, often along with all of the other things within those apps (emails, events, etc.). Distraction reigns over any attempt at focused work.

Rather than haphazardly switching between many apps and windows to move through a single sequence of work, with our itemized user environment the user can begin by gathering their needed items into one, focused workspace — however they see fit. Or, from a new browsing path, they can open what is needed when they need it as they proceed through the work.

Finding, opening, and arranging things to do some body of work is itself an amount of work. In today’s operating systems, this work is commonly transient and volatile — a closed window is often simply gone, tabs and all. But with recent paths, this work of gathering materials needed for some specific task is always remembered by the system and ready for reuse.

It’s a transformative new way to consider navigation on the system as a user, allowing for more graceful context-switching, greater focus on the present task, and no more worry that something opened might be lost as one moves about their system and through their day.

Rather than keeping every window and app open for every task done in a period of time, when a user begins something new they’re in a dedicated workspace for the task at hand. Focus reigns supreme in the itemized user environment.

And since browsing paths (or any browsing context) are items themselves, they can be saved in the system just like any other item; while the user could always pull up their recent paths from the system, they could also intentionally save a reference to a path within their system, somewhere more specific.

#### Everything is a feature

All items in the system could contain a note, a reminder, or a link to a webpage. These features are often added to every app over time (for example, an event in a calendar app eventually gains the feature to add notes and URLs to it). But with this inverted OS setup, each individual app doesn’t need to build each of these features. The itemized system inherently provides them.

The user is able to choose exactly what kinds of things (and rendered by what kinds of views) they want in their system. And third-party developers don’t have to work on loads of duplicative functionality (more on this in a later section).

In this way, our system’s functionality expands exponentially: everything a user installs becomes a feature of their overall system. [\[1\]](#note1)

For example, a user might want to use a component that operates reminders on some other heuristic than date and time; they may want a reminder that triggers based on current location, or they may want a spaced repetition reminder. Installing such a component would allow the user to use it along with _any_ item in their system (not just those known to the developer of the component at build time).

My own email app brought what felt like a ground-breaking feature to email ten years ago when we introduced reminders on emails, allowing users to defer when they would deal with a received email. In this operating system of the future, no app would have to build such a feature; a reminder can be added to anything the user wants.

Just like a reminder, a note or task could be added to an email, website, or event. _Any_ item the user has could be freely added to any other. (The term “added” here encompasses a few different things, such as referencing an item in either direction, or setting up an associated item automatically or manually.)

#### Swappable views

In our narrative, Joe installed some new components for handling email the way he prefers.

In today’s operating systems, if a user wants a new feature for composing emails in Markdown, as Joe did, they’d be on the hunt for a new email client — which means _everything_ changes. They have to worry about whether a new email app has all the features they need, whether it adheres to their own or their workplace’s privacy requirements, whether it allows them to navigate their inbox the way they prefer, and so forth… all just to get that one new feature they’re looking for.

In reality, compromises are made in droves by users of today’s operating systems.

If the search for a new app turned up nothing, they could theoretically build it, but they would have to build every other aspect of the application as well — likely too much time to invest unless if what they build would be purchased by a few thousand others, who want that feature as well, to fund the development.

But in the itemized operating system, since users can pick a new view to render any item type, they could simply find and use a view that supports the feature they want. Or as a developer, they would only need to build that view in order to realize their vision for it. A new drafts composer view wouldn’t affect their chosen inbox view, and it wouldn’t affect the service they use to download their emails.

Swappable views are a way for users to get the kind of functionality they’re looking for from their software, without having to regularly throw out entire apps (and often all of their data) to get it.

#### Modifiable views

Users can modify views, create new views for existing items, or create new views for new types of items that allow them to perfectly reflect some domain of their work or life in their system. To some extent, users can create simple applications as we know them today, by composing a series of new items and views.

This kind of interface construction can be used for _system_ views, too. Consider the impact if a user of the operating system could freely modify, duplicate, or construct any system view, just as they can with any item or application view (in actuality, these are all the same, though not discussed until a following section). Whether they dislike how the welcome screen is laid out, need a more ergonomic navigation screen for their particular line of work, or see fit for any other change in the system views, it’s theirs to rearrange, recreate, or modify as they wish.

Consider one of the implications: No longer would someone have to rely on a software developer to make that one change which would make their day – every day – easier. For many potential changes, the user could simply do it themselves.

As we saw in the narrative, Joe created a new Client item view which he used to represent each of his clients. He was able to lay out and track his ongoing work in a way that made most sense to him.

By being able to create and modify views, the user is free to forge their own tools and workspace as they see fit. Just like a woodworker might start by designing and building their workbench [\[2\]](#note2), any user of this system can create the right environment or workspace for their work, and modify or add to it over time.

View definitions are stored as items themselves, just like any other, though they are treated as special items by the system as they are used to render the views the user would like to use. [\[3\]](#note3)

Users are able to share single items or entire subgraphs from within their systems with other users — and since view definitions are items themselves, these can be shared too. Users could share created view definitions for others to use within their own system containing their own data.

Or, users can publish or share a subgraph of items that they’ve laid out within views of their own design for others to explore.

Finally, without getting into too much of the technical underpinnings, it is worthwhile to mention that we can use these view definitions in any software stack; they become a meta UI language allowing the user environment to be written in different languages with different interface libraries for different platforms but with the same view spec as defined by the user in their portable item graph.

#### Beyond the GUI: Accessibility

By separating our data sources from our rendering views, we free up the data we use in our applications to be consumed not just by view components that render the data in a GUI (graphical user interface), but also by components that offer user interaction with that data through other media: voice, VR, and so on. This has important ramifications for both accessibility and the development of personal computing environments with future technologies.

Today, if a user cannot use just one of the main hardware components of their devices (mouse, keyboard, screen, touchscreen), they are left with a tremendously more difficult experience in personal computing. And, as personal computing devices have increasingly become the nexus through which we engage with much of life and many modern professions, this inaccessibility has ramifications that run deep.

The atomization of our apps in personal computing opens up the ability to create more fluid interactions through other media.

Today’s most widely available assistive technologies largely seek to map what a GUI renders on screen into something more accessible — which helps, but is far from ideal. For example, using today’s operating systems by voice involves screen readers that simply read aloud what is displayed in the interface: the text, menus, and buttons; and voice control that allows you to activate the various controls displayed.

Though helpful, this is fairly crude, with an often low quality result. It’s clear why the result isn’t ideal: it maps the interfaces designed specifically for certain abilities into other ways to use and control them, without those abilities.

These assistive tools are a great help to many people, but fall far short of what they deserve.

With an itemized system, we can create the _right_ thing for voice control — no longer an assistive technology, but a new one altogether; one that is focused on accessibility from the start. Given some data coming from some service in the system, we can install a view not for the rendering of those items in a GUI, but for the use of them through other means, such as voice. That application component would not be based upon some other GUI; it would be written explicitly to be used as, say, a voice-based email client. It would run off of the same base data service (handling interaction with the server, syncing changes, caching results, etc.) as the GUI views, allowing all users access to the same underlying system components through interfaces designed for their abilities.

#### Beyond the GUI: Future technologies

Further, the operating system of the future is going to be taken for some long rides through the transformation of technology. If it has outdated and inflexible methods of interaction, large remnants of those methods will stick around for too long within our new technology.

If instead, they are open to building in new forms as new technologies are just being born, then the operating system of the future won’t inhibit their exploration, but rather act as a multiplier force in helping find the unique new ways the new technologies might allow for interaction within personal computing environments.

#### Compromises on privacy and usability

Many workplaces and universities require the use of one specific app for accessing emails, contacts, and calendars. This is not so they can control the user interface, but rather so they can control the protocol or means of connection, authentication, and data transfer. Though well intended, many users are then stuck with fiercely inadequate and frustrating client applications.

In our itemized system, the workplace can just as well require the use of a specific system service that handles connecting to the server and transferring user data according to their requirements, while the user is free to use any view component(s) they prefer for rendering their inboxes, emails, drafts, calendars, and so forth.



A disturbing trend in email apps of late has been the use of third-party servers to duplicate users’ mailboxes. IMAP is notoriously difficult and slow, so developers of many modern email clients have resorted to this technique which many users do not realize is happening in the background, compromising their privacy and security by putting their sensitive and personal data in unknown hands.

Within our itemized system, new views for rendering inboxes and emails don’t have to include their own IMAP implementations, avoiding compromises on user privacy (and inferior implementations).

Though email is the example use here, this same phenomenon happens lots in personal computing: your preferred source of some data is very often not where you prefer to actually consume that data (sometimes, it’s the worst place). The atomization of these pieces — notably, services and views — allows the user to more precisely define how they wish to interact with data, and have stronger guarantees around how their personal information is handled. Further, users can freely try out new interfaces that can contain their personal information without worry of privacy or security issues.

### Development

The system would dramatically reduce the amount of double work expected of every application developer today, since it would provide for far more of the fundamental needs of users, either out of the box, or with components provided by other third-party developers.

The ability to develop specific components for an itemized operating system means developers do not need to bother with lots of duplicative development done by developers today.

For example, developers would not need to support adding notes, reminders, tasks, and other such basics, to the items within their applications. These features are often built into all kinds of different applications: email, calendars, and so forth. In our itemized system, where users can simply add items to other items, or associate items with one another, these features inherently exist within the system as a consequence of the system’s fundamentals.

Further, independent developers would not need to build large-scale applications to overhaul single pieces of the user’s experience. Since each item has its own view, and since views do not need to be from the services which offer the data they render, every developer can focus on their area of interest or expertise.

As a result, entirely new types of things can be built that are simply not possible or economical today.

If a developer wants to overhaul how we interact with the inbox, even if their innovation touches just one aspect of the overall email client, today they usually have to rebuild the entire thing — from implementing IMAP to drafts and so on. Email clients are quite large things when you consider all of their features, and you largely cannot reinvent one portion of them without rebuilding the entire thing.

In this itemized system, a developer can freely ship one view or service. Or a few. And people can select any of the components they’ve built, whenever and wherever they want to.

This also means developers can test ambitious ideas without having to invest months to years of development on pieces they don’t care or know much about; instead they can focus on the piece that they’ve got something new for, today.

In our narrative, we saw how one of Joe’s favorite productivity writers had built some components for their readers to try out. When building itemized components like this becomes easy for anyone to do, far more contribution to users’ overall systems will come from increasingly niche creators.

Today, each developer in one category of application receives all of the same basic feature requests, and to keep up, they each need to rebuild what everyone else is building. With the itemized OS, developers can explore more deeply on their specific experiment, and users will still have access to the features they’ve come to expect, even when trying something new.

The strengths required to develop with IMAP and the strengths required to create a fantastic user environment in email can be very different. The separation of these two allows for developers to focus on their core strengths and avoid giving users apps that are inferior in all other areas.

Further, this itemized arrangement allows for distributed, independent development (by separate developers) on discrete, smaller components, which can contribute to larger systems or concepts. This could greatly increase the opportunity for open source development to be a significant part of creating the fundamental building blocks of personal computing in the future.

In sum, having an itemized system with swappable views means fewer unending and duplicative feature requests for every developer, and more focusing on solving each problem well. It lets the developers focus on what they’re best at, and lets users pick the best or right component for their setup.



One thing to be clear on: of course a user does not want to source three different components to accomplish one task. Rather, software providers can offer a single bundle with the services and views needed for something new. A user could install one bundle to connect to a new protocol and view the data that it transmits, without having to worry about the individual components included.

For example, when podcasting was first introduced, a user would only need to download one bundle to subscribe to, view, and listen to their first podcasts. And, years down the line, they can freely swap out the view used to play episodes (for example, to gain a feature like Overcast’s Smart Speed that drops out silent moments). [\[4\]](#note4)

This way, when a user installs something new, they are ready to start using it. And if they are happy with what the service gives access to (e.g. an RSS service), but they want to use a different view to render its items (e.g. a reader view that supports dark mode), they could, at any time, freely swap out that view component.

On the contrary, consider that the operating system would ship with email support built in, using IMAP. When FastMail came out with JMAP, a new and more performant protocol meant to replace the decades-old IMAP, but which still delivers the same data type — emails — to users’ systems, FastMail could ship a service that allows users’ systems to connect to its servers via JMAP. They wouldn’t need to ship new view components for emails, drafts, folders, and so on — because users already have those installed. A user could install and use their JMAP service implementation (without having to wait for an email client of choice to adopt it). They could continue using the view they’ve chosen to organize their inbox, and the view they’ve chosen to compose drafts; but now with the improved performance and reliability of FastMail’s implementation of JMAP. And FastMail would not have to worry about recreating all of these pieces of functionality that already exist; they could focus specifically on delivering their implementation of JMAP to users’ systems via a service that provides access to its data and actions.

### The system as an item graph

Let’s take this discussion of an itemized user environment some steps further:

If our system is made up of interconnected items, rendered by user-chosen or even user-created views, then what users consider to be “the system” can be, quite simply, made up of the items it contains. An item can be chosen as the “home view” (which can actually be dynamic based upon time of day or some other such variable) and the user can navigate through their system from there, traversing through referenced items or jumping to other items using simple system controls (i.e. search) or the features described earlier (i.e. associated items).

The convention becomes strikingly simple: the system is largely an item graph. And the system renders items using view definitions (also items) stored within that graph.

Someone accustomed to the operating systems of today might call certain views “system,” “application,” or “item” views, as they have been mentioned in the previous sections. But in reality, all of these equally user-modifiable, \-replaceable, and \-createable views may simply be items from a user’s item graph, rendered by their view definitions.

The system that the user interacts with is almost entirely constructed within their graph, which they are free to remix or reshape as they co-evolve their system with their work and processes.

As an example of the implications that result from this arrangement: This means a user could freely duplicate some “app,” should they want to use two separate instances of it, with separate data inside.

Although a system may ship with some useful defaults, the user can become the architect of their own system by modifying their item graph and the views they’d like to see and use each day. Or, a user might start using their system by adopting a published template of base items and view definitions created by another user whose setup they quite like. And when the user wants the system to behave differently, it is only a matter of changing or replacing their stored items.

#### Expanding our thinking on interfaces in personal computing

Today our thinking is severely constrained: “This text box is _here_. I can only change what’s inside it.” In five years’ time, we should think of changing any data _or_ view as “changing my stuff” — effectively the same class of action; making your software reflect your thinking, just the way you want. Today, we don’t feel like these are personal computers. “The text box is _there_. That is up to someone else. They might change it in an update. That isn’t up to me, the user.”

So often, we want to redo our office, remodel our kitchen, reconfigure our workspace, or refurbish our RV. Our minds naturally consider how our environments could be improved to better our experience and effectiveness within them. Yet we don’t do this with our software — for the most part, we can’t. We spend an enormous amount of our lives on our personal computing devices, and yet today, we do not have the freedom to redesign, remix, remodel, or reconfigure our digital workspaces.

#### Bootstrapping whole systems

For much of the development of these concepts, this demo user environment has served me well as a tool for thought. But with this simplification of the system as an item graph, it becomes more than that: it is an environment for Engelbart-inspired bootstrapping [\[5\]](#note5) — a system with which you can, as a user, co-evolve both the tool and your methodologies simultaneously to build up better whole systems (those systems which include the human and the tool).

This is an opportunity to push for the higher, more important work: discovering ways in which people do important and hard things, their life’s work; and ways in which we might do those things more effectively, more efficiently, more intelligently, and so on. Consider: how might we more effectively learn, think, and create with the operating system of the future?

It opens an opportunity to design not just an interface, but the methodologies and needed tools to do great work.

#### New outcomes from new tools

The tools we have naturally shape what we create.

For example, when the most popular web design tool of choice was Adobe’s Photoshop, a raster graphics editor, websites were filled with pictures (and the like) as design elements. They had been edited, distorted, or blurred, often used as large backgrounds. Over the years, popularity shifted to vector-based design tools. With that change, website designs changed too: the large background photographs gave way to illustrations and other design elements that could be easily expressed as vectors. The tool shapes the creation as much as the creator, since the tool stands between the creator’s abilities and what they create.

Today, our computers, operating systems, and apps all make up our digital toolset. But they are extremely rigid tools. All of us have vastly different kinds of work to do in our lives, yet we all have the same workshop from which to do it all.

This itemized system would give people the opportunity to transform the tools they use to do their life’s work in order to suit that work and their own working styles better, whether they do the transforming themselves, or they adopt a meaningful transformation from someone who thinks in similar ways or works in similar fields.

The impact here could be exceptional: Our tools naturally shape what we create, but our tools today are rigid and uniform. Exploring new, niche, tailored, expressive tools will radically expand what we can create in each of our fields.

### Broader impacts & benefits

The immediate usability benefits are clear. What’s less clear, however, is the potential that this more fluid arrangement might harbor: might it be a transformative new medium that could open new thought patterns and ways of working? It warrants additional perspectives and research.

This is where this research is headed: to find out just how much potential these ideas (among others for the future of personal computing) harbor.

It seems reasonable to also consider the further impacts: as described in Doug Engelbart’s 1962 paper, “Augmenting Human Intellect” [\[6\]](#note6), the greatest impacts of new computing systems were not considered to be the known, direct impacts of the improved systems, but rather the result of using improved systems to improve thinking to improve the systems and on and on.

As a result, the greatest impact of this research comes from the more general questions being proposed: can we devise better systems which would allow us to do what we do better, including devising still better systems?

Meaning: regardless of the merits, outcome, or lack thereof, from the specifics explored in this article, the most important aspect of this work is in building upon what we have so far in the search for better questions, better answers, and pathways to realizing the great unfulfilled potential created for us by our forefathers in computing. What more might these concepts expand into with people’s expanded ability to think, process, collect, discern, etc. with these more expressive systems?



The potential impact of this system on the development of software is also clear. Individual developers can now contribute meaningful components for users’ personal computers, without having to rebuild huge applications that largely duplicate existing functionality from scratch. The potential impact is huge; far more things can be made by far more people. Users might make (and share) many of the new things, as building new kinds of items and views can be done without code.

Finally, the atomized nature of this system allows for far greater contribution of independent, distributed development towards fundamentals; fundamentals that may have shipped with the system, or that may become widely used with the system through community contribution of critical new ideas that users can adopt deep into their workflows. Today’s mainstream operating systems are directed by a small handful of companies responsible first and foremost for the value delivered to shareholders. As computing has become a basic part of modern life, and as the users’ best interests slip from the highest priority in some of the most-used software (particularly online) today, this would be a welcome opportunity to seek change.

Given its arrangement, this itemized operating system would be a very strong candidate for a new model of directing the vision for and developing the OS.

Concluding notes
----------------

It would not be possible to cite all of the wonderful sources of past ideas upon which these build: from Vannevar Bush’s 1945 article “As We May Think” [\[7\]](#note7) and Doug Engelbart’s previously mentioned 1962 paper “Augmenting Human Intellect” [\[6\]](#note6), to today’s industry-wide examples of new kinds of thinking on our personal computing systems; any new and newly refined ideas in this research build upon nearly a century’s widening explorations.

What is described in this article is not just the concept for an itemized personal computing user environment, but the description of a demo user environment I’ve been building for some years now.

I publish weekly [Lab Notes](/labnotes/000), where I document this process. You’ll see video demos of the various concepts and features being explored and experimented with, along with other, more informal discussions.

Should any of the concepts described in this article seem too abstract without visuals, refer to the videos in my Lab Notes. While those precise designs are just one possible implementation of such a system, they may aid in comprehension of the concepts discussed here.

If these ideas spark some thoughts, get in touch via [Email](mailto:alexander@obenauer.com) or [Twitter](https://twitter.com/alexobenauer). I publish these ideas to intentionally “work with my lab door open,” so that my work may bump into others’ ideas and perspectives. I look forward to chatting with anyone who shares an interest in these topics.

Finally, to keep up to date with my research, sign up for the weekly email:

Don’t fill this out if you’re human:

Subscribe

* * *

Footnotes
---------

[\[1\]](#return1) This notion was sent to me by [Thibault Roussel](https://twitter.com/thibaultroussel), who offered this reflection after reading some of my Lab Notes: “Every app will really add \[a\] feature to the whole system (not just \[a\] feature inside the app).” (Thank you for the perspective, Thibault!) [\[Return\]](#return1)

[\[2\]](#return2) The cherished tradition of beginning a woodworking career or hobby in earnest with the design and construction of a workbench can be seen in the [Workbenches subreddit](https://www.reddit.com/r/Workbenches/). [\[Return\]](#return2)

[\[3\]](#return3) Since view definitions are items themselves, and since you can swap out or create new views for any item, you could, in theory, even build a better view for modifying view definitions, and use that instead! [\[Return\]](#return3)

[\[4\]](#return4) [https://overcast.fm](https://overcast.fm) [\[Return\]](#return4)

[\[5\]](#return5) [https://www.dougengelbart.org/content/view/226/269/](https://www.dougengelbart.org/content/view/226/269/) [\[Return\]](#return5)

[\[6\]](#return6) The paper, “Augmenting Human Intellect: A Conceptual Framework,” can be read [in full on the Doug Engelbart Institute’s website](https://www.dougengelbart.org/content/view/138). [\[Return\]](#return6)

[\[7\]](#return7) The article, “As We May Think,” can be read [in full on The Atlantic’s website](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/). Even more delightful, Brett Victor has on his website a PDF scan [of the article as it appeared in The Atlantic in 1945](http://worrydream.com/refs/Bush%20-%20As%20We%20May%20Think%20\(Life%20Magazine%209-10-1945\).pdf), ads and all. [\[Return\]](#return7)

* * *

Don’t fill this out if you’re human:

Want to receive my work as I publish it?

Subscribe

My book, _Bootstrapping Computing_, is [available for purchase now](https://buddybindery.com/products/bootstrapping-computing)!

[Home](/) // / [Email](mailto:alexander@obenauer.com?subject=Hey%20there!&body=Alex%2C%0A%0AI%20was%20just%20on%20your%20website%2C%20and...%20%0A%0A) // [Bluesky](https://bsky.app/profile/alexanderobenauer.com) / [Mastodon](https://mastodon.social/@alexobenauer) / [Twitter](https://twitter.com/alexobenauer) // [RSS](/assets/feed/rss.xml) / [Newsletter](/weekly/)

My work is graciously supported by the community. [Want to support my work? See memberships.](/membership)

[Go to the member portal →](https://lab.alexanderobenauer.com)