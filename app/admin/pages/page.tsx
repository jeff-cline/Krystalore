'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { FileText, Plus, Edit, Trash2, Eye, Copy, Image as ImageIcon, Code, Save, X, Search, Globe, Film } from 'lucide-react'

interface CmsPage {
  id: string; title: string; slug: string; content: string; seoTitle: string | null
  seoDescription: string | null; coverImage: string | null; isPublished: boolean; isTemplate: boolean
  createdAt: string; updatedAt: string
}

interface MediaItem {
  id: string; url: string; name: string; type: string; folder: string
}

function getLivePath(page: CmsPage): string {
  try { const d = JSON.parse(page.content); if (d.livePath) return d.livePath } catch {} return '/p/' + page.slug
}

function isNextJsPage(page: CmsPage): boolean {
  try { const d = JSON.parse(page.content); return d.type === 'nextjs-page' } catch {} return false
}

function getEditableContent(page: CmsPage): string {
  if (isNextJsPage(page)) return ''
  return page.content
}

// GrapeJS visual editor component
function GrapeEditor({ content, onSave }: { content: string; onSave: (html: string) => void }) {
  const editorRef = useRef<HTMLDivElement>(null)
  const gjsRef = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!editorRef.current || loaded) return

    // Dynamically import GrapeJS
    Promise.all([
      import('grapesjs'),
      import('grapesjs-preset-webpage'),
    ]).then(([grapesjs, preset]) => {
      const editor = grapesjs.default.init({
        container: editorRef.current!,
        height: '700px',
        width: '100%',
        fromElement: false,
        components: content || '<div class="p-8"><h1>New Page</h1><p>Start editing...</p></div>',
        storageManager: false,
        plugins: [preset.default],
        pluginsOpts: {
          [preset.default as any]: {
            blocksBasicOpts: { flexGrid: true },
            navbarOpts: false,
            countdownOpts: false,
            formsOpts: false,
          },
        },
        canvas: {
          styles: [
            'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
          ],
        },
        panels: { defaults: [] },
        deviceManager: {
          devices: [
            { name: 'Desktop', width: '' },
            { name: 'Tablet', width: '768px', widthMedia: '992px' },
            { name: 'Mobile', width: '375px', widthMedia: '480px' },
          ],
        },
        styleManager: {
          sectors: [
            { name: 'Layout', open: true, properties: ['display', 'flex-direction', 'justify-content', 'align-items', 'gap', 'flex-wrap'] },
            { name: 'Spacing', open: false, properties: ['padding', 'margin'] },
            { name: 'Size', open: false, properties: ['width', 'max-width', 'height', 'min-height'] },
            { name: 'Typography', open: false, properties: ['font-family', 'font-size', 'font-weight', 'line-height', 'color', 'text-align'] },
            { name: 'Background', open: false, properties: ['background-color', 'background-image', 'background-size', 'background-position', 'border-radius'] },
            { name: 'Border', open: false, properties: ['border', 'border-radius', 'box-shadow'] },
          ],
        },
        blockManager: {
          blocks: [
            { id: 'section', label: 'Section', content: '<section class="py-16 px-4"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-gray-900 mb-4">Section Title</h2><p class="text-gray-600">Section content goes here.</p></div></section>', category: 'Layout' },
            { id: 'two-columns', label: '2 Columns', content: '<div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"><div class="p-4 bg-white rounded-xl border border-gray-200"><h3 class="font-bold text-gray-900 mb-2">Column 1</h3><p class="text-gray-600 text-sm">Content here</p></div><div class="p-4 bg-white rounded-xl border border-gray-200"><h3 class="font-bold text-gray-900 mb-2">Column 2</h3><p class="text-gray-600 text-sm">Content here</p></div></div>', category: 'Layout' },
            { id: 'three-columns', label: '3 Columns', content: '<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"><div class="p-4 bg-white rounded-xl border border-gray-200"><h3 class="font-bold mb-2">Column 1</h3><p class="text-gray-600 text-sm">Content</p></div><div class="p-4 bg-white rounded-xl border border-gray-200"><h3 class="font-bold mb-2">Column 2</h3><p class="text-gray-600 text-sm">Content</p></div><div class="p-4 bg-white rounded-xl border border-gray-200"><h3 class="font-bold mb-2">Column 3</h3><p class="text-gray-600 text-sm">Content</p></div></div>', category: 'Layout' },
            { id: 'hero', label: 'Hero Section', content: '<section class="relative rounded-2xl overflow-hidden"><div class="bg-gradient-to-r from-gray-900 to-teal p-12 text-white text-center"><h1 class="text-4xl md:text-5xl font-bold mb-4">Hero Title</h1><p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">Hero subtitle text goes here.</p><a href="#" class="inline-block bg-white text-teal font-bold py-3 px-8 rounded-xl hover:bg-gray-100">Call to Action</a></div></section>', category: 'Sections' },
            { id: 'cta-banner', label: 'CTA Banner', content: '<div class="bg-gradient-to-r from-[#E8A849] to-orange-600 rounded-2xl p-8 text-white text-center"><h2 class="text-2xl font-bold mb-3">Ready to Get Started?</h2><p class="text-white/80 mb-6">Take the next step in your transformation journey.</p><a href="/contact" class="inline-block bg-white text-[#E8A849] font-bold py-3 px-8 rounded-xl hover:bg-gray-100">Book a Call</a></div>', category: 'Sections' },
            { id: 'button-teal', label: 'Teal Button', content: '<a href="#" class="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold py-3 px-8 rounded-xl transition-colors">Button Text</a>', category: 'Elements' },
            { id: 'button-orange', label: 'Orange Button', content: '<a href="#" class="inline-block bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-3 px-8 rounded-xl transition-colors">Button Text</a>', category: 'Elements' },
            { id: 'button-outline', label: 'Outline Button', content: '<a href="#" class="inline-block border-2 border-[#34c5c5] text-[#34c5c5] font-bold py-3 px-8 rounded-xl hover:bg-[#34c5c5]/10 transition-colors">Button Text</a>', category: 'Elements' },
            { id: 'image-full', label: 'Full Image', content: '<img src="/images/go9/portrait.jpg" alt="Image" class="w-full rounded-2xl object-cover" style="max-height:400px" />', category: 'Elements' },
            { id: 'card', label: 'Card', content: '<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h3 class="font-bold text-gray-900 mb-2">Card Title</h3><p class="text-gray-600 text-sm mb-4">Card description text goes here.</p><a href="#" class="text-[#34c5c5] font-medium text-sm">Learn More →</a></div>', category: 'Elements' },
            { id: 'testimonial', label: 'Testimonial', content: '<div class="bg-white rounded-xl border border-gray-200 p-6"><div class="flex gap-1 mb-3"><span class="text-[#E8A849]">★★★★★</span></div><blockquote class="text-gray-700 italic mb-3">"This program changed my life."</blockquote><p class="text-sm font-medium text-gray-500">— Member Name</p></div>', category: 'Elements' },
            { id: 'faq', label: 'FAQ Item', content: '<div class="border-b border-gray-200 py-4"><h3 class="font-bold text-gray-900 mb-2">Frequently Asked Question?</h3><p class="text-gray-600 text-sm">Answer goes here with detail and helpful information.</p></div>', category: 'Elements' },
            { id: 'heading-h1', label: 'Heading H1', content: '<h1 class="text-4xl font-bold text-gray-900 mb-4">Main Heading</h1>', category: 'Text' },
            { id: 'heading-h2', label: 'Heading H2', content: '<h2 class="text-3xl font-bold text-gray-900 mb-3">Section Heading</h2>', category: 'Text' },
            { id: 'paragraph', label: 'Paragraph', content: '<p class="text-gray-600 leading-relaxed mb-4">Your paragraph text goes here. Write compelling content that speaks to your audience.</p>', category: 'Text' },
            { id: 'list', label: 'Check List', content: '<ul class="space-y-3"><li class="flex items-start gap-3"><span class="text-[#34c5c5] font-bold">✓</span><span class="text-gray-700">List item one</span></li><li class="flex items-start gap-3"><span class="text-[#34c5c5] font-bold">✓</span><span class="text-gray-700">List item two</span></li><li class="flex items-start gap-3"><span class="text-[#34c5c5] font-bold">✓</span><span class="text-gray-700">List item three</span></li></ul>', category: 'Text' },
            { id: 'divider', label: 'Divider', content: '<hr class="border-gray-200 my-8" />', category: 'Elements' },
            { id: 'spacer', label: 'Spacer', content: '<div style="height:40px"></div>', category: 'Elements' },
          ],
        },
      })

      gjsRef.current = editor
      setLoaded(true)

      // Add save button to the editor
      editor.Panels.addButton('options', {
        id: 'save-page',
        className: 'fa fa-floppy-o',
        command: 'save-page',
        attributes: { title: 'Save Page' },
        label: '💾 Save',
      })

      editor.Commands.add('save-page', {
        run: () => {
          const html = editor.getHtml()
          const css = editor.getCss()
          const fullContent = css ? `<style>${css}</style>${html}` : html
          onSave(fullContent)
        },
      })
    }).catch(err => console.error('GrapeJS load error:', err))

    return () => {
      if (gjsRef.current) {
        gjsRef.current.destroy()
        gjsRef.current = null
      }
    }
  }, [])

  const handleSave = useCallback(() => {
    if (gjsRef.current) {
      const html = gjsRef.current.getHtml()
      const css = gjsRef.current.getCss()
      onSave(css ? `<style>${css}</style>${html}` : html)
    }
  }, [onSave])

  return (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" />
      <div className="mb-3 flex justify-between items-center">
        <p className="text-xs text-gray-500">Drag blocks from the right panel. Click elements to edit text. Use the style panel to change colors and layout.</p>
        <button onClick={handleSave} className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-2 px-6 rounded-xl transition-colors flex items-center gap-2 text-sm">
          <Save className="h-4 w-4" /> Save Content
        </button>
      </div>
      <div ref={editorRef} />
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
  const [saving, setSaving] = useState(false)
  const [copyModal, setCopyModal] = useState<CmsPage | null>(null)
  const [copyName, setCopyName] = useState('')
  const [mediaSearch, setMediaSearch] = useState('')
  const [pageSearch, setPageSearch] = useState('')
  const [useVisualEditor, setUseVisualEditor] = useState(true)

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

  const resetForm = () => { setForm({ title: '', slug: '', content: '', seoTitle: '', seoDescription: '', coverImage: '', isPublished: true, isTemplate: false }); setEditingPage(null); setUseVisualEditor(true) }

  const handleEdit = (page: CmsPage) => {
    setForm({ title: page.title, slug: page.slug, content: getEditableContent(page), seoTitle: page.seoTitle || '', seoDescription: page.seoDescription || '', coverImage: page.coverImage || '', isPublished: page.isPublished, isTemplate: page.isTemplate })
    setEditingPage(page); setUseVisualEditor(true); setTab('edit')
  }

  const handleCopy = async () => {
    if (!copyModal || !copyName.trim()) return
    const slug = copyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const src = isNextJsPage(copyModal) ? '<h1>' + copyName.trim() + '</h1><p>Start editing this page.</p>' : copyModal.content
    await fetch('/api/admin/pages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: copyName.trim(), slug, content: src, seoTitle: copyName.trim(), isPublished: false, isTemplate: false }) })
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

  const handleContentSave = (html: string) => { setForm(f => ({ ...f, content: html })) }

  const handleDelete = async (id: string) => { if (!confirm('Delete this page?')) return; await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' }); setPages(prev => prev.filter(p => p.id !== id)) }

  const filteredPages = pageSearch ? pages.filter(p => p.title.toLowerCase().includes(pageSearch.toLowerCase()) || p.slug.includes(pageSearch.toLowerCase())) : pages
  const filteredMedia = mediaSearch ? media.filter(m => m.name.toLowerCase().includes(mediaSearch.toLowerCase()) || m.folder.toLowerCase().includes(mediaSearch.toLowerCase())) : media

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pages</h1>
          <p className="text-gray-500 text-sm mt-1">{pages.length} pages &middot; Visual Page Builder</p>
        </div>
        <button onClick={() => { resetForm(); setTab('edit') }} className="flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors"><Plus className="h-4 w-4" /> New Page</button>
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

      {tab === 'list' && (
        <div className="space-y-3">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search pages..." value={pageSearch} onChange={e => setPageSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none" />
          </div>
          {loading ? <p className="text-gray-400 text-center py-8">Loading...</p> : filteredPages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200"><FileText className="h-10 w-10 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No pages found.</p></div>
          ) : filteredPages.map(page => {
            const livePath = getLivePath(page); const isNJ = isNextJsPage(page)
            return (
              <div key={page.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm">{page.title}</h3>
                    {page.isPublished && <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">Live</span>}
                    {!page.isPublished && <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-medium">Draft</span>}
                    {page.isTemplate && <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full font-medium">Template</span>}
                  </div>
                  <p className="text-xs text-gray-400">{isNJ ? livePath : '/p/' + page.slug}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <a href={isNJ ? livePath : '/p/' + page.slug} target="_blank" className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors" title="View"><Globe className="h-4 w-4" /></a>
                  <button onClick={() => handleEdit(page)} className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors" title="Edit"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => { setCopyModal(page); setCopyName(page.title + ' (Copy)') }} className="p-1.5 text-gray-400 hover:text-blue-500 rounded transition-colors" title="Copy"><Copy className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(page.id)} className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors" title="Delete"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {tab === 'edit' && (
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-semibold text-gray-900">{editingPage ? 'Edit: ' + editingPage.title : 'New Page'}</h2>
              <div className="flex gap-2">
                {editingPage && !isNextJsPage(editingPage) && (
                  <button onClick={() => setUseVisualEditor(!useVisualEditor)} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${!useVisualEditor ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <Code className="h-3.5 w-3.5" /> {useVisualEditor ? 'Switch to HTML' : 'Switch to Visual'}
                  </button>
                )}
                {editingPage && (
                  <a href={isNextJsPage(editingPage) ? getLivePath(editingPage) : '/p/' + editingPage.slug} target="_blank" className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <Globe className="h-3.5 w-3.5" /> Preview
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 font-semibold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                <input type="text" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-teal outline-none text-gray-900 text-sm" />
              </div>
              <div className="flex items-end gap-3">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.isPublished} onChange={e => setForm(f => ({ ...f, isPublished: e.target.checked }))} className="rounded border-gray-300 text-teal" /><span className="text-sm">Published</span></label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.isTemplate} onChange={e => setForm(f => ({ ...f, isTemplate: e.target.checked }))} className="rounded border-gray-300 text-purple-600" /><span className="text-sm">Template</span></label>
              </div>
            </div>

            <details className="group">
              <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700">SEO & AEO Settings</summary>
              <div className="mt-3 space-y-3">
                <input type="text" value={form.seoTitle} onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))} placeholder="SEO Title (60 chars max)" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
                <textarea value={form.seoDescription} onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))} placeholder="Meta description (160 chars max)" rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
                <input type="text" value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))} placeholder="Cover image URL for social sharing" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
              </div>
            </details>

            <div className="flex gap-3">
              <button onClick={handleSave} disabled={saving || !form.title} className="bg-teal hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-2.5 px-6 rounded-xl transition-colors flex items-center gap-2 text-sm">
                <Save className="h-4 w-4" /> {saving ? 'Saving...' : 'Save Page'}
              </button>
              <button onClick={() => { resetForm(); setTab('list') }} className="text-gray-500 hover:text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center gap-2 text-sm">
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>

          {/* Visual Editor or HTML Editor */}
          {editingPage && isNextJsPage(editingPage) ? (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
              <iframe src={getLivePath(editingPage)} className="w-full h-full border-0" title="Page preview" />
            </div>
          ) : useVisualEditor ? (
            <GrapeEditor content={form.content} onSave={handleContentSave} />
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={25} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal outline-none text-gray-900 font-mono text-sm" />
            </div>
          )}
        </div>
      )}

      {tab === 'media' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><ImageIcon className="h-5 w-5 text-teal" /> Media Library</h2><p className="text-xs text-gray-500">{media.length} items</p></div>
          <div className="relative mb-4"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><input type="text" placeholder="Search..." value={mediaSearch} onChange={e => setMediaSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none" /></div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[500px] overflow-y-auto">
            {filteredMedia.map(item => (
              <button key={item.id} onClick={() => { navigator.clipboard.writeText(item.url); alert('Copied: ' + item.url) }} className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-teal hover:shadow-md transition-all bg-gray-50">
                {item.type === 'video' ? (<div className="w-full h-full flex items-center justify-center bg-gray-900"><Film className="h-6 w-6 text-white/50" /></div>) : (<img src={item.url} alt={item.name} className="w-full h-full object-cover" loading="lazy" />)}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity"><p className="text-white text-[8px] truncate">{item.name}</p></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {copyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Copy Page</h3>
            <p className="text-gray-500 text-sm mb-4">New editable page from: <strong>{copyModal.title}</strong></p>
            <input type="text" value={copyName} onChange={e => setCopyName(e.target.value)} autoFocus className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 mb-2" />
            <p className="text-xs text-gray-400 mb-6">URL: /p/{copyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => { setCopyModal(null); setCopyName('') }} className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">Cancel</button>
              <button onClick={handleCopy} disabled={!copyName.trim()} className="px-6 py-2.5 rounded-xl text-sm font-medium bg-teal hover:bg-[#37a6a6] text-white disabled:opacity-50"><Copy className="h-4 w-4 inline mr-1" /> Create Copy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
