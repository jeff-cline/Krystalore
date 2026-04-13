'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { BookOpen, Plus, Edit, Trash2, Eye, Calendar, Check, Bold, Italic, List, Link2, Heading2, Save, X } from 'lucide-react'

interface Post { id: string; title: string; slug: string; category: string; isPublished: boolean; publishedAt: string | null; readTime: number | null; createdAt: string; author?: { name: string | null } }
interface CalendarItem { id: string; title: string; topic: string | null; category: string; scheduledFor: string; status: string; blogPostId: string | null; notes: string | null }

const blogCategories = ['General', 'Fitness', 'Mindset', 'Leadership', 'Wellness', 'Connection', 'Nutrition', 'Healing', 'Motivation']

// Simple WYSIWYG editor using contentEditable
function WYSIWYG({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (editorRef.current && !loaded) {
      editorRef.current.innerHTML = value || ''
      setLoaded(true)
    }
  }, [value, loaded])

  const exec = (cmd: string, val?: string) => {
    document.execCommand(cmd, false, val)
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  const handleInput = () => {
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  const handleLink = () => {
    const url = prompt('Enter URL (or path like /health-mastery):')
    if (url) exec('createLink', url)
  }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-1 bg-gray-50 border-b border-gray-200 p-2">
        <button type="button" onClick={() => exec('bold')} className="p-2 hover:bg-gray-200 rounded" title="Bold"><Bold className="h-4 w-4" /></button>
        <button type="button" onClick={() => exec('italic')} className="p-2 hover:bg-gray-200 rounded" title="Italic"><Italic className="h-4 w-4" /></button>
        <button type="button" onClick={() => exec('formatBlock', '<h2>')} className="p-2 hover:bg-gray-200 rounded" title="Heading"><Heading2 className="h-4 w-4" /></button>
        <button type="button" onClick={() => exec('insertUnorderedList')} className="p-2 hover:bg-gray-200 rounded" title="List"><List className="h-4 w-4" /></button>
        <button type="button" onClick={handleLink} className="p-2 hover:bg-gray-200 rounded" title="Link"><Link2 className="h-4 w-4" /></button>
        <div className="h-5 w-px bg-gray-300 mx-1" />
        <button type="button" onClick={() => exec('formatBlock', '<p>')} className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded">Paragraph</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 min-h-[400px] text-gray-900 leading-relaxed focus:outline-none prose prose-gray max-w-none"
        style={{ lineHeight: '1.7' }}
      />
    </div>
  )
}

export default function AdminBlogPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [tab, setTab] = useState<'posts' | 'write' | 'calendar'>('posts')
  const [posts, setPosts] = useState<Post[]>([])
  const [calendar, setCalendar] = useState<CalendarItem[]>([])
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState({ title: '', content: '', excerpt: '', coverImage: '', category: 'General', tags: '', seoTitle: '', seoDescription: '' })
  const [saving, setSaving] = useState(false)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [editingCalendarId, setEditingCalendarId] = useState<string | null>(null)

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/login') }, [status, router])

  const refresh = () => {
    return Promise.all([
      fetch('/api/blog?all=true&limit=100').then(r => r.json()),
      fetch('/api/admin/content-calendar').then(r => r.json()),
    ]).then(([blogData, calData]) => {
      setPosts(blogData.posts || [])
      setCalendar(Array.isArray(calData) ? calData : [])
    })
  }

  useEffect(() => { refresh().finally(() => setLoading(false)) }, [])

  const resetForm = () => {
    setForm({ title: '', content: '', excerpt: '', coverImage: '', category: 'General', tags: '', seoTitle: '', seoDescription: '' })
    setEditingSlug(null)
    setEditingCalendarId(null)
  }

  const handleSavePost = async (publish: boolean) => {
    setSaving(true)
    try {
      if (editingCalendarId) {
        // Save via calendar publish endpoint (links post to calendar item)
        const res = await fetch(`/api/admin/content-calendar/${editingCalendarId}/publish`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, publish }),
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
      } else {
        const url = editingSlug ? `/api/blog/${editingSlug}` : '/api/blog'
        const method = editingSlug ? 'PATCH' : 'POST'
        const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, isPublished: publish }) })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
      }
      resetForm()
      setTab('posts')
      await refresh()
    } catch (err: any) { alert(err.message) } finally { setSaving(false) }
  }

  const handleEditPost = async (slug: string) => {
    const res = await fetch(`/api/blog/${slug}`)
    const post = await res.json()
    setForm({ title: post.title, content: post.content, excerpt: post.excerpt || '', coverImage: post.coverImage || '', category: post.category, tags: post.tags || '', seoTitle: post.seoTitle || '', seoDescription: post.seoDescription || '' })
    setEditingSlug(slug)
    setEditingCalendarId(null)
    setTab('write')
  }

  const handleEditCalendarItem = async (item: CalendarItem) => {
    // If already linked to a post, load that post
    if (item.blogPostId) {
      const post = posts.find(p => p.id === item.blogPostId)
      if (post) {
        const res = await fetch(`/api/blog/${post.slug}`)
        const full = await res.json()
        setForm({ title: full.title, content: full.content, excerpt: full.excerpt || '', coverImage: full.coverImage || '', category: full.category, tags: full.tags || '', seoTitle: full.seoTitle || '', seoDescription: full.seoDescription || '' })
      }
    } else {
      // Pre-fill from calendar item
      setForm({ title: item.title, content: `<p>Write about: ${item.topic || item.title}...</p>`, excerpt: '', coverImage: '', category: item.category, tags: '', seoTitle: item.title, seoDescription: '' })
    }
    setEditingSlug(null)
    setEditingCalendarId(item.id)
    setTab('write')
  }

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
    setPosts(prev => prev.filter(p => p.slug !== slug))
  }

  const handleDeleteCalendarItem = async (id: string) => {
    if (!confirm('Delete this calendar item?')) return
    await fetch(`/api/admin/content-calendar/${id}`, { method: 'DELETE' })
    setCalendar(prev => prev.filter(c => c.id !== id))
  }

  if (status === 'loading') return null

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} posts &middot; {posts.filter(p => p.isPublished).length} published &middot; {calendar.length} scheduled</p>
        </div>
        <button onClick={() => { resetForm(); setTab('write') }}
          className="flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors">
          <Plus className="h-4 w-4" /> New Post
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {[
          { id: 'posts' as const, label: 'All Posts', icon: BookOpen },
          { id: 'write' as const, label: editingCalendarId || editingSlug ? 'Edit Post' : 'Write', icon: Edit },
          { id: 'calendar' as const, label: 'Content Calendar', icon: Calendar },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? 'bg-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* Posts Tab */}
      {tab === 'posts' && (
        <div className="space-y-3">
          {loading ? <p className="text-gray-400 text-center py-8">Loading...</p> : posts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <BookOpen className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No blog posts yet.</p>
            </div>
          ) : posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{post.title}</h3>
                  {post.isPublished ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Published</span>
                  ) : (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Draft</span>
                  )}
                </div>
                <p className="text-xs text-gray-400">By Krystalore Crews &middot; {post.category} &middot; {post.readTime || 4} min &middot; {new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-1">
                <a href={`/blog/${post.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors" title="View"><Eye className="h-4 w-4" /></a>
                <button onClick={() => handleEditPost(post.slug)} className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors" title="Edit"><Edit className="h-4 w-4" /></button>
                <button onClick={() => handleDeletePost(post.slug)} className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors" title="Delete"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Write Tab */}
      {tab === 'write' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              {editingCalendarId ? <Calendar className="h-4 w-4 text-teal" /> : <Edit className="h-4 w-4 text-teal" />}
              {editingCalendarId ? 'Edit Scheduled Post' : editingSlug ? 'Edit Post' : 'New Post'}
            </h2>
            <span className="text-xs text-gray-500">Author: <strong className="text-gray-900">Krystalore Crews</strong></span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="Your blog post title..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 text-lg font-semibold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900">
                {blogCategories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
              <input type="text" value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))}
                placeholder="/images/blog/..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
            <WYSIWYG value={form.content} onChange={html => setForm(f => ({ ...f, content: html }))} />
            <p className="text-xs text-gray-400 mt-1">Use the toolbar to format. Links can be internal (e.g., /health-mastery) or external.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (short preview)</label>
            <textarea value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              placeholder="Brief description for blog cards..." rows={2}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" />
          </div>

          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700">SEO Settings</summary>
            <div className="mt-3 space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">SEO Title</label>
                <input type="text" value={form.seoTitle} onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">SEO Description</label>
                <textarea value={form.seoDescription} onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                  rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Tags (comma separated)</label>
                <input type="text" value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
              </div>
            </div>
          </details>

          <div className="flex gap-3 pt-2 flex-wrap">
            <button onClick={() => handleSavePost(true)} disabled={saving || !form.title || !form.content}
              className="bg-teal hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
              <Check className="h-4 w-4" /> {saving ? 'Saving...' : 'Publish'}
            </button>
            <button onClick={() => handleSavePost(false)} disabled={saving || !form.title || !form.content}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
              <Save className="h-4 w-4" /> Save Draft
            </button>
            <button onClick={() => { resetForm(); setTab('posts') }}
              className="text-gray-500 hover:text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center gap-2">
              <X className="h-4 w-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Calendar Tab */}
      {tab === 'calendar' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-teal" /> Content Calendar
            </h2>
            <p className="text-xs text-gray-500">{calendar.length} items &middot; Click any row to write or edit</p>
          </div>
          {calendar.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No calendar items yet.</p>
          ) : (
            <div className="space-y-2">
              {calendar.map(item => (
                <div key={item.id} className="flex items-center justify-between gap-3 py-3 px-4 bg-gray-50 hover:bg-teal/5 rounded-lg transition-colors cursor-pointer group"
                  onClick={() => handleEditCalendarItem(item)}>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm group-hover:text-teal transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.category} &middot; {new Date(item.scheduledFor).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}{item.topic ? ' · ' + item.topic : ''}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === 'published' ? 'bg-green-100 text-green-700' :
                      item.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{item.status}</span>
                    <button onClick={e => { e.stopPropagation(); handleEditCalendarItem(item) }} className="p-1.5 text-gray-400 hover:text-teal rounded opacity-0 group-hover:opacity-100 transition-opacity" title="Edit">
                      <Edit className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={e => { e.stopPropagation(); handleDeleteCalendarItem(item.id) }} className="p-1.5 text-gray-400 hover:text-red-500 rounded opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
