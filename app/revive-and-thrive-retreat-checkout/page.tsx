'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Shield, Heart, Calendar, MapPin, Star, Users, Sparkles } from 'lucide-react'

export default function ReviveAndThriveRetreatCheckout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#34c5c5] via-[#37a6a6] to-[#0D9488]/30 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-3">Revive & Thrive Retreat</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            You've Been Strong for Everyone Else. <span className="text-[#14B8A6]">Now It's Your Turn.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A transformational women's retreat experience designed to revive your spirit, restore your energy, and reignite your purpose.
          </p>
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-[#14B8A6]" /> 5-7 days</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-[#F97316]" /> Costa Rica & Roatan</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4 text-[#14B8A6]" /> Women only</span>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">The Complete Transformation Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: 'Decompress & Release', desc: 'Let go of the stress, trauma, and weight you\'ve been carrying. Create space for something new to emerge.' },
              { icon: Sparkles, title: 'Reset Mind + Body', desc: 'Wellness, fitness, meditation, and somatic healing to restore your energy and mental clarity.' },
              { icon: Star, title: 'Reconnect to Your Identity', desc: 'Rediscover who you are beneath the roles, responsibilities, and expectations you carry.' },
              { icon: Shield, title: 'Rebuild Your Confidence', desc: 'Workshops and coaching that help you see your path forward with fresh eyes and renewed strength.' },
              { icon: CheckCircle, title: 'Rise With a Lasting Plan', desc: 'Leave with action steps, accountability, and community that ensures your transformation sticks.' },
              { icon: Users, title: 'Sacred Sisterhood', desc: 'Build connections with women who understand your journey and will support your continued growth.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#34c5c5]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#34c5c5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Your 5-Phase Transformation Journey</h2>
          <div className="space-y-6">
            {[
              { phase: 'Decompress & Release', desc: 'Arrive and immediately begin releasing the stress and trauma you\'ve been carrying. Create sacred space for healing.' },
              { phase: 'Reset Your Mind + Body', desc: 'Wellness activities, fitness sessions, meditation, and somatic healing to restore your energy and clarity.' },
              { phase: 'Reconnect to Your Identity + Purpose', desc: 'Rediscover who you are beneath all the roles and responsibilities. Reconnect with your authentic self.' },
              { phase: 'Rebuild Your Confidence + Direction', desc: 'Coaching workshops that help you see your path forward with fresh perspective and renewed confidence.' },
              { phase: 'Rise With a Plan That Lasts', desc: 'Leave with concrete action steps, ongoing accountability, and a sisterhood that supports your transformation.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <span className="w-10 h-10 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.phase}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Embed */}
      <section className="py-16 px-4 bg-white" id="checkout">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Ready to Transform? Let's Begin Your Journey</h2>
          <p className="text-gray-600 text-center mb-8">Secure your spot at the next Revive & Thrive Retreat</p>

          {/* GHL Checkout Embed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout"
              width="100%"
              height="3000"
              style={{ border: 'none' }}
              title="Revive & Thrive Retreat Checkout"
              allow="payment; forms-payment; encrypted-media"
              loading="lazy"
            />
          </div>

          {/* Fallback Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-4">Form not loading? No problem!</p>
            <a 
              href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all inline-block"
            >
              Complete Registration Here →
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-[#34c5c5]" /> Secure Processing</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-[#34c5c5]" /> Payment Plans Available</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-[#F97316]" /> 5-Star Experience</span>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Investment Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Shared Room', price: 'From $2,997', desc: 'Twin beds, shared amenities, full retreat experience included.', accent: '#34c5c5' },
              { name: 'Private Room', price: 'From $3,997', desc: 'Private suite, exclusive amenities, enhanced privacy and comfort.', accent: '#14B8A6', popular: true },
              { name: 'VIP Experience', price: 'From $5,997', desc: 'Premium suite, private coaching session, concierge services.', accent: '#F97316' },
            ].map(({ name, price, desc, accent, popular }, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 text-center shadow-md relative ${popular ? 'ring-2 ring-[#14B8A6]' : ''}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14B8A6] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="font-bold text-gray-800 mb-3">{name}</h3>
                <div className="mb-3">
                  <span className="text-2xl font-black" style={{ color: accent }}>{price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{desc}</p>
                <a href="#checkout" className="block w-full py-2.5 rounded-full text-white font-bold text-sm hover:scale-105 transition-transform" style={{ backgroundColor: accent }}>
                  Select Option
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Payment plans available • Veteran discounts honored • Early bird pricing for advance bookings
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              '5-7 day retreat experience in paradise',
              'All meals and accommodations',
              'Daily coaching and workshop sessions',
              'Fitness and wellness activities',
              'Somatic healing and mindfulness practices',
              'Adventure activities and excursions',
              'Spa treatments and self-care time',
              'Private retreat materials and workbooks',
              'Photography to capture your journey',
              'Ongoing community access post-retreat',
              'Follow-up coaching sessions',
              'Lifetime sisterhood connections',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-[#34c5c5] flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#34c5c5] to-[#0D9488] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Transformation Awaits</h2>
          <p className="text-xl text-teal-50 mb-8">
            Stop putting everyone else first. It's time to invest in the woman who's been taking care of everyone else.
          </p>
          <a href="#checkout" className="bg-white text-[#34c5c5] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
            Secure Your Spot Now
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