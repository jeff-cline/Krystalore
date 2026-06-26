'use client'

import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const BASE_TIERS = [
  { id: 'advisor', name: 'The Advisor', monthly: 3500 },
  { id: 'strategist', name: 'The Strategist', monthly: 7500 },
  { id: 'executive', name: 'The Executive Partner', monthly: 18000 },
] as const

function money(n: number) {
  return '$' + n.toLocaleString('en-US')
}

function buildQuote(baseId: string, addArch: boolean, addAmplify: boolean, addCrisis: boolean, addImmersive: boolean) {
  const base = BASE_TIERS.find((t) => t.id === baseId) || BASE_TIERS[1]
  const parts: string[] = [base.name]
  let monthly: number = base.monthly
  let monthlyCustom = false
  let note = ''

  if (addArch) {
    parts.push('Growth Architecture')
    monthly = baseId === 'strategist' ? 9500 : base.monthly + 2000
  }
  if (addAmplify) {
    parts.push('Amplify')
    if (baseId === 'strategist' && addArch) monthly = 18500
    else if (baseId === 'strategist') monthly = 12500
    else { monthlyCustom = true; note = 'Amplify on this tier is scoped custom on your call.' }
  }

  // High-stakes activations multiply the retainer. Crisis = 3×, Fully Immersive = 3×.
  // Both together bundle at 4× (instead of stacking to 9×).
  let multiplier = 1
  if (addCrisis && addImmersive) { multiplier = 4; parts.push('Crisis + Fully Immersive') }
  else if (addCrisis) { multiplier = 3; parts.push('Crisis Activation') }
  else if (addImmersive) { multiplier = 3; parts.push('Fully Immersive') }

  if (multiplier > 1) {
    const which = addCrisis && addImmersive ? 'Crisis + Fully Immersive bundle' : addCrisis ? 'Crisis Activation' : 'Fully Immersive'
    const mult = `${which} — ${multiplier}× the retainer.`
    note = note ? `${note} ${mult}` : mult
  }

  if (!monthlyCustom) monthly = monthly * multiplier
  const oneTime = addArch ? 5000 : 0

  return {
    engagement: parts.join(' + '),
    monthlyLabel: monthlyCustom ? 'Custom' : money(monthly) + '/mo',
    oneTimeLabel: oneTime ? money(oneTime) + ' one-time' : '—',
    note,
  }
}

function Toggle({ label, detail, on, onClick }: { label: string; detail: string; on: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} type="button"
      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${on ? 'border-[#0D9488] bg-[#0D9488]/[0.05] ring-1 ring-[#0D9488]/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border ${on ? 'border-[#0D9488] bg-[#0D9488]' : 'border-gray-300'}`}>
        {on && <Check className="h-3.5 w-3.5 text-white" />}
      </span>
      <span>
        <span className="block text-sm font-bold text-gray-900">{label}</span>
        <span className="block text-xs text-gray-500">{detail}</span>
      </span>
    </button>
  )
}

export default function Configurator() {
  const [baseId, setBaseId] = useState<string>('strategist')
  const [addArch, setAddArch] = useState(false)
  const [addAmplify, setAddAmplify] = useState(false)
  const [addCrisis, setAddCrisis] = useState(false)
  const [addImmersive, setAddImmersive] = useState(false)
  const quote = buildQuote(baseId, addArch, addAmplify, addCrisis, addImmersive)

  const applyWithConfig = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">Investment Configurator</p>
          <h2 className="mt-3 text-3xl font-medium text-gray-900 md:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Build your engagement</h2>
          <p className="mt-4 leading-relaxed text-gray-600">Shape the room to fit you. Your numbers update live — then carry straight into your application.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0D9488]">Your retainer tier</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {BASE_TIERS.map((t) => (
                  <button key={t.id} onClick={() => setBaseId(t.id)}
                    className={`rounded-xl border p-4 text-left transition ${baseId === t.id ? 'border-[#0D9488] bg-[#0D9488]/[0.05] ring-1 ring-[#0D9488]/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <div className="text-sm font-bold text-gray-900">{t.name}</div>
                    <div className="mt-1 text-xl text-[#0D9488]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{money(t.monthly)}<span className="text-xs text-gray-400">/mo</span></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle label="Add Growth Architecture" detail="Dashboard + systems · $5,000 build" on={addArch} onClick={() => setAddArch((v) => !v)} />
              <Toggle label="Add Amplify" detail="Market amplification engine" on={addAmplify} onClick={() => setAddAmplify((v) => !v)} />
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#e07800]">High-stakes activations</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Toggle label="Crisis Activation" detail="On-call rapid response · 3× the retainer" on={addCrisis} onClick={() => setAddCrisis((v) => !v)} />
                <Toggle label="Fully Immersive" detail="Embedded, all-access · 3× the retainer" on={addImmersive} onClick={() => setAddImmersive((v) => !v)} />
              </div>
              {addCrisis && addImmersive && (
                <p className="mt-2 text-xs font-medium text-[#0D9488]">Both active — bundled at 4× the retainer (instead of stacking to 9×).</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#34c5c5] p-8 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Your Configuration</p>
              <p className="mt-2 text-lg font-semibold leading-snug">{quote.engagement}</p>
              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/80">Monthly</span>
                  <span className="text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{quote.monthlyLabel}</span>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm text-white/80">One-time</span>
                  <span className="text-lg font-semibold">{quote.oneTimeLabel}</span>
                </div>
              </div>
              {quote.note && <p className="mt-4 text-xs leading-relaxed text-white/70">{quote.note}</p>}
              <button onClick={applyWithConfig}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0D9488] transition hover:bg-white/90">
                Apply with this <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
