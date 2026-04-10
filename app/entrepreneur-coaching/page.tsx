'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  TrendingUp, Users, DollarSign, Settings, Brain, Sparkles,
  CheckCircle, ChevronDown, ChevronUp, Target, Lightbulb,
  BarChart3, Megaphone, UserCheck, Rocket, Shield,
  Briefcase, Heart, BookOpen, Zap
} from 'lucide-react'

function EntrepreneurCoachingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Entrepreneur Coaching by Krystalore Crews',
        description: 'Expert entrepreneur coaching helping business owners scale revenue, build teams, sharpen mindset, and lead with confidence using the proven 5 C\'s framework.',
        provider: {
          '@type': 'Person',
          name: 'Krystalore Crews',
          jobTitle: 'CEO & Executive Coach',
          worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        },
        serviceType: 'Entrepreneur Coaching',
        areaServed: 'US',
        url: 'https://executive-krystalore.vercel.app/entrepreneur-coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is entrepreneur coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Entrepreneur coaching is a strategic partnership where a trained coach helps business owners clarify their vision, overcome obstacles, scale operations, and develop the mindset needed for sustainable growth. Unlike consulting, coaching empowers you to find your own solutions while providing frameworks, accountability, and expert guidance.' } },
          { '@type': 'Question', name: 'How is entrepreneur coaching different from business consulting?', acceptedAnswer: { '@type': 'Answer', text: 'Consulting gives you answers; coaching helps you develop the capacity to find them yourself. Entrepreneur coaching addresses both business strategy AND personal development — mindset, leadership, resilience, and decision-making — creating lasting transformation rather than temporary fixes.' } },
          { '@type': 'Question', name: 'What does Krystalore\'s 5 C\'s framework mean for entrepreneurs?', acceptedAnswer: { '@type': 'Answer', text: 'The 5 C\'s — Core, Consistency, Confidence, Community, and Celebration — provide a complete system for entrepreneurial success. Core is your mission and values. Consistency is showing up daily. Confidence is trusting your decisions. Community is your network and team. Celebration is acknowledging wins to fuel momentum.' } },
          { '@type': 'Question', name: 'How long does entrepreneur coaching take to see results?', acceptedAnswer: { '@type': 'Answer', text: 'Many entrepreneurs see mindset shifts and clarity within the first 2-3 sessions. Tangible business results — increased revenue, better systems, stronger teams — typically emerge within 3-6 months of consistent coaching. The timeline depends on your starting point, commitment, and goals.' } },
          { '@type': 'Question', name: 'Who is entrepreneur coaching for?', acceptedAnswer: { '@type': 'Answer', text: 'Entrepreneur coaching is for anyone building, growing, or scaling a business — from solopreneurs launching their first venture to established business owners hitting a growth ceiling. It\'s especially valuable for entrepreneurs who feel overwhelmed, stuck, or ready to level up but unsure how.' } },
          { '@type': 'Question', name: 'Can entrepreneur coaching help with work-life balance?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. One of the biggest challenges entrepreneurs face is burnout and neglecting personal relationships. Krystalore\'s coaching integrates business growth with personal wellness, helping you build a business that supports your life — not one that consumes it.' } },
          { '@type': 'Question', name: 'What topics does entrepreneur coaching cover?', acceptedAnswer: { '@type': 'Answer', text: 'Common topics include business vision and strategy, revenue growth, team building and delegation, marketing and brand positioning, time management, financial literacy, leadership development, mindset and resilience, networking, and work-life integration.' } },
          { '@type': 'Question', name: 'How much does entrepreneur coaching cost?', acceptedAnswer: { '@type': 'Answer', text: 'Coaching packages vary based on format and duration. Options range from single strategy sessions to comprehensive multi-month programs and intensive retreat experiences. Contact Krystalore for current pricing and payment plan options tailored to your business stage.' } },
          { '@type': 'Question', name: 'Is entrepreneur coaching available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Krystalore offers virtual coaching sessions via video call, making expert entrepreneur coaching accessible from anywhere. Virtual sessions are highly effective for strategy work, accountability, and mindset coaching. In-person and retreat options are also available.' } },
          { '@type': 'Question', name: 'What makes Krystalore different from other business coaches?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore is a real entrepreneur who has built Crews Beyond Limits from the ground up. She\'s a published author, retreat host, course creator, and military spouse who understands the grit required to build something from nothing. Her coaching is rooted in lived experience, not just theory.' } },
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
  { category: 'Revenue', icon: DollarSign, items: ['I have at least 3 revenue streams', 'I know my monthly break-even number', 'I have a pricing strategy (not just guessing)', 'I track revenue weekly, not just monthly', 'I have a system for recurring revenue or retainers'] },
  { category: 'Operations', icon: Settings, items: ['I have documented SOPs for core processes', 'I use project management tools consistently', 'I have automated at least 3 repetitive tasks', 'My business can run for a week without me', 'I review and optimize operations quarterly'] },
  { category: 'Marketing', icon: Megaphone, items: ['I have a clear brand message and positioning', 'I post content consistently (3+ times/week)', 'I have an email list and nurture it regularly', 'I know my customer acquisition cost', 'I have a referral or affiliate system in place'] },
  { category: 'Team', icon: Users, items: ['I have delegated tasks I shouldn\'t be doing', 'My team has clear roles and expectations', 'I hold regular team meetings or check-ins', 'I invest in my team\'s development', 'I have a hiring pipeline for future growth'] },
  { category: 'Mindset', icon: Brain, items: ['I have a morning routine that grounds me', 'I set quarterly goals and review them', 'I have a coach, mentor, or accountability partner', 'I celebrate wins — not just chase the next goal', 'I prioritize rest and recovery without guilt'] },
]

export default function EntrepreneurCoachingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = checklistCategories.reduce((sum, c) => sum + c.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  const coachingAreas = [
    { icon: TrendingUp, title: 'Revenue & Scaling', description: 'Develop pricing strategies, diversify revenue streams, and create systems that allow your business to grow without burning you out.' },
    { icon: DollarSign, title: 'Financial Mastery', description: 'Understand your numbers — profit margins, cash flow, break-even points. Make data-driven decisions instead of flying blind.' },
    { icon: Users, title: 'Team Building', description: 'Learn to hire, delegate, and lead a team that multiplies your impact. Stop being the bottleneck in your own business.' },
    { icon: Settings, title: 'Systems & Operations', description: 'Build SOPs, automate repetitive tasks, and create operational frameworks that let your business run without you in every seat.' },
    { icon: Megaphone, title: 'Marketing & Visibility', description: 'Clarify your brand message, build an audience, and create marketing systems that attract ideal clients consistently.' },
    { icon: Rocket, title: 'Launch & Growth Strategy', description: 'Whether launching a new offer or scaling an existing one, get strategic guidance on positioning, timing, and execution.' },
  ]

  const fiveCsEntrepreneur = [
    { word: 'Core', description: 'Your mission, values, and non-negotiables. Before you scale, you need to know what you stand for and why your business exists beyond profit.' },
    { word: 'Consistency', description: 'Success isn\'t about one viral moment — it\'s about showing up every single day. Consistent action in marketing, sales, and operations compounds over time.' },
    { word: 'Confidence', description: 'Trust your decisions. Price your worth. Take the stage. Confidence isn\'t arrogance — it\'s the quiet certainty that you can figure it out.' },
    { word: 'Community', description: 'Your network is your net worth. Build relationships with mentors, peers, and collaborators who challenge and support your growth.' },
    { word: 'Celebration', description: 'Entrepreneurs are notorious for skipping to the next goal. Celebrating wins — big and small — fuels motivation and prevents burnout.' },
  ]

  const faqs = [
    { question: 'What is entrepreneur coaching?', answer: 'Entrepreneur coaching is a strategic partnership where a trained coach helps business owners clarify their vision, overcome obstacles, scale operations, and develop the mindset needed for sustainable growth. Unlike consulting, coaching empowers you to find your own solutions while providing frameworks, accountability, and expert guidance. Krystalore Crews brings real entrepreneurial experience — she\'s built Crews Beyond Limits from the ground up as an author, speaker, retreat host, and course creator.' },
    { question: 'How is entrepreneur coaching different from business consulting?', answer: 'Consulting gives you answers and implements solutions for you. Coaching helps you develop the capacity to find solutions yourself — building skills and mindset that serve you for life. Entrepreneur coaching addresses both business strategy AND personal development: mindset, leadership, resilience, and decision-making. This creates lasting transformation rather than dependency on outside experts.' },
    { question: 'What does the 5 C\'s framework mean for entrepreneurs?', answer: 'Krystalore\'s 5 C\'s — Core, Consistency, Confidence, Community, and Celebration — provide a complete system for entrepreneurial success. Core is your mission and values. Consistency is the daily discipline that compounds. Confidence is trusting your pricing, your message, and your decisions. Community is your network of mentors, peers, and team. Celebration is acknowledging progress to fuel momentum and prevent burnout.' },
    { question: 'How long does entrepreneur coaching take to see results?', answer: 'Many entrepreneurs see mindset shifts and renewed clarity within the first 2-3 sessions. Tangible business results — increased revenue, better systems, stronger teams — typically emerge within 3-6 months of consistent coaching. The timeline depends on your starting point, commitment level, and the complexity of your goals.' },
    { question: 'Who is entrepreneur coaching for?', answer: 'Entrepreneur coaching is for anyone building, growing, or scaling a business — from solopreneurs launching their first venture to established business owners hitting a growth ceiling. It\'s especially valuable for entrepreneurs who feel overwhelmed, stuck in a plateau, wearing too many hats, or ready to level up but unsure of the next step.' },
    { question: 'Can entrepreneur coaching help with work-life balance?', answer: 'Absolutely. One of the biggest challenges entrepreneurs face is burnout and neglecting personal relationships, health, and well-being. Krystalore\'s coaching integrates business growth with personal wellness, helping you build a business that supports your life — not one that consumes it. Many clients also explore her couples retreats for entrepreneur partners.' },
    { question: 'What topics does entrepreneur coaching cover?', answer: 'Common topics include business vision and strategy, revenue growth and pricing, team building and delegation, marketing and brand positioning, time management and productivity, financial literacy, leadership development, mindset and resilience, networking and partnerships, and sustainable work-life integration.' },
    { question: 'How much does entrepreneur coaching cost?', answer: 'Coaching packages vary based on format (1-on-1 vs. group), duration, and intensity. Options range from single strategy sessions to comprehensive multi-month programs and intensive retreat experiences. Contact Krystalore for current pricing and payment plan options tailored to your business stage and goals.' },
    { question: 'Is entrepreneur coaching available online?', answer: 'Yes. Krystalore offers virtual coaching sessions via video call, making expert entrepreneur coaching accessible from anywhere in the world. Virtual sessions are highly effective for strategy work, accountability check-ins, and mindset coaching. In-person coaching and entrepreneur retreat options are also available for those who prefer immersive experiences.' },
    { question: 'What makes Krystalore different from other business coaches?', answer: 'Krystalore is a real entrepreneur who has built Crews Beyond Limits from scratch. She\'s a published author of multiple books, a retreat host, course creator, speaker, and military spouse who understands the grit, sacrifice, and resilience required to build something meaningful. Her coaching is rooted in lived experience, practical frameworks, and a genuine passion for seeing others succeed — not just theory from a textbook.' },
  ]

  return (
    <>
      <EntrepreneurCoachingJsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/coaching.jpg" alt="Entrepreneur Coaching" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Entrepreneur Coaching</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Strategic coaching for entrepreneurs ready to scale their business, sharpen their mindset, and lead with purpose.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* What Is Entrepreneur Coaching - AEO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is Entrepreneur Coaching?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Entrepreneur coaching is a strategic, forward-focused partnership where a trained coach helps business owners clarify their vision, overcome obstacles, scale operations, and develop the mindset needed for sustainable success. It&apos;s not about someone telling you what to do — it&apos;s about unlocking your own capacity to lead, decide, and grow.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Crews Beyond Limits, Krystalore Crews brings real entrepreneurial experience to every session. As a published author, retreat host, course creator, and CEO, she understands the unique challenges of building something from nothing — the isolation, the decision fatigue, the constant pivoting, and the exhilaration of breakthrough moments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Using her signature <strong>5 C&apos;s framework</strong> (Core, Consistency, Confidence, Community, Celebration), Krystalore helps entrepreneurs build businesses that are profitable, sustainable, and aligned with their values. Whether you&apos;re launching, scaling, or reinventing, coaching meets you where you are.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/krystalore-crews-logo.png" alt="Krystalore Crews entrepreneur coaching" width={500} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Growth Training</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive coaching that addresses every dimension of building and scaling a business — from revenue to resilience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-teal-50 text-lg mb-8">Stop spinning your wheels and start building with strategy, systems, and support.</p>
          <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Mindset & Leadership - 5 C's */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mindset &amp; Leadership: The 5 C&apos;s for Entrepreneurs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Krystalore&apos;s proven 5 C&apos;s framework is the operating system for entrepreneurial success — addressing both the inner game and the outer strategy.</p>
          </div>
          <div className="space-y-6">
            {fiveCsEntrepreneur.map((c, i) => (
              <div key={c.word} className="bg-gray-50 rounded-2xl p-8 shadow-sm flex items-start gap-6">
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

      {/* Scale Your Business Quiz */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Rocket className="w-16 h-16 text-[#34c5c5] mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Are You Ready to Scale?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not every business is ready to scale — and that&apos;s okay. Scaling prematurely can break what&apos;s working. Take our free assessment to discover where you are on the growth journey and what needs to be in place before you level up.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This quiz covers your readiness across revenue, operations, marketing, team, and mindset — the five pillars of sustainable business growth.
              </p>
              <Link href="/quizzes/scale-your-business" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-200 px-8 py-4 text-lg transition-all hover:scale-105 inline-block">
                Take the Scale Assessment
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You&apos;ll Discover:</h3>
              <ul className="space-y-3">
                {['Your current business growth stage', 'Which areas need attention before scaling', 'Your strongest entrepreneurial assets', 'Specific action steps for your next phase', 'Recommended resources and coaching paths'].map((item) => (
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

      {/* Business Health Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <BarChart3 className="w-16 h-16 text-[#E8A849] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Health Checklist</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">How healthy is your business? Check off the items you have in place — aim for 80% or higher to be scale-ready.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checklistCategories.map((category) => (
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
                        <button onClick={() => toggleItem(key)} className="flex items-start gap-3 w-full text-left group">
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
            <p className="text-gray-500 text-sm">📊 {checkedCount} of {totalItems} completed ({totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0}%)</p>
            {checkedCount >= totalItems * 0.8 && <p className="text-green-600 font-semibold mt-2">🚀 You&apos;re scale-ready! Let&apos;s talk strategy.</p>}
            {checkedCount > 0 && checkedCount < totalItems * 0.5 && <p className="text-amber-600 font-semibold mt-2">💪 Great start — coaching can help you close the gaps.</p>}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Closing the Gaps?</h2>
          <p className="text-teal-50 text-lg mb-8">Whether you checked 5 boxes or 25, coaching gives you the roadmap and accountability to build a business that works — for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-8 py-4 text-lg transition-all hover:scale-105">
              Contact Krystalore
            </a>
            <Link href="/entrepreneur-retreats" className="border-2 border-white/80 text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-white/10 transition-all">
              Explore Entrepreneur Retreats
            </Link>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business &amp; Entrepreneur Quizzes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Free assessments to evaluate your business readiness, alignment, and growth potential.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Entrepreneur Readiness', description: 'Evaluate your readiness to start, scale, or transform your business.', href: '/quizzes/entrepreneur-readiness', icon: Briefcase, color: 'bg-emerald-500' },
              { title: 'Scale Your Business', description: 'Discover your readiness to scale — from writing books to hosting retreats.', href: '/quizzes/scale-your-business', icon: TrendingUp, color: 'bg-[#34c5c5]' },
              { title: 'Life Alignment', description: 'Discover how aligned your current life is with your core values and goals.', href: '/quizzes/life-alignment', icon: Target, color: 'bg-[#34c5c5]' },
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
            <p className="text-gray-600 text-lg">Everything you need to know about entrepreneur coaching.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Business Deserves a Coach Who Gets It</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Krystalore has been where you are — overwhelmed, ambitious, and ready for more. Let her help you build the business and life you envision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://krystalore.com/contact/" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl shadow-lg shadow-teal-900/30 px-10 py-5 text-lg transition-all hover:scale-105">
              Get Started with Coaching
            </a>
            <a href="https://krystalore.com/corporate-retreat-planning/" className="border-2 border-white/80 text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Plan an Entrepreneur Retreat
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/entrepreneur-retreats" className="hover:text-white">Entrepreneur Retreats</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/books" className="hover:text-white">Books</Link>
            <Link href="/quizzes" className="hover:text-white">All Quizzes</Link>
            <Link href="/couples-retreats" className="hover:text-white">Couples Retreats</Link>
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
