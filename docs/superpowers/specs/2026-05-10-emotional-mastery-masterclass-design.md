# Emotional Mastery Masterclass — Design Spec

**Date:** 2026-05-10
**Owner:** Jeff Cline (jeff.cline@me.com)
**Target site:** krystalore.com (Next.js App Router, repo: `jeff-cline/Krystalore`)

## 1. Goal

Reposition the existing `/health-mastery` page into a deep, multi-page **Emotional Mastery** experience while leaving the original page intact for reference. Emotional Mastery is positioned as the hidden operating system beneath every life area — not as a niche therapeutic offering.

## 2. Locked decisions (from brainstorming)

| # | Decision | Value |
|---|---|---|
| D1 | Old page handling | `/health-mastery` is untouched and remains live |
| D2 | New page URL | `/health-mastery-masterclass` (exact path per user) |
| D3 | Hero scope | Entire hero (image + headline + subhead + buttons) kept identical to the current `/health-mastery` hero, including the existing video below it |
| D4 | Positioning hook for the body | **Option 3 — "The Root Beneath Every Pattern"**. H2 = `Emotional Mastery`; subhead = *"The same emotional patterns affecting your relationships are also shaping your health, confidence, business, visibility, boundaries, self-worth, and ability to receive love and success."* |
| D5 | Pillar pages | All 8: relationships, self-worth, leadership, business, parenting, health, communication, purpose |
| D6 | New assessments | Two — **Emotional Mastery Self-Assessment** (umbrella, 12–15 questions scored across pillars) and **Emotional Mastery Readiness Scorecard** (8–10 questions; gauges readiness for the monthly intensive) |
| D7 | Build approach | **Approach A** — hub-and-spoke with a shared `<PillarPage>` template driven by a data file, and one shared `<MailtoCTA>` component |
| D8 | Mailto contact-info fields | Full intake: Name, Phone, Email, Best time to talk, Location / Time zone, Where you heard about Krystalore, Current biggest challenge, Goal in next 90 days |
| D9 | Navigation | Not added to main site nav in this ship. Discoverable via direct URL, marketing links, and cross-links between the masterclass page and pillar pages |

## 3. Routes created

| Route | Purpose |
|---|---|
| `/health-mastery-masterclass` | Main masterclass page (hub) |
| `/emotional-mastery/relationships` | Pillar page — Relationships & Intimacy |
| `/emotional-mastery/self-worth` | Pillar page — Self-Worth & Self-Trust |
| `/emotional-mastery/leadership` | Pillar page — Leadership & Visibility |
| `/emotional-mastery/business` | Pillar page — Business & Money |
| `/emotional-mastery/parenting` | Pillar page — Parenting & Family |
| `/emotional-mastery/health` | Pillar page — Health & Nervous System |
| `/emotional-mastery/communication` | Pillar page — Communication & Conflict |
| `/emotional-mastery/purpose` | Pillar page — Purpose & Creativity |
| `/quizzes/emotional-mastery-self-assessment` | Umbrella self-assessment |
| `/quizzes/emotional-mastery-readiness` | Monthly intensive readiness scorecard |

## 4. Files added

| Path | Purpose |
|---|---|
| `app/health-mastery-masterclass/page.tsx` | Masterclass page (hero copied from `/health-mastery`, rest rebuilt) |
| `app/health-mastery-masterclass/layout.tsx` | Layout copied from `/health-mastery/layout.tsx`, metadata adjusted |
| `app/emotional-mastery/[pillar]/page.tsx` | Dynamic route rendering `<PillarPage>` from data; uses `generateStaticParams` over the 8 slugs |
| `app/quizzes/emotional-mastery-self-assessment/page.tsx` | Built on existing `components/quiz-template.tsx` |
| `app/quizzes/emotional-mastery-readiness/page.tsx` | Built on existing `components/quiz-template.tsx` |
| `components/MailtoCTA.tsx` | Shared button — generates prefilled `mailto:` |
| `components/PillarPage.tsx` | Shared layout for all 8 pillar pages |
| `data/emotional-mastery-pillars.ts` | Array of 8 typed pillar objects (data, not code) |
| `public/images/emotional-mastery/i-want-my-life-back.jpg` | Copied from `~/Downloads/PHOTO-2026-05-10-08-58-07.jpg` |

## 5. `/health-mastery-masterclass` — section-by-section

| # | Section | Content |
|---|---|---|
| 1 | Header | Shared `<Header />` |
| 2 | Hero | **Identical** to current `/health-mastery` hero: image `/images/health-mastery/hero.webp`, eyebrow "Beyond Limits • Health Mastery", H1 "You've Built Success… Now It's Time to Feel Like It", existing subhead, VIP-pricing note, and `Join Health Mastery` / `Book a Discovery Call` buttons pointing to the existing checkout and `/contact` |
| 3 | Hero video | Identical to current `/health-mastery` video block (`/videos/rewrite-intro.mp4`) |
| 4 | **IS THIS YOU?** (new) | Two-column on desktop, stacked on mobile. Left: the "I want my life back!" handwritten image. Right: H2 *"Is this you?"*, copy framing the free 1-on-1 Breakthrough Call as *the foundation, framework, and support* the reader needs, then `<MailtoCTA hook="Book my Free Breakthrough Call" topic="Free Breakthrough Call">` |
| 5 | **Emotional Mastery** | H2 = `Emotional Mastery`. Subhead = Option 3 copy. `<MailtoCTA hook="Get the Free Emotional Mastery Book" topic="Emotional Mastery Free Book">` |
| 6 | **You may look successful on the outside…** | H3 + bullet list: overthinking, burnout, emotional overwhelm, fear of visibility, conflict avoidance, anxious attachment, people pleasing, self-sabotage, disconnection, difficulty receiving love/support/success |
| 7 | **Why Emotional Mastery Matters** | Copy block per brief: how emotions influence comms, safety, relationships, boundaries, health, confidence, creativity, leadership, parenting, self-trust. Closing paragraph on awareness/regulation/healing/embodiment |
| 8 | **The 8 Pillars** | 4×2 grid (responsive) of cards linking to the 8 pillar pages. Each card: pillar title + one-line teaser |
| 9 | **Take a Deeper Look** | Grid linking the 9 existing related quizzes (emotional-intelligence, self-awareness, self-management, social-awareness, relationship-management, personality, anxiety, depression, life-alignment) |
| 10 | **Two New Assessments** | Side-by-side cards for the umbrella Self-Assessment and the Readiness Scorecard, each with a primary link button |
| 11 | **Monthly Emotional Mastery Intensive** | Info band. `<MailtoCTA hook="Get info on the Monthly Intensive" topic="Monthly Emotional Mastery Intensive">` |
| 12 | **Final CTA band** | Closing copy + `<MailtoCTA hook="Book my Free Breakthrough Call" topic="Free Breakthrough Call" variant="primary">` |
| 13 | Footer | Shared `<Footer />` plus existing tiny `JC` link |

## 6. Pillar page template

All 8 pages render via `app/emotional-mastery/[pillar]/page.tsx`, which reads from `data/emotional-mastery-pillars.ts` and renders `<PillarPage data={pillar} />`. Sections:

1. Header
2. Pillar hero — title + subhead + "← Back to Emotional Mastery Masterclass" link
3. **The pattern beneath** — 4–6 recognition prompts ("If you've noticed…" list)
4. **What this pattern shapes** — bullets describing downstream effects on this life area
5. **What changes with Emotional Mastery** — outcome statements
6. **Related deeper-look quizzes** — 1–3 existing-quiz cards relevant to this pillar
7. `<MailtoCTA hook="Get info on Emotional Mastery for {pillar}" topic="Emotional Mastery — {pillar}">`
8. **Explore other pillars** — cross-link grid to the other 7 pillars
9. Footer

## 7. `<MailtoCTA>` contract

```ts
interface MailtoCTAProps {
  hook: string                  // Button label AND used in subject: `${hook}-Emotional Mastery`
  topic: string                 // Used in the email body's "I'm reaching out about: <topic>" line
  probingQuestions: string[]    // Rendered as bullets in the body, with a blank line after each for the user to answer
  variant?: 'primary' | 'secondary' | 'ghost'   // default 'primary'
  className?: string
}
```

Rendered `href`:

```
mailto:krystalore@thecrewscoach.com
  ?subject=<encodeURIComponent(`${hook}-Emotional Mastery`)>
  &body=<encodeURIComponent(BODY_TEMPLATE)>
```

Body template:

```
Hi Krystalore,

I'm reaching out about: {topic}

A few things on my mind:

• {probingQuestion[0]}
  

• {probingQuestion[1]}
  

• {probingQuestion[2]}
  

—

Contact info:
Name: 
Phone: 
Email: 
Best time to talk: 
Location / Time zone: 
Where you heard about Krystalore: 
Current biggest challenge: 
Goal in next 90 days: 

Thank you,
```

The blank line under each probing question is intentional — gives the user visible space to type their answer in their mail client.

`variant` styles match the Tailwind palette already in use on `/health-mastery` (teal primary, gray secondary).

## 8. Pillar data shape (`data/emotional-mastery-pillars.ts`)

```ts
export type Pillar = {
  slug: 'relationships' | 'self-worth' | 'leadership' | 'business'
       | 'parenting' | 'health' | 'communication' | 'purpose'
  title: string                                 // e.g. "Relationships & Intimacy"
  subtitle: string                              // one-sentence positioning
  patternSigns: string[]                        // 4-6 "If you've noticed..." bullets
  whatItShapes: string[]                        // bullets — downstream effects
  whatChanges: string[]                         // bullets — outcomes with EM
  relatedQuizzes: { title: string; slug: string }[]   // 1-3 existing quizzes
  ctaTopic: string                              // for MailtoCTA topic= prop
  probingQuestions: string[]                    // 3 tailored questions for this pillar
  oneLineTeaser: string                         // shown on the masterclass hub grid
}

export const pillars: Pillar[] = [ /* 8 entries */ ]
```

## 9. Two new assessments — scoring & lead capture

Both built on the existing `components/quiz-template.tsx` pattern (see `app/quizzes/emotional-intelligence/` for the canonical example).

**Results are LOCKED.** Both quizzes set `gatedContactForm={true}`. When a quiz-taker finishes the questions, results are blocked by an **UNLOCK RESULTS** form requiring **Name**, **Email**, and **Phone** (all HTML `required`). On submit, the form POSTs to `/api/leads`:

1. A row is created in the `QuizLead` Prisma model with `name`, `email`, `phone`, `quizTitle`, `answers`, `results`, `status="new"`.
2. The contact is pushed to **GoHighLevel** (Krystalore's CRM) via `pushToGHL()` when `GHL_API_KEY` + `GHL_LOCATION_ID` env vars are set in the deployment environment. Lead is tagged `"Krystalore Quiz"` + `"Quiz: <quizTitle>"`.
3. The contact is also pushed to **Jeff CRM** (`jeff-cline.com/api/todo/webhook/lead-ingest`) with `assignedTo: ["krystalore@thecrewscoach.com"]`.

Krystalore views the captured leads in the back office at `/admin/leads` (admin-only).

**Self-Assessment** (`/quizzes/emotional-mastery-self-assessment`):
- 12–15 questions, each tagged with a pillar (1-2 questions per pillar)
- Likert 1–5 response per question
- Result reveals the user's "most active pillar" (highest avg score on the recognition prompts)
- Result page recommends visiting that pillar page + offers `<MailtoCTA hook="Tell me about the next Emotional Mastery Intensive" topic="Monthly Emotional Mastery Intensive">`

**Readiness Scorecard** (`/quizzes/emotional-mastery-readiness`):
- 8–10 questions; signals tracked: self-awareness, willingness to feel, capacity for support, current life-area stress, prior healing work, time/finance/energy availability
- Single numerical score → three buckets: "Exploring," "Aligning," "Ready"
- Each bucket has a different MailtoCTA recommendation

## 10. Existing-quiz mapping (for "Take a Deeper Look" and pillar pages)

| Existing quiz | Relevant pillars |
|---|---|
| `/quizzes/emotional-intelligence` | Communication, Leadership, all (umbrella) |
| `/quizzes/self-awareness` | Self-Worth, Purpose |
| `/quizzes/self-management` | Health, Leadership |
| `/quizzes/social-awareness` | Communication, Relationships |
| `/quizzes/relationship-management` | Relationships, Leadership |
| `/quizzes/personality` | umbrella |
| `/quizzes/anxiety` | Health, Self-Worth |
| `/quizzes/depression` | Health, Self-Worth |
| `/quizzes/life-alignment` | Purpose, umbrella |

Pillar pages link 1–3 most relevant quizzes; the masterclass hub's "Take a Deeper Look" block links all nine.

## 11. SEO / metadata

- Each new page gets a `<title>` and `<meta description>` containing the pillar/topic keyword + "Emotional Mastery" + "Krystalore"
- Masterclass page exports `metadata` with title "Emotional Mastery Masterclass | Krystalore" and a description seeded from Option 3 copy
- Reuse the JSON-LD pattern already on `/health-mastery` for the masterclass page, swapping `Product` for the same shape but with name "Emotional Mastery Masterclass"

## 12. Out of scope (for this ship)

- Adding the new pages to the main site navigation
- Backend lead-tracking (mailto only; no API form)
- Email automation / drip sequences
- Stripe/paid checkout for the masterclass (existing health-mastery checkout still applies)
- Authoring the actual book PDF — the "Free Emotional Mastery Book" CTA opens an email request; fulfillment is manual
- Redesigning the existing 9 quizzes
- Adding `/emotional-mastery` (singular hub URL) — masterclass *is* the hub at `/health-mastery-masterclass`

## 13. Acceptance criteria

- [ ] `/health-mastery` renders identically to its pre-change state (visual + behavior)
- [ ] `/health-mastery-masterclass` renders with the same hero + video as `/health-mastery`, followed by the new sections
- [ ] All 8 `/emotional-mastery/<slug>` URLs render the pillar template with pillar-specific copy
- [ ] Both new assessment URLs render and produce a scored result
- [ ] Every `<MailtoCTA>` button on every page opens a mailto link whose subject ends with `-Emotional Mastery` and whose body contains the topic line, probing questions, and the 8 contact-info fields
- [ ] Both new assessments LOCK results behind the UNLOCK RESULTS form (Name + Email + Phone required), and a successful submit creates a `QuizLead` row visible at `/admin/leads`
- [ ] The handwritten "I want my life back!" image displays in the IS THIS YOU? section
- [ ] No console errors; existing pages still build
- [ ] No TypeScript errors

## 14. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Mailto links don't open on devices without a configured mail client | Acceptable per scope (mailto is the chosen mechanism). Future: pair with a fallback form route |
| Hero copy ("You've Built Success…") feels disconnected from "Emotional Mastery" framing below | User explicitly chose to keep hero identical (D3). Bridge copy in the IS THIS YOU? section softens the transition |
| `/emotional-mastery/<slug>` competes with the existing `/emotional-intelligence-training` page for SEO | Different intent (Emotional Mastery is umbrella; EI training is a training product). Cross-link rather than dedupe |
| Two new assessments increase quiz-template surface area | Reuses existing template; no new infra |
