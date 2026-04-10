'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, CheckCircle, AlertTriangle, Shield, Users, Zap, Target, Heart, Brain, Trophy, DollarSign, Calendar, HelpCircle, TrendingUp, Rocket, Clock, Star } from 'lucide-react'

export default function SmartStartScaleCarePage() {
  const includedItems = [
    "Beyond Limits Bootcamp workouts 3x/week",
    "Special invitations to monthly Masterminds (live or online)",
    "Access to co-working sessions",
    "Discounted follow-up retreats or immersives",
    "Personal coaching through weekly group container",
    "Consulting at 50% discount as needed outside included containers"
  ]

  const budgetBreakdown = [
    { category: "Technology Suite", description: "MoneyWords, el.ag, VoiceDrips, agents.biz etc.", amount: "varies" },
    { category: "Marketing & Demand Engine", description: "Lead generation and conversion systems", amount: "varies" },
    { category: "AI Agent Operations", description: "Automated business processes", amount: "varies" },
    { category: "Coaching & Community", description: "Ongoing support and guidance", amount: "included" }
  ]

  const faqs = [
    {
      question: "What happens after my immersive ends?",
      answer: "You enter a seamless transition into ongoing Scale & Care. All the tools, systems, and support you received during your immersive continue on a monthly basis to ensure your investment compounds."
    },
    {
      question: "What's the minimum monthly commitment?",
      answer: "The typical monthly budget ranges from $32,500 to $75,000 depending on your scaling goals and customer acquisition targets. We work within your cash flow reality."
    },
    {
      question: "Can I pause and restart?",
      answer: "Yes, we understand business has seasons. You can pause and restart your Scale & Care program as needed, though momentum is best maintained with consistency."
    },
    {
      question: "What if I can't afford $32K/month right now?",
      answer: "We'll work with you to create a scaled-down version that fits your current budget while keeping your momentum alive. Sometimes there's a cash gap between spending and revenue - we get it."
    },
    {
      question: "How does the success package work?",
      answer: "Our Success Package aligns our incentives with yours. We may take reduced upfront fees in exchange for a percentage of the revenue we help create. Rising tide lifts all boats."
    },
    {
      question: "What's included vs. what costs extra?",
      answer: "Core coaching, community access, and basic tools are included. Advanced scaling tools, additional marketing spend, and specialized services are typically additional."
    },
    {
      question: "How long do most clients stay in the Scale & Care program?",
      answer: "Successful partnerships often last years. Once you've built a relationship on vision, alignment, and solid KPIs, it becomes generational. We're not looking for quick exits - we're building long-term partnerships."
    },
    {
      question: "Can I bring on additional team members?",
      answer: "Absolutely. As you scale, we often help integrate your team into the systems and processes. This is about building sustainable, transferable business systems."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#0D9488]/20">
        <div className="absolute inset-0">
          <Image
            src="/images/go9/corporate.jpg"
            alt="Smart Start Scale Care"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              After the Immersive,<br />
              <span className="bg-gradient-to-r from-[#0D9488] to-[#F97316] bg-clip-text text-transparent">
                the Real Work Begins
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              You invested $25K, $50K, or $100K in transformation. Now it's time to turn that investment into compound returns through ongoing partnership, support, and scaling infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book" 
                className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center"
              >
                Book a Scale Call
              </Link>
              <Link 
                href="/business-smart-start" 
                className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center"
              >
                Back to Smart Start
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How Scale & Care <span className="text-[#0D9488]">Works</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Once you complete a 25K, 50K, or 100K immersive experience, all the technology, services, coaching, and benefits you received are available on an ongoing monthly basis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">$25K Immersive</h3>
              <p className="text-gray-600">First 30 days of Scale & Care included with the 1-week immersive experience.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">$50K & $100K Immersives</h3>
              <p className="text-gray-600">First 90 days of Scale & Care included with 30-day and 90-day immersive experiences.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#37a6a6] to-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ongoing Monthly</h3>
              <p className="text-gray-600">After included period, ongoing support billed monthly as needed for upkeep and KPI achievement.</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Everything Within Container Price</h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Everything you need to test, try, and build levers is available within the container price. 
              This gives you the freedom to experiment and optimize without worrying about additional costs 
              for each tool or system you want to test.
            </p>
          </div>
        </div>
      </section>

      {/* What We Built Together Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What We Built <span className="text-[#F97316]">Together</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              During your immersive, we didn't just build systems — we established the foundation for sustainable, scalable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/go9/coaching.jpg"
                alt="Business strategy and KPI development"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Your KPIs (Key Performance Indicators)</h3>
                  <p className="text-gray-600">Clear, measurable goals that drive every decision and action in your business.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lifetime Value (LTV) of Your Customer</h3>
                  <p className="text-gray-600">Understanding the total worth of your customer relationships over time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cost Per Acquisition (CPA)</h3>
                  <p className="text-gray-600">Precisely what it costs to acquire each new customer through your systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Comparison Data Collection</h3>
                  <p className="text-gray-600">90 days is preferable because more things to test, more trial and error, more ways to optimize and fine-tune CPA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 1-2-3 Scale Process */}
      <section className="py-20 px-4 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="text-[#F97316]">1-2-3</span> Scale Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              After your immersive, scaling is a simple three-step process that turns your foundation into explosive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Determine</h3>
                <p className="text-gray-600">How many new customers you want. This drives everything else in your scaling strategy.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm</h3>
                <p className="text-gray-600">You have the budget to scale. Sometimes there's a cash gap — it takes longer to get paid than to spend the money acquiring customers.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#37a6a6] to-[#0D9488] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Deploy, Exit & Scale</h3>
                <p className="text-gray-600">All tools are deployed and optimized. Many come with ongoing fees, but they're generating returns that justify the investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Ongoing Care */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What's Included in <span className="text-[#0D9488]">Ongoing Care</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your ongoing partnership includes everything you need to maintain momentum and continue scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedItems.map((item, index) => (
              <div key={index} className="bg-[#F4F1EC] rounded-xl p-6 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-[#0D9488] mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic">
              "Everything you received during your immersive continues seamlessly to ensure your transformation compounds over time."
            </p>
          </div>
        </div>
      </section>

      {/* The Success Package Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D9488]/10 to-[#F4F1EC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                The <span className="text-[#0D9488]">Success Package</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Success Package allows reduced rates on hardware and software long-term in exchange for aligned incentives. We make our money on the backend.
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <p className="text-gray-700 italic mb-4">
                  "For example: a health and wellness client where we're incentivized by 20% of revenue created to help them scale higher and higher."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-[#F97316]" />
                  <p className="text-gray-700">Rising Tide Lifts All Boats mentality</p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-[#F97316]" />
                  <p className="text-gray-700">Long-term partnerships that thrive across generations</p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#F97316]" />
                  <p className="text-gray-700">Trading energy with no energy leaking</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#F97316]" />
                  <p className="text-gray-700">Aligned mission partnerships with multiple ways to win</p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/go9/corporate.jpg"
                alt="Success partnership and aligned incentives"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WARNING Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#F97316]/20 via-red-50 to-[#F97316]/20 border-y-4 border-[#F97316]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-[#F97316] rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 uppercase tracking-tight">
            This Is Not For The Faint of Heart
          </h2>
          
          <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-semibold">This is for people who are REALLY ready to make shift happen</p>
              </div>
              
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-semibold">Do not sign up unless you're prepared to take what you've learned to the next level</p>
              </div>
              
              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-semibold">Scale does not come easily — there is a LOT of work after the work</p>
              </div>
              
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-semibold">You must be prepared for the commitment</p>
              </div>
              
              <div className="flex items-start gap-4">
                <Rocket className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-semibold">This is serious business transformation, not a feel-good retreat</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xl font-bold text-gray-800 italic">
                "If you're looking for easy, this isn't it. If you're looking for results, you're in the right place."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Scale Budget Section */}
      <section className="py-20 px-4 bg-[#37a6a6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Typical <span className="text-[#14B8A6]">Scale Budget</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We believe in complete transparency about costs. Here's what serious scaling typically requires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#0D9488]/20 to-[#14B8A6]/10 rounded-2xl p-8 border border-[#14B8A6]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Monthly Investment Range</h3>
                <div className="text-center py-6">
                  <span className="text-5xl font-black text-[#14B8A6]">$32,500</span>
                  <span className="text-white text-2xl mx-4">to</span>
                  <span className="text-5xl font-black text-[#F97316]">$75,000</span>
                  <p className="text-gray-300 mt-2">/month</p>
                </div>
                
                <div className="space-y-3 text-sm text-gray-300">
                  <p><span className="text-[#14B8A6]">•</span> Depends on: how many new customers, how fast you want to scale</p>
                  <p><span className="text-[#14B8A6]">•</span> Cash allowances and success in first 30/90 days</p>
                  <p><span className="text-[#14B8A6]">•</span> $32,500 is the average of all known tools used to scale</p>
                  <p><span className="text-[#F97316]">•</span> Want to go faster? Increase your budget</p>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-white/5 rounded-xl">
                <p className="text-gray-300 italic">
                  "We put these levers on rails, knowing many customers want to get to their numbers as fast as possible. Some numbers can be adjusted but there are base costs."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Typical Budget Breakdown</h3>
              {budgetBreakdown.map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">{item.category}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                    <div className="text-[#14B8A6] font-semibold text-sm">
                      {item.amount}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-[#F97316]/20 rounded-xl border border-[#F97316]/50">
                <p className="text-white text-sm">
                  <strong>Note:</strong> Minimum fees apply for each service. See individual sites for details.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">
              This is premium, serious scaling. We're confident about the investment because we're confident about the returns.
            </p>
            <Link 
              href="/book" 
              className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <DollarSign className="h-5 w-5" />
              Discuss Your Budget
            </Link>
          </div>
        </div>
      </section>

      {/* The Long Game Section */}
      <section className="py-20 px-4 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="text-[#0D9488]">Long Game</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/go9/group-sunset.jpg"
                alt="Long-term partnerships and generational success"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <blockquote className="text-2xl italic text-gray-800 mb-8 leading-relaxed">
                "Once you have lived and walked and shared life together and built a relationship on vision, alignment, and solid KPIs, it can be very powerful and live on for a very long time."
              </blockquote>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Generational Partnerships</h3>
                    <p className="text-gray-600">This is about building relationships that thrive across generations, creating lasting impact for families and communities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Energy That Feels Good</h3>
                    <p className="text-gray-600">Trading energy that feels good for all parties. No energy leaking. All positivity. Several ways to win together.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Rising Tide Mentality</h3>
                    <p className="text-gray-600">A rising tide lifts all boats. We're part of what we call aligned mission partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently <span className="text-[#F97316]">Asked Questions</span>
            </h2>
            <p className="text-lg text-gray-700">
              Get clear answers about the Scale & Care program and what to expect.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#F4F1EC] rounded-xl p-6 hover:shadow-md transition-shadow"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3"
                  itemProp="name"
                >
                  <HelpCircle className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <div 
                  className="text-gray-700 leading-relaxed ml-8"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#0D9488]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to <span className="text-[#14B8A6]">Scale?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Haven't Done an Immersive Yet?</h3>
              <p className="text-gray-300 mb-6">Start with the Smart Start program to build your foundation first.</p>
              <Link 
                href="/business-smart-start" 
                className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform block text-center"
              >
                Explore Smart Start
              </Link>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Scale Now?</h3>
              <p className="text-gray-300 mb-6">You've completed an immersive and you're ready for serious scaling.</p>
              <Link 
                href="/book" 
                className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform block text-center"
              >
                Book Your Scale Call
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 text-sm">
              This is serious business transformation for serious entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}