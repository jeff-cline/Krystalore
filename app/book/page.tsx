'use client'

import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Connection Call
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious goals.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <iframe
            src="https://link.elite360.io/widget/group/VHMVUoVUFzFeuFXSNJuj"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
            title="Schedule Your Connection Call"
            className="w-full"
          />
        </div>

        {/* Alternative Options */}
        <div className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not ready for a call?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our programs and resources at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/go"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Programs
            </Link>
            <Link
              href="/apply"
              className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Apply for Coaching
            </Link>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-600 text-xl">💬</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
            <p className="text-gray-600 text-sm">
              We'll discuss your goals, challenges, and vision for success.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-600 text-xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
            <p className="text-gray-600 text-sm">
              Together, we'll outline a customized path to achieve your objectives.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-600 text-xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
            <p className="text-gray-600 text-sm">
              We'll determine the best program or service to support your journey.
            </p>
          </div>
        </div>
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