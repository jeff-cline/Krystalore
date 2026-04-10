'use client'

import Header from '@/components/layout/header'
import Link from 'next/link'
import {
  Users, MessageCircle, Brain, Lightbulb, Heart,
  Briefcase, ArrowRight, Star
} from 'lucide-react'

const topics = [
  { icon: MessageCircle, title: 'Communication & Polarity', desc: 'Navigate masculine-feminine dynamics in leadership, teams, and relationships.' },
  { icon: Brain, title: 'Emotional Intelligence', desc: 'Advanced EQ applied to partnerships, business, and high-stakes decisions.' },
  { icon: Briefcase, title: 'Leadership Case Studies', desc: 'Real scenarios. Real decisions. Cross-perspective analysis.' },
  { icon: Heart, title: 'Relational Intelligence', desc: 'Marriage, business partnerships, team dynamics — all one skill set.' },
  { icon: Lightbulb, title: 'Structured Dialogue', desc: 'Facilitated conversations that sharpen how you think, listen, and lead.' },
  { icon: Star, title: 'Integration', desc: 'Apply what you learn in your Circle to cross-gender, cross-context leadership.' },
]

export default function CoEdForum() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E07A5F] font-semibold uppercase tracking-widest text-sm mb-4">Monthly · Exclusive · Advanced</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Beyond Limits<br />
            <span className="text-[#E07A5F]">Co-Ed Leadership Forum</span>
          </h1>
          <p className="text-xl text-gray-800/70 max-w-2xl mx-auto leading-relaxed">
            Once per month, both Inner Circles come together. Structured leadership, relational intelligence, and cross-perspective growth at the highest level.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#E07A5F]/20">
            <p className="text-sm text-gray-800/50 uppercase tracking-widest mb-2">Inner Circle Add-On</p>
            <p className="text-3xl font-bold text-gray-800">$197<span className="text-lg font-normal text-gray-800/50">/mo</span></p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#E07A5F]/20">
            <p className="text-sm text-gray-800/50 uppercase tracking-widest mb-2">Annual Add-On</p>
            <p className="text-3xl font-bold text-gray-800">$2,000<span className="text-lg font-normal text-gray-800/50">/yr</span></p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#E07A5F]/20">
            <p className="text-sm text-gray-800/50 uppercase tracking-widest mb-2">Single Session</p>
            <p className="text-3xl font-bold text-gray-800">$297<span className="text-lg font-normal text-gray-800/50">/session</span></p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Happens in the Forum</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl p-6 border border-[#E07A5F]/15 hover:border-[#E07A5F]/40 transition-colors">
                <topic.icon className="w-8 h-8 text-[#E07A5F] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-800/60 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="bg-[#37a6a6] rounded-2xl p-8 text-center text-white">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Inner Circle Members</p>
            <h3 className="text-xl font-bold mb-4">Add to My Circle</h3>
            <p className="text-white/60 text-sm mb-6">Select &quot;Both + Co-Ed&quot; on your application.</p>
            <Link
              href="/inner-circle/apply"
              className="inline-flex items-center gap-2 bg-[#E07A5F] hover:bg-[#d06a4f] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#37a6a6]/10">
            <p className="text-gray-800/50 text-sm uppercase tracking-widest mb-3">Not Yet a Member?</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Join an Inner Circle First</h3>
            <p className="text-gray-800/60 text-sm mb-6">Or purchase a single session at $297.</p>
            <Link
              href="/inner-circle"
              className="inline-flex items-center gap-2 bg-[#37a6a6] hover:bg-[#1f2f3f] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              View Circles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
