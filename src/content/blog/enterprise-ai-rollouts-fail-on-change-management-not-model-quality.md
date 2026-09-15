---
title: "Enterprise AI Rollouts Fail On Change Management Not Model Quality"
description: "Every enterprise AI playbook obsesses over model choice, but I think the real failure point is buy-in and workflow redesign, and that's the wrong focus."
pubDate: 2026-01-12
tags: ["ai-implementation", "operational-efficiency"]
---

Enterprise AI rollouts don't fail because a company picked the wrong model. They fail because nobody redesigned the workflow around it, and nobody got the team to actually use it.

## Key takeaways

- Model selection gets disproportionate attention in most AI playbooks
- Change management and workflow redesign is where rollouts actually fail
- Internal buy-in problems are predictable and preventable if addressed early
- Advisors add more value on adoption than on picking a model
- A technically excellent rollout with no adoption plan still fails

I've spent a lot of time inside AI Implementation advisory work through VAQA, and I see the same pattern repeatedly regardless of company size or sector: the technology works fine, and the rollout still stalls. Through FirstMotion I also see this from the agency side, where clients often want to talk about which model to use before they've thought at all about how their team will actually change how they work. This piece is about why I think that ordering is backwards, and where I'd actually spend the first month of an enterprise AI rollout.

## Why the model obsession is misplaced

Open any enterprise AI playbook and a huge share of it is dedicated to model comparison. Should you use [OpenAI's](https://openai.com) GPT models, [Anthropic's](https://www.anthropic.com) Claude, [Google's](https://deepmind.google) Gemini, or an open-weight option like something from [DeepSeek](https://www.deepseek.com). Benchmarks, pricing tables, capability comparisons.

I understand why this gets so much airtime. It's a concrete, comparable decision with clear inputs. It feels like the hard technical choice that determines success.

I think that's mostly wrong. For the vast majority of enterprise use cases, several of the leading models are genuinely capable enough to do the job well. The gap between "good enough" and "best on this specific benchmark" rarely determines whether a rollout succeeds. What determines success is whether the people who are supposed to use the tool actually change how they work.

## Where rollouts actually break down

In my advisory experience, failure almost never looks like "the model gave a wrong answer and everyone gave up." It looks like this instead.

- The tool gets rolled out, but nobody redesigned the workflow it's supposed to sit inside
- Staff quietly revert to the old process because the new one wasn't actually faster for them yet
- Middle management never bought in, so there's no reinforcement once initial enthusiasm fades
- Training was a single onboarding session instead of ongoing support
- Success metrics were never defined, so nobody can tell if it's working

None of that is a model quality problem. All of it is a change management problem, and it's almost entirely predictable in advance if someone's actually looking for it.

## The workflow redesign step everyone skips

Here's the part I think gets skipped most often. Dropping an AI tool into an existing workflow without redesigning that workflow rarely works well.

If a task used to take five manual steps and a new tool can do three of them, but nobody changed the process document, trained the team on the new sequence, or removed the now-redundant steps, you end up with people doing the old process plus the new tool layered awkwardly on top. That's slower than either approach alone, and it's exactly the experience that kills adoption.

Real workflow redesign means asking, for every process the AI tool touches: which steps does this now replace entirely, which steps change shape, and which steps stay exactly the same. That's unglamorous, detailed work, and it's the difference between a rollout that sticks and one that quietly dies within a quarter.

## Why internal buy-in is the real project risk

Model selection is a decision made by a small technical group. Adoption depends on dozens or hundreds of people changing daily habits, often people who had no say in the tool being chosen in the first place.

That asymmetry is the core of the problem. A rollout plan that spends 80% of its energy on model selection and 20% on adoption has the ratio backwards, because model selection risk is low and largely one-time, while adoption risk is high and ongoing.

Buy-in problems tend to show up in predictable places:

| Stakeholder group | Common resistance | What actually helps |
|---|---|---|
| Frontline staff | Fear of being replaced or judged | Clear framing of the tool as augmentation, involvement in design |
| Middle management | No incentive to champion adoption | Tie adoption to their own team's visible outcomes |
| IT and security | Concerned about data and compliance | Involve them early, not as a late-stage blocker |
| Senior leadership | Wants results faster than realistic | Set honest timelines tied to workflow redesign, not just tool launch |

Skipping any one of these groups tends to surface as a rollout that technically works but never reaches meaningful usage.

## What good AI implementation advisory actually looks like

When I work with a client on AI implementation through VAQA, model selection is usually a short conversation early on. The bulk of the work is in mapping current workflows in detail, identifying where genuine friction exists, and building an adoption plan that includes specific owners, training cadence, and success metrics defined before rollout, not after.

That's less exciting than a model comparison table, but it's where the actual outcome gets decided. I'd rather a client pick a perfectly good model and nail the adoption than pick a marginally better model and have the rollout stall at 15% usage.

## The metric that actually predicts success

If I had to pick one leading indicator for whether an enterprise AI rollout will succeed, it wouldn't be a benchmark score. It would be whether frontline staff can describe, unprompted, how their daily workflow changed.

If the answer is vague, that's the signal to go back and redo the workflow redesign work, regardless of how capable the underlying model is. A brilliant model bolted onto an unchanged process will underperform a decent model wrapped in a genuinely redesigned one, every time I've seen this play out.

## Model choice is the easy part

I think the enterprise AI conversation has been shaped too heavily by vendors and benchmark coverage, both of which have obvious reasons to keep the focus on model capability. That's not where the real project risk sits.

The real risk is organisational: whether people actually change how they work, whether managers reinforce that change, and whether the workflow itself was redesigned rather than just having a tool dropped into it. Get those right and a perfectly reasonable model choice will deliver real results. Get them wrong and the best model in the world won't save the rollout.

## Where this fits into AI implementation advisory

This is the exact gap I spend most of my time closing in VAQA's AI Implementation advisory work, because it's the part most internal teams and vendors underweight. If your organisation is planning or mid-way through an AI rollout and adoption is stalling, [get in touch](mailto:tom@vaqa.co.uk) to talk it through. You can also see more on [what I advise on](/advisory) or [about Tom](/about).

## Frequently Asked Questions

### If model choice doesn't matter much, why do vendors focus so heavily on it?

Vendors have a direct commercial incentive to win the model selection decision, and benchmark comparisons are easy to publish and market, whereas adoption success is harder to measure and takes longer to prove.

### What's the single biggest predictor of enterprise AI rollout failure?

In my experience it's the absence of genuine workflow redesign, where a tool gets added to an existing process without removing or restructuring the steps it makes redundant, leaving staff doing both the old and new process at once.

### How long does proper change management for an AI rollout usually take?

It varies by organisation size and complexity, but I'd treat it as an ongoing programme measured in months, not a single training session, with defined check-ins to see whether actual workflow behaviour has changed.

### Does VAQA help with the technical side of AI implementation too?

Yes, model and tooling decisions are part of the AI Implementation advisory pillar, but I deliberately weight the engagement toward workflow redesign and adoption planning, since that's where most rollouts actually succeed or fail.

### How is FirstMotion's approach to AI different from a typical rollout?

Through FirstMotion I see the adoption side directly, building AI-augmented workflows for GEO and content work, which is part of why I push clients toward workflow redesign first rather than starting with a model comparison exercise.

---

Tom Batting is a Forbes 30 Under 30 entrepreneur, founder of Obby and Baluu, and founder of FirstMotion. He advises founders and leadership teams through VAQA.
