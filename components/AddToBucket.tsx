'use client'

import { useState, useEffect } from 'react'
import { Plus, Check } from 'lucide-react'
import { loadState, saveState, newId } from './commandData'

// Pushes a page link into a Command Center bucket (shared localStorage model).
export default function AddToBucket({ label, href, ext }: { label: string; href: string; ext?: boolean }) {
  const [buckets, setBuckets] = useState<{ id: string; title: string }[]>([])
  const [sel, setSel] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const s = loadState()
    const list = s.buckets.map((b) => ({ id: b.id, title: b.title }))
    setBuckets(list)
    setSel(list[0]?.id || '')
  }, [])

  const add = () => {
    if (!sel) return
    const s = loadState()
    const i = s.buckets.findIndex((b) => b.id === sel)
    if (i < 0) return
    s.buckets[i].links = [...s.buckets[i].links, { id: newId(), label, href, ext }]
    saveState(s)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      <select value={sel} onChange={(e) => setSel(e.target.value)} aria-label="Choose bucket"
        className="text-[11px] border border-gray-200 rounded-md px-1.5 py-1 bg-white text-gray-600 max-w-[120px]">
        {buckets.map((b) => <option key={b.id} value={b.id}>{b.title}</option>)}
      </select>
      <button onClick={add} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0D9488] hover:bg-[#F6F8FA] rounded-md px-2 py-1">
        {added ? <><Check className="w-3.5 h-3.5" /> Added</> : <><Plus className="w-3.5 h-3.5" /> Add</>}
      </button>
    </div>
  )
}
