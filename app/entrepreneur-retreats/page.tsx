'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users, Sparkles, Shield, Clock, Star, CheckCircle,
  ChevronDown, ChevronUp, Target, Lightbulb, Rocket,
  Crown, MessageCircle, Compass, Flame, Brain,
  BarChart3, Handshake, Heart, Zap, Sun, Mountain
} from 'lucide-react'

function EntrepreneurRetreatsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: 'Weekend Intensive Entrepreneur Retreat with Krystalore Crews',
        description: 'A high-impact weekend retreat for entrepreneurs focused on strategy, systems, and scaling. Led by CEO and coach Krystalore Crews.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '2497', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        image: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png',
      },
      {
        '@type': 'Event',
        name: '5-Day Mastermind Entrepreneur Retreat with Krystalore Crews',
        description: 'An immersive 5-day mastermind retreat combining business strategy, leadership coaching, and peer networking for ambitious entrepreneurs.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '5997', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
      {
        '@type': 'Event',
        name: 'VIP Private Entrepreneur Retreat with Krystalore Crews',
        description: 'A fully customized private retreat experience with 1-on-1 coaching from Krystalore Crews. Tailored entirely to your business goals.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '12997', priceCurrency: 'USD', availability: 'https://schema.org/LimitedAvailability' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is an entrepreneur retreat?', acceptedAnswer: { '@type': 'Answer', text: 'An entrepreneur retreat is an immersive, guided experience where business owners step away from daily operations to focus on strategy, growth, and personal development. Led by Krystalore Crews, our retreats combine business coaching, mastermind sessions, networking, and wellness to help entrepreneurs scale with clarity and confidence.' } },
          { '@type': 'Question', name: 'How much does an entrepreneur retreat cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our entrepreneur retreat packages range from $2,497 for a Weekend Intensive to $5,997 for the 5-Day Mastermind, and $12,997+ for a VIP Private Retreat. All packages include coaching sessions, materials, and post-retreat support. Payment plans are available.' } },
          { '@type': 'Question', name: 'Who should attend an entrepreneur retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Our retreats are designed for business owners at any stage — from early-stage entrepreneurs seeking clarity to established CEOs ready to scale. If you feel stuck, overwhelmed, or ready for a breakthrough, this retreat is for you.' } },
          { '@type': 'Question', name: 'What happens at an entrepreneur retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Each retreat includes strategy sessions, mastermind groups, 1-on-1 coaching, networking opportunities, wellness activities, and action planning. You will work through business challenges, develop growth strategies, and leave with a concrete 90-day action plan.' } },
          { '@type': 'Question', name: 'Are entrepreneur retreats worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The combination of focused time away from daily operations, expert coaching, peer collaboration, and structured strategy work creates breakthroughs that months of solo work cannot achieve. Past attendees report an average 40% revenue increase within 6 months of attending.' } },
          { '@type': 'Question', name: 'Can I bring my business partner or spouse?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Business partners are welcome at any package level. For entrepreneur couples, we offer special programming that addresses both business alignment and relationship dynamics. Check out our couples retreats for relationship-focused options.' } },
          { '@type': 'Question', name: 'What should I bring to the retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Bring your laptop, business financials, current marketing materials, and an open mind. We provide all coaching materials, workbooks, and supplies. A detailed prep guide is sent upon registration to help you maximize your retreat experience.' } },
          { '@type': 'Question', name: 'Are virtual retreat options available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer virtual intensive formats for entrepreneurs who cannot travel. While in-person retreats offer the deepest transformation, virtual intensives provide focused strategy and coaching in a condensed format.' } },
          { '@type': 'Question', name: 'What is the cancellation policy?', acceptedAnswer: { '@type': 'Answer', text: 'Full refunds are available up to 30 days before the retreat. Between 15-30 days, you may transfer to a future date. Within 15 days, a 50% credit is applied to a future retreat. VIP Private Retreats have custom cancellation terms.' } },
          { '@type': 'Question', name: 'What results can I expect?', acceptedAnswer: { '@type': 'Answer', text: 'Entrepreneurs leave with a clear 90-day action plan, refined business strategy, stronger network, renewed energy, and practical tools from the 5 C\'s framework. 92% of past attendees report implementing at least 3 major business changes within 60 days of completing the retreat.' } },
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

export default function EntrepreneurRetreatsPage() {
  const packages = [
    {
      name: 'Weekend Intensive',
      duration: '3 Days / 2 Nights',
      price: '$2,497',
      icon: Sun,
      color: 'from-teal-400 to-teal-500',
      features: [
        '4 strategy coaching sessions',
        'Business model review & optimization',
        'Revenue growth workshop',
        'Peer mastermind session',
        'Business Health Checklist deep dive',
        '30-day post-retreat action plan',
        'Follow-up strategy call',
      ],
      popular: false,
    },
    {
      name: '5-Day Mastermind',
      duration: '5 Days / 4 Nights',
      price: '$5,997',
      icon: Mountain,
      color: 'from-[#34c5c5] to-teal-600',
      features: [
        '10 strategy & coaching sessions',
        'Full 5 C\'s framework implementation',
        'Mastermind group sessions (max 8 entrepreneurs)',
        'Marketing & brand audit',
        'Financial strategy workshop',
        'Team building & delegation training',
        'Networking dinner & connections',
        '90-day post-retreat coaching support',
        'Crews Beyond Limits community access',
      ],
      popular: true,
    },
    {
      name: 'VIP Private Retreat',
      duration: 'Custom 3-7 Days',
      price: '$12,997+',
      icon: Crown,
      color: 'from-amber-400 to-orange-500',
      features: [
        'Fully customized business intensive',
        '1-on-1 coaching with Krystalore Crews',
        'Choose your destination',
        'Complete business strategy overhaul',
        'Brand & marketing makeover session',
        'Financial modeling & projections',
        'All meals & activities included',
        '6-month post-retreat VIP coaching',
        'Priority access to future events',
        'Lifetime community membership',
      ],
      popular: false,
    },
  ]

  const expectations = [
    { icon: Target, title: 'Strategy Sessions', description: 'Deep-dive into your business model, revenue streams, and growth opportunities with expert-guided strategy sessions.' },
    { icon: Users, title: 'Mastermind Groups', description: 'Collaborate with fellow entrepreneurs in structured mastermind sessions. Get diverse perspectives and breakthrough insights.' },
    { icon: Handshake, title: 'Networking', description: 'Build genuine connections with ambitious entrepreneurs who become referral partners, collaborators, and lifelong peers.' },
    { icon: Heart, title: 'Wellness', description: 'Recharge with intentional wellness activities — because sustainable success requires a healthy mind and body.' },
    { icon: Shield, title: 'Accountability', description: 'Leave with an accountability structure that ensures you implement what you learn — not just return to old patterns.' },
    { icon: Compass, title: 'Action Planning', description: 'Create a concrete 90-day action plan with clear milestones, deadlines, and metrics so you know exactly what to do next.' },
  ]

  const testimonials = [
    { name: 'Danielle W.', title: 'Founder, Bloom Digital Marketing', quote: 'I came to the 5-Day Mastermind feeling completely stuck at $15K months. Krystalore helped me see the bottleneck was ME — I was doing everything myself. Within 90 days of the retreat, I hired my first two team members and hit $32K in a single month. The mastermind connections alone were worth the investment.', rating: 5 },
    { name: 'Marcus T.', title: 'CEO, Elevate Fitness Studios', quote: 'The Weekend Intensive gave me more clarity in 3 days than 6 months of trying to figure it out alone. Krystalore doesn\'t just give you theory — she\'s built her own business and understands the real challenges. My 90-day action plan became my roadmap, and I\'ve already opened my second location.', rating: 5 },
    { name: 'Priya K.', title: 'Founder, Heritage Spice Co.', quote: 'As a product-based business owner, I wasn\'t sure a coaching retreat would be relevant. I was wrong. The financial strategy session alone saved me $40K in wasted marketing spend. The community of entrepreneurs I met continues to support me months later. This retreat changed my trajectory.', rating: 5 },
    { name: 'Jason & Michelle R.', title: 'Co-Founders, Roots & Rise Consulting', quote: 'We did the VIP Private Retreat as business partners and spouses. Krystalore helped us separate our business and relationship dynamics in a way no one else had. We restructured our entire company, clarified our roles, and honestly saved our partnership. Worth every penny and then some.', rating: 5 },
  ]

  const benefits = [
    'Krystalore built Crews Beyond Limits from scratch — author, speaker, retreat host, course creator, and CEO',
    'The 5 C\'s framework gives you a repeatable system for growth, not just motivational fluff',
    'Small group sizes (max 8 entrepreneurs) ensure deep, personalized strategy work',
    'Retreats combine business strategy with wellness — because burnout isn\'t a badge of honor',
    'Post-retreat coaching support keeps you accountable and on track',
    'Military-spouse entrepreneur perspective brings unique resilience and adaptability insights',
  ]

  const faqs = [
    { question: 'What is an entrepreneur retreat with Krystalore Crews?', answer: 'An entrepreneur retreat is an immersive, guided experience where you step completely away from daily business operations to focus on strategy, growth, and personal development. Led by Krystalore Crews, CEO of Crews Beyond Limits, our retreats combine professional business coaching, mastermind sessions, networking, wellness activities, and strategic planning to help you scale with clarity and confidence.' },
    { question: 'How much does an entrepreneur retreat cost?', answer: 'Our entrepreneur retreat packages range from $2,497 for a Weekend Intensive (3 days/2 nights) to $5,997 for the 5-Day Mastermind, and $12,997+ for a fully customized VIP Private Retreat. All packages include coaching sessions, materials, workbooks, and post-retreat support. Payment plans are available — reach out to discuss options.' },
    { question: 'Who should attend an entrepreneur retreat?', answer: 'Our retreats are designed for business owners at any stage — from early-stage entrepreneurs seeking clarity to established CEOs ready to break through a growth ceiling. If you feel stuck, overwhelmed, wearing too many hats, or simply ready for a breakthrough in your business, this retreat is designed for you.' },
    { question: 'What happens during a typical day at the retreat?', answer: 'Each day includes a mix of guided coaching sessions, mastermind group work, individual strategy time, and wellness activities. Mornings typically start with a mindset session, followed by a business strategy workshop. Afternoons include mastermind breakouts and 1-on-1 coaching. Evenings feature networking activities and reflection. You\'ll work through the 5 C\'s framework and leave with a 90-day action plan.' },
    { question: 'Are entrepreneur retreats worth the investment?', answer: 'The combination of focused time away from daily operations, expert coaching, peer collaboration, and structured strategy work creates breakthroughs that months of solo work simply cannot achieve. Past attendees report an average 40% revenue increase within 6 months. The networking connections and accountability structures alone often pay for the retreat many times over.' },
    { question: 'Can I bring my business partner or co-founder?', answer: 'Absolutely. Business partners are welcome at any package level and often get tremendous value from aligned strategy work. For entrepreneur couples who also want to strengthen their relationship, we offer special programming. Check out our couples retreats for relationship-focused options alongside your business growth.' },
    { question: 'What should I bring to the retreat?', answer: 'Bring your laptop, current business financials, marketing materials, and an open mind. We provide all coaching materials, workbooks, and supplies. A detailed prep guide with pre-work exercises is sent upon registration to help you maximize your retreat experience. Come ready to work — this is not a vacation.' },
    { question: 'Are virtual options available?', answer: 'Yes. We offer virtual intensive formats for entrepreneurs who cannot travel. While in-person retreats offer the deepest transformation through full immersion and networking, virtual intensives provide focused strategy and coaching in a condensed format. Contact us to discuss which format best fits your needs.' },
    { question: 'What is the cancellation policy?', answer: 'Full refunds are available up to 30 days before your retreat date. Between 15-30 days out, you may transfer your registration to a future date at no cost. Within 15 days, a 50% credit is applied toward a future retreat. VIP Private Retreats have customized cancellation terms outlined in your agreement.' },
    { question: 'What results can I expect?', answer: 'Entrepreneurs leave with a clear 90-day action plan, refined business strategy, stronger professional network, renewed energy and focus, and practical tools from the 5 C\'s framework. 92% of past attendees report implementing at least 3 major business changes within 60 days of completing the retreat. The post-retreat coaching ensures these changes translate into measurable results.' },
  ]

  return (
    <>
      <EntrepreneurRetreatsJsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Entrepreneur Retreats" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Entrepreneur Retreats</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Immersive retreat experiences designed for entrepreneurs who want to think bigger, plan smarter, and execute faster.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is an Entrepreneur Retreat - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is an Entrepreneur Retreat?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                An entrepreneur retreat is an immersive experience designed to pull you out of the day-to-day grind so you can work <em>on</em> your business instead of <em>in</em> it. It&apos;s dedicated time for strategic thinking, skill development, and honest self-assessment — surrounded by peers who understand the entrepreneurial journey.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Crews Beyond Limits, our entrepreneur retreats are led by Krystalore Crews — a CEO, published author, and coach who has built multiple revenue streams from scratch. Using her <strong>5 C&apos;s framework</strong> (Core, Consistency, Confidence, Community, Celebration), entrepreneurs gain both the strategy and the mindset needed for sustainable growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re hitting a revenue ceiling, struggling with delegation, or simply need a reset, our retreats meet you where you are. For ongoing support between retreats, explore our <Link href="/entrepreneur-coaching" className="text-[#34c5c5] font-semibold hover:underline">entrepreneur coaching</Link> program.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews entrepreneur retreat coaching" width={500} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect at Your Entrepreneur Retreat</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every retreat is designed to create business breakthroughs through strategy, community, and action.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
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

      {/* Mid-page CTA */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your Business Growth?</h2>
          <p className="text-teal-50 text-lg mb-8">Spots are limited to ensure every entrepreneur gets deep, personalized strategy work.</p>
          <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
            Reserve Your Spot Today
          </a>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entrepreneur Retreat Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the experience that fits your business goals and growth stage. Every package includes proven coaching frameworks and post-retreat support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl overflow-hidden ${pkg.popular ? 'ring-2 ring-[#34c5c5] shadow-lg scale-105' : 'shadow-sm'} bg-white`}>
                {pkg.popular && (
                  <div className="bg-[#34c5c5] text-white text-center text-sm font-bold py-2">Most Popular</div>
                )}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white text-center`}>
                  <pkg.icon className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-white/80">{pkg.duration}</p>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 block text-sm">per person</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://krystalore.com/corporate-retreat-planning/" className="block text-center bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-200 px-6 py-3 transition-all hover:scale-105">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            💼 Payment plans available. Group discounts for teams of 3+.
          </p>
        </div>
      </section>

      {/* Why Entrepreneurs Choose Krystalore */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/books/road-to-resilience-book-cover.png" alt="The Road to Resilience book by Krystalore Crews - entrepreneur mindset" width={300} height={400} className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image src="/images/books/leave-no-milspouse-behind-book-cover.png" alt="Leave No MilSpouse Behind - entrepreneurship and military life" width={300} height={400} className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/books/krystal-clear-life-planner.png" alt="Krystal Clear Life Planner for business goal setting" width={300} height={400} className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image src="/images/books/is-manifesting-bullshit-book-cover.png" alt="Is Manifesting Bullshit book - entrepreneur mindset coaching" width={300} height={400} className="w-full h-auto" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Entrepreneurs Choose Krystalore</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/books" className="text-[#34c5c5] font-semibold hover:underline">
                  Explore Krystalore&apos;s Books →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Entrepreneurs Are Saying</h2>
            <p className="text-gray-600 text-lg">Real stories from business owners who transformed their businesses at our retreats.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#E8A849] fill-[#E8A849]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz & Coaching CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-sm">
              <Rocket className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Are You Ready to Scale?</h3>
              <p className="text-gray-600 mb-6">Take our free Entrepreneur Readiness Assessment to discover your strengths and growth areas before your retreat.</p>
              <Link href="/quizzes/entrepreneur-readiness" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl px-6 py-3 inline-block transition-all hover:scale-105">
                Take the Quiz
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-sm">
              <Brain className="w-10 h-10 text-[#34c5c5] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Entrepreneur Coaching</h3>
              <p className="text-gray-600 mb-6">Not ready for a retreat? Start with 1-on-1 entrepreneur coaching to build strategy, systems, and mindset.</p>
              <Link href="/entrepreneur-coaching" className="bg-[#34c5c5] hover:bg-teal-600 text-white font-bold rounded-xl px-6 py-3 inline-block transition-all hover:scale-105">
                Learn About Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our entrepreneur retreat experience.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Business Breakthrough Is Waiting</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            The best investment you can make is in yourself and your business. Stop grinding alone and start scaling with strategy, community, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Book Your Entrepreneur Retreat
            </a>
            <Link href="/entrepreneur-coaching" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Explore Entrepreneur Coaching
            </Link>
          </div>
          <p className="text-teal-100 mt-6 text-sm">Limited spots · Payment plans available · Group discounts for teams</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews - entrepreneur retreat coach" width={120} height={120} className="mx-auto mb-4" />
          <p className="text-sm mb-2">© {new Date().getFullYear()} Crews Beyond Limits. All rights reserved.</p>
          <p className="text-xs text-gray-500">Redefine What&apos;s Possible — Mind, Body, and Beyond</p>
        </div>
      </footer>
    </>
  )
}
