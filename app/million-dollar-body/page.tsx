'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Dumbbell, Brain, Heart, Target, CheckCircle, Zap, Award, Clock } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: 'Million Dollar Body Academy', provider: { '@type': 'Person', name: 'Krystalore Crews' }, description: '12-week body and mindset transformation program.', url: 'https://krystalore.com/million-dollar-body' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is Million Dollar Body Academy?', acceptedAnswer: { '@type': 'Answer', text: 'A comprehensive 12-week transformation program combining training, nutrition, mindset coaching, and accountability to build your best body and strongest mindset.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const pillars = [
  { icon: Dumbbell, title: 'Training', description: 'Progressive workout programming designed for real results. Strength, HIIT, and functional fitness customized to your level.' },
  { icon: Heart, title: 'Nutrition', description: 'Sustainable nutrition guidance — not crash diets. Learn to fuel your body for performance, energy, and lasting transformation.' },
  { icon: Brain, title: 'Mindset', description: 'The real transformation happens between your ears. Mindset coaching to break through limiting beliefs and build unshakable confidence.' },
  { icon: Target, title: 'Accountability', description: 'Weekly check-ins, community support, and personal tracking to keep you on track when motivation fades.' },
]

const faqs = [
  { question: 'What is Million Dollar Body Academy?', answer: 'Million Dollar Body Academy is a comprehensive 12-week transformation program that combines progressive training, sustainable nutrition, mindset coaching, and community accountability. It\'s not a quick fix — it\'s a lifestyle overhaul designed to build your best body and strongest mindset simultaneously.' },
  { question: 'What does the 12-week program include?', answer: 'The program includes structured weekly training plans, nutrition guidance and meal frameworks, weekly mindset coaching sessions, accountability check-ins, before/after assessments, access to the Crews Beyond Limits community, and personal support from Krystalore throughout the journey.' },
  { question: 'Do I need gym access?', answer: 'Both gym and home workout versions are available. The program adapts to your available equipment — from bodyweight-only to full gym setups. Results come from consistency and effort, not fancy equipment.' },
  { question: 'Is this program for beginners?', answer: 'Yes. Million Dollar Body Academy meets you at your current fitness level. All workouts include modifications for beginners and progressions for advanced participants. The mindset component is universal — everyone benefits from stronger mental fitness.' },
  { question: 'How is this different from other fitness programs?', answer: 'Most fitness programs focus only on the body. Million Dollar Body integrates training, nutrition, AND mindset — because sustainable transformation requires all three. Krystalore brings real-world experience from 27 marathons, NFL cheerleading, and overcoming a wheelchair-bound injury.' },
  { question: 'What results can I expect in 12 weeks?', answer: 'Results vary, but committed participants typically see significant body composition changes (fat loss + muscle gain), dramatic increases in energy and confidence, improved sleep and stress management, and a complete mindset shift around health and self-image.' },
]

export default function MillionDollarBodyPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/fitness.jpg" alt="Million Dollar Body" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Million Dollar Body</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">The premium fitness and mindset program designed to build a body and life that commands respect.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* 4 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The 4 Pillars of Transformation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-4 mx-auto"><p.icon className="w-7 h-7 text-[#34c5c5]" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Real Transformations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/million-dollar-body/mdb-before-after.png', alt: 'Before and after transformation' },
              { src: '/images/million-dollar-body/mdb-results-1.png', alt: 'MDB results' },
              { src: '/images/million-dollar-body/mdb-results-2.png', alt: 'Body transformation results' },
              { src: '/images/million-dollar-body/mdb-results-3.png', alt: 'Fitness transformation' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/million-dollar-body/mdb-training.png" alt="MDB training program" fill className="object-cover object-center" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/million-dollar-body/mdb-nutrition.png" alt="MDB nutrition plan" fill className="object-cover object-center" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/million-dollar-body/mdb-mindset.png" alt="MDB mindset coaching" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/Pc8N32Wa_pI" title="Million Dollar Body Academy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Million Dollar Body FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">12 Weeks From Now, You&apos;ll Wish You Started Today</h2>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Start Your Transformation</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/fitness" className="hover:text-white">Beyond Limits</Link>
            <Link href="/six-week-shred" className="hover:text-white">6 Week Shred</Link>
            <Link href="/bombshell-bootcamp" className="hover:text-white">Bombshell Bootcamp</Link>
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
