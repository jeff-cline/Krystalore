import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Crews Beyond Limits Consulting',
  description: 'Privacy policy for Crews Beyond Limits Consulting, LLC. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: "Privacy Policy | Crews Beyond Limits Consulting",
    description: "Privacy policy for Crews Beyond Limits Consulting, LLC. Learn how we collect, use, and protect your personal information.",
    url: "https://krystalore.com/legal/privacy",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Crews Beyond Limits Consulting",
    description: "Privacy policy for Crews Beyond Limits Consulting, LLC. Learn how we collect, use, and protect your personal information.",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: February 12, 2026</p>
          <div className="prose prose-gray max-w-none space-y-6">
            <p>Crews Beyond Limits Consulting, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Account credentials (username and password)</li>
              <li>Payment and billing information</li>
              <li>Information provided through coaching sessions, forms, or surveys</li>
              <li>Communications you send to us</li>
            </ul>
            <p>We automatically collect certain information when you visit our site, including IP address, browser type, operating system, referring URLs, pages viewed, and access times.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information</li>
              <li>To send newsletters, marketing, and promotional communications</li>
              <li>To respond to inquiries and offer support</li>
              <li>To personalize your experience</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Service providers who assist in operating our website and business</li>
              <li>Payment processors for transaction processing</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookies through your browser settings.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Your Rights</h2>
            <p>Depending on your location, you may have rights to access, correct, delete, or port your personal data. To exercise these rights, contact us at <a href="mailto:krystalore@thecrewscoach.com" className="text-[#34c5c5] hover:underline">krystalore@thecrewscoach.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Children&apos;s Privacy</h2>
            <p>Our services are not intended for individuals under 18. We do not knowingly collect information from children.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us:</p>
            <ul className="list-none space-y-1 text-gray-600">
              <li>Email: <a href="mailto:krystalore@thecrewscoach.com" className="text-[#34c5c5] hover:underline">krystalore@thecrewscoach.com</a></li>
              <li>Phone: <a href="tel:+17163906727" className="text-[#34c5c5] hover:underline">+1 (716) 390-6727</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">See also: <Link href="/legal/terms" className="text-[#34c5c5] hover:underline">Terms of Service</Link></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
