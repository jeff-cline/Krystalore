import MainLayout from '@/components/layout/MainLayout'
import { Check, Shield, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HealthMasteryCheckoutPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <Link href="/health-mastery" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Health Mastery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: What you get */}
          <div>
            <div className="mb-6">
              <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">Beyond Limits</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Health Mastery Group Coaching</h1>
              <p className="text-gray-600">A high-level group coaching experience for entrepreneurs and leaders.</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/health-mastery/features.webp"
                alt="Health Mastery Group Coaching — what's included"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-4">Here&apos;s What You&apos;ll Get:</h2>
              <ul className="space-y-3">
                {[
                  'Weekly zoom group coaching (recorded if you miss live)',
                  '15 Min monthly activation call',
                  'Weekly co-working zooms',
                  'Monthly workshops',
                  'Trackers & resources',
                  'Accountability & support',
                  'Weekly tips and feedback in private community',
                  'Special members-only pricing on private coaching and retreats',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Referral */}
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Referral Bonuses!</h3>
              <p className="text-gray-600 text-sm">
                Love the program? Refer a friend and earn rewards! Email{' '}
                <a href="mailto:krystalore@thecrewscoach.com" className="text-teal hover:underline">krystalore@thecrewscoach.com</a>
                {' '}for details.
              </p>
            </div>

            {/* Security */}
            <div className="flex items-center gap-3 text-gray-400 text-xs">
              <Lock className="h-4 w-4" />
              <span>Secure Processing — 100% safe &amp; encrypted payments</span>
            </div>
          </div>

          {/* Right: Checkout form via GoHighLevel iframe */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-20">
              <div className="bg-gradient-to-r from-[#006767] to-teal p-6 text-white">
                <h2 className="text-xl font-bold mb-1">Complete Your Enrollment</h2>
                <p className="text-white/80 text-sm">Choose your plan and fill in your details below.</p>
              </div>

              {/* GoHighLevel Order Form Embed */}
              <div className="p-1">
                <iframe
                  src="https://krystalorecrews.com/healthmasterycheckout"
                  title="Health Mastery Checkout"
                  className="w-full border-0"
                  style={{ minHeight: '900px', height: '100%' }}
                  allow="payment"
                  loading="lazy"
                />
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                  <Shield className="h-4 w-4" />
                  <span>Secure checkout powered by Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-12 mb-8 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-4">We&apos;re here to help. Reach out and let&apos;s find the right fit for you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:krystalore@thecrewscoach.com" className="bg-teal hover:bg-[#37a6a6] text-white font-medium py-3 px-8 rounded-xl transition-colors">
              Email Krystalore
            </a>
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-xl transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
