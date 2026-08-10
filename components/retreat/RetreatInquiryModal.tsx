'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Check, Loader2, X } from 'lucide-react'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC','PR',
]

const LOCATIONS = [
  'Costa Rica',
  'Puerto Rico',
  'Tennessee',
  'Private / custom location',
  'Not sure yet — help me choose',
]

const empty = {
  firstName: '', lastName: '', city: '', state: '', zip: '',
  phone: '', email: '', retreatDate: '', location: '', notes: '',
}

const label = 'block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1'
const field =
  'w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 ' +
  'focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none transition-shadow bg-white'

export default function RetreatInquiryModal({
  triggerClassName = '',
  triggerLabel = 'Get More Information',
}: {
  triggerClassName?: string
  triggerLabel?: string
}) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(empty)
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open])

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError(null)
    try {
      const r = await fetch('/api/retreat-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(data?.error || 'Something went wrong. Please try again.')
      setDone(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  function close() {
    setOpen(false)
    // reset a completed form so the next open starts clean
    if (done) { setDone(false); setForm(empty) }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel} <ArrowRight className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-sm p-3 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Retreat information request"
          onClick={close}
        >
          <div
            className="relative w-full max-w-2xl my-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="bg-gradient-to-br from-[#123f3a] via-[#1b544c] to-[#22635a] text-white px-6 md:px-8 py-6 relative">
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="text-[#7fe3e3] font-bold tracking-[0.2em] uppercase text-xs mb-2">Revive &amp; Thrive Retreats</p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                Tell us about your <span className="italic font-serif text-[#E8A849]">retreat.</span>
              </h2>
              <p className="text-white/80 mt-2 text-sm md:text-base">
                Share a few details and Krystalore will personally follow up.
              </p>
            </div>

            {done ? (
              <div className="px-6 md:px-10 py-14 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#0D9488]/10 flex items-center justify-center mb-5">
                  <Check className="h-8 w-8 text-[#0D9488]" />
                </div>
                <h3 className="text-2xl font-black mb-3">Thank you — it&rsquo;s on its way.</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Krystalore has your details and will reach out personally. Watch for an email from
                  krystalore@thecrewscoach.com.
                </p>
                <button
                  onClick={close}
                  className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7d73] text-white font-black px-8 py-3 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 md:px-8 py-6 md:py-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="ri-first">First name *</label>
                    <input id="ri-first" required className={field} value={form.firstName} onChange={set('firstName')} autoComplete="given-name" />
                  </div>
                  <div>
                    <label className={label} htmlFor="ri-last">Last name *</label>
                    <input id="ri-last" required className={field} value={form.lastName} onChange={set('lastName')} autoComplete="family-name" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-4">
                  <div>
                    <label className={label} htmlFor="ri-city">City</label>
                    <input id="ri-city" className={field} value={form.city} onChange={set('city')} autoComplete="address-level2" />
                  </div>
                  <div>
                    <label className={label} htmlFor="ri-state">State</label>
                    <select id="ri-state" className={field} value={form.state} onChange={set('state')}>
                      <option value="">—</option>
                      {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="ri-zip">Zip</label>
                    <input id="ri-zip" className={field} value={form.zip} onChange={set('zip')} inputMode="numeric" autoComplete="postal-code" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="ri-phone">Phone number</label>
                    <input id="ri-phone" type="tel" className={field} value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </div>
                  <div>
                    <label className={label} htmlFor="ri-email">Email address *</label>
                    <input id="ri-email" type="email" required className={field} value={form.email} onChange={set('email')} autoComplete="email" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="ri-date">Date of retreat</label>
                    <input id="ri-date" type="date" className={field} value={form.retreatDate} onChange={set('retreatDate')} />
                  </div>
                  <div>
                    <label className={label} htmlFor="ri-loc">Preferred location</label>
                    <select id="ri-loc" className={field} value={form.location} onChange={set('location')}>
                      <option value="">—</option>
                      {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="ri-notes">Anything you&rsquo;d like to ask?</label>
                  <textarea id="ri-notes" rows={3} className={field} value={form.notes} onChange={set('notes')} />
                </div>

                {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] disabled:opacity-60 text-white font-black px-8 py-4 rounded-full hover:scale-[1.03] transition-transform shadow-lg"
                  >
                    {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                    {sending ? 'Sending…' : 'Send My Request'}
                  </button>
                  <p className="text-xs text-gray-500 text-center sm:text-left">
                    We&rsquo;ll only use this to plan your retreat. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
