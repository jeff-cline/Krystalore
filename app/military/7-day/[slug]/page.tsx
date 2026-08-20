import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, Target, FileDown } from 'lucide-react'
import Image from 'next/image'
import { DAYS, DAY_RATE, DURATION, GROUP_RANGE, PRICING_NOTE } from '../../program-data'

export function generateStaticParams() {
  return DAYS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = DAYS.find((x) => x.slug === slug)
  if (!d) return {}
  return {
    title: `${d.title} — Mission-Ready Leadership Day ${d.day} | Krystalore Crews`,
    description: d.summary,
    alternates: { canonical: `/military/7-day/${d.slug}` },
    openGraph: {
      title: `${d.title} — ${d.tagline}`,
      description: d.summary,
      url: `https://krystalore.com/military/7-day/${d.slug}`,
      type: 'website',
    },
  }
}

const EYEBROW = 'text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-3'

export default async function DayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = DAYS.find((x) => x.slug === slug)
  if (!d) notFound()

  const idx = DAYS.findIndex((x) => x.slug === slug)
  const prev = DAYS[idx - 1]
  const next = DAYS[idx + 1]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/military/7-day" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] hover:underline">
              <ArrowLeft className="h-4 w-4" /> All seven days
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
             <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0D9488] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Day {d.day} of 7 · Bookable on its own
            </div>
            <h1 className="mb-4 text-4xl font-black leading-[1.03] text-gray-900 md:text-5xl">{d.title}</h1>
            <p className="mb-5 text-xl font-bold text-[#e07800] md:text-2xl">{d.tagline}</p>
            <p className="text-lg leading-relaxed text-gray-700">{d.summary}</p>
             </div>
             {/* 4:3 frame on a 4:3 source, so nothing in the photo gets cropped */}
             <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
               <Image src={d.image} alt={`${d.title} — Mission-Ready Leadership`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
             </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: 'Duration', value: DURATION },
                { icon: Users, label: 'Group size', value: GROUP_RANGE },
                { icon: Target, label: 'Investment', value: `$${DAY_RATE.toLocaleString()}*` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <Icon className="h-5 w-5 text-[#0D9488]" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">{label}</p>
                  <p className="mt-1 font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">* {PRICING_NOTE}</p>
          </div>
        </section>

        {/* STANDALONE NOTE */}
        <section className="border-y border-gray-100 bg-[#F4F1EC] py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 rounded-3xl border-l-4 border-[#0D9488] bg-white p-6 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Booked on its own</p>
                <p className="mt-2 leading-relaxed text-gray-700">{d.standalone}</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>Who this day is for</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {d.forWho.map((w) => (
                <div key={w} className="rounded-2xl bg-[#F6F8FA] p-5 text-sm leading-relaxed text-gray-700">{w}</div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="bg-[#F6F8FA] py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>The day, module by module</p>
            <h2 className="mb-8 text-3xl font-black text-gray-900 md:text-4xl">What we actually do</h2>
            <div className="space-y-4">
              {d.modules.map((m, i) => (
                <div key={m.title} className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 md:p-7">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#34c5c5]/15 text-sm font-black text-[#0D9488]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>What they leave with</p>
            <h2 className="mb-8 text-3xl font-black text-gray-900 md:text-4xl">Takeaways</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {d.takeaways.map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-2xl border border-gray-200 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" />
                  <span className="leading-relaxed text-gray-700">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-14 text-white md:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black md:text-3xl">Book Day {d.day} — {d.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              ${DAY_RATE.toLocaleString()}* · {DURATION} · {GROUP_RANGE}. Book this day alone, or as part of the full system.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/military#request" className="rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-gray-100">
                Request This Day
              </Link>
              <a
                href="/military/mission-ready-7-day-program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0D9488]"
              >
                Curriculum PDF <FileDown className="h-4 w-4" />
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-white/70">* {PRICING_NOTE}</p>
          </div>
        </section>

        {/* PREV / NEXT */}
        <section className="py-12">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
            {prev ? (
              <Link href={`/military/7-day/${prev.slug}`} className="flex-1 rounded-2xl border border-gray-200 p-5 transition hover:border-[#34c5c5]">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">← Day {prev.day}</p>
                <p className="mt-1 font-black text-gray-900">{prev.title}</p>
              </Link>
            ) : <div className="flex-1" />}
            {next ? (
              <Link href={`/military/7-day/${next.slug}`} className="flex-1 rounded-2xl border border-gray-200 p-5 text-right transition hover:border-[#34c5c5]">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Day {next.day} →</p>
                <p className="mt-1 font-black text-gray-900">{next.title}</p>
              </Link>
            ) : (
              <Link href="/military/express" className="flex-1 rounded-2xl border border-gray-200 p-5 text-right transition hover:border-[#34c5c5]">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Next →</p>
                <p className="mt-1 font-black text-gray-900">Express options <ArrowRight className="inline h-4 w-4" /></p>
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
