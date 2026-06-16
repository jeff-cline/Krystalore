'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import {
  ArrowRight, ArrowLeft, ExternalLink, Home, RotateCcw, ChevronRight,
  Flag, Briefcase, Crown, Users, Building2, Sparkles,
} from 'lucide-react'

const CHECKOUT = 'https://www.krystalorecrews.com/rise-and-thrive-checkout'

type Choice = { label: string; to: string }
type Cta = { label: string; href: string; external?: boolean }
type Slide = {
  id: string
  img: string
  eyebrow: string
  title: string
  body?: string
  bullets?: string[]
  choices?: Choice[]
  ctas?: Cta[]
  next: string
}

const SLIDES: Record<string, Slide> = {
  start: {
    id: 'start', img: '/images/go9/hero.jpg', eyebrow: 'Welcome',
    title: 'Let’s find your next chapter.',
    body: 'Tell me where you’re coming from — and I’ll show you the path that fits you.',
    choices: [
      { label: 'I’m a Veteran', to: 'path-veteran' },
      { label: 'I’m an entrepreneur', to: 'path-entrepreneur' },
      { label: 'I’m an executive / leader', to: 'path-executive' },
      { label: 'We’re a company / team', to: 'path-corporate' },
      { label: 'I’m just ready for change', to: 'path-change' },
      { label: 'Show me the whole picture', to: 'overview' },
    ],
    next: 'overview',
  },
  overview: {
    id: 'overview', img: '/images/go9/group-sunset.jpg', eyebrow: 'The big picture',
    title: 'One coaching core. Four amplifiers.',
    body: 'Everything connects — coaching, community, tech, corporate, and mission — into one journey home to yourself.',
    bullets: [
      'Coaching creates the transformation.',
      'Community sustains and multiplies it.',
      'Tech scales it · Corporate delivers it · the Mission fuels it all.',
    ],
    choices: [
      { label: 'The VIP Bundle', to: 'vip' },
      { label: 'The journey (free → premium)', to: 'journey' },
      { label: 'The four pillars', to: 'nonprofit' },
    ],
    next: 'vip',
  },
  vip: {
    id: 'vip', img: '/images/go9/retreat-costa-rica.jpg', eyebrow: 'The flagship · Rise & Thrive',
    title: 'The VIP Bundle: your whole-woman transformation.',
    body: '90 days. Academy + Bootcamp + the Costa Rica Celebration Retreat. Most women try to change one piece — this changes the whole woman.',
    bullets: [
      'Reset → Rewrite → Rise: a mapped 90-day journey.',
      'The Costa Rica retreat — where insight becomes embodied.',
      'VIP adds private 1:1 coaching with Krystalore.',
    ],
    choices: [
      { label: 'Show me the retreat', to: 'retreats' },
      { label: 'Where do I start?', to: 'journey' },
    ],
    ctas: [
      { label: 'Open Rise & Thrive', href: '/rise-and-thrive' },
      { label: 'Join the Bundle', href: CHECKOUT, external: true },
    ],
    next: 'journey',
  },
  journey: {
    id: 'journey', img: '/images/go9/coaching.jpg', eyebrow: 'The path',
    title: 'Start where you are. Climb from there.',
    body: 'Free entry points are real — get a quick win, then build. Sell the journey, not one thing.',
    bullets: [
      'Free: Habit Tracker · Power Hour · Quizzes',
      'Entry: Vision Board · Bombshell · Masterclass',
      'Core: Health Mastery · Bootcamp · Courses',
      'Premium: Rise & Thrive · Private Coaching',
    ],
    choices: [
      { label: 'Easy first steps', to: 'entry-events' },
      { label: 'Straight to the VIP Bundle', to: 'vip' },
    ],
    next: 'entry-events',
  },
  'path-veteran': {
    id: 'path-veteran', img: '/images/go9/veteran.jpg', eyebrow: 'For Veterans',
    title: 'From service to your next mission.',
    body: 'Led by a 22-year USAF Senior Master Sergeant who has walked the transition. You’re not broken — you’re between missions.',
    bullets: [
      'Veteran retreats built for transition.',
      'HER NEXT MISSION — our 501(c)(3) for women Veterans & first responders.',
      'Somatic, trauma-informed coaching that honors your service.',
    ],
    choices: [
      { label: 'Our nonprofit (Her Next Mission)', to: 'nonprofit' },
      { label: 'Veteran retreats', to: 'retreats' },
      { label: 'The VIP Bundle', to: 'vip' },
    ],
    ctas: [
      { label: 'Veteran retreats', href: '/veteran-retreats' },
      { label: 'hernextmission.org', href: 'https://hernextmission.org/', external: true },
    ],
    next: 'vip',
  },
  'path-entrepreneur': {
    id: 'path-entrepreneur', img: '/images/generated/business-speaking.png', eyebrow: 'For entrepreneurs',
    title: 'Scale the business without sacrificing you.',
    body: 'Business without wellness is self-sabotage. Scale & Care — grow the business and protect the human running it.',
    bullets: [
      'Business Smart Start — diagnose your stage, get a plan.',
      'Health Mastery — energy, consistency, leadership.',
      'Enterprise execution through Activate4Impact.',
    ],
    choices: [
      { label: 'Energy & wellness', to: 'wellness' },
      { label: 'Corporate execution', to: 'corporate' },
      { label: 'The VIP Bundle', to: 'vip' },
    ],
    ctas: [{ label: 'Business Smart Start', href: '/business-smart-start' }],
    next: 'vip',
  },
  'path-executive': {
    id: 'path-executive', img: '/images/generated/private-coaching.png', eyebrow: 'For executives & leaders',
    title: 'Lead from a regulated, grounded place.',
    body: 'Military-grade leadership. Human-centered wellness. Regulated leaders make better decisions.',
    bullets: [
      'Private somatic coaching for high-achievers.',
      'Leadership & emotional-intelligence training.',
      'The whole-woman reset of Rise & Thrive.',
    ],
    choices: [
      { label: 'Leadership training', to: 'leadership' },
      { label: 'Wellness', to: 'wellness' },
      { label: 'The VIP Bundle', to: 'vip' },
    ],
    ctas: [
      { label: 'Private coaching', href: '/privatemindset' },
      { label: 'Leadership training', href: '/leadership-training' },
    ],
    next: 'vip',
  },
  'path-corporate': {
    id: 'path-corporate', img: '/images/generated/corporate-wellness-leadership.png', eyebrow: 'For companies & teams',
    title: 'Your team’s greatest asset is their energy.',
    body: 'Self-leadership first. When leaders have energy and resilience, the whole culture follows.',
    bullets: [
      'Corporate wellness + the 30-day FIRE Challenge.',
      'Leadership & EQ training, in-person or virtual.',
      'Keynotes that move the room.',
      'Enterprise events & execution via Activate4Impact.',
    ],
    choices: [
      { label: 'Wellness', to: 'wellness' },
      { label: 'Leadership', to: 'leadership' },
      { label: 'Speaking', to: 'speaking' },
      { label: 'Corporate (Activate4Impact)', to: 'corporate' },
    ],
    ctas: [{ label: 'Corporate wellness', href: '/wellness' }],
    next: 'wellness',
  },
  'path-change': {
    id: 'path-change', img: '/images/krystalore/beach-rainbow.png', eyebrow: 'Ready for change',
    title: 'You’re not behind. You’re becoming.',
    body: 'Stop surviving. Start thriving. Let’s get you moving — today.',
    bullets: [
      'Vision Board — get clear.',
      'Bombshell Bootcamp — a 5-day reset.',
      'Masterclass — how to stay in the messy middle.',
      'Then: Rise & Thrive.',
    ],
    choices: [
      { label: 'Easy first steps', to: 'entry-events' },
      { label: 'The VIP Bundle', to: 'vip' },
    ],
    ctas: [{ label: 'Vision Board', href: '/vision-board' }],
    next: 'entry-events',
  },
  'entry-events': {
    id: 'entry-events', img: '/images/bombshell-bootcamp/bombshell-hero.png', eyebrow: 'Easy first steps',
    title: 'Low-risk. High-clarity. Real momentum.',
    bullets: [
      'Vision Board Party — direction.',
      'Bombshell Bootcamp — 5-day Freedom Formula reset.',
      'Rewrite Masterclass — staying power in the messy middle.',
    ],
    choices: [{ label: 'Up to the VIP Bundle', to: 'vip' }],
    ctas: [
      { label: 'Bombshell', href: '/bombshell-bootcamp' },
      { label: 'Masterclass', href: '/masterclass' },
      { label: 'Vision Board', href: '/vision-board' },
    ],
    next: 'retreats',
  },
  retreats: {
    id: 'retreats', img: '/images/retreat-destinations/cr-01.jpg', eyebrow: 'Retreats',
    title: '7 days that change everything.',
    body: 'You deserve to be treated like a queen. Arrive carrying stress; leave with clarity, confidence, sisterhood, and a real plan.',
    bullets: [
      'Costa Rica · Puerto Rico · Tennessee',
      'Couples & Veterans retreats',
      'Where transformation becomes embodied.',
    ],
    choices: [{ label: 'Back to the VIP Bundle', to: 'vip' }],
    ctas: [
      { label: 'All retreats', href: '/retreat' },
      { label: 'Costa Rica', href: '/cr-retreat' },
    ],
    next: 'speaking',
  },
  speaking: {
    id: 'speaking', img: '/images/go9/speaking-event.jpg', eyebrow: 'Speaking',
    title: 'Transformation that moves a room.',
    body: '22 years in uniform. Cancer survivor. 28-time marathoner. Best-selling author.',
    bullets: [
      'Keynotes: leadership, resilience, EQ, women’s empowerment, Veteran transition.',
      'Customized to your audience and goals.',
      'Opens the door to wellness, leadership & retreats.',
    ],
    choices: [{ label: 'Corporate options', to: 'path-corporate' }],
    ctas: [
      { label: 'Book her', href: '/book' },
      { label: 'Speaking page', href: '/keynote-speaker' },
    ],
    next: 'leadership',
  },
  leadership: {
    id: 'leadership', img: '/images/corporate-retreat/sam-team-building.jpg', eyebrow: 'Leadership training',
    title: 'Leaders running on empty set the tone for everyone.',
    bullets: [
      'Emotional intelligence & Four Lenses temperament.',
      'Team building & compassionate-inquiry coaching.',
      '1 hour to multi-day · in-person or virtual.',
    ],
    choices: [{ label: 'Wellness', to: 'wellness' }],
    ctas: [{ label: 'Leadership training', href: '/leadership-training' }],
    next: 'wellness',
  },
  wellness: {
    id: 'wellness', img: '/images/go9/fitness.jpg', eyebrow: 'Wellness',
    title: 'It’s not motivation. It’s energy and overwhelm.',
    bullets: [
      'Corporate wellness with soul — leadership-first.',
      'The 30-day FIRE Challenge: Focus · Intention · Resilience · Energy.',
      'Accountable, personalized — not a passive app.',
    ],
    choices: [{ label: 'The four pillars', to: 'nonprofit' }],
    ctas: [
      { label: 'Corporate wellness', href: '/wellness' },
      { label: 'FIRE Challenge', href: '/firechallenge' },
    ],
    next: 'nonprofit',
  },
  nonprofit: {
    id: 'nonprofit', img: '/images/go9/veteran.jpg', eyebrow: 'Pillar · Non-Profit',
    title: 'HER NEXT MISSION',
    body: 'A 501(c)(3) walking women Veterans & first responders through the transition no one prepared them for.',
    bullets: [
      'Coaching, retreats, summit, scholarships.',
      'Tax-deductible giving; corporate-sponsorship friendly.',
      'The heart and proof of everything we do.',
    ],
    choices: [
      { label: 'Corporate', to: 'corporate' },
      { label: 'Community', to: 'community' },
    ],
    ctas: [{ label: 'hernextmission.org', href: 'https://hernextmission.org/', external: true }],
    next: 'corporate',
  },
  corporate: {
    id: 'corporate', img: '/images/go9/corporate.jpg', eyebrow: 'Pillar · Corporate',
    title: 'From big idea to red-carpet rollout.',
    body: 'Activate4Impact — strategy, production, and logistics at enterprise & government scale.',
    bullets: [
      'Military-grade execution, one team end-to-end.',
      'Retreats, conferences, launches, culture work.',
      'The engine that scales the model into paid impact.',
    ],
    choices: [{ label: 'Tech', to: 'tech' }],
    ctas: [{ label: 'activate4impact.com', href: 'https://activate4impact.com/', external: true }],
    next: 'tech',
  },
  tech: {
    id: 'tech', img: '/images/go6/beach-livestream.jpg', eyebrow: 'Pillar · Tech',
    title: 'People on fire, powered by AI.',
    body: 'R0cketShip — drop-in community platforms & custom tech built for scale and reduction.',
    bullets: [
      'Branded community platforms + automation.',
      'AI-powered predictive data & lead engine.',
      'Do more, reach further, with far less manual effort.',
    ],
    choices: [{ label: 'Community', to: 'community' }],
    ctas: [{ label: 'r0cketship.com', href: 'https://r0cketship.com/', external: true }],
    next: 'community',
  },
  community: {
    id: 'community', img: '/images/go9/community-hands.jpg', eyebrow: 'Pillar · Community',
    title: 'One community. Endless connections.',
    body: 'World Changers — the living proof: technology + social media amplifying a real, thriving network.',
    bullets: [
      'Thousands of members, real connections made.',
      'Directory, matching, events — branded & custom.',
      'We can stand one up for you.',
    ],
    choices: [{ label: 'How it all connects', to: 'close' }],
    ctas: [{ label: 'worldchangers.ai', href: 'https://www.worldchangers.ai/', external: true }],
    next: 'close',
  },
  close: {
    id: 'close', img: '/images/go9/group.jpg', eyebrow: 'Your move',
    title: 'Your best chapter is still ahead.',
    body: 'And it gets to be this good — or even better. Let’s begin.',
    choices: [{ label: 'Start over', to: 'start' }],
    ctas: [
      { label: 'Join the VIP Bundle', href: CHECKOUT, external: true },
      { label: 'Open Rise & Thrive', href: '/rise-and-thrive' },
    ],
    next: 'start',
  },
}

// Linear spine for Back/Next + progress.
const SPINE = ['start', 'overview', 'vip', 'journey', 'entry-events', 'retreats', 'speaking', 'leadership', 'wellness', 'nonprofit', 'corporate', 'tech', 'community', 'close']

const JUMP: { id: string; label: string; icon: any }[] = [
  { id: 'start', label: 'Start', icon: Home },
  { id: 'overview', label: 'Overview', icon: Sparkles },
  { id: 'vip', label: 'VIP Bundle', icon: Crown },
  { id: 'retreats', label: 'Retreats', icon: Sparkles },
  { id: 'speaking', label: 'Speaking', icon: Users },
  { id: 'wellness', label: 'Wellness', icon: Briefcase },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'nonprofit', label: 'Pillars', icon: Flag },
  { id: 'corporate', label: 'Corporate', icon: Building2 },
]

export default function SalesDeck() {
  const [history, setHistory] = useState<string[]>(['start'])
  const current = history[history.length - 1]
  const slide = SLIDES[current]

  const go = (id: string) => { if (id && id !== current) setHistory((h) => [...h, id]) }
  const back = () => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h))
  const next = () => { if (slide.next) go(slide.next) }
  const restart = () => setHistory(['start'])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') back()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const spineIdx = SPINE.indexOf(current)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/8 via-[#F6F8FA] to-white flex flex-col">
        {/* Jump bar */}
        <div className="border-b border-gray-200 bg-white/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 overflow-x-auto">
            <div className="flex gap-2 w-max">
              {JUMP.map((j) => {
                const Icon = j.icon
                const active = current === j.id
                return (
                  <button key={j.id} type="button" onClick={() => go(j.id)}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${active ? 'bg-[#0D9488] text-white' : 'bg-[#F6F8FA] text-gray-600 hover:text-[#0D9488]'}`}>
                    <Icon className="w-3.5 h-3.5" /> {j.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Slide */}
        <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white min-h-[420px]">
            {/* Image */}
            <div className="relative min-h-[240px] lg:min-h-[540px]">
              <Image key={slide.img} src={slide.img} alt={slide.title} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
            </div>
            {/* Content */}
            <div className="p-7 md:p-10 flex flex-col">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-3">{slide.eyebrow}</p>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">{slide.title}</h1>
              {slide.body && <p className="text-lg text-gray-600 font-light leading-relaxed mb-5">{slide.body}</p>}
              {slide.bullets && (
                <ul className="space-y-2.5 mb-6">
                  {slide.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-gray-800">
                      <ChevronRight className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {slide.choices && (
                <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
                  {slide.choices.map((c) => (
                    <button key={c.to} type="button" onClick={() => go(c.to)}
                      className="group flex items-center justify-between gap-2 text-left bg-white border-2 border-[#34c5c5]/40 rounded-2xl px-4 py-3 hover:border-[#0D9488] hover:bg-[#34c5c5]/5 transition-colors">
                      <span className="font-bold text-gray-900 text-[15px]">{c.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#0D9488] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              )}

              {slide.ctas && (
                <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
                  {slide.ctas.map((cta) =>
                    cta.external ? (
                      <a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        {cta.label} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-2 border-[#34c5c5] text-[#0D9488] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                        {cta.label} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="sticky bottom-0 border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
            <button type="button" onClick={back} disabled={history.length <= 1}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 border-gray-200 text-gray-700 hover:border-[#34c5c5] hover:text-[#0D9488] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <div className="flex items-center gap-3">
              <button type="button" onClick={restart} title="Start over"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#0D9488] text-xs font-semibold transition-colors">
                <RotateCcw className="w-3.5 h-3.5" /> Restart
              </button>
              {spineIdx >= 0 && (
                <span className="hidden sm:inline text-xs text-gray-400 font-semibold tabular-nums">{spineIdx + 1} / {SPINE.length}</span>
              )}
            </div>

            <button type="button" onClick={next}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0D9488] to-[#34c5c5] text-white shadow-sm hover:shadow-md transition-shadow">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
