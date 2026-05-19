'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { Lock, ArrowRight, CheckCircle } from 'lucide-react'

type GiftColor = 'primary' | 'teal' | 'gold' | 'ink'

const COLOR_STYLES: Record<GiftColor, { border: string; ribbon: string; number: string; bow: string }> = {
  primary: { border: 'border-[#e07800]', ribbon: 'bg-[#e07800]', number: 'text-[#e07800]', bow: 'bg-[#E8A849]' },
  teal: { border: 'border-[#34c5c5]', ribbon: 'bg-[#34c5c5]', number: 'text-[#34c5c5]', bow: 'bg-[#E8A849]' },
  gold: { border: 'border-[#E8A849]', ribbon: 'bg-[#E8A849]', number: 'text-[#E8A849]', bow: 'bg-[#e07800]' },
  ink: { border: 'border-gray-900', ribbon: 'bg-gray-900', number: 'text-gray-900', bow: 'bg-[#E8A849]' },
}

type Gift = {
  number: number
  lockedTeaser: string
  title: string
  description: string
  url: string
  color: GiftColor
  cta: string
}

const gifts: Gift[] = [
  {
    number: 1,
    lockedTeaser: '5 days. One small daily move. You feel the shift by Friday.',
    title: '5-Day Bombshell Bootcamp',
    description:
      'Short, free daily prompts and one repeatable practice. By the end of the week you remember who you are.',
    url: 'https://www.krystalorecrews.com/bombshellbootcamp',
    color: 'primary',
    cta: 'Start Day 1',
  },
  {
    number: 2,
    lockedTeaser:
      'Once a week. Cameras on or off. We move through hard work together — free seat, open invitation.',
    title: 'Weekly Coworking Session',
    description:
      'Drop in any week. We work in focused blocks, then check in. Co-regulation + accountability with people who get it.',
    url: 'https://www.krystalorecrews.com/coworking',
    color: 'teal',
    cta: 'Grab Your Seat',
  },
  {
    number: 3,
    lockedTeaser: "A tracker that doesn't shame you. One page. Five minutes a day. Real momentum.",
    title: 'The Habit Tracker',
    description:
      'Printable + digital. Built for people who burned out on apps. Quietly powerful. Yours, free.',
    url: 'https://www.krystalorecrews.com/habittracker',
    color: 'gold',
    cta: 'Download Tracker',
  },
  {
    number: 4,
    lockedTeaser:
      "Meditation for the woman whose brain doesn't slow down. Listen anywhere. No app, no signup.",
    title: 'Just Breathe — Meditation Series',
    description:
      'A growing series of short meditations made for high performers. Stream on Spotify. New episodes regularly.',
    url: 'https://open.spotify.com/show/6acctiaNwQqFy8HVuiXlN7?si=5795f2082f1a46a9',
    color: 'ink',
    cta: 'Listen Now',
  },
  {
    number: 5,
    lockedTeaser: 'One live hour. May 20. Practical, not theoretical. Bring questions. Walk out shifted.',
    title: 'Masterclass — May 20',
    description:
      'Save your seat. One hour, live, free. Replay sent to registered guests so you can revisit anytime.',
    url: 'https://krystalore.com/masterclass',
    color: 'primary',
    cta: 'Save My Seat',
  },
  {
    number: 6,
    lockedTeaser:
      "Three-minute quizzes that tell you something you didn't already know about yourself.",
    title: 'The Quiz Library',
    description:
      'Pick any quiz. Get a custom read in three minutes. Use it to decide what to do next.',
    url: 'https://krystalore.com/quizzes',
    color: 'teal',
    cta: 'Take a Quiz',
  },
]

function GiftCard({ gift, unlocked }: { gift: Gift; unlocked: boolean }) {
  const c = COLOR_STYLES[gift.color]
  return (
    <div className={`relative rounded-2xl border-2 ${c.border} bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow`} style={{ minHeight: 380 }}>
      {/* Ribbon + bow */}
      <div className="relative h-32 overflow-visible">
        <div className={`absolute inset-x-0 bottom-0 h-20 ${c.ribbon}`}>
          <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-3 bg-white/80" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-white/80" />
        </div>
        <div className={`absolute inset-x-0 top-0 h-12 ${c.ribbon} flex items-center justify-center`}>
          <div className="relative">
            <div className={`w-6 h-6 ${c.bow} rounded-full`} />
            <div className={`absolute -left-2 top-1 w-4 h-4 ${c.bow} rounded-full opacity-90`} />
            <div className={`absolute -right-2 top-1 w-4 h-4 ${c.bow} rounded-full opacity-90`} />
          </div>
        </div>
      </div>

      <div className="px-6 pt-4 flex items-baseline justify-between">
        <div className={`text-5xl font-black leading-none ${c.number}`}>#{gift.number}</div>
        <div className="text-xs font-bold tracking-widest uppercase text-gray-500">
          {unlocked ? (
            <span className="inline-flex items-center gap-1 text-[#0D9488]">
              <CheckCircle className="w-3.5 h-3.5" /> Unlocked
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Locked
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-4 flex-1 flex flex-col">
        {unlocked ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{gift.title}</h3>
            <p className="text-gray-700 leading-snug mb-5 flex-1">{gift.description}</p>
            <a
              href={gift.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold text-lg px-5 py-3 rounded-xl hover:scale-[1.02] transition-transform shadow-md"
            >
              {gift.cta} <ArrowRight className="w-5 h-5" />
            </a>
          </>
        ) : (
          <>
            <p className="text-lg text-gray-700 leading-snug mb-5 flex-1">{gift.lockedTeaser}</p>
            <button
              type="button"
              onClick={() => document.getElementById('unlock-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-center font-bold text-lg px-5 py-3 rounded-xl border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Unlock to Open
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function FreeGiftsPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'n/a',
          quizTitle: 'Free Gifts Unlock',
          answers: {},
          results: { source: 'krystalore.com/free-gifts' },
        }),
      })
    } catch {
      // Even if lead capture fails, still unlock the gifts — the user gave us their info
    }
    setUnlocked(true)
    setStatus('idle')
    setTimeout(() => {
      document.getElementById('gifts-grid')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <Header />

      <main className="bg-[#F6F8FA] min-h-screen">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
          <p className="text-[#e07800] font-bold text-sm uppercase tracking-[0.3em] mb-4">
            Krystalore Crews — Free Gifts
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-gray-900">
            <span className="text-[#e07800]">6 Free Gifts.</span>
            <br />
            Unwrap them all at once.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            One quick form unlocks every gift below. No tricks, no upsell. Just take the ones that fit.
          </p>
        </section>

        {/* Gifts grid */}
        <section id="gifts-grid" className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gifts.map(g => (
              <GiftCard key={g.number} gift={g} unlocked={unlocked} />
            ))}
          </div>
        </section>

        {/* Unlock form */}
        {!unlocked && (
          <section id="unlock-form" className="max-w-2xl mx-auto px-6 pb-24">
            <div className="p-8 border-2 border-gray-900 rounded-2xl bg-white shadow-lg">
              <h2 className="text-3xl md:text-4xl font-black mb-2 text-center text-gray-900">
                Unlock All Gifts
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Tell us where to send updates. Everything else is one click.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-bold text-base mb-1.5 text-gray-900">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 bg-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold text-base mb-1.5 text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 bg-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-bold text-base mb-1.5 text-gray-900">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 bg-white outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-2xl px-6 py-4 rounded-xl hover:scale-[1.01] transition-transform shadow-lg disabled:opacity-50"
                >
                  {status === 'sending' ? 'Unwrapping…' : 'Unwrap My Gifts'}
                </button>
                <p className="text-xs text-gray-500 text-center pt-1">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </section>
        )}

        {unlocked && (
          <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#0D9488] font-bold rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5" /> All 6 gifts unlocked — scroll up to open any of them.
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
