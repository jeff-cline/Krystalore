'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Dumbbell, ChevronRight, Flame, Brain, Timer, Zap,
  CheckCircle, Target, Users, ArrowRight, Star, Heart,
  Award, Share2
} from 'lucide-react'

const GHL_PAGE = '/group-fitness'
const CHECKOUT_URL = '/virtual-hiit-camp-checkout'
const FALLBACK_HERO = 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/6908e28de5ed23d57d8bf9c8.png'

export default function BootcampPage() {
  const [heroImage, setHeroImage] = useState(FALLBACK_HERO)

  useEffect(() => {
    fetch('/api/ghl-bootcamp-image')
      .then(r => r.json())
      .then(data => { if (data.url) setHeroImage(data.url) })
      .catch(() => {})
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Bootcamp</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image src="/images/go9/fitness-alt.jpg" alt="Krystalore Crews bootcamp fitness training and strength" fill className="object-cover" sizes="100vw" />
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#E8A849] via-orange-600 to-red-700 text-white py-20 lg:py-28">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <img
                src={heroImage}
                alt="Beyond Limits Bootcamp"
                className="mx-auto max-w-xs w-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Beyond Limits Bootcamp</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-4">
              Transform Your Life in Just 34 Minutes a Day &mdash; All From Your Living Room!
            </p>
            <p className="text-lg text-orange-200 font-semibold mb-8">Where Leaders Train</p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#34c5c5] font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Click to Sign Up
            </a>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Just Fitness &mdash; Leadership Coaching in Motion</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you lead a business, a team, or the next bold chapter of your life &mdash;
                  your performance starts with YOU.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Beyond Limits Bootcamp</strong> is your daily training ground for building mental resilience, 
                  physical strength, and unshakable confidence in just 34 minutes a day.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, title: 'HIIT Training', desc: 'High-intensity intervals for max results' },
                  { icon: Zap, title: 'Kickboxing', desc: 'Strike-based power conditioning' },
                  { icon: Brain, title: 'Stretch & Meditation', desc: 'Recovery and mindfulness' },
                  { icon: Timer, title: '34 Minutes', desc: 'Efficient daily activation' },
                ].map((item) => (
                  <div key={item.title} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5">
                    <item.icon className="w-8 h-8 text-[#E8A849] mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Inside the Bootcamp</h2>
            <div className="space-y-4">
              {[
                '3 Live Weekly Sessions from Epic Global Locations (replays available)',
                'Programming for ALL Levels: HIIT, Kickboxing, stretch, meditation',
                'Monthly Group Coaching Calls for Mindset + Strategy',
                'Private Member Community',
                'Special Members-Only Pricing on all retreats, private coaching, and signature courses',
                'Earn Affiliate Commissions when you share the movement',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Who It&apos;s For</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, label: 'Entrepreneurs + Executives' },
                { icon: Award, label: 'Veterans + Public Servants' },
                { icon: Heart, label: 'Change-makers, Coaches, and Creators' },
                { icon: Users, label: 'Anyone ready to lead their health, habits, and hustle from the front' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                  <item.icon className="w-6 h-6 text-[#E8A849] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-lg text-gray-600 italic mb-2">You don&apos;t have to be perfect.</p>
              <p className="text-lg text-gray-900 font-bold">You just have to be willing to lead yourself first.</p>
            </div>
          </div>
        </section>

        {/* 34-Minute Power Routine */}
        <section className="py-16 bg-gradient-to-br from-[#34c5c5]/10 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Execute the 34-Minute Power Routine</h2>
            <p className="text-lg text-gray-600 mb-8">
              You don&apos;t need a gym. You don&apos;t need hours.<br />
              You need a system that trains your body, mind, and leadership all at once:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-[#34c5c5]">
                <div className="text-3xl font-bold text-[#34c5c5] mb-2">2 min</div>
                <p className="text-gray-700">Gratitude, intention + goal-setting</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-[#E8A849]">
                <div className="text-3xl font-bold text-[#E8A849] mb-2">30 min</div>
                <p className="text-gray-700">HIIT, kickboxing, optional weights, stretch or meditation</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-[#34c5c5]">
                <div className="text-3xl font-bold text-[#34c5c5] mb-2">2 min</div>
                <p className="text-gray-700">Reflection + celebration inside your Krystal Clear Life Planner</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-900">
              This is how leaders stay aligned, energized, and unstoppable &mdash; #NoMatterWhat
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: "I have never loved my body more. She is fun, fabulous and results driven. The work outs are totally manageable and so is the price." },
                { text: "I didn't know I could get these results with just 30 minutes per day! I cannot wait to show off my results on my wedding day!" },
                { text: "OMG I love this group! You all challenge and inspire me daily! Being a SAHM I'm able to still feel healthy, fit, and fabulous!" },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#E8A849] text-[#E8A849]" />)}
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{t.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
            <p className="text-center text-gray-400 mb-12">All plans include full access to Beyond Limits Bootcamp</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Best Value!!!', period: '12 Month', label: 'Package', highlight: true },
                { name: 'Veteran', period: '12 Month', label: 'Package', highlight: false },
                { name: 'Month to Month', period: '', label: 'Package', highlight: false },
                { name: '6 Month', period: '', label: 'Package', highlight: false },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 text-center transition-transform hover:scale-105 ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-[#E8A849] to-[#d4943d] text-white ring-4 ring-[#E8A849]/50'
                      : 'bg-white/10 backdrop-blur border border-white/20'
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  {plan.period && <p className="text-lg font-semibold">{plan.period}</p>}
                  <p className="text-sm opacity-80 mb-6">{plan.label}</p>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block font-bold px-8 py-3 rounded-full transition-colors ${
                      plan.highlight
                        ? 'bg-white text-[#E8A849] hover:bg-gray-100'
                        : 'bg-[#34c5c5] text-white hover:bg-[#37a6a6]'
                    }`}
                  >
                    Select Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate CTA */}
        <section className="py-16 bg-[#34c5c5] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Share2 className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Want to Earn While You Train?</h2>
            <p className="text-lg text-teal-100 mb-6">
              Love the Bootcamp? Share it with your network and get rewarded. Join our Beyond Limits 
              Affiliate Program and start earning commissions every time someone signs up through your link.
            </p>
            <p className="text-teal-200 font-semibold mb-6">It&apos;s leadership. It&apos;s impact. And now, it&apos;s income too.</p>
            <a
              href="mailto:krystalore@thecrewscoach.com"
              className="inline-block bg-white text-[#34c5c5] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Apply to Be an Affiliate
            </a>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/dashboard/fitness/vault" className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <Target className="w-8 h-8 text-[#34c5c5] mb-2" />
                <h3 className="font-bold text-gray-900">Fitness Vault</h3>
                <p className="text-sm text-gray-500 mt-1">On-demand workout library</p>
              </Link>
              <Link href="/services" className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <Users className="w-8 h-8 text-[#34c5c5] mb-2" />
                <h3 className="font-bold text-gray-900">All Services</h3>
                <p className="text-sm text-gray-500 mt-1">Coaching, training & more</p>
              </Link>
              <Link href="/about" className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <Dumbbell className="w-8 h-8 text-[#34c5c5] mb-2" />
                <h3 className="font-bold text-gray-900">About Krystalore</h3>
                <p className="text-sm text-gray-500 mt-1">26-time marathoner & veteran</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
