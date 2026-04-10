'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  Zap,
  Brain,
  Heart,
  Clock,
  Activity,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Mountain,
  Users,
  TreePine,
  ClipboardCheck,
} from 'lucide-react'

export default function BreakthroughPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
          alt="Krystalore Crews - BREAKTHROUGH"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Diamond holograph overlay - light version */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-teal-50/60" />
        {/* Diamond pattern */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-teal font-semibold tracking-[0.3em] uppercase text-sm mb-6">
            A Private Strategy Session
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-teal-800 to-teal bg-clip-text text-transparent">
              BREAKTHROUGH
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            A Private Health Is Wealth Strategy Session for Entrepreneurs
          </p>
          <div className="mt-10">
            <a
              href="#start"
              className="inline-flex items-center gap-2 text-teal border border-teal/40 px-8 py-3 rounded-full hover:bg-teal/10 transition-all duration-300 text-lg"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== OPENING COPY ==================== */}
      <section id="start" className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
        {/* Diamond holograph pattern */}

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
            You&apos;ve built something significant. Revenue. Responsibility. Momentum.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            But here&apos;s the question most founders avoid asking:{' '}
            <span className="text-teal font-medium">
              Is your health positioned to support your next level — or is it quietly absorbing the cost of your ambition?
            </span>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            BREAKTHROUGH is a private, high-level strategy session for entrepreneurs who want sustainable success — not success that comes with a hidden price.
          </p>
        </div>
      </section>

      {/* ==================== STRATEGIC SECTION ==================== */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              This Is Not Therapy. This Is Not a Sales Call.{' '}
              <span className="text-teal">This Is Strategic.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              In this confidential 30–45 minute conversation, we look at:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, text: 'Your current stress load and recovery capacity' },
              { icon: Zap, text: 'Energy patterns and sleep quality' },
              { icon: Heart, text: 'Health signals you may be overlooking' },
              { icon: Clock, text: 'The sustainability of your current pace' },
              { icon: Shield, text: 'What support would protect your longevity and performance' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-all duration-500"
              >
                <item.icon className="w-8 h-8 text-teal mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-teal/20 text-8xl font-serif">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-snug italic">
              Health is wealth. And wealth without health isn&apos;t leverage —{' '}
              <span className="text-primary font-medium not-italic">it&apos;s liability.</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ==================== FOR YOU IF ==================== */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            This Is For You If:
          </h2>
          <div className="space-y-6">
            {[
              "You're scaling and don't want your body to become the bottleneck",
              "You feel fine — but know you're carrying more than you should",
              "You've postponed your health long enough",
              'You want clarity before crisis',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              You don&apos;t need to wait for burnout. You don&apos;t need a diagnosis to start paying attention.{' '}
              <span className="text-gray-900 font-medium">You just need a strategic conversation.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== AFTER THE CALL ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-50">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Happens After the Call?
          </h2>
          <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
            If we&apos;re a fit, we may explore:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Target, label: '1:1 Executive Health Coaching' },
              { icon: Mountain, label: 'Immersive Retreat Experiences' },
              { icon: Users, label: 'High-Level Performance Containers' },
              { icon: TreePine, label: 'Sustainable Leadership Strategy' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-800 text-lg">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-lg mt-10 italic">
            If it doesn&apos;t? You&apos;ll still walk away with clarity.
          </p>
        </div>
      </section>

      {/* ==================== PRIMARY CTA ==================== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        {/* Diamond holographic glow */}

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-10 h-10 text-teal mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Protect Your Greatest Asset?
          </h2>
          <Link
            href="/engage"
            className="inline-block bg-gradient-to-r from-teal to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-lg shadow-teal/20 hover:shadow-teal/30 transition-all duration-300 transform hover:scale-105"
          >
            BOOK YOUR BREAKTHROUGH SESSION
          </Link>
          <p className="text-gray-400 mt-4 text-sm tracking-wide">(Limited availability)</p>
        </div>
      </section>

      {/* ==================== DIVIDER ==================== */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      </div>

      {/* ==================== LIFE ALIGNMENT CHECK-IN ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-50">

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Not Ready for a Call?
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              If you&apos;d prefer to start with a personal snapshot of your current stress, energy, and life alignment… Take the private assessment below.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Is Your Health Supporting the Life You&apos;re Building?
            </h2>
            <p className="text-xl text-gray-500 mb-12">
              A Stress, Energy &amp; Life Alignment Check-In for High Performers
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-500 text-lg mb-8 text-center">
              This self-assessment will help you understand:
            </p>
            <div className="space-y-4">
              {[
                'Where your energy may be leaking',
                'Whether your lifestyle supports longevity',
                'If stress or life transitions are impacting your health',
                'What deserves attention next',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ClipboardCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-lg mb-8 italic">No pressure. Just clarity.</p>
            <Link
              href="/engage"
              className="inline-block bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-teal/30 transition-all duration-300 transform hover:scale-105"
            >
              TAKE THE LIFE ALIGNMENT CHECK-IN
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            You&apos;ve built too much to let your health become an afterthought.{' '}
            <span className="text-teal font-medium">Protect your capacity.</span>{' '}
            <span className="text-primary font-medium">Strengthen your foundation.</span>{' '}
            Create your next breakthrough — sustainably.
          </p>
        </div>
      </section>

      {/* JC Easter Egg */}
      <div className="text-center pb-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>

      <Footer />
    </div>
  )
}
