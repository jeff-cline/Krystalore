'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowLeft, Shield, Lock, Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function HealthMasteryCheckoutPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/health-mastery" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Health Mastery
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#006767] to-[#34c5c5] rounded-2xl p-6 sm:p-8 mb-8 text-white">
          <div className="max-w-2xl">
            <p className="text-white/70 text-sm uppercase tracking-wider font-medium mb-2">Beyond Limits</p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Health Mastery Group Coaching</h1>
            <p className="text-white/80 text-sm sm:text-base mb-4">
              Complete your enrollment below. Choose your plan and you&apos;ll get instant access to weekly coaching calls, fitness systems, accountability, and our private community.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Weekly Coaching</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Bootcamp Included</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Private Community</span>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><Lock className="h-4 w-4" /> 256-bit SSL Encrypted</span>
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Secure Checkout</span>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4" /> 5-Star Rated Program</span>
        </div>

        {/* GoHighLevel Checkout Form */}
        <div className="relative rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mb-8">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="w-10 h-10 border-3 border-teal/30 border-t-teal rounded-full animate-spin mb-4" />
              <p className="text-gray-500 text-sm">Loading checkout...</p>
            </div>
          )}
          <iframe
            src="https://krystalorecrews.com/healthmasterycheckout"
            title="Health Mastery Checkout — Krystalore Crews"
            className="w-full border-0"
            style={{ height: '1400px' }}
            allow="payment *"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Bottom help section */}
        <div className="text-center mb-12 py-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h2>
          <p className="text-gray-500 text-sm mb-4">
            Questions about the program or payment? We&apos;re here for you.
          </p>
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
