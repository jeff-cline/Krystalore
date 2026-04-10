'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Users, Brain, Target, Compass, Flame,
  CheckCircle, ChevronDown, ChevronUp, Star, BookOpen,
  Heart, Briefcase, Award, Flag, Home, Lightbulb,
  MapPin, Swords, UserCheck, HandHelping
} from 'lucide-react'

function VeteranCoachingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Veteran & Military Family Coaching by Krystalore Crews',
        description: 'Expert coaching for veterans, transitioning service members, and military families. Covering military-to-civilian transition, leadership development, career pivoting, family resilience, and mental wellness.',
        provider: {
          '@type': 'Person',
          name: 'Krystalore Crews',
          jobTitle: 'CEO & Certified Coach',
          worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        },
        serviceType: 'Veteran Coaching',
        areaServed: 'US',
        url: 'https://executive-krystalore.vercel.app/veteran-coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is veteran coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Veteran coaching is a forward-focused process that helps veterans, transitioning service members, and military families navigate the challenges of military-to-civilian transition. Unlike therapy, coaching focuses on goal-setting, action plans, identity development, and translating military skills into civilian success. Krystalore Crews brings firsthand understanding as a military spouse and advocate.' } },
          { '@type': 'Question', name: 'How does coaching help with military-to-civilian transition?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching addresses the key challenges of transition: rebuilding identity beyond rank and service, translating military skills for civilian employers, navigating career pivots, managing the emotional weight of leaving service, and building new community connections. A coach provides structure, accountability, and strategies tailored to the veteran experience.' } },
          { '@type': 'Question', name: 'Is veteran coaching the same as therapy or counseling?', acceptedAnswer: { '@type': 'Answer', text: 'No. Veteran coaching is action-oriented and future-focused, helping you build new skills, set goals, and create forward momentum. Therapy addresses mental health diagnoses, trauma processing, and past experiences. Many veterans benefit from both — coaching for growth and therapy for healing. Krystalore always recommends professional mental health support when appropriate.' } },
          { '@type': 'Question', name: 'Can military spouses benefit from coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Military spouses face unique challenges including frequent relocations, career disruptions, solo parenting during deployments, and identity questions. As a military spouse herself, Krystalore created her coaching approach specifically to address these challenges. Her book "Leave No MilSpouse Behind" is dedicated to military spouse empowerment.' } },
          { '@type': 'Question', name: 'What topics does veteran coaching cover?', acceptedAnswer: { '@type': 'Answer', text: 'Veteran coaching covers military-to-civilian career transition, identity beyond service, leadership development for civilian life, entrepreneurship for veterans, family adjustment and resilience, financial planning, community building, mental wellness and mindfulness, skill translation, and purpose clarity after service.' } },
          { '@type': 'Question', name: 'How long does veteran coaching take?', acceptedAnswer: { '@type': 'Answer', text: 'Most veterans see meaningful progress within 8-12 sessions. Career transition coaching may span 3-6 months. Some veterans work with a coach through their entire first year of civilian life. Krystalore offers flexible packages including individual sessions, monthly programs, and intensive retreat experiences.' } },
          { '@type': 'Question', name: 'Does Krystalore Crews have military experience?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore is a military spouse who has lived the military lifestyle firsthand — deployments, PCS moves, family separation, reintegration, and the unique challenges of military community. This lived experience informs every aspect of her coaching. She is also the author of "Leave No MilSpouse Behind" and a dedicated veteran and military family advocate.' } },
          { '@type': 'Question', name: 'Is veteran coaching available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Krystalore offers virtual coaching sessions via video call, making expert veteran coaching accessible regardless of your duty station, location, or schedule. Virtual sessions are just as effective as in-person coaching and accommodate the unpredictable nature of military and veteran life.' } },
          { '@type': 'Question', name: 'What is the 5 C\'s framework for veterans?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore\'s 5 C\'s framework — Core, Consistency, Confidence, Community, and Celebration — is especially powerful for veterans. Core helps you rediscover identity beyond service. Consistency builds civilian routines. Confidence addresses imposter syndrome in new environments. Community replaces the unit bond. Celebration teaches you to honor your progress and service.' } },
          { '@type': 'Question', name: 'How much does veteran coaching cost?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching packages vary based on format, duration, and intensity. Individual sessions, monthly packages, and immersive retreat experiences are available. Military discounts are offered on all programs. Contact Krystalore for current pricing and payment plan options.' } },
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

const checklistCategories = [
  {
    name: 'Career Transition',
    icon: Briefcase,
    items: [
      'Updated resume with civilian-translated skills',
      'LinkedIn profile optimized for civilian recruiters',
      'Identified 3+ target career paths',
      'Completed skills gap analysis',
      'Connected with a veteran career mentor',
    ],
  },
  {
    name: 'Mental Health & Wellness',
    icon: Brain,
    items: [
      'Established a daily mindfulness or meditation practice',
      'Identified a therapist or counselor (if needed)',
      'Created a stress management toolkit',
      'Built a morning routine for mental clarity',
      'Completed a breathwork or Just Breathe session',
    ],
  },
  {
    name: 'Family Support',
    icon: Heart,
    items: [
      'Had an open conversation with family about transition goals',
      'Created a family adjustment plan',
      'Established regular family check-ins',
      'Identified family counseling resources (if needed)',
      'Built a support network for spouse/partner',
    ],
  },
  {
    name: 'Benefits & Finance',
    icon: Award,
    items: [
      'Filed or reviewed VA benefits claims',
      'Created a post-service budget',
      'Explored GI Bill or education benefits',
      'Set up TSP/retirement rollover plan',
      'Reviewed TRICARE or healthcare transition options',
    ],
  },
  {
    name: 'Community & Identity',
    icon: Users,
    items: [
      'Joined a veteran community or organization',
      'Identified personal values beyond military identity',
      'Started a new hobby or passion project',
      'Volunteered or gave back to a cause',
      'Created a personal mission statement for civilian life',
    ],
  },
]

export default function VeteranCoachingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  const faqs = [
    { question: 'What is veteran coaching?', answer: 'Veteran coaching is a forward-focused process that helps veterans, transitioning service members, and military families navigate the challenges of military-to-civilian transition. Unlike therapy, coaching focuses on goal-setting, action plans, identity development, and translating military skills into civilian success. Krystalore Crews brings firsthand understanding as a military spouse and dedicated advocate.' },
    { question: 'How does coaching help with military-to-civilian transition?', answer: 'Coaching addresses the core challenges of transition: rebuilding identity beyond rank and service, translating military skills for civilian employers, navigating career pivots, managing the emotional weight of leaving service, and building new community connections. A coach provides structure, accountability, and strategies specifically tailored to the veteran experience.' },
    { question: 'Is veteran coaching the same as therapy?', answer: 'No. Coaching is action-oriented and future-focused — it helps you build skills, set goals, and create momentum. Therapy addresses mental health diagnoses, trauma processing, and past experiences. Many veterans benefit from both simultaneously. Krystalore always recommends professional mental health support when appropriate and will refer you to trusted resources.' },
    { question: 'Can military spouses get coaching too?', answer: 'Absolutely. Military spouses face unique challenges including frequent relocations (PCS), career disruptions, solo parenting during deployments, and identity questions. As a military spouse herself, Krystalore designed her approach specifically for these challenges. Her book "Leave No MilSpouse Behind" is dedicated to military spouse empowerment and resilience.' },
    { question: 'What topics does veteran coaching cover?', answer: 'Common topics include military-to-civilian career transition, identity beyond service, leadership development for civilian environments, entrepreneurship for veterans, family adjustment and resilience, financial planning, community building, mental wellness and mindfulness, skill translation, and purpose clarity after military service.' },
    { question: 'How long does veteran coaching typically take?', answer: 'Most veterans see meaningful progress within 8-12 sessions. Career transition coaching may span 3-6 months. Some veterans work with a coach through their entire first year of civilian life for sustained support and accountability. Packages are flexible to match your timeline and goals.' },
    { question: 'Does Krystalore understand military culture?', answer: 'Yes — deeply and personally. Krystalore is a military spouse who has lived the military lifestyle: deployments, PCS moves, family separation, reintegration, and the unique bonds of military community. This lived experience informs every aspect of her coaching. She is also the author of "Leave No MilSpouse Behind."' },
    { question: 'Is coaching available online?', answer: 'Yes. Virtual coaching sessions are available via video call, making expert veteran coaching accessible regardless of your location, duty station, or schedule. Virtual sessions are just as effective as in-person coaching and accommodate the often unpredictable nature of military and veteran life.' },
    { question: 'What is the 5 C\'s framework?', answer: 'Krystalore\'s 5 C\'s — Core, Consistency, Confidence, Community, and Celebration — is especially powerful for veterans. Core helps rediscover identity beyond service. Consistency builds civilian routines. Confidence addresses imposter syndrome. Community replaces the unit bond. Celebration teaches you to honor progress and service.' },
    { question: 'Are there retreats for veterans?', answer: 'Yes. Krystalore offers dedicated veteran retreats ranging from weekend experiences to intensive 5-day programs. Retreats combine coaching, outdoor activities, peer connection, career workshops, and family integration. Military discounts are available on all packages. Visit our Veteran Retreats page for details.' },
  ]

  const quizCards = [
    { slug: 'veteran-transition', title: 'Veteran Transition Readiness', description: 'Assess your readiness for the military-to-civilian transition.', icon: Shield, color: 'bg-indigo-500' },
    { slug: 'retreat-ready', title: 'Retreat Ready Check', description: 'Find out if you\'re ready for a transformational retreat.', icon: Compass, color: 'bg-teal-500' },
    { slug: 'life-alignment', title: 'Life Alignment Assessment', description: 'Discover how aligned your life is with your core values.', icon: Target, color: 'bg-[#34c5c5]' },
    { slug: 'emotional-intelligence', title: 'Emotional Intelligence Quiz', description: 'Assess your ability to manage emotions effectively.', icon: Heart, color: 'bg-[#34c5c5]' },
  ]

  return (
    <>
      <VeteranCoachingJsonLd />
      <Header />

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/veteran.jpg" alt="Krystalore Crews veteran coaching and military support" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/veteran.jpg" alt="Veteran Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Veteran Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Coaching designed for veterans navigating transition, building new purpose, and leveraging military experience for civilian success.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is Veteran Coaching - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Veteran Coaching?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Veteran coaching is a specialized, forward-focused process designed to help veterans, transitioning service members, and military families navigate the unique challenges of life after service. Unlike therapy, coaching centers on goal-setting, action plans, and building the skills needed to thrive in civilian life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Krystalore Crews brings a deeply personal understanding to this work. As a military spouse, she has lived the deployments, the PCS moves, the reintegration struggles, and the identity questions that come with military life. Her coaching approach — built on the 5 C&apos;s framework (Core, Consistency, Confidence, Community, Celebration) — is designed specifically for the military community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re a veteran navigating your first year out of service, a military spouse building a career through constant moves, or a family adjusting to a new chapter, veteran coaching provides the structure, accountability, and strategy to move forward with purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coaching Helps You:</h3>
              <ul className="space-y-3">
                {['Translate military skills to civilian career success', 'Rebuild identity beyond rank and service', 'Navigate career pivots with confidence', 'Strengthen family bonds during transition', 'Build new community and belonging', 'Develop a personal mission for civilian life'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Military-to-Civilian Transition Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The transition from military to civilian life is one of the most significant identity shifts a person can experience. You don&apos;t have to navigate it alone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: UserCheck, title: 'Identity After Service', description: 'Who are you without the uniform? Coaching helps you rediscover your values, strengths, and purpose beyond your military identity. Your service shaped you — now let\'s build on that foundation.' },
              { icon: Briefcase, title: 'Career Pivoting', description: 'Your military experience gave you leadership, discipline, and problem-solving skills that civilian employers value. We help you translate those skills, craft your narrative, and land meaningful work.' },
              { icon: Compass, title: 'Translating Military Skills', description: 'From logistics to leadership, operations to teamwork — your military skills are powerful in the civilian world. Coaching helps you identify, articulate, and leverage every skill you developed in service.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#34c5c5]/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military Family */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Military Family Coaching</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Service doesn&apos;t just affect the person in uniform. Krystalore coaches the whole family — because when one person serves, the whole family serves.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Heart, title: 'Spouse Support & Empowerment', description: 'Military spouses sacrifice careers, community, and stability. Coaching helps spouses build resilience, find purpose, and create their own identity — the mission behind "Leave No MilSpouse Behind."' },
              { icon: Home, title: 'Family Resilience', description: 'Frequent moves, school changes, and parental absence take a toll on families. Build communication tools, adjustment strategies, and resilience practices that keep your family strong through every chapter.' },
              { icon: Flag, title: 'Deployment Recovery', description: 'Reintegration after deployment is a transition for the whole family. Coaching helps bridge the gap between the service member\'s experience and the family\'s — rebuilding connection and trust.' },
              { icon: MapPin, title: 'PCS Stress Management', description: 'Every PCS move disrupts routines, friendships, and stability. Develop strategies for smoother transitions, faster community building, and maintaining family wellness through every relocation.' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100">
                <div className="w-12 h-12 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Wellness */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mental Wellness &amp; Resilience</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Military service builds incredible mental toughness — but transition can challenge even the most resilient. Veteran coaching supports mental wellness through mindfulness, breathwork, and resilience-building practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Krystalore&apos;s <strong>Just Breathe Meditation</strong> program offers guided practices specifically designed for the military community. Combined with coaching, these tools help manage stress, build emotional awareness, and create sustainable wellness habits.
              </p>
              <p className="text-sm text-gray-500 italic">
                Note: Coaching is not a substitute for professional mental health treatment. If you&apos;re experiencing PTSD, depression, or crisis, please reach out to the Veterans Crisis Line (988, press 1) or a licensed therapist. Coaching complements professional care — it doesn&apos;t replace it.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Brain, label: 'Resilience Building', desc: 'Develop mental frameworks for navigating civilian challenges' },
                { icon: Shield, label: 'PTSD Awareness', desc: 'Understand triggers and build complementary coping strategies' },
                { icon: Star, label: 'Mindfulness Practices', desc: 'Daily practices for presence, clarity, and emotional regulation' },
                { icon: Flame, label: 'Just Breathe Program', desc: 'Guided breathwork and meditation designed for military minds' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#34c5c5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership After Service */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership After Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">You led in uniform. Now lead in every room you walk into. Your military leadership experience is a superpower — coaching helps you deploy it in civilian life.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Civilian Leadership', description: 'Military leadership is built on discipline, accountability, and mission focus. Translate those qualities into corporate leadership, team management, and organizational impact. Your experience commanding teams is exactly what civilian organizations need.' },
              { icon: Lightbulb, title: 'Veteran Entrepreneurship', description: 'Veterans make exceptional entrepreneurs — you understand risk, logistics, team building, and execution under pressure. Coaching helps you channel that military mindset into building a successful business, from concept to launch and beyond.' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                <div className="w-14 h-14 bg-[#34c5c5]/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#E8A849]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran Resource Checklist */}
      <section id="checklist" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veteran Transition Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Track your progress across the key areas of military-to-civilian transition. Check off items as you complete them.</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#34c5c5]/10 rounded-full px-6 py-2">
              <CheckCircle className="w-5 h-5 text-[#34c5c5]" />
              <span className="font-semibold text-[#34c5c5]">{checkedCount} / {totalItems} completed</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[#34c5c5]" />
                  </div>
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => {
                    const key = `${cat.name}-${i}`
                    return (
                      <li key={key}>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={!!checkedItems[key]}
                            onChange={() => toggleItem(key)}
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#34c5c5] focus:ring-[#34c5c5]"
                          />
                          <span className={`text-sm leading-relaxed transition-colors ${checkedItems[key] ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-gray-900'}`}>
                            {item}
                          </span>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Assessments for Veterans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Take a free quiz to assess where you are in your transition journey and get personalized recommendations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizCards.map((quiz) => (
              <Link key={quiz.slug} href={`/quizzes/${quiz.slug}`} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group border border-gray-100">
                <div className={`w-12 h-12 ${quiz.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <quiz.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#34c5c5] transition-colors">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{quiz.description}</p>
                <span className="text-[#34c5c5] font-medium text-sm group-hover:translate-x-1 transition-transform inline-block">Take Quiz →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about veteran coaching with Krystalore Crews.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5] via-teal-500 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Redefine What&apos;s Possible?</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">
            You gave your best in service. Now invest in yourself. Book a free discovery call with Krystalore and start building the next chapter — with purpose, confidence, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105">
              Book a Discovery Call
            </a>
            <a href="https://krystalore.com/corporate-retreat-planning/" className="border-2 border-white/80 text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-white/10 transition-all">
              Explore Veteran Retreats
            </a>
          </div>
        </div>
      </section>

      {/* Interlinks */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/veteran-retreats', label: 'Veteran Retreats' },
              { href: '/courses', label: 'Courses' },
              { href: '/books', label: 'Books' },
              { href: '/quizzes', label: 'All Quizzes' },
              { href: '/couples-retreats', label: 'Couples Retreats' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-[#34c5c5] hover:text-teal-700 font-medium px-4 py-2 rounded-full border border-[#34c5c5]/20 hover:border-[#34c5c5]/50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
