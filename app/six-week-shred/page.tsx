'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Clock, Zap, Dumbbell, Target, CheckCircle, Calendar } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: '6 Week Shred Challenge', provider: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/six-week-shred' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the 6 Week Shred?', acceptedAnswer: { '@type': 'Answer', text: 'The 6 Week Shred is a fitness challenge with quick 20-minute workouts designed for busy professionals who want results without spending hours in the gym.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const weeks = [
  { week: 'Weeks 1-2', title: 'Foundation', desc: 'Build the base. Learn proper form, establish workout habits, and set your nutrition framework.' },
  { week: 'Weeks 3-4', title: 'Intensity', desc: 'Ramp up. Increase workout intensity, add progressive overload, and dial in nutrition timing.' },
  { week: 'Weeks 5-6', title: 'Shred', desc: 'Peak performance. Maximum intensity workouts, fine-tuned nutrition, and the final push to your transformation.' },
]

const faqs = [
  { question: 'What is the 6 Week Shred?', answer: 'The 6 Week Shred is a focused fitness challenge built around quick 20-minute workouts designed for busy professionals. The program combines high-intensity training, nutrition guidance, and accountability to deliver visible results in just 6 weeks.' },
  { question: 'Are the workouts really only 20 minutes?', answer: 'Yes. Every workout is designed to be completed in 20 minutes or less. The key is intensity — these are not leisurely sessions. Every minute is programmed for maximum calorie burn and muscle engagement. Quality over quantity, always.' },
  { question: 'What equipment do I need?', answer: 'Minimal. Most workouts can be done with bodyweight only. Optional equipment includes dumbbells, resistance bands, and a mat. The program is designed to work anywhere — home, hotel room, office, or gym.' },
  { question: 'Is the 6 Week Shred for beginners?', answer: 'Yes. All workouts include modifications for different fitness levels. Whether you\'re a complete beginner or an experienced athlete, the program adapts to challenge you at your current level.' },
  { question: 'What results can I expect in 6 weeks?', answer: 'Committed participants typically see noticeable fat loss, improved muscle definition, significantly increased energy, better sleep quality, and a stronger relationship with exercise. The mindset shift is often the biggest transformation.' },
  { question: 'How is this different from the 12-week Million Dollar Body program?', answer: 'The 6 Week Shred is a shorter, more intense sprint focused on quick workouts and rapid results. Million Dollar Body Academy is a comprehensive 12-week transformation with deeper nutrition coaching, mindset work, and progressive programming. The Shred is perfect for a jumpstart; MDB is the full lifestyle overhaul.' },
]

export default function SixWeekShredPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/fitness-alt.jpg" alt="Six Week Shred" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Six Week Shred</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">An intensive 6-week body transformation program combining fitness, nutrition, and mindset coaching.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The 6-Week Progression</h2>
          <div className="space-y-6">
            {weeks.map((w) => (
              <div key={w.week} className="bg-gray-50 rounded-2xl p-8">
                <span className="text-[#34c5c5] font-bold text-sm uppercase">{w.week}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{w.title}</h3>
                <p className="text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 20 Minutes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why 20 Minutes Works</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Research shows that short, high-intensity workouts produce equal or better results than longer moderate sessions for fat loss, metabolic health, and cardiovascular fitness.</p>
              <p className="text-gray-600 leading-relaxed mb-6">The 6 Week Shred leverages this science with carefully programmed intervals, compound movements, and metabolic finishers that keep your body burning calories long after the workout ends.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ num: '20', label: 'Minutes per workout' }, { num: '6', label: 'Weeks to transform' }, { num: '5', label: 'Sessions per week' }, { num: '24h+', label: 'Afterburn effect' }].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[#34c5c5]">{s.num}</div>
                    <div className="text-gray-600 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/krystalore-fitness.webp" alt="Krystalore Crews fitness" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="6 Week Shred FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">20 Minutes. No Excuses.</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">If you have 20 minutes, you have time to change your body. The only question is whether you&apos;ll start.</p>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Start the Shred</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/fitness" className="hover:text-white">Beyond Limits</Link>
            <Link href="/million-dollar-body" className="hover:text-white">Million Dollar Body</Link>
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
            <Link href="/leg-workouts-from-home" className="hover:text-white">Leg Workouts</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
