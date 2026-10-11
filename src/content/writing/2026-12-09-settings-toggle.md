---
title: "Every toggle is a decision nobody made"
date: "2026-12-09"
dek: "\"Can we just add a setting for that?\" Every toggle is a decision nobody made."
format: "Text + image (`assets/image.png`, a hook card built by `linkedin-posts/_build/p26.js`)"
cover: "/writing/settings-toggle/cover.png"
source: "LinkedIn"
---

I've heard that sentence in a lot of meetings. Usually when two people disagree and nobody wants to decide.

So the argument moves into the settings screen, and the user inherits it.

What a "small" setting really costs:
- Testing: every on/off switch doubles the paths through that feature
- Support: "why does it work for her and not for me?"
- Design: most people never change their settings, so the default is the real decision anyway

Before adding a setting, I ask three questions:
1. What would most people pick? Make that the default.
2. Who needs the other option, and how many of them are there?
3. Can we make the default smarter instead of adding a switch?

Good defaults beat more options.

What's the most useless setting you've ever shipped, or seen?
