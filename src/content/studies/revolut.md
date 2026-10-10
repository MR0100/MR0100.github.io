---
app: "Revolut"
order: 2
theme: "Trust"
title: "What a bank owes you when a hold turns into a case"
summary: "Revolut’s quick fraud check already works: confirm a declined payment in the app and the card unfreezes. Customers praise it. The trust breaks later, when a hold runs for days with no timeline. That’s the part I redesigned."
accent: "#e4e6ee"
cover: "/studies/revolut/design/b8-live-3h-clock.png"
heroImages: ["/studies/revolut/design/a5-new-agent-next.png", "/studies/revolut/design/b8-live-3h-clock.png"]
meta:
  - { label: "Type", value: "Independent product study" }
  - { label: "Method", value: "4,391 App Store reviews from 11 countries (61 holds coded) · Revolut’s help pages and blog" }
  - { label: "Timeline", value: "Oct 2026" }
  - { label: "Status", value: "Prototype built · user test next" }
tldr:
  question: "What does the app tell you while your money is held, and is it enough?"
  found: "The quick check is fine. When a hold becomes a case, people get no timeline, vague requests for “supporting documents” and a new agent each time."
  change: "Keep the quick check. For longer holds, show exactly what’s needed, what still works, and a live clock against Revolut’s own 3-hour target."
stats:
  - { value: "61", label: "reviews describe the reviewer’s own money or card being held" }
  - { value: "23", label: "complain about no timeline or a long wait" }
  - { value: "6", label: "resolved fast, and those customers praised the protection" }
figures:
  - { src: "/studies/revolut/design/b4-home-hold-status.png", caption: "A longer hold shows calmly on Home: only Move carries a pause mark, and the card says everything else still works." }
  - { src: "/studies/revolut/design/b7-items-accepted.png", caption: "Exactly what’s needed, not “supporting documents”. Each item is checked for glare and turns “Accepted” straight away." }
  - { src: "/studies/revolut/design/b8-live-3h-clock.png", caption: "A live clock against Revolut’s own published target, from the moment everything arrived." }
  - { src: "/studies/revolut/design/b9-delay-told-early.png", caption: "If the target will slip, the app says why and gives a new estimate before the first one passes." }
---

<p class="eyebrow">What holds are for</p>

## Fraud protection first, the law second

Revolut says its systems saved customers an estimated £632 million in potentially fraudulent transactions in 2024, and anti-money-laundering rules sometimes require a hold with no explanation. This study doesn’t question the decision to hold. It looks at how the hold is communicated.

<p class="eyebrow">What people say</p>

## People can live without the why. Not without the when.

I read every review from 2025–26 that mentioned a hold. When it was quick, people credited it as protection: “they stopped and froze my card. It was super simple to terminate that card and order a new one.” When it became a case, 23 of 55 complaints were about time, five of them about a promise that slipped (“one day… now up to seven days”). One line shaped the design: “The problem is not the review itself. I understand compliance requirements.”

<p class="eyebrow">My first design was wrong</p>

## It slowed down what already worked

My first version turned every hold into a four-step case with a date days away, slower than Revolut’s own promises of a 3-hour target and 2-minute chat replies. It also proposed a “Was this you?” check that, I later found on Revolut’s help pages, already exists. The current version keeps that check exactly as it is and focuses only on the long tail.

<p class="eyebrow">How I’ll know</p>

## Calmer, or more pressure?

Five people role-play the same story on both versions with made-up details. The pass signal: four of five can say when they’ll hear back within 30 seconds, and feeling safe scores no lower than today. The risk to test: whether a visible clock calms people or adds pressure.
