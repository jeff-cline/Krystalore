'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function FitnessPage() {
  const programs = [
    {
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum results in minimum time',
      icon: '🔥',
      benefits: ['Burns calories for 24+ hours', 'Improves cardiovascular health', 'Builds lean muscle', 'Time-efficient workouts']
    },
    {
      title: 'Kickboxing',
      description: 'Powerful cardio and strength training with martial arts techniques',
      icon: '🥊',
      benefits: ['Full-body workout', 'Stress relief', 'Self-defense skills', 'Improved coordination']
    },
    {
      title: 'Yoga & Mobility',
      description: 'Flexibility, balance, and mindfulness for recovery and well-being',
      icon: '🧘‍♀️',
      benefits: ['Increased flexibility', 'Better balance', 'Stress reduction', 'Injury prevention']
    },
    {
      title: 'Marathon Training',
      description: 'Structured endurance programs based on 26 marathon completions',
      icon: '🏃‍♀️',
      benefits: ['Progressive training plans', 'Injury prevention', 'Mental toughness', 'Race day preparation']
    }
  ]

  const schedule = [
    { day: 'Monday', time: '6:00 AM', type: 'HIIT Boot Camp', duration: '45 min' },
    { day: 'Monday', time: '6:00 PM', type: 'Kickboxing', duration: '45 min' },
    { day: 'Wednesday', time: '6:00 AM', type: 'Functional Fitness', duration: '45 min' },
    { day: 'Wednesday', time: '6:00 PM', type: 'Yoga & Recovery', duration: '60 min' },
    { day: 'Friday', time: '6:00 AM', type: 'HIIT Boot Camp', duration: '45 min' },
    { day: 'Friday', time: '6:00 PM', type: 'Marathon Prep', duration: '60 min' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Beyond Limits Boot Camp
              </h1>
              <p className="text-xl sm:text-2xl text-teal-100 mb-8 leading-relaxed">
                Transform your body and mind in just 34 minutes a day, 3 times a week. Results guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/go"
                  className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Join Boot Camp - $99/mo
                </Link>
                <Link
                  href="/book"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Book a Call
                </Link>
              </div>
              <div className="text-teal-100">
                <p className="font-semibold">Monday • Wednesday • Friday</p>
                <p>6:00 AM & 6:00 PM Sessions Available</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">$99/month includes:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    3 live sessions per week (Mon/Wed/Fri)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Community access & support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Personal accountability tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Nutrition guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Monthly progress assessments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Krystalore's Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scraped/krystalore-profile.png"
                alt="Krystalore's Transformation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Wheelchair to Elite Athlete
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I know what it feels like to think your body has failed you. After my injury, doctors told me I might never walk normally again, let alone compete as an athlete.
                </p>
                <p>
                  But I refused to accept limitations. Through systematic training, unwavering commitment, and the right support system, I not only recovered—I thrived.
                </p>
                <p>
                  I went on to complete 26 marathons, become an NFL cheerleader, and prove that our biggest obstacles can become our greatest strengths.
                </p>
                <p className="font-semibold text-teal-600">
                  That's the same transformation I want to help you achieve—whatever your starting point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Fitness Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every program is designed to build strength, endurance, and confidence while fitting into your busy schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{program.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="text-teal-500 mr-3">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Weekly Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Choose morning or evening sessions that fit your schedule.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {schedule.map((session, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-6 ${
                  index !== schedule.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="w-24 text-lg font-semibold text-gray-900">
                    {session.day}
                  </div>
                  <div className="mx-8 text-teal-600 font-semibold">
                    {session.time}
                  </div>
                  <div className="text-gray-700">
                    {session.type}
                  </div>
                </div>
                <div className="text-gray-500 text-sm">
                  {session.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Real Results from Real People
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">89%</div>
              <div>See results within 30 days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">95%</div>
              <div>Complete the full program</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">100%</div>
              <div>Report improved confidence</div>
            </div>
          </div>
          
          <blockquote className="text-xl italic text-teal-100 mt-12 max-w-2xl mx-auto">
            "In 3 months, I've not only lost 25 pounds but gained the confidence and energy I thought I'd lost forever. Krystalore's program isn't just about fitness—it's about reclaiming your life."
          </blockquote>
          <cite className="text-teal-200 mt-4 block">- Sarah M., Executive</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34c5c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join Beyond Limits Boot Camp today and discover what you're truly capable of achieving.
          </p>
          <Link
            href="/go"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Join Boot Camp - $99/mo
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