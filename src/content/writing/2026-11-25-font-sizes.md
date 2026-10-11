---
title: "Too many font sizes"
date: "2026-11-25"
dek: "The designer picks 17px. The developer hard-codes 17. Nobody did anything wrong, and the app still breaks."
format: "Carousel (`assets/carousel.pdf`, 6 slides)"
cover: "/writing/font-sizes/cover.png"
source: "LinkedIn"
---

Because a fixed "17" doesn't grow when someone turns up their phone's text size.

Both platforms already solved this:
- iOS has text styles (Body, Headline, Caption…) that scale with Dynamic Type.
- Android scales text set in sp, and Material 3 has a type scale with named roles (Body Large, Title Medium…).

So the fix isn't a better number. It's a shared name.

What I'd suggest to any team:
1. Design with named text styles, not loose sizes.
2. Map those names 1:1 to the platform styles in code.
3. Use a small set consistently, instead of a new size for every screen.
4. Check every screen at the largest text size before release.

Designers get consistency. Developers make fewer decisions. Users get text they can actually read.

How does your team talk about font sizes: by number, or by name?
