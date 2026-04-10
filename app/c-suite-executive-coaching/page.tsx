'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Target, Brain, Users, Shield, Briefcase, TrendingUp, Award, Zap, CheckCircle } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: 'C-Suite Executive Coaching by Krystalore Crews', description: 'Elite coaching programs for C-suite executives including CEOs, CFOs, and senior leaders.', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Executive Coaching', url: 'https://krystalore.com/c-suite-executive-coaching' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is C-suite executive coaching?', acceptedAnswer: { '@type': 'Answer', text: 'C-suite executive coaching is specialized leadership development for CEOs, CFOs, COOs, and other senior executives, focusing on strategic decision-making, stakeholder influence, emotional intelligence, and sustained high-performance leadership.' } },
      { '@type': 'Question', name: 'How is C-suite coaching different from regular executive coaching?', acceptedAnswer: { '@type': 'Answer', text: 'C-suite coaching addresses the unique challenges of top-level leadership: board dynamics, enterprise strategy, organizational culture shaping, succession planning, and the isolation that comes with being at the top.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const programs = [
  { title: 'Apex Leadership Elite', description: 'Intensive program for senior C-Suite executives focusing on strategic decision-making, stakeholder influence, and sustained high-performance leadership across complex organizations.', icon: Award },
  { title: 'Executive Ascend', description: 'Tailored for rising executives preparing to step into C-Suite roles, emphasizing executive presence, board communication, and the shift from functional management to enterprise leadership.', icon: TrendingUp },
  { title: 'Pinnacle C-Suite Accelerator', description: 'Fast-track for newly appointed C-Suite leaders offering 1-on-1 coaching, leadership diagnostics, peer learning, and a roadmap to accelerate impact in the first 90 days.', icon: Zap },
  { title: 'Strategic Edge Coaching', description: 'Helping C-level leaders develop a strategic edge in uncertain environments through scenario planning, competitive positioning, and disruptive innovation.', icon: Target },
  { title: 'C-Suite Mastery Path', description: 'Comprehensive leadership mastery for seasoned executives covering legacy leadership, succession planning, culture shaping, and building high-performance executive teams.', icon: Shield },
  { title: 'Visionary CEO Program', description: 'Tailored for CEOs with P&L responsibility, focusing on vision creation, capital markets readiness, board relations, stakeholder ecosystems, and leadership legacy.', icon: Briefcase },
]

const faqs = [
  { question: 'What is C-suite executive coaching?', answer: 'C-suite executive coaching is specialized leadership development for CEOs, CFOs, COOs, CTOs, and other senior executives. It focuses on strategic decision-making, stakeholder influence, emotional intelligence, organizational culture, and sustained high-performance leadership across complex organizations.' },
  { question: 'How is C-suite coaching different from regular executive coaching?', answer: 'C-suite coaching addresses the unique challenges of top-level leadership: board dynamics, enterprise-wide strategy, organizational culture shaping, succession planning, media presence, and the isolation that comes with being at the top. The stakes are higher, the decisions more consequential, and the coaching more strategic.' },
  { question: 'What results can I expect from C-suite coaching?', answer: 'C-suite clients typically see improved strategic clarity, stronger stakeholder relationships, better decision-making under pressure, enhanced executive presence, reduced burnout risk, and measurable improvements in organizational performance metrics within 3-6 months.' },
  { question: 'How long is a typical C-suite coaching engagement?', answer: 'Most C-suite coaching engagements run 6-12 months with bi-weekly or monthly sessions. Some programs include intensive retreats, peer cohort work, and ongoing advisory. The timeline depends on your objectives and organizational context.' },
  { question: 'Is C-suite coaching confidential?', answer: 'Absolutely. All coaching conversations are strictly confidential. Krystalore operates under professional coaching ethics. Nothing from your sessions is shared with your board, team, or organization unless you explicitly authorize it.' },
  { question: 'Can C-suite coaching address work-life balance?', answer: 'Yes. Work-life integration is a critical component of sustainable leadership. C-suite coaching addresses energy management, boundary setting, relationship health, physical wellness, and the unique pressures that come with executive-level responsibilities.' },
  { question: 'What makes Krystalore qualified for C-suite coaching?', answer: 'Krystalore brings 22 years of military leadership experience, certified emotional intelligence expertise, somatic healing training, and real-world entrepreneurial experience building Crews Beyond Limits. She understands high-stakes leadership from lived experience, not just theory.' },
  { question: 'Do you offer C-suite team coaching?', answer: 'Yes. In addition to 1-on-1 executive coaching, we offer C-suite team coaching for executive leadership teams. This includes team diagnostics, facilitated strategy sessions, communication optimization, and conflict resolution at the senior leadership level.' },
]

export default function CSuiteExecutiveCoachingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/corporate.jpg" alt="C-Suite Executive Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">C-Suite Executive Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Elite coaching for senior executives ready to lead with clarity, confidence, and emotional intelligence.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">C-Suite Coaching Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Each program is tailored to the specific challenges and objectives of senior executive leadership.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5"><p.icon className="w-7 h-7 text-[#34c5c5]" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">More C-Suite Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Summit Institute', desc: 'Multi-day immersive environment for senior executives with leadership breakthroughs and cross-industry insights.' },
              { title: 'Elite Executive Navigator', desc: 'Navigate major transitions — mergers, acquisitions, digital transformation, international expansion.' },
              { title: 'Executive Elevation Lab', desc: 'Lab-style coaching combining action research, peer cohort work, and experiment-based leadership trials.' },
              { title: 'Boardroom Leadership Forum', desc: 'Forum-driven offering refining governance, board-executive dynamics, risk oversight, and accountability.' },
              { title: 'Enterprise Leadership Synergy', desc: 'Bridge enterprise-wide leadership across business units, aligning C-Suite strategy to operational execution.' },
              { title: 'The C-Suite Catalyst', desc: 'For leaders who need to pivot quickly — launching new units, entering markets, or responding to disruption.' },
              { title: 'Strategic Leadership Blueprint', desc: 'Customizable blueprint including personal leadership brand, stakeholder map, and measurable KPIs.' },
              { title: 'Executive Impact Collective', desc: 'Cohort-format coaching bringing together C-Suite leaders from multiple organizations.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#34c5c5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Executive Coaching in Action</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/1nDPdZd21VE" title="Krystalore Crews Executive Coaching" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="C-Suite Executive Coaching FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Leadership at the Top Is Lonely. It Doesn&apos;t Have to Be.</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">Get a strategic partner who understands the weight of C-suite leadership and can help you lead with clarity, confidence, and purpose.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Schedule a Consultation</Link>
            <Link href="/apply-for-coaching" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Apply Now</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/leadership-training" className="hover:text-white">Leadership Training</Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">EQ Training</Link>
            <Link href="/private-mindset" className="hover:text-white">Private Mindset</Link>
            <Link href="/entrepreneur-coaching" className="hover:text-white">Entrepreneur Coaching</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
