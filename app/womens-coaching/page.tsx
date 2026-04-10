'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sparkles, Crown, Heart, Shield, Brain, Dumbbell,
  CheckCircle, ChevronDown, ChevronUp, Star, BookOpen,
  Target, Lightbulb, Users, Briefcase, Flame,
  Sun, Moon, Leaf, Gem, Music
} from 'lucide-react'

function WomensCoachingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: "Women's Empowerment Coaching by Krystalore Crews",
        description: "Expert women's coaching helping women build courageous confidence, develop leadership skills, improve fitness, and create fulfilling lives through mindset, movement, and community.",
        provider: {
          '@type': 'Person',
          name: 'Krystalore Crews',
          jobTitle: 'CEO & Women\'s Empowerment Coach',
          worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        },
        serviceType: "Women's Empowerment Coaching",
        areaServed: 'US',
        url: 'https://executive-krystalore.vercel.app/womens-coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: "What is women's empowerment coaching?", acceptedAnswer: { '@type': 'Answer', text: "Women's empowerment coaching is a transformative process where a coach helps women build confidence, clarify their vision, overcome limiting beliefs, and take bold action in every area of life — career, relationships, health, and personal growth. Krystalore Crews combines fitness, mindset, and leadership development to help women redefine what's possible." } },
          { '@type': 'Question', name: "How is women's coaching different from life coaching?", acceptedAnswer: { '@type': 'Answer', text: "Women's empowerment coaching specifically addresses the unique challenges women face — imposter syndrome, people-pleasing, burnout from carrying the mental load, body image, and societal expectations. It creates a safe space for women to reclaim their power, voice, and identity." } },
          { '@type': 'Question', name: 'What does confidence coaching for women include?', acceptedAnswer: { '@type': 'Answer', text: "Confidence coaching includes identifying and dismantling limiting beliefs, building a strong sense of identity, learning to set boundaries, developing assertive communication, overcoming imposter syndrome, and creating daily habits that reinforce self-worth. Krystalore's Road to Resilience framework teaches 5 ways to build courageous confidence." } },
          { '@type': 'Question', name: "Can coaching help with women's leadership development?", acceptedAnswer: { '@type': 'Answer', text: "Absolutely. Women's leadership coaching develops executive presence, negotiation skills, strategic thinking, and the confidence to lead authentically. Krystalore helps women break through glass ceilings, advocate for themselves, and lead with both strength and empathy." } },
          { '@type': 'Question', name: 'How does fitness relate to empowerment coaching?', acceptedAnswer: { '@type': 'Answer', text: "Physical strength builds mental strength. Programs like Bombshell Bootcamp and the 34-Minute Performance Protocol aren't just about fitness — they teach discipline, resilience, goal-setting, and the confidence that comes from proving to yourself that you can do hard things." } },
          { '@type': 'Question', name: "What is Krystalore's 5 C's framework?", acceptedAnswer: { '@type': 'Answer', text: "The 5 C's are Core (knowing your identity and values), Consistency (showing up daily), Confidence (trusting yourself), Community (surrounding yourself with supportive women), and Celebration (acknowledging your wins). This framework is the foundation of all Crews Beyond Limits programs." } },
          { '@type': 'Question', name: 'How long does empowerment coaching take to see results?', acceptedAnswer: { '@type': 'Answer', text: "Many women experience mindset shifts within the first 2-3 sessions. Sustainable transformation typically unfolds over 3-6 months of consistent coaching. Krystalore offers flexible packages including intensive retreat options for accelerated breakthroughs." } },
          { '@type': 'Question', name: 'Is coaching available online?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Krystalore offers virtual coaching sessions, online programs like Monday Motivation LIVE and Freedom Friday LIVE, digital courses, and virtual community experiences. In-person retreats and bootcamps are also available." } },
          { '@type': 'Question', name: 'What books has Krystalore written for women?', acceptedAnswer: { '@type': 'Answer', text: "Krystalore is the author of Road to Resilience: 5 Ways to Build Courageous Confidence, Leave No MilSpouse Behind, Krystal Clear Life Planner, and Is Manifesting Bullshit — each designed to help women take practical action toward their goals." } },
          { '@type': 'Question', name: 'How do I get started with coaching?', acceptedAnswer: { '@type': 'Answer', text: "Start by taking the free Women's Confidence Assessment to identify your strengths and growth areas. Then schedule a consultation with Krystalore to discuss your goals and find the right coaching package for your journey." } },
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

const selfCareCategories = [
  { category: 'Mind', icon: Brain, items: ['Journal for 10 minutes', 'Read a chapter of a personal development book', 'Practice positive affirmations', 'Set one boundary today', 'Unplug from social media for 2 hours', 'Write down 3 things you\'re grateful for'] },
  { category: 'Body', icon: Dumbbell, items: ['Complete a workout (even 15 minutes counts)', 'Drink 64oz of water', 'Get 7-8 hours of sleep', 'Meal prep healthy lunches for the week', 'Take a walk in nature', 'Stretch for 10 minutes'] },
  { category: 'Spirit', icon: Sun, items: ['Meditate or pray for 10 minutes', 'Spend time in nature without your phone', 'Listen to uplifting music or a podcast', 'Practice deep breathing exercises', 'Write a letter of forgiveness (to yourself or someone else)'] },
  { category: 'Career', icon: Briefcase, items: ['Update your LinkedIn profile', 'Ask for feedback from a mentor', 'Set a 90-day professional goal', 'Negotiate one thing you\'ve been avoiding', 'Celebrate a recent professional win', 'Learn a new skill for 30 minutes'] },
  { category: 'Relationships', icon: Heart, items: ['Call a friend you haven\'t talked to in a while', 'Express appreciation to someone who supports you', 'Set a boundary in a draining relationship', 'Plan a girls\' night or sister circle', 'Write yourself a love letter', 'Forgive yourself for one mistake'] },
]

export default function WomensCoachingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const faqs = [
    { question: "What is women's empowerment coaching?", answer: "Women's empowerment coaching is a transformative process where a coach helps women build confidence, clarify their vision, overcome limiting beliefs, and take bold action in every area of life — career, relationships, health, and personal growth. Krystalore Crews combines fitness, mindset, and leadership development to help women redefine what's possible — mind, body, and beyond." },
    { question: "How is women's coaching different from life coaching?", answer: "Women's empowerment coaching specifically addresses the unique challenges women face — imposter syndrome, people-pleasing, burnout from carrying the mental load, body image struggles, and societal expectations. It creates a safe, sisterhood-driven space for women to reclaim their power, voice, and identity." },
    { question: 'What does confidence coaching for women include?', answer: "Confidence coaching includes identifying and dismantling limiting beliefs, building a strong sense of identity, learning to set firm boundaries, developing assertive communication, overcoming imposter syndrome, and creating daily habits that reinforce self-worth. Krystalore's Road to Resilience framework teaches 5 ways to build courageous confidence." },
    { question: "Can coaching help with women's leadership development?", answer: "Absolutely. Women's leadership coaching develops executive presence, negotiation skills, strategic thinking, and the confidence to lead authentically. Krystalore helps women break through glass ceilings, advocate for themselves in the boardroom, and lead with both strength and empathy." },
    { question: 'How does fitness relate to empowerment?', answer: "Physical strength builds mental strength. Programs like Bombshell Bootcamp and the 34-Minute Performance Protocol aren't just about looking good — they teach discipline, resilience, goal-setting, and the confidence that comes from proving to yourself that you can do hard things. When you feel strong in your body, you show up stronger everywhere." },
    { question: "What is the 5 C's framework?", answer: "The 5 C's are: Core (knowing your identity and values), Consistency (showing up daily even when it's hard), Confidence (trusting yourself and your abilities), Community (surrounding yourself with women who lift you up), and Celebration (acknowledging your wins instead of rushing to the next goal). This framework is the foundation of every Crews Beyond Limits program." },
    { question: 'How long does coaching take to see results?', answer: "Many women experience powerful mindset shifts within the first 2-3 sessions. Sustainable transformation — changing habits, building confidence, creating a new identity — typically unfolds over 3-6 months. Krystalore offers intensive retreat experiences for women who want accelerated breakthroughs." },
    { question: 'Is coaching available online?', answer: "Yes. Krystalore offers virtual coaching sessions, online programs like Monday Motivation LIVE and Freedom Friday LIVE, digital courses, and virtual community experiences. In-person retreats, bootcamps, and events are also available for deeper immersion." },
    { question: 'What books should I read to get started?', answer: "Start with Road to Resilience: 5 Ways to Build Courageous Confidence for a confidence framework. The Krystal Clear Life Planner helps you organize your goals. Is Manifesting Bullshit challenges you to pair mindset with action. Leave No MilSpouse Behind is for military spouses navigating unique challenges." },
    { question: 'How do I get started?', answer: "Take the free Women's Confidence Assessment to identify your strengths and growth areas. Then schedule a consultation with Krystalore to discuss your goals and find the right coaching format — whether that's 1:1 coaching, a group program, a retreat, or self-paced courses." },
  ]

  return (
    <>
      <WomensCoachingJsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/portrait.jpg" alt="Women's Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Women's Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Coaching designed specifically for women ready to break barriers, build confidence, and lead boldly.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is Women's Empowerment Coaching - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Crown className="w-16 h-16 text-[#34c5c5] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is Women&apos;s Empowerment Coaching?</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Women&apos;s empowerment coaching is a holistic, action-oriented process designed to help women build unshakeable confidence, discover their authentic voice, and take bold steps toward their biggest goals. Unlike traditional life coaching, empowerment coaching addresses the unique challenges women face — from imposter syndrome and people-pleasing to balancing career ambitions with personal fulfillment.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Krystalore Crews brings a unique approach that integrates <strong>fitness, mindset, leadership, and community</strong>. As CEO of Crews Beyond Limits, bestselling author, military spouse, and fitness coach, she understands that true empowerment isn&apos;t just about thinking positively — it&apos;s about building the physical strength, mental resilience, and support systems that make transformation sustainable.
            </p>
            <p className="text-lg leading-relaxed">
              Through her signature programs like Bombshell Bootcamp, the 5 C&apos;s Framework, and immersive retreats, Krystalore has helped thousands of women stop settling, start showing up for themselves, and create lives they&apos;re genuinely proud of.
            </p>
          </div>
        </div>
      </section>

      {/* Confidence & Identity */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Confidence &amp; Identity</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Build the courageous confidence that changes everything — how you lead, how you love, and how you show up in the world.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Building Courageous Confidence', description: "Krystalore's Road to Resilience teaches 5 proven ways to build the kind of confidence that doesn't crumble under pressure. This isn't fake-it-till-you-make-it — it's earned through action." },
              { icon: Brain, title: 'Overcoming Imposter Syndrome', description: "That voice telling you you're not enough? Learn to silence it. Develop an identity rooted in your actual accomplishments, values, and vision — not other people's opinions." },
              { icon: Flame, title: 'Owning Your Voice', description: 'Stop shrinking. Learn to speak up in meetings, set boundaries without guilt, ask for what you deserve, and take up space unapologetically.' },
              { icon: Target, title: 'Dismantling Limiting Beliefs', description: "Identify the stories you've been telling yourself — about money, success, worthiness, capability — and replace them with empowering truths backed by evidence." },
              { icon: Gem, title: 'Reclaiming Your Identity', description: "After years of being defined by roles — mom, wife, employee — rediscover who YOU are. Reconnect with your passions, desires, and the woman you were always meant to be." },
              { icon: Star, title: 'The 5 C\'s Framework', description: "Core, Consistency, Confidence, Community, Celebration — Krystalore's signature framework gives you the structure to build lasting transformation from the inside out." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness & Wellness */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Dumbbell className="w-12 h-12 text-[#E8A849] mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fitness &amp; Wellness</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Strong body, strong mind. Krystalore believes that physical fitness isn&apos;t separate from empowerment — it&apos;s the foundation. When you prove to yourself that you can push through a tough workout, you build the resilience to push through anything life throws at you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her fitness programs are designed for real women with real schedules — no gym required, no hours wasted, just results that build both your body and your belief in yourself.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Bombshell Bootcamp', desc: 'High-energy group fitness that builds strength, confidence, and community' },
                  { name: '34-Minute Performance Protocol', desc: 'Science-backed workouts designed to maximize results in minimal time' },
                  { name: 'Million Dollar Body Academy', desc: 'Comprehensive fitness and nutrition coaching for women who want it all' },
                  { name: 'Healthy Habits', desc: 'Sustainable lifestyle changes that stick — no crash diets, no extremes' },
                ].map((program) => (
                  <div key={program.name} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">{program.name}</span>
                      <span className="text-gray-600"> — {program.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews fitness coaching for women" width={500} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Career */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Briefcase className="w-16 h-16 text-[#34c5c5] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership &amp; Career</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Lead with confidence, negotiate with power, and break through every barrier standing between you and the career you deserve.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Crown, title: 'Executive Presence', description: 'Command the room. Develop the gravitas, communication style, and energy that makes people listen when you speak — whether in a boardroom or on a stage.' },
              { icon: Target, title: 'Negotiation & Advocacy', description: 'Stop leaving money and opportunity on the table. Learn to negotiate salary, promotions, contracts, and boundaries with confidence and clarity.' },
              { icon: Lightbulb, title: 'Breaking Barriers', description: "Glass ceilings, old boys' clubs, systemic bias — they're real. Learn strategies to navigate, disrupt, and break through while staying true to who you are." },
              { icon: Sun, title: 'Work-Life Integration', description: "Balance is a myth. Integration is the goal. Learn to design a life where career ambition and personal fulfillment coexist — without guilt or burnout." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Sisterhood */}
      <section className="py-20 bg-gradient-to-r from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community &amp; Sisterhood</h2>
            <p className="text-teal-50 text-lg max-w-2xl mx-auto">You were never meant to do this alone. The Crews Beyond Limits community is where women lift each other up, hold each other accountable, and celebrate every win — big and small.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Monday Motivation LIVE', description: 'Start every week with intention, energy, and a community of women who show up for each other.' },
              { title: 'Freedom Friday LIVE', description: 'End the week by celebrating wins, releasing what doesn\'t serve you, and connecting with your tribe.' },
              { title: 'Beyond Limits Bootcamp', description: 'An intensive community experience that pushes you past your comfort zone — physically, mentally, and emotionally.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-teal-50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-[#E8A849] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Self-Care Checklist</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Self-care isn&apos;t selfish — it&apos;s essential. Check off items as you complete them and build a daily practice that nourishes every part of you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selfCareCategories.map((category) => (
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
            <p className="text-gray-500 text-sm">✨ {Object.values(checkedItems).filter(Boolean).length} of {selfCareCategories.reduce((sum, c) => sum + c.items.length, 0)} completed</p>
          </div>
        </div>
      </section>

      {/* Quizzes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empowerment Quizzes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Free assessments to help you understand where you are and where you&apos;re ready to grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Women's Confidence", description: 'Evaluate your confidence, self-care, and empowerment across all areas of life.', href: '/quizzes/womens-confidence', icon: Sparkles, color: 'bg-fuchsia-500' },
              { title: 'Life Alignment', description: 'Discover how aligned your current life is with your core values and goals.', href: '/quizzes/life-alignment', icon: Target, color: 'bg-[#34c5c5]' },
              { title: 'Self-Awareness', description: 'Measure your ability to recognize emotions and understand yourself.', href: '/quizzes/self-awareness', icon: Brain, color: 'bg-purple-500' },
              { title: 'Self-Management', description: 'Evaluate your ability to manage time, stress, and personal productivity.', href: '/quizzes/self-management', icon: Star, color: 'bg-indigo-500' },
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
            <p className="text-gray-600 text-lg">Everything you need to know about women&apos;s empowerment coaching.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">You Were Made for More</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop waiting for permission. Stop playing small. Let Krystalore help you build the confidence, strength, and vision to create a life beyond limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Book Your Consultation
            </a>
            <a href="https://krystalore.com/corporate-retreat-planning/" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Plan a Women&apos;s Retreat
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/womens-retreats" className="hover:text-white">Women&apos;s Retreats</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/books" className="hover:text-white">Books</Link>
            <Link href="/quizzes" className="hover:text-white">All Quizzes</Link>
            <Link href="/couples-retreats" className="hover:text-white">Couples Retreats</Link>
            <Link href="/relationship-coaching" className="hover:text-white">Relationship Coaching</Link>
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
