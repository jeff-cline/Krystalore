'use client'

import { useEffect, useState, useCallback } from 'react'

type CTA = { enabled: boolean; title: string; link: string; color: string }
type DD = {
  slug: string; label: string; pageUrl: string; title: string; description: string
  date: string; time: string; heroImage: string; socialImage: string; cta: CTA; updatedAt?: string
}
type PageImage = { url: string; name: string }

const blank = (): DD => ({
  slug: '', label: '', pageUrl: '', title: '', description: '', date: '', time: '', heroImage: '', socialImage: '',
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
  const [uploadingSocial, setUploadingSocial] = useState(false)
  const [pageImages, setPageImages] = useState<PageImage[] | null>(null)
  const [loadingImages, setLoadingImages] = useState(false)
  const [preview, setPreview] = useState<string | null>(null) // iPhone-preview image url

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
  const uploadImage = async (file: File, field: 'heroImage' | 'socialImage') => {
    const setBusy = field === 'heroImage' ? setUploading : setUploadingSocial
    setBusy(true)
    const fd = new FormData(); fd.append('file', file); fd.append('folder', field === 'heroImage' ? 'hero-images' : 'social-images')
    const r = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    setBusy(false)
    if (r.ok) { const d = await r.json(); if (d.url) set(field, d.url) } else alert('Upload failed')
  }
  const loadPageImages = async () => {
    if (!editing?.pageUrl) { alert('Set the Page URL first.'); return }
    setLoadingImages(true); setPageImages(null)
    const r = await fetch('/api/admin/dynamic-dates/images', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: editing.pageUrl }),
    })
    setLoadingImages(false)
    setPageImages(r.ok ? (await r.json()).images || [] : [])
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
              <Row label="Time (optional)"><input className={inp} value={editing.time} onChange={(e) => set('time', e.target.value)} placeholder="5:00 – 7:00 PM EST" /></Row>
              <Row label="Hero image">
                <div className="flex flex-wrap items-center gap-2">
                  <input className={inp + ' flex-1'} value={editing.heroImage} onChange={(e) => set('heroImage', e.target.value)} placeholder="/images/… or upload →" />
                  <label className="cursor-pointer rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
                    {uploading ? 'Uploading…' : 'Upload'}
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0], 'heroImage')} />
                  </label>
                </div>
                {editing.heroImage && <img src={editing.heroImage} alt="" className="mt-2 h-24 w-full rounded object-cover" />}
              </Row>

              {/* SOCIAL SHARE IMAGE — upload OR pick from the page; drives og:image */}
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">Social share image</p>
                <p className="mb-2 text-xs text-gray-400">Shown when the link is shared (with the title + description above). Falls back to the hero image if empty.</p>
                <div className="flex flex-wrap items-center gap-2">
                  <input className={inp + ' flex-1'} value={editing.socialImage} onChange={(e) => set('socialImage', e.target.value)} placeholder="/images/… , upload, or pick →" />
                  <label className="cursor-pointer rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
                    {uploadingSocial ? 'Uploading…' : 'Upload'}
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0], 'socialImage')} />
                  </label>
                  <button type="button" onClick={loadPageImages} className="rounded-lg bg-[#0D9488] px-3 py-2 text-xs font-bold text-white">{loadingImages ? 'Loading…' : 'Pick from page'}</button>
                  {(editing.socialImage || editing.heroImage) && (
                    <button type="button" onClick={() => setPreview(editing.socialImage || editing.heroImage)} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-bold">Preview</button>
                  )}
                </div>
                {editing.socialImage && <img src={editing.socialImage} alt="" className="mt-2 h-24 w-full rounded object-cover" />}
                {pageImages && (
                  <div className="mt-3">
                    <p className="mb-2 text-xs text-gray-500">{pageImages.length} image{pageImages.length === 1 ? '' : 's'} on this page — click to use, eye to preview:</p>
                    {pageImages.length === 0 ? <p className="text-xs text-gray-400">None found (or the page couldn&apos;t be fetched).</p> : (
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {pageImages.map((img) => (
                          <div key={img.url} className={`group relative overflow-hidden rounded-lg border-2 ${editing.socialImage === img.url ? 'border-[#0D9488]' : 'border-transparent'}`}>
                            <img src={img.url} alt={img.name} title={img.name} onClick={() => set('socialImage', img.url)} className="aspect-video w-full cursor-pointer object-cover" />
                            <span className="absolute inset-x-0 bottom-0 truncate bg-black/55 px-1 py-0.5 text-[9px] text-white">{img.name}</span>
                            <button type="button" onClick={() => setPreview(img.url)} className="absolute right-1 top-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-bold">👁</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

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

      {/* iPhone / iMessage-style social preview */}
      {preview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={() => setPreview(null)}>
          <div className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-white/80">How it looks when shared</p>
            <div className="overflow-hidden rounded-[26px] border border-white/15 bg-[#e9e9eb] p-3 shadow-2xl">
              {/* imessage bubble with a link-preview card */}
              <div className="ml-auto max-w-[86%] overflow-hidden rounded-2xl bg-white shadow">
                <img src={preview} alt="" className="aspect-[1.91/1] w-full object-cover" />
                <div className="px-3 py-2">
                  <p className="line-clamp-2 text-sm font-semibold text-gray-900">{editing?.title || 'Page title'}</p>
                  {editing?.description ? <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">{editing.description}</p> : null}
                  <p className="mt-1 text-[11px] uppercase text-gray-400">krystalore.com</p>
                </div>
              </div>
            </div>
            <button onClick={() => setPreview(null)} className="mx-auto mt-4 block rounded-full bg-white px-5 py-2 text-sm font-bold text-gray-900">Close</button>
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
