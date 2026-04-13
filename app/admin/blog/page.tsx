'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { BookOpen, Plus, Edit, Trash2, Eye, Calendar, Check, Clock } from 'lucide-react'

interface Post {
  id: string; title: string; slug: string; category: string; isPublished: boolean; publishedAt: string | null; readTime: number | null; createdAt: string
}

interface CalendarItem {
  id: string; title: string; category: string; scheduledFor: string; status: string; topic: string | null
}

const blogCategories = ['General', 'Fitness', 'Mindset', 'Leadership', 'Wellness', 'Connection', 'Nutrition', 'Healing', 'Motivation']

export default function AdminBlogPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [tab, setTab] = useState<'posts' | 'write' | 'calendar'>('posts')
  const [posts, setPosts] = useState<Post[]>([])
  const [calendar, setCalendar] = useState<CalendarItem[]>([])
  const [loading, setLoading] = useState(true)

  // Write form
  const [form, setForm] = useState({ title: '', content: '', excerpt: '', coverImage: '', category: 'General', tags: '', seoTitle: '', seoDescription: '' })
  const [saving, setSaving] = useState(false)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/login') }, [status, router])

  useEffect(() => {
    Promise.all([
      fetch('/api/blog?all=true&limit=100').then(r => r.json()),
      fetch('/api/admin/content-calendar').then(r => r.json()),
    ]).then(([blogData, calData]) => {
      setPosts(blogData.posts || [])
      setCalendar(Array.isArray(calData) ? calData : [])
    }).finally(() => setLoading(false))
  }, [])

  const handleSave = async (publish: boolean) => {
    setSaving(true)
    try {
      const url = editingSlug ? `/api/blog/${editingSlug}` : '/api/blog'
      const method = editingSlug ? 'PATCH' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, isPublished: publish }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setForm({ title: '', content: '', excerpt: '', coverImage: '', category: 'General', tags: '', seoTitle: '', seoDescription: '' })
      setEditingSlug(null)
      setTab('posts')
      const blogData = await fetch('/api/blog?all=true&limit=100').then(r => r.json())
      setPosts(blogData.posts || [])
    } catch (err: any) { alert(err.message) } finally { setSaving(false) }
  }

  const handleEdit = async (slug: string) => {
    const res = await fetch(`/api/blog/${slug}`)
    const post = await res.json()
    setForm({ title: post.title, content: post.content, excerpt: post.excerpt || '', coverImage: post.coverImage || '', category: post.category, tags: post.tags || '', seoTitle: post.seoTitle || '', seoDescription: post.seoDescription || '' })
    setEditingSlug(slug)
    setTab('write')
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
    setPosts(prev => prev.filter(p => p.slug !== slug))
  }

  if (status === 'loading') return null

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} posts &middot; {posts.filter(p => p.isPublished).length} published</p>
        </div>
        <button onClick={() => { setForm({ title: '', content: '', excerpt: '', coverImage: '', category: 'General', tags: '', seoTitle: '', seoDescription: '' }); setEditingSlug(null); setTab('write') }}
          className="flex items-center gap-2 bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors">
          <Plus className="h-4 w-4" /> New Post
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'posts' as const, label: 'All Posts', icon: BookOpen },
          { id: 'write' as const, label: editingSlug ? 'Edit Post' : 'Write', icon: Edit },
          { id: 'calendar' as const, label: 'Content Calendar', icon: Calendar },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t.id ? 'bg-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
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
              <p className="text-gray-500">No blog posts yet. Write your first one!</p>
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
                <p className="text-xs text-gray-400">{post.category} &middot; {post.readTime || 4} min &middot; {new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <a href={`/blog/${post.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors"><Eye className="h-4 w-4" /></a>
                <button onClick={() => handleEdit(post.slug)} className="p-2 text-gray-400 hover:text-teal rounded-lg transition-colors"><Edit className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(post.slug)} className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Write Tab */}
      {tab === 'write' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
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
            <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              placeholder="Write your blog post here..." rows={16}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900 leading-relaxed" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
            <textarea value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              placeholder="Brief description for previews..." rows={2}
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

          <div className="flex gap-3 pt-2">
            <button onClick={() => handleSave(true)} disabled={saving || !form.title || !form.content}
              className="bg-teal hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
              <Check className="h-4 w-4" /> {saving ? 'Saving...' : 'Publish'}
            </button>
            <button onClick={() => handleSave(false)} disabled={saving || !form.title || !form.content}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors">
              Save Draft
            </button>
          </div>
        </div>
      )}

      {/* Calendar Tab */}
      {tab === 'calendar' && (
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-teal" /> Content Calendar
            </h2>
            {calendar.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No calendar items yet. Content calendar will be generated.</p>
            ) : (
              <div className="space-y-2">
                {calendar.map(item => (
                  <div key={item.id} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-400">{item.category} &middot; {new Date(item.scheduledFor).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === 'published' ? 'bg-green-100 text-green-700' :
                      item.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
