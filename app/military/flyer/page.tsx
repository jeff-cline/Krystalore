import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { Download, ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mission-Ready Leadership — Marketing Flyer (8.5×11) | Krystalore Crews',
  description: 'Download the 8.5×11 Mission-Ready Leadership one-page flyer. QR links to krystalore.com/military.',
  alternates: { canonical: '/military/flyer' },
  robots: { index: false, follow: true },
}

const PDF = '/military/mission-ready-flyer-8.5x11.pdf'

export default function FlyerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <Link href="/military" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Mission-Ready Leadership
          </Link>

          <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" /> One-Page Flyer · 8.5×11 · Front only
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-[1.05]">
            Mission-Ready Leadership <span className="text-[#e07800]">Flyer</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            A full 8.5×11 one-pager — headline, the challenges checklist, Krystalore&rsquo;s bio, the full-day workshop offer,
            and a QR code to <span className="font-semibold">krystalore.com/military</span>. Print it, post it, email it.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={PDF}
              download
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <Download className="w-5 h-5" /> Download PDF (8.5×11)
            </a>
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-4 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors"
            >
              Open in new tab
            </a>
            <Link
              href="/military/postcard"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-7 py-4 rounded-xl hover:border-[#E8A849] transition-colors"
            >
              Need the 4×5 postcard? →
            </Link>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <iframe src={`${PDF}#view=FitH`} title="Mission-Ready Leadership flyer" className="w-full" style={{ height: '85vh', border: 'none' }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
