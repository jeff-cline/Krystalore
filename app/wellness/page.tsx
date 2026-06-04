'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import BusinessToolsFeature from '@/components/sections/BusinessToolsFeature'
import StayConnected from '@/components/sections/StayConnected'
import {
  Flame, HeartPulse, Battery, Users, Target, Shield,
  Sparkles, ArrowRight, Mail, CalendarCheck, CheckCircle2,
  Compass, TrendingUp, Award,
} from 'lucide-react'

/* ---------- CTAs: mailto application pattern ---------- */
const EMAIL = 'krystalore@thecrewscoach.com'
const BOOK_URL = 'https://krystalorecrews.com/book'

const CALL_SUBJECT = 'CORPORATE WELLNESS — DISCOVERY CALL REQUEST'
const CALL_BODY = `Hi Krystalore,

We'd like to explore the Corporate Wellness program for our team.

Company:
Your name & role:
Team size:
Best email & phone:
What's prompting this (burnout, engagement, leadership, retention, etc.):

Thanks!`
const CALL_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(CALL_SUBJECT)}&body=${encodeURIComponent(CALL_BODY)}`

const INFO_SUBJECT = 'CORPORATE WELLNESS — REQUEST DETAILS'
const INFO_BODY = `Hi Krystalore,

Please send more details on the Corporate Wellness packages.

Company:
Your name & role:
Team size:
Best email & phone:

Thanks!`
const INFO_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(INFO_SUBJECT)}&body=${encodeURIComponent(INFO_BODY)}`

function optionMailto(pkg: string) {
  const body = `Hi Krystalore,

We're interested in the ${pkg} corporate wellness option.

Company:
Your name & role:
Team size:
Best email & phone:

Thanks!`
  return `mailto:${EMAIL}?subject=${encodeURIComponent(`CORPORATE WELLNESS — ${pkg.toUpperCase()}`)}&body=${encodeURIComponent(body)}`
}

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Corporate Wellness with Soul by Krystalore Crews',
    serviceType: 'Corporate Wellness Program',
    areaServed: 'US',
    url: 'https://krystalore.com/wellness',
    description:
      'A self-leadership and vitality-first corporate wellness program. Accountable, high-touch wellness that lifts employee energy, resilience, confidence, and performance — starting with leadership.',
    provider: {
      '@type': 'Person',
      name: 'Krystalore Crews',
      jobTitle: 'Corporate Wellness & Leadership Consultant',
      worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits Consulting' },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const problems = [
  { icon: Battery, label: 'Low energy & burnout draining your best people' },
  { icon: HeartPulse, label: 'Stress and overwhelm quietly eroding performance' },
  { icon: TrendingUp, label: 'Wellness perks nobody uses — spend with no ROI' },
  { icon: Shield, label: 'Leadership running on empty, setting the tone for everyone' },
]

const included = [
  { icon: Compass, title: 'Self-Leadership First', desc: 'We start with the leaders. When leadership has more energy and resilience, the whole culture follows.' },
  { icon: HeartPulse, title: 'Accountable Wellness', desc: 'Personalized health reviews and built-in accountability — not a passive app nobody opens.' },
  { icon: Users, title: 'Team Connection', desc: 'Team-building, group movement, and shared challenges that strengthen culture, not just calendars.' },
  { icon: Award, title: 'Leadership Coaching', desc: 'Executive coaching and leadership development woven into the wellness experience.' },
  { icon: Sparkles, title: 'Ecosystem Access', desc: 'Member discounts on retreats, programs, and trainings across the Krystalore ecosystem.' },
  { icon: Target, title: 'Tailored To You', desc: 'Built around your team’s schedule, pain points, and goals — corporate wellness that doesn’t feel corporate.' },
]

const options = [
  {
    name: 'Small Team',
    forWho: 'Leadership teams & small companies (≈5–15)',
    blurb: 'Prove the impact where it matters most — start with leadership and build momentum.',
    points: ['Monthly wellness membership', 'Group movement & habit accountability', 'Leadership-first kickoff', 'Ecosystem member discounts'],
    featured: false,
  },
  {
    name: 'Mid-Size Team',
    forWho: 'Growing teams in transition (≈15–50)',
    blurb: 'Scale the energy across departments with deeper accountability and team-building.',
    points: ['Everything in Small Team', 'Team-building events', 'Personalized health reviews', 'Leadership coaching touchpoints', 'Retreat & program discounts'],
    featured: true,
  },
  {
    name: 'Enterprise & Custom',
    forWho: 'Larger organizations (50+) & annual partners',
    blurb: 'A fully customized, high-touch partnership — built around your culture and calendar.',
    points: ['Everything in Mid-Size', 'Private workouts & sessions', 'Custom retreats & training days', 'Annual partnership perks', 'Custom-built to your goals'],
    featured: false,
  },
]

const credentials = [
  '22-Year Air Force Veteran',
  'Corporate Leadership Consultant',
  'Best-Selling Author',
  '28× Marathoner',
  'International Retreat Leader',
  'Executive Coach',
]

export default function WellnessPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="w-3.5 h-3.5" /> Corporate Wellness with Soul
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-4" style={{ color: '#34c5c5', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000, 0 0 8px #e07800, 0 0 14px #ff8c1a, 0 0 22px #e07800, 0 0 30px #e07800' }}>
                  Corporate Wellness
                </h1>
                <p className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-[1.1]">
                  Your team’s greatest asset is their <span className="text-[#0D9488]">energy</span>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
                  A self-leadership and vitality-first wellness program that lifts energy, resilience, and confidence —
                  starting with leadership and flowing to your whole team. High-touch, accountable, and tailored to you.
                  Not a check-the-box perk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <CalendarCheck className="w-5 h-5" /> Book a Call
                  </a>
                  <a href={INFO_MAILTO} className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-4 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    <Mail className="w-5 h-5" /> Request Details
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">Now onboarding a small group of founding companies.</p>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/wellness/wellness-hero.jpg" alt="Krystalore Crews — corporate wellness with soul" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3">The real problem</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">It’s not motivation. It’s energy and overwhelm.</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your people are exhausted — trying to perform at work while neglecting their own health. Most corporate
                wellness fails because it’s passive and generic. Real change takes accountability, personalization, and
                leadership that goes first.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map((p) => (
                <div key={p.label} className="bg-[#F6F8FA] rounded-2xl p-6 border border-gray-100">
                  <p.icon className="w-8 h-8 text-[#e07800] mb-4" />
                  <p className="text-gray-800 font-medium leading-snug">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3">What makes it different</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Wellness with accountability — built around your people.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#34c5c5]/15 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 PROGRAM OPTIONS — no pricing */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3">Program options</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Three ways to bring it to your team.</h2>
              <p className="text-lg text-gray-700">Standard, premium, and fully customized options — with annual partnership perks. Pricing scales with team size; reach out for details.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {options.map((o) => (
                <div key={o.name} className={`rounded-3xl p-8 flex flex-col border ${o.featured ? 'border-[#E8A849] shadow-xl ring-1 ring-[#E8A849]/30' : 'border-gray-200 shadow-sm'}`}>
                  {o.featured && <span className="self-start inline-block bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Most popular</span>}
                  <h3 className="text-2xl font-black text-gray-900">{o.name}</h3>
                  <p className="text-sm text-[#0D9488] font-semibold mt-1 mb-4">{o.forWho}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{o.blurb}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={optionMailto(o.name)} className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl transition ${o.featured ? 'bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white shadow-lg hover:shadow-xl' : 'border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white'}`}>
                    Request Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-10">
              Want a custom team-building day, retreat, or leadership workshop too?{' '}
              <Link href="/leadership-training" className="text-[#0D9488] font-semibold underline underline-offset-2">Explore leadership training →</Link>
            </p>
          </div>
        </section>

        {/* FIRE CHALLENGE FEATURE */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#34c5c5]/10 via-[#F6F8FA] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src="/images/corporate-retreat/sam-team-building.jpg" alt="Team taking on the Beyond Limits FIRE Challenge together" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-[#e07800]/15 text-[#e07800] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Flame className="w-3.5 h-3.5" /> Featured experience
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Beyond Limits FIRE Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A 30-day corporate wellness experience to reignite energy, reduce overwhelm, and build a body and mind
                  that can keep up with your life. Fuel · Intentional Movement · Resilience · Excellence — with a keynote
                  kickoff, habit tracking, accountability, and team gamification.
                </p>
                <Link href="/firechallenge" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Flame className="w-5 h-5" /> Explore the FIRE Challenge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/corporate-retreat/krystal-crews-185.jpg" alt="Krystalore Crews — corporate wellness and leadership consultant" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3">Led by Krystalore Crews</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Military-grade leadership. Human-centered wellness.</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-7">
                  Krystalore brings 22 years of Air Force leadership, executive coaching, and real fitness credentials to a
                  program that leaders actually trust. You can’t lead well when you’re burnt out — so we start with energy,
                  confidence, and resilience at the top.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {credentials.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />
                      <span className="font-medium text-[15px]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MORE BUSINESS SUCCESS TOOLS — leadership training feature */}
        <BusinessToolsFeature />

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">Invest in healthier habits, stronger resilience, and sustainable performance.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-9 max-w-2xl mx-auto">
              Let’s design a wellness program your team will actually use — starting with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#e07800] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CalendarCheck className="w-5 h-5" /> Book a Call
              </a>
              <a href={INFO_MAILTO} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#e07800] transition-colors">
                <Mail className="w-5 h-5" /> Request Details
              </a>
            </div>
          </div>
        </section>

        {/* STAY CONNECTED — social, mirrors home page */}
        <StayConnected />

      </main>
      <Footer />
    </>
  )
}
