'use client'

import { useState, useEffect } from 'react'
import { Plus, ExternalLink, ArrowRight, X, FolderPlus } from 'lucide-react'

export type CcLink = { label: string; href: string; ext?: boolean }
type Bucket = { id: string; title: string; links: CcLink[] }

// Default buckets (the standard Command Center sections). IDs are shared with /dash.
export const DEFAULT_BUCKETS: Bucket[] = [
  { id: 'coaching', title: 'Coaching', links: [
    { label: 'All Coaching', href: '/services' }, { label: 'Corporate Wellness', href: '/wellness' },
    { label: 'Leadership Training', href: '/leadership-training' }, { label: 'FIRE Challenge', href: '/firechallenge' },
    { label: 'Health Mastery', href: '/health-mastery' }, { label: 'Private Coaching', href: '/privatemindset' },
    { label: 'Million Dollar Body', href: '/million-dollar-body' }, { label: 'Beyond Limits Bootcamp', href: '/bootcamp' },
    { label: 'Courses', href: '/courses' },
  ] },
  { id: 'events', title: 'Events', links: [
    { label: 'Bombshell Bootcamp', href: '/bombshell-bootcamp' }, { label: 'Vision Board Party', href: '/vision-board' },
    { label: 'Masterclass', href: '/masterclass' }, { label: 'Speaking', href: '/speaker' },
  ] },
  { id: 'retreats', title: 'Retreats', links: [
    { label: 'All Retreats', href: '/retreat' }, { label: 'Costa Rica', href: '/cr-retreat' },
    { label: 'Puerto Rico', href: '/pr-retreat' }, { label: 'Tennessee', href: '/tn-retreat' },
    { label: 'Business', href: '/business-smart-start' }, { label: 'Couples', href: '/couples-retreats' },
    { label: 'Veterans', href: '/veteran-retreats' },
  ] },
  { id: 'missions', title: 'About & Missions', links: [
    { label: 'About', href: '/about' }, { label: 'Books', href: '/books' }, { label: 'Shop', href: '/shop' }, { label: 'Podcast', href: '/podcasts' },
  ] },
  { id: 'external', title: 'External Properties', links: [
    { label: 'Her Next Mission — Non-Profit', href: 'https://hernextmission.org', ext: true },
    { label: 'Activate4Impact — Corporate', href: 'https://activate4impact.com', ext: true },
    { label: 'R0cketship — Tech', href: 'https://r0cketship.com', ext: true },
    { label: 'World Changers — Community', href: 'https://www.worldchangers.ai', ext: true },
  ] },
]

const LINKS_KEY = 'cc-links-v1'
const BUCKETS_KEY = 'cc-buckets-v1'

function Row({ it, onRemove }: { it: CcLink; onRemove?: () => void }) {
  const cls = 'group flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-[#F6F8FA] transition-colors'
  const inner = (
    <>
      <span className="font-semibold text-gray-800 text-[14px] truncate">{it.label}</span>
      <span className="flex items-center gap-1 text-[12px] text-gray-400 flex-shrink-0">
        {it.ext ? 'link' : it.href}
        {it.ext ? <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" /> : <ArrowRight className="w-3.5 h-3.5 text-[#0D9488] opacity-0 group-hover:opacity-100" />}
      </span>
    </>
  )
  return (
    <div className="flex items-center gap-1">
      {it.ext
        ? <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls + ' flex-1'}>{inner}</a>
        : <a href={it.href} className={cls + ' flex-1'}>{inner}</a>}
      {onRemove && <button onClick={onRemove} aria-label="Remove" className="text-gray-300 hover:text-red-400 p-1"><X className="w-3.5 h-3.5" /></button>}
    </div>
  )
}

function AddLink({ onAdd }: { onAdd: (l: CcLink) => void }) {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('')
  const [href, setHref] = useState('')
  if (!open) return (
    <button onClick={() => setOpen(true)} className="mt-1 inline-flex items-center gap-1.5 text-[#0D9488] font-bold text-xs px-3 py-1.5 hover:bg-[#F6F8FA] rounded-lg">
      <Plus className="w-3.5 h-3.5" /> Add link
    </button>
  )
  const save = () => {
    if (!label.trim() || !href.trim()) return
    const h = href.trim()
    onAdd({ label: label.trim(), href: h, ext: /^https?:\/\//i.test(h) })
    setLabel(''); setHref(''); setOpen(false)
  }
  return (
    <div className="mt-2 space-y-1.5 bg-[#F6F8FA] rounded-lg p-2.5">
      <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Text / label" className="w-full px-2.5 py-1.5 text-sm rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
      <input value={href} onChange={(e) => setHref(e.target.value)} placeholder="URL or /path" className="w-full px-2.5 py-1.5 text-sm rounded-md border border-gray-200 outline-none focus:border-[#34c5c5]" />
      <div className="flex gap-2">
        <button onClick={save} className="flex-1 bg-[#0D9488] text-white text-xs font-bold py-1.5 rounded-md">Add</button>
        <button onClick={() => setOpen(false)} className="px-3 text-gray-400 text-xs">Cancel</button>
      </div>
    </div>
  )
}

export default function CommandBuckets() {
  const [mounted, setMounted] = useState(false)
  const [extraLinks, setExtraLinks] = useState<Record<string, CcLink[]>>({})
  const [customBuckets, setCustomBuckets] = useState<{ id: string; title: string }[]>([])
  const [addingBucket, setAddingBucket] = useState(false)
  const [bucketName, setBucketName] = useState('')

  useEffect(() => {
    setMounted(true)
    try {
      setExtraLinks(JSON.parse(localStorage.getItem(LINKS_KEY) || '{}'))
      setCustomBuckets(JSON.parse(localStorage.getItem(BUCKETS_KEY) || '[]'))
    } catch {}
  }, [])

  const saveLinks = (next: Record<string, CcLink[]>) => { setExtraLinks(next); try { localStorage.setItem(LINKS_KEY, JSON.stringify(next)) } catch {} }
  const saveBuckets = (next: { id: string; title: string }[]) => { setCustomBuckets(next); try { localStorage.setItem(BUCKETS_KEY, JSON.stringify(next)) } catch {} }

  const addLink = (bucketId: string, link: CcLink) => {
    const next = { ...extraLinks, [bucketId]: [...(extraLinks[bucketId] || []), link] }
    saveLinks(next)
  }
  const removeLink = (bucketId: string, idx: number) => {
    const next = { ...extraLinks, [bucketId]: (extraLinks[bucketId] || []).filter((_, i) => i !== idx) }
    saveLinks(next)
  }
  const addBucket = () => {
    if (!bucketName.trim()) return
    const id = 'custom-' + Date.now()
    saveBuckets([...customBuckets, { id, title: bucketName.trim() }])
    setBucketName(''); setAddingBucket(false)
  }
  const removeBucket = (id: string) => {
    saveBuckets(customBuckets.filter((b) => b.id !== id))
    const { [id]: _drop, ...rest } = extraLinks
    saveLinks(rest)
  }

  const allBuckets: Bucket[] = [
    ...DEFAULT_BUCKETS,
    ...customBuckets.map((b) => ({ id: b.id, title: b.title, links: [] as CcLink[] })),
  ]

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBuckets.map((b) => {
          const extras = (mounted && extraLinks[b.id]) || []
          const isCustom = b.id.startsWith('custom-')
          return (
            <div key={b.id} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-black text-gray-900">{b.title}</h2>
                {isCustom && <button onClick={() => removeBucket(b.id)} aria-label="Delete bucket" className="text-gray-300 hover:text-red-400"><X className="w-4 h-4" /></button>}
              </div>
              <div className="space-y-0.5">
                {b.links.map((it) => <Row key={it.href + it.label} it={it} />)}
                {extras.map((it, i) => <Row key={'x' + i + it.href} it={it} onRemove={() => removeLink(b.id, i)} />)}
              </div>
              <AddLink onAdd={(l) => addLink(b.id, l)} />
            </div>
          )
        })}
      </div>

      {/* Add bucket */}
      <div className="mt-6">
        {!addingBucket ? (
          <button onClick={() => setAddingBucket(true)} className="inline-flex items-center gap-2 border-2 border-dashed border-[#34c5c5]/60 text-[#0D9488] font-bold px-5 py-3 rounded-2xl hover:bg-[#34c5c5]/5 transition-colors">
            <FolderPlus className="w-5 h-5" /> Add bucket
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-2">
            <input value={bucketName} onChange={(e) => setBucketName(e.target.value)} placeholder="Bucket name" autoFocus className="px-3 py-2 text-sm rounded-lg border border-gray-200 outline-none focus:border-[#34c5c5]" />
            <button onClick={addBucket} className="bg-[#0D9488] text-white text-sm font-bold px-4 py-2 rounded-lg">Create</button>
            <button onClick={() => setAddingBucket(false)} className="text-gray-400 text-sm px-2">Cancel</button>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-3">Your added links &amp; buckets are saved in this browser.</p>
    </div>
  )
}
