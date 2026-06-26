'use client'

import { useState } from 'react'

const INTERESTS = [
  'The Advisor — $3,500/mo',
  'The Strategist — $7,500/mo',
  'The Executive Partner — $18,000/mo',
  'Growth Architecture',
  'Crisis Activation',
  'Fully Immersive',
  'The Secret Weapon — full engagement',
  'Not sure yet — advise me',
]

// Posts into the core lead pipeline (CRM via ShYft -> GoHighLevel + Zapmail email to Krystalore).
export default function ApplyForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', role: '', interest: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const up = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const r = await fetch('/api/secret/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // map to the /api/secret/apply contract (engagement + biggestPressure)
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone, company: form.company,
          role: form.role, engagement: form.interest, biggestPressure: form.message,
        }),
      })
      if (r.ok) setDone(true)
    } catch { /* silent */ }
    setSubmitting(false)
  }

  return (
    <div className="section off" id="apply">
      <div className="wrap">
        <span className="eyebrow gold">By Application Only</span>
        <h2 className="headline">Request your <em>invitation.</em></h2>
        <p className="lead">Tell me where you are. If it&apos;s a fit, I&apos;ll reach out personally. Confidential, always.</p>

        {done ? (
          <div className="ic-apply ic-success">
            <h3>Your application is received.</h3>
            <p>Krystalore reviews every application personally. If it&apos;s a strong fit, you&apos;ll hear from her directly.</p>
          </div>
        ) : (
          <form className="ic-apply" onSubmit={submit}>
            <div className="ic-grid2">
              <div className="ic-field"><label>Full Name *</label>
                <input required value={form.name} onChange={(e) => up('name', e.target.value)} /></div>
              <div className="ic-field"><label>Email *</label>
                <input type="email" required value={form.email} onChange={(e) => up('email', e.target.value)} /></div>
              <div className="ic-field"><label>Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => up('phone', e.target.value)} /></div>
              <div className="ic-field"><label>Company</label>
                <input value={form.company} onChange={(e) => up('company', e.target.value)} /></div>
            </div>
            <div className="ic-field"><label>Your Role</label>
              <input placeholder="Founder, CEO, Executive…" value={form.role} onChange={(e) => up('role', e.target.value)} /></div>
            <div className="ic-field"><label>What are you interested in?</label>
              <select value={form.interest} onChange={(e) => up('interest', e.target.value)}>
                <option value="">Select…</option>
                {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
              </select></div>
            <div className="ic-field"><label>What pressure are you carrying right now?</label>
              <textarea rows={3} value={form.message} onChange={(e) => up('message', e.target.value)} /></div>
            <button type="submit" className="ic-submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
