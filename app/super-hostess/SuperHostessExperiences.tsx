'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, Check, CalendarCheck, ArrowRight } from 'lucide-react'
import { GROUPS } from './data'

export default function SuperHostessExperiences() {
  const [active, setActive] = useState<string | null>(null) // experience title being booked

  return (
    <>
      {GROUPS.map((g) => (
        <section key={g.key} id={g.key} className="py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">{g.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">{g.label}</h2>
            </div>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((exp) => (
                <div key={exp.title} className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={exp.image} alt={exp.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" style={exp.focus ? { objectPosition: exp.focus } : undefined} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {/* H2 per the brief — the experience name is the heading */}
                    <h2 className="text-xl font-black leading-snug text-gray-900">{exp.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{exp.blurb}</p>
                    <button onClick={() => setActive(exp.title)}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A849] to-[#e07800] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105">
                      Click to Book <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {active && <BookingModal experience={active} onClose={() => setActive(null)} />}
    </>
  )
}

function BookingModal({ experience, onClose }: { experience: string; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', preferredDate: '', venue: '', groupSize: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const up = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const r = await fetch('/api/super-hostess/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ experience, ...form }),
      })
      if (r.ok) setDone(true)
    } catch { /* silent */ }
    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-1 flex items-start justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">Book Your Experience</p>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-700"><X className="h-5 w-5" /></button>
        </div>

        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0D9488]/15">
              <Check className="h-7 w-7 text-[#0D9488]" />
            </div>
            <h3 className="mt-5 text-2xl font-black text-gray-900">Request sent!</h3>
            <p className="mx-auto mt-3 max-w-sm text-gray-600">
              Thank you — your <strong>{experience}</strong> request is in. Krystalore will personally reach out to confirm the details.
            </p>
            <button onClick={onClose} className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-black">Done</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 className="text-2xl font-black leading-tight text-gray-900">{experience}</h3>
            <p className="mt-2 text-sm text-gray-500">Share a few details and we&apos;ll contact you to book.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full name *" value={form.name} onChange={(v) => up('name', v)} required />
              <Field label="Email *" type="email" value={form.email} onChange={(v) => up('email', v)} required />
              <Field label="Phone" type="tel" value={form.phone} onChange={(v) => up('phone', v)} />
              <Field label="Preferred date" type="date" value={form.preferredDate} onChange={(v) => up('preferredDate', v)} />
              <Field label="Venue / location" value={form.venue} onChange={(v) => up('venue', v)} placeholder="Hotel, villa, retreat, city…" />
              <Field label="Group size" value={form.groupSize} onChange={(v) => up('groupSize', v)} placeholder="e.g., 12" />
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">Anything else?</span>
              <textarea rows={3} value={form.message} onChange={(e) => up('message', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
            </label>
            <button type="submit" disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A849] to-[#e07800] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-105 disabled:opacity-60">
              {submitting ? 'Sending…' : <>Request This Experience <CalendarCheck className="h-4 w-4" /></>}
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">Krystalore is notified instantly and will reach out to confirm.</p>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text', required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
      <input type={type} value={value} required={required} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-[#0D9488] focus:outline-none focus:ring-1 focus:ring-[#0D9488]" />
    </label>
  )
}
