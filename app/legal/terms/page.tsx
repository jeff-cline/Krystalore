import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Crews Beyond Limits Consulting',
  description: 'Terms of service for Crews Beyond Limits Consulting, LLC. Read the terms governing your use of our platform and services.',
  openGraph: {
    title: "Terms of Service | Crews Beyond Limits Consulting",
    description: "Terms of service for Crews Beyond Limits Consulting, LLC. Read the terms governing your use of our platform and services.",
    url: "https://krystalore.com/legal/terms",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Crews Beyond Limits Consulting",
    description: "Terms of service for Crews Beyond Limits Consulting, LLC. Read the terms governing your use of our platform and services.",
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Terms of Service</span>
          </nav>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: February 12, 2026</p>
          <div className="prose prose-gray max-w-none space-y-6">
            <p>Welcome to Crews Beyond Limits Consulting, LLC. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Acceptance of Terms</h2>
            <p>By accessing this website or enrolling in any of our programs, courses, coaching services, or events, you agree to these Terms of Service and our <Link href="/legal/privacy" className="text-[#34c5c5] hover:underline">Privacy Policy</Link>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Services</h2>
            <p>Crews Beyond Limits Consulting provides executive coaching, leadership training, fitness programs, courses, retreats, and related content. Our services are for informational and educational purposes and are not a substitute for professional medical, legal, or financial advice.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Accounts</h2>
            <p>When you create an account, you are responsible for maintaining the confidentiality of your credentials and all activities under your account. You must provide accurate and complete information.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Payments & Refunds</h2>
            <p>All payments are processed securely through our payment providers. Refund policies vary by program and will be communicated at the time of purchase. Coaching sessions canceled with less than 24 hours notice may not be eligible for refund or rescheduling.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, videos, courses, and coaching materials — is the property of Crews Beyond Limits Consulting, LLC and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">6. User Conduct</h2>
            <p>You agree not to use our platform to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Violate any applicable law or regulation</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Share your account access with others</li>
              <li>Upload harmful, offensive, or unauthorized content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Disclaimer</h2>
            <p>Our services are provided &quot;as is&quot; without warranties of any kind. Results from coaching, fitness programs, and courses vary by individual. We do not guarantee specific outcomes.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Crews Beyond Limits Consulting, LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at our discretion if you violate these terms.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Governing Law</h2>
            <p>These terms are governed by the laws of the United States and the state in which Crews Beyond Limits Consulting, LLC is registered.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Contact</h2>
            <p>Questions about these Terms? Contact us:</p>
            <ul className="list-none space-y-1 text-gray-600">
              <li>Email: <a href="mailto:krystalore@thecrewscoach.com" className="text-[#34c5c5] hover:underline">krystalore@thecrewscoach.com</a></li>
              <li>Phone: <a href="tel:+17163906727" className="text-[#34c5c5] hover:underline">+1 (716) 390-6727</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">See also: <Link href="/legal/privacy" className="text-[#34c5c5] hover:underline">Privacy Policy</Link></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
