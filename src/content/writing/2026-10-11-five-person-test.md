---
title: "A five-person test you can run this week"
dek: "You don't need a research team or a lab to find out whether a design works. You need five people, a prototype, and a decision written down before you start."
date: 2026-10-11
order: 5
cover: "/writing/five-person-test/cover.png"
topic: "Research"
source: "Essay"
minutes: 4
---


Most design decisions in small teams get made in a meeting. Someone shares a screen, people react, the most confident voice wins, and the design ships. Weeks later, the numbers move or they don't, and nobody's quite sure why.

There's a better option that costs about a day: put the design in front of five real people and watch. It's been standard advice for over twenty years. Jakob Nielsen's argument is that small tests find most of the problems, and that "the best results come from testing no more than 5 users and running as many small tests as you can afford" ([Nielsen Norman Group](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/)).

Yet most teams I've worked with have never run one. Here's the kit I use for every case study, stripped down to what matters.

## Before: decide what would change your mind

This is the step that turns a usability session into evidence. Before you recruit anyone, write two sentences:

- **Pass signal:** what result would make you ship it?
- **Kill signal:** what result would make you stop?

For example, from my Temu study: *Pass if my version scores within one point of today's on "fun", clearly higher on "fair", and at least four of five people can say what the reward requires and by when. Kill if three of five say it's clearly less exciting.*


<figure class="essay-fig"><img src="/writing/five-person-test/signals.png" alt="Pass and kill signals from the Temu test kit." loading="lazy" /><figcaption>Pass and kill signals from the Temu test kit.</figcaption></figure>

Writing this first protects you from yourself. Without it, every result can be read as encouraging. With it, you'll know within the hour.

## Recruit five people who do the real job

Not colleagues. Not people who've seen the design. Five people who match the situation you're designing for. Write a short screener of three or four questions. For my KGK study, it starts with: *"Do you buy loose diamonds for your business?"* Must be yes.

Friends of friends are fine for consumer apps. For professional tools, you need professionals; one real user is worth five polite guesses.

## Use a prototype that behaves like the real thing

A clickable prototype is enough, but it has to *behave*, not just look right. People react to what happens when they tap, not to a static picture. All six of my studies use a single HTML page that runs two versions:

- **A:** today's app, re-created as faithfully as I can.
- **B:** the proposal.

Testing against today's design matters. "Do people like B?" is a weak question. "Is B better than what they have now, at the specific job?" is a strong one.

## Run the sessions in alternating order

Each person does the same tasks on both versions. Alternate who sees which first (A then B, then B then A), because whatever people see second always benefits from practice.

A session takes about 35 minutes:

1. **Intro (2 min).** *"I'm testing a design, not you. Nothing you do is wrong. Please think out loud."*
2. **Warm-up (4 min).** Ask about the last time they did this task for real. You'll learn more here than you expect.
3. **Tasks on A and B (10–12 min each).** Give realistic goals, not instructions. Say *"Your customer wants a one-carat round for about $6,000. Find one,"* not *"Tap search."*
4. **Ratings.** One or two 1–7 scales that match your pass signal ("How sure were you?", "How fair did that feel?").
5. **Compare (3 min).** *"Which would you rather use, and why?"*


<figure class="essay-fig"><img src="/writing/five-person-test/session.png" alt="Where the 35 minutes go, and the order each person sees the versions." loading="lazy" /><figcaption>Where the 35 minutes go, and the order each person sees the versions.</figcaption></figure>

Then stay quiet. The hardest part of running a test is not helping. When someone hesitates, count to five before you say anything, and when you do speak, ask a question: *"What are you looking for?"*

## Measure behaviour, not opinions

People are polite and bad at predicting their own behaviour. So record what they *do*:

- Did they complete the task? Without help?
- How many taps, and how long?
- Where did they hesitate, and what did they say at that moment?
- Did they notice the thing your design adds?

My prototypes log every tap with a timestamp and export a CSV after each round. You don't need that; a notebook with a column per task works fine. The point is to write down what happened, not what you hoped happened.

## Fill in the results the same day

Use a simple sheet, one row per person per version:

| Person | Version | Order | Completed | Taps | Time | Rating | Best quote |
|---|---|---|---|---|---|---|---|

Then go back to the two sentences you wrote at the start. Did you hit the pass signal? The kill signal? Neither? Be honest. If the result kills the idea, say so in writing. A case study that shows you changing your mind is far more convincing than one that only confirms what you thought.

## What five people can't tell you

Five people are good at finding problems and bad at measuring how big they are. "Three of five got stuck" means there's a real problem; it doesn't mean 60% of your users will get stuck. For how much a change moves a metric, you need a staged rollout or an A/B test in production, with a primary metric and a couple of guardrails written down in advance.

The two methods work together. The small test tells you whether the design is worth building and what to fix first. The rollout tells you how much it's worth.


<aside class="try"><p class="k">Try this</p><p>Book five 35-minute slots for next week now, before you’re ready. Having the sessions in the calendar is what makes the prototype and the script get finished.</p></aside>

## The cost of not doing it

A five-person test costs about a day: a morning to prepare, an afternoon of sessions, an hour to write up. Building the wrong thing costs weeks of engineering and months of looking at a dashboard wondering why nothing moved.

Pick the design decision you're least sure about this month. Write the pass and kill signals. Find five people. You'll know by Friday.
