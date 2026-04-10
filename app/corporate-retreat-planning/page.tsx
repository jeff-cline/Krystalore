'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { MapPin, Users, Brain, Calendar, CheckCircle, Star, Globe, Heart, Shield, Sparkles } from 'lucide-react'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Corporate Retreat Planning by Krystalore Crews',
        description: 'Full-service corporate retreat planning including destination selection, team building activities, EQ workshops, and leadership development programming.',
        provider: { '@type': 'Person', name: 'Krystalore Crews', jobTitle: 'CEO & Retreat Planner' },
        serviceType: 'Corporate Retreat Planning',
        areaServed: 'Worldwide',
        url: 'https://krystalore.com/corporate-retreat-planning',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What does corporate retreat planning include?', acceptedAnswer: { '@type': 'Answer', text: 'Full-service corporate retreat planning includes destination selection, venue booking, agenda design, team building activities, wellness programming, EQ workshops, catering, transportation logistics, and post-retreat follow-up.' } },
          { '@type': 'Question', name: 'How far in advance should we plan a corporate retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Ideally 3-6 months for domestic retreats and 6-12 months for international destinations.' } },
          { '@type': 'Question', name: 'What destinations do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'We plan retreats in Caribbean destinations like Costa Rica, Roatan, and Puerto Rico, domestic locations like Sedona and Miami, and international destinations worldwide.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const retreatPhases = [
  { title: 'Decompress & Release', description: 'Let go of the stress, tension, and weight your team has been carrying. Create space for renewal.' },
  { title: 'Reset Your Mind + Body', description: 'Wellness programming, fitness sessions, and mindfulness practices to restore energy and clarity.' },
  { title: 'Reconnect to Identity + Purpose', description: 'Rediscover what drives your team and align individual purpose with organizational mission.' },
  { title: 'Rebuild Confidence + Direction', description: 'Strategic planning sessions and leadership workshops that create actionable roadmaps.' },
  { title: 'Rise With a Plan That Lasts', description: 'Post-retreat frameworks and accountability structures that ensure lasting transformation.' },
]

const services = [
  { icon: MapPin, title: 'Destination Selection', description: 'We scout and secure the perfect venue matched to your team\'s goals and culture.' },
  { icon: Users, title: 'Team Building Programming', description: 'Custom-designed activities that break silos, build trust, and create genuine connections.' },
  { icon: Brain, title: 'EQ & Leadership Workshops', description: 'Emotional intelligence training and strategic planning facilitated by Krystalore.' },
  { icon: Heart, title: 'Wellness Integration', description: 'Yoga, meditation, fitness sessions, and somatic healing woven into the retreat experience.' },
  { icon: Calendar, title: 'Full Logistics Management', description: 'Travel coordination, catering, AV setup, and every detail handled for you.' },
  { icon: Shield, title: 'Post-Retreat Follow-Up', description: 'Action plans and accountability frameworks to ensure your retreat ROI lasts.' },
]

const faqs = [
  { question: 'What does corporate retreat planning include?', answer: 'Full-service corporate retreat planning includes destination selection and venue booking, agenda and programming design, team building activities and workshops, wellness programming (yoga, fitness, meditation), EQ and leadership development sessions, catering and dietary accommodation, transportation and logistics coordination, AV and technology setup, entertainment and cultural experiences, and post-retreat follow-up with action plans.' },
  { question: 'How far in advance should we plan a corporate retreat?', answer: 'Ideally 3-6 months for domestic retreats and 6-12 months for international destinations. This allows proper time for venue selection, travel arrangements, custom programming design, vendor coordination, and team scheduling.' },
  { question: 'How much does a corporate retreat cost?', answer: 'Corporate retreat costs vary based on destination, duration, group size, and programming. Domestic retreats typically range from $500-2,000 per person, while international destination retreats range from $2,000-5,000+ per person all-inclusive. Contact us for a custom quote.' },
  { question: 'What destinations do you offer for corporate retreats?', answer: 'We plan retreats in Caribbean destinations (Costa Rica, Roatan, Puerto Rico, Jamaica), domestic locations (Sedona, Napa Valley, Miami, Asheville), and international destinations worldwide. We match the destination to your team objectives.' },
  { question: 'Can corporate retreats include wellness programming?', answer: 'Absolutely. Our signature approach integrates wellness components including yoga, meditation, group fitness sessions, nutrition workshops, somatic healing practices, and mindfulness training alongside business strategy and team building.' },
  { question: 'What size groups can you accommodate?', answer: 'We plan retreats for groups ranging from intimate executive teams of 5-10 to large corporate groups of 100+. Programming, venue selection, and logistics are customized based on group size.' },
  { question: 'Do you handle international travel logistics?', answer: 'Yes. For international destination retreats, we coordinate flights, ground transportation, travel insurance recommendations, visa requirements, and emergency contacts.' },
  { question: 'What ROI can we expect from a corporate retreat?', answer: 'Companies that invest in well-planned retreats typically see improved team communication (85%), reduced employee turnover (up to 25%), increased productivity (20-30%), and measurable improvements in employee engagement scores.' },
]

export default function CorporateRetreatPlanningPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/corporate.jpg" alt="Corporate Retreat Planning" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Corporate Retreat Planning</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">End-to-end retreat planning that transforms your team culture, leadership dynamics, and organizational performance.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* Revive & Thrive Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/corporate-retreat/sam-team-building.jpg" alt="Team building retreat session" fill className="object-cover object-center" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Revive & Thrive Retreat Framework</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Revive & Thrive Retreat is more than a week away — it&apos;s a full-body, full-spirit reset designed for professionals who&apos;ve been strong for too long. Intentionally crafted for high-achievers, leaders, and teams navigating change.
              </p>
              <div className="space-y-4">
                {retreatPhases.map((phase, i) => (
                  <div key={phase.title} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full-Service Retreat Planning</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every aspect of your corporate retreat handled with precision and purpose.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Retreat Experiences</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From wellness retreats in Costa Rica to team building in Roatan — every retreat is a transformative experience.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/corporate-retreat/wellness-retreat-costa-rica-full.jpeg', alt: 'Wellness retreat Costa Rica' },
              { src: '/images/corporate-retreat/sam-3454-full.jpg', alt: 'Retreat team experience' },
              { src: '/images/corporate-retreat/colibri-resort.jpg', alt: 'Colibri resort retreat venue' },
              { src: '/images/corporate-retreat/wellness-retreat-roatan.jpeg', alt: 'Wellness retreat Roatan' },
              { src: '/images/corporate-retreat/fitness-retreat-costa-rica-full.jpg', alt: 'Fitness retreat Costa Rica' },
              { src: '/images/corporate-retreat/aajpz-full.jpg', alt: 'Retreat activity' },
              { src: '/images/corporate-retreat/sam-3131-full.jpg', alt: 'Team building session' },
              { src: '/images/corporate-retreat/sam-3152-full.jpg', alt: 'Retreat workshop' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Retreats in Action</h2>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/1nDPdZd21VE" title="Krystalore Crews Retreat Experience" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Retreat Essentials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Retreat Essentials</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your retreat essentials are here — preparation, integration, referrals, and sponsorships, all designed for teams and leaders who expect more than a getaway. This is where transformative experiences, intentional support, and true community set us apart.
              </p>
              <div className="space-y-4">
                <Link href="/retreat-planning-tools" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#34c5c5]" />
                  <div>
                    <span className="font-bold text-gray-900">Retreat Planning Tools</span>
                    <p className="text-sm text-gray-600">Checklists, templates, and preparation guides</p>
                  </div>
                </Link>
                <Link href="/referral-program" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <Star className="w-6 h-6 text-[#34c5c5]" />
                  <div>
                    <span className="font-bold text-gray-900">Referral Program</span>
                    <p className="text-sm text-gray-600">Earn rewards for referring teams to our retreats</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/corporate-retreat/jos-0021-full.jpg" alt="Krystalore Crews retreat leader" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Corporate Retreat Planning FAQ" subtitle="Common questions about planning your team retreat." />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Team Deserves More Than a Conference Room</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let Krystalore plan a retreat experience that transforms how your team connects, communicates, and performs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Start Planning</Link>
            <Link href="/retreat" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Explore All Retreats</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/corporate-retreat-locations" className="hover:text-white">Retreat Locations</Link>
            <Link href="/retreat-planning-tools" className="hover:text-white">Planning Tools</Link>
            <Link href="/womens-retreats" className="hover:text-white">Women&apos;s Retreats</Link>
            <Link href="/revival-retreat" className="hover:text-white">Revival Retreat</Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">EQ Training</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
