'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Users, Clock, Zap, Heart, Dumbbell, Calendar, CheckCircle } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: 'Crews Beyond Limits Group Fitness', provider: { '@type': 'Person', name: 'Krystalore Crews' }, description: 'Group fitness with the 34-minute protocol. HIIT, strength, and community.', url: 'https://krystalore.com/group-fitness' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is Crews Beyond Limits group fitness?', acceptedAnswer: { '@type': 'Answer', text: 'Crews Beyond Limits group fitness is a 34-minute high-intensity workout protocol combining HIIT, strength training, and community accountability led by Krystalore Crews.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is Crews Beyond Limits group fitness?', answer: 'Crews Beyond Limits group fitness is a 34-minute high-intensity workout protocol combining HIIT, strength training, and community accountability. Sessions are led by Krystalore Crews and designed for all fitness levels — from beginners to elite athletes. The 34-minute format is intentional: it\'s long enough to drive real results but short enough to fit into any schedule.' },
  { question: 'What is the 34-minute protocol?', answer: 'The 34-minute protocol is Krystalore\'s signature workout format: a structured combination of warm-up, high-intensity circuits, strength work, and cool-down compressed into exactly 34 minutes. Every second is programmed for maximum efficiency and results.' },
  { question: 'Do I need to be fit to join?', answer: 'No. Group fitness sessions are designed with modifications for every level. Whether you haven\'t worked out in years or you\'re a seasoned athlete, Krystalore and the crew will meet you where you are and push you to your next level.' },
  { question: 'Are sessions virtual or in-person?', answer: 'Both. Virtual sessions are available via video call, making group fitness accessible from anywhere. In-person sessions are available at select locations. The community and accountability work the same regardless of format.' },
  { question: 'How much does group fitness cost?', answer: 'Group fitness membership is $99/month and includes 3 live sessions per week, community access, accountability tracking, and nutrition guidance. This is the most affordable way to train with Krystalore and the Crews Beyond Limits community.' },
  { question: 'What days and times are sessions?', answer: 'Sessions run Monday, Wednesday, and Friday with morning and evening options. Check the current schedule for exact times. Sessions are also recorded for replay if you miss a live class.' },
]

export default function GroupFitnessPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/fitness.jpg" alt="Group Fitness" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Group Fitness</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">High-energy group fitness experiences that build strength, confidence, and community.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* 34-Minute Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The 34-Minute Protocol</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Every workout is scientifically programmed for maximum results in minimum time. No filler, no wasted minutes — just pure, effective training.</p>
              <div className="space-y-3">
                {[
                  { time: '0-5 min', phase: 'Dynamic Warm-Up', desc: 'Activate muscles, elevate heart rate, prime your body.' },
                  { time: '5-15 min', phase: 'HIIT Circuit', desc: 'High-intensity intervals that torch calories and build endurance.' },
                  { time: '15-28 min', phase: 'Strength Block', desc: 'Compound movements that build lean muscle and functional strength.' },
                  { time: '28-34 min', phase: 'Finisher + Cool-Down', desc: 'Metabolic finisher followed by recovery stretching.' },
                ].map((p) => (
                  <div key={p.phase} className="bg-gray-50 rounded-xl p-4 flex items-start gap-4">
                    <span className="text-[#34c5c5] font-mono font-bold text-sm min-w-[70px]">{p.time}</span>
                    <div><h3 className="font-bold text-gray-900 text-sm">{p.phase}</h3><p className="text-gray-600 text-sm">{p.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/group-fitness/group-fitness-community.png" alt="Group fitness community" fill className="object-cover object-center" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/group-fitness/group-fitness-schedule.png" alt="Workout schedule" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workouts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/group-fitness/group-fitness-workout-1.png" alt="Group workout session 1" fill className="object-cover object-center" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/group-fitness/group-fitness-workout-2.png" alt="Group workout session 2" fill className="object-cover object-center" />
            </div>
          </div>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">$99/month includes:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {['3 live sessions per week (Mon/Wed/Fri)', 'Morning and evening time slots', 'Community access & support', 'Personal accountability tracking', 'Nutrition guidance', 'Monthly progress assessments', 'Workout replays for missed sessions', 'Access to Crews Beyond Limits app'].map((item) => (
                <div key={item} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /><span className="text-gray-700">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Group Fitness FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Crew. Change Your Body.</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">34 minutes, 3 times a week. That&apos;s all it takes to transform when you&apos;ve got the right crew behind you.</p>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Join Now — $99/mo</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/fitness" className="hover:text-white">Beyond Limits</Link>
            <Link href="/bootcamp" className="hover:text-white">Boot Camp</Link>
            <Link href="/six-week-shred" className="hover:text-white">6 Week Shred</Link>
            <Link href="/million-dollar-body" className="hover:text-white">Million Dollar Body</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
