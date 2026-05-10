# Emotional Mastery Masterclass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/health-mastery-masterclass` (hero unchanged from `/health-mastery`, body fully rebuilt around Emotional Mastery), plus 8 pillar pages under `/emotional-mastery/*` and 2 new assessments. All CTAs are buttons that open prefilled mailto links.

**Architecture:** Hub-and-spoke. One `<MailtoCTA>` component produces every prefilled-email button on the site. One `<PillarPage>` component renders all 8 pillar pages from a typed data file. Two new assessments reuse the existing `components/quiz-template.tsx`. The masterclass page is a hand-authored Next.js page that imports these primitives.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind, lucide-react icons, existing `<Header />` / `<Footer />` / `<QuizTemplate />` components.

**Spec:** `docs/superpowers/specs/2026-05-10-emotional-mastery-masterclass-design.md`

**Verification model:** This codebase has no automated test framework. Each task's verification step is one of: (a) `npx tsc --noEmit` to type-check, (b) `npx next build` to confirm the app compiles, (c) explicit visual smoke-test instructions for the dev server. Don't add a test framework — it's out of scope.

**Mailto target (constant):** `krystalore@thecrewscoach.com`

**Quiz lead-capture pipeline (already built — both new quizzes use it via `gatedContactForm={true}`):**

The existing `<QuizTemplate>` component, when `gatedContactForm={true}`, replaces the results screen with an **UNLOCK RESULTS** form that requires:

1. **Name** (HTML `required`)
2. **Email** (HTML `required`, `type="email"`)
3. **Phone** (HTML `required`, `type="tel"`)

On submit, the form POSTs to `/api/leads` with `{ name, email, phone, quizTitle, answers, results }`. The route handler at `app/api/leads/route.ts`:

1. Persists to the **`QuizLead` Prisma model** (`prisma.quizLead.create`) — fields `name`, `email`, `phone`, `quizTitle`, `answers`, `results`, `status="new"`. This is Krystalore's back-office database.
2. Pushes the contact to **GoHighLevel CRM** via `pushToGHL()` when `GHL_API_KEY` + `GHL_LOCATION_ID` env vars are set. Lead is tagged `"Krystalore Quiz"` and `"Quiz: <quizTitle>"`.
3. Pushes to **Jeff CRM** (`jeff-cline.com/api/todo/webhook/lead-ingest`) with `assignedTo: ['krystalore@thecrewscoach.com']`.

Leads are viewable at `/admin/leads` (admin-only — requires `GOD` or `ADMIN` role, or whitelisted admin email).

**Therefore:** both new quizzes in Phase 3 (Tasks 9 and 10) MUST set `gatedContactForm={true}`. This is the requirement that quiz results are locked behind contact-info capture and that the lead flows into the back office. The plan already does this — Tasks 9 and 10 each verify the gate explicitly.

---

## Phase 0 — Foundation

### Task 1: Copy the handwritten image into the project

**Files:**
- Source: `~/Downloads/PHOTO-2026-05-10-08-58-07.jpg`
- Create: `public/images/emotional-mastery/i-want-my-life-back.jpg`

- [ ] **Step 1: Create the target directory and copy the file**

```bash
mkdir -p public/images/emotional-mastery
cp ~/Downloads/PHOTO-2026-05-10-08-58-07.jpg public/images/emotional-mastery/i-want-my-life-back.jpg
```

- [ ] **Step 2: Verify the file exists and has nonzero size**

```bash
ls -la public/images/emotional-mastery/i-want-my-life-back.jpg
```

Expected: file exists, size > 100 KB (it's a phone photo).

- [ ] **Step 3: Commit**

```bash
git add public/images/emotional-mastery/i-want-my-life-back.jpg
git commit -m "feat(emotional-mastery): add 'I want my life back!' image asset"
```

---

### Task 2: Build the `<MailtoCTA>` component

**Files:**
- Create: `components/MailtoCTA.tsx`

This component is the single source of truth for every prefilled-email CTA on the site. Every button on the masterclass page and the 8 pillar pages uses it.

- [ ] **Step 1: Create the component file**

Write the entire file:

```tsx
import { ArrowRight, Mail } from 'lucide-react'

export interface MailtoCTAProps {
  /** Button label. Also forms the subject as `${hook}-Emotional Mastery`. */
  hook: string
  /** Used in the email body's "I'm reaching out about: <topic>" line. */
  topic: string
  /** Probing questions rendered as bullets in the body, each followed by a blank line. */
  probingQuestions: string[]
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const MAILTO_TARGET = 'krystalore@thecrewscoach.com'

function buildBody(topic: string, probingQuestions: string[]): string {
  const questionBlock = probingQuestions
    .map((q) => `• ${q}\n  \n`)
    .join('\n')
  return [
    'Hi Krystalore,',
    '',
    `I'm reaching out about: ${topic}`,
    '',
    'A few things on my mind:',
    '',
    questionBlock.trimEnd(),
    '',
    '—',
    '',
    'Contact info:',
    'Name: ',
    'Phone: ',
    'Email: ',
    'Best time to talk: ',
    'Location / Time zone: ',
    'Where you heard about Krystalore: ',
    'Current biggest challenge: ',
    'Goal in next 90 days: ',
    '',
    'Thank you,',
  ].join('\n')
}

export function buildMailtoHref(hook: string, topic: string, probingQuestions: string[]): string {
  const subject = `${hook}-Emotional Mastery`
  const body = buildBody(topic, probingQuestions)
  return `mailto:${MAILTO_TARGET}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const STYLES: Record<NonNullable<MailtoCTAProps['variant']>, string> = {
  primary:
    'bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg shadow-lg shadow-teal/30 inline-flex items-center justify-center gap-2',
  secondary:
    'bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2',
  ghost:
    'text-teal hover:text-[#37a6a6] font-semibold inline-flex items-center gap-2',
}

export default function MailtoCTA({
  hook,
  topic,
  probingQuestions,
  variant = 'primary',
  className = '',
}: MailtoCTAProps) {
  const href = buildMailtoHref(hook, topic, probingQuestions)
  const Icon = variant === 'ghost' ? Mail : ArrowRight
  return (
    <a href={href} className={`${STYLES[variant]} ${className}`.trim()}>
      {hook}
      <Icon className="h-5 w-5" />
    </a>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors (or only pre-existing unrelated errors).

- [ ] **Step 3: Commit**

```bash
git add components/MailtoCTA.tsx
git commit -m "feat(components): add MailtoCTA for prefilled-email buttons"
```

---

### Task 3: Build the pillar data file

**Files:**
- Create: `data/emotional-mastery-pillars.ts`

One data file holds all 8 pillars. The dynamic route reads from this; the masterclass hub's pillar grid also reads from this so the teaser copy stays in sync.

- [ ] **Step 1: Create the file with all 8 pillars**

Write the entire file:

```ts
export type PillarSlug =
  | 'relationships'
  | 'self-worth'
  | 'leadership'
  | 'business'
  | 'parenting'
  | 'health'
  | 'communication'
  | 'purpose'

export interface RelatedQuiz {
  title: string
  slug: string
}

export interface Pillar {
  slug: PillarSlug
  title: string
  subtitle: string
  oneLineTeaser: string
  patternSigns: string[]
  whatItShapes: string[]
  whatChanges: string[]
  relatedQuizzes: RelatedQuiz[]
  ctaTopic: string
  probingQuestions: string[]
}

export const pillars: Pillar[] = [
  {
    slug: 'relationships',
    title: 'Relationships & Intimacy',
    subtitle:
      "The emotional patterns running underneath your closest connections shape how you love, fight, withdraw, and let people in.",
    oneLineTeaser:
      'Why the same conflict keeps showing up with different people.',
    patternSigns: [
      'You over-give, then quietly resent it.',
      'You shut down or go cold when you feel hurt.',
      'You attract similar relationship dynamics again and again.',
      'You stay too long, or leave too fast, and you know it.',
      "You confuse intensity with love, or peace with boredom.",
    ],
    whatItShapes: [
      'How safe it feels to be honest about what you need.',
      'How you handle distance, conflict, and repair.',
      'The kind of partner you keep choosing.',
      'Your ability to receive love without flinching.',
    ],
    whatChanges: [
      'You can name what you feel before it leaks out sideways.',
      'You stop performing connection and start experiencing it.',
      'You choose people who can meet you, not people who confirm old stories.',
      'You repair faster, because reactivity stops running the room.',
    ],
    relatedQuizzes: [
      { title: 'Relationship Management', slug: 'relationship-management' },
      { title: 'Social Awareness', slug: 'social-awareness' },
      { title: 'Improve Marriage', slug: 'improve-marriage' },
    ],
    ctaTopic: 'Emotional Mastery — Relationships & Intimacy',
    probingQuestions: [
      'What pattern keeps showing up in your closest relationships?',
      'Where do you most often go quiet, defensive, or over-explain?',
      "What would change in your life if your relationships felt safer and more honest?",
    ],
  },
  {
    slug: 'self-worth',
    title: 'Self-Worth & Self-Trust',
    subtitle:
      "Self-worth is the operating system beneath confidence, boundaries, receiving, and how you treat yourself when no one is watching.",
    oneLineTeaser:
      'The hidden layer beneath confidence, boundaries, and how you receive.',
    patternSigns: [
      'You can advocate for everyone but yourself.',
      "You discount compliments, wins, or care almost reflexively.",
      'You measure your worth by output, productivity, or being needed.',
      'You stay small to keep the peace.',
      'You secretly believe the next achievement will finally make it feel real.',
    ],
    whatItShapes: [
      'The boundaries you set (and the ones you cave on).',
      "What you'll tolerate from partners, family, and clients.",
      'Whether you can receive support, money, love, or rest.',
      'How loud your inner critic is when you slow down.',
    ],
    whatChanges: [
      "You stop outsourcing your worth to anyone's approval.",
      'Rest stops feeling like a betrayal of who you are.',
      'You ask for what you need without 47 layers of apology.',
      'Boundaries become a felt sense, not a performance.',
    ],
    relatedQuizzes: [
      { title: 'Self-Awareness', slug: 'self-awareness' },
      { title: "Women's Confidence", slug: 'womens-confidence' },
      { title: 'Life Alignment', slug: 'life-alignment' },
    ],
    ctaTopic: 'Emotional Mastery — Self-Worth & Self-Trust',
    probingQuestions: [
      'Where do you find yourself shrinking, performing, or proving lately?',
      "What do you have a hard time letting yourself receive?",
      'What would feel different if you trusted yourself the way others trust you?',
    ],
  },
  {
    slug: 'leadership',
    title: 'Leadership & Visibility',
    subtitle:
      "You can only lead others as far as you've led yourself. Emotional regulation, presence, and a healed relationship with being seen are the real leadership skills.",
    oneLineTeaser:
      'Why visibility, presence, and influence start with regulation.',
    patternSigns: [
      'You can hold the room, but it costs you afterward.',
      'You over-prepare to feel safe being visible.',
      'You absorb your team’s emotions and call it empathy.',
      'You communicate from urgency more than from clarity.',
      'You avoid the hard conversation until it becomes a bigger one.',
    ],
    whatItShapes: [
      'How grounded you stay under pressure.',
      'The conversations you avoid (and what that quietly costs).',
      "The kind of culture you create just by being in the room.",
      'Your relationship with being seen, criticized, or celebrated.',
    ],
    whatChanges: [
      'You lead from regulation, not reaction.',
      "Hard conversations stop feeling personal.",
      'Visibility stops feeling like exposure.',
      "Your presence becomes the thing people remember.",
    ],
    relatedQuizzes: [
      { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
      { title: 'Self-Management', slug: 'self-management' },
      { title: 'Relationship Management', slug: 'relationship-management' },
    ],
    ctaTopic: 'Emotional Mastery — Leadership & Visibility',
    probingQuestions: [
      "What emotional pattern shows up when you're under real pressure?",
      'Where is fear of visibility quietly shaping your decisions?',
      'What would your leadership look like with 30% less reactivity?',
    ],
  },
  {
    slug: 'business',
    title: 'Business & Money',
    subtitle:
      "Your emotional patterns shape your pricing, your sales conversations, your scaling, and your relationship with success itself.",
    oneLineTeaser:
      'The unspoken patterns behind pricing, scaling, and receiving money.',
    patternSigns: [
      'You earn more, then unconsciously sabotage or burn out.',
      'You under-price to stay safe, then resent the work.',
      'You can sell anyone else but flinch at selling yourself.',
      'You hit the same revenue ceiling again and again.',
      'Money conversations make you go quiet, shaky, or apologetic.',
    ],
    whatItShapes: [
      "What you allow yourself to charge and receive.",
      "The kind of clients and offers you keep saying yes to.",
      'How safe success feels in your body.',
      "Whether you can rest in seasons of growth.",
    ],
    whatChanges: [
      'You stop trading your nervous system for revenue.',
      "Receiving money stops feeling like a threat.",
      'You make decisions from clarity, not scarcity.',
      "Your business becomes sustainable for the person living inside it.",
    ],
    relatedQuizzes: [
      { title: 'Scale Your Business', slug: 'scale-your-business' },
      { title: 'Entrepreneur Readiness', slug: 'entrepreneur-readiness' },
      { title: 'Life Alignment', slug: 'life-alignment' },
    ],
    ctaTopic: 'Emotional Mastery — Business & Money',
    probingQuestions: [
      'Where do you feel a ceiling that strategy alone keeps failing to break?',
      'What emotional pattern shows up around money, pricing, or sales?',
      "What would change in your business if success didn't feel unsafe?",
    ],
  },
  {
    slug: 'parenting',
    title: 'Parenting & Family',
    subtitle:
      "You can't teach what you haven't healed. Your nervous system is the room your children are growing up inside.",
    oneLineTeaser:
      "What you don't heal becomes the inheritance.",
    patternSigns: [
      "You react first, then feel guilty about how you reacted.",
      "You see your old wounds in your kids' faces and don't know what to do with it.",
      'You parent from a script you swore you would never repeat.',
      'You can regulate everyone but yourself.',
      "Your home feels like one more thing you're managing.",
    ],
    whatItShapes: [
      "Your child's developing nervous system.",
      'The repair conversations you can have when things go sideways.',
      "What gets passed down, and what stops with you.",
      'How present you can actually be at home.',
    ],
    whatChanges: [
      'You can regulate yourself before regulating the room.',
      'You repair quickly when you miss the mark.',
      "Your home gets quieter on the inside, not just the outside.",
      'You stop confusing controlling your kids with parenting them.',
    ],
    relatedQuizzes: [
      { title: 'Marriage & Family', slug: 'marriage-family' },
      { title: 'Self-Management', slug: 'self-management' },
      { title: 'Couples Compatibility', slug: 'couples-compatibility' },
    ],
    ctaTopic: 'Emotional Mastery — Parenting & Family',
    probingQuestions: [
      'What pattern from your own childhood keeps showing up in your parenting?',
      'When do you tend to lose your regulation at home?',
      'What would feel different if you could repair instead of react?',
    ],
  },
  {
    slug: 'health',
    title: 'Health & Nervous System',
    subtitle:
      "Chronic stress, sleep, energy, and how your body responds to the world are downstream of how your nervous system is wired.",
    oneLineTeaser:
      'Your body has been telling you the truth your strategy keeps ignoring.',
    patternSigns: [
      'You live in low-grade activation and call it being productive.',
      'You crash on weekends and wonder why.',
      "You can't fall asleep, or you can't stay asleep.",
      'You feel tense in your body for no clear reason.',
      'You numb out with food, scrolling, or work and call it relaxing.',
    ],
    whatItShapes: [
      "Your energy, sleep, and recovery.",
      'Your tolerance for stress and conflict.',
      "What your body says yes and no to.",
      "Whether you can actually feel safe in stillness.",
    ],
    whatChanges: [
      'Your baseline shifts from activation to regulation.',
      'You stop white-knuckling your way through the day.',
      "Stress moves through you instead of getting stored.",
      'Rest stops feeling like permission you have to earn.',
    ],
    relatedQuizzes: [
      { title: 'Anxiety', slug: 'anxiety' },
      { title: 'Depression', slug: 'depression' },
      { title: 'Breathwork', slug: 'breathwork' },
    ],
    ctaTopic: 'Emotional Mastery — Health & Nervous System',
    probingQuestions: [
      "What is your body telling you that you've been overriding?",
      'Where does stress most often live in your body?',
      'What would change if rest stopped feeling like a betrayal?',
    ],
  },
  {
    slug: 'communication',
    title: 'Communication & Conflict',
    subtitle:
      "How you handle hard conversations — or avoid them — is shaped by what your nervous system learned was safe long before this conversation.",
    oneLineTeaser:
      'Why your hardest conversations keep going the same way.',
    patternSigns: [
      "You replay conversations in your head for hours after they end.",
      'You go silent, then explode, then apologize for exploding.',
      "You over-explain to keep the other person from getting upset.",
      "You agree to things in the moment that you resent later.",
      "You wait until you can't take it anymore, then deliver an ultimatum.",
    ],
    whatItShapes: [
      'The boundaries you set and the ones you abandon.',
      'How trust is built or quietly eroded.',
      "Your team, your marriage, your friendships.",
      'Your willingness to ask for what you actually want.',
    ],
    whatChanges: [
      'You can stay grounded inside a hard conversation.',
      'You stop confusing being kind with being silent.',
      'You say the real thing, sooner.',
      'You can listen without losing yourself.',
    ],
    relatedQuizzes: [
      { title: 'Social Awareness', slug: 'social-awareness' },
      { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
      { title: 'Relationship Management', slug: 'relationship-management' },
    ],
    ctaTopic: 'Emotional Mastery — Communication & Conflict',
    probingQuestions: [
      'What conversation have you been avoiding, and what is that costing you?',
      'How do you tend to react when someone is upset with you?',
      'What would shift if you could say the real thing without falling apart?',
    ],
  },
  {
    slug: 'purpose',
    title: 'Purpose & Creativity',
    subtitle:
      "The blocks between you and your purpose are rarely strategic. They are emotional — fear of being seen, fear of finishing, fear of being wrong about who you are.",
    oneLineTeaser:
      'Why your purpose isn’t a strategy problem.',
    patternSigns: [
      "You start things, then sabotage them right before they land.",
      'You collect frameworks instead of finishing one.',
      'You feel called to something but freeze when it asks you to be seen.',
      "You measure meaning in productivity.",
      "You wait to feel ready before you'll let yourself begin.",
    ],
    whatItShapes: [
      "Whether you let yourself be known for what you're actually here for.",
      'How long ideas sit on the shelf.',
      'How willing you are to be a beginner in public.',
      "Whether your work feels alive to you or like another performance.",
    ],
    whatChanges: [
      'You finish things you used to flinch from finishing.',
      "Visibility stops feeling like a threat to your identity.",
      "Your work starts to feel like an expression, not an audition.",
      'You let yourself want what you actually want.',
    ],
    relatedQuizzes: [
      { title: 'Life Alignment', slug: 'life-alignment' },
      { title: 'Self-Awareness', slug: 'self-awareness' },
      { title: 'Personality', slug: 'personality' },
    ],
    ctaTopic: 'Emotional Mastery — Purpose & Creativity',
    probingQuestions: [
      'What are you almost ready to start, but keep delaying?',
      'Where does fear of being seen show up in your creative life?',
      "What would you make if you knew you couldn't get it wrong?",
    ],
  },
]

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug)
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add data/emotional-mastery-pillars.ts
git commit -m "feat(data): add emotional-mastery pillar content (8 pillars)"
```

---

## Phase 1 — Pillar pages

### Task 4: Build the `<PillarPage>` component

**Files:**
- Create: `components/PillarPage.tsx`

A single component that takes one `Pillar` and renders the full page body. Used by the dynamic route in Task 5.

- [ ] **Step 1: Create the component**

Write the entire file:

```tsx
import Link from 'next/link'
import { ArrowLeft, Check, Sparkles } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import MailtoCTA from '@/components/MailtoCTA'
import { pillars, type Pillar } from '@/data/emotional-mastery-pillars'

export default function PillarPage({ data }: { data: Pillar }) {
  const others = pillars.filter((p) => p.slug !== data.slug)
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Link href="/health-mastery-masterclass" className="inline-flex items-center gap-2 text-sm text-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Emotional Mastery Masterclass
        </Link>

        <section className="mb-12">
          <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">Emotional Mastery</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{data.title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">{data.subtitle}</p>
        </section>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The pattern beneath</h2>
          <ul className="space-y-3">
            {data.patternSigns.map((sign) => (
              <li key={sign} className="flex gap-3 items-start text-gray-700">
                <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What this pattern shapes</h2>
            <ul className="space-y-2 text-gray-700">
              {data.whatItShapes.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
          <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-teal" /> What changes with Emotional Mastery
            </h2>
            <ul className="space-y-2 text-gray-800">
              {data.whatChanges.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
        </section>

        {data.relatedQuizzes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Take a deeper look</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.relatedQuizzes.map((q) => (
                <Link key={q.slug} href={`/quizzes/${q.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
                  <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Free Assessment</p>
                  <p className="font-bold text-gray-900">{q.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to work on this with Krystalore?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Tell us where you are. A 1-on-1 Breakthrough call is free, and there&apos;s no script — just a real conversation about what&apos;s actually running underneath.
          </p>
          <div className="flex justify-center">
            <MailtoCTA
              hook={`Get info on Emotional Mastery for ${data.title}`}
              topic={data.ctaTopic}
              probingQuestions={data.probingQuestions}
              variant="primary"
              className="bg-white text-teal hover:bg-white/90 shadow-none"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Explore other pillars</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((p) => (
              <Link key={p.slug} href={`/emotional-mastery/${p.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
                <p className="font-bold text-gray-900 mb-1">{p.title}</p>
                <p className="text-sm text-gray-600">{p.oneLineTeaser}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors. (TypeScript may flag the white-button className override as warning — that's fine.)

- [ ] **Step 3: Commit**

```bash
git add components/PillarPage.tsx
git commit -m "feat(components): add PillarPage layout for emotional-mastery pillar pages"
```

---

### Task 5: Create the dynamic pillar route

**Files:**
- Create: `app/emotional-mastery/[pillar]/page.tsx`
- Create: `app/emotional-mastery/[pillar]/layout.tsx`

The route uses `generateStaticParams` so all 8 pillar pages are statically generated at build time. The layout supplies per-page metadata.

- [ ] **Step 1: Create the page file**

```tsx
import { notFound } from 'next/navigation'
import PillarPage from '@/components/PillarPage'
import { pillars, getPillar } from '@/data/emotional-mastery-pillars'

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }))
}

export default function Page({ params }: { params: { pillar: string } }) {
  const data = getPillar(params.pillar)
  if (!data) notFound()
  return <PillarPage data={data} />
}
```

- [ ] **Step 2: Create the layout with dynamic metadata**

```tsx
import type { Metadata } from 'next'
import { getPillar } from '@/data/emotional-mastery-pillars'

export async function generateMetadata({ params }: { params: { pillar: string } }): Promise<Metadata> {
  const data = getPillar(params.pillar)
  if (!data) return { title: 'Emotional Mastery — Krystalore' }
  return {
    title: `${data.title} — Emotional Mastery | Krystalore`,
    description: data.subtitle,
    alternates: { canonical: `https://krystalore.com/emotional-mastery/${data.slug}` },
    openGraph: {
      title: `${data.title} — Emotional Mastery | Krystalore`,
      description: data.subtitle,
      url: `https://krystalore.com/emotional-mastery/${data.slug}`,
      siteName: 'Krystalore Crews',
      type: 'article',
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 3: Type-check and dev-build the route**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Smoke test all 8 pillar URLs in dev**

```bash
npm run dev
```

In a browser, visit each:
- http://localhost:3000/emotional-mastery/relationships
- http://localhost:3000/emotional-mastery/self-worth
- http://localhost:3000/emotional-mastery/leadership
- http://localhost:3000/emotional-mastery/business
- http://localhost:3000/emotional-mastery/parenting
- http://localhost:3000/emotional-mastery/health
- http://localhost:3000/emotional-mastery/communication
- http://localhost:3000/emotional-mastery/purpose

Verify on at least 3 of them:
- Hero title matches the pillar
- "The pattern beneath" bullets render
- "Take a deeper look" cards link to `/quizzes/...`
- The MailtoCTA button, when clicked, opens a mailto link with subject `Get info on Emotional Mastery for <Title>-Emotional Mastery` and a body containing the topic + 3 probing questions + the 8 contact-info fields
- "Explore other pillars" shows the other 7 cards

Stop the dev server with Ctrl-C when done.

- [ ] **Step 5: Commit**

```bash
git add app/emotional-mastery
git commit -m "feat(emotional-mastery): add /emotional-mastery/[pillar] dynamic route for 8 pillar pages"
```

---

## Phase 2 — Masterclass page

### Task 6: Scaffold `/health-mastery-masterclass` (clone of `/health-mastery`)

**Files:**
- Create: `app/health-mastery-masterclass/layout.tsx` (from `/health-mastery/layout.tsx`)
- Create: `app/health-mastery-masterclass/page.tsx` (from `/health-mastery/page.tsx`)

Goal of this task: get the masterclass route live with the **same** content as `/health-mastery`. The next two tasks rewrite the body. This task does NOT change the body yet; it only sets up the parallel route so old + new can be compared side-by-side.

- [ ] **Step 1: Copy layout and page**

```bash
cp -R app/health-mastery/layout.tsx app/health-mastery-masterclass/layout.tsx
cp -R app/health-mastery/page.tsx app/health-mastery-masterclass/page.tsx
```

(Note: `app/health-mastery-masterclass/` is created implicitly by `cp` if you use `mkdir -p` first; in this codebase the parent already exists. If `cp` errors, run `mkdir -p app/health-mastery-masterclass` first.)

- [ ] **Step 2: Update the layout metadata**

Replace the metadata block in `app/health-mastery-masterclass/layout.tsx` so titles/URLs reference the masterclass page.

Old (in the new file):

```tsx
const defaults: Metadata = {
  title: "Health Mastery Group Coaching — Krystalore Crews | Executive Wellness & Leadership",
```

Change to:

```tsx
const defaults: Metadata = {
  title: "Emotional Mastery Masterclass — Krystalore Crews | The Root Beneath Every Pattern",
```

Update the `description`, `keywords`, `openGraph.title`, `openGraph.description`, `openGraph.url` (→ `https://krystalore.com/health-mastery-masterclass`), `twitter.title`, `twitter.description`, and `alternates.canonical` to match the Emotional Mastery positioning.

Also change `getCmsMeta('/health-mastery', defaults)` → `getCmsMeta('/health-mastery-masterclass', defaults)` so the CMS override key matches.

The fully rewritten file:

```tsx
import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Emotional Mastery Masterclass — Krystalore Crews | The Root Beneath Every Pattern",
  description: "Emotional patterns shape your relationships, health, confidence, leadership, business, and self-worth. Get the free Emotional Mastery book and information about the monthly intensive with Krystalore Crews.",
  keywords: "emotional mastery, emotional intelligence, nervous system healing, somatic healing, emotional regulation, self-worth, healing relationship patterns, embodied leadership, krystalore crews",
  openGraph: {
    title: "Emotional Mastery Masterclass — Krystalore Crews",
    description: "The same emotional patterns affecting your relationships are also shaping your health, confidence, business, visibility, boundaries, self-worth, and ability to receive love and success.",
    url: "https://krystalore.com/health-mastery-masterclass",
    siteName: "Krystalore Crews",
    type: "website",
    images: [
      {
        url: "https://krystalore.com/images/health-mastery/hero.webp",
        width: 1200,
        height: 630,
        alt: "Emotional Mastery Masterclass — Krystalore Crews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Mastery Masterclass — Krystalore Crews",
    description: "The emotional patterns shaping every area of your life often operate beneath conscious awareness. Learn how Emotional Mastery changes the way you love, lead, communicate, heal, and live.",
    images: ["https://krystalore.com/images/health-mastery/hero.webp"],
  },
  alternates: {
    canonical: "https://krystalore.com/health-mastery-masterclass",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/health-mastery-masterclass', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

- [ ] **Step 3: Update the page's JSON-LD product name (cosmetic; full body rewrite is Task 7/8)**

In `app/health-mastery-masterclass/page.tsx`, find:

```tsx
    name: 'Health Mastery Group Coaching',
```

Change to:

```tsx
    name: 'Emotional Mastery Masterclass',
```

Leave the rest of the page body unchanged for now — Tasks 7 and 8 rewrite it.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Smoke test that the new URL renders identically to `/health-mastery`**

```bash
npm run dev
```

Visit both pages and confirm they look identical:
- http://localhost:3000/health-mastery
- http://localhost:3000/health-mastery-masterclass

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add app/health-mastery-masterclass
git commit -m "feat(masterclass): scaffold /health-mastery-masterclass as parallel route"
```

---

### Task 7: Rewrite the masterclass page body — top half

**Files:**
- Modify: `app/health-mastery-masterclass/page.tsx`

Replace the **content** of the page (everything between `<Header />` and `<Footer />`, EXCEPT the hero image section and the video section, which stay identical) with the new Emotional Mastery flow: IS THIS YOU → Emotional Mastery hook → "You may look successful" recognition → "Why Emotional Mastery Matters" copy.

Imports to add at the top of the file:

```tsx
import MailtoCTA from '@/components/MailtoCTA'
import { pillars } from '@/data/emotional-mastery-pillars'
```

Imports to remove (no longer used after this task and Task 8 — but only remove them when both are done; for now leave them and let `tsc` warn). After Task 8, these can be cleaned: `Check`, `Star`, `Zap`, `Heart`, `Users`, `Target`, `Shield`, `Clock`, `Flame`, `Calendar`, `Mail`, `TrendingUp`, `Repeat` — most stay used; verify in Task 8.

**Identify the boundaries to replace.** In the existing copied file, find these markers:

- KEEP (hero image): `<section className="rounded-2xl overflow-hidden mb-8 sm:mb-10">` through the closing `</section>` of the image
- KEEP (hero text): `<section className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto px-4">` through its closing `</section>` (the H1, subhead, VIP-pricing note, Join/Discovery buttons — unchanged per D3)
- KEEP (video): the `<section className="mb-12 sm:mb-16 max-w-5xl mx-auto px-4">` block that contains `<video src="/videos/rewrite-intro.mp4" ...>`

Everything from `<section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">` (the "Sound Familiar?" block) through the end-of-page final CTA section gets replaced across Tasks 7 and 8.

- [ ] **Step 1: Replace the "Sound Familiar?" section through the "Health Mastery = Life, Fitness & Business Accelerator" section with the IS THIS YOU? + Emotional Mastery + recognition + Why It Matters sections**

In `app/health-mastery-masterclass/page.tsx`, locate the section starting:

```tsx
      <section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Sound Familiar?</h2>
```

…and replace this section AND the next one (the teal "Health Mastery = Life, Fitness & Business Accelerator" gradient section) with the following four sections:

```tsx
      {/* IS THIS YOU? */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10">
          <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '3/4' }}>
            <Image
              src="/images/emotional-mastery/i-want-my-life-back.jpg"
              alt="Handwritten note: I want my life back!"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">Is this you?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              &ldquo;I want my life back.&rdquo;
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If something in you read that and went <em>yes</em>, you&apos;re not broken and you&apos;re not behind.
              You&apos;ve been carrying a version of life that no longer fits, and you&apos;re ready for the foundation,
              framework, and support to actually shift it.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A free 1-on-1 Breakthrough Call with Krystalore is where that begins. Not a sales call. A real conversation
              about what&apos;s actually running underneath — and what could be different.
            </p>
            <MailtoCTA
              hook="Book my Free Breakthrough Call"
              topic="Free 1-on-1 Breakthrough Call"
              probingQuestions={[
                'Which area of life feels most stuck right now (relationships, work, health, self-worth, parenting)?',
                'What pattern have you noticed yourself repeating?',
                'What would it mean if this could finally shift?',
              ]}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* EMOTIONAL MASTERY — the hook */}
      <section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">The Root Beneath Every Pattern</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">Emotional Mastery</h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8">
          The same emotional patterns affecting your relationships are also shaping your health, confidence,
          business, visibility, boundaries, self-worth, and ability to receive love and success.
        </p>
        <MailtoCTA
          hook="Get the Free Emotional Mastery Book"
          topic="Free Emotional Mastery Book + Monthly Intensive info"
          probingQuestions={[
            'Where in life does the same pattern keep showing up?',
            'What have you already tried (therapy, coaching, books, modalities)?',
            'What would feel like a real shift for you in the next 90 days?',
          ]}
          variant="primary"
        />
        <p className="text-sm text-gray-500 mt-4">Includes information about the monthly Emotional Mastery Intensive with Krystalore Crews.</p>
      </section>

      {/* YOU MAY LOOK SUCCESSFUL ON THE OUTSIDE */}
      <section className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">You may look successful on the outside…</h2>
          <p className="text-gray-600 mb-6">…and still quietly struggle with any of these:</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
            {[
              'Overthinking',
              'Burnout',
              'Emotional overwhelm',
              'Fear of visibility',
              'Conflict avoidance',
              'Anxious attachment',
              'People pleasing',
              'Self-sabotage',
              'Disconnection',
              'Difficulty receiving love, support, or success',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            None of these are character flaws. They&apos;re patterns. And patterns can change.
          </p>
        </div>
      </section>

      {/* WHY EMOTIONAL MASTERY MATTERS */}
      <section className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 text-center">Why Emotional Mastery Matters</h2>
        <p className="text-gray-700 text-lg mb-6 text-center max-w-2xl mx-auto">
          Your emotions influence almost everything you think is about strategy:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 mb-8">
          {[
            'How you communicate',
            'How safe you feel being seen',
            'The relationships you choose',
            'The boundaries you set',
            'Your health and stress response',
            'Your confidence',
            'Your creativity',
            'Your leadership',
            'Your parenting',
            'Your ability to trust yourself',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-3">
          Until emotional patterns are addressed, most people keep repeating the same cycles — even with more
          information, more strategy, or more effort.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Emotional Mastery is not about perfection. It&apos;s about awareness, regulation, healing, embodiment, and
          learning how to respond instead of react.
        </p>
      </section>
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors. (You may see "unused import" warnings for icons that the bottom of the file still uses — keep them for now; Task 8 cleans up.)

- [ ] **Step 3: Smoke test**

```bash
npm run dev
```

Visit http://localhost:3000/health-mastery-masterclass and scroll. Verify:
- Hero image, hero text, video are unchanged from `/health-mastery`
- "Is this you?" section shows the handwritten image + the breakthrough-call MailtoCTA button. Click the button: a mail compose window should open. Subject = `Book my Free Breakthrough Call-Emotional Mastery`. Body contains "I'm reaching out about: Free 1-on-1 Breakthrough Call", 3 probing questions, and 8 contact fields.
- The "Emotional Mastery" hook section shows Option 3 subhead and the Free Book button
- The "You may look successful on the outside…" section renders the 10 bullets
- The "Why Emotional Mastery Matters" section renders the 10 bullets + closing paragraphs

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/health-mastery-masterclass/page.tsx
git commit -m "feat(masterclass): replace top-half body with IS THIS YOU + Emotional Mastery hook"
```

---

### Task 8: Rewrite the masterclass page body — bottom half

**Files:**
- Modify: `app/health-mastery-masterclass/page.tsx`

Replace the remaining old health-mastery sections (Features grid, Program Gallery, Testimonials, Enrollment Funnel Strategy, Pricing, Final CTA) with: 8 Pillars grid → Take a Deeper Look → Two Assessments → Monthly Intensive → Final CTA.

- [ ] **Step 1: Locate the boundaries**

In `app/health-mastery-masterclass/page.tsx`, find this section (the "What's Included" block):

```tsx
      <section className="mb-12 sm:mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What&apos;s Included</h2>
```

…and delete from there through the final closing `</section>` of the page (the "Ready to Lead Your Life from the Inside Out?" CTA section that ends right before `</div>`). Replace with the five new sections below.

- [ ] **Step 2: Insert the new bottom-half sections**

```tsx
      {/* THE 8 PILLARS */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">The 8 Pillars of Emotional Mastery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One emotional pattern can quietly shape every area of life. Each pillar is a focused entry point into the same root work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/emotional-mastery/${p.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
              <p className="font-bold text-gray-900 mb-1">{p.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.oneLineTeaser}</p>
              <p className="text-teal text-xs font-semibold uppercase tracking-wider mt-3 inline-flex items-center gap-1">
                Explore <ArrowRight className="h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TAKE A DEEPER LOOK — existing related quizzes */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Take a Deeper Look</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Free assessments that map closely to the work of Emotional Mastery.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {[
            { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
            { title: 'Self-Awareness', slug: 'self-awareness' },
            { title: 'Self-Management', slug: 'self-management' },
            { title: 'Social Awareness', slug: 'social-awareness' },
            { title: 'Relationship Management', slug: 'relationship-management' },
            { title: 'Personality', slug: 'personality' },
            { title: 'Anxiety', slug: 'anxiety' },
            { title: 'Depression', slug: 'depression' },
            { title: 'Life Alignment', slug: 'life-alignment' },
          ].map((q) => (
            <Link key={q.slug} href={`/quizzes/${q.slug}`} className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-teal/40 hover:bg-white transition-colors">
              <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Free Assessment</p>
              <p className="font-semibold text-gray-900">{q.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TWO NEW ASSESSMENTS */}
      <section className="mb-12 sm:mb-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Two Assessments Built for This Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Start with whichever one fits where you are right now.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/quizzes/emotional-mastery-self-assessment" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal/40 hover:shadow-md transition-all">
            <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Self-Assessment · ~5 min</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Emotional Mastery Self-Assessment</h3>
            <p className="text-gray-600 leading-relaxed">A short reflection across all 8 pillars to surface where your patterns are most active right now.</p>
            <p className="text-teal font-semibold mt-4 inline-flex items-center gap-1">Begin the assessment <ArrowRight className="h-4 w-4" /></p>
          </Link>
          <Link href="/quizzes/emotional-mastery-readiness" className="block bg-white border-2 border-teal/30 rounded-2xl p-6 hover:border-teal hover:shadow-md transition-all">
            <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Readiness Scorecard · ~3 min</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Emotional Mastery Readiness</h3>
            <p className="text-gray-600 leading-relaxed">A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore fits where you are.</p>
            <p className="text-teal font-semibold mt-4 inline-flex items-center gap-1">Check your readiness <ArrowRight className="h-4 w-4" /></p>
          </Link>
        </div>
      </section>

      {/* MONTHLY INTENSIVE */}
      <section className="mb-12 sm:mb-16 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-12 text-white text-center max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3">The Monthly Emotional Mastery Intensive</h2>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-7">
          A guided monthly container with Krystalore Crews for the people ready to actually do the work — not just read about it.
        </p>
        <div className="flex justify-center">
          <MailtoCTA
            hook="Get info on the Monthly Intensive"
            topic="Monthly Emotional Mastery Intensive"
            probingQuestions={[
              'Which pillar feels most active in your life right now?',
              'What have you already tried, and what felt like it was missing?',
              'What would the next 90 days look like if this work landed for you?',
            ]}
            variant="primary"
            className="bg-white text-teal hover:bg-white/90 shadow-none"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Begin the Journey</h2>
        <p className="text-gray-600 mb-8">
          One real conversation can change the trajectory of a pattern that&apos;s been running for years.
        </p>
        <div className="flex justify-center">
          <MailtoCTA
            hook="Book my Free Breakthrough Call"
            topic="Free 1-on-1 Breakthrough Call"
            probingQuestions={[
              'What is the one thing in your life that you most want to shift?',
              'What pattern keeps showing up that you&apos;re ready to be done with?',
              'What would your life look like 90 days from now if this finally moved?',
            ]}
            variant="primary"
          />
        </div>
      </section>
```

- [ ] **Step 3: Clean up unused imports**

Open `app/health-mastery-masterclass/page.tsx`. The lucide-react import at the top of the file currently imports many icons that are no longer used after Tasks 7 and 8. Update the import to keep only what the new page uses:

```tsx
import { ArrowRight } from 'lucide-react'
```

Remove unused arrays/constants from the function body too: `features`, `testimonials`, `gallery`. They are no longer referenced. The JSON-LD block still uses `testimonials` — replace the JSON-LD `review` and `aggregateRating` lines as follows (the masterclass page doesn't carry over the fitness testimonials):

```tsx
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Emotional Mastery Masterclass',
    description:
      'Emotional patterns shape every area of life — relationships, health, confidence, leadership, business, and self-worth. Free book, two free assessments, eight pillar pages, and information about the monthly intensive with Krystalore Crews.',
    brand: { '@type': 'Brand', name: 'Krystalore Crews' },
  }
```

Also remove the `CHECKOUT_URL` constant if it is no longer referenced — but the hero block (still unchanged) uses it for the "Join Health Mastery" button. Keep it.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors. If TypeScript reports any remaining "declared but never used" issues, remove the offenders. If it reports anything else, fix it.

- [ ] **Step 5: Full build**

```bash
npx next build
```

Expected: build completes successfully, including static generation of all 8 `/emotional-mastery/<slug>` pages.

- [ ] **Step 6: Visual smoke test**

```bash
npm run dev
```

Visit http://localhost:3000/health-mastery-masterclass and scroll the full page. Verify the order:
1. Header
2. Hero image
3. Hero text + buttons (unchanged from `/health-mastery`)
4. Video
5. IS THIS YOU? + handwritten image + breakthrough button
6. Emotional Mastery hook + Free Book button
7. "You may look successful…" recognition list
8. "Why Emotional Mastery Matters" copy
9. The 8 Pillars grid (clicking each card navigates to `/emotional-mastery/<slug>`)
10. Take a Deeper Look (9 quiz cards linking to existing `/quizzes/...`)
11. Two new assessment cards (link to `/quizzes/emotional-mastery-self-assessment` and `/quizzes/emotional-mastery-readiness` — these 404 until Task 9 + 10)
12. Monthly Intensive band + button
13. Final CTA band + button
14. Footer

Also verify `/health-mastery` is unchanged.

Stop the dev server.

- [ ] **Step 7: Commit**

```bash
git add app/health-mastery-masterclass/page.tsx
git commit -m "feat(masterclass): replace bottom-half body with pillar grid, deeper-look quizzes, assessments, intensive, final CTA"
```

---

## Phase 3 — Two new assessments

### Task 9: Build the Emotional Mastery Self-Assessment

**Files:**
- Create: `app/quizzes/emotional-mastery-self-assessment/page.tsx`
- Create: `app/quizzes/emotional-mastery-self-assessment/layout.tsx`

This uses the existing `<QuizTemplate />` component (see `app/quizzes/emotional-intelligence/page.tsx` for the canonical example).

- [ ] **Step 1: Create the layout with metadata**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotional Mastery Self-Assessment | Krystalore',
  description:
    'A short self-assessment across the 8 pillars of Emotional Mastery — relationships, self-worth, leadership, business, parenting, health, communication, and purpose.',
  alternates: { canonical: 'https://krystalore.com/quizzes/emotional-mastery-self-assessment' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 2: Create the quiz page**

```tsx
import QuizTemplate from '@/components/quiz-template'

export default function EmotionalMasterySelfAssessment() {
  const questions = [
    { id: 1,  text: 'I can name what I feel before it leaks out as reactivity, withdrawal, or over-functioning.', options: [], type: 'scale' as const },
    { id: 2,  text: 'The same conflict or dynamic keeps showing up in my closest relationships.', options: [], type: 'scale' as const },
    { id: 3,  text: 'I can advocate for everyone in my life better than I can advocate for myself.', options: [], type: 'scale' as const },
    { id: 4,  text: 'I lead, parent, or run a business from urgency more than from clarity.', options: [], type: 'scale' as const },
    { id: 5,  text: 'I hit the same revenue, confidence, or visibility ceiling more than once.', options: [], type: 'scale' as const },
    { id: 6,  text: 'I react in ways at home I swore I never would, then feel guilty afterward.', options: [], type: 'scale' as const },
    { id: 7,  text: 'I live in low-grade tension or activation and call it being productive.', options: [], type: 'scale' as const },
    { id: 8,  text: 'I avoid hard conversations until they become bigger conversations.', options: [], type: 'scale' as const },
    { id: 9,  text: 'I start things, then sabotage or stall right before they could land.', options: [], type: 'scale' as const },
    { id: 10, text: 'I have a hard time receiving compliments, support, money, or rest.', options: [], type: 'scale' as const },
    { id: 11, text: 'When the most important thing to me is at stake, I default to old patterns I can name.', options: [], type: 'scale' as const },
    { id: 12, text: 'I believe more strategy, more information, or more effort will fix what is actually emotional.', options: [], type: 'scale' as const },
  ]

  return (
    <QuizTemplate
      slug="emotional-mastery-self-assessment"
      title="Emotional Mastery Self-Assessment"
      description="A short reflection across the 8 pillars to surface where your emotional patterns are most active right now."
      questions={questions}
      duration="5 min"
      category="Emotional Mastery"
      gatedContactForm={true}
    />
  )
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Smoke test the LOCK / lead-capture flow**

```bash
npm run dev
```

Visit http://localhost:3000/quizzes/emotional-mastery-self-assessment. Verify:

1. Quiz loads with 12 scale (1–5) questions.
2. After answering the final question, results are **blocked** by an **UNLOCK RESULTS** form.
3. The form requires **Name**, **Email**, **Phone** — try submitting with any of these blank and confirm the browser prevents submission.
4. Fill in a test contact (e.g. `Smoke Test`, `test@example.com`, `555-0100`) and submit. The results page appears with the message "Thank you, Smoke Test! Here are your detailed results."
5. In a separate browser tab, sign in as an admin and visit http://localhost:3000/admin/leads. The newly-created lead should appear with `quizTitle = "Emotional Mastery Self-Assessment"` and the test name/email/phone.

If step 5 fails because the dev environment doesn't have admin credentials, fall back to confirming via Prisma:

```bash
npx prisma studio
```

Open the `QuizLead` table and confirm the new row exists with the test data and `quizTitle = "Emotional Mastery Self-Assessment"`.

Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add app/quizzes/emotional-mastery-self-assessment
git commit -m "feat(quizzes): add Emotional Mastery Self-Assessment (12 questions, gated lead capture)"
```

---

### Task 10: Build the Emotional Mastery Readiness Scorecard

**Files:**
- Create: `app/quizzes/emotional-mastery-readiness/page.tsx`
- Create: `app/quizzes/emotional-mastery-readiness/layout.tsx`

- [ ] **Step 1: Create the layout**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotional Mastery Readiness Scorecard | Krystalore',
  description:
    'A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore Crews fits where you are right now.',
  alternates: { canonical: 'https://krystalore.com/quizzes/emotional-mastery-readiness' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 2: Create the quiz page**

```tsx
import QuizTemplate from '@/components/quiz-template'

export default function EmotionalMasteryReadiness() {
  const questions = [
    {
      id: 1,
      text: 'When you think about doing real emotional work right now, which feels most true?',
      options: [
        'I’m clear — I’m ready to do the work and I want guidance.',
        'I’m mostly ready, but I’m nervous about what it will surface.',
        'I’m curious but not sure I’m there yet.',
        'I’m exploring and just gathering information for now.',
      ],
      type: 'multiple-choice' as const,
    },
    { id: 2, text: 'I can stay with an uncomfortable feeling long enough to learn from it.', options: [], type: 'scale' as const },
    { id: 3, text: 'I’ve done some form of healing, coaching, or therapy work before.', options: [], type: 'scale' as const },
    { id: 4, text: 'I have enough time, energy, and stability right now to commit to a monthly container.', options: [], type: 'scale' as const },
    { id: 5, text: 'I can be honest in a small group setting about what is actually going on for me.', options: [], type: 'scale' as const },
    {
      id: 6,
      text: 'When I imagine the next 90 days, which is closest to true?',
      options: [
        'I want to come out of these 90 days fundamentally different.',
        'I want a meaningful shift, even if it’s gradual.',
        'I want clarity on what to work on next.',
        'I want to see what’s possible before I commit to anything.',
      ],
      type: 'multiple-choice' as const,
    },
    { id: 7, text: 'I trust myself to follow through on a commitment I make to myself.', options: [], type: 'scale' as const },
    { id: 8, text: 'I have the financial bandwidth right now to invest in this kind of work.', options: [], type: 'scale' as const },
  ]

  return (
    <QuizTemplate
      slug="emotional-mastery-readiness"
      title="Emotional Mastery Readiness Scorecard"
      description="A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore Crews fits where you are right now."
      questions={questions}
      duration="3 min"
      category="Emotional Mastery"
      gatedContactForm={true}
    />
  )
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Smoke test the LOCK / lead-capture flow**

```bash
npm run dev
```

Visit http://localhost:3000/quizzes/emotional-mastery-readiness. Verify:

1. Quiz loads with 8 questions (mix of scale and multiple-choice).
2. After the final question, results are **blocked** by the **UNLOCK RESULTS** form requiring Name, Email, Phone.
3. The form rejects empty Name / Email / Phone (browser-level `required`).
4. Submit with test contact `Smoke Test 2`, `test2@example.com`, `555-0101`. Results render.
5. Confirm the new `QuizLead` row appears in `/admin/leads` or via `npx prisma studio`, with `quizTitle = "Emotional Mastery Readiness Scorecard"`.

Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add app/quizzes/emotional-mastery-readiness
git commit -m "feat(quizzes): add Emotional Mastery Readiness Scorecard (8 questions, gated lead capture)"
```

---

## Phase 4 — Verification & ship

### Task 11: Full-app build verification

**Files:** none modified

- [ ] **Step 1: Clean and rebuild**

```bash
rm -rf .next
npx next build
```

Expected: build completes. Output should list, among many other routes:
- `/health-mastery` (existing, unchanged)
- `/health-mastery-masterclass` (new)
- `/emotional-mastery/[pillar]` with 8 statically-generated children
- `/quizzes/emotional-mastery-self-assessment`
- `/quizzes/emotional-mastery-readiness`

- [ ] **Step 2: End-to-end manual smoke test**

```bash
npm run dev
```

Walk this path in a browser:

1. http://localhost:3000/health-mastery — visually identical to pre-change state
2. http://localhost:3000/health-mastery-masterclass — full page renders in the correct order
3. On the masterclass page, click each of the 8 pillar cards and confirm they navigate to working pillar pages
4. On a pillar page (any), click one "deeper look" quiz card — confirm it loads an existing quiz
5. Back on the masterclass page, click the "Emotional Mastery Self-Assessment" card → quiz loads and you can answer
6. Back, click "Emotional Mastery Readiness" → quiz loads and you can answer
7. Click ANY MailtoCTA button (e.g. "Book my Free Breakthrough Call"). In your mail client / compose window:
   - To: `krystalore@thecrewscoach.com`
   - Subject ends with `-Emotional Mastery`
   - Body contains: "I'm reaching out about: …", 3 probing questions each with a blank line after them, and the 8 contact-info fields (Name, Phone, Email, Best time to talk, Location / Time zone, Where you heard about Krystalore, Current biggest challenge, Goal in next 90 days)

Stop the dev server.

- [ ] **Step 3: End-to-end lead-capture verification**

This step proves that taking either new assessment puts a row in Krystalore's back office.

```bash
npm run dev
```

In one browser tab, complete the Emotional Mastery Self-Assessment with test data (`E2E Test Self`, `e2e-self@example.com`, `555-9001`). Submit the UNLOCK RESULTS form and confirm the unlocked results page appears.

Then, in a separate tab, open `npx prisma studio` (in a new terminal) and verify the `QuizLead` table contains a row with:
- `name = "E2E Test Self"`
- `email = "e2e-self@example.com"`
- `phone = "555-9001"`
- `quizTitle = "Emotional Mastery Self-Assessment"`
- `status = "new"`
- `answers` and `results` populated (JSON)

Repeat with the Readiness Scorecard using `E2E Test Readiness`, `e2e-ready@example.com`, `555-9002`. Confirm a second `QuizLead` row appears with `quizTitle = "Emotional Mastery Readiness Scorecard"`.

If admin credentials are available, also navigate to http://localhost:3000/admin/leads and confirm both new leads are listed in the admin UI.

Note on downstream CRM push: the route handler at `app/api/leads/route.ts` also fires-and-forgets to GoHighLevel (`pushToGHL`) and to Jeff CRM (`pushToJeffCRM`). In local dev, the GHL push is a no-op unless `GHL_API_KEY` and `GHL_LOCATION_ID` are set in `.env.local`. Don't add or commit those env vars as part of this work — they're managed in the deployment environment. In production, leads will fan out to GHL and Jeff CRM automatically.

Stop the dev server. Optionally delete the test rows in Prisma Studio before continuing.

- [ ] **Step 4: Confirm no stray modifications**

```bash
git status
```

Expected: working tree clean (everything committed in prior tasks).

- [ ] **Step 5: Push to origin**

```bash
git push origin main
```

Expected: pushes cleanly. Vercel (already connected per recent commits) will deploy the changes to krystalore.com.

---

## Self-review checklist (the planner ran this; engineers can skip)

**Spec coverage:**
- [x] D1 — `/health-mastery` untouched (Task 6 copies, doesn't modify)
- [x] D2 — `/health-mastery-masterclass` route (Task 6)
- [x] D3 — Hero kept identical incl. video (Tasks 6–8 explicitly preserve the hero image, hero text, and video sections)
- [x] D4 — Option 3 Emotional Mastery hook (Task 7)
- [x] D5 — All 8 pillar pages (Tasks 3, 4, 5)
- [x] D6 — Self-Assessment + Readiness (Tasks 9, 10)
- [x] D7 — Hub-and-spoke shared template (Tasks 2, 3, 4)
- [x] D8 — Full 8-field intake in mailto body (Task 2 body template)
- [x] D9 — Not in main nav (no nav-edit task)
- [x] IS THIS YOU? section with handwritten image (Tasks 1 + 7)
- [x] All CTAs are MailtoCTAs with prefilled email (Task 2 component, used in Tasks 4, 7, 8)
- [x] Subject format `<hook>-Emotional Mastery` (Task 2 `buildMailtoHref`)
- [x] Body includes probing questions + contact info (Task 2 `buildBody`)
- [x] 9 existing quizzes linked from "Take a Deeper Look" (Task 8)
- [x] Cross-link grid between pillar pages (Task 4)
- [x] Quiz results LOCKED behind contact form requiring Name + Email + Phone (Tasks 9, 10 use `gatedContactForm={true}` which renders the existing UNLOCK RESULTS form)
- [x] Captured leads land in Krystalore back office (`QuizLead` Prisma model, visible at `/admin/leads`) and fan out to GoHighLevel + Jeff CRM via the existing `/api/leads` route (verified end-to-end in Task 11 Step 3)
