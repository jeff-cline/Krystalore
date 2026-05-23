'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Sparkles,
  Heart,
  Sun,
  CheckCircle,
  Download,
  Calendar,
  Target,
  TrendingUp,
  Printer,
  Smartphone,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

const HABIT_TRACKER_CHECKOUT_URL = 'https://www.krystalorecrews.com/habittracker'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Free 30-Day Habit Tracker',
    description:
      'A printable + digital one-page habit tracker designed to reduce overwhelm and build real momentum in just 5 minutes a day.',
    brand: { '@type': 'Brand', name: 'Krystalore Crews' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://krystalore.com/habittracker',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const benefits = [
  { icon: Sun, title: 'Design Your Dream Day', desc: 'Start each morning with a clear, intentional plan instead of reacting to your inbox.' },
  { icon: Heart, title: 'Reduce Your Overwhelm', desc: 'One page replaces ten apps. Quietly powerful, with no shame spiral if you miss a day.' },
  { icon: Sparkles, title: 'Feel So Accomplished', desc: 'Check the boxes. Watch the streak grow. End the month a different version of you.' },
]

const inside = [
  { icon: Calendar, title: '30-Day Grid', desc: 'A full month of trackable days on a single page. No flipping, no scrolling.' },
  { icon: Target, title: 'Daily Habit Slots', desc: 'Define up to six habits that actually move the needle for your life.' },
  { icon: TrendingUp, title: 'Streak Tracking', desc: 'See your consistency build in real time. Momentum makes the next day easier.' },
  { icon: Printer, title: 'Print-Ready PDF', desc: 'Designed for paper. Stick it on the fridge, your desk, your closet door.' },
  { icon: Smartphone, title: 'Digital Friendly', desc: 'Open it on your iPad or tablet and tap-to-check. Works either way.' },
  { icon: ShieldCheck, title: 'Zero Shame Design', desc: 'Built for humans who burned out on perfection. Miss a day. Start again. No drama.' },
]

export default function HabitTrackerPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero — light, split layout */}
      <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Download className="w-3.5 h-3.5" /> Free Download · Instant Access
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                Free 30-Day <span className="text-[#e07800]">Habit Tracker</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-xl leading-relaxed">
                Struggling to stay on track with your healthy habits? Tired of half-finished routines? Here&apos;s the simple, shame-free reset.
              </p>
              <p className="text-base md:text-lg text-[#0D9488] font-bold mb-8 max-w-xl">
                One page. Five minutes a day. Real momentum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={HABIT_TRACKER_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  <Download className="w-5 h-5" /> GET YOUR FREE COPY
                </a>
                <a
                  href="#inside"
                  onClick={e => { e.preventDefault(); document.getElementById('inside')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-10 py-4 rounded-full hover:bg-[#34c5c5]/5 transition-colors"
                >
                  See What&apos;s Inside
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Secure download on krystalorecrews.com — sent straight to your inbox.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/go9/planner.jpg"
                alt="Krystalore Crews 30-Day Habit Tracker — one page, five minutes a day"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain point + promise */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-4">
            Be sure to #CrewsBeyondLimits
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            One of the hardest parts of leveling up is staying <span className="text-[#e07800]">consistent.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            You don&apos;t need another app. You don&apos;t need another guru. You need a quiet, dependable system that helps you show up — even on the days you don&apos;t feel like it.
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            That&apos;s what this 30-day challenge is built for.
          </p>
        </div>
      </section>

      {/* Three big benefits */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What 30 Days Gives You</h2>
            <p className="text-gray-600 text-lg">Tiny daily moves compound into a life that finally feels like yours.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E8A849]/20 to-[#e07800]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-7 h-7 text-[#e07800]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section id="inside" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-3">What&apos;s Inside</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">A Tracker That Actually Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Designed by Krystalore Crews for high-performers who burned out on perfection. Built to be quietly powerful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inside.map((item) => (
              <div key={item.title} className="bg-[#F6F8FA] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#34c5c5]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / encouragement — light teal band */}
      <section className="py-16 bg-[#34c5c5]/10 border-y border-[#34c5c5]/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-black mb-3 leading-tight text-gray-900">
            &ldquo;One day at a time.&rdquo;
          </p>
          <p className="text-xl text-[#0D9488] font-bold">Stronger than yesterday.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Design Your Dream Day. Reduce Overwhelm. Feel Accomplished.
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Grab your free 30-day life &amp; fitness plan today.
          </p>
          <a
            href={HABIT_TRACKER_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#e07800] font-black rounded-full px-10 py-5 text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Get Your Free Copy <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex flex-wrap gap-6 justify-center mt-10 text-orange-100 text-sm">
            <Link href="/health-mastery" className="hover:text-white">Health Mastery</Link>
            <Link href="/coworking" className="hover:text-white">Power Hour</Link>
            <Link href="/just-breathe" className="hover:text-white">Just Breathe</Link>
            <Link href="/bombshell-bootcamp" className="hover:text-white">Bombshell Bootcamp</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
