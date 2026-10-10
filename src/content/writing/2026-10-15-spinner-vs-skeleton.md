---
title: "The spinner that costs you users"
date: "2026-10-15"
dek: "Your loading spinner is quietly costing you users."
format: "Video"
cover: "/writing/spinner-vs-skeleton/cover.png"
source: "LinkedIn"
---

Same screen. Same loading time. One feels broken.

Left: a spinner. Right: a skeleton screen, grey shapes where content will appear.

Why the spinner loses:
- It shows nothing, so the wait feels empty and longer
- Users can't tell if it's loading or stuck
- When content finally pops in, the whole screen jumps

Why the skeleton wins:
- The layout is already "there", which feels like progress
- People start reading the structure before the data arrives
- No jump when content appears

When a spinner is still right:
- Actions, not content: "Processing payment…"
- Very short waits (under ~300 ms): show nothing at all

One warning: a skeleton that doesn't match the real layout is worse than a spinner. It promises one thing and shows another.

Which one does your app use, and was it a decision or a default?
