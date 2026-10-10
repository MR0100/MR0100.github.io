---
app: "KGK Diamonds"
order: 6
theme: "Decision"
title: "A certificate tells you everything except what the stone looks like"
summary: "KGK’s app shows traders a grading report: codes, a table and three unlabelled prices, with no picture of the stone. What buyers can’t get from a certificate is what they chase over WhatsApp. I lead the team that builds this app, so I studied it from public evidence only, and kept the density traders depend on."
accent: "#e9e4da"
cover: "/studies/kgk-diamonds/design/b1-results-stone-first.png"
heroImages: ["/studies/kgk-diamonds/design/a1-results-codes.png", "/studies/kgk-diamonds/design/b1-results-stone-first.png"]
figureNote: "All screens are my re-creations in KGK Diamonds’ visual style, from its store screenshots (11 Oct 2026), with drawn stones and placeholder data. I lead the mobile team that builds the app; this study uses public evidence only."
meta:
  - { label: "Type", value: "Study of an app I work on · public evidence only" }
  - { label: "Method", value: "8 KGK reviews · 955 reviews of 9 competitor apps (253 coded) · trade sources · 4-app benchmark" }
  - { label: "Timeline", value: "Oct 2026" }
  - { label: "Status", value: "Prototype built · user test next" }
tldr:
  question: "I expected the next fix to be speed. Where do trade buyers actually get stuck in KGK’s buying flow?"
  found: "Speed is the floor. The gap is the moment of choice: the card shows codes and unlabelled prices, not the stone, and “Confirm” places an order without a review."
  change: "Keep four stones per screen. Put the stone, a labelled price and KGK’s own tint and eye-clean check on the card, and review the order before it’s placed."
stats:
  - { value: "955", label: "reviews of nine competitor apps read, because KGK has only 8, all five-star" }
  - { value: "35", label: "category reviews punish redesigns that show fewer stones (“Only 3 stones we can see”)" }
  - { value: "3", label: "prices on each card (Rap value, $/ct, total) with no labels" }
figures:
  - { src: "/studies/kgk-diamonds/design/b1-results-stone-first.png", caption: "The stone first, at the same density: thumbnail with video, the spec in words, KGK’s tint and eye-clean check, and a labelled total, $/ct and % off Rap." }
  - { src: "/studies/kgk-diamonds/design/b2-detail-tint-shown.png", caption: "The cheapest stone has a faint brown tint, and the card says so before the tap. The stone page opens on a 360° video." }
  - { src: "/studies/kgk-diamonds/design/b4-review-order.png", caption: "Confirm says what it does: the stones, the total, delivery, payment and returns, before “Place order”." }
  - { src: "/studies/kgk-diamonds/design/b5-order-what-next.png", caption: "After the order: a number, and when the stone is reserved, invoiced and shipped." }
---

<p class="eyebrow">My first question was wrong</p>

## I expected to fix speed again

My team spent this year making KGK’s inventory grid fast on cheap Android phones, so I assumed the next problem was more of the same. The category agreed it matters: of 253 coded reviews of nine competing B2B diamond apps, 101 are about crashes and slowness. But KGK’s own latest release is already almost all reliability work. Speed is the floor. The gap is one step later, when a trader chooses between stones.

<p class="eyebrow">How a trade buyer decides</p>

## The certificate is not the decision

A jeweller decides on the specs, the price read as a discount to the Rapaport list, how the stone actually looks, and what happens when they commit. Only the specs are on the lab certificate. Whether a stone has a brown, green or milky tint, and whether it’s eye-clean, is the seller’s word, and on marketplaces buyers ask for it by message. One reviewer of a competitor app put it plainly: “If client ask for video… You need to go to Whatsapp.”

KGK’s card answers the specs in codes and the price in three unlabelled figures, and shows no picture. In the live app, the photo and video sit on the stone page, one stone at a time, and “Confirm Stone” places the order straight away.

<p class="eyebrow">What to keep</p>

## Trade users read density as speed

The clearest constraint in the reviews: 35 complaints after redesigns that showed fewer stones per screen. So I rejected a photo grid. The new card keeps four stones on screen and adds a small thumbnail beside the specs, not on top of them. And because KGK cut and holds these stones, it can state its own tint and eye-clean check as a fact, something a marketplace relaying supplier claims can’t do.

<p class="eyebrow">How I’ll know</p>

## Fewer stones opened, the right total, no surprise at Confirm

Five trade buyers do the same brief on today’s card and mine: a round, about one carat, G or H, VS, white and eye-clean, for about $6,000. The pass signal: in my version, four of five avoid the tinted stone without opening every stone and state the correct total before confirming, and nobody says it shows too few stones. In production, the measure would be stones confirmed in the app per buyer, with scroll speed and stones per screen as guardrails.
