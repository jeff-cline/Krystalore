import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, FileDown, CheckCircle2, Layers, Clock, Users } from 'lucide-react'
import { DAYS, DAY_RATE, DURATION, GROUP_RANGE } from '../program-data'

export const metadata: Metadata = {
  title: 'The Seven-Day Mission-Ready Leadership System | Krystalore Crews',
  description:
    'Seven standalone leadership days — emotional intelligence, resilience, communication, whole-person leadership, human performance, team development, and leadership psychology. Book one or book the system.',
  alternates: { canonical: '/military/7-day' },
}

const EYEBROW = 'text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-3'

export default function SevenDayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-14 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link href="/military" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Mission-Ready Leadership
            </Link>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              <Layers className="h-3.5 w-3.5" /> Seven standalone days · One complete system
            </div>
            <h1 className="mb-5 text-4xl font-black leading-[1.03] text-gray-900 md:text-5xl lg:text-6xl">
              The Seven-Day <span className="text-[#e07800]">Mission-Ready</span> System
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
              Seven disciplines, seven days. Each one is a complete, self-contained workshop your unit can book on its
              own — and run in sequence they compound into a full leadership development program. Start where the need
              is greatest; there is no prerequisite.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: 'Duration', value: DURATION },
                { icon: Users, label: 'Group size', value: GROUP_RANGE },
                { icon: Layers, label: 'Investment', value: `$${DAY_RATE.toLocaleString()} per day` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <Icon className="h-5 w-5 text-[#0D9488]" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">{label}</p>
                  <p className="mt-1 font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/military/mission-ready-7-day-program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105"
              >
                Download the Curriculum PDF <FileDown className="h-4 w-4" />
              </a>
              <Link
                href="/military/express"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#34c5c5] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-[#34c5c5] hover:text-white"
              >
                Start with an Express day <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-y border-gray-100 bg-[#F4F1EC] py-12">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className={EYEBROW}>How it works</p>
            <h2 className="text-2xl font-black text-gray-900 md:text-3xl">Standalone by design. Cumulative by choice.</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-700">
              Every day stands on its own — a unit can book Day 6 without ever having seen Day 1 and get a complete
              workshop. Run in order, each day quietly assumes the vocabulary of the one before it without depending on
              it, so the whole becomes considerably more than the sum. Most units start with one, then book the rest.
            </p>
          </div>
        </section>

        {/* THE SEVEN DAYS */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>The curriculum</p>
            <h2 className="mb-10 text-3xl font-black text-gray-900 md:text-4xl">Seven days, seven disciplines</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {DAYS.map((d) => (
                <Link
                  key={d.slug}
                  href={`/military/7-day/${d.slug}`}
                  id={d.slug}
                  className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#34c5c5] hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0D9488] text-sm font-black text-white">
                      {d.day}
                    </span>
                    <h3 className="text-xl font-black leading-tight text-gray-900">{d.title}</h3>
                  </div>
                  <p className="mt-3 font-semibold text-[#e07800]">{d.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{d.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {d.modules.slice(0, 3).map((m) => (
                      <li key={m.title} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#34c5c5]" />
                        {m.title}
                      </li>
                    ))}
                    <li className="pl-6 text-sm italic text-gray-400">+ {d.modules.length - 3} more modules</li>
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition-all group-hover:gap-3">
                    See the full day <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-16 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Book a day. Or book the system.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Every day is ${DAY_RATE.toLocaleString()}, {DURATION}, {GROUP_RANGE}. Tell me where your unit is
              struggling and I will tell you which day to start with — even if that is only one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/military#request" className="rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-gray-100">
                Request This Program
              </Link>
              <Link href="/military/express" className="rounded-xl border-2 border-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0D9488]">
                See the Express options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
