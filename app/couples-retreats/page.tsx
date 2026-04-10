'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart, Users, Sparkles, Shield, Clock, MapPin,
  Star, CheckCircle, ChevronDown, ChevronUp,
  Sun, Mountain, Crown, MessageCircle, Compass, Flame
} from 'lucide-react'

// Note: metadata must be in a separate file for client components
// See layout.tsx or use generateMetadata in a parent

function CouplesRetreatsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: 'Couples Weekend Getaway Retreat with Krystalore Crews',
        description: 'A transformative weekend couples retreat focused on rebuilding connection, communication, and confidence in your relationship. Led by certified coach Krystalore Crews.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: {
          '@type': 'Offer',
          price: '1497',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        image: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png',
      },
      {
        '@type': 'Event',
        name: '5-Day Deep Dive Couples Retreat with Krystalore Crews',
        description: 'An immersive 5-day couples wellness retreat combining coaching, mindset work, and experiential activities to transform your relationship from the inside out.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: {
          '@type': 'Offer',
          price: '3497',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Event',
        name: 'VIP Private Couples Retreat with Krystalore Crews',
        description: 'A fully customized private couples retreat experience with 1-on-1 coaching from Krystalore Crews. Tailored entirely to your relationship goals.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: {
          '@type': 'Offer',
          price: '7997',
          priceCurrency: 'USD',
          availability: 'https://schema.org/LimitedAvailability',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a couples retreat?',
            acceptedAnswer: { '@type': 'Answer', text: 'A couples retreat is a guided, immersive experience where partners step away from daily life to focus on their relationship. Led by Krystalore Crews, our retreats combine coaching, communication exercises, and experiential activities to help couples reconnect, rebuild trust, and create a shared vision for their future.' },
          },
          {
            '@type': 'Question',
            name: 'How much does a couples retreat cost?',
            acceptedAnswer: { '@type': 'Answer', text: 'Our couples retreats range from $1,497 for a Weekend Getaway to $7,997+ for a VIP Private Retreat. Each package includes coaching sessions, materials, and activities. The 5-Day Deep Dive is $3,497 per couple. Payment plans are available.' },
          },
          {
            '@type': 'Question',
            name: 'Where are the couples retreats held?',
            acceptedAnswer: { '@type': 'Answer', text: 'Retreats are held at carefully selected venues across the U.S., including destinations in Texas, Colorado, and coastal locations. VIP Private Retreats can be hosted at a destination of your choice. Virtual retreat options are also available.' },
          },
          {
            '@type': 'Question',
            name: 'Do we need to be married to attend?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Our couples retreats welcome all committed partnerships — married, engaged, dating, or reconnecting. The focus is on strengthening your bond regardless of relationship status.' },
          },
          {
            '@type': 'Question',
            name: 'What happens at a couples retreat?',
            acceptedAnswer: { '@type': 'Answer', text: 'Each retreat includes guided coaching sessions, communication workshops, partner exercises, individual reflection time, and group activities. You will work through Krystalore\'s 5 C\'s framework (Core, Consistency, Confidence, Community, Celebration) and leave with a personalized relationship action plan.' },
          },
          {
            '@type': 'Question',
            name: 'Is this couples therapy?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Our retreats are coaching-based experiences focused on growth, communication, and connection. While therapeutic topics may arise, this is not a substitute for licensed therapy. Many couples attend alongside their regular therapy for accelerated growth.' },
          },
          {
            '@type': 'Question',
            name: 'Are military and veteran couples welcome?',
            acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. As a military spouse herself, Krystalore Crews has deep understanding of the unique challenges military and veteran families face. Military couples receive a 10% discount on all retreat packages.' },
          },
          {
            '@type': 'Question',
            name: 'What should we bring to the retreat?',
            acceptedAnswer: { '@type': 'Answer', text: 'Comfortable clothing, an open mind, and a willingness to grow. We provide all materials, journals, and workbooks. A detailed packing list is sent upon registration. Leave laptops at home — this is your time to unplug and reconnect.' },
          },
          {
            '@type': 'Question',
            name: 'Can we get a refund if we can\'t attend?',
            acceptedAnswer: { '@type': 'Answer', text: 'Full refunds are available up to 30 days before the retreat. Between 15-30 days, you may transfer to a future date. Within 15 days, a 50% credit is applied to a future retreat. VIP Private Retreats have custom cancellation terms.' },
          },
          {
            '@type': 'Question',
            name: 'What results can we expect?',
            acceptedAnswer: { '@type': 'Answer', text: 'Couples leave with improved communication skills, renewed emotional intimacy, a clear relationship vision, and practical tools from the Relationship Remodel framework. 94% of past attendees report stronger connection within 30 days of completing the retreat.' },
          },
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function CouplesRetreatsPage() {
  const packages = [
    {
      name: 'Weekend Getaway',
      duration: '3 Days / 2 Nights',
      price: '$1,497',
      icon: Sun,
      color: 'from-teal-400 to-teal-500',
      features: [
        '4 guided couples coaching sessions',
        'Communication & conflict resolution workshop',
        'Partner connection exercises',
        'Relationship vision-boarding activity',
        'Krystalore\'s Relationship Remodel workbook',
        'Post-retreat action plan',
        '30-day follow-up check-in call',
      ],
      popular: false,
    },
    {
      name: '5-Day Deep Dive',
      duration: '5 Days / 4 Nights',
      price: '$3,497',
      icon: Mountain,
      color: 'from-[#34c5c5] to-teal-600',
      features: [
        '8 guided couples coaching sessions',
        'Full 5 C\'s framework deep dive',
        'Individual + partner reflection sessions',
        'Adventure activity (hiking, kayaking, or spa)',
        'Rise Beyond Grief and Loss module',
        'Relationship Remodel complete program',
        'Private dinner experience',
        '60-day post-retreat coaching support',
        'Access to Crews Beyond Limits community',
      ],
      popular: true,
    },
    {
      name: 'VIP Private Retreat',
      duration: 'Custom 3-7 Days',
      price: '$7,997+',
      icon: Crown,
      color: 'from-amber-400 to-orange-500',
      features: [
        'Fully customized itinerary',
        '1-on-1 coaching with Krystalore Crews',
        'Choose your destination',
        'Concierge planning & coordination',
        'All meals & activities included',
        'Unlimited coaching sessions during retreat',
        'Complete Relationship Remodel program',
        '90-day post-retreat VIP coaching',
        'Emergency coaching line access',
        'Lifetime community membership',
      ],
      popular: false,
    },
  ]

  const expectations = [
    { icon: MessageCircle, title: 'Deep Communication Workshops', description: 'Learn to speak each other\'s language — literally. Break through communication barriers with proven coaching frameworks.' },
    { icon: Heart, title: 'Emotional Reconnection', description: 'Rebuild intimacy and trust through guided partner exercises designed to deepen your emotional bond.' },
    { icon: Compass, title: 'Shared Vision Planning', description: 'Create a unified vision for your future using Krystalore\'s 5 C\'s framework — Core, Consistency, Confidence, Community, and Celebration.' },
    { icon: Shield, title: 'Conflict Resolution Tools', description: 'Transform how you handle disagreements. Walk away with practical strategies that turn conflict into connection.' },
    { icon: Flame, title: 'Individual Growth Sessions', description: 'Because stronger individuals make stronger couples. Discover your personal blocks and breakthrough moments.' },
    { icon: Users, title: 'Community & Support', description: 'Connect with like-minded couples and join the Crews Beyond Limits community for ongoing support after the retreat.' },
  ]

  const benefits = [
    'Krystalore is a certified coach with real-life experience — military spouse, entrepreneur, and mother who has navigated her own relationship journey',
    'The 5 C\'s framework gives you a practical, repeatable system — not just feel-good advice',
    'Small group sizes (max 6 couples) ensure personalized attention',
    'Retreats combine coaching, adventure, and rest — not just sitting in a room talking',
    'Military and veteran couples receive special pricing and culturally-informed coaching',
    'Post-retreat support keeps the momentum going long after you return home',
  ]

  const testimonials = [
    { name: 'Marcus & Tanya R.', location: 'Fort Worth, TX', quote: 'We almost didn\'t come. We were at the point where we were just coexisting. By day two of the Deep Dive, something shifted. Krystalore has this way of cutting through the noise and helping you see each other again. We left with tools we still use daily — 8 months later.', rating: 5 },
    { name: 'David & Sarah K.', location: 'Colorado Springs, CO', quote: 'As a military couple, we\'ve been through more moves and deployments than we can count. Krystalore gets it — she\'s lived it. The Weekend Getaway gave us a reset we desperately needed. The Relationship Remodel framework changed how we communicate during separations.', rating: 5 },
    { name: 'James & Olivia M.', location: 'Atlanta, GA', quote: 'The VIP retreat was worth every penny. Having Krystalore\'s undivided attention for 5 days transformed our marriage. We came in with walls up and left holding hands. Our therapist noticed the difference in our very next session.', rating: 5 },
    { name: 'Chris & Priya L.', location: 'San Diego, CA', quote: 'We weren\'t in crisis — we just wanted to be intentional about our relationship. The 5 C\'s framework gave us a shared language and a roadmap. The vision-boarding activity was surprisingly powerful. We recommend this to every couple we know.', rating: 5 },
  ]

  const faqs = [
    { question: 'What is a couples retreat with Krystalore Crews?', answer: 'A couples retreat is a guided, immersive experience where you and your partner step away from daily distractions to focus entirely on your relationship. Led by Krystalore Crews, CEO of Crews Beyond Limits, our retreats combine professional coaching, communication workshops, experiential activities, and individual reflection to help you reconnect, rebuild trust, and create a shared vision for your future together.' },
    { question: 'How much does a couples retreat cost?', answer: 'Our couples retreat packages range from $1,497 for a Weekend Getaway (3 days/2 nights) to $3,497 for the 5-Day Deep Dive, and $7,997+ for a fully customized VIP Private Retreat. All packages include coaching sessions, materials, workbooks, and post-retreat support. Payment plans are available — reach out to discuss options that work for your budget.' },
    { question: 'Where are your couples retreats held?', answer: 'We host retreats at carefully curated venues across the United States, including locations in Texas, Colorado, and select coastal destinations. Each venue is chosen for its beauty, privacy, and ability to create a transformative environment. VIP Private Retreats can be held at a destination of your choosing. We also offer virtual retreat experiences for couples who prefer to participate from home.' },
    { question: 'Do we need to be married to attend a couples retreat?', answer: 'Not at all. Our retreats welcome all committed partnerships — whether you are married, engaged, dating seriously, or working on reconnecting after time apart. The focus is on strengthening your bond and building a shared future, regardless of your relationship status or how long you have been together.' },
    { question: 'What happens during a typical day at the retreat?', answer: 'Each day includes a mix of guided coaching sessions, partner exercises, individual reflection time, and experiential activities. Mornings typically start with a mindset session, followed by a couples workshop. Afternoons include adventure activities (hiking, spa, or creative exercises) and individual journaling. Evenings feature connection activities and partner dialogue. You will work through Krystalore\'s 5 C\'s framework and the Relationship Remodel program throughout the retreat.' },
    { question: 'Is this the same as couples therapy?', answer: 'No. Our retreats are coaching-based experiences focused on growth, forward movement, and building practical relationship skills. While deep emotional topics may come up, this is not a substitute for licensed therapy or counseling. Many couples attend our retreats alongside their regular therapy and find that the immersive coaching experience accelerates their growth. If you are in an abusive relationship, we recommend seeking professional therapeutic support first.' },
    { question: 'Are military and veteran couples welcome?', answer: 'Absolutely — and you will feel right at home. Krystalore Crews is a military spouse herself and deeply understands the unique challenges that military life places on relationships: deployments, relocations, reintegration, and the invisible weight of service. Military and veteran couples receive a 10% discount on all retreat packages. Our coaching approach is informed by the resilience and strength that military families embody.' },
    { question: 'What should we bring to the retreat?', answer: 'Pack comfortable clothing suitable for both indoor sessions and outdoor activities, weather-appropriate layers, and any personal comfort items. We provide all coaching materials, journals, workbooks, and supplies. A detailed packing list and venue information is sent upon registration. We strongly encourage leaving laptops and minimizing phone use — this is your time to unplug and reconnect with each other.' },
    { question: 'What if we need to cancel?', answer: 'We understand that life happens. Full refunds are available up to 30 days before your retreat date. Between 15-30 days out, you may transfer your registration to a future retreat date at no additional cost. Within 15 days, a 50% credit is applied toward a future retreat. VIP Private Retreats have customized cancellation terms outlined in your agreement. We always work with you to find a solution.' },
    { question: 'What kind of results can we expect?', answer: 'Couples consistently leave our retreats with dramatically improved communication, renewed emotional and physical intimacy, a clear shared vision for their relationship, and practical daily tools from the Relationship Remodel framework. 94% of past retreat attendees report feeling a stronger connection with their partner within 30 days of completing the retreat. The post-retreat coaching support ensures these changes stick long-term.' },
  ]

  return (
    <>
      <CouplesRetreatsJsonLd />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/group-sunset.jpg" alt="Couples Retreats" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Couples Retreats</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Reconnect, rebuild, and reignite your relationship through immersive couples retreat experiences.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is a Couples Retreat - AEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Couples Retreat?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A couples retreat is an immersive, guided experience where you and your partner step completely away from daily routines to focus on what matters most — your relationship. Unlike traditional therapy sessions, a retreat gives you uninterrupted time and space to reconnect, communicate, and grow together.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Crews Beyond Limits, our couples retreats are led by Krystalore Crews — a certified coach, bestselling author, military spouse, and CEO who brings real-world experience to every session. Using her signature <strong>5 C&apos;s framework</strong> (Core, Consistency, Confidence, Community, Celebration) and the <strong>Relationship Remodel</strong> program, couples gain practical tools that create lasting change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re looking to reignite your spark, navigate a rough patch, or simply invest in a strong relationship, our retreats meet you exactly where you are. For ongoing support between retreats, explore our <Link href="/relationship-coaching" className="text-[#34c5c5] font-semibold hover:underline">relationship coaching</Link> program.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/krystalore-crews-logo.png"
                  alt="Krystalore Crews couples retreat and relationship coaching logo"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect at Your Couples Retreat</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every retreat is designed to create transformation through connection, coaching, and real-world tools you&apos;ll use long after you leave.</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your Relationship?</h2>
          <p className="text-teal-50 text-lg mb-8">Spots are limited to ensure every couple gets the personalized attention they deserve.</p>
          <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
            Reserve Your Spot Today
          </a>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Couples Retreat Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the experience that fits your relationship goals and schedule. Every package includes Krystalore&apos;s proven coaching frameworks and post-retreat support.</p>
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
                    <span className="text-gray-500 block text-sm">per couple</span>
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
            💛 Military & veteran couples receive 10% off all packages. Payment plans available.
          </p>
        </div>
      </section>

      {/* Why Couples Choose Krystalore */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/books/road-to-resilience-book-cover.png"
                  alt="The Road to Resilience book - couples wellness retreat reading by Krystalore Crews"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/books/leave-no-milspouse-behind-book-cover.png"
                  alt="Leave No MilSpouse Behind - marriage retreat and military couples relationship coaching"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/books/krystal-clear-life-planner.png"
                  alt="Krystal Clear Life Planner for couples workshop goal setting and relationship coaching"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/books/is-manifesting-bullshit-book-cover.png"
                  alt="Is Manifesting Bullshit book - couples retreat mindset coaching resource"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Couples Choose Krystalore</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Couples Are Saying</h2>
            <p className="text-gray-600 text-lg">Real stories from couples who transformed their relationships at our retreats.</p>
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
                  <p className="text-gray-500 text-sm">{t.location}</p>
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
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-sm">
              <Heart className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">How Compatible Are You?</h3>
              <p className="text-gray-600 mb-6">Take our free Couples Compatibility Assessment to discover your strengths and growth areas as a couple before your retreat.</p>
              <Link href="/quizzes/couples-compatibility" className="bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl px-6 py-3 inline-block transition-all hover:scale-105">
                Take the Quiz
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-sm">
              <MessageCircle className="w-10 h-10 text-[#34c5c5] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Relationship Coaching</h3>
              <p className="text-gray-600 mb-6">Not ready for a retreat? Start with one-on-one relationship coaching to build communication skills, emotional intelligence, and deeper connection.</p>
              <Link href="/relationship-coaching" className="bg-[#34c5c5] hover:bg-teal-600 text-white font-bold rounded-xl px-6 py-3 inline-block transition-all hover:scale-105">
                Learn About Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our couples retreat experience.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Relationship Deserves This</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Don&apos;t wait for a crisis to invest in your partnership. The strongest couples are the ones who choose growth — together. Let Krystalore guide you to what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Book Your Couples Retreat
            </a>
            <Link href="/relationship-coaching" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Explore Relationship Coaching
            </Link>
          </div>
          <p className="text-teal-100 mt-6 text-sm">Limited spots available · Payment plans offered · Military discount applied at checkout</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Image
            src="/images/krystalore-crews-logo.png"
            alt="Krystalore Crews - couples retreat coach and relationship coaching expert"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <p className="text-sm mb-2">© {new Date().getFullYear()} Crews Beyond Limits. All rights reserved.</p>
          <p className="text-xs text-gray-500">Redefine What&apos;s Possible — Mind, Body, and Beyond</p>
        </div>
      </footer>
    </>
  )
}
