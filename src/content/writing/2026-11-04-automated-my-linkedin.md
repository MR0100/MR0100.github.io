---
title: "I automated my LinkedIn posting"
date: "2026-11-04"
dek: "I automated my LinkedIn posting. The code was the easy part."
format: "Text + image (`assets/image.png`)"
cover: "/writing/automated-my-linkedin/cover.png"
source: "LinkedIn"
---

Most of my posts here were written weeks ahead and published on time by a small tool I built for myself.

The hard parts had nothing to do with code:

- The rules. LinkedIn bans bots and browser extensions that click for you. So no shortcuts: only LinkedIn's official API, and only my own posts.

- The login. The sign-in expires every 60 days. Forget it, and nothing goes out.

- The double post. Posting twice is worse than not posting at all. Every post is recorded the moment it goes live, so it can never be sent again.

- The unfinished post. Some drafts wait for my real details: a number, a story. The tool refuses to publish any post that still has a gap in it.

- The busywork. Editing text files got old fast, so I added a small app on top: a queue, a calendar, and a preview of how each post will look.

What I learned: for a tool like this, the constraints are the product. Anyone can call an API. Deciding what it must never do is the real work.

What's the most annoying part of posting consistently for you?
