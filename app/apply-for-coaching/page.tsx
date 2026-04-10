'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { CheckCircle, Heart, Target, Brain, Users, Star } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: 'Apply for Coaching with Krystalore Crews', url: 'https://krystalore.com/apply-for-coaching' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'How do I apply for coaching with Krystalore?', acceptedAnswer: { '@type': 'Answer', text: 'Complete the coaching application form on this page. Share your goals, current situation, and what you want to achieve. Krystalore will review your application and reach out to schedule a discovery call.' } },
      { '@type': 'Question', name: 'What types of coaching does Krystalore offer?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore offers executive coaching, entrepreneur coaching, mindset coaching, emotional intelligence coaching, somatic healing, and private 1-on-1 sessions. Programs range from single sessions to 6-month transformational engagements.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'How do I apply for coaching with Krystalore?', answer: 'Complete the coaching application form on this page. Share your goals, current situation, and what you\'re looking to achieve. Krystalore personally reviews every application and will reach out to schedule a free discovery call to determine if coaching is the right fit.' },
  { question: 'What types of coaching does Krystalore offer?', answer: 'Executive coaching, entrepreneur coaching, C-suite coaching, mindset coaching, emotional intelligence coaching, somatic healing, fitness coaching, and private 1-on-1 sessions. Programs range from single strategy sessions to comprehensive 6-month transformational engagements.' },
  { question: 'How much does coaching cost?', answer: 'Coaching investment varies based on program type, duration, and format. Options range from group coaching programs to premium 1-on-1 executive packages. After your discovery call, you\'ll receive a customized proposal with pricing and payment plan options.' },
  { question: 'Is there a free consultation?', answer: 'Yes. After submitting your application, you\'ll be invited to a free discovery call where Krystalore will learn about your goals, assess fit, and recommend the right program for your situation. There\'s no obligation.' },
  { question: 'What results can I expect from coaching?', answer: 'Results vary, but clients typically experience greater clarity on their vision and goals, improved confidence and decision-making, better work-life balance, enhanced leadership skills, stronger relationships, and measurable progress toward specific objectives within 90 days.' },
  { question: 'Do you offer virtual coaching?', answer: 'Yes. All coaching programs are available virtually via video call. Virtual coaching is highly effective and allows flexibility regardless of location. In-person and retreat-based options are also available.' },
]

export default function ApplyForCoachingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/coaching.jpg" alt="Apply for Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Apply for Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Ready to transform your leadership, mindset, and life? Take the first step and apply for a free discovery call with Krystalore.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* GHL Widget */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
            <p className="text-gray-600 text-lg">Fill out the form below. Every application is personally reviewed by Krystalore.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 shadow-xl">
            <iframe
              src="https://link.elite360.io/widget/group/VHMVUoVUFzFeuFXSNJuj"
              style={{ width: '100%', minHeight: '800px', border: 'none' }}
              scrolling="yes"
              title="Coaching Application Form"
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens After You Apply</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Application Review', desc: 'Krystalore personally reviews every application within 48 hours.' },
                  { step: '2', title: 'Discovery Call', desc: 'You\'ll be invited to a free 30-minute discovery call to discuss goals and fit.' },
                  { step: '3', title: 'Custom Proposal', desc: 'Receive a tailored coaching proposal with program options and pricing.' },
                  { step: '4', title: 'Begin Your Journey', desc: 'Start your transformation with your first coaching session.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">{s.step}</span>
                    <div><h3 className="font-bold text-gray-900">{s.title}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/apply-coaching/coaching-apply-2.jpg" alt="Coaching session" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Coaching Application FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Best Investment Is in Yourself</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">Don&apos;t wait for the perfect moment. Apply now and take the first step toward the life and leadership you&apos;ve been building toward.</p>
          <div className="flex flex-wrap gap-6 justify-center text-teal-100 text-sm">
            <Link href="/c-suite-executive-coaching" className="hover:text-white">C-Suite Coaching</Link>
            <Link href="/private-mindset" className="hover:text-white">Private Mindset</Link>
            <Link href="/entrepreneur-coaching" className="hover:text-white">Entrepreneur Coaching</Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">EQ Training</Link>
            <Link href="/book" className="hover:text-white">Book a Call</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
