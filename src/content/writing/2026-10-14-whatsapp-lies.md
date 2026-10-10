---
title: "WhatsApp lies to you"
date: "2026-10-14"
dek: "WhatsApp lies to you every time you send a message."
format: "Carousel (PDF document)"
cover: "/writing/whatsapp-lies/cover.png"
source: "LinkedIn"
---

And it's one of the smartest decisions in mobile.

When you tap send, the message appears instantly.
It hasn't been sent yet.

Look closely: there's a tiny clock 🕓.

What's really happening:
1️⃣ The message is saved on your phone first
2️⃣ It's shown to you immediately, as if it's done
3️⃣ The app keeps retrying in the background
4️⃣ Only when the server confirms does the clock become a tick ✓

It's called optimistic UI, and it's why WhatsApp feels instant on a slow train in London or bad 3G in Lagos.

The "lie" is honest in one way: that small clock tells you the truth, without making you wait.

What most apps do instead: show a spinner and make you wait for the server. Users feel every second of it.

It's harder to build than it looks (local storage, a retry queue, no duplicate messages, a "failed, tap to retry" state). But it's one of the biggest perceived-speed wins in mobile.

Is a small "lie" like this good UX, or should apps always show the real state?
