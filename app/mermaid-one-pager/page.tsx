import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { FileDown, ArrowRight } from 'lucide-react'

// A .pdf URL has no HTML head, so social platforms can't show a preview for it.
// This page is the shareable wrapper: it carries the card, then hands off to the file.
const OG_IMAGE = 'https://krystalore.com/og/mermaids.jpg'
const PDF = '/mermaid-experiences.pdf'

export const metadata: Metadata = {
  title: 'Mermaid Experiences — the one-page menu | Krystalore Crews',
  description:
    'The printable one-page menu of every mermaid and tropical experience hosted by Krystalore Crews — photo shoots, makeup, training, parties, and more.',
  openGraph: {
    title: 'Super Hostess',
    description: 'Mermaid photo shoots, makeup, training, and parties — turn-key tropical experiences hosted by Krystalore Crews.',
    type: 'website',
    url: 'https://krystalore.com/mermaid-one-pager',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Krystalore Crews as a mermaid on the beach' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Hostess',
    description: 'Mermaid photo shoots, makeup, training, and parties — turn-key tropical experiences hosted by Krystalore Crews.',
    images: [OG_IMAGE],
  },
}

export default function MermaidOnePagerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#0b4f5c] via-[#0d6674] to-[#f2fbfa]">
        <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="text-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ff5ef]">The one-pager</p>
                <h1 className="mt-3 text-4xl font-black leading-[1.05] md:text-5xl">Mermaid Experiences</h1>
                <p className="mt-5 text-lg leading-relaxed text-white/85">
                  Every mermaid and tropical experience on one printable page — photo shoots, makeup, training,
                  and parties, plus everything Krystalore hosts on land. Built for a welcome binder, a front
                  desk, or a listing.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6f61] to-[#e0523f] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
                  >
                    Download the PDF <FileDown className="h-4 w-4" />
                  </a>
                  <Link
                    href="/mermaids"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0b4f5c]"
                  >
                    Book an experience <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <a href={PDF} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[8.5/11] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/20 transition group-hover:-translate-y-1 group-hover:shadow-[0_25px_60px_rgba(0,0,0,.35)]">
                  <Image
                    src="/images/mermaids/one-pager-preview.jpg"
                    alt="Preview of the Mermaid Experiences one-page menu"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
