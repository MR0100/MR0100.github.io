---
title: "Make your app feel fast on the phone your users actually own"
dek: "Most apps are built on new flagships and used on mid-range Android. A practical guide to measuring and fixing speed where it matters, for designers and developers."
date: 2026-10-11
order: 6
cover: "/writing/fast-on-cheap-phones/cover.png"
topic: "Mobile"
source: "Essay"
minutes: 4
---


Every team I've worked with tests on good phones. Developers have recent flagships; designers review on the latest iPhone. And most of the people using the app, especially in India and other fast-growing markets, are on mid-range or entry-level Android phones with less memory, slower processors and patchy connections.

That gap hides real problems. At KGK, the diamond-trading app my team builds, the inventory grid (the screen traders spend most of their time in) felt fine on our own phones. On an entry-level Android phone, scrolling ran at about 50 frames per second, and it took 5 seconds before the first stones appeared. For a trader, that's long enough to give up and call a salesperson instead.

Here's what we changed, and the method behind it. None of it is specific to Flutter or to diamonds.

## 1. Measure on the cheapest phone your users have

Buy, borrow or emulate the low end of your audience, and make it the phone you judge speed on. If you don't know what your users own, Google Play Console and your analytics will tell you the device mix.

Then measure three things:

- **Time to first useful content.** Not "the screen opened", but "the user can see something they came for". For us: the first stones in the grid.
- **Smoothness while scrolling.** To hit 60 frames per second, each frame has to render in under 16 ms; Android counts anything over 700 ms as a frozen frame ([Android Developers](https://developer.android.com/topic/performance/vitals/render)). Flutter's DevTools and Android's own profiler show you both.
- **Cold start.** How long from tapping the icon to a usable first screen.

Write the numbers down before changing anything. Without a baseline, you'll never know which change helped.

## 2. Know the thresholds people feel

Speed isn't linear in how people perceive it. Jakob Nielsen's response-time limits, unchanged for decades, are a useful guide ([Nielsen Norman Group](https://www.nngroup.com/articles/response-times-3-important-limits/)):

- **0.1 second** feels instant.
- **1 second** keeps someone's flow of thought, though they notice the delay.
- **10 seconds** is about the limit of attention; beyond that, people switch away.


<figure class="essay-fig"><img src="/writing/fast-on-cheap-phones/thresholds.png" alt="Nielsen’s three limits, and where our grid sat before and after." loading="lazy" /><figcaption>Nielsen’s three limits, and where our grid sat before and after.</figcaption></figure>

Our 5-second grid sat in the worst zone: long enough to notice and lose flow, short enough that it didn't feel like it deserved a progress bar. Getting under 2 seconds moved it into "noticeable but fine".

## 3. Build only what's on screen

The most common cause of a slow list is rendering everything at once. A list of 500 results should build the 10 or so rows visible on screen, plus a few ahead, and recycle them as you scroll. In Flutter that means lazy builders (`ListView.builder`, `SliverList`) rather than building every child up front; in native Android it's `RecyclerView` or a lazy list in Compose; on iOS, reusable cells or `LazyVStack`. Flutter's own performance guide covers the details ([Flutter docs](https://docs.flutter.dev/perf/best-practices)).

This one change usually does more for scrolling than every other optimisation combined.

<figure class="essay-fig"><img src="/writing/fast-on-cheap-phones/lazy-list.png" alt="A lazy list builds what fits on screen, plus a few rows ahead." loading="lazy" /><figcaption>A lazy list builds what fits on screen, plus a few rows ahead.</figcaption></figure>

## 4. Ask the server for less

Phones on weak connections spend a surprising amount of time downloading and parsing data they never show. Two habits help:

- **Shape the payload around the screen.** If the list shows eight fields, don't send forty and drop the rest on the device.
- **Page the results.** Send the first screenful fast, then the next page as the user scrolls. Let the server do filtering and sorting; it's faster at it than a budget phone.

## 5. Make the wait feel shorter

Some waiting is unavoidable, so design it. A blank screen with a spinner tells people nothing: is it loading, or is it stuck? A **skeleton screen**, grey shapes where the content will appear, shows the layout immediately and reduces perceived loading time; Nielsen Norman Group recommends skeletons for full-page loads under about 10 seconds ([NN/g](https://www.nngroup.com/articles/skeleton-screens/)).

Two more tricks that cost almost nothing:

- **Load images lazily and at the right size.** A 76-pixel thumbnail doesn't need a 2,000-pixel photo.
- **Keep the layout stable.** Reserve space for images and prices so nothing jumps when they arrive. Jumping content feels slower and causes mis-taps.

## 6. Trim the start-up

Cold start is the first impression, every time. Look at what runs before the first screen and ask whether it needs to. In our case, removing unused code, deferring assets that weren't needed at launch and priming caches made the app 10% smaller and cut cold start by 45% on mid-tier Android 12 phones.

## 7. Keep it fast after the next release

Speed rots. A screen that's fast today gets slower as features are added, unless someone is watching. What worked for us:

- **One architecture for the whole team,** so every feature loads data and builds lists the same way.
- **Automated tests on every pull request,** so regressions are caught before merge rather than in a review.
- **The cheap phone stays on the desk.** Every release gets a quick scroll on it before it ships.

After the changes, the grid scrolls at a steady 60 frames per second on entry-level Android, and the first stones appear in about 2 seconds instead of 5.

<figure class="essay-fig"><img src="/writing/fast-on-cheap-phones/results.png" alt="What changed in KGK Diamonds." loading="lazy" /><figcaption>What changed in KGK Diamonds.</figcaption></figure>


<aside class="try"><p class="k">Try this</p><p>Ask your team for the oldest Android phone in the office, or buy a budget one. Open your busiest screen on it and time how long until the first useful content appears. Write that number down; it’s your baseline.</p></aside>

## For designers: this is your problem too

Performance is usually treated as an engineering concern, but many slow screens are designed slow: huge hero images, lists that show everything at once, layouts that depend on data arriving in a certain order. A designer who asks "what does this look like on a three-year-old Android phone on 3G?" during design review saves the team weeks.

The fastest way to start is the same for both roles: pick the screen your users spend the most time in, open it on the cheapest phone you can find, and watch.
