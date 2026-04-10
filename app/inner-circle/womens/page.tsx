'use client'

import Header from '@/components/layout/header'
import Link from 'next/link'
import {
  Heart, Sparkles, Shield, Brain, Flame, Sun,
  CheckCircle, Calendar, Users, Star, ArrowRight
} from 'lucide-react'

const focusAreas = [
  { icon: Sparkles, title: 'Identity Transitions', desc: 'Navigate who you\'re becoming without losing who you are.' },
  { icon: Shield, title: 'Boundaries & Relationships', desc: 'Stop over-functioning. Start leading from alignment.' },
  { icon: Brain, title: 'Emotional Intelligence', desc: 'Feel everything. Be controlled by nothing.' },
  { icon: Heart, title: 'Nervous System Regulation', desc: 'Calm the chaos. Reclaim your bandwidth.' },
  { icon: Sun, title: 'Embodied Confidence', desc: 'Show up fully — in rooms, relationships, and your own skin.' },
  { icon: Flame, title: 'Strength & Longevity', desc: 'Build a body and life that sustain your ambition.' },
]

const structure = [
  'Weekly live group coaching session',
  'Monthly deep dive intensive',
  'Office hours for real-time support',
  'Bootcamp included in membership',
  'VIP retreat pricing',
  'Reduced rate on 1:1 coaching upgrades',
]

export default function WomensCircle() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8A9D4] font-semibold uppercase tracking-widest text-sm mb-4">Application Only</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Beyond Limits<br />
            <span className="text-[#B8A9D4]">Women&apos;s Inner Circle</span>
          </h1>
          <p className="text-xl text-gray-800/70 max-w-2xl mx-auto leading-relaxed">
            For high-performing women who are done shrinking, dimming, and over-functioning. This is where you lead from power <em>and</em> presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <div className="bg-white rounded-xl px-6 py-3 shadow-sm">
              <span className="text-2xl font-bold text-gray-800">$750</span>
              <span className="text-gray-800/50">/month</span>
            </div>
            <span className="text-gray-800/30">or</span>
            <div className="bg-white rounded-xl px-6 py-3 shadow-sm">
              <span className="text-2xl font-bold text-gray-800">$7,500</span>
              <span className="text-gray-800/50"> paid in full</span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What We Work On</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-6 border border-[#B8A9D4]/20 hover:border-[#B8A9D4]/50 transition-colors">
                <area.icon className="w-8 h-8 text-[#B8A9D4] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-800/60 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What&apos;s Included</h2>
          <div className="space-y-4">
            {structure.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#B8A9D4] mt-0.5 flex-shrink-0" />
                <span className="text-gray-800/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bump Offer */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#34c5c5]/5 border border-[#34c5c5]/20 rounded-2xl p-10 text-center">
          <Users className="w-10 h-10 text-[#E07A5F] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Add the Co-Ed Leadership Forum</h3>
          <p className="text-gray-800/60 mb-6 max-w-lg mx-auto">
            Monthly joint session with the Men&apos;s Circle. Leadership case studies, communication dynamics, and relational intelligence at the highest level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-gray-800">
            <span className="font-bold text-xl">$197/month</span>
            <span className="text-gray-800/30">or</span>
            <span className="font-bold text-xl">$2,000/year</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Step In?</h2>
          <p className="text-gray-800/60 mb-8">
            This is an application-only container. If it&apos;s your time, you&apos;ll know.
          </p>
          <Link
            href="/inner-circle/apply"
            className="inline-flex items-center gap-2 bg-[#B8A9D4] hover:bg-[#a898c4] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-lg"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
