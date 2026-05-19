'use client'

import { useState } from 'react'
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

function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'n/a',
          quizTitle: 'Habit Tracker Download',
          answers: {},
          results: { source: 'krystalore.com/habittracker' },
        }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-14 h-14 text-[#0D9488] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">It&apos;s on its way!</h3>
        <p className="text-gray-600">Check your inbox in the next minute or two. Your 30-day reset starts now.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#e07800] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Your Name"
      />
      <input
        type="email"
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#e07800] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Email Address"
      />
      <input
        type="tel"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#e07800] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Phone (optional)"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-xl px-6 py-4 rounded-xl hover:scale-[1.01] transition-transform shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? 'Sending…' : (
          <>
            <Download className="w-5 h-5" /> GET YOUR FREE COPY
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">Something went wrong. Try again or email krystalore@thecrewscoach.com.</p>
      )}
      <p className="text-xs text-gray-500 text-center pt-1 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5" /> Your details are safe. 100% secure. Unsubscribe anytime.
      </p>
    </form>
  )
}

export default function HabitTrackerPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <Image
          src="/images/go9/planner.jpg"
          alt="Krystalore Crews 30-Day Habit Tracker — one page, five minutes a day"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 z-[1]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
          <p className="text-[#E8A849] font-bold tracking-widest uppercase text-sm mb-4">
            Free Download • Instant Access
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 max-w-3xl leading-[1.05]">
            Free 30-Day <span className="text-[#E8A849]">Habit Tracker</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
            Struggling to stay on track with your healthy habits? Tired of half-finished routines? Here&apos;s the simple, shame-free reset.
          </p>
          <p className="text-lg text-[#34c5c5] font-bold mb-10 max-w-2xl">
            One page. Five minutes a day. Real momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#download"
              onClick={e => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-10 py-4 font-black text-lg hover:scale-105 transition-transform text-center shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> GET YOUR FREE COPY
            </a>
            <a
              href="#inside"
              onClick={e => { e.preventDefault(); document.getElementById('inside')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="border-2 border-white/60 text-white rounded-full px-10 py-4 font-bold hover:bg-white/10 transition-colors text-center"
            >
              See What&apos;s Inside
            </a>
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

      {/* Quote / encouragement */}
      <section className="py-16 bg-gradient-to-br from-[#34c5c5] to-[#006767] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-black mb-3 leading-tight">
            &ldquo;One day at a time.&rdquo;
          </p>
          <p className="text-xl text-teal-100">Stronger than yesterday.</p>
        </div>
      </section>

      {/* Download form */}
      <section id="download" className="py-20 bg-[#F6F8FA] scroll-mt-20">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <Download className="w-12 h-12 text-[#e07800] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Grab Your Free Copy</h2>
            <p className="text-gray-600">Tell us where to send it. Instant delivery to your inbox.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#E8A849]/30">
            <SignupForm />
          </div>
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
            href="#download"
            onClick={e => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }) }}
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
