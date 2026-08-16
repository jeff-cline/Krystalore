import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Shell, ArrowRight, Waves, Sparkles, FileDown } from 'lucide-react'
import MermaidExperiences from './MermaidExperiences'

const OG_IMAGE = 'https://krystalore.com/og/mermaids.jpg'

export const metadata: Metadata = {
  title: 'Mermaid Experiences — Tropical Concierge Hosting by Krystalore Crews',
  description:
    'Mermaid photo shoots, makeup, training, and parties — plus beach picnics, adventure tours, healing sessions, team workshops, and bridal experiences. Turn-key tropical experiences hosted by Krystalore Crews.',
  // Shares of /mermaids carry the mermaid photo and read "Super Hostess".
  openGraph: {
    title: 'Super Hostess',
    description: 'Mermaid photo shoots, makeup, training, and parties — turn-key tropical experiences hosted by Krystalore Crews.',
    type: 'website',
    url: 'https://krystalore.com/mermaids',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Krystalore Crews as a mermaid on the beach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Hostess',
    description: 'Mermaid photo shoots, makeup, training, and parties — turn-key tropical experiences hosted by Krystalore Crews.',
    images: [OG_IMAGE],
  },
}

export default function MermaidsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b4f5c] via-[#0d6674] to-[#17b3ad] pt-12 pb-14 text-white md:pt-16 md:pb-20">
          {/* soft caustic glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(60% 45% at 18% 12%, rgba(46,197,197,.55) 0%, rgba(46,197,197,0) 62%), radial-gradient(48% 40% at 88% 78%, rgba(255,111,97,.35) 0%, rgba(255,111,97,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                  <Shell className="h-3.5 w-3.5" /> Tropical Concierge Experiences
                </span>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
                  Mermaid
                  <span className="block bg-gradient-to-r from-[#8ff5ef] via-[#b9fbf6] to-[#ffd9c9] bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-white/85">
                  Tails, crowns, and turquoise water. Add Krystalore Crews to your beach resort, villa, or
                  island stay as the hostess who turns a good trip into the one everybody talks about — mermaid
                  shoots and training, plus every experience she hosts on land.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#mermaid"
                    className="rounded-full bg-gradient-to-r from-[#ff6f61] to-[#e0523f] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
                  >
                    See the Mermaid Menu
                  </Link>
                  <Link
                    href="#signature"
                    className="rounded-full border-2 border-white/70 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0b4f5c]"
                  >
                    Everything Else
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/mermaids/mermaid-hero-portrait.jpg"
                  alt="Krystalore Crews as a mermaid on the beach"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          {/* wave divider into the white page */}
          <svg className="absolute inset-x-0 bottom-0 h-12 w-full text-white md:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0 44c120 22 240 30 360 22s240-30 360-30 240 22 360 30 240 0 360-22v36H0z" />
          </svg>
        </section>

        {/* POSITIONING STRIP */}
        <section className="border-b border-[#17b3ad]/15 bg-[#f2fbfa] py-8">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-[#17b3ad]">
              Book by the experience · Any beach, resort, or villa
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-gray-600">
              Every experience below is available à la carte. Resorts and hosts use them to elevate a stay;
              guests book the moments they want. One hostess, endless upgrades.
            </p>
          </div>
        </section>

        {/* MEET YOUR HOSTESS */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/corporate-retreat/krystal-crews-185.jpg" alt="Krystalore Crews" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#17b3ad]">Meet Your Hostess</p>
                <h2 className="mt-2 text-3xl font-black text-[#0b4f5c] md:text-4xl">Krystalore Crews</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  A 22-year U.S. Air Force veteran, certified coach, keynote speaker, and 28-time marathoner,
                  Krystalore has trained more than 200,000 people and hosted experiences around the world. In
                  the water she is a certified coach and a mermaid; on the sand she is the hostess who reads the
                  room and keeps the energy exactly where it should be.
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  She brings military-grade precision and genuine warmth to every moment, so your guests feel
                  completely taken care of — and you get to enjoy your own event.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['22-Yr Air Force Veteran', 'Certified Coach', 'Keynote Speaker', '28× Marathoner', 'Somatic & Trauma-Informed'].map((c) => (
                    <span key={c} className="rounded-full bg-[#17b3ad]/10 px-4 py-2 text-sm font-medium text-[#0b8f95]">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCES (client — cards + booking modal) */}
        <MermaidExperiences />

        {/* WHY IT LANDS */}
        <section className="bg-[#0b4f5c] py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff9d92]">Why hosts book it</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">The thing guests actually remember</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Waves, title: 'Turn-key', body: 'Tails, crowns, glam, props, and direction all arrive with her. You provide the beach; she provides everything else.' },
                { icon: Sparkles, title: 'Content that travels', body: 'Guests leave with photos worth posting — which is how the next booking finds you.' },
                { icon: Shell, title: 'All ages, all levels', body: 'Shallow water, certified instruction, and a pace that adapts. Nobody gets left on the sand.' },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                  <Icon className="h-8 w-8 text-[#8ff5ef]" />
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-2 text-white/70">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/super-hostess" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8ff5ef] hover:text-white">
                See the full Super Hostess menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PDF ONE-PAGER */}
        <section className="bg-[#f4ece2] py-14 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0b8f95]">Share It</p>
            <h2 className="mt-2 text-3xl font-black text-[#0b4f5c]">The mermaid menu — one-pager</h2>
            <p className="mt-3 text-gray-600">
              A printable overview of every experience, with a QR code back to this page. Perfect for a welcome
              binder, front desk, or listing.
            </p>
            <a
              href="/mermaid-experiences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6f61] to-[#e0523f] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
            >
              Download the PDF <FileDown className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
