'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart, Users, MessageCircle, Shield, Brain, Sparkles,
  CheckCircle, ChevronDown, ChevronUp, Star, BookOpen,
  Mountain, Compass, Flame, Target, Lightbulb,
  MapPin, Music, Palette, Home, DollarSign, Clock
} from 'lucide-react'

function RelationshipCoachingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Relationship Coaching by Krystalore Crews',
        description: 'Expert relationship coaching helping couples build communication skills, emotional intelligence, conflict resolution, and deeper connection.',
        provider: {
          '@type': 'Person',
          name: 'Krystalore Crews',
          jobTitle: 'Certified Relationship Coach & CEO',
          worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        },
        serviceType: 'Relationship Coaching',
        areaServed: 'US',
        url: 'https://executive-krystalore.vercel.app/relationship-coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is relationship coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Relationship coaching is a forward-focused process where a trained coach helps couples or individuals improve their relationship skills, communication patterns, and emotional connection. Unlike therapy, coaching focuses on goals, action plans, and building new habits rather than diagnosing or treating mental health conditions.' } },
          { '@type': 'Question', name: 'How can coaching help my marriage?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching helps your marriage by providing practical communication frameworks, conflict resolution strategies, and tools for rebuilding trust and intimacy. Couples learn to understand each other\'s needs, create shared goals, and develop daily habits that strengthen their bond over time.' } },
          { '@type': 'Question', name: 'What is emotional intelligence in relationships?', acceptedAnswer: { '@type': 'Answer', text: 'Emotional intelligence in relationships is the ability to recognize, understand, and manage your own emotions while also empathizing with your partner\'s feelings. High EQ leads to better communication, fewer destructive arguments, and deeper emotional intimacy.' } },
          { '@type': 'Question', name: 'How is relationship coaching different from couples therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching is action-oriented and future-focused, helping couples build skills and achieve goals. Therapy typically addresses past trauma, mental health diagnoses, and deep-rooted psychological patterns. Many couples benefit from both simultaneously.' } },
          { '@type': 'Question', name: 'How long does relationship coaching take?', acceptedAnswer: { '@type': 'Answer', text: 'Most couples see meaningful improvement within 8-12 sessions. Some specific issues can be addressed in 4-6 sessions, while deeper transformation may take 6 months or more. Krystalore offers flexible packages to match your timeline and goals.' } },
          { '@type': 'Question', name: 'Can relationship coaching help if only one partner participates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When one partner develops better communication skills, emotional regulation, and self-awareness, it naturally shifts the dynamic of the entire relationship. Individual coaching can be a powerful catalyst for change even when your partner isn\'t ready to participate.' } },
          { '@type': 'Question', name: 'What are the 5 C\'s of relationships?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore\'s 5 C\'s framework applied to relationships includes: Core (knowing your values and identity), Consistency (showing up daily), Confidence (trusting yourself and your partner), Community (building a supportive network), and Celebration (acknowledging growth and milestones together).' } },
          { '@type': 'Question', name: 'How much does relationship coaching cost?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching packages vary based on format and duration. Individual sessions, couples packages, and intensive retreat options are available. Contact Krystalore for current pricing and payment plan options.' } },
          { '@type': 'Question', name: 'What topics does relationship coaching cover?', acceptedAnswer: { '@type': 'Answer', text: 'Common topics include communication skills, conflict resolution, trust rebuilding, emotional intimacy, love languages, shared goal-setting, parenting alignment, financial harmony, maintaining individuality, and rekindling romance.' } },
          { '@type': 'Question', name: 'Is relationship coaching available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Krystalore offers virtual coaching sessions via video call, making expert relationship coaching accessible regardless of location. Virtual sessions are just as effective as in-person coaching for most couples.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</div>}
    </div>
  )
}

const dateNightIdeas = [
  { category: 'Adventure', icon: Mountain, items: ['Sunset hike with a picnic at the top', 'Go-kart racing or indoor rock climbing', 'Kayaking or paddleboarding together', 'Explore a new neighborhood or town', 'Take a spontaneous road trip'] },
  { category: 'Romance', icon: Heart, items: ['Candlelit dinner at home with a new recipe', 'Stargazing with blankets and hot chocolate', 'Write love letters to each other', 'Couples massage (at home or spa)', 'Recreate your first date'] },
  { category: 'Learning', icon: BookOpen, items: ['Take a cooking class together', 'Attend a wine or cocktail tasting', 'Visit a museum or art gallery', 'Learn a new dance style (salsa, swing)', 'Start a book club for two'] },
  { category: 'At-Home', icon: Home, items: ['Build a blanket fort and watch movies', 'Have a game night (board games or video games)', 'Cook a meal from a different culture', 'Do a puzzle together with music and wine', 'Create a couples vision board'] },
  { category: 'Budget-Friendly', icon: DollarSign, items: ['Pack a picnic for the park', 'Have a sunrise coffee date', 'Volunteer together at a local charity', 'Take a free community class', 'Create a photo walk challenge'] },
]

export default function RelationshipCoachingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const faqs = [
    { question: 'What is relationship coaching?', answer: 'Relationship coaching is a forward-focused process where a trained coach helps couples or individuals improve their relationship skills, communication patterns, and emotional connection. Unlike therapy, coaching focuses on goals, action plans, and building new habits rather than diagnosing or treating mental health conditions. Krystalore Crews brings real-world experience as a military spouse, entrepreneur, and mother to every coaching session.' },
    { question: 'How can coaching help my marriage?', answer: 'Coaching helps your marriage by providing practical communication frameworks, conflict resolution strategies, and tools for rebuilding trust and intimacy. You\'ll learn to understand each other\'s needs, create shared goals, and develop daily habits that strengthen your bond. Couples consistently report improved communication, renewed emotional intimacy, and a clearer shared vision after working with Krystalore.' },
    { question: 'What is emotional intelligence in relationships?', answer: 'Emotional intelligence (EQ) in relationships is the ability to recognize, understand, and manage your own emotions while also empathizing with your partner\'s feelings. High EQ leads to better communication, fewer destructive arguments, deeper emotional intimacy, and greater relationship satisfaction. Coaching helps you develop all four pillars of EQ: self-awareness, self-management, social awareness, and relationship management.' },
    { question: 'How is relationship coaching different from couples therapy?', answer: 'Coaching is action-oriented and future-focused, helping couples build skills and achieve specific relationship goals. Therapy typically addresses past trauma, mental health diagnoses, and deep-rooted psychological patterns. Many couples benefit from both simultaneously — therapy for healing and coaching for growth. Krystalore\'s coaching is not a substitute for licensed therapy.' },
    { question: 'How long does relationship coaching take?', answer: 'Most couples see meaningful improvement within 8-12 sessions. Some specific issues can be addressed in 4-6 sessions, while deeper transformation may take 6 months or more. Krystalore offers flexible packages to match your timeline and goals, including intensive retreat options for accelerated results.' },
    { question: 'Can relationship coaching help if only one partner participates?', answer: 'Absolutely. When one partner develops better communication skills, emotional regulation, and self-awareness, it naturally shifts the dynamic of the entire relationship. Individual coaching can be a powerful catalyst for positive change even when your partner isn\'t ready to participate directly.' },
    { question: 'What are the 5 C\'s of relationships?', answer: 'Krystalore\'s 5 C\'s framework applied to relationships includes: Core (knowing your individual values and identity), Consistency (showing up for each other daily), Confidence (trusting yourself and your partner), Community (building a supportive network around your relationship), and Celebration (acknowledging growth, milestones, and each other regularly).' },
    { question: 'How much does relationship coaching cost?', answer: 'Coaching packages vary based on format (individual vs. couples), duration, and intensity. Options range from single sessions to comprehensive multi-month packages and intensive retreat experiences. Contact Krystalore for current pricing and payment plan options tailored to your needs.' },
    { question: 'What topics does relationship coaching cover?', answer: 'Common topics include communication skills, conflict resolution, trust rebuilding, emotional intimacy, love languages, shared goal-setting, parenting alignment, financial harmony, maintaining individuality within partnership, and rekindling romance. Each coaching engagement is customized to your specific relationship needs and goals.' },
    { question: 'Is relationship coaching available online?', answer: 'Yes. Krystalore offers virtual coaching sessions via video call, making expert relationship coaching accessible regardless of your location. Virtual sessions are just as effective as in-person coaching for most couples. In-person coaching and retreat options are also available for those who prefer face-to-face connection.' },
  ]

  const coachingAreas = [
    { icon: MessageCircle, title: 'Communication Skills', description: 'Learn active listening, non-violent communication, and how to express needs without triggering defensiveness. Transform how you talk — and how you hear each other.' },
    { icon: Shield, title: 'Conflict Resolution', description: 'Replace destructive argument patterns with productive dialogue. Learn de-escalation techniques, repair conversations, and how to fight fair.' },
    { icon: Brain, title: 'Emotional Intelligence', description: 'Develop self-awareness, empathy, and emotional regulation. Understand your triggers and learn to respond rather than react in heated moments.' },
    { icon: Heart, title: 'Trust Rebuilding', description: 'Whether trust was broken by betrayal, neglect, or gradual erosion, learn the step-by-step process of rebuilding a foundation of safety and security.' },
    { icon: Target, title: 'Shared Goal Setting', description: 'Align on your vision for the future — finances, family, career, lifestyle. Create a roadmap you both believe in and can work toward together.' },
    { icon: Flame, title: 'Intimacy & Connection', description: 'Rekindle emotional and physical intimacy. Learn love languages, create rituals of connection, and prioritize your partnership amidst busy lives.' },
  ]

  const fiveCsRelationship = [
    { letter: 'C', word: 'Core', description: 'Know who you are individually. A strong relationship starts with two people grounded in their own values, identity, and purpose.' },
    { letter: 'C', word: 'Consistency', description: 'Show up every day — not just during crises. Small, consistent acts of love and attention build unshakeable trust over time.' },
    { letter: 'C', word: 'Confidence', description: 'Trust yourself, trust your partner, and trust the process. Confidence in your relationship comes from open communication and proven reliability.' },
    { letter: 'C', word: 'Community', description: 'No couple is an island. Surround yourselves with supportive friends, mentors, and communities that uplift your relationship.' },
    { letter: 'C', word: 'Celebration', description: 'Acknowledge wins — big and small. Celebrate milestones, express gratitude, and make joy a regular part of your relationship.' },
  ]

  return (
    <>
      <RelationshipCoachingJsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/group-sunset.jpg" alt="Relationship Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Relationship Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Transform your relationships through deeper communication, emotional intelligence, and authentic connection.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* Relationship Training */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Relationship Training & Coaching</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive coaching that addresses every dimension of your relationship — from daily communication to long-term vision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingAreas.map((area) => (
              <div key={area.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <area.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Relationship?</h2>
          <p className="text-teal-50 text-lg mb-8">Whether you need a tune-up or a complete remodel, coaching gives you the tools to build the relationship you deserve.</p>
          <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Relationship Management - 5 C's */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Relationship Management: The 5 C&apos;s Framework</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Krystalore&apos;s proven 5 C&apos;s framework isn&apos;t just for business — it&apos;s a powerful system for building and managing healthy, thriving relationships.</p>
          </div>
          <div className="space-y-6">
            {fiveCsRelationship.map((c, i) => (
              <div key={c.word} className="bg-white rounded-2xl p-8 shadow-sm flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#34c5c5] to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{c.word}</h3>
                  <p className="text-gray-600 leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="text-[#34c5c5] font-semibold hover:underline text-lg">
              Explore the Full 5 C&apos;s Framework in Our Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Improve My Marriage */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Improve Your Marriage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every marriage goes through seasons. Whether you&apos;re navigating a rough patch or simply want to deepen what you already have, intentional effort makes the difference between a marriage that survives and one that thrives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Krystalore&apos;s coaching approach focuses on practical, daily actions: improving how you communicate, rebuilding trust through consistency, rediscovering what drew you together, and creating shared goals that excite you both.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Steps to Strengthen Your Marriage:</h3>
              <ul className="space-y-3 mb-8">
                {['Schedule weekly check-ins (not about logistics)', 'Practice the 5:1 ratio — five positive interactions for every negative one', 'Learn each other\'s love language and speak it daily', 'Create shared rituals and traditions', 'Address resentments before they calcify', 'Prioritize date nights — consistency matters more than extravagance', 'Seek coaching or support before you reach a crisis point'].map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/quizzes/marriage-family" className="bg-[#34c5c5] hover:bg-teal-600 text-white font-bold rounded-xl px-6 py-3 transition-all hover:scale-105">
                  Marriage & Family Quiz
                </Link>
                <Link href="/quizzes/couples-compatibility" className="bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl px-6 py-3 transition-all hover:scale-105">
                  Couples Compatibility Quiz
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews relationship coaching" width={500} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Intelligence */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emotional Intelligence in Relationships</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Research shows that emotional intelligence is the single greatest predictor of relationship success — more than compatibility, attraction, or shared interests.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Self-Awareness', description: 'Recognize your emotional triggers, attachment patterns, and how your behavior impacts your partner.' },
              { title: 'Self-Management', description: 'Regulate your emotions during conflict. Pause before reacting. Choose responses that build rather than destroy.' },
              { title: 'Social Awareness', description: 'Read your partner\'s emotional state. Develop empathy and attunement to their needs, even unspoken ones.' },
              { title: 'Relationship Management', description: 'Navigate difficult conversations with skill. Influence positively. Build a culture of mutual respect and appreciation.' },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/quizzes/emotional-intelligence" className="bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
              Take the Emotional Intelligence Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Date Night Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-[#E8A849] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Date Night Checklist</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Consistent quality time is the lifeblood of a thriving relationship. Check off ideas as you try them — aim for at least two per month!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dateNightIdeas.map((category) => (
              <div key={category.category} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#E8A849]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => {
                    const key = `${category.category}-${item}`
                    return (
                      <li key={item}>
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex items-start gap-3 w-full text-left group"
                        >
                          <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${checkedItems[key] ? 'bg-[#34c5c5] border-[#34c5c5]' : 'border-gray-300 group-hover:border-[#34c5c5]'}`}>
                            {checkedItems[key] && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm leading-relaxed transition-colors ${checkedItems[key] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">✨ {Object.values(checkedItems).filter(Boolean).length} of {dateNightIdeas.reduce((sum, c) => sum + c.items.length, 0)} completed</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Deeper Support?</h2>
          <p className="text-teal-50 text-lg mb-8">Sometimes a checklist isn&apos;t enough. If your relationship needs real transformation, coaching and retreats provide the breakthrough you&apos;re looking for.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105">
              Contact Krystalore
            </a>
            <Link href="/couples-retreats" className="border-2 border-white/80 text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-white/10 transition-all">
              Explore Couples Retreats
            </Link>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Relationship Quizzes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Free assessments to help you understand your relationship dynamics, strengths, and areas for growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Couples Compatibility', description: 'Discover how compatible you and your partner are across key dimensions.', href: '/quizzes/couples-compatibility', icon: Heart, color: 'bg-pink-500' },
              { title: 'Marriage & Family', description: 'Assess the health of your marriage and family dynamics.', href: '/quizzes/marriage-family', icon: Users, color: 'bg-rose-500' },
              { title: 'Emotional Intelligence', description: 'Evaluate your ability to understand and manage emotions.', href: '/quizzes/emotional-intelligence', icon: Brain, color: 'bg-purple-500' },
              { title: 'Relationship Management', description: 'Assess your skills in building and maintaining relationships.', href: '/quizzes/relationship-management', icon: Compass, color: 'bg-blue-500' },
            ].map((quiz) => (
              <Link key={quiz.title} href={quiz.href} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 group">
                <div className={`w-12 h-12 ${quiz.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <quiz.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
                <span className="text-[#34c5c5] font-semibold text-sm">Take Quiz →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about relationship coaching.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#34c5c5] via-teal-500 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Relationship Is Worth Fighting For</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            The fact that you&apos;re here means you care. That&apos;s the first step. Let Krystalore help you take the next one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Get Started with Coaching
            </a>
            <a href="https://krystalore.com/corporate-retreat-planning/" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Plan a Couples Retreat
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/couples-retreats" className="hover:text-white">Couples Retreats</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/books" className="hover:text-white">Books</Link>
            <Link href="/quizzes" className="hover:text-white">All Quizzes</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews" width={120} height={120} className="mx-auto mb-4" />
          <p className="text-sm mb-2">© {new Date().getFullYear()} Crews Beyond Limits. All rights reserved.</p>
          <p className="text-xs text-gray-500">Redefine What&apos;s Possible — Mind, Body, and Beyond</p>
        </div>
      </footer>
    </>
  )
}
