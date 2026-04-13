'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Lock, Users, Clock, Video, Star, ArrowRight, Search, Radio, ArrowLeft, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  membershipLevel: string
  videoCount: number
  hasAccess?: boolean
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
  fileUrl?: string | null
  uploader?: { name: string | null }
}

interface StreamInfo {
  active: boolean
  stream?: {
    streamId: string
    playbackId: string
    status: string
    title: string
    startedAt: string | null
  }
}

const LEVEL_ORDER = ['FREE', 'BASIC', 'PREMIUM', 'VIP']

function checkAccess(userLevel: string, requiredLevel: string): boolean {
  return LEVEL_ORDER.indexOf(userLevel) >= LEVEL_ORDER.indexOf(requiredLevel)
}

const EMOJI_MAP: Record<string, string> = {
  'monday-motivator': '🔥', 'wacky-wednesday': '🎯', 'fighter-friday': '💪',
  'modified-series': '🌟', 'accelerated-series': '⚡', 'weighted-series': '🏋️',
  'dance-series': '💃', 'holiday-series': '🎄', 'course-content': '🎓',
  'podcast-episodes': '🎙️', 'live-replays': '📺',
}

const THUMBNAIL_MAP: Record<string, string> = {
  'monday-motivator': '/images/go9/keynote.jpg',
  'wacky-wednesday': '/images/go9/coaching.jpg',
  'fighter-friday': '/images/go9/fitness.jpg',
  'modified-series': '/images/go9/community-hands.jpg',
  'accelerated-series': '/images/go9/fitness-alt.jpg',
  'weighted-series': '/images/go9/fitness-balcony.jpg',
  'dance-series': '/images/go9/group.jpg',
  'holiday-series': '/images/go9/group-sunset.jpg',
  'course-content': '/images/go9/corporate.jpg',
  'podcast-episodes': '/images/go9/portrait.jpg',
  'live-replays': '/images/go9/hero.jpg',
}
const DEFAULT_THUMBNAIL = '/images/go9/retreat-costa-rica.jpg'

function VideoPlayer({ video, streamType = 'on-demand' }: { video: { muxPlaybackId?: string | null; fileUrl?: string | null }; streamType?: string }) {
  const [MuxPlayer, setMuxPlayer] = useState<any>(null)
  useEffect(() => {
    if (video.muxPlaybackId) {
      import('@mux/mux-player-react').then((mod) => setMuxPlayer(() => mod.default)).catch(() => {})
    }
  }, [video.muxPlaybackId])

  // File URL player (majority of videos)
  if (video.fileUrl && !video.muxPlaybackId) {
    return (
      <video
        src={video.fileUrl}
        controls
        autoPlay
        className="w-full rounded-xl bg-black"
        style={{ aspectRatio: '16/9' }}
      />
    )
  }

  // Mux player
  if (video.muxPlaybackId && MuxPlayer) {
    return <MuxPlayer playbackId={video.muxPlaybackId} streamType={streamType} style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px' }} />
  }

  // Loading
  return (
    <div className="relative w-full bg-gray-900 rounded-xl" style={{ paddingTop: '56.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
      </div>
    </div>
  )
}

function LivePlayer({ playbackId }: { playbackId: string }) {
  const [MuxPlayer, setMuxPlayer] = useState<any>(null)
  useEffect(() => {
    import('@mux/mux-player-react').then((mod) => setMuxPlayer(() => mod.default)).catch(() => {})
  }, [])
  if (!MuxPlayer) return (
    <div className="relative w-full bg-gray-900 rounded-xl" style={{ paddingTop: '56.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
      </div>
    </div>
  )
  return <MuxPlayer playbackId={playbackId} streamType="live" autoPlay="muted" style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px' }} />
}

export default function VaultPage() {
  const { data: session, status: authStatus } = useSession()
  const isLoggedIn = !!session
  const userLevel = (session?.user as any)?.membershipLevel || 'FREE'
  const isAdmin = ['GOD', 'ADMIN'].includes((session?.user as any)?.role || '')

  const [categories, setCategories] = useState<Category[]>([])
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [videosLoading, setVideosLoading] = useState(false)
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)
  const [liveStream, setLiveStream] = useState<StreamInfo | null>(null)

  // Fetch categories
  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(data => {
        setCategories(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Check for live stream
  useEffect(() => {
    const checkLive = () => {
      fetch('/api/mux/live').then(r => r.json()).then(setLiveStream).catch(() => {})
    }
    checkLive()
    const interval = setInterval(checkLive, 10000)
    return () => clearInterval(interval)
  }, [])

  // Fetch videos when category selected or search changes
  const fetchVideos = useCallback(() => {
    if (!selectedCategory && !search) {
      setVideos([])
      return
    }
    setVideosLoading(true)
    const params = new URLSearchParams()
    if (selectedCategory) params.set('category', selectedCategory)
    if (search) params.set('search', search)
    params.set('limit', '100')

    const endpoint = isLoggedIn ? '/api/unified-videos' : '/api/videos'
    fetch(`${endpoint}?${params}`)
      .then(r => r.json())
      .then(data => {
        setVideos(data.videos || [])
        setVideosLoading(false)
      })
      .catch(() => setVideosLoading(false))
  }, [selectedCategory, search, isLoggedIn])

  useEffect(() => { fetchVideos() }, [fetchVideos])

  // Only show categories with videos
  const visibleCategories = categories.filter(c => c.videoCount > 0)

  const featured = visibleCategories.filter(c =>
    ['monday-motivator', 'fighter-friday', 'course-content'].includes(c.slug)
  )

  const handleCategoryClick = (catName: string) => {
    if (!isLoggedIn) {
      window.location.href = '/auth/login'
      return
    }
    setSelectedCategory(catName)
    setActiveVideo(null)
  }

  const handlePlayVideo = (video: VideoItem) => {
    if (!isLoggedIn) {
      window.location.href = '/auth/login'
      return
    }
    if (video.hasAccess === false && !checkAccess(userLevel, video.membershipLevel)) return
    if (video.muxPlaybackId || video.fileUrl) setActiveVideo(video)
  }

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return ''
    return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
  }

  return (
    <MainLayout>
      <div className="space-y-8 sm:space-y-12">

        {/* Live Stream Banner */}
        {liveStream?.active && liveStream.stream && (
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" /> LIVE NOW
                </div>
                <span className="text-white font-semibold text-lg">{liveStream.stream.title}</span>
              </div>
              {isLoggedIn ? (
                <LivePlayer playbackId={liveStream.stream.playbackId} />
              ) : (
                <div className="bg-black/30 rounded-xl p-8 sm:p-12 text-center">
                  <Radio className="h-12 w-12 text-white/80 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold mb-2">Krystalore is streaming live!</p>
                  <Link href="/auth/login" className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                    Login to Watch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Active Video Player */}
        {activeVideo && (
          <div className="space-y-4">
            <button onClick={() => setActiveVideo(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to {selectedCategory || 'Vault'}
            </button>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <VideoPlayer video={activeVideo} />
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">{activeVideo.category}</span>
                {activeVideo.source === 'feedflix' && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-red-50 text-red-600 rounded">Live Replay</span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{activeVideo.title}</h2>
              {activeVideo.description && <p className="text-gray-600">{activeVideo.description}</p>}
            </div>
          </div>
        )}

        {/* Header (hide when playing video) */}
        {!activeVideo && (
          <>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-950">
                Video <span className="text-teal">Vault</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Access premium videos including fitness series, course content, live replays,
                and exclusive training sessions.
              </p>

              {!isLoggedIn && (
                <div className="bg-gradient-to-r from-teal/10 to-primary/10 border border-teal/20 rounded-lg p-6 max-w-2xl mx-auto">
                  <Lock className="h-10 w-10 text-teal mx-auto mb-3" />
                  <h2 className="text-xl font-bold text-gray-950 mb-2">Login to Watch Videos</h2>
                  <p className="text-gray-700 mb-4">Sign in to unlock your video vault and start your transformation.</p>
                  <Link href="/auth/login" className="btn-teal inline-flex items-center">
                    Login to Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Search + Category Filter (when logged in) */}
            {isLoggedIn && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search videos..."
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); if (e.target.value) setSelectedCategory(null) }}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal text-gray-900"
                    />
                  </div>
                  {isAdmin && (
                    <Link href="/admin/videos" className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
                      Manage Videos
                    </Link>
                  )}
                </div>

                {/* Category pills */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => { setSelectedCategory(null); setSearch('') }}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${!selectedCategory && !search ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >All Categories</button>
                  {visibleCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.name); setSearch('') }}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.name ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {EMOJI_MAP[cat.slug] ? `${EMOJI_MAP[cat.slug]} ` : ''}{cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="card text-center">
                <Play className="h-7 w-7 text-teal mx-auto mb-2" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950">{visibleCategories.reduce((s, c) => s + c.videoCount, 0) || '—'}</h3>
                <p className="text-gray-600 text-sm">Total Videos</p>
              </div>
              <div className="card text-center">
                <Video className="h-7 w-7 text-primary mx-auto mb-2" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950">{visibleCategories.length}</h3>
                <p className="text-gray-600 text-sm">Categories</p>
              </div>
            </div>

            {/* Video Grid (when filtering) */}
            {(selectedCategory || search) && (
              <>
                {selectedCategory && (
                  <div className="flex items-center gap-3">
                    <button onClick={() => setSelectedCategory(null)} className="text-gray-500 hover:text-gray-700">
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-gray-950">{selectedCategory}</h2>
                  </div>
                )}
                {videosLoading ? (
                  <div className="text-center py-12 text-gray-500">Loading videos...</div>
                ) : videos.length === 0 ? (
                  <div className="text-center py-12">
                    <Video className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-gray-500">No videos found.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {videos.map((video) => {
                      const locked = isLoggedIn && (video.hasAccess === false || !checkAccess(userLevel, video.membershipLevel))
                      return (
                        <div
                          key={video.id}
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group relative cursor-pointer"
                          onClick={() => locked ? undefined : handlePlayVideo(video)}
                        >
                          {locked && (
                            <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center rounded-xl">
                              <div className="text-center p-4">
                                <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm font-medium text-gray-600">Requires {video.membershipLevel}</p>
                                <button className="mt-2 text-xs text-teal font-medium hover:underline">Upgrade to Access</button>
                              </div>
                            </div>
                          )}
                          <div className="relative h-40 sm:h-44 bg-gradient-to-br from-teal/10 to-primary/10 flex items-center justify-center overflow-hidden">
                            {(() => {
                              const thumb = video.thumbnailUrl || THUMBNAIL_MAP[video.category?.toLowerCase().replace(/\s+/g, '-')] || DEFAULT_THUMBNAIL
                              return <img src={thumb} alt={video.title} className="w-full h-full object-cover object-top" />
                            })()}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                                <Play className="h-6 w-6 text-gray-900 ml-0.5" />
                              </div>
                            </div>
                            {video.duration && (
                              <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-0.5 rounded text-xs">
                                {formatDuration(video.duration)}
                              </div>
                            )}
                            {video.source === 'feedflix' && (
                              <div className="absolute top-2 left-2 bg-red-500/90 text-white px-2 py-0.5 rounded text-xs font-medium">
                                Live Replay
                              </div>
                            )}
                          </div>
                          <div className="p-3 sm:p-4">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-teal transition-colors">{video.title}</h3>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{video.category}</span>
                              <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{video.membershipLevel}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </>
            )}

            {/* Category Grid (no filter selected, show browse) */}
            {!selectedCategory && !search && (
              <>
                {/* Featured */}
                {featured.length > 0 && (
                  <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 sm:mb-8 text-center">
                      Featured <span className="text-teal">Categories</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                      {featured.map((cat) => {
                        const locked = isLoggedIn && !checkAccess(userLevel, cat.membershipLevel)
                        return (
                          <div
                            key={cat.id}
                            className="card bg-gradient-to-br from-teal/5 to-primary/5 border-teal/20 relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            onClick={() => handleCategoryClick(cat.name)}
                          >
                            {locked && (
                              <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center rounded-lg">
                                <div className="text-center">
                                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                  <p className="text-sm font-medium text-gray-600">Requires {cat.membershipLevel}</p>
                                  <button className="mt-2 text-xs text-teal font-medium hover:underline">Upgrade</button>
                                </div>
                              </div>
                            )}
                            <div className="absolute top-2 right-2">
                              <Star className="h-5 w-5 text-primary fill-current" />
                            </div>
                            <div className="relative mb-4">
                              <div className="bg-gray-100 rounded-lg h-40 sm:h-48 relative overflow-hidden">
                                <Image src={THUMBNAIL_MAP[cat.slug] || DEFAULT_THUMBNAIL} alt={cat.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                    <Play className="h-7 w-7 text-white ml-1" />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-2 left-2 bg-teal text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
                              <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">{cat.videoCount} videos</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-950 mb-2">{EMOJI_MAP[cat.slug] || ''} {cat.name}</h3>
                            <p className="text-gray-700 text-sm mb-3">{cat.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-600">
                              <span className="flex items-center"><Video className="h-3 w-3 mr-1" />{cat.videoCount} videos</span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{cat.membershipLevel}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </section>
                )}

                {/* All Categories */}
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 sm:mb-8 text-center">
                    All Video <span className="text-teal">Categories</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {visibleCategories.map((cat) => {
                      const locked = isLoggedIn && !checkAccess(userLevel, cat.membershipLevel)
                      return (
                        <div
                          key={cat.id}
                          className="card relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                          onClick={() => handleCategoryClick(cat.name)}
                        >
                          {locked && (
                            <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center rounded-lg">
                              <div className="text-center">
                                <Lock className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                                <p className="text-xs font-medium text-gray-600">{cat.membershipLevel}</p>
                                <button className="mt-1 text-xs text-teal font-medium hover:underline">Upgrade</button>
                              </div>
                            </div>
                          )}
                          <div className="relative mb-3">
                            <div className="bg-gray-100 rounded-lg h-28 sm:h-32 relative overflow-hidden">
                              <Image src={THUMBNAIL_MAP[cat.slug] || DEFAULT_THUMBNAIL} alt={cat.name} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                              <div className="absolute inset-0 bg-black/25 rounded-lg flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                  <Play className="h-5 w-5 text-white ml-0.5" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">{cat.videoCount}</div>
                          </div>
                          <h3 className="text-gray-950 font-semibold mb-1 text-sm sm:text-base">{EMOJI_MAP[cat.slug] || ''} {cat.name}</h3>
                          <p className="text-gray-700 text-xs sm:text-sm mb-2 line-clamp-2">{cat.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span className="flex items-center"><Video className="h-3 w-3 mr-1" />{cat.videoCount} videos</span>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{cat.membershipLevel}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </>
            )}

            {/* CTA for non-logged-in */}
            {!isLoggedIn && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-teal/10 to-primary/10 border border-teal/20 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">Ready to Transform Your Life?</h3>
                  <p className="text-gray-700 mb-6">Join thousands of members who have access to our complete video vault.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/auth/login" className="btn-teal">Login to Access</Link>
                    <Link href="/auth/signup" className="btn-primary">Join Now</Link>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </MainLayout>
  )
}
