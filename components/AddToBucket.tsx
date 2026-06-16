'use client'

import { useState, useEffect } from 'react'
import { Plus, Check } from 'lucide-react'
import { DEFAULT_BUCKETS } from './CommandBuckets'

// Dropdown that pushes a page link into a Command Center bucket (shared localStorage).
export default function AddToBucket({ label, href, ext }: { label: string; href: string; ext?: boolean }) {
  const [buckets, setBuckets] = useState<{ id: string; title: string }[]>([])
  const [sel, setSel] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const defaults = DEFAULT_BUCKETS.map((b) => ({ id: b.id, title: b.title }))
    let custom: { id: string; title: string }[] = []
    try { custom = JSON.parse(localStorage.getItem('cc-buckets-v1') || '[]') } catch {}
    const all = [...defaults, ...custom]
    setBuckets(all)
    setSel(all[0]?.id || '')
  }, [])

  const add = () => {
    if (!sel) return
    try {
      const links = JSON.parse(localStorage.getItem('cc-links-v1') || '{}')
      links[sel] = [...(links[sel] || []), { label, href, ext }]
      localStorage.setItem('cc-links-v1', JSON.stringify(links))
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    } catch {}
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
