'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { ArrowLeft, Play, Clock, Filter, Search, Lock, Video, Zap } from 'lucide-react'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  membershipLevel: string
  videoCount: number
}

interface VideoItem {
  id: string
  source?: 'local' | 'feedflix'
  title: string
  description: string | null
  category: string
  muxPlaybackId: string | null
  thumbnailUrl: string | null
  duration: number | null
  membershipLevel: string
  isPublished: boolean
  createdAt: string
  hasAccess?: boolean
  viewCount?: number
  fileUrl?: string | null
  uploader?: { name: string | null }
}

const LEVEL_ORDER = ['FREE', 'BASIC', 'PREMIUM', 'VIP']

function hasAccess(userLevel: string, requiredLevel: string): boolean {
  return LEVEL_ORDER.indexOf(userLevel) >= LEVEL_ORDER.indexOf(requiredLevel)
}

function MuxPlayerEmbed({ playbackId, streamType = 'on-demand' }: { playbackId: string; streamType?: string }) {
  const [MuxPlayer, setMuxPlayer] = useState<any>(null)
  useEffect(() => {
    import('@mux/mux-player-react').then((mod) => setMuxPlayer(() => mod.default)).catch(() => {})
  }, [])
  if (!MuxPlayer) return (
    <div className="relative w-full bg-gray-900" style={{ paddingTop: '56.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  )
  return <MuxPlayer playbackId={playbackId} streamType={streamType} style={{ width: '100%', aspectRatio: '16/9' }} />
}

export default function FitnessVaultPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  const userLevel = (session?.user as any)?.membershipLevel || 'BASIC'

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    fetch('/api/categories').then(r => r.json()).then(data => {
      setCategories(Array.isArray(data) ? data : [])
    }).catch(() => {})
  }, [])

  const fetchVideos = useCallback(() => {
    const params = new URLSearchParams()
    if (selectedCategory !== 'All') params.set('category', selectedCategory)
    if (searchQuery) params.set('search', searchQuery)
    params.set('limit', '50')
    fetch(`/api/unified-videos?${params}`).then(r => r.json()).then(data => {
      setVideos(data.videos || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [selectedCategory, searchQuery])

  useEffect(() => { fetchVideos() }, [fetchVideos])

  if (status === 'loading') return <DashboardLayout><div className="p-8 text-center">Loading...</div></DashboardLayout>
  if (!session) return null

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Link href="/dashboard/fitness" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Fitness
        </Link>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Video Vault</h1>
            <p className="text-gray-600 mt-2">Browse our complete library of Beyond Limits Bootcamp workouts</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Your level: <span className="font-bold text-primary">{userLevel}</span></div>
          </div>
        </div>

        {/* Active video player */}
        {activeVideo && activeVideo.muxPlaybackId && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MuxPlayerEmbed playbackId={activeVideo.muxPlaybackId} />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{activeVideo.title}</h2>
              <p className="text-gray-600 mt-1">{activeVideo.description}</p>
              <button onClick={() => setActiveVideo(null)} className="mt-2 text-sm text-primary hover:underline">Close player</button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search workouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'All' ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >All</button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat.name ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >{cat.name}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Category cards (when no specific category selected) */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const locked = !hasAccess(userLevel, cat.membershipLevel)
              return (
                <div
                  key={cat.id}
                  onClick={() => !locked && setSelectedCategory(cat.name)}
                  className={`bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow relative ${locked ? 'opacity-75' : ''}`}
                >
                  {locked && (
                    <div className="absolute inset-0 bg-white/60 rounded-lg flex items-center justify-center z-10">
                      <div className="text-center">
                        <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-600">Requires {cat.membershipLevel}</p>
                        <button className="mt-2 text-xs text-primary hover:underline">Upgrade</button>
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center"><Video className="h-3 w-3 mr-1" />{cat.videoCount} videos</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{cat.membershipLevel}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Video Grid */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <>
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading videos...</div>
            ) : videos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Video className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No videos found in this category yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => {
                  const locked = video.hasAccess === false || !hasAccess(userLevel, video.membershipLevel)
                  return (
                    <div key={video.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group relative">
                      {locked && (
                        <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center">
                          <div className="text-center">
                            <Lock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-600">Requires {video.membershipLevel}</p>
                            <button className="mt-2 text-xs text-primary hover:underline">Upgrade to access</button>
                          </div>
                        </div>
                      )}
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center">
                        {video.thumbnailUrl ? (
                          <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
                        ) : (
                          <Play className="h-12 w-12 text-primary/50" />
                        )}
                        {video.duration && (
                          <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs">
                            {Math.floor(video.duration / 60)}:{String(Math.floor(video.duration % 60)).padStart(2, '0')}
                          </div>
                        )}
                        {video.source === 'feedflix' && (
                          <div className="absolute top-2 left-2 bg-red-500/90 text-white px-2 py-1 rounded text-xs font-medium">
                            Live Replay
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded mb-2 whitespace-nowrap">{video.category}</span>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                        <button
                          onClick={() => !locked && (video.muxPlaybackId || video.fileUrl) && setActiveVideo(video)}
                          disabled={locked || (!video.muxPlaybackId && !video.fileUrl)}
                          className="w-full bg-[#34c5c5] text-white py-2 rounded-lg font-medium hover:bg-[#37a6a6] transition-colors flex items-center justify-center disabled:opacity-50"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          {(video.muxPlaybackId || video.fileUrl) ? 'Start Workout' : 'Coming Soon'}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}

        {/* Tips */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-primary" /> Workout Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div><strong className="text-gray-900">Start Small:</strong> New to fitness? Begin with Modified or Accelerated workouts.</div>
            <div><strong className="text-gray-900">Stay Hydrated:</strong> Keep water nearby and take breaks when needed.</div>
            <div><strong className="text-gray-900">Listen to Your Body:</strong> Modify any exercise that doesn&apos;t feel right.</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
