'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Brain, Heart, Users, Eye, Shield, Sparkles, Target, CheckCircle } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: 'Emotional Intelligence Training for Leaders', provider: { '@type': 'Person', name: 'Krystalore Crews' }, description: 'Expert EQ training workshops and assessments for leaders and teams.', url: 'https://krystalore.com/emotional-intelligence-training' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is emotional intelligence training?', acceptedAnswer: { '@type': 'Answer', text: 'Emotional intelligence training develops your ability to recognize, understand, manage, and effectively use emotions in yourself and others. For leaders, EQ is the #1 predictor of leadership effectiveness.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const pillars = [
  { icon: Eye, title: 'Self-Awareness', description: 'Recognize your emotional patterns, triggers, and their impact on decisions and relationships.' },
  { icon: Shield, title: 'Self-Regulation', description: 'Manage impulses, maintain composure under pressure, and respond rather than react.' },
  { icon: Target, title: 'Motivation', description: 'Channel emotional energy toward goals with resilience, optimism, and intrinsic drive.' },
  { icon: Heart, title: 'Empathy', description: 'Read and respond to others\' emotions accurately, building trust and deeper connections.' },
  { icon: Users, title: 'Social Skills', description: 'Navigate complex relationships, resolve conflicts, and influence others with authenticity.' },
]

const faqs = [
  { question: 'What is emotional intelligence training?', answer: 'Emotional intelligence (EQ) training develops your ability to recognize, understand, manage, and effectively use emotions in yourself and others. For leaders, EQ is the #1 predictor of leadership effectiveness — more than IQ, technical skills, or experience. Training includes self-awareness assessments, regulation techniques, empathy development, and social skills practice.' },
  { question: 'Why is emotional intelligence important for leaders?', answer: 'Research shows EQ accounts for 58% of job performance across all types of positions. Leaders with high EQ build stronger teams, make better decisions under pressure, navigate conflict effectively, retain top talent, and create psychologically safe work environments. It\'s the foundation of transformational leadership.' },
  { question: 'How is EQ different from IQ?', answer: 'IQ measures cognitive intelligence — problem-solving, analytical thinking, and knowledge. EQ measures emotional intelligence — self-awareness, empathy, self-regulation, motivation, and social skills. While IQ is largely fixed, EQ can be developed and improved at any age through training and practice.' },
  { question: 'What does Krystalore\'s EQ training include?', answer: 'Training includes EQ assessments (baseline measurement), self-awareness workshops, somatic awareness practices, emotional regulation techniques, empathy-building exercises, conflict resolution frameworks, communication skills development, and leadership application labs. Programs range from half-day workshops to multi-month coaching engagements.' },
  { question: 'Can emotional intelligence be learned?', answer: 'Absolutely. Unlike IQ, emotional intelligence is a learnable skill set. Neuroplasticity research confirms that emotional patterns can be rewired through awareness, practice, and repetition. Most participants see measurable EQ improvements within 8-12 weeks of consistent training.' },
  { question: 'How do you measure emotional intelligence?', answer: 'We use validated EQ assessment tools that measure the five core pillars: self-awareness, self-regulation, motivation, empathy, and social skills. Pre and post assessments track growth, and 360-degree feedback from colleagues provides real-world validation of improvement.' },
  { question: 'Is EQ training available for teams?', answer: 'Yes. Team EQ training is one of our most popular offerings. It includes team EQ assessments, communication style mapping, conflict resolution workshops, trust-building exercises, and ongoing team coaching. This is especially powerful for leadership teams and cross-functional groups.' },
  { question: 'How does somatic healing relate to emotional intelligence?', answer: 'Somatic healing addresses emotions stored in the body. Trauma, stress, and unprocessed emotions manifest physically and affect your EQ capacity. Krystalore integrates somatic awareness into EQ training, helping leaders release stored tension and access deeper emotional intelligence.' },
]

export default function EmotionalIntelligenceTrainingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/coaching.jpg" alt="Emotional Intelligence Training" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Emotional Intelligence Training</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Master the skill that separates good leaders from great ones. Build self-awareness, empathy, and social intelligence.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* 5 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">The 5 Pillars of Emotional Intelligence</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Master these five dimensions and transform your leadership, relationships, and personal effectiveness.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-4 mx-auto"><p.icon className="w-7 h-7 text-[#34c5c5]" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Somatic Healing Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Somatic Healing & EQ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Krystalore integrates somatic healing into emotional intelligence training. Your body stores emotions — trauma, stress, and unprocessed experiences live in your nervous system and affect how you lead, communicate, and make decisions.</p>
              <p className="text-gray-600 leading-relaxed">Through somatic awareness practices, leaders learn to release stored tension, access deeper emotional intelligence, and show up fully present in high-stakes situations.</p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe src="https://www.youtube.com/embed/1nDPdZd21VE" title="Somatic Healing with Krystalore Crews" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/krystalore-coaching-headshot.jpg" alt="Krystalore Crews EQ trainer" fill className="object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Krystalore for EQ Training?</h2>
              <ul className="space-y-3">
                {['Certified Emotional Intelligence Coach & Trainer', 'Somatic Healer with trauma-informed approach', '22 years of military leadership experience', 'Worked with Fortune 500 teams and C-suite executives', 'Published author on resilience and leadership', 'Real-world experience, not just theory'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Emotional Intelligence Training FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">EQ Is the Unfair Advantage</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">The leaders who win aren&apos;t the smartest. They&apos;re the most emotionally intelligent. Invest in the skill that multiplies every other skill.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Book EQ Training</Link>
            <Link href="/apply-for-coaching" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Apply for Coaching</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/leadership-training" className="hover:text-white">Leadership Training</Link>
            <Link href="/c-suite-executive-coaching" className="hover:text-white">C-Suite Coaching</Link>
            <Link href="/private-mindset" className="hover:text-white">Private Mindset</Link>
            <Link href="/workshops" className="hover:text-white">Workshops</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
