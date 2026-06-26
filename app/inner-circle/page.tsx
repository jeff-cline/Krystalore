import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Dumbbell, HeartPulse, Crown, Check, ArrowRight } from 'lucide-react'

// Public hub for Krystalore's highest-level private 1:1 offerings. Three tiers of access,
// each with its own CTA. "The Secret Weapon" leads to the invite-only /secret page.
function buildMailto(subject: string) {
  const body = `NAME:\nNumber:\nHow can I help?:`
  return `mailto:krystalore@thecrewscoach.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const PROGRAMS = [
  {
    icon: Dumbbell,
    eyebrow: 'Level 1 · Physical',
    title: 'Fitness Coaching',
    body: 'Private, results-driven fitness coaching built around your body, your schedule, and your goals. The foundation everything else is built on.',
    features: ['Personalized training programming', 'Nutrition & recovery guidance', 'Accountability & progress tracking'],
    cta: 'Get More Info',
    href: buildMailto('Fitness Coaching — Private 1:1'),
    external: true,
    accent: '#34c5c5',
  },
  {
    icon: HeartPulse,
    eyebrow: 'Level 2 · Mind + Body',
    title: 'Emotional Intelligence & High-Performance Coaching',
    body: 'Trauma-informed coaching for emotional intelligence, nervous-system regulation, and sustainable high performance — with base-level physical fitness included.',
    features: ['Trauma-informed EI & somatic work', 'High-performance mindset & resilience', 'Includes base-level physical fitness'],
    cta: 'Get More Info',
    href: buildMailto('Emotional Intelligence & High-Performance Coaching'),
    external: true,
    accent: '#0D9488',
  },
  {
    icon: Crown,
    eyebrow: 'Level 3 · The Premium Offer',
    title: 'The Secret Weapon',
    body: 'The highest level of access. People strategy, high-performance coaching, emotional and physical fitness, and a strategic people partner — one operator behind the man running the empire.',
    features: ['People & relationship strategy', 'High performance · emotional · physical', 'Your strategic partner behind the scenes'],
    cta: 'Enter The Secret Weapon',
    href: '/secret',
    external: false,
    accent: '#E8A849',
    featured: true,
  },
]

export default function InnerCirclePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 pb-16 md:pt-20 md:pb-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Private 1:1 with Krystalore Crews
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-6xl">
              The Inner Circle
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              The highest level of access to Krystalore — private, 1:1, and built around you.
              Three ways in, from physical foundation to full strategic partnership.
            </p>
          </div>
        </section>

        {/* THREE PROGRAMS */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {PROGRAMS.map((p) => (
                <div key={p.title}
                  className={`flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-md ${p.featured ? 'border-[#E8A849] ring-1 ring-[#E8A849]/30' : 'border-gray-100'}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `${p.accent}1A` }}>
                    <p.icon className="h-7 w-7" style={{ color: p.accent }} />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest" style={{ color: p.accent }}>{p.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-gray-900">{p.title}</h2>
                  <p className="mt-3 leading-relaxed text-gray-600">{p.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: p.accent }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex-1" />
                  {p.external ? (
                    <a href={p.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link href={p.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-black">
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-gradient-to-br from-[#E8A849] to-[#e07800] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Not sure which level fits?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/90">Tell Krystalore where you are. She&apos;ll point you to the right door.</p>
            <a href={buildMailto('The Inner Circle — Which Level Fits?')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#e07800] transition hover:bg-white/90">
              Get More Info <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
