'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Heart, Users, Globe, Star, Building2, Megaphone, CheckCircle, Award } from 'lucide-react'

export default function RetreatSponsorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Retreat sponsorship opportunities" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[#14B8A6] font-semibold uppercase tracking-wider text-sm mb-3">Partner With Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Retreat <span className="text-[#F97316]">Sponsorship</span> Opportunities
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl">
              Align your brand with transformation. Sponsor our retreats and connect with high-performing entrepreneurs, executives, and leaders in intimate, immersive settings.
            </p>
            <a href="/book" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Discuss Sponsorship <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Sponsor a Beyond Limits Retreat?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our retreats attract high-net-worth individuals, entrepreneurs, and C-suite executives in intimate settings where your brand gets genuine, meaningful exposure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'High-Value Audience', desc: 'Entrepreneurs, executives, and leaders with significant purchasing power and influence in their industries.', color: 'text-[#0D9488]' },
              { icon: Heart, title: 'Authentic Connection', desc: 'Intimate retreat settings (10-20 attendees) mean your brand is experienced, not just seen. Deep, lasting impressions.', color: 'text-[#F97316]' },
              { icon: Globe, title: 'Premium Destinations', desc: 'Caribbean islands, Costa Rica, and domestic luxury venues. Your brand associated with aspirational experiences.', color: 'text-[#14B8A6]' },
              { icon: Megaphone, title: 'Multi-Channel Exposure', desc: 'Social media coverage, email campaigns, podcast mentions, and on-site branding across all retreat touchpoints.', color: 'text-[#0D9488]' },
              { icon: Star, title: 'Brand Alignment', desc: 'Align with wellness, leadership, transformation, and empowerment. Values-driven sponsorship that resonates.', color: 'text-[#F97316]' },
              { icon: Building2, title: 'Corporate Retreats', desc: 'Sponsor corporate wellness retreats and get your brand in front of decision-makers from Fortune 500 companies.', color: 'text-[#14B8A6]' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Icon className={`h-8 w-8 ${color} mb-4`} />
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sponsorship Tiers</h2>
            <p className="text-gray-600">Flexible packages designed to match your brand goals and budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tier: 'Bronze', price: 'Starting at $2,500', items: ['Logo on retreat materials', 'Social media mention (1 post)', 'Product placement at retreat', 'Thank you in email campaign'], accent: '#CD7F32' },
              { tier: 'Silver', price: 'Starting at $5,000', items: ['All Bronze benefits', 'Logo on event signage', 'Social media campaign (3 posts)', 'Podcast mention', 'Branded swag bag inclusion', 'Photo/video content rights'], accent: '#C0C0C0' },
              { tier: 'Gold', price: 'Starting at $10,000', items: ['All Silver benefits', 'Co-branded retreat experience', 'Keynote or workshop slot', 'Full social media campaign', 'Email blast to subscriber list', 'VIP attendee access', 'Custom activation opportunity'], accent: '#FFD700', popular: true },
            ].map(({ tier, price, items, accent, popular }, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 shadow-lg relative border-2 ${popular ? 'border-[#F97316]' : 'border-gray-100'}`}>
                {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
                <div className="text-center mb-6">
                  <Award className="h-10 w-10 mx-auto mb-3" style={{ color: accent }} />
                  <h3 className="text-2xl font-bold text-gray-800">{tier}</h3>
                  <p className="text-[#0D9488] font-semibold mt-1">{price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/book" className="block w-full text-center py-3 rounded-full text-white font-bold hover:scale-105 transition-transform bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Retreats */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#37a6a6] to-[#0D9488]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Upcoming Retreat Opportunities</h2>
          <p className="text-gray-400 mb-8">Secure your sponsorship early for maximum exposure and activation planning.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Revive & Thrive Costa Rica', when: 'Q2 2026', attendees: '12-15 women', type: 'Wellness & Leadership' },
              { name: 'Caribbean Island Immersion', when: 'Q3 2026', attendees: '5-10 executives', type: 'Business & Wellness' },
              { name: 'Veteran Leadership Retreat', when: 'Q4 2026', attendees: '15-20 veterans', type: 'Leadership & Healing' },
              { name: 'Couples Transformation Retreat', when: 'Q1 2027', attendees: '8-10 couples', type: 'Relationship & Wellness' },
            ].map(({ name, when, attendees, type }, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10">
                <h3 className="text-white font-bold mb-2">{name}</h3>
                <p className="text-[#14B8A6] text-sm font-semibold">{when}</p>
                <p className="text-gray-400 text-sm">{attendees} | {type}</p>
              </div>
            ))}
          </div>
          <a href="/book" className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform">
            Become a Sponsor <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}
