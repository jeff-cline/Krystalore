'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Clock, Users, Target, Zap, Calendar, CheckCircle } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Event', name: 'Beyond Limits Power Hour', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/coworking', eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is Beyond Limits Power Hour?', acceptedAnswer: { '@type': 'Answer', text: 'Beyond Limits Power Hour is a virtual coworking session every Wednesday where entrepreneurs, executives, and creators come together for focused work with built-in accountability and community.' } },
      { '@type': 'Question', name: 'When is Power Hour?', acceptedAnswer: { '@type': 'Answer', text: 'Every Wednesday. Join live for structured focus time with the Crews Beyond Limits community.' } },
      { '@type': 'Question', name: 'Is Power Hour free?', acceptedAnswer: { '@type': 'Answer', text: 'Power Hour is included with Crews Beyond Limits membership. Check current pricing and availability.' } },
      { '@type': 'Question', name: 'What happens during a Power Hour session?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions include intention-setting, focused work blocks, accountability check-ins, and community connection. It is designed to help you tackle your most important tasks.' } },
      { '@type': 'Question', name: 'Do I need to be a member to join?', acceptedAnswer: { '@type': 'Answer', text: 'Power Hour is part of the Crews Beyond Limits community. Some sessions may be open to newcomers. Contact us for details.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is Beyond Limits Power Hour?', answer: 'Beyond Limits Power Hour is a virtual coworking session every Wednesday where entrepreneurs, executives, and creators come together for focused work with built-in accountability and community. It\'s not a meeting — it\'s structured focus time designed to help you tackle your most important work.' },
  { question: 'When is Power Hour?', answer: 'Every Wednesday. Join live for structured focus time with the Crews Beyond Limits community. Check the schedule for exact times.' },
  { question: 'What happens during a Power Hour session?', answer: 'Sessions include: (1) Intention-setting — declare what you\'ll accomplish, (2) Focus block — 45-50 minutes of deep, distraction-free work, (3) Accountability check-in — share what you completed, (4) Community connection — celebrate wins and set next steps.' },
  { question: 'Is Power Hour free?', answer: 'Power Hour is included with Crews Beyond Limits membership. Some introductory sessions may be open to newcomers. Contact us for current pricing and availability.' },
  { question: 'Do I need to be a member to join?', answer: 'Power Hour is part of the Crews Beyond Limits community offerings. Some sessions are open to guests. Join the community for full access to weekly coworking, group fitness, and all community events.' },
  { question: 'Who is Power Hour for?', answer: 'Anyone who wants to be more productive — entrepreneurs, remote workers, executives, creatives, and anyone who thrives with accountability. If you struggle with focus, procrastination, or working in isolation, Power Hour is your antidote.' },
]

export default function CoworkingPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/community-hands.jpg" alt="Coworking" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Coworking</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">A collaborative workspace experience designed for high-performers, entrepreneurs, and visionaries.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">How Power Hour Works</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Set Your Intention', desc: 'Declare what you will accomplish this session. Public commitment drives completion.', time: '5 min' },
              { step: '2', title: 'Deep Focus Block', desc: 'Cameras on, heads down. Structured silence with the energy of a focused community.', time: '45 min' },
              { step: '3', title: 'Accountability Report', desc: 'Share what you accomplished. Celebrate wins. Identify next steps.', time: '10 min' },
            ].map((s) => (
              <div key={s.step} className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                <span className="w-10 h-10 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">{s.step}</span>
                <div className="flex-1"><h3 className="font-bold text-gray-900">{s.title}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>
                <span className="text-[#34c5c5] font-mono text-sm font-bold">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Power Hour FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Working Alone. Start Working with Purpose.</h2>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Join the Crew</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
            <Link href="/vision-board" className="hover:text-white">Vision Board</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
