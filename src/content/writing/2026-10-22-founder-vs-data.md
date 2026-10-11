---
title: "Buyers don't do maths"
date: "2026-10-22"
dek: "We made buyers do maths before they could bid. So most of them stopped typing."
format: "Text + image (`assets/image.png`, built by `linkedin-posts/_build/p03.js`)"
cover: "/writing/founder-vs-data/cover.png"
source: "LinkedIn"
---

The app: B2B bidding on diamonds. The rule: every bid had to land on a step of 0.25% above the listed price. No other amounts allowed.

I disagreed when we planned it. Working out the exact amount on that scale, for every stone, is extra effort for people who value their time.

The other side had a fair point: people in this industry are great with numbers, and many already work with a calculator next to them. So the rule stayed.

What actually happened:
- Most buyers didn't type an amount at all
- They tapped "+" once, the smallest possible step, and moved on

Because that's not how they think. A buyer has a budget in mind and checks the stone's value. If it fits, they bid what they're comfortable with, and that number is rarely a neat multiple of 0.25%.

Now the request has come back: a free amount field, with a 0.25% minimum.

What I'd add on top:
- Show the minimum as a real price, not a percentage. On a stone listed at $100: "Start bidding from $100.25"
- Let people type any amount above it
- Make "+" jump 0.50% (+$0.50 on that $100 stone) instead of 0.25%

Nobody should need a calculator to place a bid. And every tap of "+" moves the bid further. Better for both sides.

The lesson I keep relearning: a rule that makes sense on a spreadsheet can fight the way users already think. Check their mental model before you build the rule.

Have you shipped a rule that users quietly worked around?
