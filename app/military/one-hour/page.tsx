import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, Zap, Target, FileDown } from 'lucide-react'
import { EXPRESS, DAYS, GROUP_RANGE } from '../program-data'

const P = EXPRESS.find((e) => e.slug === 'resilient-relationships')!

export const metadata: Metadata = {
  title: 'Resilient Relationships: Communicate, Connect and Thrive — One-Hour Workshop | Krystalore Crews',
  description:
    'A one-hour course on how emotional intelligence and healthy communication strengthen relationships during pressure, conflict, and change — triggers, active listening, boundaries, and constructive conversations.',
  alternates: { canonical: '/military/one-hour' },
  openGraph: {
    title: 'Resilient Relationships: Communicate, Connect and Thrive',
    description: 'One hour. The four skills that hold relationships together under pressure.',
    url: 'https://krystalore.com/military/one-hour',
    type: 'website',
  },
}

const EYEBROW = 'text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-3'

// The four skills, expanded from the course description into what each hour actually delivers.
const OUTCOMES = [
  'Recognise your own triggers before they cost you the conversation',
  'Listen so the other person tells you the real problem, not the safe one',
  'Hold a boundary clearly without turning it into a confrontation',
  'Raise something hard while keeping the relationship intact',
]

export default function OneHourPage() {
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
                  <Zap className="h-3.5 w-3.5" /> One Hour · Intro to the seven-day system
                </div>
                <h1 className="mb-4 text-4xl font-black leading-[1.05] text-gray-900 md:text-[2.9rem]">
                  Resilient Relationships: <span className="text-[#e07800]">Communicate, Connect and Thrive</span>
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
                <Image src={P.image} alt="Krystalore Crews teaching a leadership session to a military audience" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: 'Duration', value: '1 hour' },
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

        {/* WHY AN HOUR WORKS */}
        <section className="border-y border-gray-100 bg-[#F4F1EC] py-12">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className={EYEBROW}>Why an hour works</p>
            <h2 className="text-2xl font-black text-gray-900 md:text-3xl">The shortest way to prove the point</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-gray-700">
              An hour fits a commander&apos;s call, a professional development slot, or a lunch block — no schedule to
              rebuild, no training day to surrender. It is long enough for people to practise something real and leave
              with a tool, and short enough that nobody has to be talked into it.
            </p>
          </div>
        </section>

        {/* THE FOUR SKILLS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>What we cover</p>
            <h2 className="mb-8 text-3xl font-black text-gray-900 md:text-4xl">Four skills, one hour</h2>
            <div className="space-y-4">
              {P.modules.map((m, i) => (
                <div key={m.title} className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 md:p-7">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#34c5c5]/15 text-sm font-black text-[#0D9488]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="bg-[#F6F8FA] py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>What they walk out able to do</p>
            <h2 className="mb-8 text-3xl font-black text-gray-900 md:text-4xl">Outcomes</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {OUTCOMES.map((o) => (
                <div key={o} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#34c5c5]" />
                  <span className="leading-relaxed text-gray-700">{o}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border-l-4 border-[#0D9488] bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Takeaway</p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">{P.takeaway}</p>
            </div>
          </div>
        </section>

        {/* WHERE IT LEADS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>Where it leads</p>
            <h2 className="mb-3 text-3xl font-black text-gray-900 md:text-4xl">The full seven-day system</h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-gray-700">
              This hour draws on the emotional intelligence, communication, and resilience days. Each is a full
              standalone workshop in its own right.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DAYS.filter((d) => ['emotional-intelligence', 'communication', 'resilience'].includes(d.slug)).map((d) => (
                <Link key={d.slug} href={`/military/7-day/${d.slug}`} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#34c5c5] hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={d.image} alt={d.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black leading-tight text-gray-900">Day {d.day} — {d.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-[#e07800]">{d.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/military/7-day" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#34c5c5] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-[#34c5c5] hover:text-white">
                See all seven days <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/military/one-day" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#E8A849] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#b45309] transition hover:bg-[#E8A849] hover:text-white">
                See the full-day option <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">One hour. Book it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              1 hour · {GROUP_RANGE}. Fits a commander&apos;s call or a professional development block.
            </p>
            <div className="mt-8">
              <Link href="/military#request" className="rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-gray-100">
                Request This Workshop
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
