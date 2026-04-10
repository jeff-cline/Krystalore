'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { 
  ArrowRight, 
  CheckCircle, 
  Quote, 
  Star, 
  Shield, 
  Flame, 
  Target, 
  Users, 
  Sparkles, 
  Heart, 
  Brain, 
  TreePine, 
  Mountain, 
  Award,
  Book,
  Mic,
  Building2,
  Dumbbell,
  TrendingUp,
  Zap,
  Globe,
  Code,
  DollarSign,
  Briefcase,
  Trophy,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Lightbulb
} from 'lucide-react'

interface QuizState {
  businessStage: string
  revenue: string
  challenge: string
  health: string
  balance: string
  immersive: string
  email: string
  showResults: boolean
}

function SmartStartQuiz() {
  const [quiz, setQuiz] = useState<QuizState>({
    businessStage: '',
    revenue: '',
    challenge: '',
    health: '',
    balance: '',
    immersive: '',
    email: '',
    showResults: false
  })

  const [step, setStep] = useState(1)
  const [emailLocked, setEmailLocked] = useState(false)

  const questions = [
    {
      id: 'businessStage',
      question: 'How long have you been in business?',
      options: [
        '< 1 year',
        '1-3 years', 
        '3-5 years',
        '5-10 years',
        '10+ years'
      ]
    },
    {
      id: 'revenue',
      question: 'What\'s your annual revenue?',
      options: [
        'Pre-revenue',
        '< $100K',
        '$100K - $500K',
        '$500K - $1M',
        '$1M - $5M',
        '$5M+'
      ]
    },
    {
      id: 'challenge',
      question: 'What\'s your biggest challenge?',
      options: [
        'Scaling',
        'Burnout',
        'Technology',
        'Capital',
        'Leadership',
        'All of the above'
      ]
    },
    {
      id: 'health',
      question: 'How\'s your physical health?',
      options: [
        'Thriving',
        'Good',
        'Could be better',
        'Struggling',
        'Non-existent'
      ]
    },
    {
      id: 'balance',
      question: 'How would you rate your work-life balance?',
      options: [
        'Excellent',
        'Good',
        'Needs work',
        'What balance?',
        'I sleep at my desk'
      ]
    },
    {
      id: 'immersive',
      question: 'Are you open to an immersive experience?',
      options: [
        'Yes absolutely',
        'Maybe',
        'I prefer virtual',
        'Not sure'
      ]
    }
  ]

  const handleAnswer = (questionId: string, answer: string) => {
    setQuiz(prev => ({ ...prev, [questionId]: answer }))
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      // Quiz complete, show email capture
      setEmailLocked(true)
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (quiz.email) {
      setQuiz(prev => ({ ...prev, showResults: true }))
    }
  }

  const getRecommendation = () => {
    const score = Object.values(quiz).filter(Boolean).length
    if (quiz.revenue === '$5M+' || quiz.challenge === 'All of the above') {
      return {
        tier: '90-Day Live & Work',
        price: '$100,000',
        reason: 'You need total transformation at the highest level'
      }
    } else if (quiz.balance === 'I sleep at my desk' || quiz.health === 'Non-existent') {
      return {
        tier: 'Guaranteed Success (1 Month)',
        price: '$50,000',
        reason: 'Intensive intervention needed for mind-body-business alignment'
      }
    } else if (quiz.immersive === 'Yes absolutely') {
      return {
        tier: 'One-Week Immersive',
        price: '$25,000',
        reason: 'Perfect for accelerated transformation in paradise'
      }
    } else {
      return {
        tier: 'Group Container',
        price: '$3,000/month',
        reason: 'Ideal starting point for comprehensive transformation'
      }
    }
  }

  if (quiz.showResults) {
    const recommendation = getRecommendation()
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Smart Start Recommendation</h3>
        <div className="bg-gradient-to-r from-[#0D9488]/10 to-[#F97316]/10 p-6 rounded-xl mb-6">
          <h4 className="text-xl font-bold text-[#0D9488] mb-2">{recommendation.tier}</h4>
          <p className="text-3xl font-black text-[#F97316] mb-2">{recommendation.price}</p>
          <p className="text-gray-700">{recommendation.reason}</p>
        </div>
        <a 
          href="/book" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform w-full text-center block"
        >
          Book Your Breakthrough Call
        </a>
      </div>
    )
  }

  if (emailLocked) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Almost there! Enter your email to see your results:</h3>
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <input
            type="email"
            value={quiz.email}
            onChange={(e) => setQuiz(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0D9488] outline-none"
          />
          <button 
            type="submit"
            className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform w-full"
          >
            Show My Results
          </button>
        </form>
      </div>
    )
  }

  const currentQuestion = questions[step - 1]

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">What's Your Business Smart Start Score?</h3>
          <span className="text-sm text-gray-500">{step} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h4 className="text-lg font-semibold text-gray-800 mb-4">{currentQuestion.question}</h4>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(currentQuestion.id, option)}
            className="w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-[#0D9488] hover:bg-[#0D9488]/5 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#0D9488] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#0D9488] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function BusinessSmartStartPage() {
  const faqItems = [
    {
      question: "What makes this different from other business coaching programs?",
      answer: "We're the only program that addresses ALL the pieces: mind, body, AND business. Most coaches focus on one area, leaving you incomplete. When Krystalore's somatic healing and wellness expertise combines with Jeff's technology suite and scaling frameworks, you get total transformation."
    },
    {
      question: "Do I need to be in good physical shape to participate?",
      answer: "Not at all! Krystalore meets you exactly where you are. The fitness component is about building energy and mental clarity for business performance, not about being an athlete. Every program is modified for your current level."
    },
    {
      question: "What kind of businesses does this work for?",
      answer: "Any business that's ready to scale. Jeff has built 100+ companies across every industry. Whether you're pre-revenue or doing $5M+, the principles of mind-body-business alignment apply universally."
    },
    {
      question: "Is the Caribbean island experience mandatory?",
      answer: "Only for the immersive packages ($25K, $50K, $100K tiers). The Group Container ($3K/month) is virtual with optional in-person intensives. However, our island immersions create breakthrough results that virtual simply cannot match."
    },
    {
      question: "What technology tools are included?",
      answer: "Full access to Jeff's 7-tool suite: MoneyWords (decision intelligence), el.ag (predictive analytics), jeff-cline.com (marketing systems), VoiceDrips (outreach automation), agents.biz (AI team members), multifamilyoffice.ai (capital access), and softcircle.ai (funding pipeline)."
    },
    {
      question: "Can I bring my business partner or co-founder?",
      answer: "Absolutely! Business partnerships are relationships, and relationships need alignment. Many of our most successful transformations happen with founding teams who go through the process together."
    },
    {
      question: "What does 'guaranteed success' mean in the $50K package?",
      answer: "Measurable business outcomes within 30 days: revenue increase, operational efficiency, market positioning, or capital access. If we don't hit agreed-upon metrics, we continue working until we do."
    },
    {
      question: "How does the fitness component integrate with business coaching?",
      answer: "Your body is your business. Physical energy directly impacts mental clarity, decision-making, and leadership presence. Krystalore's 34-minute protocols are designed specifically for busy executives—maximum impact, minimum time."
    },
    {
      question: "What is somatic healing and why does it matter for business?",
      answer: "Somatic healing addresses trauma and stress stored in the body. When you're triggered in business (difficult conversations, high-stakes decisions, conflict), your body's stress response can sabotage your performance. Healing this creates unshakeable leadership presence."
    },
    {
      question: "Who is Krystalore Crews?",
      answer: "Amazon Best-Selling Author, 22-year Air Force veteran, Pentagon program leader, Certified Life & Somatic Coach, and creator of the Freedom Formula. She's transformed thousands of lives through her unique blend of military discipline and somatic wisdom."
    },
    {
      question: "Who is Jeff Cline?",
      answer: "4 exits, 100+ companies built, $500M+ revenue generated. Creator of 7 proprietary business tools and pioneer in agentic AI operations. He has access to 400+ private family offices and specializes in scaling businesses through technology and capital access."
    },
    {
      question: "What's the time commitment for the group container?",
      answer: "1 hour private coaching monthly, plus access to daily fitness programming (34 minutes), community calls, and the technology suite. Designed for busy executives who want transformation without time overwhelm."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, for all programs except the Group Container. Immersive packages can be structured over 3-12 months. We also accept cryptocurrency and have relationships with funding partners for qualified businesses."
    },
    {
      question: "What results can I expect?",
      answer: "Physical: increased energy, better sleep, stress resilience. Mental: emotional regulation, leadership presence, decision clarity. Business: revenue growth, operational efficiency, team alignment, capital access. Most see results within 30-60 days."
    },
    {
      question: "Is this for startups or established businesses?",
      answer: "Both! Jeff works with pre-revenue startups and $50M+ enterprises. Krystalore coaches everyone from military spouses starting their first business to Fortune 500 executives. The principles scale."
    },
    {
      question: "What happens after the program ends?",
      answer: "You keep lifetime access to the technology suite (varies by package), alumni community, and quarterly check-ins. This isn't a 'fix and forget' program—we're building a relationship for your long-term success."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/go9/hero.jpg"
          alt="Business Smart Start - Mind Body Business Transformation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto py-20 lg:py-32">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                Business <span className="bg-gradient-to-r from-[#0D9488] to-[#F97316] bg-clip-text text-transparent">Smart Start</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
                Because Shift Happens
              </p>
              <p className="text-lg text-gray-300 mt-6 mb-8 max-w-2xl leading-relaxed">
                The only program that transforms your mind, body, AND business simultaneously. When you're stuck, going through a shift, or need to level up—you need the right team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                <a 
                  href="/book" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-10 py-5 font-bold hover:scale-105 transition-transform duration-300 text-center shadow-2xl text-lg"
                >
                  Book a Breakthrough Call
                </a>
                <a 
                  href="#quiz" 
                  className="border-2 border-white/60 text-white rounded-full px-10 py-5 font-bold hover:bg-white/10 transition-colors duration-300 text-center text-lg"
                >
                  Take the Smart Start Quiz
                </a>
              </div>
              <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-[#F97316]" />
                  <span>4 Exits • $500M+ Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#14B8A6]" />
                  <span>22yr Military • Amazon Author</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/go9/corporate.jpg"
                  alt="Business Smart Start Program"
                  fill
                  className="object-cover"
                  priority
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Shift Happens Section */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                When <span className="text-[#F97316]">Shift</span> Happens
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                You're stuck, burned out, or scaling but breaking. You've tried coaches, consultants, masterminds—but none addressed ALL the pieces.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Brain className="h-12 w-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Mind Without Body</h3>
                <p className="text-gray-600">Breaks down under pressure. Stress becomes your operating system.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Heart className="h-12 w-12 text-[#0D9488] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Business Without Wellness</h3>
                <p className="text-gray-600">Burns out fast. Success feels hollow and unsustainable.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Zap className="h-12 w-12 text-[#14B8A6] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technology Without Strategy</h3>
                <p className="text-gray-600">Wastes money and creates more complexity instead of solutions.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 mb-4">We Connect ALL the Dots</p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Mind, body, and business aren't separate—they're interconnected systems. When you optimize all three simultaneously, you create breakthrough results that feel sustainable and authentic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Leaders Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Meet Your <span className="text-[#0D9488]">Leaders</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The leader who heals and the geek who scales—together, they create transformation that lasts.
              </p>
            </div>

            {/* Krystalore Crews Bio */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="relative">
                  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/go9/portrait.jpg"
                      alt="Krystalore Crews - Executive Coach, Author, Speaker"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#F97316] fill-current" />
                      <span className="font-bold text-gray-800">4.9/5</span>
                      <span className="text-gray-600 text-sm">(28 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Krystalore Crews</h3>
                  <p className="text-xl text-[#0D9488] font-semibold mb-6">The Leader • The Coach • The Healer</p>
                  
                  <div className="bg-[#F4F1EC] p-6 rounded-xl mb-6">
                    <Quote className="h-8 w-8 text-[#0D9488]/30 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed">
                      "I have known Krystalore for well over a year, and in that time I have witnessed firsthand her extraordinary ability to hold space for others with a depth of compassion, intentionality, and genuine love that is exceedingly rare. She possesses an innate gift for meeting people exactly where they are and guiding them toward profound self-healing and self-awareness."
                    </p>
                    <p className="text-sm text-gray-600 mt-3 font-semibold">— Jeff Cline</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Amazon Best-Selling Author, 22-year Air Force veteran, Pentagon program leader, and Certified Life & Somatic Coach. Krystalore brings military discipline, somatic wisdom, and real-world business experience to help high-performers build lives they don't need to escape from.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Award className="h-6 w-6 text-[#F97316]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Amazon Best-Selling</p>
                        <p className="text-gray-600 text-xs">Author (Multiple Books)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Shield className="h-6 w-6 text-[#0D9488]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">22 Years Military</p>
                        <p className="text-gray-600 text-xs">Air Force Veteran</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Building2 className="h-6 w-6 text-[#14B8A6]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Pentagon Programs</p>
                        <p className="text-gray-600 text-xs">Government Leadership</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Heart className="h-6 w-6 text-[#F97316]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Somatic Coach</p>
                        <p className="text-gray-600 text-xs">Compassionate Inquiry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Krystalore Highlights Grid */}
              <div className="bg-gradient-to-br from-[#0D9488]/5 to-[#F97316]/5 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Krystalore's Highlights</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Book className="h-8 w-8 text-[#0D9488] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Author & Creator</h5>
                    <p className="text-sm text-gray-700">Krystal Clear Life Planner, Road to Resilience, Freedom Formula</p>
                  </div>
                  <div className="text-center">
                    <Mic className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Keynote Speaker</h5>
                    <p className="text-sm text-gray-700">NAWBO, FORCE Magazine, Breakfast with Champions</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-[#14B8A6] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Retreat Leader</h5>
                    <p className="text-sm text-gray-700">Costa Rica, Caribbean, Transformational Experiences</p>
                  </div>
                  <div className="text-center">
                    <Dumbbell className="h-8 w-8 text-[#0D9488] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Fitness Expert</h5>
                    <p className="text-sm text-gray-700">HIIT, Kickboxing, 34-Minute Protocol</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jeff Cline Bio */}
            <div>
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="lg:order-2 relative">
                  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/go9/keynote.jpg"
                      alt="Jeff Cline - Technology Entrepreneur, Business Scaler"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <p className="text-2xl font-black text-[#F97316]">$500M+</p>
                      <p className="text-sm text-gray-600 font-semibold">Revenue Generated</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Jeff Cline</h3>
                  <p className="text-xl text-[#F97316] font-semibold mb-6">The Geek • The Builder • The Scaler</p>
                  
                  <div className="bg-[#F4F1EC] p-6 rounded-xl mb-6">
                    <Quote className="h-8 w-8 text-[#F97316]/30 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed">
                      "I have worked with some of the most celebrated minds in venture capital and private equity. Jeff operates on a different plane entirely. He sees the architecture of opportunity before anyone else even recognizes there is a building. Within seventy-two hours of our first session, he restructured my entire go-to-market and tripled our pipeline velocity."
                    </p>
                    <p className="text-sm text-gray-600 mt-3 font-semibold">— Dr. Annika, Switzerland</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    4 exits, 100+ companies built, $500M+ revenue generated. Jeff is the technology architect and scaling expert who provides the systems, tools, and capital access that turn breakthrough moments into sustainable success. Pioneer in AI operations and creator of 7 proprietary business tools.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <TrendingUp className="h-6 w-6 text-[#F97316]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">4 Exits</p>
                        <p className="text-gray-600 text-xs">100+ Companies Built</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Code className="h-6 w-6 text-[#0D9488]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">7 Proprietary Tools</p>
                        <p className="text-gray-600 text-xs">Full Technology Suite</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <DollarSign className="h-6 w-6 text-[#14B8A6]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Capital Access</p>
                        <p className="text-gray-600 text-xs">400+ Family Offices</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <Globe className="h-6 w-6 text-[#F97316]" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">AI Pioneer</p>
                        <p className="text-gray-600 text-xs">Agentic Operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jeff Highlights Grid */}
              <div className="bg-gradient-to-br from-[#F97316]/5 to-[#0D9488]/5 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Jeff's Highlights</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Briefcase className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Executive Leadership</h5>
                    <p className="text-sm text-gray-700">Mastermind facilitation, C-suite advisory</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-[#0D9488] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Island Immersions</h5>
                    <p className="text-sm text-gray-700">Caribbean program creator and host</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-8 w-8 text-[#14B8A6] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Marketing Systems</h5>
                    <p className="text-sm text-gray-700">Conversion architecture, scaling frameworks</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
                    <h5 className="font-bold text-gray-800 mb-1">Network Access</h5>
                    <p className="text-sm text-gray-700">Family offices, capital partners, advisors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Impact */}
            <div className="mt-16 text-center bg-gradient-to-r from-[#37a6a6] to-[#0D9488] p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Together, They Create Magic</h3>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Krystalore revolutionizes how you show up in your life. Jeff revolutionizes how your business shows up in the world. 
                When healing meets scaling, transformation becomes inevitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Three <span className="text-[#0D9488]">Pillars</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Mind, Body, and Business aren't separate—they're interconnected systems that must work in harmony.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">MIND</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Identity work and self-awareness</li>
                  <li>• Emotional intelligence (EQ/IQ)</li>
                  <li>• Somatic healing and trauma release</li>
                  <li>• Compassionate Inquiry sessions</li>
                  <li>• Leadership presence development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">BODY</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Daily fitness regiment (HIIT, kickboxing)</li>
                  <li>• 34-Minute Performance Protocol</li>
                  <li>• Nutrition and wellness coaching</li>
                  <li>• Energy optimization strategies</li>
                  <li>• Stress resilience building</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-[#37a6a6] to-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">BUSINESS</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• 7-tool technology suite access</li>
                  <li>• Scaling frameworks and systems</li>
                  <li>• AI agents and automation</li>
                  <li>• Capital access (400+ family offices)</li>
                  <li>• Exit strategy architecture</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 font-medium">
                When all three pillars are strong, you don't just succeed—you thrive sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What's <span className="text-[#0D9488]">Included</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A complete transformation ecosystem designed for high-performing entrepreneurs and executives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Mic className="h-8 w-8 text-[#0D9488] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Private Coaching (Business Level)</h3>
                <p className="text-gray-700 text-sm">One-on-one sessions addressing leadership, scaling, and strategic decision-making.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Code className="h-8 w-8 text-[#F97316] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Jeff Cline Technology Suite</h3>
                <p className="text-gray-700 text-sm">Full access to all 7 proprietary tools for scaling and optimization.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Dumbbell className="h-8 w-8 text-[#14B8A6] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Daily Fitness & Health Regiment</h3>
                <p className="text-gray-700 text-sm">HIIT, kickboxing, functional training designed for busy executives.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Target className="h-8 w-8 text-[#0D9488] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Freedom Formula Framework</h3>
                <p className="text-gray-700 text-sm">The 5 C's: Core, Confidence, Consistency, Community, Celebration.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Heart className="h-8 w-8 text-[#F97316] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Identity & Self-Love Coaching</h3>
                <p className="text-gray-700 text-sm">Deep identity work to align who you are with who you're becoming.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Brain className="h-8 w-8 text-[#14B8A6] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">EQ & IQ Development</h3>
                <p className="text-gray-700 text-sm">Emotional intelligence training for better leadership and decision-making.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <TreePine className="h-8 w-8 text-[#0D9488] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Somatic Healing Sessions</h3>
                <p className="text-gray-700 text-sm">Body-based therapy to release stored trauma and stress patterns.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <Users className="h-8 w-8 text-[#F97316] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Group Community Access</h3>
                <p className="text-gray-700 text-sm">Connect with other high-performers on the same transformation journey.</p>
              </div>

              <div className="bg-[#F4F1EC] p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-[#14B8A6] mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-3">Retreat/Immersive Options</h3>
                <p className="text-gray-700 text-sm">Caribbean island experiences for accelerated transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Arsenal Section */}
      <section className="py-20 bg-gradient-to-br from-[#37a6a6] to-[#0D9488]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology <span className="text-[#14B8A6]">Arsenal</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Jeff's 7 proprietary tools give you an unfair advantage in the market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'MoneyWords.org',
                  desc: 'Opportunity Qualification & Decision Intelligence',
                  detail: 'AI-powered lead qualification and decision-making framework for high-value opportunities.',
                  icon: Target
                },
                {
                  name: 'el.ag',
                  desc: 'Big Data, Predictive Analytics & Visitor Optimization',
                  detail: 'Advanced analytics platform that predicts customer behavior and optimizes conversion funnels.',
                  icon: TrendingUp
                },
                {
                  name: 'jeff-cline.com',
                  desc: 'Marketing Systems & Conversion Architecture',
                  detail: 'Complete marketing automation suite with proven conversion templates and sequences.',
                  icon: Zap
                },
                {
                  name: 'VoiceDrips.com',
                  desc: 'Outreach & Scale Optimization',
                  detail: 'Voice-first outreach platform that creates authentic connections at scale.',
                  icon: Mic
                },
                {
                  name: 'agents.biz',
                  desc: 'Agentic AI Team Members',
                  detail: 'Deploy AI agents that work 24/7 handling customer service, sales, and operations.',
                  icon: Users
                },
                {
                  name: 'multifamilyoffice.ai',
                  desc: 'Capital Access & Family Office Network',
                  detail: 'Direct access to 400+ private family offices and high-net-worth investment opportunities.',
                  icon: DollarSign
                },
                {
                  name: 'softcircle.ai',
                  desc: 'Family Office Services & Funding Pipeline',
                  detail: 'Complete funding ecosystem connecting businesses with private capital and advisory services.',
                  icon: Globe
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                      <p className="text-[#14B8A6] font-semibold mb-2">{tool.desc}</p>
                      <p className="text-gray-300 text-sm">{tool.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-200 mb-6">
                Combined value: <span className="text-[#14B8A6] font-bold">$50,000+/year</span> • Included in all packages
              </p>
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-10 py-4 font-bold hover:scale-105 transition-transform text-lg"
              >
                Get Access Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#F4F1EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Choose Your <span className="text-[#0D9488]">Transformation</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Four packages designed to meet you wherever you are in your journey—from virtual support to total island immersion.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                {
                  name: 'Group Container',
                  price: '$3,000',
                  period: '/month',
                  features: [
                    '1 hour private coaching monthly',
                    'Access to jeff-cline.com product suite',
                    'Krystalore\'s daily fitness regiment',
                    'Identity, self-love, EQ/IQ coaching',
                    'Group community access'
                  ],
                  accent: '#0D9488',
                  popular: false
                },
                {
                  name: 'One-Week Immersive',
                  price: '$25,000',
                  period: '',
                  features: [
                    '7 days intensive on Caribbean island',
                    'All Group Container benefits',
                    'Daily 1-on-1 sessions with both leaders',
                    'Full technology ecosystem (6 months)',
                    'Fitness, nutrition, somatic healing daily'
                  ],
                  accent: '#14B8A6',
                  popular: false
                },
                {
                  name: 'Guaranteed Success',
                  price: '$50,000',
                  period: '',
                  badge: 'MOST POPULAR',
                  features: [
                    '30-day intensive program',
                    'Guaranteed measurable business outcomes',
                    'Daily private coaching',
                    'Complete technology deployment',
                    'Full wellness transformation protocol',
                    'VIP retreat experience included'
                  ],
                  accent: '#F97316',
                  popular: true
                },
                {
                  name: '90-Day Live & Work',
                  price: '$100,000',
                  period: '',
                  features: [
                    'Live and work immersively for 90 days',
                    'Caribbean island location',
                    'Unlimited access to both leaders',
                    'Complete business transformation',
                    'Full technology ecosystem (12 months)',
                    'Daily fitness, nutrition, somatic work',
                    'Exit strategy architecture'
                  ],
                  accent: '#37a6a6',
                  popular: false
                }
              ].map((tier, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden ${tier.popular ? 'ring-4 ring-[#F97316] ring-opacity-50' : ''}`}>
                  {tier.badge && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white text-center py-2 text-sm font-bold">
                      {tier.badge}
                    </div>
                  )}
                  
                  <div className={`p-8 ${tier.badge ? 'mt-8' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-black" style={{ color: tier.accent }}>{tier.price}</span>
                      {tier.period && <span className="text-gray-600 text-lg">{tier.period}</span>}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="/book" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center py-4 px-6 rounded-full text-white font-bold transition-transform hover:scale-105"
                      style={{ backgroundColor: tier.accent }}
                    >
                      Book a Call
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Payment plans available for immersive packages</p>
              <Link href="/apply" className="text-[#0D9488] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Apply for Custom Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Start Quiz */}
      <section className="py-20 bg-white" id="quiz">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                The Smart Start <span className="text-[#0D9488]">Quiz</span>
              </h2>
              <p className="text-xl text-gray-700">
                Discover which program is perfect for your current situation and transformation goals.
              </p>
            </div>
            
            <SmartStartQuiz />
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Client <span className="text-[#0D9488]">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-700">
                Real transformations from real people who chose to invest in all three pillars.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Krystalore testimonials */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-10 w-10 text-[#0D9488]/30 mb-6" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "Krystalore helped me see that I was carrying years of trauma in my body. Through somatic work, I finally found the relief that talk therapy alone couldn't give me. I feel like a completely different person—more grounded, more present, more alive."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center text-white font-bold">D</div>
                  <div>
                    <p className="font-bold text-gray-800">Delcey</p>
                    <div className="flex text-[#F97316]">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-10 w-10 text-[#F97316]/30 mb-6" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "I have worked with some of the most celebrated minds in venture capital and private equity. Jeff operates on a different plane entirely. He sees the architecture of opportunity before anyone else even recognizes there is a building. Within seventy-two hours of our first session, he restructured my entire go-to-market and tripled our pipeline velocity."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div>
                    <p className="font-bold text-gray-800">Dr. Annika</p>
                    <p className="text-gray-600 text-sm">Switzerland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-10 w-10 text-[#14B8A6]/30 mb-6" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "The Beyond Limits community changed my life. I came in looking for fitness and left with a whole new perspective on leadership, relationships, and what it means to truly thrive. Krystalore is the real deal."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div>
                    <p className="font-bold text-gray-800">Lynn</p>
                    <div className="flex text-[#F97316]">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-10 w-10 text-[#0D9488]/30 mb-6" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "As a military spouse, I felt invisible for years. Krystalore's coaching gave me my voice back. Her programs are thoughtful, powerful, and designed for people who are ready to stop playing small."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center text-white font-bold">D</div>
                  <div>
                    <p className="font-bold text-gray-800">Diana</p>
                    <p className="text-gray-600 text-sm">Military Spouse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-[#F97316]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-6 w-6 fill-current" />)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">4.9 out of 5</p>
                  <p className="text-gray-600 text-sm">Based on 28+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Scaling Section */}
      <section className="py-20 bg-gradient-to-br from-[#37a6a6] to-[#0D9488]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Meets <span className="text-[#14B8A6]">AI Acceleration</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Human leadership amplified by artificial intelligence creates unprecedented business results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#14B8A6] mb-2">100+</div>
                    <p className="text-gray-300 text-sm">Companies Built</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#F97316] mb-2">$500M+</div>
                    <p className="text-gray-300 text-sm">Revenue Generated</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#14B8A6] mb-2">400+</div>
                    <p className="text-gray-300 text-sm">Family Offices</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#F97316] mb-2">7</div>
                    <p className="text-gray-300 text-sm">Proprietary Tools</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">The New Rules of Business</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    <span>Leaders who can't regulate their emotions can't lead effectively</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    <span>Physical energy directly impacts decision-making quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    <span>AI amplifies human capability but requires emotional intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                    <span>Sustainable scaling requires mind-body-business alignment</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/go9/coaching.jpg"
                    alt="Leadership coaching and AI business acceleration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl text-gray-200 mb-8">
                Ready to lead with unshakeable presence and scale with intelligent systems?
              </p>
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-10 py-4 font-bold hover:scale-105 transition-transform text-lg"
              >
                Book Your Strategy Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Frequently Asked <span className="text-[#0D9488]">Questions</span>
              </h2>
              <p className="text-xl text-gray-700">
                Everything you need to know about the Business Smart Start program.
              </p>
            </div>

            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {faqItems.map((faq, index) => (
                <div key={index} itemScope itemType="https://schema.org/Question">
                  <FAQItem 
                    question={faq.question} 
                    answer={faq.answer}
                  />
                  <meta itemProp="name" content={faq.question} />
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <meta itemProp="text" content={faq.answer} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#37a6a6] via-[#0D9488] to-[#37a6a6]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/go9/group-sunset.jpg"
                  alt="Krystalore Crews and Jeff Cline - Business transformation leaders"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="text-left lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Your Shift Is Coming
                </h2>
                <p className="text-2xl text-gray-200 mb-8">
                  The question is: <span className="text-[#14B8A6] font-semibold">Will you be ready?</span>
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                  <Quote className="h-8 w-8 text-[#14B8A6]/50 mb-3" />
                  <p className="text-gray-200 italic">
                    "Krystalore has completely revolutionized the way I approach my own life. The individuals I have personally seen touched by her work have experienced shifts that go beyond incremental improvement — they have been fundamentally and deeply impacted."
                  </p>
                  <p className="text-sm text-gray-400 mt-3 font-semibold">— Jeff Cline</p>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  When mind, body, and business align, you don't just succeed—you become unstoppable.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-12 py-5 font-bold hover:scale-105 transition-transform text-xl shadow-2xl"
              >
                Book a Breakthrough Call
              </a>
              <Link 
                href="/apply" 
                className="border-2 border-white/60 text-white rounded-full px-12 py-5 font-bold hover:bg-white/10 transition-colors text-xl"
              >
                Apply Now
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Free Strategy Call</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps - Scale & Care + Co-Branded */}
      <section className="py-16 px-4 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">What Comes Next</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">After Your <span className="text-[#0D9488]">Immersive</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Your transformation doesn&apos;t end when the program does. Two powerful paths to continue your momentum.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#0D9488]/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center mb-5">
                <ArrowRight className="h-7 w-7 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scale & Care</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Post-immersive ongoing support, technology, and coaching to turn your breakthrough into compound growth. Includes bootcamp workouts, masterminds, co-working sessions, and consulting at 50% off.
              </p>
              <Link href="/smart-start-scale-care" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform text-sm">
                Explore Scale & Care <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#F97316]/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-5">
                <Users className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Co-Branded Container</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                For community leaders, family offices, and associations. Co-develop a custom ecosystem leveraging Smart Start technology with your audience. Build a rising-tide-lifts-all-boats partnership.
              </p>
              <Link href="/co-branded-container" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform text-sm">
                Explore Co-Branded <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}