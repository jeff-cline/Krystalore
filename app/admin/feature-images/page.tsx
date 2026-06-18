'use client'

import { useEffect, useState, useCallback } from 'react'
import { Plus, Trash2, ArrowUp, ArrowDown, Star, UploadCloud, Save, Loader2, ImageOff } from 'lucide-react'

type GImage = { key: string; url: string; alt?: string; order: number; featured?: boolean }
type GFolder = { id: string; title: string; slug: string; order: number; images: GImage[] }

const uid = () => (globalThis.crypto?.randomUUID?.() || 'f' + Math.random().toString(36).slice(2))
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'folder'

export default function FeatureImagesAdmin() {
  const [folders, setFolders] = useState<GFolder[]>([])
  const [deleteKeys, setDeleteKeys] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')
  const [newFolder, setNewFolder] = useState('')
  const [uploadingFolder, setUploadingFolder] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/feature-images')
      .then(r => r.json())
      .then(d => { if (d.error) setError(d.error); else setFolders((d.folders || []).sort((a: GFolder, b: GFolder) => a.order - b.order)) })
      .catch(() => setError('Failed to load'))
      .finally(() => setLoading(false))
  }, [])

  const flash = (m: string) => { setMsg(m); setTimeout(() => setMsg(''), 2500) }

  const save = useCallback(async () => {
    setSaving(true); setError('')
    try {
      const res = await fetch('/api/admin/feature-images', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: { folders }, deleteKeys }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error || 'Save failed')
      setDeleteKeys([])
      flash('Saved & published to /images')
    } catch (e: any) { setError(e.message) } finally { setSaving(false) }
  }, [folders, deleteKeys])

  const addFolder = () => {
    const title = newFolder.trim(); if (!title) return
    setFolders(f => [...f, { id: uid(), title, slug: slugify(title), order: f.length, images: [] }])
    setNewFolder('')
  }
  const renameFolder = (id: string, title: string) =>
    setFolders(f => f.map(x => x.id === id ? { ...x, title, slug: slugify(title) } : x))
  const deleteFolder = (id: string) => {
    setFolders(f => {
      const fld = f.find(x => x.id === id)
      if (fld) setDeleteKeys(k => [...k, ...fld.images.map(i => i.key)])
      return f.filter(x => x.id !== id)
    })
  }
  const moveFolder = (i: number, dir: -1 | 1) => setFolders(f => {
    const j = i + dir; if (j < 0 || j >= f.length) return f
    const a = [...f];[a[i], a[j]] = [a[j], a[i]]; return a
  })

  const moveImage = (fid: string, i: number, dir: -1 | 1) => setFolders(f => f.map(fld => {
    if (fld.id !== fid) return fld
    const j = i + dir; if (j < 0 || j >= fld.images.length) return fld
    const imgs = [...fld.images];[imgs[i], imgs[j]] = [imgs[j], imgs[i]]; return { ...fld, images: imgs }
  }))
  const toggleFeatured = (fid: string, key: string) => setFolders(f => f.map(fld =>
    fld.id !== fid ? fld : { ...fld, images: fld.images.map(im => ({ ...im, featured: im.key === key ? !im.featured : false })) }
  ))
  const deleteImage = (fid: string, key: string) => {
    setDeleteKeys(k => [...k, key])
    setFolders(f => f.map(fld => fld.id !== fid ? fld : { ...fld, images: fld.images.filter(im => im.key !== key) }))
  }
  const setAlt = (fid: string, key: string, alt: string) => setFolders(f => f.map(fld =>
    fld.id !== fid ? fld : { ...fld, images: fld.images.map(im => im.key === key ? { ...im, alt } : im) }))

  const onUpload = async (fid: string, files: FileList | null) => {
    if (!files?.length) return
    setUploadingFolder(fid); setError('')
    try {
      const fd = new FormData()
      Array.from(files).forEach(f => fd.append('files', f))
      const res = await fetch('/api/admin/feature-images/upload', { method: 'POST', body: fd })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error || 'Upload failed')
      const added: GImage[] = (d.images || []).map((im: any, n: number) => ({ ...im, order: 0, featured: false }))
      setFolders(f => f.map(fld => fld.id === fid ? { ...fld, images: [...fld.images, ...added] } : fld))
      flash(`Uploaded ${added.length} image(s) — remember to Save`)
    } catch (e: any) { setError(e.message) } finally { setUploadingFolder(null) }
  }

  if (loading) return <div className="flex items-center gap-2 text-gray-600"><Loader2 className="w-5 h-5 animate-spin" /> Loading…</div>

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Feature Images</h1>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7e74] text-white font-bold px-5 py-2.5 rounded-lg disabled:opacity-50">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save &amp; Publish
        </button>
      </div>
      <p className="text-gray-500 text-sm mb-6">Create folders, upload images, drag order with ▲▼, and ⭐ the cover image. Saving publishes to <a href="/images" target="_blank" className="text-[#0D9488] underline">/images</a>.</p>

      {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-2 text-sm">{error}</div>}
      {msg && <div className="mb-4 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-2 text-sm">{msg}</div>}

      {/* Add folder */}
      <div className="flex gap-2 mb-8">
        <input value={newFolder} onChange={e => setNewFolder(e.target.value)} onKeyDown={e => e.key === 'Enter' && addFolder()}
          placeholder="New folder title (e.g. Retreats, Speaking, Events)…"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-[#0D9488]" />
        <button onClick={addFolder} className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-5 py-2.5 rounded-lg">
          <Plus className="w-4 h-4" /> Add Folder
        </button>
      </div>

      {/* Add to an existing folder — quick list so you don't make a new folder every time */}
      {folders.length > 0 && (
        <div className="mb-8 -mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Or add images to an existing folder:</p>
          <div className="flex flex-wrap gap-2">
            {folders.map((fld) => (
              <label key={fld.id} className={`inline-flex items-center gap-1.5 border rounded-full px-3.5 py-1.5 text-sm font-semibold cursor-pointer transition-colors ${uploadingFolder === fld.id ? 'border-[#0D9488] bg-[#0D9488]/5 text-[#0D9488]' : 'border-gray-300 text-gray-700 hover:border-[#0D9488] hover:text-[#0D9488] hover:bg-[#0D9488]/5'}`} title={`Add images to “${fld.title}”`}>
                {uploadingFolder === fld.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <UploadCloud className="w-3.5 h-3.5" />}
                {fld.title}
                <span className="text-xs text-gray-400">({fld.images.length})</span>
                <input type="file" accept="image/*" multiple className="hidden" disabled={uploadingFolder === fld.id}
                  onChange={(e) => { onUpload(fld.id, e.target.files); e.currentTarget.value = '' }} />
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Click a folder to upload straight into it — then hit <strong>Save &amp; Publish</strong>.</p>
        </div>
      )}

      {folders.length === 0 && <p className="text-gray-400">No folders yet. Add your first folder above.</p>}

      <div className="space-y-6">
        {folders.map((fld, fi) => (
          <div key={fld.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <input value={fld.title} onChange={e => renameFolder(fld.id, e.target.value)}
                className="text-lg font-bold text-gray-900 border-b border-transparent hover:border-gray-300 focus:border-[#0D9488] focus:outline-none flex-1 bg-transparent" />
              <span className="text-xs text-gray-400">{fld.images.length} image(s)</span>
              <button onClick={() => moveFolder(fi, -1)} disabled={fi === 0} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30" title="Move folder up"><ArrowUp className="w-4 h-4" /></button>
              <button onClick={() => moveFolder(fi, 1)} disabled={fi === folders.length - 1} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30" title="Move folder down"><ArrowDown className="w-4 h-4" /></button>
              <button onClick={() => { if (confirm(`Delete folder "${fld.title}" and its images?`)) deleteFolder(fld.id) }} className="p-1.5 rounded hover:bg-red-50 text-red-600" title="Delete folder"><Trash2 className="w-4 h-4" /></button>
            </div>

            {/* Upload */}
            <label className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl py-4 mb-4 cursor-pointer hover:border-[#0D9488] hover:bg-[#0D9488]/5 text-gray-600 text-sm">
              {uploadingFolder === fld.id ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading…</> : <><UploadCloud className="w-4 h-4" /> Upload images to “{fld.title}”</>}
              <input type="file" accept="image/*" multiple className="hidden" disabled={uploadingFolder === fld.id}
                onChange={e => { onUpload(fld.id, e.target.files); e.currentTarget.value = '' }} />
            </label>

            {/* Images */}
            {fld.images.length === 0 ? (
              <div className="flex items-center gap-2 text-gray-400 text-sm"><ImageOff className="w-4 h-4" /> No images yet.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fld.images.map((img, ii) => (
                  <div key={img.key} className={`rounded-xl overflow-hidden border ${img.featured ? 'border-[#E8A849] ring-2 ring-[#E8A849]/40' : 'border-gray-200'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={img.alt || ''} className="w-full h-36 object-cover" />
                    <div className="p-2 space-y-2">
                      <input value={img.alt || ''} onChange={e => setAlt(fld.id, img.key, e.target.value)} placeholder="Alt text (optional)"
                        className="w-full text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-[#0D9488]" />
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer select-none">
                          <input type="checkbox" checked={!!img.featured} onChange={() => toggleFeatured(fld.id, img.key)} className="accent-[#E8A849]" />
                          <Star className={`w-3.5 h-3.5 ${img.featured ? 'fill-[#E8A849] text-[#E8A849]' : 'text-gray-400'}`} /> Feature
                        </label>
                        <div className="flex items-center gap-1">
                          <button onClick={() => moveImage(fld.id, ii, -1)} disabled={ii === 0} className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" title="Move up"><ArrowUp className="w-3.5 h-3.5" /></button>
                          <button onClick={() => moveImage(fld.id, ii, 1)} disabled={ii === fld.images.length - 1} className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" title="Move down"><ArrowDown className="w-3.5 h-3.5" /></button>
                          <button onClick={() => deleteImage(fld.id, img.key)} className="p-1 rounded hover:bg-red-50 text-red-600" title="Delete image"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
