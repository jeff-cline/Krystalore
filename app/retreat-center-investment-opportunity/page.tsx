'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import {
  Compass, FileText, Layers, Presentation, BarChart3, ScrollText, Download,
  ArrowRight, ArrowLeft, Building2, Cpu, HeartPulse, ShieldCheck, TrendingUp,
  MapPin, Users, Sparkles, DollarSign, Crown, ChevronRight,
} from 'lucide-react'

/* ----------------------------- DATA ----------------------------- */

const HERO = '/images/corporate-retreat/colibri-resort.jpg'
const CONTACT = 'mailto:Krystalore@thecrewscoach.com?subject=Retreat%20Center%20Investment%20Opportunity'

const METRICS = [
  { v: '$25M', l: 'Target raise per tranche' },
  { v: '$6–7M', l: 'Per Caribbean property' },
  { v: '14', l: 'Revenue lines per center' },
  { v: 'up to $25K', l: 'Per retreat guest / week' },
]

const REVENUE_LINES = [
  { t: 'Krystalore Signature Retreats', d: 'Revive & Thrive + the Rise & Thrive VIP bundle, hosted on-property.' },
  { t: 'Veteran & First-Responder Recovery', d: 'HER NEXT MISSION trauma-informed retreats (donor + grant funded).' },
  { t: 'Corporate & Business Retreats', d: 'Leadership offsites, culture, and team transformation.' },
  { t: 'Couples & Relationship Retreats', d: 'Premium multi-day relationship intensives.' },
  { t: 'Third-Party Host Leasing', d: 'Outside retreat leaders lease the facility — recurring rent.' },
  { t: 'Technology Platform Fees', d: 'Booking, operations, and member app — SaaS-style recurring revenue.' },
  { t: 'Membership & Community', d: 'Year-round digital membership and alumni community.' },
  { t: 'Somatic & Trauma-Informed Therapy', d: 'Partner-delivered healing programs and intensives.' },
  { t: 'Spa, Recovery & Wellness Services', d: 'On-site spa, cold plunge, sauna, bodywork, recovery.' },
  { t: 'Nutrition & Culinary', d: 'Chef-led programs, retreats, and product.' },
  { t: 'Venture-Partner Products', d: 'Aligned brands sell through the platform and on-property.' },
  { t: 'Events, Galas & Summits', d: 'Masterclasses, fundraisers, and signature summits.' },
  { t: 'Real Estate Income & Appreciation', d: 'Lease income plus Caribbean asset appreciation.' },
  { t: 'Sponsorships, Grants & Donor Giving', d: 'Mission funding for veterans & first responders.' },
]

const PROPERTIES = [
  { name: 'Puerto Rico — Property I', price: '$6M', status: 'Identified', img: '/images/corporate-retreat/wellness-retreat-roatan.jpeg' },
  { name: 'Puerto Rico — Property II', price: '$7M', status: 'Identified', img: '/images/corporate-retreat/wellness-retreat-costa-rica.jpeg' },
  { name: 'Puerto Rico — Property III', price: '$6–7M', status: 'Identified', img: '/images/corporate-retreat/colibri-resort.jpg' },
  { name: 'Caribbean Island — Property IV', price: 'TBD', status: 'Identified', img: '/images/corporate-retreat/aajpz-retreat.jpg' },
]

const RETURN_LAYERS = [
  { icon: Building2, t: 'Layer 1 — Real Estate', d: 'Hard-asset Caribbean real estate with the classic risk/reward profile: lease income, appreciation, and the option to leverage.', tag: 'The floor' },
  { icon: Sparkles, t: 'Layer 2 — Activated Demand', d: 'A proven brand fills the calendar with high-paying retreats (up to $25K / guest / week) — the platform earns a percentage of every booking.', tag: 'The lift' },
  { icon: Cpu, t: 'Layer 3 — Tech & AI Scale', d: 'A shared tech stack runs bookings, operations, and partner revenue across every property — driving margin and scale traditional RE can\'t reach.', tag: 'The multiplier' },
]

const OPPORTUNITY = [
  { icon: HeartPulse, t: 'Women in transition', d: 'Women are the primary buyers of wellness, yet a $360B U.S. women’s-health gap goes unmet — closing it could add $1T to the global economy a year by 2040 (McKinsey).' },
  { icon: ShieldCheck, t: 'Veterans', d: '6,407 veterans died by suicide in 2022 — about 17.6 a day — and ~15% of post-9/11 veterans live with PTSD (U.S. Dept. of Veterans Affairs).' },
  { icon: Users, t: 'First responders', d: 'Roughly 1 in 5 firefighters and paramedics meet PTSD criteria, and ~30% develop a behavioral-health condition — well above the public (USFA/FEMA, NIOSH).' },
]

const MARKET_STATS = [
  { v: '$6.8T', l: 'Global wellness economy (2024) — on track to $9.8T by 2029', src: 'Global Wellness Institute' },
  { v: '$1T+', l: 'Wellness tourism (2024), growing ~16.6%/yr toward $1.4T by 2027', src: 'GWI' },
  { v: '#1 · ~24%/yr', l: 'Latin America–Caribbean: fastest-growing region for wellness real estate', src: 'GWI — Build Well to Live Well 2025' },
  { v: '$548B+', l: 'Wellness real estate — the fastest-growing wellness sector (~19.5%/yr)', src: 'GWI' },
  { v: '~17.8% CAGR', l: 'Somatic / trauma-therapy market ($4B → $12–25B)', src: 'Coherent / HTF' },
  { v: '$21B→$49B', l: 'Luxury wellness-retreat market (9.4% CAGR)', src: 'Industry estimate' },
]

/* The interactive deck. */
const SLIDES = [
  { eyebrow: 'The Opportunity', title: 'Activated Real Estate', body: 'A technology-enabled wellness & retreat real-estate fund — backed by a proven brand — serving women, veterans, and first responders.', img: HERO },
  { eyebrow: 'The Need', title: 'A disconnect at scale', body: 'Women in transition, veterans, and first responders are underserved by today\'s wellness system. The demand for trauma-informed, whole-person healing is real, growing, and largely unmet.', img: '/images/go9/veteran.jpg' },
  { eyebrow: 'The Market', title: 'A $6.8T tailwind — led by the Caribbean', body: 'The global wellness economy hit $6.8T in 2024 and wellness tourism crossed $1T (GWI). Wellness real estate is the single fastest-growing sector — and Latin America–Caribbean is the #1 region at ~24%/yr. Premium retreats command $10K–$25K+ per guest.', img: '/images/go6/spa-relaxation.jpg' },
  { eyebrow: 'The Model', title: 'Real estate + tech + brand', body: 'We fund the real estate. The brand and its venture partners activate it. A shared technology stack scales it. Fourteen revenue lines flow through every center.', img: '/images/go9/retreat-group.jpg' },
  { eyebrow: 'Why Activated Wins', title: '3 returns, one asset', body: 'Layer 1: hard-asset real estate. Layer 2: high-paying retreat demand the platform takes a percentage of. Layer 3: tech & AI scale across the portfolio. Real-estate safety with a much higher activated return.', img: '/images/corporate-retreat/sam-retreat-group.jpg' },
  { eyebrow: 'Unit Economics', title: 'Up to $25K per guest, per week', body: 'Premium retreats collect up to $25,000 per participant per week. The fund earns a percentage as the platform and the facility — on top of base lease income and appreciation.', img: '/images/go6/beach-cocktails.jpg' },
  { eyebrow: 'The Portfolio', title: 'Puerto Rico & the Caribbean', body: 'Three Puerto Rico properties identified at the $6–7M level, plus a fourth on another Caribbean island — with most of the portfolio on Caribbean islands.', img: '/images/corporate-retreat/colibri-resort.jpg' },
  { eyebrow: 'The Raise', title: '$25M tranches', body: '$25M raises deployed as we acquire and activate real estate, with prudent leverage — recycling capital across a growing portfolio.', img: '/images/corporate-retreat/wellness-retreat-costa-rica.jpeg' },
  { eyebrow: 'The Brand', title: 'A demand engine, not a tenant', body: 'Krystalore is featured at every center as a revenue generator, and HER NEXT MISSION anchors the veteran & first-responder mission — turning real estate into a movement.', img: '/images/krystalore/beach-rainbow.png' },
  { eyebrow: 'The Ask', title: 'Change millions of lives — and earn like it', body: 'Join a tech-enabled, brand-backed retreat real-estate platform built to deliver real-estate-grade safety with activated, technology-driven upside.', img: '/images/go9/group-sunset.jpg' },
]

/* ----------------------------- TABS ----------------------------- */

const TABS: Record<string, { label: string; icon: any }> = {
  onepager: { label: 'One-Pager', icon: FileText },
  opportunity: { label: 'The Opportunity', icon: Compass },
  model: { label: 'The Model', icon: Layers },
  deck: { label: 'The Deck', icon: Presentation },
  drilldown: { label: 'Drill-Down', icon: BarChart3 },
  summary: { label: 'Executive Summary', icon: ScrollText },
  documents: { label: 'Documents', icon: Download },
}

const DOCS = [
  { id: 'executive-summary', label: 'Executive Summary', file: '/invest/Krystalore-Retreat-Fund-Executive-Summary.pdf' },
  { id: 'one-pager', label: 'One-Pager', file: '/invest/Krystalore-Retreat-Fund-One-Pager.pdf' },
]

/* --------------------------- COMPONENTS -------------------------- */

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-2xl bg-white/95 backdrop-blur p-4 text-center shadow-lg">
      <div className="text-2xl md:text-3xl font-black text-[#0D9488]">{v}</div>
      <div className="text-[11px] md:text-xs text-gray-600 font-semibold mt-1 leading-tight">{l}</div>
    </div>
  )
}

export default function InvestmentDashboard() {
  const [tab, setTab] = useState('onepager')
  const [slide, setSlide] = useState(0)
  const [doc, setDoc] = useState(DOCS[0])

  const s = SLIDES[slide]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F8FA]">
        {/* HERO */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[380px]">
            <Image src={HERO} alt="Caribbean retreat property" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D5953]/85 via-[#0D5953]/55 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <p className="text-[#E8A849] font-bold uppercase tracking-[0.2em] text-xs mb-3">Private · Investor Dashboard</p>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.05] max-w-2xl">Activated Real Estate: The Retreat Investment Opportunity</h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl font-light">Tech-enabled wellness & retreat real estate, backed by a proven brand — built to change millions of lives for women, veterans, and first responders.</p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {METRICS.map((m) => <Stat key={m.l} v={m.v} l={m.l} />)}
            </div>
          </div>
        </section>

        {/* TAB BAR */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-2 w-max pb-1">
              {Object.entries(TABS).map(([id, t]) => {
                const Icon = t.icon
                const active = tab === id
                return (
                  <button key={id} type="button" onClick={() => setTab(id)}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${active ? 'bg-[#0D9488] text-white shadow-sm' : 'bg-white text-gray-600 hover:text-[#0D9488] border border-gray-200'}`}>
                    <Icon className="w-4 h-4" /> {t.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
          {tab === 'onepager' && <OnePager setTab={setTab} />}
          {tab === 'opportunity' && <Opportunity />}
          {tab === 'model' && <Model />}
          {tab === 'deck' && <Deck slide={slide} setSlide={setSlide} s={s} />}
          {tab === 'drilldown' && <DrillDown />}
          {tab === 'summary' && <Summary />}
          {tab === 'documents' && <Documents doc={doc} setDoc={setDoc} />}

          <p className="mt-12 text-[11px] text-gray-400 leading-relaxed border-t border-gray-200 pt-6">
            <b>Disclaimer.</b> This page is for informational purposes only and does not constitute an offer to sell or a solicitation of an
            offer to buy any security, nor investment, legal, or tax advice. All figures, projections, and forward-looking statements are
            illustrative, subject to change, and not guarantees of future results. Any investment would be made only pursuant to definitive
            offering documents. Prospective investors should consult their own advisors.
          </p>
        </section>
      </main>
    </>
  )
}

/* ----------------------------- TAB: ONE-PAGER ----------------------------- */
function OnePager({ setTab }: { setTab: (t: string) => void }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-3">The thesis in one line</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fund the <b>real estate</b> for a Caribbean retreat portfolio, then <b>activate</b> it with a proven wellness brand,
            aligned venture partners, third-party hosts, and a shared <b>technology + AI stack</b> — capturing
            <b> real-estate-grade safety with a much higher, activated return</b>.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {RETURN_LAYERS.map((l) => {
            const Icon = l.icon
            return (
              <div key={l.t} className="bg-white rounded-2xl border border-gray-200 p-5">
                <Icon className="w-7 h-7 text-[#0D9488] mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#e07800] mb-1">{l.tag}</p>
                <p className="font-black text-gray-900 text-sm leading-tight mb-1">{l.t}</p>
                <p className="text-[13px] text-gray-600 leading-snug">{l.d}</p>
              </div>
            )
          })}
        </div>
        <div className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-xl font-black mb-3">Why now</h3>
          <p className="text-white/90 leading-relaxed">
            A multi-trillion-dollar wellness economy, a deep unmet need among women, veterans, and first responders, and a brand that already
            fills retreats — meeting hard Caribbean real estate and an AI-enabled platform. The result: a hard asset that performs like a
            growth company.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-3">At a glance</p>
          <ul className="space-y-3 text-sm">
            {[
              ['Raise', '$25M tranches, prudently leveraged'],
              ['Assets', 'Caribbean retreat real estate ($6–7M each)'],
              ['Pipeline', '3 Puerto Rico + 1 Caribbean identified'],
              ['Revenue', '14 lines per center'],
              ['Premium retreats', 'Up to $25K / guest / week (platform %)'],
              ['Mission', 'Women · Veterans · First responders'],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                <span className="text-gray-500">{k}</span>
                <span className="text-gray-900 font-semibold text-right">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => setTab('deck')} className="w-full inline-flex items-center justify-center gap-2 bg-[#0D9488] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#0a5d58] transition-colors">
          View the deck <Presentation className="w-4 h-4" />
        </button>
        <button onClick={() => setTab('documents')} className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-5 py-3 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors">
          Download documents <Download className="w-4 h-4" />
        </button>
        <a href={CONTACT} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-5 py-3 rounded-xl">
          Request the data room <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

/* ----------------------------- TAB: OPPORTUNITY ----------------------------- */
function Opportunity() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">The disconnect — and the demand</h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          The people who give the most to others are the least supported in their own healing. That gap is the opportunity — and the brand
          already serves exactly these audiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {OPPORTUNITY.map((o) => {
          const Icon = o.icon
          return (
            <div key={o.t} className="bg-white rounded-2xl border border-gray-200 p-6">
              <Icon className="w-8 h-8 text-[#0D9488] mb-3" />
              <h3 className="font-black text-gray-900 mb-2">{o.t}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">{o.d}</p>
            </div>
          )
        })}
      </div>
      <div>
        <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-1">The market tailwind</p>
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">A multi-trillion-dollar wellness economy — and the Caribbean is leading it</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MARKET_STATS.map((m) => (
            <div key={m.l} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="text-2xl font-black text-[#0D9488] mb-1">{m.v}</div>
              <p className="text-[13px] text-gray-700 leading-snug">{m.l}</p>
              <p className="text-[11px] text-gray-400 mt-2">{m.src}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- TAB: MODEL ----------------------------- */
function Model() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">One asset. Fourteen revenue lines.</h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          We fund the real estate; the brand, its venture partners, third-party hosts, and the technology platform turn each center into a
          diversified, recurring revenue engine.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {REVENUE_LINES.map((r, i) => (
          <div key={r.t} className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#0D9488] text-white font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">{r.t}</p>
              <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: Building2, t: 'The real estate', d: 'The fund owns the Caribbean assets — hard collateral with lease income and appreciation.' },
          { icon: Crown, t: 'The brand & partners', d: 'Krystalore is featured at every center; aligned venture partners and outside hosts add revenue.' },
          { icon: Cpu, t: 'The technology', d: 'A shared AI-enabled platform runs bookings, ops, and partner revenue across the whole portfolio.' },
        ].map((x) => {
          const Icon = x.icon
          return (
            <div key={x.t} className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] rounded-2xl p-5 text-white">
              <Icon className="w-7 h-7 mb-2" />
              <p className="font-black mb-1">{x.t}</p>
              <p className="text-white/90 text-[13px] leading-snug">{x.d}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ----------------------------- TAB: DECK ----------------------------- */
function Deck({ slide, setSlide, s }: { slide: number; setSlide: (n: number) => void; s: typeof SLIDES[number] }) {
  return (
    <div>
      <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg grid lg:grid-cols-2 min-h-[360px]">
        <div className="relative min-h-[220px] lg:min-h-[420px]">
          <Image key={s.img} src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
        <div className="p-7 md:p-10 flex flex-col justify-center">
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-3">{s.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">{s.title}</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">{s.body}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button onClick={() => setSlide(Math.max(0, slide - 1))} disabled={slide === 0}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 border-gray-200 text-gray-700 hover:border-[#34c5c5] disabled:opacity-40 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === slide ? 'bg-[#0D9488]' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
        </div>
        <button onClick={() => setSlide(Math.min(SLIDES.length - 1, slide + 1))} disabled={slide === SLIDES.length - 1}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0D9488] to-[#34c5c5] text-white shadow-sm disabled:opacity-40 transition-shadow">
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <p className="text-center text-xs text-gray-400 mt-3 tabular-nums">{slide + 1} / {SLIDES.length}</p>
    </div>
  )
}

/* ----------------------------- TAB: DRILL-DOWN ----------------------------- */
function DrillDown() {
  return (
    <div className="space-y-10">
      {/* Return profile */}
      <div>
        <h2 className="text-2xl font-black text-gray-900 mb-4">Return profile — three stacked layers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {RETURN_LAYERS.map((l) => {
            const Icon = l.icon
            return (
              <div key={l.t} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-7 h-7 text-[#0D9488]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#E8A849]/20 text-[#e07800] px-2 py-0.5 rounded-full">{l.tag}</span>
                </div>
                <p className="font-black text-gray-900 mb-1">{l.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{l.d}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-4 bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-gray-700 leading-relaxed">
            <b>The comparison:</b> a traditional real-estate investment carries the familiar risk/reward of the asset class. This model keeps
            that hard-asset floor and adds two more layers — activated retreat demand and an AI-enabled platform — targeting a materially
            higher return for comparable real-estate risk. <span className="text-gray-400">(Illustrative; see disclaimer.)</span>
          </p>
        </div>
      </div>

      {/* Properties */}
      <div>
        <h2 className="text-2xl font-black text-gray-900 mb-4">The pipeline</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROPERTIES.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="relative h-32"><Image src={p.img} alt={p.name} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" /></div>
              <div className="p-4">
                <p className="font-black text-gray-900 text-sm leading-tight">{p.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#0D9488] font-black">{p.price}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#34c5c5]/15 text-[#0D9488] px-2 py-0.5 rounded-full">{p.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-[#0D9488]" /> Three Puerto Rico properties identified at $6–7M; a fourth on another Caribbean island. Most of the portfolio will be on Caribbean islands.</p>
      </div>

      {/* Fund mechanics */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <DollarSign className="w-7 h-7 text-[#0D9488] mb-2" />
          <h3 className="font-black text-gray-900 mb-2">The raise</h3>
          <p className="text-gray-600 text-sm leading-relaxed">$25M tranches deployed as we acquire and activate properties, with prudent leverage to amplify equity and recycle capital across a growing portfolio.</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <TrendingUp className="w-7 h-7 text-[#0D9488] mb-2" />
          <h3 className="font-black text-gray-900 mb-2">Unit economics</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Premium retreats collect up to $25,000 per guest per week. The fund earns a percentage as the platform and the facility — stacked on top of base lease income and appreciation.</p>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- TAB: SUMMARY ----------------------------- */
function Summary() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Executive summary</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Krystalore is a wellness, somatic-healing, and recovery brand serving women, veterans, and first responders across health, nutrition, trauma-informed therapy, business, and retreats. This fund finances the <b>real-estate</b> backbone of a Caribbean retreat-center portfolio — and pairs it with a technology platform that lets the model scale.</p>
        <p>Each center is activated by <b>fourteen revenue lines</b>: the brand’s own retreats, veteran and first-responder recovery programs, corporate and couples retreats, third-party host leasing, a technology platform, membership, somatic therapy, spa and recovery, nutrition, venture-partner products, events, real-estate income, and donor/grant funding.</p>
        <p>The investment thesis is simple: keep the <b>risk/reward floor of real estate</b>, then add two more return layers — <b>activated, high-paying retreat demand</b> (up to $25,000 per guest per week, of which the platform earns a percentage) and an <b>AI-enabled technology stack</b> that drives margin and scale. The result is real-estate-grade safety with a materially higher, activated return.</p>
        <p>Three Puerto Rico properties have been identified at the $6–7M level, with a fourth on another Caribbean island, and most of the portfolio targeted across the Caribbean. Capital is raised in <b>$25M tranches</b> and deployed with prudent leverage as properties are acquired and activated.</p>
        <p>The mission and the math align: a hard asset that performs like a growth company — built to change millions of lives.</p>
      </div>
      <a href={CONTACT} className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-6 py-3 rounded-xl">
        Request the full data room <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}

/* ----------------------------- TAB: DOCUMENTS ----------------------------- */
function Documents({ doc, setDoc }: { doc: typeof DOCS[number]; setDoc: (d: typeof DOCS[number]) => void }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex gap-2">
          {DOCS.map((d) => (
            <button key={d.id} onClick={() => setDoc(d)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${doc.id === d.id ? 'bg-[#0D9488] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:text-[#0D9488]'}`}>
              <FileText className="w-4 h-4" /> {d.label}
            </button>
          ))}
        </div>
        <a href={doc.file} download className="ml-auto inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-4 py-2 rounded-xl text-sm">
          <Download className="w-4 h-4" /> Download {doc.label}
        </a>
      </div>
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
        <iframe key={doc.file} src={`${doc.file}#view=FitH`} title={doc.label} className="w-full h-[78vh]" />
      </div>
      <p className="text-xs text-gray-400 mt-3">Tip: use the document tabs above to switch between the Executive Summary and the One-Pager. Both are downloadable and printable.</p>
    </div>
  )
}
