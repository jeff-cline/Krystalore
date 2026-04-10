'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ShoppingBag, BookOpen, GraduationCap, Mail, ArrowRight } from 'lucide-react'

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Shop</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image src="/images/go9/group-evening.webp" alt="Krystalore Crews shop lifestyle and fashion" fill className="object-cover object-top" sizes="100vw" />
        </div>

        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 lg:py-28">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingBag className="w-12 h-12 mx-auto mb-6 text-[#E8A849]" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Shop</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Books, courses, merch, and resources to fuel your beyond-limits journey.
            </p>
          </div>
        </section>

        {/* Coming Soon + Available Now */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Shop Coming Soon</h2>
              <p className="text-lg text-gray-600">Merch, gear, and more are on the way. In the meantime, explore what&apos;s available now.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <Link href="/books" className="group block bg-gradient-to-br from-[#E8A849]/5 to-[#E8A849]/10 border border-[#E8A849]/20 rounded-2xl p-8 hover:shadow-lg transition-all">
                <BookOpen className="w-12 h-12 text-[#E8A849] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Books</h3>
                <p className="text-gray-600 mb-4">Road to Resilience, Leave No MilSpouse Behind, Krystal Clear Life Planner, and more.</p>
                <span className="text-[#E8A849] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Browse Books <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link href="/courses" className="group block bg-gradient-to-br from-[#34c5c5]/5 to-[#34c5c5]/10 border border-[#34c5c5]/20 rounded-2xl p-8 hover:shadow-lg transition-all">
                <GraduationCap className="w-12 h-12 text-[#34c5c5] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Courses & Programs</h3>
                <p className="text-gray-600 mb-4">Self-paced courses on breathwork, relationships, leadership, and personal development.</p>
                <span className="text-[#34c5c5] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Browse Courses <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Merch interest */}
            <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
              <Mail className="w-10 h-10 text-[#34c5c5] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in Beyond Limits Merch?</h3>
              <p className="text-gray-600 mb-6">Be the first to know when our merchandise line drops.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#34c5c5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#37a6a6] transition-colors">
                Get Notified <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
