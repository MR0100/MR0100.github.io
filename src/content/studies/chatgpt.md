---
app: "ChatGPT"
order: 4
theme: "Activation"
title: "The limit people don’t see coming"
summary: "I set out to fix ChatGPT’s blank text box, assuming people couldn’t find its best features. The reviews said they find them fine. They leave when a limit stops them mid-task. So I put the allowance where the decision happens."
accent: "#e9eef3"
cover: "/studies/chatgpt/design/b5-limit-sheet.png"
heroImages: ["/studies/chatgpt/design/a1-limit-wall.png", "/studies/chatgpt/design/b5-limit-sheet.png"]
meta:
  - { label: "Type", value: "Independent product study" }
  - { label: "Method", value: "1,000 App Store reviews (147 negative coded) · store screens · 3-app benchmark" }
  - { label: "Timeline", value: "Oct 2026" }
  - { label: "Status", value: "Prototype built · user test next" }
tldr:
  question: "Why do free users leave just after discovering the photo and image tools?"
  found: "1 negative review was about finding a feature; 54 were about limits. The remaining allowance lives in Settings, two screens from where people choose a tool."
  change: "Show the count on the tool chip, warn before the last use, and give three equal ways forward at the limit, with the message and photo kept."
stats:
  - { value: "54", label: "of 147 negative reviews were about usage limits" }
  - { value: "1", label: "was about not finding a feature, my starting assumption" }
  - { value: "21", label: "were about the photo and image tools the App Store page leads with" }
figures:
  - { src: "/studies/chatgpt/design/b2-chip-3-left.png", caption: "The count sits on the tool chip: “Photos · 3 left today”, where the decision is made." }
  - { src: "/studies/chatgpt/design/b4-last-one-warning.png", caption: "A one-line warning before the last use, not after it." }
  - { src: "/studies/chatgpt/design/b5-limit-sheet.png", caption: "At the limit: save it for later, do it in text, or upgrade. Nothing typed is lost." }
  - { src: "/studies/chatgpt/design/b7-plan-today.png", caption: "The same usage information the app keeps in Settings, one tap from the plan pill." }
---

<p class="eyebrow">The question changed</p>

## The leak comes after discovery, not before

ChatGPT’s head of product has said the app lacks “affordances”, so a feature tour seemed obvious. Before designing it, I coded the 147 most recent negative reviews with a usable complaint. One was about finding a feature. Fifty-four were about limits, and twenty-one of those about photos and images, the very features the store page sells.

<p class="eyebrow">What changed in 2026</p>

## Text became unlimited. The tools became the upgrade.

In August 2026 OpenAI made text chat unlimited on the free plan, while uploads and images stayed metered. So the moment a free user runs out of a tool is now where the subscription is won or lost. The app does show remaining usage, in Settings › Usage. It just isn’t on the tool you’re about to use, and reviews from September and October still describe the limit as a surprise.

<p class="eyebrow">The design</p>

## A softer landing, not a bigger paywall

The allowance appears on the tool chip, a warning arrives before the last use, and at the limit there are three equal options: save it to run later, do it in text, or upgrade. Upgrading is one choice among several, not the only exit.

<p class="eyebrow">How I’ll know</p>

## Will a visible meter make people ration?

Five people who use a free AI app weekly do the same photo tasks on both versions. The pass signal: four of five predict their remaining uses correctly, and nobody calls the limit sheet pushy. The risk to watch is rationing: people holding back because they can see the count.
