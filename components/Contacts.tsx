'use client'

import { useState, useEffect } from 'react'
import { Plus, X, Star, Send, Mail, MessageSquare, Linkedin, Facebook, Trash2, Users } from 'lucide-react'

type ChType = 'email' | 'sms' | 'linkedin' | 'facebook'
type Channel = { type: ChType; value: string }
type Contact = { id: string; first: string; last: string; channels: Channel[]; preferred: ChType }

const KEY = 'cc-contacts-v1'
const CH_META: Record<ChType, { label: string; icon: any; ph: string }> = {
  email: { label: 'Email', icon: Mail, ph: 'name@email.com' },
  sms: { label: 'Text / Phone', icon: MessageSquare, ph: '+1 555 123 4567' },
  linkedin: { label: 'LinkedIn', icon: Linkedin, ph: 'https://linkedin.com/in/…' },
  facebook: { label: 'Facebook', icon: Facebook, ph: 'https://facebook.com/…' },
}
const TYPES: ChType[] = ['email', 'sms', 'linkedin', 'facebook']
const rid = () => 'c-' + Math.random().toString(36).slice(2, 9)

function chValue(c: Contact, t: ChType) { return c.channels.find((x) => x.type === t)?.value || '' }
function preferredValue(c: Contact) { return chValue(c, c.preferred) }

export default function Contacts() {
  const [list, setList] = useState<Contact[]>([])
  const [msg, setMsg] = useState('')
  const [adding, setAdding] = useState(false)
  const [sel, setSel] = useState('')
  // add-form fields
  const [first, setFirst] = useState(''); const [last, setLast] = useState('')
  const [vals, setVals] = useState<Record<ChType, string>>({ email: '', sms: '', linkedin: '', facebook: '' })
  const [pref, setPref] = useState<ChType>('email')

  useEffect(() => { try { setList(JSON.parse(localStorage.getItem(KEY) || '[]')) } catch {} }, [])
  const save = (next: Contact[]) => { setList(next); try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {} }

  const resetForm = () => { setFirst(''); setLast(''); setVals({ email: '', sms: '', linkedin: '', facebook: '' }); setPref('email'); setAdding(false) }
  const addContact = () => {
    if (!first.trim()) return
    const channels: Channel[] = TYPES.filter((t) => vals[t].trim()).map((t) => ({ type: t, value: vals[t].trim() }))
    if (!channels.length) return
    const preferred = channels.find((c) => c.type === pref) ? pref : channels[0].type
    save([...list, { id: rid(), first: first.trim(), last: last.trim(), channels, preferred }])
    resetForm()
  }
  const del = (id: string) => save(list.filter((c) => c.id !== id))
  const setPreferred = (id: string, t: ChType) => save(list.map((c) => c.id === id ? { ...c, preferred: t } : c))

  // sending
  const linkFor = (t: ChType, value: string, m: string) => {
    if (t === 'email') return `mailto:${value}?body=${encodeURIComponent(m)}`
    if (t === 'sms') return `sms:${value.replace(/[^+0-9]/g, '')}?&body=${encodeURIComponent(m)}`
    return value // linkedin / facebook → open profile
  }
  const sendOne = (c: Contact) => {
    const v = preferredValue(c); if (!v) return
    if ((c.preferred === 'linkedin' || c.preferred === 'facebook')) { try { navigator.clipboard.writeText(msg) } catch {} }
    window.open(linkFor(c.preferred, v, msg), '_blank')
  }
  const sendAll = () => {
    const emails = list.filter((c) => c.preferred === 'email').map((c) => preferredValue(c)).filter(Boolean)
    const sms = list.filter((c) => c.preferred === 'sms').map((c) => preferredValue(c).replace(/[^+0-9]/g, '')).filter(Boolean)
    if (emails.length) window.open(`mailto:?bcc=${emails.join(',')}&body=${encodeURIComponent(msg)}`, '_blank')
    if (sms.length) window.open(`sms:${sms.join(',')}?&body=${encodeURIComponent(msg)}`, '_blank')
  }
  const socialAll = list.filter((c) => c.preferred === 'linkedin' || c.preferred === 'facebook')

  const sorted = [...list].sort((a, b) => a.first.toLowerCase().localeCompare(b.first.toLowerCase()))
  const groups: Record<string, Contact[]> = {}
  for (const c of sorted) { const k = (c.first[0] || '#').toUpperCase(); (groups[k] ||= []).push(c) }

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-[#0D9488]" />
        <h2 className="text-xl font-black text-gray-900">Contacts &amp; outreach</h2>
        <span className="text-xs text-gray-400">({list.length})</span>
      </div>

      {/* Compose + send */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-5">
        <p className="text-[#0D9488] font-bold uppercase tracking-wider text-[11px] mb-2">Type your message once</p>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} placeholder="Hi! Quick update…" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#34c5c5] text-sm mb-3" />
        <div className="flex flex-wrap items-center gap-2">
          <select value={sel} onChange={(e) => setSel(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-2 py-2 bg-white text-gray-700">
            <option value="">Send to one…</option>
            {sorted.map((c) => <option key={c.id} value={c.id}>{c.first} {c.last}</option>)}
          </select>
          <button onClick={() => { const c = list.find((x) => x.id === sel); if (c) sendOne(c) }} disabled={!sel || !msg.trim()} className="inline-flex items-center gap-1.5 bg-[#34c5c5] text-white font-bold text-sm px-4 py-2 rounded-lg disabled:opacity-40">
            <Send className="w-4 h-4" /> Send
          </button>
          <button onClick={sendAll} disabled={!list.length || !msg.trim()} className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold text-sm px-4 py-2 rounded-lg disabled:opacity-40">
            <Send className="w-4 h-4" /> SEND TO ALL
          </button>
        </div>
        {socialAll.length > 0 && (
          <p className="text-[11px] text-gray-400 mt-2">{socialAll.length} contact(s) prefer LinkedIn/Facebook — those can’t be auto-sent; use “Send to one” to open their profile (message copied to clipboard).</p>
        )}
      </div>

      {/* Add contact */}
      {!adding ? (
        <button onClick={() => setAdding(true)} className="inline-flex items-center gap-2 border-2 border-dashed border-[#34c5c5]/60 text-[#0D9488] font-bold px-4 py-2.5 rounded-xl hover:bg-[#34c5c5]/5 mb-5"><Plus className="w-4 h-4" /> Add contact</button>
      ) : (
        <div className="bg-[#F6F8FA] rounded-2xl p-4 mb-5">
          <div className="grid sm:grid-cols-2 gap-2 mb-2">
            <input value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First name *" className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#34c5c5]" />
            <input value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last name" className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#34c5c5]" />
          </div>
          <div className="space-y-2 mb-3">
            {TYPES.map((t) => {
              const Icon = CH_META[t].icon
              return (
                <div key={t} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <input value={vals[t]} onChange={(e) => setVals({ ...vals, [t]: e.target.value })} placeholder={CH_META[t].ph} className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#34c5c5]" />
                  <button type="button" onClick={() => setPref(t)} title="Preferred (message goes here)" className={pref === t ? 'text-[#E8A849]' : 'text-gray-300 hover:text-[#E8A849]'}><Star className={`w-5 h-5 ${pref === t ? 'fill-[#E8A849]' : ''}`} /></button>
                </div>
              )
            })}
          </div>
          <div className="flex gap-2">
            <button onClick={addContact} className="bg-[#0D9488] text-white font-bold text-sm px-4 py-2 rounded-lg">Save contact</button>
            <button onClick={resetForm} className="text-gray-400 text-sm px-3">Cancel</button>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">⭐ = the channel the message is sent to.</p>
        </div>
      )}

      {/* A–Z list */}
      <div className="space-y-4">
        {Object.keys(groups).sort().map((letter) => (
          <div key={letter}>
            <p className="text-[#0D9488] font-black text-sm mb-1.5">{letter}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {groups[letter].map((c) => (
                <div key={c.id} className="bg-white rounded-xl border border-gray-200 p-3">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-gray-900 text-sm">{c.first} {c.last}</p>
                    <button onClick={() => del(c.id)} className="text-gray-300 hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="mt-1.5 space-y-1">
                    {c.channels.map((ch) => {
                      const Icon = CH_META[ch.type].icon
                      const isPref = c.preferred === ch.type
                      return (
                        <button key={ch.type} onClick={() => setPreferred(c.id, ch.type)} title="Set as preferred" className="flex items-center gap-1.5 w-full text-left">
                          <Icon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                          <span className="text-[12px] text-gray-600 truncate flex-1">{ch.value}</span>
                          <Star className={`w-3.5 h-3.5 ${isPref ? 'text-[#E8A849] fill-[#E8A849]' : 'text-gray-200'}`} />
                        </button>
                      )
                    })}
                  </div>
                  <button onClick={() => sendOne(c)} disabled={!msg.trim()} className="mt-2 w-full inline-flex items-center justify-center gap-1.5 text-[#0D9488] font-bold text-xs border border-[#34c5c5]/40 rounded-lg py-1.5 hover:bg-[#34c5c5]/5 disabled:opacity-40">
                    <Send className="w-3.5 h-3.5" /> Send to {c.first}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        {!list.length && <p className="text-sm text-gray-400">No contacts yet — add one above.</p>}
      </div>
    </div>
  )
}
