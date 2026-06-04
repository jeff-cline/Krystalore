'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import BusinessToolsFeature from '@/components/sections/BusinessToolsFeature'
import StayConnected from '@/components/sections/StayConnected'
import {
  Flame, Target, Compass, Shield, Zap, Lock, Rocket, Quote,
  ArrowRight, Mail, CalendarCheck, CheckCircle2, Battery,
  HeartPulse, Brain, Users, Sparkles, Award, BarChart3,
} from 'lucide-react'

/* ===================== CONFIG ===================== */
const EMAIL = 'krystalore@thecrewscoach.com'
const BOOK_URL = 'https://krystalorecrews.com/book'

// Live GoHighLevel checkout/registration page for the FIRE Challenge.
const FIRE_CHECKOUT_URL = 'https://www.krystalorecrews.com/firechallenge-checkout'

const CALL_SUBJECT = 'FIRE CHALLENGE — DISCOVERY CALL REQUEST'
const CALL_BODY = `Hi Krystalore,

We'd like to bring the Beyond Limits FIRE Challenge to our team.

Company:
Your name & role:
Team size:
Best email & phone:
What's prompting this (energy, burnout, engagement, culture, etc.):

Thanks!`
const CALL_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(CALL_SUBJECT)}&body=${encodeURIComponent(CALL_BODY)}`

const PRICE_SUBJECT = 'FIRE CHALLENGE — REQUEST PRICING'
const PRICE_BODY = `Hi Krystalore,

Please send pricing and details for the Beyond Limits FIRE Challenge.

Company:
Your name & role:
Team size:
Best email & phone:

Thanks!`
const PRICE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(PRICE_SUBJECT)}&body=${encodeURIComponent(PRICE_BODY)}`

// "Bring FIRE to Our Team" — email widget CTA
const TEAM_SUBJECT = 'FIRE Challenge — Request FIRE Challenge for My Team'
const TEAM_BODY = `Full name & role:
Team size:
Best email & phone:
What's prompting this (energy, burnout, engagement, culture, etc.):`
const TEAM_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(TEAM_SUBJECT)}&body=${encodeURIComponent(TEAM_BODY)}`

// Core-problem statistics (industry research)
const STATS = [
  { pct: 55, label: 'of U.S. employees report experiencing burnout — impacting productivity, retention, innovation, and workplace culture.' },
  { pct: 72, label: 'of employees experience moderate to very high workplace stress — leading to lower energy, focus, and performance.' },
  { pct: 80, label: 'of employees say stress negatively impacts their productivity or quality of work.' },
]

// Real client testimonials
const TESTIMONIALS = [
  { quote: 'Our team’s communication has improved dramatically since the workshop. The tools we learned are practical and easy to implement daily.', name: 'HR Director', org: 'Healthcare Organization' },
  { quote: 'It was a game-changer for our department. We finally understand each other’s working styles and conflicts have decreased significantly.', name: 'Operations Manager', org: 'Tech Company' },
  { quote: 'Krystalore’s experience exceeded every expectation. Our leadership team returned energized, aligned, and ready to execute our vision.', name: 'VP of People', org: 'Fortune 500 Company' },
]

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Beyond Limits Corporate FIRE Challenge',
    serviceType: 'Corporate Wellness Challenge',
    areaServed: 'US',
    url: 'https://krystalore.com/firechallenge',
    description:
      'A 30-day corporate wellness, resilience and self-leadership experience. Improve employee energy, engagement, confidence and performance through practical daily habits and accountability.',
    provider: {
      '@type': 'Person',
      name: 'Krystalore Crews',
      worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits Consulting' },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const problems = [
  { icon: Battery, label: 'Low energy' },
  { icon: Flame, label: 'Burnout' },
  { icon: HeartPulse, label: 'Chronic stress' },
  { icon: Brain, label: 'Overwhelm' },
  { icon: BarChart3, label: 'Poor consistency' },
  { icon: Users, label: 'No accountability' },
]

const fire = [
  { letter: 'F', word: 'Focus', icon: Target, desc: 'Choose the outcome, remove the noise, and give your energy a direction.' },
  { letter: 'I', word: 'Intention', icon: Compass, desc: 'Create daily actions that match the person and team you are becoming.' },
  { letter: 'R', word: 'Resilience', icon: Shield, desc: 'Build recovery tools for pressure, setbacks, stress, and emotional overload.' },
  { letter: 'E', word: 'Energy', icon: Zap, desc: 'Move, hydrate, breathe, and stack habits that fuel sustainable performance.' },
]

const included = [
  '60-Minute Kickoff Keynote',
  '30-Day Challenge',
  'Beyond Limits Bootcamp',
  'Habit Tracking App',
  'Calendar Integration',
  'Private Community',
  'Gamification',
  'Leaderboards',
  'Weekly Accountability',
  'Recognition & Celebration',
]

const benefits = [
  { icon: Battery, label: 'More Energy' },
  { icon: HeartPulse, label: 'Reduced Stress' },
  { icon: Brain, label: 'Better Focus' },
  { icon: Sparkles, label: 'Improved Confidence' },
  { icon: BarChart3, label: 'Increased Productivity' },
  { icon: Users, label: 'Stronger Culture' },
  { icon: Shield, label: 'Greater Resilience' },
  { icon: Award, label: 'Higher Engagement' },
]

const credentials = [
  '22-Year Air Force Veteran',
  'Corporate Leadership Consultant',
  'Best-Selling Author',
  '28× Marathoner',
  'International Retreat Leader',
  'Executive Coach',
  'Corporate Wellness Expert',
  'International Speaker',
]

/* CBL teal ramp: beeaea / 84d7d7 / 34c5c5 / 37a6a6  + black + white */
export default function FireChallengePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen bg-white text-gray-900">

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#beeaea]/40 via-white to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#37a6a6] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Flame className="w-3.5 h-3.5" /> Beyond Limits Corporate FIRE Challenge
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-4" style={{ color: '#34c5c5', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000, 0 0 8px #e07800, 0 0 14px #ff8c1a, 0 0 22px #e07800, 0 0 30px #e07800' }}>
                  FIRE Challenge
                </h1>
                <p className="text-xl md:text-2xl font-black text-black mb-5 leading-[1.15]">
                  30 Days to Reignite Energy, Reduce Overwhelm, and Build a Body &amp; Mind That Can Keep Up With Your Life
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
                  A corporate wellness experience designed to improve employee energy, confidence, resilience, and
                  performance — through practical daily habits and real accountability. This is self-leadership first.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition">
                    <CalendarCheck className="w-5 h-5" /> Book a Discovery Call
                  </a>
                  <a href={PRICE_MAILTO} className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-bold px-7 py-4 rounded-xl hover:bg-black hover:text-white transition-colors">
                    <Mail className="w-5 h-5" /> Request Pricing
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#beeaea]">
                <Image src="/images/speaker-page/speaker-hero.jpeg" alt="Krystalore Crews leading the Beyond Limits FIRE Challenge kickoff" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">The core problem</p>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">It’s not motivation. It’s low energy and overwhelm.</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your people are exhausted — performing at work while neglecting their own health. The result is stress,
                disengagement, and burnout that quietly costs you productivity, retention, and culture.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {problems.map((p) => (
                <div key={p.label} className="flex items-center gap-3 bg-[#beeaea]/30 rounded-2xl px-5 py-4 border border-[#beeaea]">
                  <p.icon className="w-6 h-6 text-[#37a6a6] flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{p.label}</span>
                </div>
              ))}
            </div>
            {/* Stat charts */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {STATS.map((s) => {
                const r = 46, C = 2 * Math.PI * r
                return (
                  <div key={s.pct} className="rounded-2xl border border-[#beeaea] bg-[#beeaea]/15 p-6 flex flex-col items-center text-center">
                    <div className="relative w-[124px] h-[124px]">
                      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                        <circle cx="60" cy="60" r={r} fill="none" stroke="#beeaea" strokeWidth="12" />
                        <circle cx="60" cy="60" r={r} fill="none" stroke="#e07800" strokeWidth="12" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - s.pct / 100)} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black text-[#37a6a6]">{s.pct}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-4 leading-snug">{s.label}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-4">*Industry research on workplace burnout and stress.</p>
          </div>
        </section>

        {/* SOLUTION — F.I.R.E. */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#beeaea]/25">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">The solution</p>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">The Beyond Limits F.I.R.E. Framework</h2>
              <p className="text-lg text-gray-700">Four pillars that turn daily habits into lasting energy, resilience, and self-leadership.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fire.map((f) => (
                <div key={f.letter} className="bg-white rounded-3xl p-7 shadow-sm border border-[#beeaea] flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-xl bg-[#e07800] text-white text-2xl font-black flex items-center justify-center">{f.letter}</span>
                    <f.icon className="w-7 h-7 text-[#37a6a6]" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-2">{f.word}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">What’s included</p>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Everything your team needs to stay consistent.</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />
                      <span className="font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOCKED HABIT TRACKER */}
              <div className="relative rounded-3xl overflow-hidden border border-[#beeaea] shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/logos/11-habit-tracker.png" alt="Beyond Limits habit tracker preview" fill className="object-cover blur-md scale-105 select-none" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                    <Lock className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-black mb-2">Beyond Limits Habit Tracker</h3>
                    <p className="text-white/80 text-sm mb-6 max-w-xs">Our signature accountability tool. Register your team to unlock and download.</p>
                    <a href={CALL_MAILTO} className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-6 py-3 rounded-xl transition">
                      Register to Unlock <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">The outcomes</p>
              <h2 className="text-3xl md:text-4xl font-black text-black">What changes for your people — and your bottom line.</h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-[#beeaea]">
                <Image src="/images/scraped/krystalore-event.jpg" alt="Krystalore Crews leading a corporate FIRE Challenge event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="lg:col-span-3 grid grid-cols-2 gap-5">
                {benefits.map((b) => (
                  <div key={b.label} className="bg-[#beeaea]/30 rounded-2xl p-6 border border-[#beeaea]">
                    <b.icon className="w-8 h-8 text-[#37a6a6] mb-3" />
                    <p className="font-bold leading-snug text-gray-900">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#beeaea]">
                <Image src="/images/corporate-retreat/highres-portrait.jpg" alt="Krystalore Crews — corporate wellness and leadership expert" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">About Krystalore</p>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-5">Real leadership credibility. Real results.</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-7">
                  Krystalore Crews helps people lead themselves first. With a 22-year military leadership career and
                  decades of coaching and performance experience, she brings the trust, accountability, and resilience
                  leaders under pressure are looking for.
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

        {/* TESTIMONIALS (placeholders) */}
        <section className="py-16 md:py-24 bg-[#beeaea]/25">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">What people say</p>
              <h2 className="text-3xl md:text-4xl font-black text-black">Trusted by leaders, teams, and audiences.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name + t.org} className="bg-white rounded-2xl p-7 shadow-sm border border-[#beeaea] flex flex-col">
                  <div className="flex gap-1 mb-4 text-[#E8A849] text-lg tracking-wider">★★★★★</div>
                  <Quote className="w-7 h-7 text-[#beeaea] mb-2" />
                  <p className="text-gray-600 italic leading-relaxed mb-5 flex-1">“{t.quote}”</p>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM OPTIONS — route to wellness + leadership */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">Program options</p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Built for teams of every size.</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Small Team, Mid-Size, and Enterprise options — with custom pricing available. The FIRE Challenge is part of
              a full corporate wellness ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wellness" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition">
                See Wellness Packages <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/leadership-training" className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-bold px-7 py-4 rounded-xl hover:bg-black hover:text-white transition-colors">
                Work Together / Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* MORE BUSINESS SUCCESS TOOLS — leadership training feature */}
        <BusinessToolsFeature />

        {/* GHL CHECKOUT — embedded form (placeholder src) */}
        <section id="register" className="py-16 md:py-24 bg-gradient-to-b from-[#beeaea]/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-[#37a6a6] font-bold uppercase tracking-widest text-sm mb-3">Get started</p>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-3">Bring FIRE to Your Team</h2>
              <p className="text-lg text-gray-700">Join the 30-day challenge now, or book a call and we’ll design it with you.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href={FIRE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#e07800] hover:bg-[#c46700] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition">
                <Rocket className="w-5 h-5" /> Join the Challenge
              </a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#37a6a6] hover:bg-[#34c5c5] hover:text-white font-bold px-8 py-4 rounded-xl transition-colors">
                <CalendarCheck className="w-5 h-5" /> Book a Discovery Call
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#beeaea] shadow-lg bg-white">
              {/* Embedded GoHighLevel checkout — FIRE_CHECKOUT_URL */}
              <iframe
                src={FIRE_CHECKOUT_URL}
                title="Beyond Limits FIRE Challenge registration"
                className="w-full"
                style={{ height: 760, border: 'none' }}
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Form not loading?{' '}
              <a href={CALL_MAILTO} className="text-[#37a6a6] font-semibold underline underline-offset-2">Email us instead →</a>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#beeaea]/50 via-[#beeaea]/25 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Flame className="w-12 h-12 text-[#34c5c5] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight text-black">Your Team’s Greatest Asset Is Their Energy.</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-9 max-w-2xl mx-auto">
              Invest in healthier habits, stronger resilience, and sustainable performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition">
                <CalendarCheck className="w-5 h-5" /> Schedule a Discovery Call
              </a>
              <a href={TEAM_MAILTO} className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-bold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-colors">
                <Rocket className="w-5 h-5" /> Bring FIRE to Our Team
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
