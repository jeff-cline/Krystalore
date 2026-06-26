'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Check, FileDown, CalendarClock, ArrowRight, AlertTriangle } from 'lucide-react'
import type { Division } from '@/lib/secretDivisions'

// Krystalore-voice guidance per division — used in the PDF + on-screen.
const HOW_I_HELP: Record<string, string> = {
  celebrity:
    'Your name is your most valuable asset — and your greatest exposure. As your secret weapon, I protect the narrative, manage the people and the noise around you, and make sure every move compounds your brand instead of leaking it. We close these gaps quietly, long before they ever reach a headline.',
  'high-profile':
    'Visibility invites scrutiny. As your secret weapon, I bring order to the complexity — aligning your advisors, protecting your name and your family, and building the long game so your wealth and your legacy compound instead of leak.',
  athletes:
    'The clock runs fast and the money game is unforgiving. As your secret weapon, I build the brand bigger than the sport, protect your name on and off the field, and prepare you for the day the jersey comes off — so a career becomes a legacy.',
  politicians:
    'You are the public face. I am the trusted advisor behind the curtain. As your secret weapon, I make you more disciplined, better funded, and better positioned every cycle — managing the people, the relationships, and the strategy so you can focus on leading.',
}

type Item = { id: string; label: string; tier: string }

export default function DivisionAssessment({ division }: { division: Division }) {
  const items: Item[] = useMemo(
    () => division.tiers.flatMap((t, ti) => t.services.map((s, si) => ({ id: `${ti}-${si}`, label: s, tier: t.name }))),
    [division],
  )
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const gaps = items.filter((it) => !checked[it.id])
  const haveCount = items.length - gaps.length

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }))
  const up = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function buildPdf() {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ unit: 'pt', format: 'a4' })
    const W = doc.internal.pageSize.getWidth()
    const H = doc.internal.pageSize.getHeight()
    const M = 48
    let y = 0
    const teal = [13, 148, 136] as const
    const gold = [232, 168, 73] as const
    const ink = [26, 26, 26] as const
    const grey = [110, 110, 110] as const

    const ensure = (need: number) => { if (y + need > H - 60) { doc.addPage(); y = M } }
    const heading = (t: string) => {
      ensure(40); doc.setTextColor(...teal); doc.setFont('helvetica', 'bold'); doc.setFontSize(13)
      doc.text(t.toUpperCase(), M, y); y += 8
      doc.setDrawColor(...gold); doc.setLineWidth(1.5); doc.line(M, y, M + 60, y); y += 18
    }
    const para = (t: string, size = 11, color: readonly number[] = ink) => {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(size); doc.setTextColor(color[0], color[1], color[2])
      const lines = doc.splitTextToSize(t, W - M * 2) as string[]
      lines.forEach((ln) => { ensure(size + 6); doc.text(ln, M, y); y += size + 5 })
    }

    // brand bar
    doc.setFillColor(...teal); doc.rect(0, 0, W, 70, 'F')
    doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(18)
    doc.text('KRYSTALORE CREWS', M, 34)
    doc.setFontSize(10); doc.setTextColor(232, 220, 190)
    doc.text('THE SECRET WEAPON  ·  CONFIDENTIAL ASSESSMENT', M, 52)
    y = 100

    doc.setTextColor(...ink); doc.setFont('helvetica', 'bold'); doc.setFontSize(22)
    doc.text(division.programTitle, M, y); y += 22
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(...grey)
    doc.text(`${division.label} Division  ·  Prepared for ${form.name || 'you'}`, M, y); y += 26

    para('You operate at a level most people never see. This assessment maps where you are already covered — and where the quiet gaps are. The gaps are where I come in.')
    y += 8

    heading('Your Snapshot')
    para(`Areas you already have handled:  ${haveCount} of ${items.length}`, 12, teal)
    para(`Areas that need attention:  ${gaps.length} of ${items.length}`, 12, gold)
    y += 8

    heading('Where the gaps are')
    if (gaps.length === 0) {
      para('You marked every area as handled. Impressive — and rare. The value I add is keeping it that way under pressure, and catching what even strong operators miss.')
    } else {
      gaps.forEach((g) => {
        ensure(18); doc.setFont('helvetica', 'normal'); doc.setFontSize(10.5); doc.setTextColor(...ink)
        doc.setTextColor(...gold); doc.text('•', M, y); doc.setTextColor(...ink)
        const lines = doc.splitTextToSize(`${g.label}`, W - M * 2 - 14) as string[]
        lines.forEach((ln, i) => { if (i) ensure(15); doc.text(ln, M + 14, y); y += 15 })
      })
    }
    y += 10

    heading('How I help — as your secret weapon')
    para(HOW_I_HELP[division.slug] || 'As your secret weapon, I help you fill these gaps, navigate your team, and protect the vision holding it all together — quietly, and at the highest level.')
    para('Every gap above is something we navigate together: your people, your relationships, your performance, and the long-term vision. You stay the face. I stay the operator behind the curtain.', 11, grey)
    y += 12

    heading('Next step')
    para('Krystalore personally reviews every assessment and will be in touch within 24 hours to schedule a confidential conversation about your report. Prefer to move now? Book a call at krystalore.com/book.')

    // footer
    doc.setDrawColor(...gold); doc.setLineWidth(1); doc.line(M, H - 46, W - M, H - 46)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...grey)
    doc.text('Confidential  ·  krystalore@thecrewscoach.com  ·  krystalore.com', M, H - 30)

    doc.save(`Secret-Weapon-Assessment-${division.slug}.pdf`)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // 1) generate + download the branded PDF
    try { await buildPdf() } catch (err) { console.error('pdf', err) }
    // 2) capture the lead (CRM + email to Krystalore)
    try {
      await fetch('/api/secret/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          division: division.label, program: division.programTitle,
          have: haveCount, total: items.length,
          gaps: gaps.map((g) => g.label),
        }),
      })
    } catch (err) { console.error('lead', err) }
    setDone(true)
    setSubmitting(false)
  }

  return (
    <section className="bg-white py-16 md:py-24" id="assessment">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0D9488]">Confidential Self-Assessment</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900 md:text-4xl">Where are your gaps?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
            Check the areas you already have handled. Everything you leave unchecked is a gap — and the gaps are where I come in.
            Get your confidential report instantly.
          </p>
        </div>

        {/* live gap meter */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#0D9488]/[0.05] p-5 text-center ring-1 ring-[#0D9488]/15">
            <div className="font-serif text-3xl font-medium text-[#0D9488]">{haveCount}</div>
            <div className="mt-1 text-sm text-gray-500">Areas handled</div>
          </div>
          <div className="rounded-2xl bg-[#E8A849]/10 p-5 text-center ring-1 ring-[#E8A849]/25">
            <div className="font-serif text-3xl font-medium text-[#e07800]">{gaps.length}</div>
            <div className="mt-1 text-sm text-gray-500">Gaps to close</div>
          </div>
        </div>

        {/* checklist grouped by tier */}
        <div className="space-y-6">
          {division.tiers.map((t, ti) => (
            <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#0D9488]">{['Foundation', 'Growth', 'Legacy'][ti] || t.name}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {t.services.map((s, si) => {
                  const id = `${ti}-${si}`
                  const on = !!checked[id]
                  return (
                    <button key={id} type="button" onClick={() => toggle(id)}
                      className={`flex items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${on ? 'border-[#0D9488] bg-[#0D9488]/[0.05]' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border ${on ? 'border-[#0D9488] bg-[#0D9488]' : 'border-gray-300'}`}>
                        {on && <Check className="h-3.5 w-3.5 text-white" />}
                      </span>
                      <span className={on ? 'text-gray-900' : 'text-gray-600'}>{s}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* shortcomings preview */}
        {gaps.length > 0 && (
          <div className="mt-8 rounded-2xl border border-[#E8A849]/30 bg-[#E8A849]/[0.06] p-6">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#e07800]">
              <AlertTriangle className="h-4 w-4" /> Your gaps ({gaps.length})
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {gaps.slice(0, 10).map((g) => (
                <li key={g.id} className="text-sm text-gray-700">• {g.label}</li>
              ))}
              {gaps.length > 10 && <li className="text-sm text-gray-500">…and {gaps.length - 10} more in your report</li>}
            </ul>
          </div>
        )}

        {/* lead capture / report */}
        <div className="mt-10">
          {done ? (
            <div className="rounded-2xl border border-[#0D9488]/30 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0D9488]/15">
                <FileDown className="h-7 w-7 text-[#0D9488]" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-gray-900">Your report is downloading.</h3>
              <p className="mx-auto mt-3 max-w-md text-gray-600">
                Krystalore will personally be in touch <strong>within 24 hours</strong> to schedule a confidential conversation about it.
                Prefer to move now?
              </p>
              <Link href="/book"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                <CalendarClock className="h-4 w-4" /> Book a Call to Discuss
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-2xl border border-gray-100 bg-[#F6F8FA] p-8 shadow-sm">
              <p className="mb-5 text-center text-sm text-gray-600">Enter your details to download your confidential report.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <input required placeholder="Full name *" value={form.name} onChange={(e) => up('name', e.target.value)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
                <input type="email" required placeholder="Email *" value={form.email} onChange={(e) => up('email', e.target.value)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => up('phone', e.target.value)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
              </div>
              <button type="submit" disabled={submitting}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-black disabled:opacity-60">
                {submitting ? 'Preparing your report…' : <>Download My Report <FileDown className="h-4 w-4" /></>}
              </button>
              <p className="mt-3 text-center text-xs text-gray-400">Confidential. Reviewed personally by Krystalore Crews.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
