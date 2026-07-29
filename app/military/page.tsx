'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import StayConnected from '@/components/sections/StayConnected'
import GhlBookModal from './GhlBookModal'
import MilitaryRequestForm from './MilitaryRequestForm'
import {
  Shield, Users, Target, HeartPulse, Award, Sparkles, ArrowRight, Mail,
  CheckCircle2, XCircle, Flame, Mic, Handshake, FileText, CalendarCheck,
  Brain, Star, HandHeart,
} from 'lucide-react'

const IMG = 'https://66x17tzw9x.ufs.sh/f'
const HERO = `${IMG}/WajS70ZPD48mH4cqkxRuYCwSLZs97vAgI4WO12VQxXUcNf68`
const SHE_SERVED = `${IMG}/WajS70ZPD48mfXpLgkWG8hTPIm5zZj0XcladFr1kUsWiRqCe`
const GALLERY = [
  'WajS70ZPD48mTs3D4zSYidyLHsjD7NEmqZovMrPhn34aQ0tb',
  'WajS70ZPD48m3lgJk4puFSC8OnTbav61fWe0IZPJMNtiVqH3',
  'WajS70ZPD48mmp9PAOfaANtR6QZVuUkcfBPpr39os5wXygH0',
  'WajS70ZPD48mNIJPGo2t7C8OeHzFPnbi0ZWwAysgLJ4BGXRM',
  'WajS70ZPD48mlXab1ZopaZvKk8Tb6ztY13mi7OXIdlwSgheP',
  'WajS70ZPD48ms86cwVbjWRIhBxKmA6M8EPJZzO7FT9dbV4Cw',
  'WajS70ZPD48m3M3nnPpuFSC8OnTbav61fWe0IZPJMNtiVqH3',
  'WajS70ZPD48mWiNfCiZPD48mIlt0TQBW1SVFZvaA3EfuRyLw',
  'WajS70ZPD48mrn0TMqC7OVasDE0oldMcRWZn8IGbihHu2Jyz',
  'WajS70ZPD48mt7nBVuU8PmXpFu9HIv584KDLd1bBT0Ocshag',
  'WajS70ZPD48mKhrgMyOhWPbiBkYpdzZ1n8SCej5Am3VGa0t2',
  'WajS70ZPD48mKjjHqlNOhWPbiBkYpdzZ1n8SCej5Am3VGa0t',
  'WajS70ZPD48mT1NEOwYidyLHsjD7NEmqZovMrPhn34aQ0tb5',
  'WajS70ZPD48mRShrEQi1MZWtFlX9RkA2Ges4OxuEQY0Df6Nr',
  'WajS70ZPD48mZZtrCSyrgWcQDCj2BqJAYUdE35byzw1u68s4',
  'WajS70ZPD48m71C4C8gDfQu5LW8s3SoeVmiKAvTn7lygUCB1',
  'WajS70ZPD48mKj8iPSeOhWPbiBkYpdzZ1n8SCej5Am3VGa0t',
  'WajS70ZPD48mlUZNEHopaZvKk8Tb6ztY13mi7OXIdlwSgheP',
  'WajS70ZPD48mRNp5fhi1MZWtFlX9RkA2Ges4OxuEQY0Df6Nr',
].map((k) => `${IMG}/${k}`)

const EMAIL = 'krystalore@thecrewscoach.com'
function mailto(subject: string, intro: string) {
  const body = `Hi Krystalore,

${intro}

Name:
Rank / Title:
Unit / Organization:
Base & location:
Best email & phone:
What you're looking for:

Thank you!`
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const challenges = [
  'Communication breakdowns between leaders and team members',
  'Low morale or disengagement',
  'Burnout and operational fatigue',
  'Difficult conversations being avoided',
  'Conflict that reduces trust and teamwork',
  'New supervisors promoted without leadership training',
  'High operational tempo creating chronic stress',
  'Multi-generational communication challenges',
  'Low accountability or inconsistent follow-through',
  'Limited self-awareness among leaders',
  'Teams working hard — but not together',
  'Leaders who are technically proficient but struggle to connect with people',
]

const forWho = [
  'Military Units', 'Active Duty, Guard & Reserve', 'Command Teams', 'Squadron Leadership',
  'Wing Leadership', 'NCO Professional Development', 'Officer Development', 'Government Organizations',
  'Civilian Workforce', 'Veteran Organizations', 'Teams preparing for change, growth, or increased demands',
]
const notFor = [
  'Believe leadership begins and ends with authority',
  'Want another lecture or PowerPoint presentation',
  'Are unwilling to invest in their people',
  'Expect change without personal accountability',
  'Prefer theory over practical application',
  'Aren’t committed to improving communication or team culture',
]

const expertise = [
  'Emotional Intelligence', 'Human Performance', 'Resilience', 'Team Development',
  'Communication', 'Leadership Psychology', 'Whole-Person Leadership',
]

const otherOptions = [
  {
    icon: Mic,
    title: 'Host, Speak, or MC',
    desc: 'Bring Krystalore to keynote, host, or MC your next event — energetic, interactive, and immediately applicable.',
    cta: 'Email to Request',
    href: mailto('MILITARY — SPEAK / HOST / MC REQUEST', 'We’d like to book you to host, speak, or MC an upcoming event.'),
  },
  {
    icon: Handshake,
    title: 'Fractional IPPO',
    desc: 'For units with vacancies or that need additional trainers — ongoing leadership & human-performance support on a fractional basis.',
    cta: 'Email to Request',
    href: mailto('MILITARY — FRACTIONAL IPPO REQUEST', 'We have a vacancy / need additional trainers and want to explore a fractional IPPO arrangement.'),
  },
  {
    icon: FileText,
    title: 'Custom Contract',
    desc: 'A fully customized engagement built around your organization’s mission, timeline, and goals.',
    cta: 'Email to Request',
    href: mailto('MILITARY — CUSTOM CONTRACT REQUEST', 'We’d like to discuss a custom leadership-training contract.'),
  },
]

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mission-Ready Leadership — Military Leadership Training by Krystalore Crews',
    serviceType: 'Leadership Development Workshop',
    areaServed: 'US',
    url: 'https://krystalore.com/military',
    description:
      'An immersive one-day leadership experience that equips military leaders with the communication, emotional intelligence, resilience, and human-performance skills needed to build stronger teams and accomplish the mission.',
    provider: {
      '@type': 'Person', name: 'Krystalore Crews',
      jobTitle: 'Leadership & Human-Performance Consultant, 22-Year USAF Senior NCO (Ret.)',
    },
    offers: { '@type': 'Offer', price: '2497', priceCurrency: 'USD', name: 'Full-Day Mission-Ready Leadership Workshop' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const HEADING = 'text-3xl md:text-4xl font-black text-gray-900'
const EYEBROW = 'text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3'

export default function MilitaryPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Shield className="w-3.5 h-3.5" /> Military Leadership Training
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.98] mb-4" style={{ color: '#34c5c5', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px #e07800, 0 0 20px #e07800' }}>
                  Mission-Ready<br />Leadership
                </h1>
                <p className="text-xl md:text-2xl font-black text-gray-900 mb-2 leading-tight">Leadership Starts With You.</p>
                <p className="text-lg text-gray-700 font-semibold mb-8">Stronger Leaders. Stronger Units. Lasting Legacy.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GhlBookModal label="Book Now" variant="gold" />
                  <a href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-4 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    <CalendarCheck className="w-5 h-5" /> Book a Call
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={HERO} alt="Krystalore Crews leading a mission-ready leadership workshop" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#0D9488] text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl md:text-3xl font-black leading-snug">“I develop mission-ready leaders by strengthening the human behind the uniform.”</p>
            <p className="text-white/80 mt-4 font-semibold">That’s your unique advantage.</p>
          </div>
        </section>

        {/* MISSION READY LEADERSHIP INTRO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className={EYEBROW}>Mission Ready Leadership</p>
            <h2 className={`${HEADING} mb-3`}>Leadership Starts With You.</h2>
            <p className="text-xl font-black text-[#e07800] mb-5">Develop Yourself. Strengthen Your Team. Create a Legacy.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              An immersive one-day leadership experience that equips military leaders with the communication, emotional
              intelligence, resilience, and human-performance skills needed to build stronger teams and accomplish the mission.
            </p>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src={GALLERY[0]} alt="Airmen in a leadership development session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
              <div className="order-1 lg:order-2">
                <p className={EYEBROW}>The reality</p>
                <h2 className={`${HEADING} mb-4`}>Is Your Unit Facing These Challenges?</h2>
                <p className="text-gray-700 mb-6">Even the strongest units experience challenges that impact mission effectiveness.</p>
                <ul className="space-y-2.5">
                  {challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-gray-800">
                      <Target className="w-5 h-5 text-[#e07800] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHO FOR / NOT FOR */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#34c5c5]/10 rounded-3xl p-8 border border-[#34c5c5]/20">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Who This Workshop Is For</h3>
                <p className="text-gray-600 mb-5">For organizations that believe leadership is more than rank.</p>
                <ul className="space-y-2.5">
                  {forWho.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px]">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Who It’s NOT For</h3>
                <p className="text-gray-600 mb-5">Not for organizations looking to simply “check the box.” It’s not a fit for teams that:</p>
                <ul className="space-y-2.5">
                  {notFor.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-gray-700">
                      <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[15px]">{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-5 text-sm italic">The greatest organizations understand that investing in people is investing in mission success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM I SOLVE */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>The problem I solve</p>
            <h2 className={`${HEADING} mb-2`}>Technical skills earn promotions. Human skills earn trust.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Too often, leaders are promoted because they’re exceptional at their jobs — but never receive the tools to
              effectively lead people. The result? Communication suffers. Trust declines. Morale drops. Conflict increases.
              Stress compounds. Performance stalls.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Mission Ready Leadership closes that gap by developing the human side of leadership. Participants learn practical
              skills that immediately improve communication, strengthen emotional intelligence, increase resilience, build
              trust, and create healthier, higher-performing teams. <span className="font-bold text-gray-900">Because when leaders grow, everyone around them grows.</span>
            </p>
          </div>
        </section>

        {/* WHY WORK WITH ME */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <p className={EYEBROW}>Why work with me?</p>
                <h2 className={`${HEADING} mb-5`}>I don’t teach leadership from a textbook. I’ve lived it.</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a 22-year U.S. Air Force Senior Noncommissioned Officer, I led teams through change, developed leadership
                  curriculum, facilitated professional development, and helped leaders navigate some of the most challenging
                  conversations of their careers. Today, I combine that military leadership experience with expertise in:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {expertise.map((e) => (
                    <div key={e} className="flex items-center gap-2 text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />
                      <span className="font-medium text-[15px]">{e}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-6 italic">
                  My workshops are energetic, interactive, and immediately applicable — not another day spent watching slides.
                  Participants leave with practical tools they can implement the very next day.
                </p>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={GALLERY[9]} alt="Krystalore Crews facilitating leadership training" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES THIS DIFFERENT + HUMAN PERFORMANCE */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#34c5c5]/10 via-[#F6F8FA] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className={EYEBROW}>What makes this different</p>
            <h2 className={`${HEADING} mb-4`}>Most leadership training manages people. This develops the person behind the leader.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Because mission success isn’t driven by rank alone. It’s built through trust, communication, self-awareness,
              resilience, emotional intelligence — and leaders who understand that leadership starts with themselves.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex gap-5">
              <Brain className="w-10 h-10 text-[#0D9488] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">A Human Performance Approach to Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop the cognitive, emotional, physical, and interpersonal skills that enable leaders to perform at
                  their highest level under pressure. When leaders improve the way they think, communicate, recover, and connect
                  with others, the entire unit becomes stronger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE OFFER — $2497 workshop */}
        <section id="offer" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-[#E8A849] shadow-xl ring-1 ring-[#E8A849]/30 p-8 md:p-10 text-center">
              <span className="inline-block bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">The Workshop</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Full-Day Mission-Ready Leadership Workshop</h2>
              <p className="text-5xl font-black text-[#e07800] my-4">$2,497</p>
              <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                A full-day immersive experience with a <span className="font-bold">customized curriculum</span> built to meet the specific needs of your group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GhlBookModal label="Book Now" variant="gold" />
                <a href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-4 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                  <CalendarCheck className="w-5 h-5" /> Book a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER OPTIONS */}
        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={EYEBROW}>More ways to work together</p>
              <h2 className={HEADING}>Speaking, fractional support & custom engagements.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherOptions.map((o) => (
                <div key={o.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#34c5c5]/15 flex items-center justify-center mb-4">
                    <o.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{o.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] flex-1 mb-5">{o.desc}</p>
                  <a href={o.href} className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-5 py-3 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> {o.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REQUEST FORM */}
        <section id="request" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className={EYEBROW}>Request training</p>
              <h2 className={`${HEADING} mb-3`}>Tell me about your group.</h2>
              <p className="text-lg text-gray-700">Share a few details and I’ll build the right experience for your unit.</p>
            </div>
            <MilitaryRequestForm />
          </div>
        </section>

        {/* DISCOUNTS — Bootcamp + Retreat */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className={EYEBROW}>For those who serve</p>
              <h2 className={`${HEADING} mb-3`}>More from the Krystalore ecosystem.</h2>
              <p className="text-lg text-gray-700">Discounts available for service members, Veterans, and spouses.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/bootcamp" className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <Flame className="w-9 h-9 text-[#e07800] mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">Beyond Limits Bootcamp</h3>
                <p className="text-gray-600 flex-1">Train like your life depends on it — a performance and lifestyle brand for those who refuse average.</p>
                <span className="inline-flex items-center gap-1 text-[#0D9488] font-bold mt-4">Explore Bootcamp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <Link href="/retreat" className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <Sparkles className="w-9 h-9 text-[#0D9488] mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">Upcoming Retreat</h3>
                <p className="text-gray-600 flex-1">A vacation with a purpose — reset, reconnect, and come back stronger. Client’s-choice destinations.</p>
                <span className="inline-flex items-center gap-1 text-[#0D9488] font-bold mt-4">Explore Retreats <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </div>
            <p className="text-center text-gray-600 mt-8 font-semibold">🎖️ Service members, Veterans & spouses receive a discount — just ask.</p>
          </div>
        </section>

        {/* BIO + SHE SERVED */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image src={SHE_SERVED} alt="Krystalore Crews — she served: strength, service, resilience" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Star className="w-3.5 h-3.5" /> Meet Krystalore
                </div>
                <h2 className={`${HEADING} mb-5`}>Military-grade leadership. Human-centered results.</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  22-year retired U.S. Air Force Senior Master Sergeant, leadership & human-performance consultant, best-selling
                  author, and endurance athlete. She strengthens the human behind the uniform — so leaders, teams, and units rise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GhlBookModal label="Book Now" variant="gold" />
                  <a href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-4 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    <CalendarCheck className="w-5 h-5" /> Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className={EYEBROW}>In the field</p>
              <h2 className={HEADING}>Leading real teams, on real bases.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {GALLERY.map((src, i) => (
                <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src={src} alt={`Krystalore Crews leadership training ${i + 1}`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HER NEXT MISSION */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0D9488] to-[#34c5c5] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
              <HandHeart className="w-3.5 h-3.5" /> Give back
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">HER NEXT MISSION</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Krystalore’s Veterans nonprofit, supporting women Veterans in their next chapter. Scholarships are available —
              apply or learn more.
            </p>
            <a href="https://hernextmission.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#0D9488] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              Apply for a Scholarship <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">Stronger leaders. Stronger units. Lasting legacy.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-9 max-w-2xl mx-auto">Let’s build mission-ready leadership for your team — starting with a conversation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GhlBookModal label="Book Now" variant="white" />
              <a href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#e07800] transition-colors">
                <CalendarCheck className="w-5 h-5" /> Book a Call
              </a>
            </div>
          </div>
        </section>

        <StayConnected />
      </main>
      <Footer />
    </>
  )
}
