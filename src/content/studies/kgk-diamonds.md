---
app: "KGK Diamonds"
order: 6
kind: "client"
theme: "Performance"
title: "Making a 50,000-diamond catalogue feel fast on a cheap Android phone"
summary: "KGK Diamonds lets retailers, wholesalers and brokers in 10+ countries search and buy certified diamonds from a group with 120+ years in the trade. I joined in 2025 to lead the mobile team on the live app, with one goal: a trader on an entry-level phone should never wait on the catalogue."
accent: "#e9e4da"
cover: "/images/projects/kgk-diamonds/2.jpg"
heroImages: ["/images/projects/kgk-diamonds/2.jpg", "/images/projects/kgk-diamonds/3.jpg"]
heroCaptions: ["Search", "Results"]
figureNote: "Screens from the KGK Diamonds listing on Google Play, with the store’s own captions (checked 11 Oct 2026). Numbers in this study are from my own work on the app."
meta:
  - { label: "Type", value: "Client work · live app" }
  - { label: "Role", value: "Mobile development team lead" }
  - { label: "Team", value: "7 people: 2 mobile, 1 backend, 1 web, 1 design, 2 QA" }
  - { label: "Timeline", value: "Apr 2025 — now" }
  - { label: "Live", value: "<a class=\"link\" href=\"https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403\">App Store</a> · <a class=\"link\" href=\"https://play.google.com/store/apps/details?id=com.kgk.diamonds\">Google Play</a>" }
tldr:
  question: "The inventory grid, the screen traders spend most of their time in, dropped frames and took 5 seconds to show anything on entry-level Android. Fixes then took days to reach the stores."
  found: "Speed in this app isn’t polish. If the catalogue stutters, a trader picks up the phone and calls a salesperson instead, and the app loses its reason to exist."
  change: "Rebuilt how the grid renders and loads, set one architecture for the whole team, and automated testing and releases so the app stays fast after every update."
stats:
  - { value: "60 FPS", label: "scrolling on entry-level Android, up from 50" }
  - { value: "5s → 2s", label: "until the inventory grid shows on screen" }
  - { value: "1.5 days", label: "from code to both stores, down from 4" }
figures:
  - { src: "/images/projects/kgk-diamonds/1.jpg", caption: "The dashboard: new arrivals, bids, the cart, appointments and saved searches in one place." }
  - { src: "/images/projects/kgk-diamonds/2.jpg", caption: "Search by shape, carat, colour and clarity. This is where traders spend their time, so it had to be fast." }
  - { src: "/images/projects/kgk-diamonds/4.jpg", caption: "New arrivals with a bid countdown, for stones that go to the best offer." }
  - { src: "/images/projects/kgk-diamonds/5.jpg", caption: "Match pair: finding two stones that match, for earrings and pairs." }
---

<p class="eyebrow">Who it’s for</p>

## A trading tool, not a shop window

KGK’s customers are retail jewellers, wholesalers, brokers and designers who buy certified diamonds in volume. They don’t browse for pleasure. They compare stones by shape, carat, colour, clarity and certificate, save searches they come back to, bid on new arrivals and book viewings at KGK’s offices. The catalogue behind the app holds more than 50,000 stones from five sales offices.

Many of them do this on a phone, and not always a new one. That makes the inventory grid, the list of stones a search returns, the most important screen in the app.

<p class="eyebrow">What was slowing it down</p>

## The screen people live in was the slowest

The app was already live when I joined. On entry-level Android, scrolling the grid ran at about 50 frames per second, so it visibly stuttered, and it took 5 seconds before the first stones appeared. A trader who waits that long has a quicker option: call a salesperson.

The slowness wasn’t only on the device. Each release took about 4 days to get from finished code to both stores, so even a small fix reached people slowly. New engineers needed 5 weeks before they were productive, and features regularly collided in merges.

<p class="eyebrow">The decisions</p>

## Fix the grid first, on the cheapest phone

I treated search and filtering as the main path through the app, not a side feature, and measured everything on an entry-level Android phone rather than the newest one. The grid now builds only the rows on screen, loads results in pages, and receives data shaped around what it actually shows, with caching tuned for the patchy networks traders work on.

Scrolling now holds 60 frames per second on entry-level Android, and the first stones appear in 2 seconds instead of 5. Trimming unused code and deferring assets that aren’t needed at launch also made the app 10% smaller and cut cold start by 45% on mid-range Android 12 phones.

<p class="eyebrow">Making it last</p>

## One architecture, so the speed survives the next release

A fast screen that slows down two releases later doesn’t help anyone. I made Clean Architecture with MVVM and BLoC the standard across KGK’s apps, so every feature is built the same way. Merge conflicts between features fell by about 65%, and new engineers became productive in 2 weeks instead of 5.

Every pull request now runs unit, widget and Patrol end-to-end tests, at about 80% coverage, before it can merge. Signing and upload to both stores are automated with Fastlane. A release takes 1.5 days instead of 4, and crash-free sessions hold at 99.9%.

<p class="eyebrow">Trust</p>

## Prices stay on the device

Diamond prices are commercially sensitive, and a trading app is only useful if KGK can trust it with them. Screen capture and recording are blocked on pricing screens, the app won’t start if it detects tools for intercepting network traffic, and login details and cached inventory are kept in encrypted storage behind JWT and OAuth 2.0.

<p class="eyebrow">What’s next</p>

## Measure the trader, not just the app

The numbers above describe the app. The next step is the one I push in my product studies: tie them to behaviour. Do faster searches lead to more saved searches, bids and viewings booked per session, and fewer calls to sales for things the app can answer? That’s the question I want this app to answer next, and the measure I’d hold the next round of changes to.
