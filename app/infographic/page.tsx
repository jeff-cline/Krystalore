import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

type Item = { label: string; href: string; ext?: boolean; crystal?: boolean; badge?: string }
type Stage = { n: number; name: string; sub: string; time: string; price: string; color: string; items: Item[] }

const STAGES: Stage[] = [
  { n: 1, name: 'Discover', sub: 'Freemium', time: 'Day 1 · Free', price: 'Free', color: '#34c5c5', items: [
    { label: '30-Second Voice Assessment', href: '/voice', crystal: true, badge: 'NEW' },
    { label: 'Habit Tracker', href: '/habittracker' },
    { label: 'Power Hour Coworking', href: '/coworking' },
    { label: 'Quizzes', href: '/quizzes' },
    { label: 'Thrive Facebook Community', href: 'https://www.facebook.com/groups/crewsbeyondlimits', ext: true },
    { label: 'Podcasts & Live Shows', href: '/podcasts' },
  ] },
  { n: 2, name: 'Activate', sub: 'Foundation Workshops & Memberships', time: 'Weeks 1–4', price: '$1–$497', color: '#0D9488', items: [
    { label: 'Beyond Limits Bootcamp', href: '/bootcamp' },
    { label: 'Vision Board Party', href: '/vision-board' },
    { label: 'Bombshell Bootcamp', href: '/bombshell-bootcamp' },
    { label: 'Masterclass', href: '/masterclass' },
    { label: 'Live Workshops', href: '/workshops' },
  ] },
  { n: 3, name: 'RISE', sub: 'Core Programs · Coaching · Bundles', time: 'Months 3–6', price: '$497–$3,000', color: '#E8A849', items: [
    { label: 'Health Mastery', href: '/health-mastery' },
    { label: 'Beyond Limits Bootcamp', href: '/bootcamp' },
    { label: 'Courses', href: '/courses' },
    { label: 'Summits', href: '/events' },
    { label: 'Retreats', href: '/retreat' },
    { label: 'ShYft Mastery', href: 'https://shyftmastery.com', ext: true },
  ] },
  { n: 4, name: 'Build · ShYft', sub: 'Identity · Business · Fitness · Relationship Courses & Memberships', time: 'Months 1–3', price: '$3,000–$10,000', color: '#6366f1', items: [
    { label: 'Business Bootcamp', href: '/business-bootcamp' },
    { label: 'WorldChangers', href: 'https://www.worldchangers.ai', ext: true },
    { label: 'Masterminds', href: '/services' },
    { label: 'Courses', href: '/courses' },
    { label: 'Relationship & Emotional Resilience Workshops', href: '/relationship-coaching' },
    { label: 'Rise & Thrive Bundle', href: '/rise-and-thrive' },
  ] },
  { n: 5, name: 'Elevate', sub: 'Premium VIP · Events · Retreats · Private', time: 'Ongoing · Premium', price: 'Custom Pricing', color: '#e07800', items: [
    { label: 'Retreats', href: '/retreat' },
    { label: 'Retreats as a Service', href: '/retreat-center-investment-opportunity' },
    { label: 'Private Coaching', href: '/privatemindset' },
    { label: 'Business Consulting', href: '/business-smart-start' },
    { label: 'Corporate Wellness', href: '/wellness' },
    { label: 'Corporate Retreats', href: '/corporate-retreat-planning' },
    { label: 'Business Scale & Exit', href: '/business-smart-start' },
    { label: 'Corporate leadership & wellness workshops', href: '/leadership-training' },
    { label: 'Speaking & Emcee', href: '/keynote-speaker' },
  ] },
]

const PILLARS: Item[] = [
  { label: 'Beyond Limits Ecosystem', href: '/' },
  { label: 'Non-Profit · Her Next Mission', href: 'https://hernextmission.org/', ext: true },
  { label: 'Corporate · Activate4Impact', href: 'https://activate4impact.com/', ext: true },
  { label: 'Tech · R0cketship', href: 'https://r0cketship.com/', ext: true },
  { label: 'Community · WorldChangers', href: 'https://www.worldchangers.ai/', ext: true },
]

function ItemLink({ i }: { i: Item }) {
  const cls = 'inline-flex items-center gap-1 align-middle text-gray-600 hover:text-[#0D9488] hover:underline'
  const inner = (
    <>
      {i.crystal ? <img src="/favicon-192x192.png" alt="" className="w-3.5 h-3.5 inline-block" /> : <span aria-hidden>·</span>}
      <span>{i.label}</span>
      {i.badge && <span className="bg-[#e07800] text-white text-[7px] font-black px-1 py-[1px] rounded-full leading-none tracking-wide">{i.badge}</span>}
    </>
  )
  return i.ext
    ? <a href={i.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
    : <a href={i.href} className={cls}>{inner}</a>
}

function Card({ s }: { s: Stage }) {
  return (
    <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-3.5">
      <p className="font-black text-gray-900 text-[15px] leading-tight">{s.name}</p>
      <p className="text-[10px] text-gray-500 leading-snug mb-2">{s.sub}</p>
      <ul className="space-y-0.5">
        {s.items.map((i) => <li key={i.label} className="text-[11px] leading-snug"><ItemLink i={i} /></li>)}
      </ul>
    </div>
  )
}

export default function Infographic() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/8 via-[#F6F8FA] to-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <div className="flex items-center gap-4 mb-5">
            <img src="/images/krystalore-crews-logo.png" alt="Krystalore" className="h-9 w-auto" />
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 hidden sm:block">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" fill className="object-cover object-top" sizes="48px" />
            </div>
          </div>
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-2">The buyer pathway</p>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.05] mb-3">From Freemium to Premium Journey</h1>
          <p className="text-lg text-gray-600 font-light max-w-3xl">
            It’s not about the destination, it’s about the journey. We’re here to meet you where you’re at. Krystalore Crews is your
            Life, Fitness, and Business Guide and Mentor.
          </p>
        </section>

        {/* DESKTOP — full-height ascending mountain range, prices at the base */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="relative flex gap-3 items-end">
            {/* faint back range for depth, spanning to the base */}
            <svg viewBox="0 0 1000 360" preserveAspectRatio="none" className="absolute bottom-0 inset-x-0 w-full" style={{ height: '70%' }}>
              <path d="M0,360 L150,150 L300,230 L470,110 L640,190 L820,70 L1000,150 L1000,360 Z" fill="#34c5c5" opacity="0.10" />
            </svg>
            {STAGES.map((s, i) => (
              <div key={s.n} className="relative flex-1 min-w-0 flex flex-col">
                <Card s={s} />
                {/* mountain rising to a peak under the card and descending to the base */}
                <div className="relative w-full" style={{ height: `${190 + i * 46}px` }}>
                  <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'linear-gradient(to top, rgba(52,197,197,0.06), rgba(52,197,197,0.42))' }} />
                  {/* orange glow at the peak */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full" style={{ background: 'radial-gradient(circle, rgba(224,120,0,0.95), rgba(224,120,0,0) 70%)', filter: 'blur(1px)' }} />
                  {/* price at the base of the mountain */}
                  <div className="absolute bottom-2 inset-x-0 text-center">
                    <span className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-black text-[#0D9488] shadow-sm">{s.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs font-bold uppercase tracking-wider mt-2 border-t border-gray-200 pt-2">
            <span className="text-gray-400">Freemium</span>
            <span className="text-[#e07800]">Premium</span>
          </div>
        </section>

        {/* MOBILE — stacked with prices */}
        <section className="md:hidden px-4 pb-2">
          <div className="relative pl-6 space-y-4">
            <div className="absolute left-2 top-2 bottom-2 w-1 rounded bg-gradient-to-b from-[#34c5c5] to-[#e07800]" />
            {STAGES.map((s) => (
              <div key={s.n} className="relative">
                <span className="absolute -left-[1.15rem] top-3 w-4 h-4 rounded-full ring-2 ring-white" style={{ background: s.color }} />
                <Card s={s} />
                <div className="mt-1 ml-1"><span className="text-xs font-black text-[#0D9488]">{s.price}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 PILLARS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-3">The five pillars wrap the journey</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {PILLARS.map((p) => {
              const cls = 'flex items-center justify-center gap-1.5 text-center rounded-xl bg-white border border-gray-200 p-3 text-sm font-bold text-gray-700 hover:border-[#34c5c5] hover:text-[#0D9488] transition-colors'
              return p.ext
                ? <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{p.label} <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" /></a>
                : <a key={p.label} href={p.href} className={cls}>{p.label} <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" /></a>
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">krystalore.com · One coaching core, five amplifiers.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
