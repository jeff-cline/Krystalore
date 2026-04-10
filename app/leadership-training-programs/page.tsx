'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Users, Brain, Target, Award, Shield, Briefcase, CheckCircle, TrendingUp } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: 'Leadership Training Programs by Krystalore Crews', provider: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/leadership-training-programs' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What leadership training programs are available?', acceptedAnswer: { '@type': 'Answer', text: 'Programs range from half-day workshops to multi-month coaching engagements, including corporate leadership development, EQ training, emerging leader programs, and executive retreats.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What leadership training programs are available?', answer: 'Programs range from half-day workshops to multi-month coaching engagements. Options include corporate leadership development, emotional intelligence training, emerging leader programs, C-suite executive coaching, team building retreats, and custom programs designed for your organization\'s specific needs.' },
  { question: 'Are programs available virtually?', answer: 'Yes. All leadership training programs are available in virtual, in-person, and hybrid formats. Virtual programs are highly effective for geographically distributed teams and include interactive workshops, breakout sessions, and real-time coaching.' },
  { question: 'How do I choose the right leadership program?', answer: 'Start with your objectives: developing emerging leaders, strengthening executive teams, improving communication, building EQ, or driving organizational change. Book a discovery call with Krystalore to assess your needs and get a customized recommendation.' },
  { question: 'What industries do you work with?', answer: 'Krystalore works across industries including technology, healthcare, finance, military/government, education, nonprofit, and professional services. Leadership principles are universal — the application is customized to your industry context.' },
  { question: 'How are programs measured for effectiveness?', answer: 'We use pre/post assessments, 360-degree feedback, behavioral observation, team performance metrics, and participant evaluations to measure program impact. ROI data is provided to program sponsors.' },
  { question: 'Can training be customized for our organization?', answer: 'Absolutely. Every program is customized to your organization\'s culture, challenges, and objectives. We begin with a needs assessment and design programming that addresses your specific leadership gaps.' },
]

export default function LeadershipTrainingProgramsPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/corporate.jpg" alt="Leadership Training Programs" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Leadership Training Programs</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Comprehensive leadership development programs that transform managers into mission-driven leaders.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Program Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Emerging Leaders', desc: 'For high-potential individual contributors stepping into leadership roles for the first time.' },
              { icon: Users, title: 'Team Leadership', desc: 'For managers and directors building high-performing teams and improving communication.' },
              { icon: Brain, title: 'Emotional Intelligence', desc: 'Deep EQ training that transforms how leaders connect, communicate, and influence.' },
              { icon: Briefcase, title: 'Executive Development', desc: 'For senior leaders and C-suite executives navigating complex organizational challenges.' },
              { icon: Shield, title: 'Corporate Wellness', desc: 'Leadership through wellness — integrating health, mindset, and performance.' },
              { icon: Award, title: 'Retreat-Based Learning', desc: 'Immersive leadership retreats that combine development with renewal and team building.' },
            ].map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5"><p.icon className="w-7 h-7 text-[#34c5c5]" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/leadership-programs/leadership-team-1.jpeg', alt: 'Leadership team session' },
              { src: '/images/leadership-programs/leadership-team-2.jpeg', alt: 'Team workshop' },
              { src: '/images/leadership-programs/leadership-event.jpeg', alt: 'Leadership event' },
              { src: '/images/leadership-programs/leadership-group.jpeg', alt: 'Group leadership training' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Watch: Leadership Development</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/eHQJfm5OSJk" title="Leadership Training with Krystalore" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Leadership Training FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in Your Leaders. Transform Your Organization.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Book a Discovery Call</Link>
            <Link href="/emotional-intelligence-training" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">EQ Training</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/c-suite-executive-coaching" className="hover:text-white">C-Suite Coaching</Link>
            <Link href="/corporate-retreat-planning" className="hover:text-white">Retreat Planning</Link>
            <Link href="/workshops" className="hover:text-white">Workshops</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
