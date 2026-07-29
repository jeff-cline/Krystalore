'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'rankTitle', label: 'Rank / Title' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Telephone', type: 'tel' },
  { name: 'base', label: 'Military base & location' },
  { name: 'cityState', label: 'City & State' },
  { name: 'referredBy', label: 'Referred by (if applicable)' },
  { name: 'groupType', label: 'Type of group' },
  { name: 'groupSize', label: 'Size of group' },
] as const

export default function MilitaryRequestForm() {
  const [form, setForm] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function set(name: string, value: string) {
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name?.trim() || !form.email?.trim()) {
      setError('Please add your name and email.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/military-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const b = await res.json().catch(() => ({}))
      setSubmitting(false)
      if (!res.ok) return setError(b.error ?? 'Could not send — please try again.')
      setDone(true)
    } catch {
      setSubmitting(false)
      setError('Could not send — please try again.')
    }
  }

  const field =
    'w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent'

  if (done) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center max-w-2xl mx-auto">
        <CheckCircle2 className="w-14 h-14 text-[#0D9488] mx-auto mb-4" />
        <h3 className="text-2xl font-black text-gray-900 mb-2">Request received.</h3>
        <p className="text-gray-600">Thank you — Krystalore will be in touch soon to build the right experience for your unit.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 max-w-3xl mx-auto">
      {error && (
        <div className="mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">{error}</div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.name === 'base' ? 'sm:col-span-2' : ''}>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">
              {f.label}{f.required && <span className="text-[#e07800]"> *</span>}
            </label>
            <input
              type={('type' in f && f.type) || 'text'}
              required={'required' in f && f.required}
              value={form[f.name] ?? ''}
              onChange={(e) => set(f.name, e.target.value)}
              className={field}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-bold text-gray-700 mb-1.5">What type of training are you looking for?</label>
        <input value={form.trainingType ?? ''} onChange={(e) => set('trainingType', e.target.value)} className={field} placeholder="Full-day workshop, keynote, MC, ongoing support…" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-bold text-gray-700 mb-1.5">What goal are you trying to achieve?</label>
        <textarea rows={3} value={form.goal ?? ''} onChange={(e) => set('goal', e.target.value)} className={`${field} resize-none`} placeholder="Communication, morale, resilience, developing new leaders…" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition disabled:opacity-60"
      >
        <Send className="w-5 h-5" /> {submitting ? 'Sending…' : 'Send my request'}
      </button>
      <p className="text-xs text-gray-400 mt-3">Goes straight to Krystalore at krystalore@thecrewscoach.com.</p>
    </form>
  )
}
