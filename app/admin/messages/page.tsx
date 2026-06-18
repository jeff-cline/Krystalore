'use client'

import { useEffect, useState } from 'react'
import { Send, Loader2, Users, CheckCircle, AlertCircle, Megaphone } from 'lucide-react'

type Level = { level: string; count: number }

export default function MessagesPage() {
  const [levels, setLevels] = useState<Level[]>([])
  const [total, setTotal] = useState(0)
  const [audience, setAudience] = useState('ALL')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState<'' | 'test' | 'all'>('')
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null)

  useEffect(() => {
    fetch('/api/admin/messages')
      .then(r => r.json())
      .then(d => { if (!d.error) { setLevels(d.levels || []); setTotal(d.total || 0) } })
      .catch(() => {})
  }, [])

  const audienceCount = audience === 'ALL' ? total : (levels.find(l => l.level === audience)?.count || 0)

  const send = async (test: boolean) => {
    setResult(null)
    if (!subject.trim() || !message.trim()) { setResult({ ok: false, text: 'Subject and message are required.' }); return }
    if (!test && !confirm(`Send this message to ${audienceCount} member(s) (${audience})?`)) return
    setSending(test ? 'test' : 'all')
    try {
      const res = await fetch('/api/admin/messages', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message, audience, test }),
      })
      const d = await res.json()
      if (!res.ok) { setResult({ ok: false, text: d.error || 'Send failed.' }); return }
      setResult({ ok: true, text: test ? `Test sent to you (${d.sent} sent, ${d.failed} failed).` : `Sent to ${d.sent} of ${d.total} member(s)${d.failed ? `, ${d.failed} failed` : ''}.` })
    } catch (e: any) {
      setResult({ ok: false, text: e?.message || 'Send failed.' })
    } finally { setSending('') }
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <Megaphone className="w-6 h-6 text-[#34c5c5]" />
        <h1 className="text-2xl font-bold text-white">Member Messages — Broadcast</h1>
      </div>
      <p className="text-gray-400 text-sm mb-6">Compose one message and send it to your members by membership level. Emails go out privately (BCC).</p>

      <div className="card space-y-4">
        {/* Audience */}
        <div>
          <label className="block text-sm font-semibold text-white mb-1.5 flex items-center gap-1.5"><Users className="w-4 h-4" /> Audience</label>
          <select value={audience} onChange={e => setAudience(e.target.value)} className="form-input w-full">
            <option value="ALL">All members ({total})</option>
            {levels.map(l => <option key={l.level} value={l.level}>{l.level} ({l.count})</option>)}
          </select>
          <p className="text-xs text-gray-400 mt-1">This send will reach <strong className="text-[#34c5c5]">{audienceCount}</strong> member(s).</p>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-white mb-1.5">Subject</label>
          <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="e.g. New retreat dates just dropped" className="form-input w-full" />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-white mb-1.5">Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} rows={8} placeholder="Write your message… (blank lines become paragraphs)" className="form-input w-full" />
        </div>

        {result && (
          <div className={`rounded-lg px-4 py-2.5 text-sm flex items-center gap-2 ${result.ok ? 'bg-green-500/15 border border-green-500/40 text-green-300' : 'bg-red-500/15 border border-red-500/40 text-red-300'}`}>
            {result.ok ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />} {result.text}
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-1">
          <button onClick={() => send(true)} disabled={!!sending} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg disabled:opacity-50">
            {sending === 'test' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Send test to me
          </button>
          <button onClick={() => send(false)} disabled={!!sending} className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7e74] text-white font-bold px-5 py-2.5 rounded-lg disabled:opacity-50">
            {sending === 'all' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Megaphone className="w-4 h-4" />} Send to {audienceCount} member(s)
          </button>
        </div>
        <p className="text-xs text-gray-500">Sending uses Zapmail (SendGrid fallback). Requires <code>ZAPMAIL_API_KEY</code> (or <code>SENDGRID_API_KEY</code>) in production. Large lists send in batches of 45 to respect sending limits.</p>
      </div>
    </div>
  )
}
