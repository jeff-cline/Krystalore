'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { FileText, Plus, Edit, Trash2, Eye, Copy, Image as ImageIcon, Code, Save, X, Search, ExternalLink, Film, Check, Globe } from 'lucide-react'

interface CmsPage {
  id: string; title: string; slug: string; content: string; seoTitle: string | null
  seoDescription: string | null; coverImage: string | null; isPublished: boolean; isTemplate: boolean
  createdAt: string; updatedAt: string
}

interface MediaItem {
  id: string; url: string; name: string; type: string; folder: string
}

function getLivePath(page: CmsPage): string {
  try {
    const data = JSON.parse(page.content)
    if (data.livePath) return data.livePath
  } catch {}
  return '/p/' + page.slug
}

function isNextJsPage(page: CmsPage): boolean {
  try {
    const data = JSON.parse(page.content)
    return data.type === 'nextjs-page'
  } catch {}
  return false
}

function WYSIWYG({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { if (editorRef.current && !loaded) { editorRef.current.innerHTML = value || ''; setLoaded(true) } }, [value, loaded])
  const exec = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); if (editorRef.current) onChange(editorRef.current.innerHTML) }
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 bg-gray-50 border-b border-gray-200 p-2">
        <button type="button" onClick={() => exec('bold')} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 font-bold text-sm">B</button>
        <button type="button" onClick={() => exec('italic')} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 italic text-sm">I</button>
        <button type="button" onClick={() => exec('formatBlock', '<h1>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold">H1</button>
        <button type="button" onClick={() => exec('formatBlock', '<h2>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold">H2</button>
        <button type="button" onClick={() => exec('formatBlock', '<h3>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600 font-bold">H3</button>
        <button type="button" onClick={() => exec('formatBlock', '<p>')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600">P</button>
        <button type="button" onClick={() => exec('insertUnorderedList')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600">UL</button>
        <button type="button" onClick={() => exec('insertOrderedList')} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600">OL</button>
        <div className="h-5 w-px bg-gray-300 mx-1" />
        <button type="button" onClick={() => { const url = prompt('URL:'); if (url) exec('createLink', url) }} className="px-2 py-1 hover:bg-gray-200 rounded text-xs text-gray-600">Link</button>
        <button type="button" onClick={() => { const url = prompt('Image URL:'); if (url) exec('insertImage', url) }} className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><ImageIcon className="h-3.5 w-3.5" /></button>
      </div>
      <div ref={editorRef} contentEditable onInput={() => { if (editorRef.current) onChange(editorRef.current.innerHTML) }}
        className="p-4 min-h-[400px] text-gray-900 leading-relaxed focus:outline-none prose prose-gray max-w-none prose-img:rounded-xl" />
    </div>
  )
}

export default function AdminPagesPage() {
  const { data: session } = useSession()
  const [pages, setPages] = useState<CmsPage[]>([])
  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'list' | 'edit' | 'media'>('list')
  const [editingPage, setEditingPage] = useState<CmsPage | null>(null)
  const [form, setForm] = useState({ title: '', slug: '', content: '', seoTitle: '', seoDescription: '', coverImage: '', isPublished: true, isTemplate: false })
  const [htmlMode, setHtmlMode] = useState(false)
  const [saving, setSaving] = useState(false)
  const [copyModal, setCopyModal] = useState<CmsPage | null>(null)
  const [copyName, setCopyName] = useState('')
  const [mediaSearch, setMediaSearch] = useState('')
  const [pageSearch, setPageSearch] = useState('')

  const refresh = () => fetch('/api/admin/pages').then(r => r.json()).then(p => setPages(Array.isArray(p) ? p : []))

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
    setEditingPage(null); setHtmlMode(false)
  }

  const handleEdit = (page: CmsPage) => {
    const isNJ = isNextJsPage(page)
    setForm({
      title: page.title, slug: page.slug,
      content: isNJ ? '' : page.content,
      seoTitle: page.seoTitle || '', seoDescription: page.seoDescription || '',
      coverImage: page.coverImage || '', isPublished: page.isPublished, isTemplate: page.isTemplate,
    })
    setEditingPage(page); setHtmlMode(false); setTab('edit')
  }

  const handleNew = () => { resetForm(); setTab('edit') }

  const handleCopy = async () => {
    if (!copyModal || !copyName.trim()) return
    const slug = copyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const sourceContent = isNextJsPage(copyModal) ? '<h1>' + copyName.trim() + '</h1><p>New page content goes here.</p>' : copyModal.content
    await fetch('/api/admin/pages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: copyName.trim(), slug, content: sourceContent, seoTitle: copyName.trim(), isPublished: false, isTemplate: false }),
    })
    setCopyModal(null); setCopyName(''); await refresh()
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      if (editingPage) {
        const data: any = { title: form.title, seoTitle: form.seoTitle, seoDescription: form.seoDescription, coverImage: form.coverImage, isPublished: form.isPublished, isTemplate: form.isTemplate }
        if (form.content) data.content = form.content
        if (form.slug !== editingPage.slug) data.slug = slug
        await fetch(`/api/admin/pages/${editingPage.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      } else {
        await fetch('/api/admin/pages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, slug }) })
      }
      resetForm(); setTab('list'); await refresh()
    } catch (err: any) { alert(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => { if (!confirm('Delete this page?')) return; await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' }); setPages(prev => prev.filter(p => p.id !== id)) }

  const insertMedia = (url: string) => { setForm(f => ({ ...f, content: f.content + `\n<img src="${url}" alt="" style="max-width:100%;border-radius:12px;margin:16px 0" />` })); setTab('edit') }

  const filteredPages = pageSearch ? pages.filter(p => p.title.toLowerCase().includes(pageSearch.toLowerCase()) || p.slug.includes(pageSearch.toLowerCase())) : pages
  const filteredMedia = mediaSearch ? media.filter(m => m.name.toLowerCase().includes(mediaSearch.toLowerCase()) || m.folder.toLowerCase().includes(mediaSearch.toLowerCase())) : media

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pages</h1>
          <p className="text-gray-500 text-sm mt-1">{pages.length} pages &middot; CMS Editor</p>
        </div>
        <button onClick={handleNew} className="flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors"><Plus className="h-4 w-4" /> New Page</button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {[
          { id: 'list' as const, label: 'All Pages', icon: FileText },
          { id: 'edit' as const, label: editingPage ? 'Edit Page' : 'New Page', icon: Edit },
          { id: 'media' as const, label: 'Media Library', icon: ImageIcon },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? 'bg-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* LIST TAB */}
      {tab === 'list' && (
        <div className="space-y-3">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search pages..." value={pageSearch} onChange={e => setPageSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none" />
          </div>

          {loading ? <p className="text-gray-400 text-center py-8">Loading...</p> : filteredPages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <FileText className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No pages found.</p>
            </div>
          ) : filteredPages.map(page => {
            const livePath = getLivePath(page)
            const isNJ = isNextJsPage(page)
            return (
              <div key={page.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm">{page.title}</h3>
                    {page.isPublished && <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">Live</span>}
                    {!page.isPublished && <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-medium">Draft</span>}
                    {page.isTemplate && <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full font-medium">Template</span>}
                    {isNJ && <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-medium">Next.js</span>}
                  </div>
                  <p className="text-xs text-gray-400">{livePath}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <a href={livePath} target="_blank" className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors" title="View live"><Globe className="h-4 w-4" /></a>
                  <button onClick={() => handleEdit(page)} className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors" title="Edit"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => { setCopyModal(page); setCopyName(page.title + ' (Copy)') }} className="p-1.5 text-gray-400 hover:text-blue-500 rounded transition-colors" title="Copy"><Copy className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(page.id)} className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors" title="Delete"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* EDIT TAB */}
      {tab === 'edit' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-semibold text-gray-900">{editingPage ? 'Edit: ' + editingPage.title : 'New Page'}</h2>
            <div className="flex gap-2">
              {editingPage && isNextJsPage(editingPage) && (
                <a href={getLivePath(editingPage)} target="_blank" className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                  <Globe className="h-3.5 w-3.5" /> View Live Page
                </a>
              )}
              <button onClick={() => setHtmlMode(!htmlMode)} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${htmlMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                <Code className="h-3.5 w-3.5" /> {htmlMode ? 'Visual' : 'HTML'}
              </button>
              <button onClick={() => setTab('media')} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">
                <ImageIcon className="h-3.5 w-3.5" /> Add Image
              </button>
            </div>
          </div>

          {editingPage && isNextJsPage(editingPage) && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-medium mb-1">This is a built-in Next.js page</p>
              <p className="text-blue-600">You can edit the title, SEO, and settings below. The page content is managed by the source code. Use <strong>Copy</strong> to create a new editable page based on this template.</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Page Title *</label>
            <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 text-lg font-semibold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
              <input type="text" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-teal outline-none text-gray-900 text-sm" />
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

          {/* Content editor — only for CMS pages, not Next.js pages */}
          {!(editingPage && isNextJsPage(editingPage)) && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              {htmlMode ? (
                <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                  rows={20} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal outline-none text-gray-900 font-mono text-sm" />
              ) : (
                <WYSIWYG value={form.content} onChange={html => setForm(f => ({ ...f, content: html }))} />
              )}
            </div>
          )}

          {/* Live preview for Next.js pages */}
          {editingPage && isNextJsPage(editingPage) && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Page Preview</label>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white" style={{ height: '500px' }}>
                <iframe src={getLivePath(editingPage)} className="w-full h-full border-0" title="Page preview" />
              </div>
            </div>
          )}

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
            <button onClick={handleSave} disabled={saving || !form.title}
              className="bg-teal hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
              <Save className="h-4 w-4" /> {saving ? 'Saving...' : 'Save'}
            </button>
            <button onClick={() => { resetForm(); setTab('list') }}
              className="text-gray-500 hover:text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center gap-2">
              <X className="h-4 w-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* MEDIA LIBRARY */}
      {tab === 'media' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><ImageIcon className="h-5 w-5 text-teal" /> Media Library</h2>
            <p className="text-xs text-gray-500">{media.length} items &middot; Click to insert</p>
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search images..." value={mediaSearch} onChange={e => setMediaSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[500px] overflow-y-auto">
            {filteredMedia.map(item => (
              <button key={item.id} onClick={() => insertMedia(item.url)}
                className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-teal hover:shadow-md transition-all bg-gray-50">
                {item.type === 'video' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900"><Film className="h-6 w-6 text-white/50" /></div>
                ) : (
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-[8px] truncate">{item.name}</p>
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
            <p className="text-gray-500 text-sm mb-1">Creating a new editable page from: <strong>{copyModal.title}</strong></p>
            <p className="text-gray-400 text-xs mb-4">The new page will be fully editable in the WYSIWYG editor.</p>
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
