'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { DynamicHero, DynamicText } from '@/components/DynamicDate'

export type ProgramLanderProps = {
  slug: string
  eyebrow: string
  title: string
  accent: string          // colored subhead line
  description: string
  heroSrc: string
  dateEyebrow?: string     // e.g. "Next Cohort"
  date: string            // fallback date (editable via Dynamic Dates)
  benefits: { title: string; body: string }[]
  cta: { text: string; href: string; external?: boolean }
  meta?: string           // small line under CTA (e.g. "4 weeks · 16 lessons")
}

export default function ProgramLander(p: ProgramLanderProps) {
  const CTA = p.cta.external ? (
    <a href={p.cta.href} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
      {p.cta.text} <ArrowRight className="h-4 w-4" />
    </a>
  ) : (
    <Link href={p.cta.href}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
      {p.cta.text} <ArrowRight className="h-4 w-4" />
    </Link>
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">{p.eyebrow}</span>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">{p.title}</h1>
                <p className="mt-4 text-xl font-bold text-[#e07800]">{p.accent}</p>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">{p.description}</p>
                <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">{p.dateEyebrow || 'Next Cohort'}</p>
                  <p className="mt-1 text-xl font-black text-gray-900"><DynamicText slug={p.slug} field="date" fallback={p.date} /></p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {CTA}
                  {p.meta && <span className="text-sm font-medium text-gray-400">{p.meta}</span>}
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <DynamicHero slug={p.slug} fallbackSrc={p.heroSrc} alt={p.title} className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-black text-gray-900 md:text-4xl">What you get</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {p.benefits.map((b) => (
                <div key={b.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#34c5c5]/12"><Check className="h-5 w-5 text-[#0D9488]" /></div>
                  <h3 className="mt-5 text-lg font-black text-gray-900">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#E8A849] to-[#e07800] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Ready to begin?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/90">{p.accent}</p>
            <div className="mt-8 flex justify-center">
              {p.cta.external ? (
                <a href={p.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#e07800] transition hover:bg-white/90">{p.cta.text} <ArrowRight className="h-4 w-4" /></a>
              ) : (
                <Link href={p.cta.href} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#e07800] transition hover:bg-white/90">{p.cta.text} <ArrowRight className="h-4 w-4" /></Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
