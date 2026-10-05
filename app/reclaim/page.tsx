import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Check, Heart, Compass, Battery, Layers, Wallet, Eye, Sparkles } from 'lucide-react'
import { LetterButton } from './LetterModal'

const CHECKOUT = 'https://link.elite360.io/payment-link/6aa6a3ea32f95ae35594a57d'

export const metadata: Metadata = {
  title: 'RISE: Reclaim Your Capacity — From Overwhelm to Agency',
  description:
    'A six-week reset for women navigating life, leadership, business, and seasons of change. Clarity before capacity. Capacity before complexity. Reclaim your capacity in this season of change.',
  alternates: { canonical: '/reclaim' },
  openGraph: {
    title: 'RISE: Reclaim Your Capacity',
    description: 'From overwhelm to agency. A six-week reset for women in seasons of change.',
    url: 'https://krystalore.com/reclaim',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/reclaim/rise-poster.png', width: 1086, height: 1448, alt: 'RISE — Reclaim Your Capacity' }],
  },
}

const WEEKS = [
  { n: 1, icon: Compass, title: 'Stabilize + Triage',
    body: 'Get everything out of your head. Identify what is truly NOW, what is NEXT, what can wait, and what is not yours. Address urgent financial pressure without trying to solve the whole future.' },
  { n: 2, icon: Heart, title: 'Identity + Values',
    body: 'Ask: who am I in this season? Decide what matters now, what success means now, and what you are no longer available to carry.' },
  { n: 3, icon: Battery, title: 'Capacity + Well-Being',
    body: 'Map red, yellow, and green days. Create tiny body, life, and business anchors that still work when bandwidth is low.' },
  { n: 4, icon: Layers, title: 'Systems + External Brain',
    body: 'Simplify calendar, tasks, routines, communication, and appropriate AI support. Reduce remembering, switching, and repeated decisions.' },
  { n: 5, icon: Wallet, title: 'Money + Business Clarity',
    body: 'Look gently at the numbers. Identify minimum needs, fastest ethical revenue opportunities, expenses to reduce, and the next few business actions.' },
  { n: 6, icon: Eye, title: 'Visibility + Confidence',
    body: 'Create a minimum viable visibility plan. Stay seen as an expert without performing perfection. Choose sustainable relationship, content, and revenue actions.' },
]

const INCLUDED = [
  '6 weekly private sessions',
  'Worksheets for every week',
  'A personalized roadmap',
  'Weekly body-doubling / co-working session',
  'Check-ins between sessions',
]

const ADHD = [
  'Visible priorities', 'Small steps', 'Body doubling', 'Flexible pacing', 'Fewer decisions',
]

const SCRIPT = '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive'

export default function ReclaimPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* ── HERO ── */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/images/reclaim/hero.jpg"
            alt="Palm with exposed roots on the shoreline"
            fill
            priority
            className="-z-10 object-cover"
            style={{ objectPosition: '50% 42%' }}
            sizes="100vw"
          />
          {/* two passes: a left-weighted scrim so the copy stays legible, plus a light
              overall tint — heavy enough to read on, light enough to see the palm */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06302f]/85 via-[#06302f]/55 to-[#06302f]/25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#06302f]/45 via-transparent to-[#06302f]/65" />

          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8ff5ef]">
                Crews Beyond Limits &middot; RISE Series
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] text-white md:text-6xl lg:text-7xl">
                RISE:
                <span className="block bg-gradient-to-r from-[#8ff5ef] via-[#b9fbf6] to-[#ffd9c9] bg-clip-text text-transparent">
                  Reclaim Your Capacity
                </span>
              </h1>
              <p className="mt-6 text-xl font-semibold text-white/90 md:text-2xl">
                From overwhelm to agency.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                Reclaim your capacity in this season of change. A six-week beta reset for women navigating
                life, leadership, business, and seasons of change.
              </p>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#8ff5ef]">
                Clarity before capacity. Capacity before complexity.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#34c5c5] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
                >
                  I&rsquo;m Ready to Rise <ArrowRight className="h-4 w-4" />
                </a>
                <LetterButton
                  label="Read her letter to you"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#06302f]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE PROMISE ── */}
        <section className="bg-[#f4fbfa] py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">The core promise</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b3b3a] md:text-4xl">
              This is not another list of things to keep up with.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#3d5a58]">
              It is a scaffold for a season when everything feels urgent. The goal is to reduce energetic
              noise, restore agency, create financial and business movement, and rebuild confidence through
              small evidence-based wins.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold italic text-[#0D9488]">
              We can move as quickly or as gently as capacity allows &mdash; not as fast as fear is pushing.
            </p>
          </div>
        </section>

        {/* ── POSTER / STRONG WITH ROOTS EXPOSED ── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/reclaim/rise-poster.png"
                  alt="You can be strong and still have your roots exposed"
                  width={1086}
                  height={1448}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">You&rsquo;re not broken</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b3b3a] md:text-4xl">
                  You can be strong and still have your roots exposed.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#3d5a58]">
                  Sometimes life hits hard, and the foundation you once stood confidently on feels uncertain.
                  You&rsquo;re still here. Still capable. Still deeply rooted.
                </p>
                <p className="mt-4 text-xl font-semibold text-[#0D9488]">
                  You&rsquo;re not broken. You&rsquo;re in a new season.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Clarity', 'Confidence', 'Energy', 'Love', 'Zest for life', 'Unshakable faith'].map((w) => (
                    <span key={w} className="rounded-full bg-[#0D9488]/10 px-4 py-2 text-sm font-semibold text-[#0b7c72]">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SIX WEEK ROADMAP ── */}
        <section className="bg-[#0b3b3a] py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ff5ef]">The six-week roadmap</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Six weeks. One step at a time.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WEEKS.map(({ n, icon: Icon, title, body }) => (
                <div key={n} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition hover:bg-white/[0.09]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#8ff5ef] text-sm font-black text-[#0b3b3a]">
                      {n}
                    </span>
                    <Icon className="h-5 w-5 text-[#8ff5ef]" />
                  </div>
                  <h3 className="mt-5 text-xl font-black leading-tight">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{body}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-[#8ff5ef] bg-white/[0.06] p-7">
              <h3 className="text-xl font-black">Flexible pace</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                The six weeks are a map, not a rulebook. If there is capacity, we can move faster. If grief,
                caregiving, health, or overwhelm changes the day, we shrink the step.
                <span className="font-bold text-white"> Nothing is failed because the plan needs to get smaller.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── ADHD-FRIENDLY ── */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">Built for the way your brain works</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b3b3a] md:text-4xl">ADHD-friendly by design</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ADHD.map((a) => (
                <span key={a} className="rounded-full border border-[#0D9488]/25 bg-[#f4fbfa] px-5 py-3 font-semibold text-[#0b7c72]">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECIAL MESSAGE + HANDWRITTEN LETTER ── */}
        <section className="bg-[#f4fbfa] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p
                className="text-4xl text-[#0D9488] md:text-5xl"
                style={{ fontFamily: SCRIPT }}
              >
                A Special Message from Krystalore
              </p>
            </div>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/reclaim/message.jpg"
                  alt="Krystalore Crews"
                  width={2400}
                  height={1800}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-[#0D9488]/15 bg-white shadow-xl">
                <Image
                  src="/images/reclaim/letter.png"
                  alt="Dear Next Level You — a handwritten letter from Krystalore"
                  width={1500}
                  height={3244}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="mt-10 text-center">
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#34c5c5] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
              >
                I&rsquo;m Ready to Rise <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── PHOTOS ── */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { src: '/images/reclaim/krystalore-1.jpg', w: 2400, h: 1800 },
                { src: '/images/reclaim/krystalore-2.jpg', w: 1800, h: 2400 },
              ].map((img) => (
                <div key={img.src} className="overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src={img.src}
                    alt="Krystalore Crews"
                    width={img.w}
                    height={img.h}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="enroll" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-[#0D9488] p-8 shadow-xl ring-1 ring-[#0D9488]/20 md:p-10">
              <div className="text-center">
                <span className="inline-block rounded-full bg-gradient-to-r from-[#0D9488] to-[#34c5c5] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  RISE Reset &middot; Beta
                </span>
                <h2 className="mt-5 text-3xl font-black text-[#0b3b3a] md:text-4xl">RISE Reset</h2>
                <p className="mt-2 text-[#5b7a78]">Six weeks, one-to-one, at the speed of your capacity.</p>
                <p className="my-6 text-6xl font-black text-[#0D9488]">$2,497</p>
              </div>

              <ul className="mx-auto max-w-md space-y-3">
                {INCLUDED.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" />
                    <span className="text-[#3d5a58]">{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#34c5c5] px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
              >
                I&rsquo;m Ready to Rise <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-5 text-center text-sm text-[#6b8583]">
                Not sure yet?{' '}
                <LetterButton
                  label="Read her letter to you"
                  className="font-bold text-[#0D9488] underline underline-offset-4 hover:text-[#0b7c72]"
                />
              </p>
            </div>
          </div>
        </section>

        {/* ── CLOSING ── */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-16 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Sparkles className="mx-auto h-8 w-8 text-white/80" />
            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              There is more capacity within you than this moment may be allowing you to see.
            </h2>
            <p className="mt-5 text-lg text-white/85">Come exactly as you are. We&rsquo;ll begin there.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-gray-100"
              >
                I&rsquo;m Ready to Rise
              </a>
              <Link
                href="/rise-and-thrive"
                className="rounded-2xl border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0D9488]"
              >
                Explore Rise &amp; Thrive
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
