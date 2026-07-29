import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, FileText } from 'lucide-react'
import MarketingKit from '../MarketingKit'

export const metadata: Metadata = {
  title: 'Mission-Ready Leadership — Marketing Kit | Krystalore Crews',
  description: 'Download print-ready Mission-Ready Leadership flyers (8.5×11) and postcards (4×5) — multiple designs, bleed + crop marks, QR to krystalore.com/military.',
  alternates: { canonical: '/military/flyer' },
  robots: { index: false, follow: true },
}

export default function FlyerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <Link href="/military" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Mission-Ready Leadership
          </Link>

          <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" /> Print-Ready Marketing Kit
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-[1.05]">
            Mission-Ready Leadership <span className="text-[#e07800]">Marketing Kit</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-4">
            Pick the look you like — every file is print-ready with a 0.125″ bleed and crop marks, and a QR code that
            sends people to <span className="font-semibold">krystalore.com/military</span>.
          </p>
          <p className="text-sm text-gray-500 mb-10">
            Jump to <a href="#flyers" className="text-[#0D9488] font-bold hover:underline">Flyers (8.5×11)</a> ·{' '}
            <a href="#postcards" className="text-[#0D9488] font-bold hover:underline">Postcards (4×5)</a>
          </p>

          <MarketingKit primary="flyer" />
        </section>
      </main>
      <Footer />
    </>
  )
}
