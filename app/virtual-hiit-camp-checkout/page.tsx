'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Shield, Dumbbell, Clock, Users, Star, Heart } from 'lucide-react'

export default function VirtualHIITCampCheckout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#0D9488]/30 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-3">Beyond Limits Bootcamp</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get Fit Fast From Your Living Room in Just <span className="text-[#14B8A6]">34 Minutes/Day</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Live virtual HIIT, cardio, and kickboxing workouts 3x per week. Unlimited replays. Private community. Real results.
          </p>
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-[#14B8A6]" /> 30-min sessions</span>
            <span className="flex items-center gap-1"><Dumbbell className="h-4 w-4 text-[#F97316]" /> No equipment</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4 text-[#14B8A6]" /> Private community</span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Here&apos;s What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Dumbbell, title: 'Live Virtual Workouts', desc: '30-minute HIIT, cardio, kickboxing fun workouts — 3 new sessions per week to shred your body, feel sexy and lean at home.' },
              { icon: Clock, title: 'Unlimited Replays', desc: '24/7 access to all recorded workouts in our private group. Do the workouts on your own schedule, anywhere, anytime. #nomatterwhat' },
              { icon: Star, title: 'Fun & Results-Focused', desc: 'New workouts every week to keep your routine interesting and challenging. With Krystalore as your coach, you\'ll be sweating, laughing, and smiling!' },
              { icon: Users, title: 'Private Community', desc: 'Private Facebook Community with monthly workshops and Q&A sessions. Get the accountability you NEED with a supportive and inclusive group.' },
              { icon: Heart, title: 'All Fitness Levels', desc: 'Modifications for low, medium, and high impact. Mix of cardio, strength, HIIT, core, conditioning, and kickboxing — no equipment necessary.' },
              { icon: Shield, title: 'Veteran Discount', desc: 'Special discounted pricing available for Veterans and Military Spouses. We honor those who served.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#0D9488]" />
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

      {/* Checkout Embed */}
      <section className="py-16 px-4 bg-white" id="checkout">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Welcome! Let&apos;s Get You Started</h2>
          <p className="text-gray-600 text-center mb-8">Start feeling results today with a simple sign up</p>

          {/* GHL Checkout Embed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.krystalorecrews.com/virtual-hiit-camp-checkout"
              width="100%"
              height="2700"
              style={{ border: 'none' }}
              title="Beyond Limits Bootcamp Checkout"
              allow="payment"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-[#0D9488]" /> Secure Processing</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-[#0D9488]" /> Cancel Anytime</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-[#F97316]" /> 4.9/5 Rating</span>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Choose Your Plan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Month to Month', price: '$109', period: '/mo', desc: 'No commitment. Cancel anytime.', accent: '#0D9488' },
              { name: '6-Month Contract', price: '$99', period: '/mo', desc: 'Save $60 over 6 months.', accent: '#14B8A6' },
              { name: '12-Month Contract', price: '$89', period: '/mo', desc: 'Best value. Save $240/year.', accent: '#F97316', popular: true },
              { name: 'Veteran/MilSpouse', price: '$69', period: '/mo', desc: 'Thank you for your service.', accent: '#37a6a6' },
            ].map(({ name, price, period, desc, accent, popular }, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 text-center shadow-md relative ${popular ? 'ring-2 ring-[#F97316]' : ''}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">Best Value</div>
                )}
                <h3 className="font-bold text-gray-800 text-sm mb-3">{name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-black" style={{ color: accent }}>{price}</span>
                  <span className="text-gray-500 text-sm">{period}</span>
                </div>
                <p className="text-gray-600 text-xs mb-4">{desc}</p>
                <a href="#checkout" className="block w-full py-2.5 rounded-full text-white font-bold text-sm hover:scale-105 transition-transform" style={{ backgroundColor: accent }}>
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}
