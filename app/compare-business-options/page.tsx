import type { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import { Check, Minus, Globe, ArrowRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Compare Business Options',
  description:
    'Krystalore × R0cketShip partnership pricing — compare every tier from THRIVE to EXPLODE across predictive data, marketing, inbound keyword calls, consulting, and immersive personal-brand support.',
}

const CONTACT_MAILTO = `mailto:krystalore@thecrewscoach.com?cc=jeff.cline@me.com&subject=${encodeURIComponent(
  'Compare Business Options',
)}&body=${encodeURIComponent('NAME:\nNumber:\nWhich tier interests you?:\nHow can I help?:')}`

type Tier = { key: string; tag: string; price: string; unlimited: boolean; desc: string; flagship?: boolean }

const TIERS: Tier[] = [
  { key: 'THRIVE', tag: 'Try', price: '$1,500', unlimited: false, desc: 'Dip in. ZIP-level predictive data plus the growth playbook — see what’s possible before you scale.' },
  { key: 'HELP', tag: 'Guided', price: '$3,000', unlimited: false, desc: 'Add a human. Monthly strategy consulting layered on top of your data.' },
  { key: 'RESPONSE', tag: 'Predictive Marketing', price: '$7,500', unlimited: true, desc: 'Predictive-data marketing. We turn the data into campaigns, funnels and pipeline — with unlimited consulting.' },
  { key: 'INTEGRATE', tag: 'Keyword Calls · ZIP', price: '$15,500', unlimited: true, desc: 'Keyword calls in your ZIP. Inbound, AI-qualified, routed to the highest payer — wired into your systems.' },
  { key: 'VELOCITY', tag: 'Quick Start', price: '$32,500', unlimited: true, desc: 'Statewide keyword calls + your first immersive, live at our location. Scale meets in-person.' },
  { key: 'EXPLODE', tag: 'Secret Weapon', price: '$55,000', unlimited: true, flagship: true, desc: 'All-in. The Secret Weapon, exclusive keyword calls + a new revenue stream, and Krystalore + Jeff on-site. Everything we’ve got.' },
]

type Row = [string, number[]]
type Category = { name: string; rows: Row[] }

// Inclusion order matches TIERS: [THRIVE, HELP, RESPONSE, INTEGRATE, VELOCITY, EXPLODE]
const CATEGORIES: Category[] = [
  {
    name: 'Predictive Data & Audience Intelligence',
    rows: [
      ['ZIP-level predictive data', [1, 1, 1, 1, 1, 1]],
      ['Monthly data refresh & reporting', [1, 1, 1, 1, 1, 1]],
      ['Self-serve data dashboard', [1, 1, 1, 1, 1, 1]],
      ['Consumer data append — phone / email / address', [0, 0, 1, 1, 1, 1]],
      ['Propensity & purchase-intent scoring', [0, 0, 1, 1, 1, 1]],
      ['Lookalike audience modeling', [0, 0, 1, 1, 1, 1]],
      ['Multi-ZIP / DMA market data', [0, 0, 0, 1, 1, 1]],
      ['Statewide data coverage', [0, 0, 0, 0, 1, 1]],
      ['Real-time enrichment API ²', [0, 0, 0, 0, 1, 1]],
      ['Exclusive first-party data streams', [0, 0, 0, 0, 0, 1]],
    ],
  },
  {
    name: 'Marketing Engine — R0cketShip',
    rows: [
      ['Growth playbook & resource library', [1, 1, 1, 1, 1, 1]],
      ['Predictive-data marketing campaigns', [0, 0, 1, 1, 1, 1]],
      ['Managed paid media — Meta / Google ¹', [0, 0, 1, 1, 1, 1]],
      ['Landing pages & conversion funnels', [0, 0, 1, 1, 1, 1]],
      ['Retargeting & remarketing pixels', [0, 0, 1, 1, 1, 1]],
      ['SEO / AEO silo content engine', [0, 0, 0, 1, 1, 1]],
      ['Cold-outreach engine — email / SMS', [0, 0, 0, 1, 1, 1]],
      ['Multi-touch attribution', [0, 0, 0, 1, 1, 1]],
      ['Micro-influencer / creator network', [0, 0, 0, 0, 1, 1]],
      ['Omnichannel campaign orchestration', [0, 0, 0, 0, 1, 1]],
    ],
  },
  {
    name: 'Inbound Keyword Calls & Monetization',
    rows: [
      ['Call tracking & QR analytics', [0, 0, 0, 1, 1, 1]],
      ['Inbound keyword calls — single ZIP', [0, 0, 0, 1, 1, 1]],
      ['AI voice intake & qualification agent', [0, 0, 0, 1, 1, 1]],
      ['Highest-payer ping-tree routing', [0, 0, 0, 1, 1, 1]],
      ['Keyword calls — up to a full STATE', [0, 0, 0, 0, 1, 1]],
      ['Real-time lead-to-revenue attribution', [0, 0, 0, 0, 1, 1]],
      ['EXCLUSIVE keyword calls — no competition', [0, 0, 0, 0, 0, 1]],
      ['New revenue-share stream', [0, 0, 0, 0, 0, 1]],
    ],
  },
  {
    name: 'Platform · Technology · Integrations',
    rows: [
      ['Core dashboard access', [1, 1, 1, 1, 1, 1]],
      ['Lead & contact CRM', [0, 0, 1, 1, 1, 1]],
      ['Autonomous optimization logic', [0, 0, 0, 0, 1, 1]],
      ['White-label multi-site capability', [0, 0, 0, 0, 1, 1]],
      ['API & webhook integrations ²', [0, 0, 0, 0, 1, 1]],
      ['Bespoke engineering / custom builds', [0, 0, 0, 0, 0, 1]],
      ['Priority infrastructure & SLA', [0, 0, 0, 0, 0, 1]],
    ],
  },
  {
    name: 'Consulting & Strategy — Jeff Cline',
    rows: [
      ['Insider community & briefings', [1, 1, 1, 1, 1, 1]],
      ['Monthly strategy consulting', [0, 1, 1, 1, 1, 1]],
      ['Unlimited email tech & business consulting', [0, 0, 1, 1, 1, 1]],
      ['KPI optimization & growth modeling', [0, 0, 1, 1, 1, 1]],
      ['Quarterly business reviews', [0, 0, 0, 1, 1, 1]],
      ['Dedicated growth strategist', [0, 0, 0, 0, 1, 1]],
      ['Jeff Cline direct line + the secret sauce', [0, 0, 0, 0, 0, 1]],
    ],
  },
  {
    name: 'Krystalore — Immersive & Personal',
    rows: [
      ['Personal-brand foundations', [0, 1, 1, 1, 1, 1]],
      ['Executive presence & on-camera coaching', [0, 1, 1, 1, 1, 1]],
      ['Performance / mindset / wellness', [0, 0, 1, 1, 1, 1]],
      ['Krystalore + Jeff Cline — full combined access', [0, 0, 1, 1, 1, 1]],
      ['Immersive in-person — live at our location', [0, 0, 0, 0, 1, 1]],
      ['On-site live consulting at YOUR location', [0, 0, 0, 0, 0, 1]],
      ['Krystalore 1:1 immersive intensive', [0, 0, 0, 0, 0, 1]],
      ['The Secret Weapon', [0, 0, 0, 0, 0, 1]],
      ['Community building — platform', [0, 1, 1, 1, 1, 1]],
      ['Community building — management', [0, 0, 1, 1, 1, 1]],
      ['Community building — activation', [0, 0, 0, 1, 1, 1]],
      ['Community building — scale', [0, 0, 0, 0, 1, 1]],
      ['Community building — co-branded', [0, 0, 0, 0, 0, 1]],
    ],
  },
]

const NOTES = [
  '¹ Ad spend & media budgets are separate and billed at cost.',
  '² APIs / third-party integrations may require additional budget.',
  'RESPONSE and above include unlimited email tech & business consulting.',
  'Travel & expense (T&E) for immersive / on-site is not included — pre-approved as needed.',
  'All tiers are 12-month agreements, billed monthly; success fees may apply on performance tiers.',
]

function Cell({ on, flagship }: { on: boolean; flagship?: boolean }) {
  return (
    <td className={`px-3 py-3 text-center ${flagship ? 'bg-[#E8A849]/5' : ''}`}>
      {on ? (
        <Check className="mx-auto h-5 w-5 text-[#0D9488]" strokeWidth={3} />
      ) : (
        <Minus className="mx-auto h-4 w-4 text-gray-300" />
      )}
    </td>
  )
}

export default function CompareBusinessOptionsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Krystalore × R0cketShip · Partnership Pricing
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">
            Compare Business Options
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Six tiers, one partnership — predictive data, done-for-you marketing, inbound keyword calls,
            unlimited consulting, and immersive personal-brand support. Find the level that fits where you are,
            and scale into the next.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Get More Info <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0D9488] px-8 py-4 font-bold text-[#0D9488] transition hover:bg-[#0D9488]/5"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {TIERS.map((t) => (
              <div
                key={t.key}
                className={`flex flex-col rounded-2xl border p-5 shadow-sm ${
                  t.flagship ? 'border-[#E8A849] bg-gradient-to-b from-[#E8A849]/10 to-white ring-1 ring-[#E8A849]/40' : 'border-gray-200 bg-white'
                }`}
              >
                <p className={`text-[11px] font-bold uppercase tracking-widest ${t.flagship ? 'text-[#e07800]' : 'text-[#0D9488]'}`}>{t.tag}</p>
                <h3 className="mt-1 text-xl font-black text-gray-900">{t.key}</h3>
                <p className="mt-3 text-2xl font-black text-gray-900">
                  {t.price}
                  <span className="text-sm font-medium text-gray-400"> /mo</span>
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">12-month agreement</p>
                {t.unlimited && (
                  <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0D9488]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} /> Unlimited consulting
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{t.desc}</p>
                <a
                  href={CONTACT_MAILTO}
                  className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    t.flagship ? 'bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white hover:brightness-105' : 'border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/5'
                  }`}
                >
                  Choose {t.key}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison matrix */}
      <section className="bg-[#F6F8FA] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">Full feature comparison</h2>
            <p className="mt-3 text-gray-500">Every capability, tier by tier. Scroll sideways on mobile to see all six.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="sticky left-0 z-10 bg-white px-4 py-4 text-left align-bottom">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Feature</span>
                  </th>
                  {TIERS.map((t) => (
                    <th key={t.key} className={`px-3 py-4 text-center align-bottom ${t.flagship ? 'bg-[#E8A849]/5' : ''}`}>
                      <span className={`block text-[10px] font-bold uppercase tracking-widest ${t.flagship ? 'text-[#e07800]' : 'text-[#0D9488]'}`}>{t.tag}</span>
                      <span className="mt-0.5 block text-base font-black text-gray-900">{t.key}</span>
                      <span className="mt-0.5 block text-xs font-semibold text-gray-500">{t.price}/mo</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat) => (
                  <Fragment key={cat.name}>
                    <tr className="bg-[#0D9488]/5">
                      <td colSpan={TIERS.length + 1} className="sticky left-0 px-4 py-2.5 text-left text-xs font-black uppercase tracking-widest text-[#0D9488]">
                        {cat.name}
                      </td>
                    </tr>
                    {cat.rows.map(([label, incl], i) => (
                      <tr key={cat.name + i} className="border-b border-gray-100 last:border-0 hover:bg-[#F6F8FA]">
                        <td className="sticky left-0 z-10 bg-white px-4 py-3 text-left font-medium text-gray-700">{label as string}</td>
                        {(incl as number[]).map((on, c) => (
                          <Cell key={c} on={!!on} flagship={TIERS[c].flagship} />
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Notes</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {NOTES.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0D9488] to-[#0a5d58] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-black md:text-4xl">Not sure which tier fits?</h2>
                <p className="mt-4 text-white/85">
                  Tell us where you are and where you want to go — we&apos;ll map the right starting tier and the
                  path to scale. Krystalore for the immersive, personal-brand and performance side; Jeff Cline
                  and R0cketShip for the data, marketing and revenue engine.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={CONTACT_MAILTO} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#0D9488] transition hover:bg-white/90">
                    Get More Info <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">
                    Book a Strategy Call
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Jeff Cline — R0cketShip</p>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2"><Globe className="h-4 w-4 flex-shrink-0 text-[#E8A849]" /> R0cketShip.com · PredictiveData.org · Jeff-cline.com</li>
                </ul>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/70">Krystalore</p>
                <p className="mt-2 text-sm text-white/90">Immersive · Personal Brand · Performance</p>
                <a href={CONTACT_MAILTO} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0D9488] transition hover:bg-white/90">
                  Get More Info <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-xs text-white/60">Prefer to reach out directly? Use the form above and we&apos;ll come to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
