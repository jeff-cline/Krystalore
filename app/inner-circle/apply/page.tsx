'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/header'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const circleOptions = [
  { value: 'womens', label: "Women's Inner Circle" },
  { value: 'mens', label: "Men's Inner Circle" },
  { value: 'both-coed', label: 'Both + Co-Ed Leadership Forum' },
]

export default function InnerCircleApply() {
  const [form, setForm] = useState({
    circle: '',
    fullName: '',
    email: '',
    phone: '',
    location: '',
    profession: '',
    currentSeason: '',
    misaligned: '',
    strongVsStretched: '',
    previousInvestment: '',
    whyNow: '',
    coachableScale: '',
    commitSixMonths: '',
    investmentReady: '',
    oneYearVision: '',
    whyCircle: '',
    agreement: false,
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.agreement) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/inner-circle/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const resData = await res.json()
      if (!res.ok) {
        throw new Error(resData.error || 'Something went wrong')
      }
      setStatus('success')
      // Redirect to signup after brief delay
      const params = new URLSearchParams({
        from: 'inner-circle-apply',
        email: form.email,
        name: form.fullName,
      })
      if (resData.applicationId) {
        params.set('appId', resData.applicationId)
      }
      setTimeout(() => {
        router.push(`/signup?${params.toString()}`)
      }, 2500)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#F4F1EC]">
        <Header />
        <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-[#84d7d7] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h1>
          <p className="text-gray-800/70 text-lg leading-relaxed mb-2">
            Create your account to continue.
          </p>
          <p className="text-gray-800/40 text-sm mb-8">
            Redirecting you to sign up...
          </p>
          <button
            onClick={() => router.push(`/signup?from=inner-circle-apply&email=${encodeURIComponent(form.email)}&name=${encodeURIComponent(form.fullName)}`)}
            className="inline-block bg-[#34c5c5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#37a6a6] transition-colors"
          >
            Create Your Account Now
          </button>
        </div>
      </div>
    )
  }

  const inputClass = 'w-full bg-white border border-[#37a6a6]/15 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#34c5c5] focus:ring-1 focus:ring-[#34c5c5] transition-colors'
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-1.5'
  const textareaClass = `${inputClass} min-h-[100px] resize-y`

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Inner Circle Application
            </h1>
            <p className="text-gray-800/60 text-lg">
              This is an application-only container. Take your time. Be honest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Circle Selection */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Which Circle?</h2>
              <div className="space-y-3">
                {circleOptions.map((opt) => (
                  <label key={opt.value} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${form.circle === opt.value ? 'border-[#34c5c5] bg-[#34c5c5]/5' : 'border-[#37a6a6]/10 hover:border-[#37a6a6]/20'}`}>
                    <input
                      type="radio"
                      name="circle"
                      value={opt.value}
                      checked={form.circle === opt.value}
                      onChange={(e) => update('circle', e.target.value)}
                      className="accent-[#34c5c5]"
                      required
                    />
                    <span className="font-medium text-gray-800">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 1: Basic Info */}
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Basic Information</h2>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" required className={inputClass} value={form.fullName} onChange={(e) => update('fullName', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" required className={inputClass} value={form.email} onChange={(e) => update('email', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" className={inputClass} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <input type="text" className={inputClass} placeholder="City, State" value={form.location} onChange={(e) => update('location', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Current Profession / Role *</label>
                <input type="text" required className={inputClass} value={form.profession} onChange={(e) => update('profession', e.target.value)} />
              </div>
            </div>

            {/* Section 2: Current Season */}
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Your Current Season</h2>
              <div>
                <label className={labelClass}>What season are you navigating right now? *</label>
                <textarea required className={textareaClass} value={form.currentSeason} onChange={(e) => update('currentSeason', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>What feels misaligned or unsustainable? *</label>
                <textarea required className={textareaClass} value={form.misaligned} onChange={(e) => update('misaligned', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Where do you feel strong vs. stretched, exhausted, or disconnected? *</label>
                <textarea required className={textareaClass} value={form.strongVsStretched} onChange={(e) => update('strongVsStretched', e.target.value)} />
              </div>
            </div>

            {/* Section 3: Growth & Investment */}
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Growth & Investment</h2>
              <div>
                <label className={labelClass}>What previous personal development or coaching have you invested in?</label>
                <textarea className={textareaClass} value={form.previousInvestment} onChange={(e) => update('previousInvestment', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Why now? *</label>
                <textarea required className={textareaClass} value={form.whyNow} onChange={(e) => update('whyNow', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>On a scale of 1-10, how coachable are you? *</label>
                <select required className={inputClass} value={form.coachableScale} onChange={(e) => update('coachableScale', e.target.value)}>
                  <option value="">Select</option>
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Can you commit to a 6-month minimum? *</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map((v) => (
                    <label key={v} className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 cursor-pointer transition-colors ${form.commitSixMonths === v ? 'border-[#34c5c5] bg-[#34c5c5]/5' : 'border-[#37a6a6]/10'}`}>
                      <input type="radio" name="commitSixMonths" value={v} checked={form.commitSixMonths === v} onChange={(e) => update('commitSixMonths', e.target.value)} required className="accent-[#34c5c5]" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Are you ready for $750/month? *</label>
                <div className="flex gap-4">
                  {['Yes', 'I need clarity'].map((v) => (
                    <label key={v} className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 cursor-pointer transition-colors ${form.investmentReady === v ? 'border-[#34c5c5] bg-[#34c5c5]/5' : 'border-[#37a6a6]/10'}`}>
                      <input type="radio" name="investmentReady" value={v} checked={form.investmentReady === v} onChange={(e) => update('investmentReady', e.target.value)} required className="accent-[#34c5c5]" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Vision */}
            <div className="bg-white rounded-2xl p-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Your Vision</h2>
              <div>
                <label className={labelClass}>If one year from now you said &quot;this changed everything&quot; — what&apos;s different? *</label>
                <textarea required className={textareaClass} value={form.oneYearVision} onChange={(e) => update('oneYearVision', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Why the Inner Circle vs. 1:1 coaching alone? *</label>
                <textarea required className={textareaClass} value={form.whyCircle} onChange={(e) => update('whyCircle', e.target.value)} />
              </div>
            </div>

            {/* Agreement */}
            <div className="bg-white rounded-2xl p-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreement}
                  onChange={(e) => update('agreement', e.target.checked)}
                  required
                  className="mt-1 accent-[#34c5c5] w-5 h-5"
                />
                <span className="text-gray-800/80 text-sm leading-relaxed">
                  I understand this is an application-only container. If accepted, I commit to participating fully and honoring the integrity of this space.
                </span>
              </label>
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#E07A5F] hover:bg-[#d06a4f] disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-lg flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
              ) : (
                <><Send className="w-5 h-5" /> Submit Application</>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
