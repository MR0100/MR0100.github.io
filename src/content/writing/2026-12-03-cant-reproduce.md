---
title: "Can't reproduce"
date: "2026-12-03"
dek: "The bug report said \"can't reproduce\". The user was right. And the bug was something we built on purpose."
format: "Text + image (`assets/image.png`)"
cover: "/writing/cant-reproduce/cover.png"
source: "LinkedIn"
---

The report was short: "We can't save our filters."

We tested it. Saving worked. Our answer: can't reproduce.

The detail that got lost on the way: they only tried to save searches that showed 0 stones, or more than 300.

And in exactly those cases, we had disabled the Save button. On purpose. Our logic: why would anyone save a search with nothing in it, or with far too much?

Their logic was better. "0 stones today" doesn't mean "never". They wanted to save those exact filters and check again on other days, because the stones they wanted could come in later. Instead, they had to set up the same filters again every time they came back to the app.

It wasn't a coding mistake. It was a decision we made from our own assumptions, without checking with a single user.

Two lessons I took from it:
- "It doesn't work" needs the exact steps and what was on screen, not just the summary.
- Before deciding what users "won't need", ask them.

Now I validate every idea before it goes into the app.

"Can't reproduce" usually means we haven't found the conditions yet. Sometimes the condition is our own assumption.

Have you ever "fixed" a bug that turned out to be a design decision?
