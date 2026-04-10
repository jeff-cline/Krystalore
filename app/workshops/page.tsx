'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      title: 'Leadership Under Pressure',
      date: 'April 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Virtual & In-Person',
      price: '$297',
      description: 'Learn military-tested strategies for making critical decisions and leading effectively under extreme pressure.'
    },
    {
      title: 'Building Resilient Teams',
      date: 'May 20, 2026',
      time: '1:00 PM - 5:00 PM',
      location: 'Dallas, TX',
      price: '$197',
      description: 'Discover how to create teams that thrive in challenging environments and bounce back stronger from setbacks.'
    },
    {
      title: 'Executive Wellness Intensive',
      date: 'June 10, 2026',
      time: '8:00 AM - 6:00 PM',
      location: 'Virtual',
      price: '$497',
      description: 'Comprehensive workshop on integrating physical and mental wellness into high-performance leadership.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/corporate.jpg" alt="Krystalore Crews workshops and corporate training" fill className="object-cover" sizes="100vw" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Intensive learning experiences designed to accelerate your growth and provide practical tools for immediate implementation.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <section className="mb-20">
          <div className="grid gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div>📅 {workshop.date}</div>
                      <div>🕐 {workshop.time}</div>
                      <div>📍 {workshop.location}</div>
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-3xl font-bold text-teal-600 mb-4">
                      {workshop.price}
                    </div>
                    <Link
                      href="/book"
                      className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Benefits */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Get
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Actionable Strategies</h3>
              <p className="text-gray-600 text-sm">Proven methods you can implement immediately</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Peer Networking</h3>
              <p className="text-gray-600 text-sm">Connect with other high-achievers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Resource Materials</h3>
              <p className="text-gray-600 text-sm">Comprehensive workbooks and templates</p>
            </div>
          </div>
        </section>

        {/* Custom Workshop Option */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Workshop?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I can create customized workshops for your organization, team, or event. Contact me to discuss your specific needs and learning objectives.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Discuss Custom Workshop
          </Link>
        </section>
      </div>

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