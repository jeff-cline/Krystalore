'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ChevronRight, CheckCircle, Shield, Crown, Star,
  ArrowRight, Zap, Heart, Brain, Target, Lock
} from 'lucide-react'

const FEATURES = [
  'Weekly 60-minute private sessions',
  'Nervous system regulation & somatic integration',
  'Advanced emotional intelligence coaching',
  'Strategic leadership refinement',
  'Full fitness + metabolic optimization (Beyond Limits Bootcamp included)',
  'Habit architecture & performance systems',
  'Voxer access for high-level decision moments',
  'Retreat priority access',
]

const TWELVE_MONTH_INCLUDES = [
  'Weekly private sessions',
  'Quarterly strategic intensives',
  'Full integration coaching',
  'One Revive & Thrive Retreat tuition included (Client responsible for travel)',
  'Priority booking & VIP retreat upgrades',
]

const WHO_FOR = [
  'Carries pressure silently',
  'Feels "on" all the time',
  'Struggles to slow down without guilt',
  'Has health warning signs starting to whisper',
  'Knows burnout is not an option',
  'Is navigating identity transition, grief, reinvention, or expansion',
  'Wants strength — not just productivity',
]

const OUTCOMES = [
  'Increased energy and metabolic resilience',
  'Reduced anxiety and emotional reactivity',
  'Clear identity alignment',
  'Physical strength and posture confidence',
  'Strategic clarity',
  'Elevated presence in rooms that matter',
  'Renewed self-trust',
]

const QUOTES = [
  '"I feel fully myself again."',
  '"I lead differently now."',
  '"I didn\'t realize how fragmented I was."',
]

const ROLES = [
  'Entrepreneur / Founder',
  'Executive / Leader',
  'Veteran in transition',
  'High-achieving professional',
  'Other',
]

const INVESTMENT_OPTIONS = [
  '6-Month Elite Mentorship',
  '12-Month Executive Partnership',
  'Unsure — open to recommendation',
]

const READINESS = [
  'Yes, I am ready.',
  'I need a short conversation about logistics.',
  'I am exploring options.',
]

const BEGIN_OPTIONS = [
  'Immediately',
  'Within 30 days',
  '60+ days',
]

export default function PrivatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', cityTimezone: '', website: '',
    role: '', biggestPressure: '', misaligned: '', nervousSystemScale: '5',
    healthImpact: '', whyNow: '', alreadyTried: '', fullyAligned: '',
    investmentOption: '', investmentReady: '', primaryDecisionMaker: '',
    readyToBegin: '', finalStatement: '',
  })

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/private-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } catch { /* silent */ }
    setSubmitting(false)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Private Mentorship</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image src="/images/go9/coaching.jpg" alt="Krystalore Crews private coaching and one-on-one mentorship" fill className="object-cover" sizes="100vw" />
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a3a40] text-white py-24 lg:py-36">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(42,123,136,0.4), transparent 60%)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Crown className="w-6 h-6 text-[#E8A849]" />
              <span className="text-sm tracking-[0.3em] uppercase text-[#E8A849] font-medium">Private Coaching</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Elite Private Mentorship</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              For Leaders Who Refuse to Operate at 70%
            </p>
            <div className="max-w-2xl mx-auto text-gray-400 space-y-4 text-lg leading-relaxed">
              <p>You&apos;ve built success. But your nervous system is tired. Your body feels tight. Your leadership carries weight.</p>
              <p>And somewhere inside... you know there&apos;s another level.</p>
              <p className="text-white font-medium">You don&apos;t need more information. You need integration.</p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Target className="w-8 h-8 text-[#34c5c5] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who This Is For</h2>
              <p className="text-lg text-gray-600">This is for the high performer who:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              {WHO_FOR.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                You want: <span className="text-[#34c5c5]">Clarity. Energy. Stability. Power without performance.</span>
              </p>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Zap className="w-8 h-8 text-[#E8A849] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes This Different</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Most coaches work on one layer. We integrate all of them.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-[#1a3a40] rounded-2xl p-8 md:p-12 text-white">
              <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Your mentorship includes:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8A849] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{f}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xl font-semibold text-white">This is whole-human leadership.</p>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <Shield className="w-8 h-8 text-[#34c5c5] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment</h2>
              <p className="text-lg text-gray-600 mb-12">
                Private mentorship is limited to 3–5 clients at a time. Depth requires focus.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 6-Month */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-[#34c5c5] p-6 text-white text-center">
                  <p className="text-sm tracking-[0.2em] uppercase mb-2">6-Month</p>
                  <h3 className="text-2xl font-bold">Elite Mentorship</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-2">$19,500</p>
                  <p className="text-gray-500 mb-4">paid in full</p>
                  <p className="text-gray-600 mb-6">or <span className="font-semibold text-gray-900">$3,250/month</span> for 6 months</p>
                  <p className="text-gray-600 text-sm">For leaders in a season of recalibration or acceleration.</p>
                </div>
              </div>
              {/* 12-Month */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-[#E8A849] overflow-hidden relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-[#34c5c5] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
                </div>
                <div className="bg-gradient-to-r from-[#E8A849] to-orange-600 p-6 text-white text-center">
                  <p className="text-sm tracking-[0.2em] uppercase mb-2">12-Month</p>
                  <h3 className="text-2xl font-bold">Executive Performance Partnership</h3>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-gray-900 mb-2">$33,000</p>
                    <p className="text-gray-500 mb-4">paid in full</p>
                    <p className="text-gray-600">or <span className="font-semibold text-gray-900">$3,000/month</span> for 12 months</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {TWELVE_MONTH_INCLUDES.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E8A849] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm font-semibold text-[#E8A849]">This is for legacy-level transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Experience */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Heart className="w-8 h-8 text-[#34c5c5] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Experience</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {OUTCOMES.map((o, i) => (
                <div key={i} className="flex items-center gap-3 p-4">
                  <Star className="w-5 h-5 text-[#E8A849] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{o}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-center text-gray-500 mb-6 text-sm tracking-[0.2em] uppercase">Most say:</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {QUOTES.map((q, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl italic text-gray-700 font-light">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application */}
        <section id="apply" className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a3a40] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-[#E8A849] mx-auto mb-6" />
                <p className="text-xl leading-relaxed text-gray-300 max-w-xl mx-auto">
                  Thank you for applying. If aligned, you will receive an invitation to schedule a private clarity call within 48 hours.
                </p>
                <p className="mt-6 text-gray-400">
                  Private mentorship is reserved for leaders ready to move decisively. I look forward to learning more about your vision.
                </p>
                <p className="mt-4 text-[#E8A849] font-medium">— Krystalore</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <Lock className="w-8 h-8 text-[#E8A849] mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Apply for Private Mentorship</h2>
                  <p className="text-gray-400">Elite 1:1 Executive Performance Partnership with Krystalore Crews</p>
                  <p className="text-gray-500 text-sm mt-2">Private mentorship is limited to 3–5 clients at a time. Please complete thoughtfully.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Section 1 */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Section 1: Basic Information</p>
                    <div className="space-y-4">
                      <input type="text" required placeholder="Full Name *" value={form.name} onChange={e => update('name', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      <input type="email" required placeholder="Email *" value={form.email} onChange={e => update('email', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      <input type="tel" placeholder="Phone" value={form.phone} onChange={e => update('phone', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      <input type="text" placeholder="City / Time Zone" value={form.cityTimezone} onChange={e => update('cityTimezone', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      <input type="text" placeholder="Website or LinkedIn (if applicable)" value={form.website} onChange={e => update('website', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Section 2: Current Season</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">What role best describes you right now?</label>
                        <select value={form.role} onChange={e => update('role', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8A849]">
                          <option value="" className="text-gray-900">Select...</option>
                          {ROLES.map(r => <option key={r} value={r} className="text-gray-900">{r}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">What is the biggest pressure you are currently carrying?</label>
                        <textarea rows={3} value={form.biggestPressure} onChange={e => update('biggestPressure', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">What feels fragmented or misaligned in your life right now?</label>
                        <textarea rows={3} value={form.misaligned} onChange={e => update('misaligned', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">On a scale of 1–10, how regulated and grounded does your nervous system feel most days?</label>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500">1 = constantly reactive</span>
                          <input type="range" min="1" max="10" value={form.nervousSystemScale} onChange={e => update('nervousSystemScale', e.target.value)} className="flex-1 accent-[#E8A849]" />
                          <span className="text-xs text-gray-500">10 = steady</span>
                          <span className="text-lg font-bold text-[#E8A849] w-8 text-center">{form.nervousSystemScale}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">How is your physical health currently impacting your leadership or daily performance?</label>
                        <textarea rows={3} value={form.healthImpact} onChange={e => update('healthImpact', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Section 3: Clarity & Commitment</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Why now? Why is this season requiring deeper integration and support?</label>
                        <textarea rows={3} value={form.whyNow} onChange={e => update('whyNow', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">What have you already tried to improve your situation?</label>
                        <textarea rows={3} value={form.alreadyTried} onChange={e => update('alreadyTried', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">What would change in your life if you operated fully aligned — mentally, physically, emotionally?</label>
                        <textarea rows={3} value={form.fullyAligned} onChange={e => update('fullyAligned', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Section 4: Investment Readiness</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Which option are you most interested in?</label>
                        {INVESTMENT_OPTIONS.map(opt => (
                          <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
                            <input type="radio" name="investmentOption" value={opt} checked={form.investmentOption === opt} onChange={e => update('investmentOption', e.target.value)} className="accent-[#E8A849]" />
                            <span className="text-gray-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Are you prepared to invest at this level if we determine it is aligned?</label>
                        {READINESS.map(opt => (
                          <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
                            <input type="radio" name="investmentReady" value={opt} checked={form.investmentReady === opt} onChange={e => update('investmentReady', e.target.value)} className="accent-[#E8A849]" />
                            <span className="text-gray-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-6">Section 5: Decision Making</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Are you the primary decision-maker regarding this investment?</label>
                        {['Yes', 'No'].map(opt => (
                          <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
                            <input type="radio" name="primaryDecisionMaker" value={opt} checked={form.primaryDecisionMaker === opt} onChange={e => update('primaryDecisionMaker', e.target.value)} className="accent-[#E8A849]" />
                            <span className="text-gray-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">If selected, how quickly are you prepared to begin?</label>
                        {BEGIN_OPTIONS.map(opt => (
                          <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
                            <input type="radio" name="readyToBegin" value={opt} checked={form.readyToBegin === opt} onChange={e => update('readyToBegin', e.target.value)} className="accent-[#E8A849]" />
                            <span className="text-gray-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Final Question */}
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#E8A849] mb-4">Final Question</p>
                    <label className="block text-sm text-gray-400 mb-2">In one sentence, tell me why you are ready to rise beyond your current limits.</label>
                    <textarea rows={2} value={form.finalStatement} onChange={e => update('finalStatement', e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8A849]" />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#d4963e] text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                      {!submitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>

        {/* CTA Bridge */}
        <section className="py-16 text-center bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-gray-500 text-lg">
              Private mentorship is by application only. If aligned, we schedule a private clarity call. If we both feel resonance, we begin.
            </p>
            <a href="#apply" className="inline-flex items-center gap-2 mt-6 text-[#34c5c5] font-semibold hover:text-gray-800 transition-colors">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
