import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, ArrowRight, Rocket, TrendingUp, FileDown } from 'lucide-react'
import SuperHostessExperiences from './SuperHostessExperiences'

export const metadata: Metadata = {
  title: 'The Super Hostess — Concierge Experiences by Krystalore Crews',
  description: 'Turn-key concierge experiences for any retreat center, hotel, villa, or Airbnb — beach picnics, adventure tours, fitness, healing sessions, team workshops, and bridal experiences, hosted by Krystalore Crews.',
  openGraph: {
    title: 'The Super Hostess — Concierge Experiences by Krystalore Crews',
    description: 'Upgrade any stay with turn-key experiences hosted by Krystalore Crews.',
    images: [{ url: 'https://krystalore.com/images/corporate-retreat/img-retreat-portrait.jpg' }],
  },
}

export default function SuperHostessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 pb-14 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                  <Sparkles className="h-3.5 w-3.5" /> Concierge Experiences
                </span>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">
                  The Super Hostess
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Turn-key experiences that upgrade any stay. Add Krystalore Crews to your retreat center,
                  hotel, villa, or Airbnb as the host who makes your guests feel unforgettable — from beach
                  picnics and adventure tours to healing sessions, team workshops, and bridal celebrations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#signature" className="rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">Explore Experiences</Link>
                  <Link href="#teams" className="rounded-full border-2 border-[#0D9488] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-[#0D9488] hover:text-white">For Teams</Link>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/images/corporate-retreat/img-retreat-portrait.jpg" alt="Krystalore Crews — your super hostess" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING STRIP */}
        <section className="border-y border-gray-100 bg-[#F6F8FA] py-8">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-[#0D9488]">Add on to anything · Book by the experience</p>
            <p className="mx-auto mt-2 max-w-3xl text-gray-600">
              Every experience below is available à la carte. Retreat centers, hotels, and hosts use them to elevate a stay;
              guests book the moments they want. One host, endless upgrades.
            </p>
          </div>
        </section>

        {/* MEET YOUR HOST */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/corporate-retreat/krystal-crews-185.jpg" alt="Krystalore Crews" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">Meet Your Host</p>
                <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Krystalore Crews</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  A 22-year U.S. Air Force veteran, certified coach, keynote speaker, and 28-time marathoner,
                  Krystalore has trained more than 200,000 people and hosted experiences around the world. She
                  brings military-grade precision and genuine warmth to every moment — reading the room, holding
                  the energy, and making sure your guests feel completely taken care of.
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  As your super hostess, she doesn&apos;t just run the schedule. She makes people feel something
                  they remember long after they check out.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['22-Yr Air Force Veteran', 'Certified Coach', 'Keynote Speaker', '28× Marathoner', 'Somatic & Trauma-Informed'].map((c) => (
                    <span key={c} className="rounded-full bg-[#34c5c5]/10 px-4 py-2 text-sm font-medium text-[#0D9488]">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCES (client — cards + booking modal) */}
        <SuperHostessExperiences />

        {/* BUSINESS ACCELERATOR + STARTUP */}
        <section className="bg-gray-900 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8A849]">Beyond the Experience</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Ready to build something bigger?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/70">Take the momentum home. Krystalore also builds businesses and launches founders.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/business-bootcamp" className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.08]">
                <TrendingUp className="h-8 w-8 text-[#E8A849]" />
                <h3 className="mt-5 text-2xl font-black">Business Accelerator</h3>
                <p className="mt-2 text-white/70">Scale an existing business with strategy, systems, and accountability from someone who has delivered $4M+ in programs.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#E8A849]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
              <Link href="/business-smart-start" className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.08]">
                <Rocket className="h-8 w-8 text-[#34c5c5]" />
                <h3 className="mt-5 text-2xl font-black">Startup Launch</h3>
                <p className="mt-2 text-white/70">Go from idea to launched — the smart-start path for founders who want a real plan and a real coach.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#34c5c5]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* PDF ONE-PAGER */}
        <section className="bg-[#F4F1EC] py-14 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">Share It</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900">The Super Hostess menu — one-pager</h2>
            <p className="mt-3 text-gray-600">A printable overview of every experience, with a QR code back to this page. Perfect for a welcome binder, front desk, or listing.</p>
            <a href="/super-hostess-experiences.pdf" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
              Download the PDF <FileDown className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
