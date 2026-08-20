import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, Layers, Target, FileDown } from 'lucide-react'
import { EXPRESS, DAYS, DURATION, GROUP_RANGE } from '../program-data'

const P = EXPRESS.find((e) => e.slug === 'full-day')!

export const metadata: Metadata = {
  title: 'Full-Day Mission-Ready Leadership Workshop | Krystalore Crews',
  description:
    'A single immersive day built from the seven-day Mission-Ready curriculum and scoped to your unit — emotional intelligence, resilience, communication, whole-person leadership, human performance, team development, and leadership psychology.',
  alternates: { canonical: '/military/one-day' },
  openGraph: {
    title: 'Full-Day Mission-Ready Leadership Workshop',
    description: 'Pick your topics. One day. Immediately applicable.',
    url: 'https://krystalore.com/military/one-day',
    type: 'website',
  },
}

const EYEBROW = 'text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-3'

export default function OneDayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO — half panel, 4:3 frame on a 4:3 source so nothing is cropped */}
        <section className="bg-gradient-to-b from-[#34c5c5]/12 via-[#F6F8FA] to-white pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/military" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Mission-Ready Leadership
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8A849]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#b45309]">
                  <Layers className="h-3.5 w-3.5" /> One Day · Intro to the seven-day system
                </div>
                <h1 className="mb-4 text-4xl font-black leading-[1.03] text-gray-900 md:text-5xl">
                  Full-Day <span className="text-[#e07800]">Mission-Ready</span> Leadership Workshop
                </h1>
                <p className="mb-5 text-xl font-bold text-[#e07800]">{P.subtitle}</p>
                <p className="text-lg leading-relaxed text-gray-700">{P.summary}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/military#request" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                    Request This Workshop <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="/military/mission-ready-express.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#34c5c5] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-[#34c5c5] hover:text-white">
                    Download the PDF <FileDown className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image src={P.image} alt="Krystalore Crews delivering leadership training to a military audience" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: 'Duration', value: DURATION },
                { icon: Users, label: 'Group size', value: GROUP_RANGE },
                { icon: Target, label: 'Format', value: 'Interactive — never a slide deck' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <Icon className="h-5 w-5 text-[#0D9488]" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">{label}</p>
                  <p className="mt-1 font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT'S BUILT */}
        <section className="bg-[#F6F8FA] py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>How the day is built</p>
            <h2 className="mb-8 text-3xl font-black text-gray-900 md:text-4xl">Assembled after a scoping call — never off a shelf</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {P.modules.map((m, i) => (
                <div key={m.title} className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-6">
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

        {/* CHOOSE YOUR TOPICS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>Choose your topics</p>
            <h2 className="mb-3 text-3xl font-black text-gray-900 md:text-4xl">Seven disciplines to build the day from</h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-gray-700">
              Pick the ones your unit needs. Each is also a full standalone day in the complete system — so the
              workshop doubles as a way to find out which day to book next.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DAYS.map((d) => (
                <Link key={d.slug} href={`/military/7-day/${d.slug}`} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#34c5c5] hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={d.image} alt={d.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black leading-tight text-gray-900">{d.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-[#e07800]">{d.tagline}</p>
                  </div>
                </Link>
              ))}
              <Link href="/military/7-day" className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-[#0D9488] p-6 text-center text-white transition hover:bg-[#0b7c72]">
                <span className="text-lg font-black">See the full curriculum</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* TAKEAWAY */}
        <section className="bg-[#F4F1EC] py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border-l-4 border-[#0D9488] bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Takeaway</p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">{P.takeaway}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">Bring it to your unit.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              {DURATION} · {GROUP_RANGE}. Tell me what your unit is working through and I will scope the day around it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/military#request" className="rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-gray-100">
                Request This Workshop
              </Link>
              <Link href="/military/one-hour" className="rounded-xl border-2 border-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0D9488]">
                See the one-hour option
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
