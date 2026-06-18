'use client'

import { useState, useEffect } from 'react'
import {
  Lock, Pencil, Check, Plus, X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  Trash2, FolderPlus, ExternalLink, Maximize2, Minimize2, Users,
} from 'lucide-react'
import { CcState, CcBucket, CcLink, DEFAULT_STATE, PALETTE, loadState, saveState, newId } from './commandData'
import CrystalRain from './CrystalRain'
import Contacts from './Contacts'

const VIEW_PW = 'TeamKrystalore'
const EDIT_PW = 'Krystalore'

export default function CommandCenter() {
  const [mounted, setMounted] = useState(false)
  const [viewOk, setViewOk] = useState(false)
  const [editOk, setEditOk] = useState(false)
  const [editing, setEditing] = useState(false)
  const [state, setState] = useState<CcState>(DEFAULT_STATE)
  const [vpw, setVpw] = useState(''); const [verr, setVerr] = useState(false)
  const [askEdit, setAskEdit] = useState(false); const [epw, setEpw] = useState(''); const [eerr, setEerr] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const [pending, setPending] = useState<'edit' | 'contacts' | null>(null)

  useEffect(() => {
    setMounted(true)
    setState(loadState())
    try {
      if (localStorage.getItem('cc-view-ok') === '1') setViewOk(true)
      if (localStorage.getItem('cc-edit-ok') === '1') setEditOk(true)
    } catch {}
  }, [])

  const update = (next: CcState) => { setState(next); saveState(next) }

  /* gate handlers */
  const submitView = (e: React.FormEvent) => { e.preventDefault(); if (vpw.trim() === VIEW_PW) { setViewOk(true); try { localStorage.setItem('cc-view-ok', '1') } catch {} } else setVerr(true) }
  const clickEdit = () => { if (editing) { setEditing(false); return } if (editOk) { setEditing(true) } else { setPending('edit'); setAskEdit(true) } }
  const clickContacts = () => { if (editOk) { setShowContacts((s) => !s) } else { setPending('contacts'); setAskEdit(true) } }
  const submitEdit = (e: React.FormEvent) => {
    e.preventDefault()
    if (epw.trim() === EDIT_PW) {
      setEditOk(true); setAskEdit(false); try { localStorage.setItem('cc-edit-ok', '1') } catch {}
      if (pending === 'contacts') setShowContacts(true); else setEditing(true)
      setPending(null)
    } else setEerr(true)
  }

  /* mutations */
  const moveBucket = (i: number, d: number) => { const b = [...state.buckets]; const j = i + d; if (j < 0 || j >= b.length) return; [b[i], b[j]] = [b[j], b[i]]; update({ ...state, buckets: b }) }
  const patchBucket = (i: number, p: Partial<CcBucket>) => { const b = [...state.buckets]; b[i] = { ...b[i], ...p }; update({ ...state, buckets: b }) }
  const delBucket = (i: number) => update({ ...state, buckets: state.buckets.filter((_, k) => k !== i) })
  const addBucket = () => update({ ...state, buckets: [...state.buckets, { id: newId(), title: 'New Bucket', color: '#0D9488', size: 'sm', links: [] }] })
  const moveLink = (bi: number, li: number, d: number) => { const b = [...state.buckets]; const ls = [...b[bi].links]; const j = li + d; if (j < 0 || j >= ls.length) return; [ls[li], ls[j]] = [ls[j], ls[li]]; b[bi] = { ...b[bi], links: ls }; update({ ...state, buckets: b }) }
  const delLink = (bi: number, li: number) => { const b = [...state.buckets]; b[bi] = { ...b[bi], links: b[bi].links.filter((_, k) => k !== li) }; update({ ...state, buckets: b }) }
  const patchLink = (bi: number, li: number, p: Partial<CcLink>) => { const b = [...state.buckets]; const ls = [...b[bi].links]; const ext = p.href !== undefined ? /^https?:\/\//i.test(p.href) : ls[li].ext; ls[li] = { ...ls[li], ...p, ext }; b[bi] = { ...b[bi], links: ls }; update({ ...state, buckets: b }) }
  const addLink = (bi: number, label: string, href: string) => { const b = [...state.buckets]; b[bi] = { ...b[bi], links: [...b[bi].links, { id: newId(), label, href, ext: /^https?:\/\//i.test(href) }] }; update({ ...state, buckets: b }) }

  /* ---- VIEW GATE ---- */
  if (!viewOk) {
    return (
      <div className="relative overflow-hidden min-h-[78vh] flex items-center justify-center bg-gradient-to-br from-[#33413f] via-[#0D5953] to-[#0D9488]">
        <CrystalRain />
        <form onSubmit={submitView} className="relative z-10 w-full max-w-sm text-center px-6 py-16">
          <div className="w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mx-auto mb-5"><Lock className="w-7 h-7 text-white" /></div>
          <h1 className="text-2xl font-black text-white tracking-[0.2em] mb-1">COMMAND CENTER</h1>
          <p className="text-white/70 text-sm mb-6">Team access · enter password</p>
          <input type="password" value={vpw} onChange={(e) => setVpw(e.target.value)} placeholder="Password" autoFocus className="w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 font-semibold text-center outline-none mb-3" />
          <button type="submit" className="w-full px-4 py-3 rounded-xl bg-[#E8A849] hover:bg-[#e07800] text-white font-bold">Enter</button>
          {verr && <p className="text-[#ffe0e0] text-sm mt-3">Incorrect password.</p>}
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* top bar */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs">Org Chart · Directory</p>
        <div className="flex items-center gap-2">
          <button onClick={clickContacts} className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${showContacts ? 'bg-[#0D9488] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:text-[#0D9488]'}`}>
            <Users className="w-4 h-4" /> Contacts
          </button>
          <button onClick={clickEdit} className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${editing ? 'bg-[#0D9488] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:text-[#0D9488]'}`}>
            {editing ? <><Check className="w-4 h-4" /> Done</> : <><Pencil className="w-4 h-4" /> Edit</>}
          </button>
        </div>
      </div>

      {/* MASTER node */}
      <div className="flex flex-col items-center">
        <div className="rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#0a5d58] text-white px-8 py-5 shadow-lg text-center min-w-[280px]">
          {editing
            ? <input value={state.master} onChange={(e) => update({ ...state, master: e.target.value })} className="bg-white/15 text-white font-black text-center text-lg rounded-lg px-3 py-1 outline-none w-full" />
            : <p className="font-black text-lg">{state.master}</p>}
          <p className="text-white/70 text-[11px] uppercase tracking-wider mt-1">Master</p>
        </div>
        <div className="w-0.5 h-6 bg-gray-300" />
      </div>

      {/* BUCKETS */}
      <div className="flex flex-wrap justify-center gap-5">
        {state.buckets.map((b, bi) => (
          <div key={b.id} className={`rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden ${b.size === 'lg' ? 'w-full sm:w-[440px]' : 'w-full sm:w-[270px]'}`}>
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: b.color + '18', borderBottom: `2px solid ${b.color}` }}>
              {editing
                ? <input value={b.title} onChange={(e) => patchBucket(bi, { title: e.target.value })} className="font-black text-gray-900 bg-white/70 rounded px-2 py-0.5 outline-none w-full mr-2" />
                : <h2 className="font-black text-gray-900" style={{ color: b.color }}>{b.title}</h2>}
            </div>

            {editing && (
              <div className="px-3 py-2 bg-[#F6F8FA] border-b border-gray-100 flex flex-wrap items-center gap-1.5">
                <button onClick={() => moveBucket(bi, -1)} title="Move left" className="p-1 rounded hover:bg-white text-gray-500"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => moveBucket(bi, 1)} title="Move right" className="p-1 rounded hover:bg-white text-gray-500"><ChevronRight className="w-4 h-4" /></button>
                <button onClick={() => patchBucket(bi, { size: b.size === 'lg' ? 'sm' : 'lg' })} title="Resize" className="p-1 rounded hover:bg-white text-gray-500">{b.size === 'lg' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}</button>
                <div className="flex gap-1 ml-1">
                  {PALETTE.map((c) => <button key={c} onClick={() => patchBucket(bi, { color: c })} title="Color" className="w-4 h-4 rounded-full ring-1 ring-black/10" style={{ background: c, outline: b.color === c ? `2px solid ${c}` : 'none', outlineOffset: 1 }} />)}
                </div>
                <button onClick={() => delBucket(bi)} title="Delete bucket" className="p-1 rounded hover:bg-white text-red-400 ml-auto"><Trash2 className="w-4 h-4" /></button>
              </div>
            )}

            <div className="p-2">
              {b.links.map((it, li) => (
                <div key={it.id} className="group flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-[#F6F8FA]">
                  {editing && (
                    <span className="flex flex-col -my-1">
                      <button onClick={() => moveLink(bi, li, -1)} className="text-gray-300 hover:text-gray-600"><ChevronUp className="w-3.5 h-3.5" /></button>
                      <button onClick={() => moveLink(bi, li, 1)} className="text-gray-300 hover:text-gray-600"><ChevronDown className="w-3.5 h-3.5" /></button>
                    </span>
                  )}
                  {editing
                    ? <div className="flex-1 min-w-0 grid grid-cols-2 gap-1">
                        <input value={it.label} onChange={(e) => patchLink(bi, li, { label: e.target.value })} placeholder="Title" className="px-2 py-1 text-sm rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
                        <input value={it.href} onChange={(e) => patchLink(bi, li, { href: e.target.value })} placeholder="URL or /path" className="px-2 py-1 text-[12px] rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
                      </div>
                    : it.ext
                      ? <a href={it.href} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0 flex items-center justify-between gap-2"><span className="font-semibold text-gray-800 text-sm truncate">{it.label}</span><ExternalLink className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" /></a>
                      : <a href={it.href} className="flex-1 min-w-0 flex items-center justify-between gap-2"><span className="font-semibold text-gray-800 text-sm truncate">{it.label}</span><span className="text-[11px] text-gray-400 flex-shrink-0">{it.href}</span></a>}
                  {editing && <button onClick={() => delLink(bi, li)} className="text-gray-300 hover:text-red-400"><X className="w-3.5 h-3.5" /></button>}
                </div>
              ))}
              {editing && <AddLinkForm onAdd={(l, h) => addLink(bi, l, h)} />}
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="flex justify-center mt-6">
          <button onClick={addBucket} className="inline-flex items-center gap-2 border-2 border-dashed border-[#34c5c5]/60 text-[#0D9488] font-bold px-5 py-3 rounded-2xl hover:bg-[#34c5c5]/5"><FolderPlus className="w-5 h-5" /> Add bucket</button>
        </div>
      )}

      {showContacts && <Contacts />}

      <p className="text-center text-xs text-gray-400 mt-6">
        {editing ? 'Editing on — your layout saves in this browser.' : 'Press Edit to rearrange (password protected).'}
        {mounted && <a href="/dash" className="text-[#0D9488] font-semibold ml-1">Add pages from the Orphan Dashboard →</a>}
      </p>

      {/* EDIT PASSWORD MODAL */}
      {askEdit && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4" onClick={() => setAskEdit(false)}>
          <form onSubmit={submitEdit} onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl p-6 w-full max-w-xs text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-3"><Lock className="w-6 h-6 text-[#0D9488]" /></div>
            <h3 className="font-black text-gray-900 mb-1">Editor access</h3>
            <p className="text-xs text-gray-500 mb-4">Enter the editor password to move things.</p>
            <input type="password" value={epw} onChange={(e) => setEpw(e.target.value)} placeholder="Editor password" autoFocus className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-center outline-none focus:border-[#34c5c5] mb-3" />
            <button type="submit" className="w-full bg-[#0D9488] text-white font-bold py-2.5 rounded-xl">Unlock editing</button>
            {eerr && <p className="text-red-400 text-sm mt-2">Incorrect password.</p>}
          </form>
        </div>
      )}
    </div>
  )
}

function AddLinkForm({ onAdd }: { onAdd: (label: string, href: string) => void }) {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState(''); const [href, setHref] = useState('')
  if (!open) return <button onClick={() => setOpen(true)} className="mt-1 inline-flex items-center gap-1.5 text-[#0D9488] font-bold text-xs px-2 py-1.5 hover:bg-[#F6F8FA] rounded-lg"><Plus className="w-3.5 h-3.5" /> Add link</button>
  const save = () => { if (!label.trim() || !href.trim()) return; onAdd(label.trim(), href.trim()); setLabel(''); setHref(''); setOpen(false) }
  return (
    <div className="mt-1 space-y-1.5 bg-[#F6F8FA] rounded-lg p-2">
      <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Text / label" className="w-full px-2.5 py-1.5 text-sm rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
      <input value={href} onChange={(e) => setHref(e.target.value)} placeholder="URL or /path" className="w-full px-2.5 py-1.5 text-sm rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
      <div className="flex gap-2"><button onClick={save} className="flex-1 bg-[#0D9488] text-white text-xs font-bold py-1.5 rounded-md">Add</button><button onClick={() => setOpen(false)} className="px-3 text-gray-400 text-xs">Cancel</button></div>
    </div>
  )
}
