import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { COLLECTIONS } from '../gallery-data'

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = COLLECTIONS.find((x) => x.slug === params.slug)
  if (!c) return { title: 'Gallery | Krystalore' }
  return { title: `${c.title} | Krystalore Gallery`, description: `${c.count} photos from the ${c.title} collection.` }
}

export default function FolderGallery({ params }: { params: { slug: string } }) {
  const c = COLLECTIONS.find((x) => x.slug === params.slug)
  if (!c) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D9488] hover:text-[#e07800] transition-colors mb-5">
              <ArrowLeft className="w-4 h-4" /> All collections
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-3">
              Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.05]">{c.title}</h1>
            <p className="text-gray-500 font-semibold mt-2">{c.count} photos</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {c.images.map((src, j) => (
              <a
                key={src}
                href={`/images/gallery/${src}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 block break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-xl hover:ring-[#E8A849]/40 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${src}`}
                  alt={`${c.title} \u2014 photo ${j + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
