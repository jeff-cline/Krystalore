import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { COLLECTIONS, TOTAL } from './gallery-data'

export const metadata: Metadata = {
  title: 'Gallery | Krystalore',
  description: 'Browse the Krystalore photo gallery by collection \u2014 coaching, retreats, events, fitness, and the moments in between.',
}

export default function GalleryIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
              The Gallery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
              Moments from the <span className="text-[#e07800]">Krystalore</span> World
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {COLLECTIONS.length} collections · {TOTAL} photos. Tap any collection to open it.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/gallery/${c.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:ring-[#E8A849]/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F6F8FA]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/gallery/${c.cover}`}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <h3 className="font-black text-gray-900 text-[15px] leading-tight group-hover:text-[#e07800] transition-colors">
                    {c.title}
                  </h3>
                  <span className="shrink-0 text-[11px] font-bold text-white bg-[#34c5c5] rounded-full px-2.5 py-1">
                    {c.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
