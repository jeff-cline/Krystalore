'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  Video, Search, Filter, MoreVertical, Play, Edit, Trash2, Upload, Eye,
  Calendar, Tag, Users, Clock, TrendingUp, Plus, Save, X, Settings, 
  Mail, Bell, FolderOpen
} from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  description: string | null
  category: string
  categoryId: string | null
  muxPlaybackId: string | null
  fileUrl: string | null
  fileKey: string | null
  thumbnailUrl: string | null
  duration: number | null
  isPublished: boolean
  membershipLevel: string
  seoTitle: string | null
  seoDescription: string | null
  keywords: string | null
  createdAt: string
  uploader: { name: string | null; image: string | null }
}

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  membershipLevel: string
  videoCount: number
  sortOrder: number
}

export default function VideoManagementPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'videos' | 'categories' | 'upload'>('categories')

  // Video state
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [totalVideos, setTotalVideos] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVideos, setSelectedVideos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Category state
  const [categories, setCategories] = useState<Category[]>([])
  const [editingCat, setEditingCat] = useState<Category | null>(null)
  const [newCat, setNewCat] = useState({ name: '', slug: '', description: '', membershipLevel: 'FREE', sortOrder: 0 })
  const [showNewCat, setShowNewCat] = useState(false)

  // Bulk actions state
  const [showBulkCategoryModal, setShowBulkCategoryModal] = useState(false)
  const [bulkCategoryId, setBulkCategoryId] = useState('')

  // Notification state
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [notificationCategory, setNotificationCategory] = useState('')
  const [notificationSubject, setNotificationSubject] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [sendingNotification, setSendingNotification] = useState(false)

  // Video player state
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null)

  // Video edit state
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null)
  const [editForm, setEditForm] = useState({ title: '', description: '', category: '', categoryId: '', seoTitle: '', seoDescription: '', keywords: '', membershipLevel: '', thumbnailUrl: '' })
  const [savingVideo, setSavingVideo] = useState(false)

  // Upload state
  const [importing, setImporting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  const fetchCategories = useCallback(() => {
    fetch('/api/categories').then(r => r.json()).then(data => {
      if (Array.isArray(data)) setCategories(data)
    }).catch(() => {})
  }, [])

  const fetchVideos = useCallback(() => {
    const params = new URLSearchParams()
    if (selectedCategory !== 'All') params.set('category', selectedCategory)
    if (searchQuery) params.set('search', searchQuery)
    params.set('limit', '50')
    fetch(`/api/videos?${params}`).then(r => r.json()).then(data => {
      setVideos(data.videos || [])
      setTotalVideos(data.total || 0)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [selectedCategory, searchQuery])

  useEffect(() => { fetchCategories() }, [fetchCategories])
  useEffect(() => { fetchVideos() }, [fetchVideos])

  // Sort videos: titled + thumbnail/video at top, .zip/untitled at bottom
  const isQualityVideo = (v: VideoItem) => {
    const hasRealTitle = v.title && !v.title.match(/^[a-f0-9-]+\.\w+$/i) && !v.title.endsWith('.zip')
    const hasMedia = !!(v.thumbnailUrl || v.muxPlaybackId || v.fileUrl || v.fileKey)
    const isZip = v.title?.toLowerCase().endsWith('.zip') || v.muxPlaybackId === null && v.fileUrl === null && v.fileKey === null
    return hasRealTitle && hasMedia && !isZip
  }

  const sortedVideos = [...videos].sort((a, b) => {
    const aQuality = isQualityVideo(a) ? 1 : 0
    const bQuality = isQualityVideo(b) ? 1 : 0
    if (aQuality !== bQuality) return bQuality - aQuality
    // Secondary: .zip files go to very bottom
    const aZip = a.title?.toLowerCase().endsWith('.zip') ? 1 : 0
    const bZip = b.title?.toLowerCase().endsWith('.zip') ? 1 : 0
    if (aZip !== bZip) return aZip - bZip
    return 0
  })

  const togglePublish = async (videoId: string, isPublished: boolean) => {
    await fetch('/api/videos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: videoId, isPublished: !isPublished }),
    })
    fetchVideos()
  }

  const bulkAction = async (action: string) => {
    if (selectedVideos.length === 0) return
    for (const id of selectedVideos) {
      if (action === 'publish') {
        await fetch('/api/videos', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, isPublished: true }) })
      } else if (action === 'unpublish') {
        await fetch('/api/videos', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, isPublished: false }) })
      }
    }
    setSelectedVideos([])
    fetchVideos()
  }

  const bulkCategoryAssign = async () => {
    if (selectedVideos.length === 0 || !bulkCategoryId) return
    
    const selectedCategory = categories.find(cat => cat.id === bulkCategoryId)
    if (!selectedCategory) return

    for (const id of selectedVideos) {
      await fetch('/api/videos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id, 
          category: selectedCategory.name,
          categoryId: selectedCategory.id 
        }),
      })
    }
    
    setSelectedVideos([])
    setBulkCategoryId('')
    setShowBulkCategoryModal(false)
    fetchVideos()
  }

  const sendCategoryNotification = async () => {
    if (!notificationCategory || !notificationSubject || !notificationMessage) {
      alert('Please fill in all fields')
      return
    }

    setSendingNotification(true)
    try {
      const response = await fetch('/api/admin/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: `category:${notificationCategory}`,
          subject: notificationSubject,
          message: notificationMessage
        })
      })

      if (response.ok) {
        const result = await response.json()
        alert(result.message)
        setShowNotificationModal(false)
        setNotificationCategory('')
        setNotificationSubject('')
        setNotificationMessage('')
      } else {
        const error = await response.json()
        alert(`Notification failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Notification error:', error)
      alert('Notification failed due to network error')
    } finally {
      setSendingNotification(false)
    }
  }

  const handleImportFromUploadThing = async () => {
    setImporting(true)
    try {
      const response = await fetch('/api/import/uploadthing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      
      if (response.ok) {
        const result = await response.json()
        alert(`Import completed! Processed ${result.processed} files, imported ${result.imported} new videos.`)
        fetchVideos() // Refresh video list
      } else {
        const error = await response.json()
        alert(`Import failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Import error:', error)
      alert('Import failed due to network error')
    } finally {
      setImporting(false)
    }
  }

  const saveCategory = async (cat: Category) => {
    await fetch('/api/categories', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cat),
    })
    setEditingCat(null)
    fetchCategories()
  }

  const createCategory = async () => {
    await fetch('/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCat),
    })
    setShowNewCat(false)
    setNewCat({ name: '', slug: '', description: '', membershipLevel: 'FREE', sortOrder: 0 })
    fetchCategories()
  }

  const openEditVideo = (video: VideoItem) => {
    setEditingVideo(video)
    setEditForm({
      title: video.title || '',
      description: video.description || '',
      category: video.category || '',
      categoryId: video.categoryId || '',
      seoTitle: video.seoTitle || '',
      seoDescription: video.seoDescription || '',
      keywords: video.keywords || '',
      membershipLevel: video.membershipLevel || 'FREE',
      thumbnailUrl: video.thumbnailUrl || '',
    })
  }

  const saveVideoEdit = async () => {
    if (!editingVideo) return
    setSavingVideo(true)
    try {
      const selectedCat = categories.find(c => c.id === editForm.categoryId)
      await fetch('/api/videos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingVideo.id,
          title: editForm.title,
          description: editForm.description || null,
          category: selectedCat ? selectedCat.name : editForm.category,
          categoryId: editForm.categoryId || null,
          seoTitle: editForm.seoTitle || null,
          seoDescription: editForm.seoDescription || null,
          keywords: editForm.keywords || null,
          membershipLevel: editForm.membershipLevel,
          thumbnailUrl: editForm.thumbnailUrl || null,
        }),
      })
      setEditingVideo(null)
      fetchVideos()
      fetchCategories()
    } catch (e) {
      console.error('Save failed:', e)
      alert('Failed to save changes')
    } finally {
      setSavingVideo(false)
    }
  }

  const getStatusBadge = (published: boolean) =>
    published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'

  if (status === 'loading') return <div className="p-8 text-center text-white">Loading...</div>
  if (!session) return null

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Video Vault Management</h1>
          <p className="text-gray-400">Manage videos, categories, and content uploads.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowNotificationModal(true)}
            className="btn-secondary flex items-center"
          >
            <Bell className="h-4 w-4 mr-2" />
            Send Notification
          </button>
          <button
            onClick={handleImportFromUploadThing}
            disabled={importing}
            className="btn-primary flex items-center disabled:opacity-50"
          >
            <Upload className="h-4 w-4 mr-2" />
            {importing ? 'Importing...' : 'Import from UploadThing'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button onClick={() => setActiveTab('videos')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'videos' ? 'bg-[#34c5c5] text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}>
          <Video className="h-4 w-4 inline mr-2" />Videos
        </button>
        <button onClick={() => setActiveTab('categories')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'categories' ? 'bg-[#34c5c5] text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}>
          <Settings className="h-4 w-4 inline mr-2" />Categories
        </button>
        <button onClick={() => setActiveTab('upload')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'upload' ? 'bg-[#34c5c5] text-white' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}>
          <Upload className="h-4 w-4 inline mr-2" />Upload & Import
        </button>
      </div>

      {activeTab === 'videos' ? (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card"><div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Total Videos</p><p className="text-2xl font-bold text-white">{totalVideos}</p></div><Video className="h-8 w-8 text-primary" /></div></div>
            <div className="card"><div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Published</p><p className="text-2xl font-bold text-white">{videos.filter(v => v.isPublished).length}</p></div><Eye className="h-8 w-8 text-secondary" /></div></div>
            <div className="card"><div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Categories</p><p className="text-2xl font-bold text-white">{categories.length}</p></div><Tag className="h-8 w-8 text-primary" /></div></div>
            <div className="card"><div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Drafts</p><p className="text-2xl font-bold text-white">{videos.filter(v => !v.isPublished).length}</p></div><Clock className="h-8 w-8 text-secondary" /></div></div>
          </div>

          {/* Filters */}
          <div className="card">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input type="text" placeholder="Search videos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-input pl-10 w-full" />
                </div>
              </div>
              <div className="lg:w-64">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="form-input w-full">
                  <option value="All">All Categories</option>
                  {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>
            </div>

            {selectedVideos.length > 0 && (
              <div className="mt-4 p-4 bg-dark-700 rounded-lg flex items-center justify-between">
                <span className="text-white">{selectedVideos.length} selected</span>
                <div className="flex space-x-2">
                  <button onClick={() => bulkAction('publish')} className="btn-secondary text-sm">Publish</button>
                  <button onClick={() => bulkAction('unpublish')} className="btn-secondary text-sm">Unpublish</button>
                  <button 
                    onClick={() => setShowBulkCategoryModal(true)} 
                    className="btn-primary text-sm flex items-center"
                  >
                    <FolderOpen className="h-3 w-3 mr-1" />
                    Assign Category
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Video List */}
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-600">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      <input type="checkbox" onChange={(e) => setSelectedVideos(e.target.checked ? sortedVideos.map(v => v.id) : [])} className="rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Video</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Level</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={6} className="py-8 text-center text-gray-400">Loading...</td></tr>
                  ) : videos.length === 0 ? (
                    <tr><td colSpan={6} className="py-8 text-center text-gray-400">No videos found</td></tr>
                  ) : sortedVideos.map((video) => (
                    <tr key={video.id} className="border-b border-dark-700 hover:bg-dark-700/50">
                      <td className="py-4 px-4">
                        <input type="checkbox" checked={selectedVideos.includes(video.id)}
                          onChange={() => setSelectedVideos(prev => prev.includes(video.id) ? prev.filter(id => id !== video.id) : [...prev, video.id])} className="rounded" />
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-start space-x-4">
                          <div 
                            className="relative w-24 h-16 bg-dark-600 rounded overflow-hidden cursor-pointer group flex-shrink-0"
                            onClick={() => setPlayingVideo(video)}
                          >
                            {(video.thumbnailUrl || video.fileUrl || video.fileKey) ? (
                              <>
                                <video
                                  src={video.thumbnailUrl || video.fileUrl || `https://utfs.io/f/${video.fileKey}`}
                                  preload="metadata"
                                  muted
                                  playsInline
                                  className="w-full h-full object-cover"
                                  onLoadedMetadata={(e) => {
                                    const v = e.target as HTMLVideoElement
                                    v.currentTime = Math.min(2, v.duration * 0.1)
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Play className="h-5 w-5 text-white" />
                                </div>
                              </>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Play className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-white font-medium truncate">{video.title}</h4>
                            <p className="text-gray-400 text-sm mt-1 truncate">{video.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                              {video.duration && <span>{Math.floor(video.duration / 60)}m</span>}
                              <span>{new Date(video.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">{video.category}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-300 text-sm">{video.membershipLevel}</span>
                      </td>
                      <td className="py-4 px-4">
                        <button onClick={() => togglePublish(video.id, video.isPublished)}
                          className={`px-2 py-1 rounded text-xs font-medium cursor-pointer ${getStatusBadge(video.isPublished)}`}>
                          {video.isPublished ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <button onClick={() => setPlayingVideo(video)} className="p-1 text-gray-400 hover:text-primary" title="Play video"><Play className="h-4 w-4" /></button>
                          <button onClick={() => openEditVideo(video)} className="p-1 text-gray-400 hover:text-white" title="Edit video"><Edit className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : activeTab === 'categories' ? (
        /* Categories Tab */
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Categories</h2>
            <button onClick={() => setShowNewCat(true)} className="btn-primary flex items-center text-sm">
              <Plus className="h-4 w-4 mr-2" />Add Category
            </button>
          </div>

          {showNewCat && (
            <div className="card space-y-4">
              <h3 className="text-white font-medium">New Category</h3>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Name" value={newCat.name} onChange={e => setNewCat(p => ({ ...p, name: e.target.value }))} className="form-input" />
                <input placeholder="Slug" value={newCat.slug} onChange={e => setNewCat(p => ({ ...p, slug: e.target.value }))} className="form-input" />
                <input placeholder="Description" value={newCat.description} onChange={e => setNewCat(p => ({ ...p, description: e.target.value }))} className="form-input" />
                <select value={newCat.membershipLevel} onChange={e => setNewCat(p => ({ ...p, membershipLevel: e.target.value }))} className="form-input">
                  <option value="FREE">FREE</option><option value="BASIC">BASIC</option><option value="PREMIUM">PREMIUM</option><option value="VIP">VIP</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button onClick={createCategory} className="btn-primary text-sm"><Save className="h-4 w-4 mr-1 inline" />Save</button>
                <button onClick={() => setShowNewCat(false)} className="btn-secondary text-sm"><X className="h-4 w-4 mr-1 inline" />Cancel</button>
              </div>
            </div>
          )}

          <div className="card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Slug</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Videos</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Level</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => {
                  const goToCategory = () => { setSelectedCategory(cat.name); setTimeout(() => setActiveTab('videos'), 50) }
                  return (
                  <tr key={cat.id} className="border-b border-dark-700 hover:bg-dark-700/50">
                    <td className="py-4 px-4">
                      {editingCat?.id === cat.id ? (
                        <input value={editingCat.name} onChange={e => setEditingCat({ ...editingCat, name: e.target.value })} className="form-input text-sm" />
                      ) : (
                        <div className="cursor-pointer" onClick={goToCategory}>
                          <span className="text-white font-medium hover:text-primary transition-colors">{cat.name}</span>
                          {cat.description && <p className="text-gray-400 text-sm mt-1">{cat.description}</p>}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{cat.slug}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={goToCategory}
                        className="text-primary hover:underline font-medium"
                      >
                        {cat.videoCount}
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      {editingCat?.id === cat.id ? (
                        <select value={editingCat.membershipLevel} onChange={e => setEditingCat({ ...editingCat, membershipLevel: e.target.value })} className="form-input text-sm">
                          <option value="FREE">FREE</option><option value="BASIC">BASIC</option><option value="PREMIUM">PREMIUM</option><option value="VIP">VIP</option>
                        </select>
                      ) : (
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">{cat.membershipLevel}</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {editingCat?.id === cat.id ? (
                        <div className="flex gap-2">
                          <button onClick={() => saveCategory(editingCat)} className="p-1 text-green-400 hover:text-green-300"><Save className="h-4 w-4" /></button>
                          <button onClick={() => setEditingCat(null)} className="p-1 text-gray-400 hover:text-white"><X className="h-4 w-4" /></button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button onClick={() => setEditingCat({ ...cat })} className="p-1 text-gray-400 hover:text-white"><Edit className="h-4 w-4" /></button>
                          <button 
                            onClick={() => {
                              setNotificationCategory(cat.slug)
                              setShowNotificationModal(true)
                            }}
                            className="p-1 text-primary hover:text-primary/80"
                            title="Send notification to users with access to this category"
                          >
                            <Bell className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Upload Tab */
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Import Content from UploadThing</h2>
            <div className="space-y-4">
              <p className="text-gray-400">
                Import videos that have been uploaded to UploadThing but haven't been added to the platform yet. 
                This will scan your UploadThing account and add any new videos to the video vault.
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleImportFromUploadThing}
                  disabled={importing}
                  className="btn-primary flex items-center disabled:opacity-50"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  {importing ? 'Importing...' : 'Import from UploadThing'}
                </button>
                {importing && (
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                    Scanning for new content...
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-6">Upload Guidelines</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">Supported Formats</h3>
                <p className="text-sm">Video: MP4, MOV, AVI, WMV | Images: JPG, PNG, GIF | Other: PDF, ZIP</p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">File Size Limits</h3>
                <p className="text-sm">Videos: Up to 2GB | Images: Up to 50MB | Documents: Up to 100MB</p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Best Practices</h3>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Use descriptive filenames that will become video titles</li>
                  <li>Upload videos in HD quality (1080p recommended)</li>
                  <li>Include category information in folder structure if possible</li>
                  <li>Ensure content follows platform guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Category Assignment Modal */}
      {showBulkCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Assign Category</h3>
            <p className="text-gray-400 text-sm mb-4">
              Assign {selectedVideos.length} selected videos to a category:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select
                  value={bulkCategoryId}
                  onChange={(e) => setBulkCategoryId(e.target.value)}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  <option value="">Select category...</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowBulkCategoryModal(false)
                  setBulkCategoryId('')
                }}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-dark-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={bulkCategoryAssign}
                disabled={!bulkCategoryId}
                className="btn-primary disabled:opacity-50"
              >
                Assign Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50" onClick={() => setPlayingVideo(null)}>
          <div className="bg-dark-800 rounded-lg w-full max-w-4xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-dark-600">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-white truncate">{playingVideo.title}</h3>
                <p className="text-sm text-gray-400">{playingVideo.category} | {playingVideo.membershipLevel}</p>
              </div>
              <button onClick={() => setPlayingVideo(null)} className="p-2 text-gray-400 hover:text-white ml-4">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative bg-black aspect-video">
              {playingVideo.muxPlaybackId ? (
                <iframe
                  src={`https://stream.mux.com/${playingVideo.muxPlaybackId}.m3u8`}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : playingVideo.fileUrl ? (
                <video
                  src={playingVideo.fileUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              ) : playingVideo.fileKey ? (
                <video
                  src={`https://utfs.io/f/${playingVideo.fileKey}`}
                  controls
                  autoPlay
                  className="w-full h-full"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p>No video source available</p>
                </div>
              )}
            </div>
            {playingVideo.description && (
              <div className="p-4 border-t border-dark-600">
                <p className="text-gray-300 text-sm">{playingVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video Edit Modal */}
      {editingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-dark-800 rounded-lg p-6 w-full max-w-2xl my-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Edit Video</h3>
              <button onClick={() => setEditingVideo(null)} className="p-1 text-gray-400 hover:text-white"><X className="h-5 w-5" /></button>
            </div>

            {/* Preview */}
            {(editingVideo.thumbnailUrl || editingVideo.fileUrl || editingVideo.fileKey) && (
              <div className="mb-6 w-full h-40 bg-dark-700 rounded overflow-hidden">
                <video
                  src={editingVideo.thumbnailUrl || editingVideo.fileUrl || `https://utfs.io/f/${editingVideo.fileKey}`}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onLoadedMetadata={(e) => { const v = e.target as HTMLVideoElement; v.currentTime = Math.min(2, v.duration * 0.1) }}
                />
              </div>
            )}

            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm(f => ({ ...f, title: e.target.value }))}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Video title..."
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm(f => ({ ...f, description: e.target.value }))}
                  rows={3}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Video description..."
                />
              </div>

              {/* Category + Level row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                  <select
                    value={editForm.categoryId}
                    onChange={(e) => setEditForm(f => ({ ...f, categoryId: e.target.value }))}
                    className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  >
                    <option value="">Uncategorized</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Membership Level</label>
                  <select
                    value={editForm.membershipLevel}
                    onChange={(e) => setEditForm(f => ({ ...f, membershipLevel: e.target.value }))}
                    className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  >
                    <option value="FREE">FREE</option>
                    <option value="BASIC">BASIC</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail URL */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail URL</label>
                <input
                  type="text"
                  value={editForm.thumbnailUrl}
                  onChange={(e) => setEditForm(f => ({ ...f, thumbnailUrl: e.target.value }))}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="https://..."
                />
              </div>

              {/* SEO Section */}
              <div className="border-t border-dark-600 pt-4 mt-4">
                <h4 className="text-white font-medium mb-3 flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-primary" />SEO Settings</h4>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">SEO Title</label>
                    <input
                      type="text"
                      value={editForm.seoTitle}
                      onChange={(e) => setEditForm(f => ({ ...f, seoTitle: e.target.value }))}
                      className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                      placeholder="SEO-optimized title for search engines..."
                    />
                    <p className="text-xs text-gray-500 mt-1">{editForm.seoTitle.length}/60 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">SEO Description</label>
                    <textarea
                      value={editForm.seoDescription}
                      onChange={(e) => setEditForm(f => ({ ...f, seoDescription: e.target.value }))}
                      rows={2}
                      className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                      placeholder="Meta description for search results..."
                    />
                    <p className="text-xs text-gray-500 mt-1">{editForm.seoDescription.length}/160 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Keywords</label>
                    <input
                      type="text"
                      value={editForm.keywords}
                      onChange={(e) => setEditForm(f => ({ ...f, keywords: e.target.value }))}
                      className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                      placeholder="fitness, workout, health, training (comma separated)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingVideo(null)}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-dark-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={saveVideoEdit}
                disabled={savingVideo || !editForm.title.trim()}
                className="btn-primary disabled:opacity-50 flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                {savingVideo ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Send Notification</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Target</label>
                <select
                  value={notificationCategory}
                  onChange={(e) => setNotificationCategory(e.target.value)}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  <option value="">Select category...</option>
                  {categories.map(cat => (
                    <option key={cat.slug} value={cat.slug}>
                      Users with access to "{cat.name}"
                    </option>
                  ))}
                  <option value="">---</option>
                  <option value="all">All Users</option>
                  <option value="level:PREMIUM">Premium Members</option>
                  <option value="level:VIP">VIP Members</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  value={notificationSubject}
                  onChange={(e) => setNotificationSubject(e.target.value)}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Notification subject..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Your message..."
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowNotificationModal(false)
                  setNotificationCategory('')
                  setNotificationSubject('')
                  setNotificationMessage('')
                }}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-dark-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={sendCategoryNotification}
                disabled={sendingNotification}
                className="btn-primary disabled:opacity-50"
              >
                {sendingNotification ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}