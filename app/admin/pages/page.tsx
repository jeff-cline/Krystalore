'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { FileText, Plus, Edit, Trash2, Eye, Copy, Image as ImageIcon, Code, Save, X, Check, Search, ExternalLink, Film } from 'lucide-react'

interface CmsPage {
  id: string; title: string; slug: string; content: string; seoTitle: string | null
  seoDescription: string | null; coverImage: string | null; isPublished: boolean; isTemplate: boolean
  createdAt: string; updatedAt: string
}

interface MediaItem {
  id: string; url: string; name: string; type: string; folder: string
}

function WYSIWYG({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { if (editorRef.current && !loaded) { editorRef.current.innerHTML = value || ''; setLoaded(true) } }, [value, loaded])
  const exec = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); if (editorRef.current) onChange(editorRef.current.innerHTML) }
  const handleInput = () => { if (editorRef.current) onChange(editorRef.current.innerHTML) }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 bg-gray-50 border-b border-gray-200 p-2">
        <button type="button" onClick={() => exec('bold')} className="p-1.5 hover:bg-gray-200 rounded text-gray-600" title="Bold"><b>B</b></button>
        <button type="button" onClick={() => exec('italic')} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 italic" title="Italic"><i>I</i></button>
        <button type="button" onClick={() => exec('formatBlock', '<h1>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold" title="H1">H1</button>
        <button type="button" onClick={() => exec('formatBlock', '<h2>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold" title="H2">H2</button>
        <button type="button" onClick={() => exec('formatBlock', '<h3>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold" title="H3">H3</button>
        <button type="button" onClick={() => exec('formatBlock', '<p>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600" title="Paragraph">P</button>
        <button type="button" onClick={() => exec('insertUnorderedList')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600" title="Bullet List">UL</button>
        <button type="button" onClick={() => exec('insertOrderedList')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600" title="Numbered List">OL</button>
        <div className="h-5 w-px bg-gray-300 mx-1" />
        <button type="button" onClick={() => { const url = prompt('URL:'); if (url) exec('createLink', url) }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 text-xs" title="Link">Link</button>
        <button type="button" onClick={() => { const url = prompt('Image URL:'); if (url) exec('insertImage', url) }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600" title="Image"><ImageIcon className="h-3.5 w-3.5" /></button>
      </div>
      <div ref={editorRef} contentEditable onInput={handleInput}
        className="p-4 min-h-[400px] text-gray-900 leading-relaxed focus:outline-none prose prose-gray max-w-none prose-img:rounded-xl"
        style={{ lineHeight: '1.7' }} />
    </div>
  )
}

export default function AdminPagesPage() {
  const { data: session } = useSession()
  const [pages, setPages] = useState<CmsPage[]>([])
  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'list' | 'edit' | 'html' | 'media'>('list')
  const [editingPage, setEditingPage] = useState<CmsPage | null>(null)
  const [form, setForm] = useState({ title: '', slug: '', content: '', seoTitle: '', seoDescription: '', coverImage: '', isPublished: true, isTemplate: false })
  const [htmlMode, setHtmlMode] = useState(false)
  const [saving, setSaving] = useState(false)
  const [copyModal, setCopyModal] = useState<CmsPage | null>(null)
  const [copyName, setCopyName] = useState('')
  const [mediaSearch, setMediaSearch] = useState('')
  const [mediaSeeding, setMediaSeeding] = useState(false)

  const refresh = () => fetch('/api/admin/pages').then(r => r.json()).then(setPages)

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/pages').then(r => r.json()),
      fetch('/api/admin/media').then(r => r.json()),
    ]).then(([p, m]) => {
      setPages(Array.isArray(p) ? p : [])
      setMedia(Array.isArray(m) ? m : [])
    }).finally(() => setLoading(false))
  }, [])

  const resetForm = () => {
    setForm({ title: '', slug: '', content: '', seoTitle: '', seoDescription: '', coverImage: '', isPublished: true, isTemplate: false })
    setEditingPage(null)
    setHtmlMode(false)
  }

  const handleEdit = (page: CmsPage) => {
    setForm({ title: page.title, slug: page.slug, content: page.content, seoTitle: page.seoTitle || '', seoDescription: page.seoDescription || '', coverImage: page.coverImage || '', isPublished: page.isPublished, isTemplate: page.isTemplate })
    setEditingPage(page)
    setHtmlMode(false)
    setTab('edit')
  }

  const handleNew = () => {
    resetForm()
    setTab('edit')
  }

  const handleCopy = async () => {
    if (!copyModal || !copyName.trim()) return
    const slug = copyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    await fetch('/api/admin/pages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...copyModal, title: copyName.trim(), slug, id: undefined, createdAt: undefined, updatedAt: undefined }),
    })
    setCopyModal(null)
    setCopyName('')
    await refresh()
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      if (editingPage) {
        await fetch(`/api/admin/pages/${editingPage.id}`, {
          method: 'PATCH', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, slug }),
        })
      } else {
        await fetch('/api/admin/pages', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, slug }),
        })
      }
      resetForm()
      setTab('list')
      await refresh()
    } catch (err: any) { alert(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this page?')) return
    await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' })
    setPages(prev => prev.filter(p => p.id !== id))
  }

  const seedMedia = async () => {
    setMediaSeeding(true)
    await fetch('/api/admin/media', { method: 'POST' })
    const m = await fetch('/api/admin/media').then(r => r.json())
    setMedia(Array.isArray(m) ? m : [])
    setMediaSeeding(false)
  }

  const insertMedia = (url: string) => {
    setForm(f => ({ ...f, content: f.content + `<img src="${url}" alt="" style="max-width:100%;border-radius:12px;margin:16px 0" />` }))
    setTab('edit')
  }

  const filteredMedia = mediaSearch
    ? media.filter(m => m.name.toLowerCase().includes(mediaSearch.toLowerCase()) || m.folder.toLowerCase().includes(mediaSearch.toLowerCase()))
    : media

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pages</h1>
          <p className="text-gray-500 text-sm mt-1">{pages.length} pages &middot; CMS Editor</p>
        </div>
        <button onClick={handleNew} className="flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors">
          <Plus className="h-4 w-4" /> New Page
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {[
          { id: 'list' as const, label: 'All Pages', icon: FileText },
          { id: 'edit' as const, label: editingPage ? 'Edit Page' : 'New Page', icon: Edit },
          { id: 'media' as const, label: 'Media Library', icon: ImageIcon },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? 'bg-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* LIST TAB */}
      {tab === 'list' && (
        <div className="space-y-3">
          {loading ? <p className="text-gray-400 text-center py-8">Loading...</p> : pages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <FileText className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No CMS pages yet. Create your first page!</p>
            </div>
          ) : pages.map(page => (
            <div key={page.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{page.title}</h3>
                  {page.isPublished ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Live</span>
                  ) : (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Draft</span>
                  )}
                  {page.isTemplate && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Template</span>}
                </div>
                <p className="text-xs text-gray-400">/p/{page.slug} &middot; Updated {new Date(page.updatedAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-1">
                <a href={`/p/${page.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors" title="Preview"><Eye className="h-4 w-4" /></a>
                <button onClick={() => handleEdit(page)} className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors" title="Edit"><Edit className="h-4 w-4" /></button>
                <button onClick={() => { setCopyModal(page); setCopyName(page.title + ' (Copy)') }} className="p-2 text-gray-400 hover:text-blue-500 rounded-lg transition-colors" title="Copy"><Copy className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(page.id)} className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors" title="Delete"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDIT TAB */}
      {tab === 'edit' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-semibold text-gray-900">{editingPage ? 'Edit Page' : 'New Page'}</h2>
            <div className="flex gap-2">
              <button onClick={() => setHtmlMode(!htmlMode)} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${htmlMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                <Code className="h-3.5 w-3.5" /> {htmlMode ? 'Visual Editor' : 'HTML Editor'}
              </button>
              <button onClick={() => setTab('media')} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">
                <ImageIcon className="h-3.5 w-3.5" /> Add Image
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Page Title (H1) *</label>
            <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="Page title..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 text-lg font-semibold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-sm">/p/</span>
                <input type="text" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  placeholder="auto-generated" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:border-teal outline-none text-gray-900 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
              <input type="text" value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))}
                placeholder="/images/..." className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-teal outline-none text-gray-900 text-sm" />
            </div>
            <div className="flex items-end gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isPublished} onChange={e => setForm(f => ({ ...f, isPublished: e.target.checked }))} className="rounded border-gray-300 text-teal focus:ring-teal" />
                <span className="text-sm text-gray-700">Published</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isTemplate} onChange={e => setForm(f => ({ ...f, isTemplate: e.target.checked }))} className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-700">Template</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
            {htmlMode ? (
              <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                rows={20} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal outline-none text-gray-900 font-mono text-sm" />
            ) : (
              <WYSIWYG value={form.content} onChange={html => setForm(f => ({ ...f, content: html }))} />
            )}
          </div>

          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700">SEO Settings</summary>
            <div className="mt-3 space-y-3">
              <input type="text" value={form.seoTitle} onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                placeholder="SEO Title" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
              <textarea value={form.seoDescription} onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                placeholder="SEO Description" rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
            </div>
          </details>

          <div className="flex gap-3 pt-2 flex-wrap">
            <button onClick={handleSave} disabled={saving || !form.title || !form.content}
              className="bg-teal hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
              <Save className="h-4 w-4" /> {saving ? 'Saving...' : 'Save Page'}
            </button>
            <button onClick={() => { resetForm(); setTab('list') }}
              className="text-gray-500 hover:text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center gap-2">
              <X className="h-4 w-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* MEDIA LIBRARY TAB */}
      {tab === 'media' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-teal" /> Media Library
            </h2>
            <div className="flex gap-2">
              <button onClick={seedMedia} disabled={mediaSeeding}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
                {mediaSeeding ? 'Scanning...' : 'Rescan /images'}
              </button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search images..." value={mediaSearch} onChange={e => setMediaSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none" />
          </div>

          <p className="text-xs text-gray-400 mb-4">{filteredMedia.length} items &middot; Click to insert into page editor</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[500px] overflow-y-auto">
            {filteredMedia.map(item => (
              <button key={item.id} onClick={() => insertMedia(item.url)}
                className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-teal hover:shadow-md transition-all bg-gray-50">
                {item.type === 'video' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <Film className="h-6 w-6 text-white/50" />
                  </div>
                ) : (
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-[9px] truncate">{item.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* COPY MODAL */}
      {copyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Copy Page</h3>
            <p className="text-gray-500 text-sm mb-4">Enter a name for the new page. The URL slug will be generated from the name.</p>
            <input type="text" value={copyName} onChange={e => setCopyName(e.target.value)} autoFocus
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 mb-2" />
            <p className="text-xs text-gray-400 mb-6">URL: /p/{copyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => { setCopyModal(null); setCopyName('') }} className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Cancel</button>
              <button onClick={handleCopy} disabled={!copyName.trim()} className="px-6 py-2.5 rounded-xl text-sm font-medium bg-teal hover:bg-[#37a6a6] text-white transition-colors disabled:opacity-50">
                <Copy className="h-4 w-4 inline mr-1" /> Create Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
