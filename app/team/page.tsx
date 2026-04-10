'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated team committed to helping you crews beyond your limits and achieve extraordinary results.
          </p>
        </div>

        {/* Founder */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scraped/krystalore-profile.png"
                alt="Krystalore Crews - Founder"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Krystalore Crews
              </h2>
              <p className="text-xl text-teal-600 mb-6">Founder & Lead Coach</p>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  22-year U.S. Air Force veteran, former NFL cheerleader, cancer survivor, and 26-time marathoner. Krystalore transformed her life from wheelchair to elite athlete, proving that limitations are just starting points for extraordinary achievement.
                </p>
                <p>
                  As the founder of Crews Beyond Limits, she brings military precision, athletic discipline, and entrepreneurial innovation to help high-achievers break through barriers and reach new levels of success.
                </p>
                <p>
                  Her unique combination of leadership experience, personal transformation, and proven coaching methodologies creates results that last.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">22</div>
                  <div className="text-gray-600">Years Military Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">26</div>
                  <div className="text-gray-600">Marathons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">1000+</div>
                  <div className="text-gray-600">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">100%</div>
                  <div className="text-gray-600">Dedicated to Your Success</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Team Members */}
        <section className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Growing Our Impact
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building a world-class team of coaches, trainers, and specialists who share our commitment to helping you achieve breakthrough results.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Stay tuned as we introduce additional team members who will expand our capacity to serve and support your transformation journey.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Work with Krystalore
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