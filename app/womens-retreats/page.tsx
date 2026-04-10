'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sparkles, Crown, Heart, Shield, Dumbbell, Users,
  CheckCircle, ChevronDown, ChevronUp, Star, BookOpen,
  Eye, PartyPopper, Flower2, MapPin, Calendar
} from 'lucide-react'

function WomensRetreatsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: 'Revive & Thrive Women\'s Retreat by Krystalore Crews',
        description: "A transformational women's retreat combining confidence building, fitness, sisterhood, spa & wellness, vision casting, and celebration. Led by Krystalore Crews, CEO of Crews Beyond Limits.",
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: [
          { '@type': 'Offer', name: 'Weekend Glow-Up', price: '1997', priceCurrency: 'USD' },
          { '@type': 'Offer', name: '5-Day Revive & Thrive', price: '4497', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'VIP Queen', price: '9997', priceCurrency: 'USD' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: "What is a women's retreat?", acceptedAnswer: { '@type': 'Answer', text: "A women's retreat is an immersive experience designed to help women step away from daily responsibilities and invest in their personal growth, wellness, and connection with other women. Krystalore's Revive & Thrive retreats combine confidence coaching, fitness, spa treatments, vision casting, and sisterhood in transformational settings." } },
          { '@type': 'Question', name: "What happens at a women's empowerment retreat?", acceptedAnswer: { '@type': 'Answer', text: "You'll experience guided coaching sessions, group fitness activities, wellness treatments, vision board workshops, community building, and celebration ceremonies. Every element is designed to help you leave feeling stronger, clearer, and more connected to your purpose." } },
          { '@type': 'Question', name: 'Who are these retreats for?', acceptedAnswer: { '@type': 'Answer', text: "These retreats are for any woman who feels stuck, burned out, disconnected from herself, or ready for her next level. Whether you're a busy professional, entrepreneur, military spouse, or stay-at-home mom — if you're craving transformation, this is for you." } },
          { '@type': 'Question', name: 'Do I need to be fit to attend?', acceptedAnswer: { '@type': 'Answer', text: "Not at all. All fitness activities are scalable to every level. The goal isn't to crush you — it's to help you discover what your body is capable of in a supportive, judgment-free environment." } },
          { '@type': 'Question', name: 'Can I come alone?', acceptedAnswer: { '@type': 'Answer', text: "Absolutely — most women come solo! You'll be welcomed into the sisterhood immediately. Many women say the friends they make at retreat become lifelong connections." } },
          { '@type': 'Question', name: "What's included in the retreat packages?", acceptedAnswer: { '@type': 'Answer', text: "Packages include accommodations, meals, all coaching sessions, fitness activities, wellness experiences, retreat materials, and community access. VIP packages add private coaching, spa treatments, and extended support." } },
          { '@type': 'Question', name: 'Where are retreats held?', acceptedAnswer: { '@type': 'Answer', text: "Retreats are held at carefully selected venues that provide the perfect balance of luxury, nature, and privacy. Locations vary — past retreats have been at resort properties, mountain lodges, and beachfront venues." } },
          { '@type': 'Question', name: 'Are payment plans available?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Flexible payment plans are available for all retreat packages. Contact Krystalore's team to discuss options that work for your budget." } },
          { '@type': 'Question', name: "What should I bring to a women's retreat?", acceptedAnswer: { '@type': 'Answer', text: "Comfortable clothing for coaching sessions, workout gear, a journal, an open mind, and a willingness to be vulnerable. A detailed packing list is provided upon registration." } },
          { '@type': 'Question', name: 'How do I register?', acceptedAnswer: { '@type': 'Answer', text: "Visit krystalore.com/corporate-retreat-planning or contact Krystalore directly to learn about upcoming retreat dates and secure your spot. Spaces are limited to maintain an intimate, high-impact experience." } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</div>}
    </div>
  )
}

export default function WomensRetreatsPage() {
  const faqs = [
    { question: "What is a women's retreat?", answer: "A women's retreat is an immersive experience designed to help women step away from daily responsibilities and invest in their personal growth, wellness, and connection with other women. Krystalore's Revive & Thrive retreats combine confidence coaching, fitness, spa & wellness treatments, vision casting, and sisterhood in carefully curated, transformational settings." },
    { question: "What happens at a women's empowerment retreat?", answer: "You'll experience guided coaching sessions focused on confidence and mindset, group fitness activities, spa and wellness treatments, vision board workshops, community building exercises, and celebration ceremonies. Every element is intentionally designed to help you leave feeling stronger, clearer, and more deeply connected to your purpose." },
    { question: 'Who are these retreats for?', answer: "These retreats are for any woman who feels stuck, burned out, disconnected from herself, or ready for her next level. Whether you're a busy professional, entrepreneur, military spouse, or stay-at-home mom — if you're craving transformation and sisterhood, this is your invitation." },
    { question: 'Do I need to be fit to attend?', answer: "Not at all. All fitness activities are scalable to every level. The goal isn't to crush you — it's to help you discover what your body is capable of in a supportive, judgment-free environment. You'll be challenged, but never pushed past your limits without your consent." },
    { question: 'Can I come alone?', answer: "Absolutely — and most women do! You'll be welcomed into the sisterhood from the moment you arrive. Many women say the friendships they make at retreat become some of the most meaningful relationships in their lives." },
    { question: "What's included in the retreat packages?", answer: "All packages include accommodations, meals, coaching sessions, fitness activities, wellness experiences, retreat materials, and lifetime community access. Higher-tier packages add private 1:1 coaching, premium spa treatments, extended post-retreat support, and VIP perks." },
    { question: 'Where are retreats held?', answer: "Retreats are held at carefully selected venues that provide the perfect balance of luxury, nature, and privacy. Locations have included resort properties, mountain lodges, and beachfront venues across the United States." },
    { question: 'Are payment plans available?', answer: "Yes. Flexible payment plans are available for all retreat packages. Contact Krystalore's team to discuss options that fit your budget. Investing in yourself is always worth it — and we make it as accessible as possible." },
    { question: "What should I bring?", answer: "Comfortable clothing for coaching sessions, workout gear for fitness activities, a journal for reflection, an open mind, and a willingness to be vulnerable. A detailed packing list and pre-retreat preparation guide is provided upon registration." },
    { question: 'How do I register?', answer: "Visit krystalore.com/corporate-retreat-planning or contact Krystalore directly to learn about upcoming retreat dates and reserve your spot. Spaces are intentionally limited to maintain an intimate, high-impact experience — so don't wait." },
  ]

  const testimonials = [
    { name: 'Jasmine T.', role: 'Marketing Director', quote: "I came to the retreat feeling completely burned out and disconnected from myself. I left with a clear vision, unshakeable confidence, and a sisterhood I didn't know I needed. Krystalore doesn't just talk about empowerment — she embodies it." },
    { name: 'Rachel M.', role: 'Military Spouse & Entrepreneur', quote: "As a military spouse, I've spent years putting everyone else first. This retreat gave me permission to invest in myself. The fitness, the coaching, the community — it all came together to help me find my voice again." },
    { name: 'Denise W.', role: 'Corporate Executive', quote: "I've been to leadership conferences and wellness spas, but nothing compares to this. Krystalore creates an environment where you can be raw, real, and vulnerable — and come out the other side stronger than ever." },
    { name: 'Tamara L.', role: 'Small Business Owner', quote: "The 5 C's framework changed my life. I finally understand that confidence isn't something you're born with — it's something you build. And the community of women I met? We still text each other every single day." },
  ]

  return (
    <>
      <WomensRetreatsJsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/group-evening.webp" alt="Women's Retreats" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Women's Retreats</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Immersive retreat experiences for women seeking transformation, sisterhood, and personal breakthrough.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is a Women's Retreat - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Flower2 className="w-16 h-16 text-[#34c5c5] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is a Women&apos;s Retreat?</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A women&apos;s retreat is a curated, immersive experience that gives women the space to step away from the demands of daily life and invest deeply in their personal growth, wellness, and connection with other women. It&apos;s not a vacation — it&apos;s a transformation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Krystalore&apos;s <strong>Revive &amp; Thrive Retreat</strong> concept goes beyond typical wellness retreats by integrating confidence coaching, physical fitness, spa and wellness treatments, vision casting, and the power of sisterhood. Every element is intentionally designed to help women shed the weight of expectations, reconnect with their authentic selves, and leave with a clear plan for their next chapter.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you choose a weekend experience or a full 5-day immersion, you&apos;ll be surrounded by women who are just as committed to growth as you are — creating bonds that last far beyond the retreat itself.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every retreat is a carefully crafted journey through six transformational pillars.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Crown, title: 'Confidence Building', description: 'Guided coaching sessions that help you identify limiting beliefs, build courageous confidence, and step into your power using the 5 C\'s framework.' },
              { icon: Dumbbell, title: 'Fitness & Movement', description: 'Energizing group workouts, yoga, and movement sessions designed for all fitness levels. Discover what your body is capable of in a supportive environment.' },
              { icon: Users, title: 'Sisterhood & Community', description: 'Deep connection exercises, vulnerability circles, and community building that creates bonds lasting far beyond the retreat.' },
              { icon: Flower2, title: 'Spa & Wellness', description: 'Rejuvenating spa treatments, meditation, breathwork, and wellness rituals that nourish your body and calm your mind.' },
              { icon: Eye, title: 'Vision Casting', description: 'Clarity workshops, vision board creation, and goal-setting sessions that help you design your next chapter with intention and excitement.' },
              { icon: PartyPopper, title: 'Celebration', description: 'Because growth deserves to be celebrated. Closing ceremonies, recognition moments, and the joy of acknowledging how far you\'ve come.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retreat Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the experience that matches your season. Every package is designed for maximum transformation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Weekend Glow-Up */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#34c5c5] transition-colors">
              <div className="text-center mb-6">
                <Sparkles className="w-10 h-10 text-[#34c5c5] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">Weekend Glow-Up</h3>
                <p className="text-4xl font-bold text-[#34c5c5] mt-2">$1,997</p>
                <p className="text-gray-500 text-sm">2 nights / 3 days</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['2 nights luxury accommodations', 'All meals included', 'Group coaching sessions', 'Morning fitness activities', 'Vision board workshop', 'Sisterhood circle', 'Retreat swag bag', 'Community access'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://krystalore.com/corporate-retreat-planning/" className="block text-center bg-[#34c5c5] hover:bg-teal-600 text-white font-bold rounded-xl px-6 py-3 transition-all hover:scale-105">
                Reserve Now
              </a>
            </div>

            {/* 5-Day Revive & Thrive */}
            <div className="bg-gradient-to-br from-[#34c5c5] to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#34c5c5] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-center mb-6">
                <Crown className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold">5-Day Revive &amp; Thrive</h3>
                <p className="text-4xl font-bold text-orange-300 mt-2">$4,497</p>
                <p className="text-teal-100 text-sm">4 nights / 5 days</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['4 nights luxury accommodations', 'All meals + healthy snacks', 'Daily group coaching sessions', 'Daily fitness & movement', 'Spa treatment included', 'Vision casting & goal setting', 'Vulnerability circles', 'Celebration ceremony', 'Post-retreat action plan', '30-day community support'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-300 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://krystalore.com/corporate-retreat-planning/" className="block text-center bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg px-6 py-3 transition-all hover:scale-105">
                Reserve Now
              </a>
            </div>

            {/* VIP Queen */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-[#E8A849] hover:border-[#E8A849] transition-colors">
              <div className="text-center mb-6">
                <Star className="w-10 h-10 text-[#E8A849] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">VIP Queen</h3>
                <p className="text-4xl font-bold text-[#E8A849] mt-2">$9,997+</p>
                <p className="text-gray-500 text-sm">5 days + VIP experience</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Everything in Revive & Thrive', 'Private suite upgrade', '2 private 1:1 sessions with Krystalore', 'Premium spa package', 'Airport transfer service', 'Signed copies of all 4 books', 'Custom vision board kit', '90-day post-retreat coaching', 'Lifetime community membership', 'VIP alumni network access'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E8A849] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://krystalore.com/corporate-retreat-planning/" className="block text-center bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg px-6 py-3 transition-all hover:scale-105">
                Apply for VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Women Choose Krystalore */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Women Choose Krystalore</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Krystalore Crews isn&apos;t just a coach — she&apos;s a woman who has lived the transformation she teaches. As a military spouse, mother, fitness competitor, bestselling author, and CEO of Crews Beyond Limits, she understands the unique pressures women face because she&apos;s navigated them herself.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her approach is unapologetically real. No toxic positivity. No surface-level affirmations. Just practical frameworks, genuine sisterhood, and the kind of accountability that actually creates change. Her books, programs, and retreats have impacted thousands of women worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: '/images/books/road-to-resilience.png', alt: 'Road to Resilience by Krystalore Crews' },
                  { src: '/images/books/leave-no-milspouse-behind.png', alt: 'Leave No MilSpouse Behind by Krystalore Crews' },
                  { src: '/images/books/krystal-clear-life-planner.png', alt: 'Krystal Clear Life Planner by Krystalore Crews' },
                  { src: '/images/books/is-manifesting-bullshit.png', alt: 'Is Manifesting Bullshit by Krystalore Crews' },
                ].map((book) => (
                  <Link key={book.src} href="/books" className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-105">
                    <Image src={book.src} alt={book.alt} width={200} height={300} className="w-full h-auto" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: BookOpen, title: '4 Bestselling Books', description: 'Practical guides for confidence, planning, manifestation, and military spouse empowerment.' },
                { icon: Dumbbell, title: 'Fitness-First Approach', description: 'Physical strength builds mental strength. Movement is medicine at every retreat.' },
                { icon: Users, title: 'Sisterhood Over Competition', description: 'A community where women lift each other up instead of tearing each other down.' },
                { icon: Shield, title: 'Real Talk, Real Results', description: 'No fluff, no toxic positivity. Honest coaching that creates lasting transformation.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#34c5c5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Women Are Saying</h2>
            <p className="text-gray-600 text-lg">Real transformations from real women.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#E8A849] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our women&apos;s retreats.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#34c5c5] via-teal-500 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Transformation Awaits</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            You&apos;ve been pouring into everyone else. It&apos;s time to pour into yourself. Join Krystalore and a community of unstoppable women for an experience that will change your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Reserve Your Retreat Spot
            </a>
            <a href="https://krystalore.com/contact/" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Ask a Question
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/womens-coaching" className="hover:text-white">Women&apos;s Coaching</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/books" className="hover:text-white">Books</Link>
            <Link href="/quizzes" className="hover:text-white">All Quizzes</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={120} height={120} className="mx-auto mb-4" />
          <p className="text-sm mb-2">© {new Date().getFullYear()} Crews Beyond Limits. All rights reserved.</p>
          <p className="text-xs text-gray-500">Redefine What&apos;s Possible — Mind, Body, and Beyond</p>
        </div>
      </footer>
    </>
  )
}
