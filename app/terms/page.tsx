'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: March 13, 2026</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using this website and our services, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on our website 
              for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-700 mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coaching Services</h2>
            <p className="text-gray-700 mb-4">
              Our coaching and training services are designed to support your personal and professional 
              development. Results may vary based on individual effort, commitment, and circumstances.
            </p>
            <p className="text-gray-700 mb-4">
              We do not guarantee specific outcomes and are not responsible for results achieved 
              or not achieved through our programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment is due as specified in your program agreement. Failure to make timely payments 
              may result in suspension or termination of services.
            </p>
            <p className="text-gray-700 mb-4">
              Refund policies are outlined in individual program agreements and may vary by service type.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Use our services for any unlawful purpose</li>
              <li>Harass, abuse, or harm other participants</li>
              <li>Share confidential information from group sessions</li>
              <li>Reproduce or distribute copyrighted materials without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              The materials on our website and in our programs are provided on an 'as is' basis. 
              We make no warranties, expressed or implied, and hereby disclaim and negate all other 
              warranties including without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Crews Beyond Limits or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revisions</h2>
            <p className="text-gray-700 mb-4">
              We may revise these terms of service at any time without notice. By using our website 
              and services, you are agreeing to be bound by the current version of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these terms, please contact us through our website 
              contact form or booking system.
            </p>
          </section>
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