---
title: "Make your app feel fast on the phone your users own"
date: "2027-01-12"
dek: "Our app felt fast on our phones. On a cheap Android phone, the first results took 5 seconds."
format: "Carousel (PDF document), 6 slides, colour family teal"
cover: "/writing/fast-on-cheap-phones/cover.png"
source: "LinkedIn"
---

Most teams test on new flagships. Most users, especially in fast-growing markets, are on mid-range or entry-level Android with less memory and patchy connections.

5 seconds is the worst zone: long enough to notice and lose your flow, too short to deserve a progress bar. For a trader, long enough to give up and call a salesperson.

What we changed:
- Measured on an entry-level phone first: time to first results, frame rate, cold start
- Built only the rows on screen (lazy lists)
- Asked the server for less: smaller payloads, paged results
- Deferred what isn't needed at launch

The result: scrolling from 50 to 60 fps, first results in 2 seconds instead of 5, cold start 45% faster on mid-tier Android 12, and a 10% smaller app.

Your users don't own your phone.

What's the oldest phone you test on?

Full essay: mr0100.github.io/writing
