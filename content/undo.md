---
title: undo
date: 2026-03-07
tags:
  - concept
---

[[undo]] functions as a fundamental pillar of a cohesive [[system]], enabling a consistent, system-wide experience that transcends individual [[software]]. By requiring that every [[action|action]] supplied by a [[automation|automation]] includes its corresponding inverse, we remove the burden from individual developers to build fragmented recovery tools. This ==declarative approach to reversibility== empowers the user, ensuring that whether an item is archived or modified, the path back is always baked into the architecture of the interaction itself.

> [!idea] By pairing every action with its inverse at the service level, we achieve a universal standard for safety and experimentation.

This architecture ensures that the user maintains complete [[sovereignty]] over their digital [[environment]], fostering a space where exploration is encouraged because the cost of error is effectively eliminated.

## Related

- [[action]]
- [[automation]]
- [[system]]

<!-- citations:start -->
## Citations

> [!quote]
> Read the lab note:  
> [LN 022: Undo Actions »](https://alexanderobenauer.com/labnotes/022/)
>
> — [Source](https://alexanderobenauer.com/weekly/20220227/#:~:text=Read%20the%20lab%20note%3A,022%3A%20Undo%20Actions%20%C2%BB)

> [!quote]
> It’s a cross-platform universal app, starting on both macOS and iPadOS (iPhone
> app to follow). It’s _super_ native. Five is written almost entirely in SwiftUI;
> it supports all of the windowing and multi-tasking features on iPadOS, and it
> supports multiple windows and tabs on macOS. It uses the native top toolbar
> (staying in place as you scroll, increasingly requested by users of Mail Pilot
> 4), and the native, collapsible sidebar on both Mac and iPad. It supports
> Dynamic Type, window restoration, and just about every other system-level
> setting, including Dark Mode. It has unified views for everything from your
> inbox to your archive and junk folders. It supports multi-message actions with
> virtually limitless undo and redo. Undo and redo in an IMAP email client with
> multi-account inboxes and views is an extremely fragile thing. I spent an entire
> month working on only this, exploring ways to make it work extraordinarily well.
> More on that soon.
>
> — [Source](https://alexanderobenauer.com/articles/email/1/#:~:text=It%E2%80%99s%20a%20cross-platform%20universal,More%20on%20that%20soon.)

> [!quote]
> - [LN 018: Services & Item Drives](/labnotes/018)
> - [LN 019: Notifications](/labnotes/019)
> - [LN 020: Item Actions](/labnotes/020)
> - [LN 021: Automations](/labnotes/021)
> - [LN 022: Undo Actions](/labnotes/022)
> - [LN 023: Higher-level primitives](/labnotes/023)
>
> — [Source](https://alexanderobenauer.com/labnotes/000/#:~:text=-%20LN%20018%3A%20Services,LN%20023%3A%20Higher-level%20primitives)
<!-- citations:end -->
