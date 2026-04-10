'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function PlannerPage() {
  const features = [
    {
      title: 'Define Your Goals',
      description: 'Clear, actionable goal-setting frameworks that turn dreams into achievable milestones.',
      icon: '🎯'
    },
    {
      title: 'Establish Habits',
      description: 'Proven habit-building strategies that create lasting behavioral change.',
      icon: '🔄'
    },
    {
      title: 'Manage Time',
      description: 'Time management systems that maximize productivity and minimize stress.',
      icon: '⏰'
    },
    {
      title: 'Track Progress',
      description: 'Regular review and reflection tools that keep you on track and motivated.',
      icon: '📈'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Krystal Clear Life Planner
          </h1>
          <p className="text-xl sm:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The strategic planning system that turns your biggest goals into your greatest achievements.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Get Your Planner
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/planner.jpg" alt="Krystal Clear Life Planner book and planning system" fill className="object-cover" sizes="100vw" />
      </div>

      {/* What's Included */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Krystal Clear Life Planner combines proven planning methodologies with the mindset strategies that transformed my life from wheelchair to elite athlete.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-600 text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Details */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                More Than Just a Planner
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Krystal Clear Life Planner isn't just another organizer—it's a complete system for transformation.
                </p>
                <p>
                  Based on the same strategic planning principles I used in the military and applied to my personal transformation, this planner helps you:
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Break down big goals into manageable daily actions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Create accountability systems that keep you on track</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Develop mental resilience through structured reflection</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Optimize your time and energy for maximum impact</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Inside</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 12-month strategic planning overview</li>
                <li>✓ Monthly goal-setting worksheets</li>
                <li>✓ Weekly priority planning pages</li>
                <li>✓ Daily action and reflection journals</li>
                <li>✓ Habit tracking systems</li>
                <li>✓ Progress review templates</li>
                <li>✓ Mindset development exercises</li>
                <li>✓ Vision board planning space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
            "This planner changed how I approach my goals. Instead of feeling overwhelmed, I now have a clear path forward and the tools to stay on track. It's like having a coach in my pocket."
          </blockquote>
          <cite className="text-xl text-teal-100">
            - Amanda K., Business Owner
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34c5c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Start Planning Your Best Year Yet
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get the same planning system that helped transform my life from wheelchair to elite athlete.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Order Your Planner
          </Link>
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