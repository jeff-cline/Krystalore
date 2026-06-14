'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  ArrowRight, Check, Calendar, MapPin, Sparkles, Crown, Star, Plus,
  Compass, HeartPulse, Brain, Users, Briefcase, ChevronDown, ChevronUp,
  Sun, Map as MapIcon, Dumbbell, Heart, Quote, ShieldCheck, Play, X,
} from 'lucide-react'

const CHECKOUT = 'https://www.krystalorecrews.com/rise-and-thrive-checkout'

const painCategories = [
  { icon: Compass, title: 'Identity & Purpose', items: ['“I don’t know who I am anymore.”', 'Disconnected from myself', 'Outgrew my old life — unsure what’s next', 'Lost confidence in my decisions', 'Stuck in the messy middle', 'Unfulfilled despite my accomplishments', 'Spent years serving everyone — forgot myself'] },
  { icon: HeartPulse, title: 'Physical Health', items: ['Low energy, poor sleep', 'Weight gain & hormonal changes', 'Inflammation & chronic stress', 'Uncomfortable in my body', 'No consistency — starting over every Monday', 'Don’t recognize myself in photos', 'Avoiding mirrors, cameras, certain clothes'] },
  { icon: Brain, title: 'Mental & Emotional', items: ['Overwhelm, anxiety, overthinking', 'Burnout — exhausted but can’t rest', 'Emotional eating & self-sabotage', 'Negative self-talk', 'Carrying grief, betrayal, loss', 'Everyone needs something from me'] },
  { icon: Users, title: 'Relationships', items: ['Feeling unseen and unsupported', 'Can’t set boundaries', 'People-pleasing & guilt when I come first', 'Wanting deeper connection', 'Lonely even surrounded by people'] },
  { icon: Briefcase, title: 'Professional Life', items: ['Success without satisfaction', 'Constant hustle, afraid to slow down', 'Imposter syndrome', 'Trapped by responsibilities', 'Know I’m capable of more — but no clarity'] },
]

const wants = ['Feel like yourself again', 'Wake up energized', 'Trust yourself', 'Feel confident in your skin', 'Know your purpose', 'Stop people-pleasing', 'Build real consistency', 'A life that feels aligned', 'Find joy again', 'Strong — mind, body, heart & spirit', 'Stop surviving and start living']

const phases = [
  { n: '01', month: 'Month 1', name: 'RESET', color: '#34c5c5', from: ['Exhausted', 'Overwhelmed', 'Reactive', 'Disconnected'], to: ['Clear', 'Grounded', 'Energized', 'Intentional'], body: 'We establish the foundations: sleep, hydration, movement, nutrition, self-awareness, and boundaries.' },
  { n: '02', month: 'Month 2', name: 'REWRITE', color: '#0D9488', from: ['Limiting beliefs', 'Old stories', 'Self-doubt', 'Fear'], to: ['Confidence', 'Self-trust', 'Courage', 'New possibilities'], body: 'You rewrite the stories running your life — “I’m too old,” “too late,” “not enough,” “I have to do it alone,” “I don’t deserve more.”' },
  { n: '03', month: 'Month 3', name: 'RISE', color: '#e07800', from: ['Playing small', 'Waiting', 'Settling'], to: ['Taking action', 'Showing up fully', 'Living intentionally', 'Creating your next chapter'], body: 'Vision becomes reality. You step into the next-level version of you — and you make it real.' },
]

const components = [
  { icon: Brain, label: 'The Academy', gives: 'The roadmap', img: '/images/million-dollar-body/mdb-hero.png' },
  { icon: Dumbbell, label: 'Beyond Limits Bootcamp', gives: 'The accountability', img: '/images/go6/beach-fitness-live.png' },
  { icon: Crown, label: 'Private Coaching (VIP)', gives: 'Personalized support', img: '/images/go9/coaching.jpg' },
  { icon: MapPin, label: 'Costa Rica Retreat', gives: 'Integration & transformation', img: '/images/retreat-destinations/cr-01.jpg' },
]

const retreatGets = ['Clarity', 'Confidence', 'Friendships', 'Momentum', 'A real plan', 'A stronger relationship with yourself']
const retreatExp = ['Deep reflection', 'Community', 'Adventure', 'Movement', 'Connection', 'Rest', 'Fun', 'Celebration', 'A renewed vision']

const credentials = ['22-Year Retired SMSgt, U.S. Air Force', 'Amazon Best-Selling Author', '28-Time Marathoner · 50-Mile Ultra Finisher', 'Cancer Survivor', 'Certified Life & Somatic Coach', 'Executive & Wellness Coach']

const testimonials = [
  { quote: 'I came in exhausted and invisible. I left Costa Rica clear, strong, and finally living for me. This was the turning point I’d waited years for.', name: 'Academy + Retreat Graduate' },
  { quote: 'I’ve done programs before. This was different — it rebuilt my confidence and my body, and gave me a sisterhood I still lean on.', name: 'Rise & Thrive Member' },
  { quote: 'I stopped surviving and started thriving. I trust myself again. Worth every single penny.', name: 'VIP Member' },
]

const faqs = [
  { q: 'Is this just a fitness program?', a: 'No. This is whole-woman transformation — identity, mindset, emotional health, relationships, and purpose, with fitness as one powerful pillar. You’ll change how you feel, not just how you look.' },
  { q: 'Who is Rise & Thrive really for?', a: 'High-achieving women in a season of change — veterans, entrepreneurs, executives, and caretakers — who are successful on paper but secretly know they’ve been surviving instead of thriving, and are ready to come home to themselves.' },
  { q: 'Do I have to be a veteran?', a: 'Not at all. Krystalore’s military background shapes the discipline and heart of the work, but Rise & Thrive is for any woman ready for her next chapter.' },
  { q: 'What if I’m not “in shape” right now?', a: 'Perfect starting point. Everything meets you exactly where you are — all abilities, all ages — and builds sustainable consistency without shame.' },
  { q: 'When does it start, and how long is it?', a: 'It’s a 90-day journey beginning July 27, with 12 weeks of the Rise & Thrive Academy, culminating in the Costa Rica Celebration Retreat October 21–26.' },
  { q: 'Is the Costa Rica retreat included?', a: 'Yes — the retreat is part of the bundle. It’s where the transformation becomes embodied: a celebration, a graduation, and a rebirth, away from the noise.' },
  { q: 'Is it virtual or in person?', a: 'The Academy and weekly coaching are virtual (live + on-demand). The retreat is in person in Costa Rica. VIP adds private 1:1 sessions with Krystalore.' },
  { q: 'How much time will it take each week?', a: 'It’s built for busy women — focused, efficient, and flexible, so it fits a real life full of responsibilities.' },
  { q: 'What’s the difference between the Bundle and VIP?', a: 'The Bundle includes the Academy, Bootcamp, and the Costa Rica retreat. VIP adds private coaching sessions with Krystalore, a customized success plan, and direct-access support.' },
  { q: 'Are there payment options?', a: 'Yes — pay in full to unlock bonus value, or choose a payment plan. All options are on the checkout page.' },
  { q: 'What results can I expect?', a: 'More energy, confidence, and clarity; consistency that finally sticks; deeper relationships; and a concrete plan for your next chapter — plus the embodied belief that your best chapter is still ahead.' },
]

const roles = ['The Veteran', 'The Entrepreneur', 'The Executive', 'The Caretaker', 'The Woman Ready for More']

// Slot-machine reel: large teal-glowing text that scrolls up, pauses on each role, and keeps going.
function RoleReel() {
  const [i, setI] = useState(0)
  const [animate, setAnimate] = useState(true)

  // advance one role at a time
  useEffect(() => {
    const id = setInterval(() => setI((v) => v + 1), 2000)
    return () => clearInterval(id)
  }, [])

  // when we reach the duplicated first item, snap back to 0 (no transition) for a seamless one-way loop
  useEffect(() => {
    if (i === roles.length) {
      const t = setTimeout(() => {
        setAnimate(false)
        setI(0)
      }, 700)
      return () => clearTimeout(t)
    }
  }, [i])

  // re-enable the slide on the next frame after a snap-back
  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
      return () => cancelAnimationFrame(r)
    }
  }, [animate])

  const reel = [...roles, roles[0]]
  const glow = '0 0 18px rgba(52,197,197,0.55), 0 0 44px rgba(13,148,136,0.40)'

  return (
    <div className="overflow-hidden h-[3.4rem] sm:h-[4.6rem] md:h-[5.6rem] [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]">
      <div
        className="flex flex-col"
        style={{
          transform: `translateY(-${(i / reel.length) * 100}%)`,
          transition: animate ? 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
        }}
      >
        {reel.map((r, idx) => (
          <div key={idx} className="h-[3.4rem] sm:h-[4.6rem] md:h-[5.6rem] flex items-center justify-center">
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0D9488] leading-none text-center whitespace-nowrap"
              style={{ textShadow: glow }}
            >
              {r}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Horizontal marquee of "wants" — boxes that scroll left→right with a teal glow so they pop.
function WantsMarquee() {
  const loop = [...wants, ...wants]
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex w-max gap-4 rt-marquee hover:[animation-play-state:paused]">
        {loop.map((w, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 bg-white border border-[#34c5c5]/40 text-gray-800 font-bold px-6 py-4 rounded-2xl text-base md:text-lg whitespace-nowrap shadow-[0_0_18px_rgba(52,197,197,0.18)]"
          >
            <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
            {w}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes rt-marquee { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .rt-marquee { animation: rt-marquee 38s linear infinite; }
      `}</style>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-bold text-gray-900">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0D9488] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#0D9488] flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-600 leading-relaxed">{a}</div>}
    </div>
  )
}

const videoTestimonials = [
  { id: 'zkXELNVOVoI', title: 'Kelly — Beyond Limits Retreat' },
  { id: 'jHE6rGalyVM', title: 'Sondra — Veteran Sponsor Recipient' },
  { id: 'Hn2A3DD-G9E', title: 'Heather — Revival Retreat' },
  { id: 'qZLf7-hx1Pc', title: 'Jen — Veteran & Military Spouse' },
  { id: 'DcTkCcR716M', title: 'Debbie — Costa Rica Revival Retreat' },
  { id: 'ebBQhmerkvo', title: 'Got Our Troops Foundation' },
]

// Auto-scrolling video testimonial library. Thumbnails open in an on-page modal
// (youtube-nocookie embed, autoplay) so visitors watch inline and never leave for YouTube.
function VideoTestimonials() {
  const [active, setActive] = useState<string | null>(null)
  const loop = [...videoTestimonials, ...videoTestimonials]

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max gap-5 rt-vmarquee hover:[animation-play-state:paused]">
          {loop.map((v, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(v.id)}
              aria-label={`Play video: ${v.title}`}
              className="group relative w-[300px] md:w-[340px] flex-shrink-0 text-left rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-video bg-gray-900">
                {/* plain img (remote YouTube thumb) avoids next/image remote-domain config */}
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-transform">
                    <Play className="w-7 h-7 text-[#e07800] fill-[#e07800] ml-1" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-900 leading-snug">{v.title}</p>
              </div>
            </button>
          ))}
        </div>
        <style>{`
          @keyframes rt-vmarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .rt-vmarquee { animation: rt-vmarquee 55s linear infinite; }
        `}</style>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex items-center gap-1.5 text-white/90 hover:text-white font-semibold"
            >
              Close <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${active}?autoplay=1&rel=0&modestbranding=1`}
                title="Video testimonial"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function RiseAndThrive() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 md:pt-24 pb-16 md:pb-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-7">
                  <Sparkles className="w-3.5 h-3.5" /> Rise &amp; Thrive · Academy + Costa Rica Retreat
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-gray-900 mb-6 leading-[1.06]">
                  This is so much bigger than a fitness program. It&apos;s your <span className="text-[#0D9488]">next chapter</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-9 max-w-xl font-light">
                  For the woman who&apos;s successful on paper but secretly knows she&apos;s been surviving instead of thriving.
                  A 90-day transformation to reclaim your confidence, health, identity, and purpose.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold text-lg px-9 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    Claim Your Spot <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#offer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold text-lg px-9 py-4 rounded-2xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    See the Full Offer
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#e07800]" /> Starts July 27</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#e07800]" /> Costa Rica · Oct 21–26</span>
                  <span className="inline-flex items-center gap-1.5"><Sun className="w-4 h-4 text-[#e07800]" /> 90-day journey</span>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/go6/tropical-porch-dress.jpg" alt="Rise & Thrive — your next chapter" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* WHO / TRUTH */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-px w-16 bg-[#E8A849] mx-auto mb-9" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
              You&apos;ve spent years taking care of everyone else. It&apos;s time to come home to <span className="text-[#0D9488]">yourself</span>.
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">This is for the high-achieving woman in a season of change — who is finally ready to choose herself.</p>
            <RoleReel />
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Does any of this sound familiar?</p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">You&apos;re not broken. You&apos;re between chapters.</h2>
              <p className="text-lg text-gray-600 font-light">If you&apos;ve been quietly carrying any of this, you&apos;re exactly who this was built for.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painCategories.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-[#34c5c5]/15 flex items-center justify-center mb-4"><c.icon className="w-6 h-6 text-[#0D9488]" /></div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{c.title}</h3>
                  <ul className="space-y-1.5">
                    {c.items.map((i) => <li key={i} className="text-[14px] text-gray-600 leading-snug pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#e07800]">{i}</li>)}
                  </ul>
                </div>
              ))}
              <div className="bg-gradient-to-br from-[#0D9488] to-[#34c5c5] rounded-2xl p-7 text-white flex flex-col justify-center">
                <Sparkles className="w-8 h-8 mb-3" />
                <p className="text-xl font-black leading-snug">None of this means something is wrong with you.</p>
                <p className="text-white/90 mt-2 text-[15px]">It means you&apos;ve outgrown the old version of your life — and you&apos;re ready for what&apos;s next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU WANT */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">What you actually want</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">It was never just about losing weight.</h2>
          </div>
          <WantsMarquee />
        </section>

        {/* TRANSFORMATION ROADMAP */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0D9488] to-[#0a5d58] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#E8A849] font-bold uppercase tracking-[0.18em] text-sm mb-3">The transformation roadmap</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">90 days. Three phases. A new you.</h2>
              <p className="text-lg text-white/90 font-light">A proven path from exhausted and overwhelmed to clear, confident, and fully alive.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((p) => (
                <div key={p.name} className="bg-white/5 border border-white/10 rounded-3xl p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-12 h-12 rounded-2xl font-black text-xl flex items-center justify-center text-gray-900" style={{ background: p.color }}>{p.n}</span>
                    <div><p className="text-xs text-white/70 uppercase tracking-wider">{p.month}</p><p className="text-2xl font-black" style={{ color: p.color }}>{p.name}</p></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div><p className="text-[11px] uppercase tracking-wider text-white/70 mb-1.5">From</p><ul className="space-y-1">{p.from.map((f) => <li key={f} className="text-[13px] text-white/60 line-through decoration-white/40">{f}</li>)}</ul></div>
                    <div><p className="text-[11px] uppercase tracking-wider text-white/70 mb-1.5">To</p><ul className="space-y-1">{p.to.map((t) => <li key={t} className="text-[13px] text-white font-semibold">{t}</li>)}</ul></div>
                  </div>
                  <p className="text-[14px] text-white/90 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY THE RETREAT (Costa Rica) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-3">
                {['cr-01', 'cr-03', 'cr-04', 'cr-06'].map((c, i) => (
                  <div key={c} className={`relative rounded-2xl overflow-hidden shadow-lg ${i % 2 ? 'mt-6' : ''}`} style={{ aspectRatio: '3/4' }}>
                    <Image src={`/images/retreat-destinations/${c}.jpg`} alt="Costa Rica celebration retreat" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Why the retreat changes everything</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">Costa Rica isn&apos;t a vacation. It&apos;s a rebirth.</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                  Most people attend a program. Few create a transformation. The retreat is where it becomes <b className="text-gray-900">embodied</b> —
                  a celebration, a graduation, a declaration. A chance to step away from the noise and finally hear yourself again.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {retreatExp.map((e) => <span key={e} className="bg-[#F4F1EC] text-gray-700 text-[13px] font-semibold px-3 py-1.5 rounded-full">{e}</span>)}
                </div>
                <p className="text-sm font-bold text-[#0D9488] uppercase tracking-wider mb-3">You arrive carrying stress — you leave with:</p>
                <div className="grid grid-cols-2 gap-2">
                  {retreatGets.map((g) => <div key={g} className="flex items-center gap-2 text-gray-800"><Check className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /><span className="text-[15px] font-medium">{g}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BUNDLE */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Why bundling matters</p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Most women try to change one piece. This changes the whole woman.</h2>
              <p className="text-lg text-gray-600 font-light">Separately, each of these is powerful. Together, they become life-changing.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {components.map((c) => (
                <div key={c.label} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="relative h-72 bg-[#F4F1EC]"><Image src={c.img} alt={c.label} fill className="object-contain p-3" sizes="(max-width:768px) 100vw, 50vw" /></div>
                  <div className="p-5">
                    <c.icon className="w-6 h-6 text-[#0D9488] mb-2" />
                    <h3 className="font-black text-gray-900 leading-tight">{c.label}</h3>
                    <p className="text-sm text-[#e07800] font-semibold mt-1">{c.gives}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE OFFER */}
        <section id="offer" className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">The offer</p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">Rise &amp; Thrive Academy + Costa Rica Retreat</h2>
              <p className="text-lg text-gray-600 font-light">A 90-day transformational journey for women ready to reclaim confidence, health, identity, and purpose.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-7 items-stretch">
              {/* Bundle */}
              <div className="bg-white rounded-3xl p-8 md:p-9 border border-gray-200 shadow-sm flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-1">The Bundle</h3>
                <p className="text-gray-500 mb-6">The complete 90-day experience.</p>
                <p className="text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-2">Included</p>
                <ul className="space-y-2.5 mb-5">
                  {['12 Weeks of Rise & Thrive Academy', 'Weekly Coaching & Training', 'Identity & Confidence Coaching', 'Self-Love & Self-Trust Framework', 'Goal Setting & Life Alignment', 'Costa Rica Celebration Retreat (Oct 21–26)'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700"><Check className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" /><span className="text-[15px]">{p}</span></li>
                  ))}
                </ul>
                <p className="text-xs font-bold text-[#e07800] uppercase tracking-wider mb-2">Bonus</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {['Beyond Limits Bootcamp Membership', 'Live Workouts + On-Demand Library', 'Accountability Community'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700"><Plus className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-0.5" /><span className="text-[15px]">{p}</span></li>
                  ))}
                </ul>
                <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors">Join the Bundle <ArrowRight className="w-4 h-4" /></a>
              </div>
              {/* VIP */}
              <div className="bg-gradient-to-br from-[#0D5953] to-[#0D9488] rounded-3xl p-8 md:p-9 shadow-2xl flex flex-col relative overflow-hidden">
                <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"><Crown className="w-3.5 h-3.5" /> VIP</span>
                <h3 className="text-2xl font-black text-white mb-1">VIP Upgrade</h3>
                <p className="text-white/75 mb-6">Everything in The Bundle — plus the deepest support.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in The Bundle', 'Private Coaching Sessions with Krystalore', 'Personalized Strategy & Accountability', 'Direct-Access Support', 'Customized Success Plan'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-white/90"><Check className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-0.5" /><span className="text-[15px]">{p}</span></li>
                  ))}
                </ul>
                <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">Go VIP <Crown className="w-4 h-4" /></a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500"><ShieldCheck className="w-4 h-4 text-[#0D9488]" /> Pay-in-full bonuses available · payment plans at checkout</div>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0D9488] to-[#34c5c5] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/80 font-bold uppercase tracking-[0.18em] text-sm mb-4">Why now</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">A year from now you&apos;ll either be celebrating the woman you became… or wishing you had started.</h2>
            <p className="text-lg text-white/90 font-light leading-relaxed mb-3">July 27 isn&apos;t just the start of a program — it&apos;s the start of a new chapter. And on October 26, you&apos;ll be standing in Costa Rica, celebrating the woman who chose herself, followed through, and proved her best chapter is still ahead.</p>
            <p className="text-lg text-white font-semibold mb-9">You don&apos;t need more information. You need immersion, accountability, community, and action.</p>
            <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#0D9488] font-black text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">Start Your Next Chapter <ArrowRight className="w-5 h-5" /></a>
          </div>
        </section>

        {/* WHY ME */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"><Image src="/images/krystalore/beach-rainbow.png" alt="Krystalore Crews" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" /></div>
              <div>
                <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Why me</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">I&apos;ve lived the comeback I coach.</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-7">A 22-year retired Senior Master Sergeant, cancer survivor, and 28-time marathoner who rebuilt herself from the ground up — and has guided hundreds of women to do the same. I don&apos;t just teach this. I&apos;ve walked it.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {credentials.map((c) => <div key={c} className="flex items-center gap-2 text-gray-800"><Star className="w-4 h-4 text-[#E8A849] flex-shrink-0" /><span className="font-medium text-[14px]">{c}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Transformation stories</p><h2 className="text-3xl md:text-5xl font-black text-gray-900">She chose herself — and everything changed.</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex gap-1 mb-3 text-[#E8A849] tracking-wider">★★★★★</div>
                  <Quote className="w-7 h-7 text-[#34c5c5]/40 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed mb-5 flex-1">“{t.quote}”</p>
                  <p className="font-bold text-gray-900">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10"><p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Questions</p><h2 className="text-3xl md:text-4xl font-black text-gray-900">Everything you&apos;re wondering</h2></div>
            <div className="space-y-3">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
          </div>
        </section>

        {/* VIDEO TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-[#F6F8FA] overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Real women, real words</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">Hear their transformations</h2>
            <p className="text-lg text-gray-600 font-light mt-3">Tap any story to watch — right here, without leaving the page.</p>
          </div>
          <VideoTestimonials />
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-12 h-12 mx-auto mb-7 opacity-90" />
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">This is your opportunity to stop waiting and start becoming.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light">Your best chapter is still ahead — and it gets to be this good, or even better.</p>
            <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#e07800] font-black text-lg md:text-xl px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">Claim Your Spot <ArrowRight className="w-6 h-6" /></a>
            <p className="text-white/80 text-sm mt-5">Starts July 27 · Costa Rica Celebration Retreat Oct 21–26</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
