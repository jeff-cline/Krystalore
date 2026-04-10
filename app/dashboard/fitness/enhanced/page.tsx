'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { ArrowLeft, Play, Clock, Search, Lock, Video, Zap, Grid, List, Filter, Eye, EyeOff, Star } from 'lucide-react'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  membershipLevel: string
  videoCount: number
  hasAccess?: boolean
  thumbnailUrl?: string
}

interface VideoItem {
  id: string
  title: string
  description: string | null
  category: string
  categoryId: string | null
  muxPlaybackId: string | null
  thumbnailUrl: string | null
  duration: number | null
  membershipLevel: string
  isPublished: boolean
  fileType: string
  createdAt: string
  hasAccess?: boolean
  uploader: { name: string | null }
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

export default function EnhancedFitnessVaultPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [categories, setCategories] = useState<Category[]>([])
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showLockedContent, setShowLockedContent] = useState(true)
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
    params.set('fileType', 'VIDEO') // Only show videos, not images
    params.set('limit', '100')
    
    fetch(`/api/videos?${params}`).then(r => r.json()).then(data => {
      const allVideos = data.videos || []
      
      // Filter based on showLockedContent preference
      const filteredVideos = showLockedContent 
        ? allVideos 
        : allVideos.filter((v: VideoItem) => v.hasAccess !== false)
        
      setVideos(filteredVideos)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [selectedCategory, searchQuery, showLockedContent])

  useEffect(() => { fetchVideos() }, [fetchVideos])

  // Separate categories into accessible and locked
  const accessibleCategories = categories.filter(cat => cat.hasAccess !== false)
  const lockedCategories = categories.filter(cat => cat.hasAccess === false)
  
  // Group videos by category for display
  const videosByCategory = videos.reduce((acc, video) => {
    const categoryName = video.category || 'Uncategorized'
    if (!acc[categoryName]) acc[categoryName] = []
    acc[categoryName].push(video)
    return acc
  }, {} as Record<string, VideoItem[]>)

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
            <h1 className="text-3xl font-bold text-gray-900">Enhanced Video Vault</h1>
            <p className="text-gray-600 mt-2">
              Access your personalized workout library with advanced permission management
            </p>
          </div>
          <div className="text-right">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-sm text-gray-600">Your access level</div>
              <div className="text-xl font-bold text-primary">{userLevel}</div>
              <div className="text-xs text-gray-500 mt-1">
                {accessibleCategories.length} of {categories.length} categories
              </div>
            </div>
          </div>
        </div>

        {/* Active video player */}
        {activeVideo && activeVideo.muxPlaybackId && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MuxPlayerEmbed playbackId={activeVideo.muxPlaybackId} />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeVideo.title}</h2>
                  <p className="text-gray-600 mb-4">{activeVideo.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {activeVideo.category}
                    </span>
                    {activeVideo.duration && (
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {Math.floor(activeVideo.duration / 60)}:{String(Math.floor(activeVideo.duration % 60)).padStart(2, '0')}
                      </span>
                    )}
                    <span>Added {new Date(activeVideo.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveVideo(null)} 
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 gap-4">
            {/* Search */}
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

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'All' 
                    ? 'bg-[#34c5c5] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({videos.length})
              </button>
              
              {accessibleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.name 
                      ? 'bg-[#34c5c5] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name} ({cat.videoCount})
                </button>
              ))}

              {lockedCategories.length > 0 && showLockedContent && (
                <div className="border-l border-gray-300 pl-2 ml-2">
                  {lockedCategories.map((cat) => (
                    <button
                      key={cat.id}
                      disabled
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-400 cursor-not-allowed mr-2"
                    >
                      <Lock className="h-3 w-3 inline mr-1" />
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowLockedContent(!showLockedContent)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showLockedContent
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {showLockedContent ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
              
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Display */}
        {selectedCategory === 'All' && !searchQuery ? (
          /* Category-based view */
          <div className="space-y-8">
            {Object.entries(videosByCategory).map(([categoryName, categoryVideos]) => {
              const category = categories.find(c => c.name === categoryName)
              const isLocked = category?.hasAccess === false
              const accessibleVideos = categoryVideos.filter(v => v.hasAccess !== false)
              const lockedVideos = categoryVideos.filter(v => v.hasAccess === false)
              
              if (!showLockedContent && isLocked) return null
              
              return (
                <div key={categoryName} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
                      {isLocked && <Lock className="h-5 w-5 text-gray-400" />}
                      {category?.description && (
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      )}
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {accessibleVideos.length} accessible
                      {lockedVideos.length > 0 && `, ${lockedVideos.length} locked`}
                    </span>
                  </div>

                  {accessibleVideos.length > 0 && (
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                      {accessibleVideos.map((video) => (
                        <VideoCard 
                          key={video.id} 
                          video={video} 
                          viewMode={viewMode}
                          onPlay={(video) => setActiveVideo(video)} 
                        />
                      ))}
                    </div>
                  )}

                  {showLockedContent && lockedVideos.length > 0 && (
                    <>
                      <div className="text-sm text-gray-500 font-medium">Locked Content (Upgrade Required)</div>
                      <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {lockedVideos.map((video) => (
                          <VideoCard 
                            key={video.id} 
                            video={video} 
                            viewMode={viewMode}
                            onPlay={() => {}}
                            isLocked 
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          /* Flat video list */
          <div>
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading videos...</div>
            ) : videos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Video className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No videos found matching your criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {videos.map((video) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    viewMode={viewMode}
                    onPlay={(video) => video.hasAccess !== false && setActiveVideo(video)}
                    isLocked={video.hasAccess === false}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upgrade CTA for locked content */}
        {lockedCategories.length > 0 && (
          <div className="bg-gradient-to-r from-primary to-teal rounded-lg p-8 text-white">
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Unlock More Content</h3>
              <p className="text-lg mb-6">
                Upgrade your membership to access {lockedCategories.length} more categor{lockedCategories.length !== 1 ? 'ies' : 'y'} 
                and premium workouts.
              </p>
              <Link href="/pricing-demo" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Upgrade Options
              </Link>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

function VideoCard({ 
  video, 
  viewMode, 
  onPlay, 
  isLocked = false 
}: { 
  video: VideoItem
  viewMode: 'grid' | 'list'
  onPlay: (video: VideoItem) => void
  isLocked?: boolean
}) {
  if (viewMode === 'list') {
    return (
      <div className={`bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4 relative ${isLocked ? 'opacity-75' : ''}`}>
        {isLocked && (
          <div className="absolute inset-0 bg-white/60 rounded-lg flex items-center justify-center z-10">
            <div className="text-center">
              <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600">Requires {video.membershipLevel}</p>
              <button className="mt-2 text-xs text-primary hover:underline">Upgrade to access</button>
            </div>
          </div>
        )}
        
        <div className="relative w-32 h-20 bg-gradient-to-br from-primary/20 to-teal/20 rounded flex items-center justify-center flex-shrink-0">
          {video.thumbnailUrl ? (
            <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover rounded" />
          ) : (
            <Play className="h-6 w-6 text-primary/50" />
          )}
          {video.duration && (
            <div className="absolute bottom-1 right-1 bg-black/75 text-white px-1 py-0.5 rounded text-xs">
              {Math.floor(video.duration / 60)}:{String(Math.floor(video.duration % 60)).padStart(2, '0')}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded mb-2">
            {video.category}
          </span>
          <h3 className="font-semibold text-gray-900 mb-1 truncate">{video.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
        </div>
        
        <button
          onClick={() => onPlay(video)}
          disabled={isLocked || !video.muxPlaybackId}
          className="bg-[#34c5c5] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#37a6a6] transition-colors flex items-center disabled:opacity-50"
        >
          <Play className="h-4 w-4 mr-2" />
          {video.muxPlaybackId ? 'Start' : 'Coming Soon'}
        </button>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group relative ${isLocked ? 'opacity-75' : ''}`}>
      {isLocked && (
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
      </div>
      
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded mb-2">
          {video.category}
        </span>
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
        <button
          onClick={() => onPlay(video)}
          disabled={isLocked || !video.muxPlaybackId}
          className="w-full bg-[#34c5c5] text-white py-2 rounded-lg font-medium hover:bg-[#37a6a6] transition-colors flex items-center justify-center disabled:opacity-50"
        >
          <Play className="h-4 w-4 mr-2" />
          {video.muxPlaybackId ? 'Start Workout' : 'Coming Soon'}
        </button>
      </div>
    </div>
  )
}