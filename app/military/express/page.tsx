import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, Zap, FileDown } from 'lucide-react'
import { EXPRESS, DAYS, DURATION, GROUP_RANGE } from '../program-data'

export const metadata: Metadata = {
  title: 'Express Leadership Workshops — One-Day & One-Hour | Krystalore Crews',
  description:
    'Two express introductions to the seven-day Mission-Ready Leadership system: a customizable full-day workshop, and the one-hour Resilient Relationships course on emotional intelligence, communication and resilience.',
  alternates: { canonical: '/military/express' },
}

const EYEBROW = 'text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-3'

// Each express package now has its own page; this stays as the hub between them.
const LINKS: Record<string, string> = {
  'full-day': '/military/one-day',
  'resilient-relationships': '/military/one-hour',
}

export default function ExpressPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#E8A849]/15 via-[#F6F8FA] to-white pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/military" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Mission-Ready Leadership
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8A849]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#b45309]">
                  <Zap className="h-3.5 w-3.5" /> Express · Intro to the seven-day system
                </div>
                <h1 className="mb-5 text-4xl font-black leading-[1.03] text-gray-900 md:text-5xl">
                  Start in a <span className="text-[#e07800]">single session</span>.
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Two ways into the Mission-Ready system without committing to all seven days. Both stand entirely on
                  their own — and both are built so your unit can see, in one sitting, exactly what the full program
                  would do.
                </p>
                <div className="mt-7">
                  <a href="/military/mission-ready-express.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                    Download the Express PDF <FileDown className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/images/military/classroom-white-jacket.jpg" alt="Krystalore Crews teaching a leadership session to a military audience" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* THE TWO PACKAGES */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>Two express packages</p>
            <h2 className="mb-10 text-3xl font-black text-gray-900 md:text-4xl">Pick your entry point</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {EXPRESS.map((p) => (
                <div key={p.slug} id={p.slug} className="flex flex-col overflow-hidden rounded-3xl border-2 border-[#E8A849]/40 bg-white shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="mb-4 inline-block self-start rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      {p.badge}
                    </span>
                    <h3 className="text-2xl font-black leading-tight text-gray-900">{p.title}</h3>
                    <p className="mt-3 font-semibold text-[#e07800]">{p.subtitle}</p>

                    <div className="my-5 flex flex-wrap gap-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-gray-700">
                        <Clock className="h-4 w-4 text-[#0D9488]" /> {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-700">
                        <Users className="h-4 w-4 text-[#0D9488]" /> {p.group}
                      </span>
                    </div>

                    <p className="leading-relaxed text-gray-700">{p.summary}</p>

                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">Covers</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.covers.map((c) => (
                        <span key={c} className="rounded-full bg-[#34c5c5]/12 px-3 py-1.5 text-sm font-medium text-[#0D9488]">{c}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex-1 space-y-3">
                      {p.modules.map((m) => (
                        <div key={m.title} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" />
                          <div>
                            <p className="font-bold text-gray-900">{m.title}</p>
                            <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{m.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border-l-4 border-[#0D9488] bg-[#F6F8FA] p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Takeaway</p>
                      <p className="mt-2 leading-relaxed text-gray-700">{p.takeaway}</p>
                    </div>

                    <Link
                      href={LINKS[p.slug]}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105"
                    >
                      See the full details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHERE IT LEADS */}
        <section className="bg-[#F6F8FA] py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>Where it leads</p>
            <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-4xl">The full seven-day system</h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-gray-700">
              Express sessions are the introduction. The complete program runs seven standalone days —
              {' '}{DURATION}, {GROUP_RANGE} — book one, book several, or run the whole system.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DAYS.map((d) => (
                <Link key={d.slug} href={`/military/7-day/${d.slug}`} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#34c5c5] hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={d.image} alt={d.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Day {d.day}</p>
                    <h3 className="mt-1 font-black leading-tight text-gray-900">{d.title}</h3>
                  </div>
                </Link>
              ))}
              <Link href="/military/7-day" className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-[#0D9488] p-6 text-center text-white transition hover:bg-[#0b7c72]">
                <span className="font-black">Full curriculum</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
