'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Target,
  Sparkles,
  Video,
  Coffee,
  Zap,
  ArrowRight,
} from 'lucide-react'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: 'Beyond Limits Power Hour — Weekly Coworking',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        url: 'https://krystalore.com/coworking',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description:
          'Free weekly virtual coworking session every Wednesday. Get your to-do list done with structure, accountability, and a community of high-performers.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'When is Power Hour?', acceptedAnswer: { '@type': 'Answer', text: 'Every Wednesday on Zoom. Free to attend — Zoom link emailed to you after signup.' } },
          { '@type': 'Question', name: 'Is Power Hour really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Power Hour is 100% free. Just sign up to receive the Zoom link.' } },
          { '@type': 'Question', name: 'Who is Power Hour for?', acceptedAnswer: { '@type': 'Answer', text: 'Anyone who wants to clear clutter, check off their to-do list, stay consistent with goals, and feel energized and productive — entrepreneurs, executives, creatives, remote workers, anyone who thrives with accountability.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'When is Power Hour?', answer: 'Every Wednesday. The Zoom link is emailed to you when you sign up.' },
  { question: 'Is it really free?', answer: 'Yes. Power Hour is 100% free. No credit card, no upsell.' },
  { question: 'What happens during a session?', answer: 'We open with a quick intention-setting round, then drop into a structured focus block where everyone works on their own priorities (cameras on or off, your choice). We close with a short accountability check-in — share what you got done and celebrate wins together.' },
  { question: 'Do I need to be a member of anything?', answer: 'No membership required. Power Hour is open to everyone. If you want to go deeper afterward, you can explore Health Mastery, Bombshell Bootcamp, or any of the other programs.' },
  { question: 'What do I need to bring?', answer: 'Your laptop, your to-do list, and the willingness to actually do the things you keep putting off. That\'s it.' },
  { question: 'Who is Power Hour for?', answer: 'High-performing women, entrepreneurs, executives, creatives, and anyone who works better with a structured container and other people in the room. If you struggle with focus, procrastination, or working in isolation, this is your antidote.' },
]

function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'n/a',
          quizTitle: 'Coworking Signup',
          answers: {},
          results: { source: 'krystalore.com/coworking' },
        }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-14 h-14 text-[#0D9488] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re in!</h3>
        <p className="text-gray-600">Check your inbox for the Wednesday Zoom link. See you in the focus block.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Your Name"
      />
      <input
        type="email"
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Email Address"
      />
      <input
        type="tel"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full border-2 border-gray-200 focus:border-[#34c5c5] rounded-xl px-4 py-3 outline-none transition-colors"
        placeholder="Phone (optional)"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-xl px-6 py-4 rounded-xl hover:scale-[1.01] transition-transform shadow-lg disabled:opacity-50"
      >
        {status === 'sending' ? 'Signing you up…' : 'SIGN ME UP — IT\'S FREE'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">Something went wrong. Try again or email krystalore@thecrewscoach.com.</p>
      )}
      <p className="text-xs text-gray-500 text-center pt-1">Zoom link emailed after signup. No spam. Unsubscribe anytime.</p>
    </form>
  )
}

export default function CoworkingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <Image
          src="/images/coworking/coworking-hero.png"
          alt="Beyond Limits Power Hour — Weekly virtual coworking with Krystalore Crews"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30 z-[1]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
          <p className="text-[#E8A849] font-bold tracking-widest uppercase text-sm mb-4">
            Weekly Coworking • Every Wednesday • Free
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 max-w-3xl leading-[1.05]">
            Feeling overwhelmed by your to-do list?
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl">
            Struggling to stay focused or motivated?
          </p>
          <p className="text-lg md:text-xl text-[#34c5c5] font-bold mb-8 max-w-2xl">
            Get things done — and have more fun.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm mb-10">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2"><Calendar className="w-4 h-4" /> Every Wednesday</span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2"><Video className="w-4 h-4" /> Live on Zoom</span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2"><Sparkles className="w-4 h-4" /> 100% Free</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#signup"
              className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-10 py-4 font-black text-lg hover:scale-105 transition-transform text-center shadow-lg"
              onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              SIGN ME UP
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white/60 text-white rounded-full px-10 py-4 font-bold hover:bg-white/10 transition-colors text-center"
              onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-4">For Busy Go-Getters</p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Don&apos;t tackle your to-dos alone.<br />
            <span className="text-[#e07800]">Let&apos;s do it together.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Power Hour is designed for high-performers who want to declutter their minds, knock out their priorities, and end the week feeling accomplished — all inside a supportive, focused, and surprisingly fun environment.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What to Expect</h2>
            <p className="text-gray-600 text-lg">An hour engineered to actually get you to the finish line.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: 'Distraction-Free Focus', desc: 'A structured time block that pulls you out of email, Slack, and the open-tab spiral.' },
              { icon: Sparkles, title: 'Simple Goal-Setting', desc: 'Declare your priority for the hour. Public commitment drives completion.' },
              { icon: Users, title: 'Motivated Company', desc: 'Work alongside other high-performers who are taking action — not just talking about it.' },
              { icon: Coffee, title: 'Built-In Wins', desc: 'Quick breaks to chat, share progress, and celebrate what you actually got done.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#34c5c5]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">The Format</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How Power Hour Works</h2>
            <p className="text-gray-600 text-lg">One hour. Three phases. Zero busywork.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Set Your Intention', desc: 'Declare what you will accomplish this session. Public commitment drives completion.', time: '5 min', color: '#34c5c5' },
              { step: '2', title: 'Deep Focus Block', desc: 'Cameras on or off — your choice. Structured silence with the energy of a focused crew working alongside you.', time: '45 min', color: '#E8A849' },
              { step: '3', title: 'Accountability Report', desc: 'Share what you accomplished. Celebrate wins. Identify the next move so momentum carries into the week.', time: '10 min', color: '#e07800' },
            ].map((s) => (
              <div key={s.step} className="bg-[#F6F8FA] rounded-2xl p-6 flex items-start gap-5 hover:shadow-md transition-shadow">
                <span className="w-12 h-12 text-white font-black rounded-full flex items-center justify-center flex-shrink-0 text-lg shadow-md" style={{ backgroundColor: s.color }}>
                  {s.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
                <span className="font-mono font-bold text-sm whitespace-nowrap" style={{ color: s.color }}>{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5] to-[#006767] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Who Power Hour Is For</h2>
            <p className="text-teal-100 text-lg">If any of these sound like you, pull up a Zoom seat.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'You want to clear clutter — mental or physical',
              'You want to check off your to-do list (not just rewrite it)',
              'You want to stay consistent with your goals',
              'You want to feel energized and actually productive',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <CheckCircle className="w-6 h-6 text-[#E8A849] flex-shrink-0 mt-0.5" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-20 bg-[#F6F8FA] scroll-mt-20">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-[#e07800] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Grab Your Seat</h2>
            <p className="text-gray-600">Wednesdays. Zoom. Free. Drop us your details and we&apos;ll send the link.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#34c5c5]/20">
            <SignupForm />
          </div>
          <p className="text-center text-[#e07800] font-bold mt-6 tracking-wider">
            #CrewsBeyondLimits — Stronger Than Yesterday
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Power Hour FAQ" />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Stop Working Alone. Start Working with Purpose.</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">
            One Wednesday hour can change the trajectory of your whole week. Free seat, open invitation.
          </p>
          <a
            href="#signup"
            onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-white text-[#e07800] font-black rounded-full px-10 py-5 text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Sign Me Up <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex flex-wrap gap-6 justify-center mt-10 text-orange-100 text-sm">
            <Link href="/health-mastery" className="hover:text-white">Health Mastery</Link>
            <Link href="/bombshell-bootcamp" className="hover:text-white">Bombshell Bootcamp</Link>
            <Link href="/just-breathe" className="hover:text-white">Just Breathe</Link>
            <Link href="/quizzes" className="hover:text-white">Quizzes</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
