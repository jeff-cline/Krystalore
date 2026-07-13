'use client'

import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { Sparkles, Check, Waves, Utensils, Dumbbell, Sun, Users, Bus } from 'lucide-react'

const INCLUDED = [
  { icon: Sparkles, text: '7 days of guided coaching sessions for reflection, relaxation, and revival' },
  { icon: Bus, text: 'Transportation to and from the private villa and offsite planned events' },
  { icon: Users, text: 'Luxury bedrooms — double occupancy' },
  { icon: Utensils, text: 'Private chef preparing healthy meals' },
  { icon: Waves, text: 'Infinity pool with breathtaking views' },
  { icon: Sun, text: 'Group yoga sessions' },
  { icon: Dumbbell, text: 'Group workout sessions' },
  { icon: Sparkles, text: 'Tropical adventure to the luxurious hot springs' },
]

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="h-3.5 w-3.5" /> Revive &amp; Thrive Retreats
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                  Apply for My Next Retreat
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                  Your adventure awaits. Join me in majestic Costa Rica or Puerto Rico for 7 days of
                  rejuvenation and revival as we explore our inner strength, courage, and confidence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Surrounded by lush tropical rainforest with breathtaking mountain views, our private villa
                  is the perfect place to relax, reflect, and renew your spirit — with daily guided sessions,
                  movement, and a circle of powerful women on the same journey.
                </p>
                <a
                  href="#waitlist-form"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  Join the Wait List
                </a>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/retreat-destinations/cr-01.jpg"
                  alt="Costa Rica revival retreat villa with tropical mountain views"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Experience */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">What You Will Experience</p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Everything included in your revival</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {INCLUDED.map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-4 bg-[#F4F1EC] rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#0D9488]" />
                  </div>
                  <p className="text-gray-700 font-medium self-center">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto text-center mt-8">
              <strong className="text-gray-700">Not included:</strong> Air travel, mandatory travel insurance,
              souvenir shopping, gratuity, premium alcohol, and optional activities.
            </p>
          </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist-form" className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-3">Join the Wait List</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Request your spot and be the first to know about open rooms, future dates, and checkout windows.
                Fill out the form below and we&apos;ll be in touch.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2 sm:p-4">
              <iframe
                src="https://link.elite360.io/widget/form/C1icBE1TibNUBlqDKpUl"
                style={{ width: '100%', minHeight: '987px', border: 'none', borderRadius: '4px' }}
                id="inline-C1icBE1TibNUBlqDKpUl"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="retreat request/waitlist "
                data-height="987"
                data-layout-iframe-id="inline-C1icBE1TibNUBlqDKpUl"
                data-form-id="C1icBE1TibNUBlqDKpUl"
                title="retreat request/waitlist"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
