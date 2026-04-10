'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function KeynoteSpeakerPage() {
  const topics = [
    {
      title: 'Personal Development',
      description: 'Unlocking potential and achieving breakthrough results through mindset shifts and strategic action.',
      icon: '🚀'
    },
    {
      title: 'Emotional Intelligence',
      description: 'Building self-awareness, empathy, and interpersonal skills for enhanced leadership effectiveness.',
      icon: '💡'
    },
    {
      title: 'Leadership',
      description: 'Developing authentic leadership capabilities that inspire teams and drive organizational success.',
      icon: '👑'
    },
    {
      title: 'Health & Wellness',
      description: 'Integrating physical and mental well-being practices into high-performance lifestyles.',
      icon: '💪'
    },
    {
      title: 'Veteran Transition',
      description: 'Successfully navigating the transition from military to civilian leadership and entrepreneurship.',
      icon: '🎖️'
    },
    {
      title: "Women's Empowerment",
      description: 'Breaking barriers, building confidence, and creating pathways for women to thrive in leadership.',
      icon: '👩‍💼'
    }
  ]

  const whyChoose = [
    {
      title: 'Authentic Story',
      description: 'From wheelchair to elite athlete, military veteran to successful entrepreneur - a journey of true transformation.',
      icon: '📖'
    },
    {
      title: 'Proven Results',
      description: '22 years of Air Force leadership, 26 marathons, cancer survivor, and successful business owner.',
      icon: '🏆'
    },
    {
      title: 'Engaging Delivery',
      description: 'Dynamic, interactive presentations that inspire action and create lasting impact.',
      icon: '⚡'
    },
    {
      title: 'Customized Content',
      description: 'Every presentation is tailored to your audience, industry, and organizational goals.',
      icon: '🎯'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/scraped/speaking.jpg"
            alt="Krystalore Speaking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elevate Your Event with Krystalore Crews
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Inspire your audience with powerful stories of transformation, resilience, and breakthrough leadership.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Book Krystalore for Your Event
          </Link>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Speaking Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformational presentations designed to inspire, educate, and empower your audience to achieve extraordinary results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {topic.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Krystalore */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Krystalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you book Krystalore, you're getting more than a speaker - you're getting a transformational experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-600 text-2xl">{reason.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
            "Krystalore doesn't just speak to your audience - she transforms them. Her story of resilience and breakthrough will leave your team inspired and equipped with practical tools for success."
          </blockquote>
          <cite className="text-xl text-teal-100">
            - Event Organizer Testimonial
          </cite>
        </div>
      </section>

      {/* Speaking Experience */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Speaker Who Lives Her Message
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Krystalore's presentations aren't just motivational talks - they're transformational experiences based on real-world results and authentic transformation.
                </p>
                <p>
                  As a 22-year Air Force veteran, former NFL cheerleader, cancer survivor, and 26-time marathoner, Krystalore brings unparalleled credibility to every stage.
                </p>
                <p>
                  Her journey from wheelchair to elite athlete demonstrates that the impossible is possible when you apply the right strategies, mindset, and support systems.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">22</div>
                  <div className="text-gray-600">Years Military Leadership</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">26</div>
                  <div className="text-gray-600">Marathons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">100%</div>
                  <div className="text-gray-600">Authentic Transformation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">∞</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scraped/krystalore-profile.png"
                alt="Krystalore Crews Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Perfect for Any Event
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Corporate Events</h3>
              <p className="text-gray-600">Leadership conferences, sales meetings, team building events</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Conferences</h3>
              <p className="text-gray-600">Healthcare, technology, finance, and professional associations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Institutions</h3>
              <p className="text-gray-600">Universities, leadership programs, graduate schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34c5c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Next Event?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book Krystalore to deliver a presentation that will inspire your audience to crews beyond their limits and achieve extraordinary results.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Book for Your Event
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