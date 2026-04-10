'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function CommunityPage() {
  const values = [
    {
      title: 'Approachable',
      description: 'We create safe spaces where everyone feels welcomed and valued, regardless of their starting point.',
      icon: '🤝'
    },
    {
      title: 'Empathetic',
      description: 'We listen with intention, understand diverse perspectives, and support each other through challenges.',
      icon: '❤️'
    },
    {
      title: 'Persistent',
      description: 'We stay committed to our goals and support each other through setbacks and victories alike.',
      icon: '💪'
    },
    {
      title: 'Inspiring',
      description: 'We lift each other up, celebrate successes, and motivate continued growth and achievement.',
      icon: '✨'
    },
    {
      title: 'Articulate',
      description: 'We communicate clearly, share knowledge freely, and express ourselves with confidence.',
      icon: '💬'
    },
    {
      title: 'Genuine',
      description: 'We show up authentically, share real experiences, and build connections based on truth.',
      icon: '🌟'
    },
    {
      title: 'Encouraging',
      description: 'We believe in each other\'s potential and provide the support needed to crews beyond limits.',
      icon: '🚀'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            "Be the woman that empowers everyone around her"
          </blockquote>
          <p className="text-xl sm:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a community of high-achievers who support, challenge, and inspire each other to reach new heights.
          </p>
          <Link
            href="/go"
            className="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Join Our Community
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/community-hands.jpg" alt="Community unity and hands together in support" fill className="object-cover" sizes="100vw" />
      </div>

      {/* What is Our Community */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                An Inclusive Community of Growth
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our community is more than a group—it's a movement of individuals committed to breakthrough performance, authentic connection, and mutual empowerment.
                </p>
                <p>
                  Whether you're just beginning your transformation journey or you're already achieving at high levels, you'll find your tribe here. We believe that when we rise together, we all go further.
                </p>
                <p>
                  This is a space where vulnerability is strength, challenges are opportunities, and every member's success contributes to the collective elevation of the entire group.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Community Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Weekly group coaching calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">24/7 online support network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Accountability partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Exclusive events and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Resource library access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Monthly challenges and goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide how we show up for each other and create an environment where everyone can thrive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Stories from Our Community
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <blockquote className="text-gray-700 mb-4 italic">
                "Finding this community changed everything. For the first time, I felt truly understood and supported. The accountability and encouragement helped me achieve goals I never thought possible."
              </blockquote>
              <cite className="text-gray-900 font-semibold">- Maria S., Entrepreneur</cite>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <blockquote className="text-gray-700 mb-4 italic">
                "The women in this community don't just cheer you on—they challenge you to grow. I've gained confidence, clarity, and lifelong friendships that continue to elevate my personal and professional life."
              </blockquote>
              <cite className="text-gray-900 font-semibold">- Jessica R., Executive</cite>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward connecting with a community that will support, challenge, and celebrate your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/go"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Membership Options
            </Link>
            <Link
              href="/book"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book a Connection Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a 
          href="https://jeff-cline.com" 
          className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity"
        >
          JC
        </a>
      </div>
    </div>
  )
}