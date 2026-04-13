import MainLayout from '@/components/layout/MainLayout'
import { Check, Star, Zap, Heart, Users, Target, ArrowRight, Shield, Clock, Flame } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HealthMasteryPage() {
  const features = [
    { icon: Users, title: 'Weekly Coaching Calls', description: 'Live group Zoom sessions with Krystalore covering fitness, mindset, nutrition, and leadership integration.' },
    { icon: Flame, title: 'Fitness & Energy Systems', description: 'Science-backed training designed for longevity — build sustainable energy that fuels your business and life.' },
    { icon: Zap, title: 'Beyond Limits Bootcamp', description: 'Full access to the signature bootcamp program — structured workouts you can do anywhere, anytime.' },
    { icon: Shield, title: 'Accountability & Community', description: 'A private community of driven entrepreneurs and leaders who hold each other to a higher standard.' },
    { icon: Heart, title: 'Leadership Integration', description: 'Identity, confidence, relationships, boundaries, nutrition, and habit design — the whole person, elevated.' },
    { icon: Clock, title: 'Monthly Workshops', description: 'Deep-dive workshops and co-working sessions on topics from stress management to peak performance.' },
  ]

  const testimonials = [
    {
      quote: "I have never loved my body more. She is fun, fabulous and results driven. The workouts are totally manageable and so is the price.",
      name: "Health Mastery Member",
    },
    {
      quote: "I feel like you know what is in my head. You meet me where I'm at. You get me. This is way more than just a fitness program. I've elevated my life!",
      name: "Health Mastery Member",
    },
    {
      quote: "I'm really starting to feel like myself again. Your program has been so good for me. Thank you for being so amazing and supportive!",
      name: "Health Mastery Member",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Health Mastery Group Coaching",
    "description": "A high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy, rebuild consistency, and lead their life from the inside out.",
    "brand": { "@type": "Brand", "name": "Krystalore Crews" },
    "offers": [
      { "@type": "Offer", "name": "Monthly Plan", "price": "497", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "/health-mastery/checkout" },
      { "@type": "Offer", "name": "Annual Plan", "price": "5500", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "/health-mastery/checkout" },
    ],
    "review": testimonials.map(t => ({ "@type": "Review", "reviewBody": t.quote, "author": { "@type": "Person", "name": t.name }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } })),
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "3" },
  }

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Image */}
      <section className="rounded-2xl overflow-hidden mb-8 sm:mb-10">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/health-mastery/hero.webp"
            alt="Krystalore Crews — Health Mastery Group Coaching for entrepreneurs and leaders"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Hero Text (below image) */}
      <section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-teal font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">Beyond Limits</p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          You&apos;ve Built Success...<br />
          <span className="text-teal">Now It&apos;s Time to Feel Like It</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto">
          Health Mastery is a high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy, rebuild consistency, and lead their life from the inside out.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/health-mastery/checkout"
            className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-8 rounded-xl transition-colors text-center text-lg shadow-lg shadow-teal/30"
          >
            Join Health Mastery
          </Link>
          <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-8 rounded-xl transition-colors text-center">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Sound Familiar?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { emoji: '😮\u200d💨', text: "You're successful but exhausted" },
            { emoji: '⏰', text: 'Health keeps getting pushed back' },
            { emoji: '🔄', text: "You start strong... but don't sustain" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <span className="text-4xl mb-3 block">{item.emoji}</span>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mb-12 sm:mb-16 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-12 text-white text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Health Mastery = Life, Fitness & Business Accelerator</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          The level you want requires a version of you with more energy, discipline, and alignment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Target, label: 'Consistency', text: 'becomes who you are' },
            { icon: Zap, label: 'Energy', text: 'becomes your advantage' },
            { icon: Star, label: 'Confidence', text: 'becomes your standard' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <item.icon className="h-8 w-8 mx-auto mb-3 text-white" />
              <p className="font-bold text-lg">{item.label}</p>
              <p className="text-white/70 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12 sm:mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What&apos;s Included</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Everything you need to transform your health, energy, and leadership — in one powerful program.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-teal/30 transition-all group">
              <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <feature.icon className="h-6 w-6 text-teal" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-gray-700 text-sm text-center">
            <strong className="text-teal">Bonus:</strong> Members receive discounts on upgrades to private coaching and retreats.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">What Members Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 text-[#E8A849] fill-current" />)}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <p className="text-sm font-medium text-gray-500">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12 sm:mb-16 relative overflow-hidden rounded-2xl"
        style={{ backgroundImage: 'url(/images/health-mastery/pricing-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black/60 backdrop-blur-sm p-8 sm:p-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 text-center">Choose Your Plan</h2>
          <p className="text-white/70 text-center mb-10 max-w-lg mx-auto">Invest in the version of you that leads with energy, clarity, and confidence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Monthly */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Monthly Plan</h3>
              <p className="text-gray-500 text-sm mb-4">(3 month minimum)</p>
              <p className="text-4xl font-bold text-gray-900 mb-1">$497<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <p className="text-xs text-gray-400 mb-6">Billed monthly</p>
              <Link
                href="/health-mastery/checkout"
                className="block w-full bg-teal hover:bg-[#37a6a6] text-white font-bold py-3 rounded-xl transition-colors"
              >
                Select Plan
              </Link>
            </div>
            {/* Annual */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow relative border-2 border-teal">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1 rounded-full">BEST VALUE</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Annual Plan</h3>
              <p className="text-gray-500 text-sm mb-4">(get one month free)</p>
              <p className="text-4xl font-bold text-gray-900 mb-1">$5,500</p>
              <p className="text-xs text-gray-400 mb-6">Billed annually — save $464</p>
              <Link
                href="/health-mastery/checkout"
                className="block w-full bg-teal hover:bg-[#37a6a6] text-white font-bold py-3 rounded-xl transition-colors"
              >
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Lead Your Life from the Inside Out?</h2>
        <p className="text-gray-600 mb-8">Stop waiting for the &ldquo;right time.&rdquo; The right time is when you decide you&apos;re worth it.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/health-mastery/checkout"
            className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-10 rounded-xl transition-colors text-lg shadow-lg shadow-teal/30 flex items-center justify-center gap-2"
          >
            Join Health Mastery <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-10 rounded-xl transition-colors text-lg">
            Have Questions? Let&apos;s Talk
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
