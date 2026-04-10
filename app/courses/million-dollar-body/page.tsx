'use client'
import Image from 'next/image'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  Heart, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen,
  Video,
  MessageSquare,
  UserCheck,
  GraduationCap,
  Smartphone,
  Gift,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react'

const FALLBACK_HERO = 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/68f65b722ae2efd4578248eb.png'

export default function MillionDollarBodyAcademy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [heroImage, setHeroImage] = useState(FALLBACK_HERO)

  useEffect(() => {
    fetch('/api/ghl-hero-image')
      .then(r => r.json())
      .then(data => { if (data.url) setHeroImage(data.url) })
      .catch(() => {})
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "When exactly can I get started?",
      answer: "You can get started immediately upon enrollment! Once your payment is processed, you'll receive instant access to your member portal with all the materials and resources to begin your transformation journey."
    },
    {
      question: "When do I get access to my training?",
      answer: "You'll receive access to your training modules immediately after enrollment. The program is structured with 6 modules released every other week over 3 months, allowing you to progress at the optimal pace."
    },
    {
      question: "How long do I have access to the training?",
      answer: "You have lifetime access to all training materials! Even after the 3-month program ends, you can continue to access your course content, workbooks, and resources whenever you need them."
    },
    {
      question: "Will my workbook be printable?",
      answer: "Yes! You'll receive an interactive digital workbook that's fully printable. You can work through it digitally or print sections as needed to work through exercises offline."
    },
    {
      question: "Will I get access to support?",
      answer: "Absolutely! You'll have access to our private community group, weekly Q&A calls with Krystalore, plus a 24/7 accountability partner to keep you motivated and on track."
    },
    {
      question: "How much time will it take?",
      answer: "The program is designed for busy professionals. Plan for about 3-5 hours per week including workouts, module content, and community engagement. The 6 modules are released every other week over 3 months for optimal pacing."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/fitness-alt.jpg" alt="Million Dollar Body" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Million Dollar Body</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">The premium fitness and mindset program designed to build a body and life that commands respect.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transform Every Aspect of Your Life
            </h2>
            <p className="text-lg text-gray-700">
              This isn't just about fitness - it's about becoming the powerful woman you were meant to be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="h-12 w-12 text-[#E8A849] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Value Systems Deep Dive</h3>
              <p className="text-gray-600">Take a deep dive into your value systems and personality to understand what truly drives you.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Target className="h-12 w-12 text-[#34c5c5] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Goal Setting</h3>
              <p className="text-gray-600">Set yourself up for success by establishing clear, achievable goals that align with your vision.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <TrendingUp className="h-12 w-12 text-[#84d7d7] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Healthy Habits</h3>
              <p className="text-gray-600">Establish healthy habits that stick and create lasting transformation in your daily routine.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Users className="h-12 w-12 text-[#B8A9D4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Relationship Mastery</h3>
              <p className="text-gray-600">Improve your personal and professional relationships through enhanced confidence and communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get a rocking body that you love and feel like a million bucks!
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            This comprehensive program combines fitness, nutrition, mindset work, and community support 
            to help you achieve the body and confidence you've always desired. You deserve to feel powerful, 
            energized, and absolutely unstoppable in every area of your life.
          </p>
        </div>
      </section>

      {/* Perfect For You Section */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This is Perfect for YOU if...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">💎 She desires a MILLION DOLLAR body but makes time for everyone else</h3>
              <p className="text-lg opacity-90">You're always putting others first - your team, your family, your business - but it's time to invest in yourself.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🏢 Her Business and family are her only priorities</h3>
              <p className="text-lg opacity-90">You've built an empire but neglected your health and fitness. It's time to add yourself to the priority list.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">😤 She dislikes the person she sees in the mirror / takes on fad diets</h3>
              <p className="text-lg opacity-90">You're tired of quick fixes and fad diets. You want real, lasting transformation that makes you feel confident and proud.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">👑 She's a powerful professional woman ready to level up</h3>
              <p className="text-lg opacity-90">You dominate in the boardroom, now it's time to dominate your health and feel unstoppable in every area of life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                At the end of 3 months...
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#34c5c5] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll be completely committed to your health and wellbeing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#34c5c5] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll have the rocking body you've always dreamed of</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#84d7d7] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll have established a sustainable fitness routine that fits your schedule</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll have boundless energy to tackle your biggest goals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#B8A9D4] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll feel confident and powerful in every room you enter</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#34c5c5] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-700">You'll have the tools and mindset for lifelong success</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/63d2461d29f84e594b2d8137.png"
                alt="Transformation Results"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Here's What You Get
            </h2>
            <p className="text-xl text-gray-700">
              A comprehensive system designed to transform your body, mind, and confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#34c5c5] to-[#84d7d7] text-white p-6 rounded-xl text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">The Million Dollar Body Course</h3>
              <p className="text-sm opacity-90">Complete 6 module system with step-by-step guidance</p>
            </div>
            <div className="bg-gradient-to-br from-[#E8A849] to-[#E07A5F] text-white p-6 rounded-xl text-center">
              <Video className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Bi-Weekly Community Trainings</h3>
              <p className="text-sm opacity-90">Live mindset, fitness & life coaching sessions</p>
            </div>
            <div className="bg-gradient-to-br from-[#B8A9D4] to-[#84d7d7] text-white p-6 rounded-xl text-center">
              <UserCheck className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">The Community</h3>
              <p className="text-sm opacity-90">Connect with unstoppable women on the same journey</p>
            </div>
            <div className="bg-gradient-to-br from-[#E07A5F] to-[#E8A849] text-white p-6 rounded-xl text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">24/7 Accountability Partner</h3>
              <p className="text-sm opacity-90">Your personal support system whenever you need it</p>
            </div>
            <div className="bg-gradient-to-br from-[#84d7d7] to-[#34c5c5] text-white p-6 rounded-xl text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">3 Months Bi-Weekly Q&A Coaching</h3>
              <p className="text-sm opacity-90">Direct access to Krystalore for personalized guidance</p>
            </div>
            <div className="bg-gradient-to-br from-[#34c5c5] to-[#B8A9D4] text-white p-6 rounded-xl text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">3 Month Fitness Subscription</h3>
              <p className="text-sm opacity-90">Bonus access to premium fitness resources</p>
            </div>
            <div className="bg-gradient-to-br from-[#E8A849] to-[#84d7d7] text-white p-6 rounded-xl text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Free Fitness Tracker Software</h3>
              <p className="text-sm opacity-90">Track your progress with cutting-edge tools</p>
            </div>
            <div className="bg-gradient-to-br from-[#B8A9D4] to-[#E07A5F] text-white p-6 rounded-xl text-center">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Million Dollar Body Bundle</h3>
              <p className="text-sm opacity-90">Exclusive bonuses and resources for your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Action Bonuses */}
      <section className="py-16 bg-gradient-to-r from-[#E8A849] to-[#E07A5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Fast Action Bonuses
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Act now and receive these incredible bonuses to accelerate your transformation!
              </p>
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Bonus #1: Personalized Fitness & Nutrition Consultation</h3>
                  <p className="text-lg mb-2 opacity-90">One-on-one session tailored to your specific needs and goals</p>
                  <span className="text-2xl font-bold">($500 Value)</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Bonus #2: 90 Day Life Planner</h3>
                  <p className="text-lg mb-2 opacity-90">Strategic planning tool to organize your transformation journey</p>
                  <span className="text-2xl font-bold">($30 Value)</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Bonus #3: 30 Day Healthy Habits Accelerator Challenge</h3>
                  <p className="text-lg mb-2 opacity-90">Kickstart your transformation with proven habit-building techniques</p>
                  <span className="text-2xl font-bold">($25 Value)</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/63d240f026d6cd0234f6a065.png"
                alt="Fast Action Bonuses"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pay in Full Bonuses */}
      <section className="py-16 bg-[#37a6a6] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/63d24afc26d6cd654ff6a2ee.png"
                alt="Pay in Full Bonuses"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#E8A849]">
                Pay in Full Bonuses
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Save money and get even more value when you pay in full!
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-[#E8A849] pl-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Phone className="h-6 w-6 mr-2 text-[#E8A849]" />
                    1:1 60-Minute Acceleration Call
                  </h3>
                  <p className="text-lg opacity-90">($200 Value)</p>
                </div>
                <div className="border-l-4 border-[#34c5c5] pl-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-[#34c5c5]" />
                    Personalized 3 Month Fitness Schedule
                  </h3>
                  <p className="text-lg opacity-90">($800 Value)</p>
                </div>
                <div className="border-l-4 border-[#84d7d7] pl-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Gift className="h-6 w-6 mr-2 text-[#84d7d7]" />
                    $100 Visa Gift Card
                  </h3>
                  <p className="text-lg opacity-90">Cash reward for your commitment</p>
                </div>
                <div className="border-l-4 border-[#B8A9D4] pl-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-[#B8A9D4]" />
                    Personalized Fitness/Yoga Mat
                  </h3>
                  <p className="text-lg opacity-90">($100 Value)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-gradient-to-r from-[#34c5c5] to-[#E8A849] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Invest in Your Million Dollar Body?
          </h2>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold mb-4">$2,000</div>
            <div className="text-2xl mb-4">Paid in Full</div>
            <div className="text-lg mb-6 opacity-90">Save $500 with Full Payment!</div>
            <div className="text-lg opacity-90">Monthly payment plans also available!</div>
          </div>
          <a 
            href="/courses/million-dollar-body"
            className="inline-block bg-[#34c5c5] hover:bg-[#d4943d] text-gray-800 font-bold text-2xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now - Transform Your Life
          </a>
          <p className="text-sm mt-4 opacity-80">Secure checkout - Start your transformation today</p>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-16 bg-[#F4F1EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/63d2498229f84e34292d82af.jpeg"
                alt="Krystalore Crews - Your Coach"
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Meet Your Coach
              </h2>
              <h3 className="text-2xl font-bold text-[#34c5c5] mb-4">Krystalore Crews</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Executive coach, fitness expert, and transformation specialist who has helped hundreds of 
                powerful women reclaim their confidence and build bodies they love. Krystalore understands 
                the unique challenges faced by executive women and has created a system that works with 
                your busy schedule, not against it.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through her proven methodology, you'll not only transform your body but also develop the 
                mindset and habits necessary for lifelong success in every area of your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Get answers to the most common questions about the Million Dollar Body Academy
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F4F1EC] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#34c5c5] hover:bg-opacity-20 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-[#34c5c5]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#34c5c5]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#37a6a6] to-[#34c5c5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Million Dollar Body Awaits
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Stop waiting for the "perfect time" - that time is now. Join hundreds of powerful women 
            who have transformed their bodies, confidence, and lives through the Million Dollar Body Academy.
          </p>
          <a 
            href="/courses/million-dollar-body"
            className="inline-block bg-[#34c5c5] hover:bg-[#d4943d] text-gray-800 font-bold text-2xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
          >
            Start Your Transformation Today
          </a>
          <p className="text-sm opacity-80">🔒 Secure checkout • Instant access • 30-day guarantee</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}