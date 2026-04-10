'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Dumbbell, Clock, Zap, Heart, CheckCircle, Target } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: 'Strong Sexy Leg Workouts from Home', author: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/leg-workouts-from-home' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Can I build strong legs without a gym?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Bodyweight exercises like squats, lunges, step-ups, and wall sits can build significant leg strength and muscle tone when performed with proper form and progressive overload.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const exercises = [
  { name: 'Bodyweight Squats', sets: '4 x 15', description: 'Stand shoulder-width apart, lower until thighs are parallel, drive through heels.' },
  { name: 'Walking Lunges', sets: '3 x 12 each leg', description: 'Step forward, lower back knee to just above the floor, push through front heel.' },
  { name: 'Sumo Squats', sets: '3 x 15', description: 'Wide stance, toes pointed out 45 degrees, lower deep to target inner thighs and glutes.' },
  { name: 'Step-Ups', sets: '3 x 10 each leg', description: 'Use a sturdy chair or step. Drive through the heel of the elevated foot.' },
  { name: 'Wall Sits', sets: '3 x 45 seconds', description: 'Back flat against wall, thighs parallel to floor. Hold and burn.' },
  { name: 'Single-Leg Glute Bridges', sets: '3 x 12 each leg', description: 'Lie on back, one foot planted, drive hips up squeezing glutes at the top.' },
  { name: 'Calf Raises', sets: '4 x 20', description: 'Stand on the edge of a step, lower heels below the platform, rise to full extension.' },
  { name: 'Jump Squats', sets: '3 x 10', description: 'Squat down, explode upward, land softly. Build power and burn calories.' },
]

const faqs = [
  { question: 'Can I build strong legs without a gym?', answer: 'Absolutely. Bodyweight exercises like squats, lunges, step-ups, and wall sits can build significant leg strength and muscle tone. Add progressive overload through tempo variations, single-leg movements, and plyometrics. Krystalore built elite fitness using bodyweight-focused training.' },
  { question: 'How often should I do leg workouts?', answer: 'Train legs 2-3 times per week with at least one rest day between sessions. This allows proper recovery and muscle growth. Vary intensity — one heavy day, one moderate, one active recovery or mobility-focused session.' },
  { question: 'What equipment do I need for home leg workouts?', answer: 'None required. Bodyweight is enough to build strong, toned legs. Optional equipment includes resistance bands, dumbbells, a sturdy chair for step-ups, and a yoga mat for floor exercises. A backpack filled with books adds weight to squats and lunges.' },
  { question: 'How long should a home leg workout take?', answer: 'An effective leg workout can be completed in 20-30 minutes. Krystalore\'s Beyond Limits protocol uses 34-minute sessions that include warm-up, strength circuits, and cool-down. Quality over quantity — focus on form and intensity.' },
  { question: 'Will leg workouts make my legs bulky?', answer: 'No. Bodyweight and moderate resistance leg training builds lean, toned muscle — not bulk. Getting bulky requires very heavy weights, specific nutrition protocols, and often years of dedicated bodybuilding. These workouts build strong, sexy legs.' },
  { question: 'What is the Beyond Limits fitness approach?', answer: 'Beyond Limits is Krystalore Crews\' fitness philosophy combining strength training, HIIT, mindset work, and community accountability. The 34-minute protocol is designed for busy professionals who want maximum results in minimum time.' },
]

export default function LegWorkoutsFromHomePage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/fitness-alt.jpg" alt="Leg Workouts From Home" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Leg Workouts From Home</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Effective leg workout routines you can do anywhere. Build strength and confidence from the ground up.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* Workout Routine */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">The Complete Home Leg Workout</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">No gym, no excuses. This bodyweight leg routine builds strength, definition, and confidence from your living room.</p>
          <div className="space-y-4">
            {exercises.map((ex, i) => (
              <div key={ex.name} className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                <span className="w-10 h-10 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{ex.name}</h3>
                    <span className="text-[#34c5c5] font-mono text-sm font-bold">{ex.sets}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{ex.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section with Runner Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/krystalore-bio-fitness.jpg" alt="Krystalore Crews fitness coach" fill className="object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From Wheelchair to 27 Marathons</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Krystalore knows what it means to rebuild your body from scratch. After an injury that put her in a wheelchair, she didn&apos;t just recover — she became an elite athlete, completing 27 marathons and becoming an NFL cheerleader.</p>
              <p className="text-gray-600 leading-relaxed mb-4">These leg workouts aren&apos;t just exercises. They&apos;re the foundation of the same training philosophy that carried her from immobility to the finish line, 27 times.</p>
              <p className="text-gray-600 leading-relaxed font-semibold text-[#34c5c5]">Your legs carry you everywhere. Make them strong.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Leg Workout FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Legs You&apos;re Proud Of?</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">Join Beyond Limits and get structured workout programs, community accountability, and coaching from Krystalore.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fitness" className="bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Join Beyond Limits</Link>
            <Link href="/six-week-shred" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">6 Week Shred</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
            <Link href="/bootcamp" className="hover:text-white">Boot Camp</Link>
            <Link href="/million-dollar-body" className="hover:text-white">Million Dollar Body</Link>
            <Link href="/bombshell-bootcamp" className="hover:text-white">Bombshell Bootcamp</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
