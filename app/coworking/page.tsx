'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import {
  CheckCircle,
  Calendar,
  Users,
  Target,
  Sparkles,
  Video,
  Coffee,
  Zap,
  ArrowRight,
} from 'lucide-react'

const COWORKING_CHECKOUT_URL = 'https://www.krystalorecrews.com/habittracker'

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

function SignupCTA() {
  return (
    <div className="space-y-4 text-center">
      <a
        href={COWORKING_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-xl px-6 py-4 rounded-xl hover:scale-[1.01] transition-transform shadow-lg"
      >
        SIGN ME UP — IT&apos;S FREE
      </a>
      <p className="text-xs text-gray-500">
        Secure signup on krystalorecrews.com. Zoom link emailed after. No spam. Unsubscribe anytime.
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-2">
        <CheckCircle className="w-4 h-4 text-[#0D9488]" /> 100% Free • Every Wednesday
      </div>
    </div>
  )
}

export default function CoworkingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero — light split layout, planner photo */}
      <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Calendar className="w-3.5 h-3.5" /> Weekly · Every Wednesday · 100% Free
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                Feeling overwhelmed by your to-do list?
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-3 max-w-xl leading-relaxed">
                Struggling to stay focused or motivated?
              </p>
              <p className="text-base md:text-lg text-[#0D9488] font-bold mb-8 max-w-xl">
                Get things done — and have more fun.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm mb-8">
                <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm"><Calendar className="w-3.5 h-3.5 text-[#0D9488]" /> Every Wednesday</span>
                <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm"><Video className="w-3.5 h-3.5 text-[#0D9488]" /> Live on Zoom</span>
                <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm"><Sparkles className="w-3.5 h-3.5 text-[#e07800]" /> 100% Free</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={COWORKING_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  SIGN ME UP
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-10 py-4 rounded-full hover:bg-[#34c5c5]/5 transition-colors"
                  onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  How It Works
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/go9/planner.jpg"
                alt="Krystalore Crews working in her planner — Beyond Limits Power Hour"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
            <SignupCTA />
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
            href={COWORKING_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
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
