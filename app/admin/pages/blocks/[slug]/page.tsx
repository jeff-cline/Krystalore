'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Plus, Trash2, Image as ImageIcon, Type } from 'lucide-react'

interface Block {
  id: string
  text?: string
  src?: string
  alt?: string
  href?: string
}

interface CmsPage {
  id: string
  title: string
  slug: string
  content: string
  isPublished: boolean
}

function parseBlocks(content: string): Record<string, Block> {
  try {
    const data = JSON.parse(content || '{}')
    return (data?.blocks || {}) as Record<string, Block>
  } catch {
    return {}
  }
}

function getLivePath(content: string, slug: string): string {
  try {
    const data = JSON.parse(content || '{}')
    if (data?.livePath) return data.livePath
  } catch {}
  return '/p/' + slug
}

export default function PageBlocksEditor() {
  const params = useParams()
  const router = useRouter()
  const slug = String(params.slug || '')

  const [page, setPage] = useState<CmsPage | null>(null)
  const [blocks, setBlocks] = useState<Record<string, Block>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newKey, setNewKey] = useState('')

  useEffect(() => {
    fetch(`/api/admin/pages/by-slug/${slug}`)
      .then((r) => r.json())
      .then((p) => {
        if (p.error) throw new Error(p.error)
        setPage(p)
        setBlocks(parseBlocks(p.content))
      })
      .catch((err) => alert('Load failed: ' + err.message))
      .finally(() => setLoading(false))
  }, [slug])

  const livePath = useMemo(() => (page ? getLivePath(page.content, page.slug) : '/'), [page])

  const updateBlock = (id: string, patch: Partial<Block>) => {
    setBlocks((b) => ({ ...b, [id]: { ...(b[id] || { id }), ...patch, id } }))
  }

  const removeBlock = (id: string) => {
    setBlocks((b) => {
      const c = { ...b }
      delete c[id]
      return c
    })
  }

  const addBlock = () => {
    const key = newKey.trim()
    if (!key) return
    if (blocks[key]) {
      alert('That block id already exists.')
      return
    }
    setBlocks((b) => ({ ...b, [key]: { id: key, text: '' } }))
    setNewKey('')
  }

  const handleSave = async () => {
    if (!page) return
    setSaving(true)
    try {
      const payload: Record<string, Block> = {}
      Object.entries(blocks).forEach(([k, v]) => {
        payload[k] = { ...v, id: k }
      })
      const res = await fetch(`/api/admin/pages/by-slug/${slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocks: payload }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Save failed')
      alert('Saved.')
    } catch (err: any) {
      alert('Save failed: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-6 text-gray-500">Loading…</div>
  if (!page) return <div className="p-6 text-red-600">Page not found.</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <Link href="/admin/pages" className="text-xs text-gray-400 hover:text-gray-600 inline-flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to Pages
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">Edit Content: {page.title}</h1>
          <p className="text-xs text-gray-400 mt-1">Live path: <code>{livePath}</code> &middot; slug: <code>{page.slug}</code></p>
        </div>
        <div className="flex items-center gap-2">
          <a href={livePath} target="_blank" className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200">Open live</a>
          <button onClick={handleSave} disabled={saving} className="bg-teal hover:bg-[#37a6a6] text-white text-sm font-bold py-2 px-4 rounded-xl disabled:opacity-50 inline-flex items-center gap-2">
            <Save className="h-4 w-4" /> {saving ? 'Saving…' : 'Save Overrides'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden" style={{ height: '70vh' }}>
          <iframe src={livePath} className="w-full h-full border-0" title="Live preview" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-700">Block Overrides ({Object.keys(blocks).length})</h2>
          </div>

          <p className="text-xs text-gray-500 mb-3">
            Override text or image for any block on this page. Block IDs come from the page&apos;s
            <code className="mx-1 px-1 bg-gray-100 rounded">data-cms-block</code> attributes (set by
            <code className="mx-1 px-1 bg-gray-100 rounded">&lt;EditableText&gt;</code> /
            <code className="mx-1 px-1 bg-gray-100 rounded">&lt;EditableImage&gt;</code> components).
            Inspect the live page to find IDs.
          </p>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="new-block-id (e.g. hero-title)"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:border-teal outline-none"
            />
            <button onClick={addBlock} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-1">
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>

          <div className="space-y-3">
            {Object.entries(blocks).length === 0 && (
              <div className="text-sm text-gray-400 italic border border-dashed border-gray-200 rounded-lg p-6 text-center">
                No overrides yet. Add a block id above to override text or images on this page.
              </div>
            )}
            {Object.entries(blocks).map(([id, block]) => (
              <div key={id} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-xs font-mono text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200">{id}</code>
                  <button onClick={() => removeBlock(id)} className="text-gray-400 hover:text-red-500" title="Remove override">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <label className="block text-[10px] uppercase tracking-wide text-gray-400 mt-2 mb-1 inline-flex items-center gap-1"><Type className="h-3 w-3" /> Text</label>
                <textarea
                  rows={2}
                  value={block.text || ''}
                  onChange={(e) => updateBlock(id, { text: e.target.value })}
                  className="w-full px-2 py-1.5 rounded border border-gray-200 text-sm text-gray-900 focus:border-teal outline-none"
                />
                <label className="block text-[10px] uppercase tracking-wide text-gray-400 mt-2 mb-1 inline-flex items-center gap-1"><ImageIcon className="h-3 w-3" /> Image src</label>
                <input
                  type="text"
                  value={block.src || ''}
                  onChange={(e) => updateBlock(id, { src: e.target.value })}
                  placeholder="/images/..."
                  className="w-full px-2 py-1.5 rounded border border-gray-200 text-sm text-gray-900 focus:border-teal outline-none"
                />
                <label className="block text-[10px] uppercase tracking-wide text-gray-400 mt-2 mb-1">Alt / Link href</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={block.alt || ''}
                    onChange={(e) => updateBlock(id, { alt: e.target.value })}
                    placeholder="alt text"
                    className="px-2 py-1.5 rounded border border-gray-200 text-sm text-gray-900 focus:border-teal outline-none"
                  />
                  <input
                    type="text"
                    value={block.href || ''}
                    onChange={(e) => updateBlock(id, { href: e.target.value })}
                    placeholder="link href (optional)"
                    className="px-2 py-1.5 rounded border border-gray-200 text-sm text-gray-900 focus:border-teal outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
