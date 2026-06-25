'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Lock, ArrowRight, Check, Star, Users, Brain, Compass, HeartPulse,
  Gauge, Network, LineChart, Sparkles, ShieldCheck, Quote, Plane, Clock,
  Crown, Trophy, TrendingUp,
} from 'lucide-react'
import { SecretGate } from '@/components/secret/gate'
import { DIVISIONS } from '@/lib/secretDivisions'

const DIVISION_ICONS: Record<string, any> = { star: Star, crown: Crown, trophy: Trophy, shield: ShieldCheck }

/* ─────────────────────────  CONTENT  ───────────────────────── */

const PILLARS = [
  { n: '01', icon: Users, title: 'Team & Relationships', body: 'People strategy, hiring, firing, culture, conflict — and the conversations that can’t go through HR.' },
  { n: '02', icon: Brain, title: 'Mindset & Decisions', body: 'Pattern recognition, blind spots, and mental clarity for your highest-stakes calls.' },
  { n: '03', icon: Compass, title: 'Vision Architecture', body: 'Quarterly recalibration that reconnects the man to the mission before drift compounds.' },
  { n: '04', icon: HeartPulse, title: 'Physical Performance', body: 'Somatic, trauma-informed body optimization — sleep, stress, energy, and resilience.' },
]

const TIERS = [
  { name: 'The Advisor', price: '$3,500', cadence: '/mo', terms: '3-mo minimum', detail: '2 sessions / month, async support between.' },
  { name: 'The Inner Circle', price: '$7,500', cadence: '/mo', terms: '3-mo minimum', detail: 'Weekly sessions, unlimited async, quarterly deep-dive.', featured: true },
  { name: 'Executive Partner', price: '$18,000', cadence: '/mo', terms: '6-mo minimum', detail: 'Unlimited + on-call, on-site, embedded advisory.' },
]

const STATS = [
  { big: '22 yrs', label: 'U.S. Air Force leadership' },
  { big: '200K+', label: 'Personnel trained worldwide' },
  { big: '28×', label: 'Marathon finisher + 50-mile ultra' },
  { big: '$4M+', label: 'Federal programs delivered' },
]

const CREDENTIALS = [
  '22-Yr Air Force Veteran', 'Certified Leadership Coach',
  'Somatic Coach', 'Trauma-Informed',
  'Four Lenses Facilitator', 'Pentagon Curriculum Author',
  'Keynote Speaker', 'PhD Candidate',
]

const DASHBOARD_TRACKS = [
  { icon: Gauge, title: 'Business Metrics', body: 'Revenue, pipeline, KPIs, growth velocity — not vanity metrics.' },
  { icon: Network, title: 'Relationship Rolodex', body: 'Every key contact, partner, and ally — tagged, tracked, tied to strategy.' },
  { icon: Users, title: 'Team Performance', body: 'Accountability loops, OKRs, individual signals — before it becomes a problem.' },
  { icon: Compass, title: 'Strategic Roadmap', body: '90-day and annual milestones live in your dashboard — always one click away.' },
]

const ARCHITECTURE_FEATURES = [
  'Custom executive dashboard built around your KPIs',
  'Technology stack audit & integration recommendations',
  '90-day and annual roadmapping with accountability',
  'Quarterly strategy reviews tied to live data',
  'Relationship & Rolodex intelligence system',
  'Team performance tracking & accountability loops',
]

const ENGINE_CAPABILITIES = [
  { icon: Sparkles, title: 'Predictive Demand', body: '12,000+ high-intent leads a month — buyers identified before your competitors ever see them.' },
  { icon: Network, title: 'Behavioral Intelligence', body: '2.4B behavioral signals across 148M identity nodes resolving to a 92.4% conversion probability.' },
  { icon: LineChart, title: 'Command Visibility', body: 'A single growth dashboard for SEO, AEO, and paid media — be the result and the recommendation.' },
]

const ENGINE_PROOF = [
  { big: '12K+', label: 'High-intent leads / month' },
  { big: '2.4B', label: 'Behavioral signals' },
  { big: '3.1×', label: 'Average ROAS lift' },
  { big: '58%', label: 'Lower cost per acquisition' },
  { big: '92.4%', label: 'In-window conversion probability' },
  { big: '97.4%', label: 'Identity resolution accuracy' },
]

const ENGINE_DELIVERS = [
  'Predictive demand — buyers before competitors',
  'SEO & AEO — be the result and the recommendation',
  'Paid media — search, social & TV at scale',
  'Done-for-you outreach & appointment setting',
  'CRM automation — HubSpot, GHL, Salesforce',
]

const ENTRY_POINTS = [
  {
    icon: Clock,
    title: 'The Half-Day Intensive',
    price: 'Virtual or local · $2,500',
    body: 'A 3.5-hour private session across people dynamics, decision patterns, physical performance, and a 90-day roadmap.',
    notes: ['Pre-session intake + full recording', 'Full $2,500 credited toward any retainer (60 days)'],
  },
  {
    icon: Plane,
    title: 'The 3-Day Immersion',
    price: 'Custom · all client travel covered',
    body: 'Three full days together — in Puerto Rico, or Krystalore travels to you. A complete diagnostic and reset across all four pillars.',
    notes: ['Morning somatic + Vision Architecture sessions', 'Full investment credited toward retainer'],
    featured: true,
  },
]

const TRACK_RECORD = [
  { title: 'Pentagon Leadership Curriculum', meta: '$4M · 4 military branches' },
  { title: 'Train-the-Trainer at Scale', meta: '200,000+ personnel reached' },
  { title: 'Island-Wide Activation — Roatán', meta: '2,000+ attendees · 3 weeks' },
  { title: 'Multi-Branch Culture Turnaround', meta: '6 branches · measurable lift' },
  { title: 'National Recruiting Initiative', meta: 'Nationwide · first-of-its-kind' },
]

/* ─────────────────────────  CONFIGURATOR  ───────────────────────── */

const BASE_TIERS = [
  { id: 'advisor', name: 'The Advisor', monthly: 3500 },
  { id: 'inner-circle', name: 'The Inner Circle', monthly: 7500 },
  { id: 'executive', name: 'Executive Partner', monthly: 18000 },
] as const

function money(n: number) {
  return '$' + n.toLocaleString('en-US')
}

function buildQuote(baseId: string, addArch: boolean, addAmplify: boolean) {
  const base = BASE_TIERS.find((t) => t.id === baseId) || BASE_TIERS[1]
  const parts: string[] = [base.name]
  let monthly: number = base.monthly
  let monthlyCustom = false
  let note = ''

  if (addArch) {
    parts.push('Growth Architecture')
    monthly = baseId === 'inner-circle' ? 9500 : base.monthly + 2000
  }
  if (addAmplify) {
    parts.push('Amplify')
    if (baseId === 'inner-circle' && addArch) monthly = 18500
    else if (baseId === 'inner-circle') monthly = 12500
    else { monthlyCustom = true; note = 'Amplify on this tier is scoped custom on your call.' }
  }

  const oneTime = addArch ? 5000 : 0

  return {
    engagement: parts.join(' + '),
    monthlyLabel: monthlyCustom ? 'Custom' : money(monthly) + '/mo',
    oneTimeLabel: oneTime ? money(oneTime) + ' one-time' : '—',
    note,
  }
}

/* ─────────────────────────  PAGE  ───────────────────────── */

export default function SecretPage() {
  return (
    <SecretGate>
      <InnerCircle />
    </SecretGate>
  )
}


/* ─────────────────────────  THE PAGE BEHIND THE GATE  ───────────────────────── */

function InnerCircle() {
  const [baseId, setBaseId] = useState<string>('inner-circle')
  const [addArch, setAddArch] = useState(false)
  const [addAmplify, setAddAmplify] = useState(false)
  const quote = buildQuote(baseId, addArch, addAmplify)

  const formRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', role: '',
    engagement: '', estMonthly: '', estOneTime: '', biggestPressure: '', whyNow: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  // Arriving from a division page (?division=slug#apply) → pre-tag + scroll to apply.
  useEffect(() => {
    try {
      const slug = new URLSearchParams(window.location.search).get('division')
      const d = slug ? DIVISIONS.find((x) => x.slug === slug) : undefined
      if (d) {
        setForm((f) => ({ ...f, engagement: `${d.label} Division — ${d.programTitle}` }))
        setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 350)
      }
    } catch { /* ignore */ }
  }, [])

  const applyWithConfig = () => {
    setForm((f) => ({
      ...f,
      engagement: quote.engagement,
      estMonthly: quote.monthlyLabel,
      estOneTime: quote.oneTimeLabel,
    }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/secret/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } catch { /* silent */ }
    setSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* minimal logo-only bar */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={150} height={42} className="h-9 w-auto" priority />
          <span className="hidden text-[11px] font-bold uppercase tracking-[0.35em] text-[#0D9488] sm:block">The Inner Circle</span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                <ShieldCheck className="h-3.5 w-3.5" /> Private Executive Advisory · By Application Only
              </span>
              <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.08] text-gray-900 md:text-5xl lg:text-6xl">
                &ldquo;The man running the empire needs someone managing the man.&rdquo;
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                That&apos;s where I come in. For the high-performing man whose greatest competitive
                advantage — and greatest liability — is himself.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                  Request an Invitation <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-gray-400">Krystalore Crews — The CEO Whisperer</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0D9488] via-[#34c5c5] to-[#E8A849] shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white">
                  <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={220} height={62} className="h-auto w-44 brightness-0 invert" />
                  <p className="mt-8 font-serif text-2xl font-medium leading-snug">Strategy for the few.</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/80">Beyond Limits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <Section eyebrow="The Inner Circle Retainer" title="The Four Pillars" sub="Four fronts, one operator. Where the man is strongest — and where he quietly breaks.">
        <div className="grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.n} className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl font-medium text-[#E8A849]">{p.n}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#34c5c5]/12">
                  <p.icon className="h-5 w-5 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INVESTMENT TIERS */}
      <Section bg="#F6F8FA" eyebrow="Investment Tiers" title="Choose your level of access" sub="Every tier is a private line to me. The only question is how much of me you need.">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border bg-white p-8 ${t.featured ? 'border-[#E8A849] shadow-xl ring-1 ring-[#E8A849]/30' : 'border-gray-100 shadow-sm'}`}>
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Most Chosen
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-medium text-gray-900">{t.price}</span>
                <span className="text-sm font-medium text-gray-400">{t.cadence}</span>
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">{t.terms}</p>
              <p className="mt-4 leading-relaxed text-gray-600">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* YOUR ADVISOR */}
      <Section eyebrow="Your Advisor" title="Krystalore Crews" sub="Twenty-two years building leaders inside the most demanding institution on earth — now in your corner alone.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-gradient-to-br from-[#F6F8FA] to-white p-6 text-center ring-1 ring-gray-100">
              <div className="font-serif text-3xl font-medium text-[#0D9488]">{s.big}</div>
              <div className="mt-2 text-sm leading-snug text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CREDENTIALS.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-[#34c5c5]/10 px-4 py-2 text-sm font-medium text-[#0D9488]">
              <Check className="h-3.5 w-3.5" /> {c}
            </span>
          ))}
        </div>
      </Section>

      {/* GROWTH ARCHITECTURE */}
      <Section bg="#F4F1EC" eyebrow="The Growth Architecture" title="Scale · Technology · Strategy"
        sub="Your business operating system — custom-built tools, relationship intelligence, and long-term strategy that give you command-level visibility over every critical asset.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DASHBOARD_TRACKS.map((d) => (
            <div key={d.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <d.icon className="h-6 w-6 text-[#0D9488]" />
              <h3 className="mt-4 font-bold text-gray-900">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ul className="space-y-3 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            {ARCHITECTURE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" /> {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Architecture Build</p>
              <p className="mt-1 font-serif text-3xl font-medium text-gray-900">$5,000</p>
              <p className="text-sm text-gray-500">One-time setup + 90-day onboarding</p>
            </div>
            <div className="rounded-2xl border border-[#E8A849] bg-white p-6 shadow-md ring-1 ring-[#E8A849]/30">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Architecture + Inner Circle ★</p>
              <p className="mt-1 font-serif text-3xl font-medium text-gray-900">$9,500<span className="text-base font-medium text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-500">Full integration — human performance + systems</p>
            </div>
          </div>
        </div>
      </Section>

      {/* AMPLIFY — HER ENGINE */}
      <Section eyebrow="Amplify — Activate + Amplify" title="The Growth Engine"
        sub="Once we activate your idea, my proprietary growth engine amplifies it — maximizing outreach, manufacturing demand, and compounding success across every channel.">
        <div className="grid gap-6 lg:grid-cols-3">
          {ENGINE_CAPABILITIES.map((c) => (
            <div key={c.title} className="rounded-2xl bg-gradient-to-br from-[#F6F8FA] to-white p-7 ring-1 ring-gray-100">
              <c.icon className="h-6 w-6 text-[#0D9488]" />
              <h3 className="mt-4 font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {ENGINE_PROOF.map((p) => (
            <div key={p.label} className="rounded-xl bg-[#0D9488]/[0.04] p-4 text-center ring-1 ring-[#34c5c5]/15">
              <div className="font-serif text-2xl font-medium text-[#0D9488]">{p.big}</div>
              <div className="mt-1 text-[11px] leading-tight text-gray-500">{p.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ul className="space-y-3 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            {ENGINE_DELIVERS.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" /> {f}
              </li>
            ))}
          </ul>
          <div className="grid gap-4 sm:grid-cols-1">
            <BundleRow name="Amplify Standalone" price="Custom" detail="Scoped to your growth objectives" />
            <BundleRow name="Inner Circle + Amplify" price="$12,500/mo" detail="Human performance + market amplification" />
            <BundleRow name="Full Stack — All Three ★" price="$18,500/mo" detail="Inner Circle + Growth Architecture + Amplify" featured />
          </div>
        </div>
      </Section>

      {/* ENTRY POINTS */}
      <Section bg="#F6F8FA" eyebrow="Entry Points" title="Start before you commit"
        sub="Two ways in. Both credit fully toward a retainer — so the only risk is staying where you are.">
        <div className="grid gap-6 lg:grid-cols-2">
          {ENTRY_POINTS.map((e) => (
            <div key={e.title} className={`rounded-2xl border bg-white p-8 ${e.featured ? 'border-[#E8A849] shadow-xl ring-1 ring-[#E8A849]/30' : 'border-gray-100 shadow-sm'}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#34c5c5]/12">
                  <e.icon className="h-5 w-5 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{e.title}</h3>
                {e.featured && <span className="ml-auto rounded-full bg-[#E8A849]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e07800]">Highly Recommended</span>}
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">{e.body}</p>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#0D9488]">{e.price}</p>
              <ul className="mt-3 space-y-2">
                {e.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#34c5c5]" /> {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* INVESTMENT CONFIGURATOR */}
      <Section eyebrow="Investment Configurator" title="Build your engagement"
        sub="Shape the room to fit you. Your numbers update live — then carry straight into your application.">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0D9488]">Your retainer tier</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {BASE_TIERS.map((t) => (
                  <button key={t.id} onClick={() => setBaseId(t.id)}
                    className={`rounded-xl border p-4 text-left transition ${baseId === t.id ? 'border-[#0D9488] bg-[#0D9488]/[0.05] ring-1 ring-[#0D9488]/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <div className="text-sm font-bold text-gray-900">{t.name}</div>
                    <div className="mt-1 font-serif text-xl text-[#0D9488]">{money(t.monthly)}<span className="text-xs text-gray-400">/mo</span></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle label="Add Growth Architecture" detail="Dashboard + systems · $5,000 build" on={addArch} onClick={() => setAddArch((v) => !v)} />
              <Toggle label="Add Amplify" detail="Market amplification engine" on={addAmplify} onClick={() => setAddAmplify((v) => !v)} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#34c5c5] p-8 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Your Configuration</p>
              <p className="mt-2 text-lg font-semibold leading-snug">{quote.engagement}</p>
              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/80">Monthly</span>
                  <span className="font-serif text-3xl font-medium">{quote.monthlyLabel}</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm text-white/80">One-time</span>
                  <span className="text-lg font-semibold">{quote.oneTimeLabel}</span>
                </div>
              </div>
              {quote.note && <p className="mt-4 text-xs leading-relaxed text-white/70">{quote.note}</p>}
              <button onClick={applyWithConfig}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-white/90">
                Apply with this <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* TRACK RECORD */}
      <Section bg="#F4F1EC" eyebrow="Track Record" title="Proof at scale" sub="Not theory. Programs built, branches turned, thousands moved.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACK_RECORD.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <Star className="h-5 w-5 text-[#E8A849]" />
              <h3 className="mt-3 font-bold text-gray-900">{t.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.meta}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto h-10 w-10 text-[#34c5c5]" />
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl">
            &ldquo;She has a military background and that level of precision — she tracks everything.
            The most intuitive, active listener I have ever encountered. She genuinely gets business
            at the strategic level. No one has ever managed me like this.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#0D9488]">
            Senior Executive · Fortune-Level Org · Identity Withheld
          </p>
        </div>
      </section>

      {/* SPECIALIZED DIVISIONS */}
      <section className="bg-[#0D9488]/[0.04] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">The Secret Weapon · Specialized Divisions</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900 md:text-4xl">For those who carry a different kind of weight</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Certain lives demand a specialized hand. Each division is an add-on activation — and each one carries
              unique, high-stakes scenarios we anticipate and stand ready for, long before they arrive.
            </p>
          </div>

          {/* economics strip */}
          <div className="mx-auto mb-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
              <TrendingUp className="mx-auto h-6 w-6 text-[#0D9488]" />
              <p className="mt-3 font-serif text-2xl font-medium text-gray-900">200–300%</p>
              <p className="mt-1 text-sm text-gray-500">Activation moves you into a higher bracket of the base retainer.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
              <ShieldCheck className="mx-auto h-6 w-6 text-[#0D9488]" />
              <p className="mt-3 font-serif text-2xl font-medium text-gray-900">Always Ready</p>
              <p className="mt-1 text-sm text-gray-500">We prepare for each group’s edge cases before they ever happen.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
              <Star className="mx-auto h-6 w-6 text-[#E8A849]" />
              <p className="mt-3 font-serif text-2xl font-medium text-gray-900">First Right</p>
              <p className="mt-1 text-sm text-gray-500">Hard work up front earns a guaranteed first right of refusal to scale with you. The secret sauce.</p>
            </div>
          </div>

          {/* the four division buttons */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIVISIONS.map((d) => {
              const DIcon = DIVISION_ICONS[d.icon] || Star
              return (
                <Link key={d.slug} href={`/secret/${d.slug}`}
                  className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#0D9488]/40 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#34c5c5]/15 to-[#E8A849]/15 ring-1 ring-[#0D9488]/10">
                    <DIcon className="h-6 w-6 text-[#0D9488]" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-gray-900">{d.label}</h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#0D9488]">{d.programTitle}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-[#e07800]">
                    Enter <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section ref={formRef} className="scroll-mt-24 bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              <Lock className="h-3.5 w-3.5" /> By Application Only
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium text-gray-900 md:text-4xl">Request your invitation</h2>
            <p className="mt-3 text-gray-600">Tell me where you are. If it&apos;s a fit, I&apos;ll reach out personally.</p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-[#34c5c5]/30 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#34c5c5]/15">
                <Check className="h-7 w-7 text-[#0D9488]" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-gray-900">Your application is received.</h3>
              <p className="mt-3 text-gray-600">Krystalore reviews every application personally. If it&apos;s a fit, you&apos;ll hear from her directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name *" value={form.name} onChange={(v) => update('name', v)} required />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => update('email', v)} required />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => update('phone', v)} />
                <Field label="Company" value={form.company} onChange={(v) => update('company', v)} />
              </div>
              <Field label="Your role" value={form.role} onChange={(v) => update('role', v)} placeholder="Founder, CEO, Executive…" />
              {form.engagement && (
                <div className="rounded-xl bg-[#F6F8FA] p-4 text-sm">
                  <span className="font-bold text-[#0D9488]">Engagement of interest: </span>
                  {form.engagement} — {form.estMonthly}{form.estOneTime && form.estOneTime !== '—' ? ` + ${form.estOneTime}` : ''}
                </div>
              )}
              <TextArea label="What pressure are you carrying right now?" value={form.biggestPressure} onChange={(v) => update('biggestPressure', v)} />
              <TextArea label="Why now?" value={form.whyNow} onChange={(v) => update('whyNow', v)} />
              <button type="submit" disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105 disabled:opacity-60">
                {submitting ? 'Sending…' : <>Submit Application <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-center text-xs text-gray-400">Private &amp; confidential. Reviewed personally by Krystalore Crews.</p>
            </form>
          )}
        </div>
      </section>

      {/* slim footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6 lg:px-8">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={130} height={36} className="h-8 w-auto opacity-80" />
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Krystalore Crews · The Inner Circle · By invitation only</p>
        </div>
      </footer>
    </main>
  )
}

/* ─────────────────────────  SMALL COMPONENTS  ───────────────────────── */

function Section({ eyebrow, title, sub, children, bg }: {
  eyebrow: string; title: string; sub?: string; children: React.ReactNode; bg?: string
}) {
  return (
    <section className="py-16 md:py-24" style={bg ? { background: bg } : undefined}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900 md:text-4xl">{title}</h2>
          {sub && <p className="mt-4 leading-relaxed text-gray-600">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function BundleRow({ name, price, detail, featured }: { name: string; price: string; detail: string; featured?: boolean }) {
  return (
    <div className={`flex items-center justify-between rounded-2xl border bg-white p-6 ${featured ? 'border-[#E8A849] shadow-md ring-1 ring-[#E8A849]/30' : 'border-gray-100 shadow-sm'}`}>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">{name}</p>
        <p className="mt-1 text-sm text-gray-500">{detail}</p>
      </div>
      <span className="font-serif text-xl font-medium text-gray-900">{price}</span>
    </div>
  )
}

function Toggle({ label, detail, on, onClick }: { label: string; detail: string; on: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} type="button"
      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${on ? 'border-[#0D9488] bg-[#0D9488]/[0.05] ring-1 ring-[#0D9488]/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border ${on ? 'border-[#0D9488] bg-[#0D9488]' : 'border-gray-300'}`}>
        {on && <Check className="h-3.5 w-3.5 text-white" />}
      </span>
      <span>
        <span className="block text-sm font-bold text-gray-900">{label}</span>
        <span className="block text-xs text-gray-500">{detail}</span>
      </span>
    </button>
  )
}

function Field({ label, value, onChange, type = 'text', required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
      <input type={type} value={value} required={required} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
    </label>
  )
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
      <textarea value={value} rows={3} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
    </label>
  )
}
