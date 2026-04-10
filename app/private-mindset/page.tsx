'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Brain, Heart, Shield, Target, Sparkles, CheckCircle, Lock } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: 'Private Mindset Coaching', provider: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/private-mindset' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is private mindset coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Private mindset coaching is 1-on-1 sessions with Krystalore Crews focused on breaking through limiting beliefs, building confidence, overcoming obstacles, and creating lasting mental frameworks for success.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is private mindset coaching?', answer: 'Private mindset coaching is 1-on-1 confidential sessions with Krystalore Crews focused on breaking through limiting beliefs, building unshakable confidence, overcoming personal and professional obstacles, and creating lasting mental frameworks for success. Sessions integrate cognitive coaching, somatic healing, and practical strategy.' },
  { question: 'How are private sessions structured?', answer: 'Sessions are typically 60 minutes via video call. Each session is tailored to your current needs — some focus on strategy, others on emotional processing, somatic work, or breakthrough exercises. There\'s no cookie-cutter format; coaching meets you where you are.' },
  { question: 'Who is private mindset coaching for?', answer: 'Executives, entrepreneurs, athletes, military veterans, and anyone who knows they\'re capable of more but can\'t seem to break through on their own. If you\'re successful on paper but unfulfilled inside, or if you\'re facing a transition that feels overwhelming, private coaching is for you.' },
  { question: 'How often should I have coaching sessions?', answer: 'Most clients meet weekly or bi-weekly. Intensive transformation often happens with weekly sessions for 3-6 months. Maintenance and tune-up clients may meet monthly. Frequency is flexible based on your needs and goals.' },
  { question: 'Is private coaching confidential?', answer: 'Absolutely. All sessions are strictly confidential. Krystalore operates under professional coaching ethics. What you share in coaching stays in coaching. This is your safe space.' },
  { question: 'What does somatic healing involve?', answer: 'Somatic healing addresses emotions and trauma stored in the body. Through breathwork, body awareness exercises, and nervous system regulation techniques, somatic work releases physical manifestations of stress, anxiety, and past experiences that block growth.' },
  { question: 'How do I get started?', answer: 'Apply for coaching through our application page or book a free discovery call. Krystalore will assess your goals, current situation, and recommend the right coaching format for your needs.' },
]

export default function PrivateMindsetPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/meditation.webp" alt="Private Mindset Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Private Mindset Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">One-on-one mindset transformation sessions designed to break through limiting beliefs and unlock your highest potential.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* What We Work On */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What We Work On Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/images/private-mindset/mindset-coaching-1.png', alt: 'Mindset breakthrough', title: 'Breakthrough Beliefs', desc: 'Identify and dismantle the limiting beliefs running your life on autopilot.' },
              { src: '/images/private-mindset/mindset-coaching-2.png', alt: 'Confidence building', title: 'Build Confidence', desc: 'Develop unshakable self-trust through evidence-based confidence architecture.' },
              { src: '/images/private-mindset/mindset-coaching-3.png', alt: 'Somatic healing', title: 'Somatic Integration', desc: 'Release stored trauma and tension that blocks your emotional and mental capacity.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image src={item.src} alt={item.alt} fill className="object-cover object-center" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Somatic Healing Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Somatic Healing: The Body Keeps the Score</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/1nDPdZd21VE" title="Somatic Healing with Krystalore Crews" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Private Mindset Coaching FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Mind Is Either Your Greatest Weapon or Your Biggest Obstacle</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">Private mindset coaching with Krystalore gives you the tools to make it the former. Every single time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-for-coaching" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Apply Now</Link>
            <Link href="/book" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Book a Call</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/c-suite-executive-coaching" className="hover:text-white">C-Suite Coaching</Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">EQ Training</Link>
            <Link href="/bombshell-bootcamp" className="hover:text-white">Bombshell Bootcamp</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
