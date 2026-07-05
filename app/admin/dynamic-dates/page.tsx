'use client'

import { useEffect, useState, useCallback } from 'react'

type CTA = { enabled: boolean; title: string; link: string; color: string }
type DD = {
  slug: string; label: string; pageUrl: string; title: string; description: string
  date: string; heroImage: string; cta: CTA; updatedAt?: string
}

const blank = (): DD => ({
  slug: '', label: '', pageUrl: '', title: '', description: '', date: '', heroImage: '',
  cta: { enabled: false, title: '', link: '', color: '#E8A849' },
})

export default function DynamicDatesAdmin() {
  const [items, setItems] = useState<DD[]>([])
  const [q, setQ] = useState('')
  const [editing, setEditing] = useState<DD | null>(null)
  const [isNew, setIsNew] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [scanUrl, setScanUrl] = useState('')
  const [scan, setScan] = useState<{ dates: string[]; count: number; error?: string } | null>(null)
  const [scanning, setScanning] = useState(false)

  const load = useCallback(async (query = '') => {
    const r = await fetch(`/api/admin/dynamic-dates?q=${encodeURIComponent(query)}`)
    if (r.ok) setItems((await r.json()).items || [])
  }, [])
  useEffect(() => { load() }, [load])

  const openNew = (prefill?: Partial<DD>) => { setEditing({ ...blank(), ...prefill }); setIsNew(true) }
  const openEdit = (d: DD) => { setEditing({ ...d }); setIsNew(false) }
  const set = (k: keyof DD, v: any) => setEditing((e) => (e ? { ...e, [k]: v } : e))
  const setCta = (k: keyof CTA, v: any) => setEditing((e) => (e ? { ...e, cta: { ...e.cta, [k]: v } } : e))

  const save = async () => {
    if (!editing) return
    setSaving(true)
    const r = await fetch('/api/admin/dynamic-dates', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editing),
    })
    setSaving(false)
    if (r.ok) { setEditing(null); load(q) } else { alert((await r.json()).error || 'Save failed') }
  }
  const remove = async (slug: string) => {
    if (!confirm(`Delete dynamic date "${slug}"?`)) return
    await fetch(`/api/admin/dynamic-dates?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' })
    setEditing(null); load(q)
  }
  const uploadHero = async (file: File) => {
    setUploading(true)
    const fd = new FormData(); fd.append('file', file); fd.append('folder', 'hero-images')
    const r = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    setUploading(false)
    if (r.ok) { const d = await r.json(); if (d.url) set('heroImage', d.url) } else alert('Upload failed')
  }
  const doScan = async () => {
    setScanning(true); setScan(null)
    const r = await fetch('/api/admin/dynamic-dates/scan', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: scanUrl }),
    })
    setScanning(false)
    setScan(r.ok ? await r.json() : { dates: [], count: 0, error: 'Scan failed' })
  }

  return (
    <div className="mx-auto max-w-5xl p-6 text-gray-900">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black">Dynamic Dates</h1>
          <p className="text-sm text-gray-500">Edit the date, title, CTA button, and hero image for any page — no redeploy.</p>
        </div>
        <button onClick={() => openNew()} className="rounded-lg bg-[#0D9488] px-4 py-2 text-sm font-bold text-white hover:bg-[#0b7d72]">+ New dynamic date</button>
      </div>

      {/* URL date scanner */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Check a URL for dates</p>
        <div className="flex flex-wrap gap-2">
          <input value={scanUrl} onChange={(e) => setScanUrl(e.target.value)} placeholder="/vision-board or https://krystalore.com/…"
            className="min-w-[240px] flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm" />
          <button onClick={doScan} disabled={scanning || !scanUrl} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{scanning ? 'Scanning…' : 'Scan'}</button>
        </div>
        {scan && (
          <div className="mt-3 text-sm">
            {scan.error ? <p className="text-red-600">{scan.error}</p> : (
              <>
                <p className="text-gray-600">{scan.count} date{scan.count === 1 ? '' : 's'} found.</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {scan.dates.map((d) => (
                    <button key={d} onClick={() => openNew({ pageUrl: scanUrl, date: d })}
                      className="rounded-full bg-[#34c5c5]/15 px-3 py-1 text-xs font-medium text-[#0D9488] hover:bg-[#34c5c5]/25">{d} +</button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* search + list */}
      <div className="mb-3 flex gap-2">
        <input value={q} onChange={(e) => { setQ(e.target.value); load(e.target.value) }} placeholder="Search pages…"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {items.length === 0 && <p className="p-6 text-center text-sm text-gray-400">No dynamic dates yet. Add one above.</p>}
        {items.map((d) => (
          <button key={d.slug} onClick={() => openEdit(d)} className="flex w-full items-center gap-4 border-b border-gray-100 p-4 text-left last:border-0 hover:bg-gray-50">
            {d.heroImage ? <img src={d.heroImage} alt="" className="h-12 w-16 flex-shrink-0 rounded object-cover" /> : <span className="h-12 w-16 flex-shrink-0 rounded bg-gray-100" />}
            <span className="min-w-0 flex-1">
              <span className="block truncate font-bold">{d.label || d.slug}</span>
              <span className="block truncate text-xs text-gray-500">{d.pageUrl || '—'} · {d.date || 'no date'}</span>
            </span>
            {d.cta?.enabled && <span className="rounded-full bg-[#E8A849]/15 px-2 py-1 text-[10px] font-bold uppercase text-[#b8791f]">CTA</span>}
          </button>
        ))}
      </div>

      {/* editor */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4" onClick={() => setEditing(null)}>
          <div className="my-8 w-full max-w-lg rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-4 text-lg font-black">{isNew ? 'New dynamic date' : `Edit — ${editing.label || editing.slug}`}</h2>
            <div className="space-y-3">
              <Row label="Label (name)"><input className={inp} value={editing.label} onChange={(e) => set('label', e.target.value)} /></Row>
              <Row label="Slug (unique key)"><input className={inp} value={editing.slug} disabled={!isNew} onChange={(e) => set('slug', e.target.value)} placeholder="vision-board" /></Row>
              <Row label="Page URL"><input className={inp} value={editing.pageUrl} onChange={(e) => set('pageUrl', e.target.value)} placeholder="/vision-board" /></Row>
              <Row label="H2 Title"><input className={inp} value={editing.title} onChange={(e) => set('title', e.target.value)} /></Row>
              <Row label="Description"><textarea className={inp} rows={2} value={editing.description} onChange={(e) => set('description', e.target.value)} /></Row>
              <Row label="H3 Date"><input className={inp} value={editing.date} onChange={(e) => set('date', e.target.value)} placeholder="August 15, 2026" /></Row>
              <Row label="Hero image">
                <div className="flex flex-wrap items-center gap-2">
                  <input className={inp + ' flex-1'} value={editing.heroImage} onChange={(e) => set('heroImage', e.target.value)} placeholder="/images/… or upload →" />
                  <label className="cursor-pointer rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
                    {uploading ? 'Uploading…' : 'Upload'}
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadHero(e.target.files[0])} />
                  </label>
                </div>
                {editing.heroImage && <img src={editing.heroImage} alt="" className="mt-2 h-24 w-full rounded object-cover" />}
              </Row>

              <div className="rounded-xl border border-gray-200 p-3">
                <label className="flex items-center gap-2 text-sm font-bold">
                  <input type="checkbox" checked={editing.cta.enabled} onChange={(e) => setCta('enabled', e.target.checked)} /> Call-to-action button
                </label>
                {editing.cta.enabled && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <input className={inp} value={editing.cta.title} onChange={(e) => setCta('title', e.target.value)} placeholder="Button title" />
                    <input className={inp} value={editing.cta.link} onChange={(e) => setCta('link', e.target.value)} placeholder="Button link" />
                    <label className="col-span-2 flex items-center gap-2 text-sm">Color <input type="color" value={editing.cta.color} onChange={(e) => setCta('color', e.target.value)} /> <span className="text-xs text-gray-500">{editing.cta.color}</span></label>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              {!isNew ? <button onClick={() => remove(editing.slug)} className="text-sm font-bold text-red-600">Delete</button> : <span />}
              <div className="flex gap-2">
                <button onClick={() => setEditing(null)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-bold">Cancel</button>
                <button onClick={save} disabled={saving || !editing.slug} className="rounded-lg bg-[#0D9488] px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{saving ? 'Saving…' : 'Save'}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const inp = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm'
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1 block text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>{children}</label>
}
