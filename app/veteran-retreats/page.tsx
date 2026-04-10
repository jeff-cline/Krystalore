'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Users, Brain, Target, Compass, Flame,
  CheckCircle, ChevronDown, ChevronUp, Star, BookOpen,
  Heart, Mountain, Crown, Sun, Award, Flag,
  TreePine, Briefcase, PartyPopper
} from 'lucide-react'

function VeteranRetreatsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: 'Weekend Recharge Veteran Retreat with Krystalore Crews',
        description: 'A weekend retreat for veterans and military families focused on peer connection, mindset reset, and celebrating service. Led by military spouse Krystalore Crews.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '997', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        image: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png',
      },
      {
        '@type': 'Event',
        name: '5-Day Mission Reset Veteran Retreat with Krystalore Crews',
        description: 'An intensive 5-day veteran retreat combining coaching, career workshops, outdoor activities, and family integration for veterans in transition.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '2997', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
      {
        '@type': 'Event',
        name: 'VIP Command Veteran Retreat with Krystalore Crews',
        description: 'A fully customized private veteran retreat with 1-on-1 coaching, tailored itinerary, and comprehensive transition support from Krystalore Crews.',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '6997', priceCurrency: 'USD', availability: 'https://schema.org/LimitedAvailability' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is a veteran retreat?', acceptedAnswer: { '@type': 'Answer', text: 'A veteran retreat is an immersive, guided experience designed specifically for veterans and military families. Led by Krystalore Crews — a military spouse and certified coach — our retreats combine peer connection, coaching, outdoor activities, career workshops, and family integration to support the transition from military to civilian life.' } },
          { '@type': 'Question', name: 'How much does a veteran retreat cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our veteran retreat packages range from $997 for a Weekend Recharge to $2,997 for a 5-Day Mission Reset, and $6,997+ for the VIP Command experience. Military discounts are available on all packages. Payment plans are offered to make retreats accessible.' } },
          { '@type': 'Question', name: 'Are military families welcome at the retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our retreats are designed for veterans and their families. The Family Integration component specifically addresses the challenges that military families face during transition — including spouse adjustment, children\'s needs, and rebuilding family routines in civilian life.' } },
          { '@type': 'Question', name: 'Do I need to be recently separated to attend?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our retreats welcome veterans at any stage — whether you separated last month or 20 years ago. Many veterans carry unresolved transition challenges for years. It\'s never too late to invest in your wellness and growth.' } },
          { '@type': 'Question', name: 'What activities are included?', acceptedAnswer: { '@type': 'Answer', text: 'Activities vary by package but typically include guided coaching sessions, peer connection circles, outdoor adventures (hiking, team challenges), career translation workshops, mindfulness and breathwork sessions, and celebration of service ceremonies. The VIP Command package includes fully customized activities.' } },
          { '@type': 'Question', name: 'Is this a therapy program?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our retreats are coaching-based experiences focused on growth, community, and forward movement. While emotional topics naturally arise, this is not therapy or clinical treatment. We always recommend professional mental health support when appropriate and can provide referrals.' } },
          { '@type': 'Question', name: 'Where are veteran retreats held?', acceptedAnswer: { '@type': 'Answer', text: 'Retreats are held at carefully selected venues across the U.S., chosen for their natural beauty and ability to create a restorative environment. Past locations include Texas, Colorado, and coastal destinations. VIP Command retreats can be held at a location of your choosing.' } },
          { '@type': 'Question', name: 'What should I bring?', acceptedAnswer: { '@type': 'Answer', text: 'Pack comfortable clothing for indoor sessions and outdoor activities, weather-appropriate gear, and personal comfort items. All coaching materials, journals, and supplies are provided. A detailed packing list is sent upon registration.' } },
          { '@type': 'Question', name: 'Is there a military discount?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All active duty, veterans, and military family members receive a military discount on every retreat package. Contact us for current discount details. We also work with veteran organizations and nonprofits to provide sponsored spots when available.' } },
          { '@type': 'Question', name: 'What results can I expect?', acceptedAnswer: { '@type': 'Answer', text: 'Veterans leave our retreats with renewed sense of purpose, stronger peer connections, practical career transition tools, improved family communication, and a personalized action plan for civilian life. The post-retreat support ensures these gains continue long after you return home.' } },
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

export default function VeteranRetreatsPage() {
  const packages = [
    {
      name: 'Weekend Recharge',
      duration: '3 Days / 2 Nights',
      price: '$997',
      icon: Sun,
      color: 'from-teal-400 to-teal-500',
      features: [
        '3 guided veteran coaching sessions',
        'Peer connection circles',
        'Outdoor team activity',
        'Mindset reset & breathwork session',
        'Veteran transition workbook',
        'Post-retreat action plan',
        '30-day follow-up check-in',
        'Military discount available',
      ],
      popular: false,
    },
    {
      name: '5-Day Mission Reset',
      duration: '5 Days / 4 Nights',
      price: '$2,997',
      icon: Mountain,
      color: 'from-[#34c5c5] to-teal-600',
      features: [
        '8 guided coaching sessions',
        'Full 5 C\'s framework deep dive',
        'Career translation workshop',
        'Outdoor adventure activities',
        'Family integration session',
        'Peer mentorship matching',
        'Just Breathe meditation program',
        'Private celebration of service ceremony',
        '60-day post-retreat coaching support',
        'Crews Beyond Limits community access',
      ],
      popular: true,
    },
    {
      name: 'VIP Command',
      duration: 'Custom 3-7 Days',
      price: '$6,997+',
      icon: Crown,
      color: 'from-amber-400 to-orange-500',
      features: [
        'Fully customized itinerary',
        '1-on-1 coaching with Krystalore Crews',
        'Choose your destination',
        'Family members included',
        'Concierge planning & coordination',
        'All meals & activities included',
        'Unlimited coaching sessions during retreat',
        'Complete career transition program',
        '90-day post-retreat VIP coaching',
        'Emergency coaching line access',
        'Lifetime community membership',
      ],
      popular: false,
    },
  ]

  const expectations = [
    { icon: Users, title: 'Peer Connection', description: 'Bond with fellow veterans who understand your journey. Build lasting friendships and a support network that extends well beyond the retreat.' },
    { icon: TreePine, title: 'Outdoor Activities', description: 'Reconnect with nature through team hikes, challenges, and outdoor experiences designed to rebuild camaraderie and adventure.' },
    { icon: Brain, title: 'Mindset Reset', description: 'Break through limiting beliefs, reframe your transition narrative, and develop a growth mindset for civilian success using the 5 C\'s framework.' },
    { icon: Briefcase, title: 'Career Workshop', description: 'Translate your military skills, craft your civilian resume, practice interviews, and develop a clear career action plan with expert guidance.' },
    { icon: Heart, title: 'Family Integration', description: 'Strengthen family bonds with guided sessions addressing reintegration, communication, and building a shared vision for your next chapter together.' },
    { icon: PartyPopper, title: 'Celebration of Service', description: 'Honor your service and sacrifices in a meaningful ceremony. Acknowledge what you\'ve given and celebrate the leader you\'re becoming.' },
  ]

  const testimonials = [
    { name: 'SSG Michael T.', branch: 'U.S. Army (Ret.)', quote: 'I spent 15 years in the Army and had no idea who I was without it. The 5-Day Mission Reset gave me something I couldn\'t find on my own — a new mission. Krystalore gets it because she\'s lived it. The peer connection alone was worth the trip.', rating: 5 },
    { name: 'Amanda R.', branch: 'Military Spouse', quote: 'My husband deployed 4 times in 6 years. When he got out, we were strangers. The family integration piece at the retreat saved our marriage. Krystalore\'s book "Leave No MilSpouse Behind" started my healing — the retreat finished it.', rating: 5 },
    { name: 'Sgt. Darius K.', branch: 'U.S. Marines (Ret.)', quote: 'I was skeptical — another "veteran program." But this was different. No pity, no labels. Just real coaching from someone who respects the culture. I left with a resume that actually translates what I did, and a career plan I\'m excited about.', rating: 5 },
    { name: 'Rachel & CPT James W.', branch: 'U.S. Air Force Family', quote: 'We came as a family — my husband, me, and our two kids. The retreat gave us tools to actually talk about the hard stuff. The celebration of service ceremony had us all in tears. This is what veteran support should look like.', rating: 5 },
  ]

  const faqs = [
    { question: 'What is a veteran retreat?', answer: 'A veteran retreat is an immersive, guided experience designed specifically for veterans and military families. Led by Krystalore Crews — a military spouse and certified coach — our retreats combine peer connection, coaching, outdoor activities, career workshops, and family integration to support the transition from military to civilian life. It\'s not therapy — it\'s forward-focused coaching in a supportive, mission-driven environment.' },
    { question: 'How much does a veteran retreat cost?', answer: 'Our packages range from $997 for the Weekend Recharge (3 days/2 nights) to $2,997 for the 5-Day Mission Reset, and $6,997+ for the fully customized VIP Command experience. Military discounts are available on all packages, and payment plans are offered to ensure accessibility.' },
    { question: 'Are military families welcome?', answer: 'Absolutely. Our retreats are designed for veterans AND their families. The Family Integration component specifically addresses spouse adjustment, children\'s needs, and rebuilding family routines. As a military spouse herself, Krystalore ensures every family member feels seen and supported.' },
    { question: 'Do I need to be recently separated from the military?', answer: 'Not at all. Our retreats welcome veterans at any stage — whether you separated last month or two decades ago. Many veterans carry unresolved transition challenges for years. The skills, connections, and clarity gained at a retreat are valuable at any point in your civilian journey.' },
    { question: 'What activities are included in the retreat?', answer: 'Activities vary by package but typically include guided coaching sessions, peer connection circles, outdoor adventures (hiking, team challenges), career translation workshops, mindfulness and breathwork sessions (including Krystalore\'s Just Breathe program), and a celebration of service ceremony. VIP Command packages are fully customized to your goals.' },
    { question: 'Is this a therapy or clinical program?', answer: 'No. Our retreats are coaching-based experiences focused on growth, community, and forward movement. While emotional and meaningful conversations naturally happen, this is not a substitute for therapy or clinical treatment. We recommend and can refer professional mental health support when appropriate.' },
    { question: 'Where are veteran retreats held?', answer: 'Retreats are held at carefully selected venues across the U.S., chosen for natural beauty and a restorative environment. Past locations include Texas hill country, Colorado mountain retreats, and coastal destinations. VIP Command retreats can be held at a location of your choosing.' },
    { question: 'Is there a military discount?', answer: 'Yes. All active duty service members, veterans, and military family members receive a military discount on every retreat package. We also partner with veteran organizations and nonprofits to provide sponsored spots when available. Contact us for current discount details.' },
    { question: 'What should I bring to the retreat?', answer: 'Pack comfortable clothing for indoor sessions and outdoor activities, weather-appropriate layers, and any personal comfort items. All coaching materials, journals, workbooks, and supplies are provided. A detailed packing list and venue information is sent upon registration. We encourage minimizing phone use — this is your time to reset.' },
    { question: 'What kind of results can I expect?', answer: 'Veterans consistently leave our retreats with a renewed sense of purpose, stronger peer connections, practical career transition tools, improved family communication, and a personalized action plan for civilian life. Post-retreat coaching support ensures these gains continue long after you return home.' },
  ]

  return (
    <>
      <VeteranRetreatsJsonLd />
      <Header />

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/veteran.jpg" alt="Krystalore Crews veteran retreats and military family support" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/veteran.jpg" alt="Veteran Retreats" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Veteran Retreats</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Retreat experiences built for veterans — healing, connection, and the next mission.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is a Veteran Retreat - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is a Veteran Retreat?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A veteran retreat is an immersive experience designed to help veterans and military families navigate the transition from service to civilian life. Unlike standard workshops or conferences, a retreat gives you dedicated time and space to reconnect with yourself, your family, and a community of people who understand your journey.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Led by Krystalore Crews — a military spouse, certified coach, and CEO of Crews Beyond Limits — our veteran retreats combine professional coaching, peer connection, outdoor activities, career workshops, and family integration. Every element is designed with the military community in mind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re navigating your first year out of uniform or you&apos;ve been a civilian for decades, our retreats meet you where you are and give you the tools, community, and momentum to move forward with purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Retreat Gives You:</h3>
              <ul className="space-y-3">
                {['Brotherhood and sisterhood with fellow veterans', 'Practical career transition tools and workshops', 'Mindset coaching using the 5 C\'s framework', 'Family healing and communication strategies', 'Outdoor activities that rebuild camaraderie', 'A personalized action plan for civilian life', 'Post-retreat coaching to maintain momentum'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every veteran retreat is built around six pillars designed to support your complete transition — mind, body, career, and family.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#34c5c5]/10 rounded-2xl flex items-center justify-center mb-6">
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
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retreat Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the experience that fits your needs. Every package includes coaching, community, and post-retreat support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden ${pkg.popular ? 'ring-2 ring-[#34c5c5]' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="bg-[#34c5c5] text-white text-center py-2 text-sm font-bold tracking-wide uppercase">Most Popular</div>
                )}
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}>
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pkg.duration}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}<span className="text-lg text-gray-500 font-normal"> / person</span></div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://krystalore.com/corporate-retreat-planning/"
                    className={`block text-center font-bold rounded-xl px-6 py-4 transition-all hover:scale-105 ${pkg.popular ? 'bg-[#34c5c5] hover:bg-[#37a6a6] text-white shadow-lg shadow-orange-900/20' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  >
                    Reserve Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Veterans Choose Krystalore */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Veterans Choose Krystalore</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Krystalore Crews isn&apos;t just a coach who works with veterans — she&apos;s a military spouse who has lived the lifestyle. She understands deployments, PCS moves, reintegration, the weight of the military community, and the identity shift that comes with transition.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As the author of <Link href="/books" className="text-[#34c5c5] hover:underline font-semibold">&quot;Leave No MilSpouse Behind&quot;</Link>, Krystalore has dedicated her career to empowering military families. Her 5 C&apos;s framework — Core, Consistency, Confidence, Community, and Celebration — was born from the military experience and designed for people who understand discipline, sacrifice, and service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you attend a veteran retreat with Krystalore, you&apos;re not getting corporate motivational speaking. You&apos;re getting someone who has cried at homecomings, packed boxes for another PCS, and rebuilt her own identity alongside the military journey. That&apos;s the difference.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Military spouse with firsthand understanding of service life',
                'Author of "Leave No MilSpouse Behind"',
                'CEO of Crews Beyond Limits — built from military resilience',
                '5 C\'s framework designed for discipline-minded individuals',
                'Culturally informed coaching — no translation needed',
                'Dedicated to veteran and military family advocacy',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Veterans &amp; Military Families Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-[#E8A849] fill-[#E8A849]" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 italic">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave No MilSpouse Behind */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BookOpen className="w-12 h-12 text-[#34c5c5] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Start Your Journey with &quot;Leave No MilSpouse Behind&quot;</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Krystalore&apos;s book on military spouse empowerment is the foundation of her veteran coaching approach. Discover the mindset, strategies, and community that have helped hundreds of military families thrive.
          </p>
          <Link href="/books" className="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-8 py-4 text-lg transition-all hover:scale-105">
            Explore the Book
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about veteran retreats with Krystalore Crews.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5] via-teal-500 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Next Mission Starts Here</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">
            You&apos;ve served your country. Now it&apos;s time to serve yourself. Join fellow veterans for an experience that honors your past and builds your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/corporate-retreat-planning/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105">
              Reserve Your Spot
            </a>
            <Link href="/veteran-coaching" className="border-2 border-white/80 text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-white/10 transition-all">
              Explore Veteran Coaching
            </Link>
          </div>
        </div>
      </section>

      {/* Interlinks */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/veteran-coaching', label: 'Veteran Coaching' },
              { href: '/courses', label: 'Courses' },
              { href: '/books', label: 'Books' },
              { href: '/quizzes', label: 'All Quizzes' },
              { href: '/couples-retreats', label: 'Couples Retreats' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-[#34c5c5] hover:text-teal-700 font-medium px-4 py-2 rounded-full border border-[#34c5c5]/20 hover:border-[#34c5c5]/50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
