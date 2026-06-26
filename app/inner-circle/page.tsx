import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Dumbbell, HeartPulse, Crown, Check, ArrowRight } from 'lucide-react'

// Public hub for Krystalore's highest-level private 1:1 offerings. Three tiers of access,
// each linking directly to its program (no opt-in prompts).
const PROGRAMS = [
  {
    icon: Dumbbell,
    eyebrow: 'Level 1 · Physical',
    title: 'Fitness Coaching',
    body: 'Private, results-driven fitness coaching built around your body, your schedule, and your goals. The foundation everything else is built on.',
    features: ['Personalized training programming', 'Nutrition & recovery guidance', 'Accountability & progress tracking'],
    cta: 'Explore Fitness',
    href: '/apply',
    accent: '#34c5c5',
  },
  {
    icon: HeartPulse,
    eyebrow: 'Level 2 · Mind + Body',
    title: 'Emotional Intelligence & High-Performance Coaching',
    body: 'Trauma-informed coaching for emotional intelligence, nervous-system regulation, and sustainable high performance — with base-level physical fitness included.',
    features: ['Trauma-informed EI & somatic work', 'High-performance mindset & resilience', 'Includes base-level physical fitness'],
    cta: 'Explore Mindset',
    href: '/private',
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
    accent: '#E8A849',
    featured: true,
  },
]

export default function InnerCirclePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO — split with image */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                  Private 1:1 with Krystalore Crews
                </span>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">
                  The Inner Circle
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  The highest level of access to Krystalore — private, 1:1, and built around you.
                  Three ways in, from physical foundation to full strategic partnership.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/apply" className="rounded-full bg-[#34c5c5] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#0D9488]">Fitness</Link>
                  <Link href="/private" className="rounded-full bg-[#0D9488] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110">Mindset</Link>
                  <Link href="/secret" className="rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">The Secret Weapon</Link>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/images/retreat/retreat-group-06.jpg" alt="Krystalore Crews with private clients"
                  fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
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
                  <Link href={p.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition ${p.featured ? 'bg-gradient-to-r from-[#E8A849] to-[#e07800] hover:brightness-105' : 'bg-gray-900 hover:bg-black'}`}>
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-gradient-to-br from-[#E8A849] to-[#e07800] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Not sure which level fits?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/90">Book a call and Krystalore will point you to the right door.</p>
            <Link href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#e07800] transition hover:bg-white/90">
              Book a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
