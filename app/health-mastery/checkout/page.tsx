'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowLeft, Shield, Lock, Check, Star, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HealthMasteryCheckoutPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/health-mastery" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Health Mastery
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#006767] to-[#34c5c5] rounded-2xl p-6 sm:p-8 mb-6 text-white">
          <p className="text-white/70 text-sm uppercase tracking-wider font-medium mb-2">Beyond Limits</p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Health Mastery Group Coaching</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Weekly Coaching</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Bootcamp Included</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Private Community</span>
          </div>
        </div>

        {/* What's included */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">What You Get</h2>
            <ul className="space-y-3">
              {[
                'Weekly zoom group coaching (recorded if you miss live)',
                '15 min monthly activation call',
                'Weekly co-working zooms',
                'Monthly workshops',
                'Trackers & resources',
                'Accountability & support',
                'Weekly tips in private community',
                'Members-only pricing on coaching & retreats',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src="/images/health-mastery/features.webp"
                alt="Health Mastery Group Coaching"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Referral Bonuses</h3>
              <p className="text-gray-600 text-xs">
                Love the program? Refer a friend and earn rewards! Email{' '}
                <a href="mailto:krystalore@thecrewscoach.com" className="text-teal hover:underline">krystalore@thecrewscoach.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="font-bold text-gray-900 mb-1">Monthly</h3>
            <p className="text-xs text-gray-500 mb-3">(3 month minimum)</p>
            <p className="text-3xl font-bold text-gray-900">$497<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
          <div className="bg-white rounded-xl border-2 border-teal p-6 text-center hover:shadow-md transition-shadow relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-3 py-0.5 rounded-full">FIRST 5</div>
            <h3 className="font-bold text-gray-900 mb-1">Action Takers</h3>
            <p className="text-xs text-gray-500 mb-3">(limited spots)</p>
            <p className="text-3xl font-bold text-gray-900">$249<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#E8A849] text-white text-xs font-bold px-3 py-0.5 rounded-full">BEST VALUE</div>
            <h3 className="font-bold text-gray-900 mb-1">Annual</h3>
            <p className="text-xs text-gray-500 mb-3">(one month free)</p>
            <p className="text-3xl font-bold text-gray-900">$5,500</p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><Lock className="h-4 w-4" /> 256-bit Encrypted</span>
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Secure Checkout</span>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4" /> 5-Star Rated</span>
        </div>

        {/* GoHighLevel Checkout Form */}
        <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
          {!iframeLoaded && !iframeError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="w-10 h-10 border-[3px] border-teal/30 border-t-teal rounded-full animate-spin mb-4" />
              <p className="text-gray-500 text-sm">Loading secure checkout...</p>
            </div>
          )}

          {iframeError ? (
            <div className="p-12 text-center">
              <Shield className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Checkout Loading Issue</h3>
              <p className="text-gray-500 mb-6">The checkout form is having trouble loading. Click below to complete your enrollment.</p>
              <a
                href="https://krystalorecrews.com/healthmasterycheckout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Complete Checkout <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          ) : (
            <iframe
              src="https://krystalorecrews.com/healthmasterycheckout"
              title="Health Mastery Checkout"
              className="w-full border-0"
              style={{ height: '1960px' }}
              allow="payment *"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
            />
          )}
        </div>

        {/* Fallback link always visible */}
        <div className="text-center mb-4">
          <a
            href="https://krystalorecrews.com/healthmasterycheckout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-teal transition-colors inline-flex items-center gap-1"
          >
            Having trouble? Open checkout in new tab <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Help */}
        <div className="text-center mb-12 py-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h2>
          <p className="text-gray-500 text-sm mb-4">Questions about the program or payment?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:krystalore@thecrewscoach.com" className="text-teal hover:underline text-sm font-medium">
              krystalore@thecrewscoach.com
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/contact" className="text-teal hover:underline text-sm font-medium">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
