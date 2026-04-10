'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Play, Search, Filter, Clock } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Category {
  id: string
  name: string
  description?: string
}

interface Video {
  id: string
  title: string
  description?: string
  uploadthingUrl?: string
  uploadthingKey?: string
  fileType: 'VIDEO' | 'IMAGE' | 'OTHER'
  duration?: number
  createdAt: string
  category?: Category
  categoryId?: string
}

function FitnessPageContent() {
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const selectedCategoryId = searchParams.get('category')
  
  const [videos, setVideos] = useState<Video[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    if (selectedCategoryId) {
      setSelectedCategory(selectedCategoryId)
    }
  }, [selectedCategoryId])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const [videosRes, categoriesRes] = await Promise.all([
          fetch('/api/videos?limit=1000&qualityOnly=true'),
          fetch('/api/categories')
        ])

        if (!videosRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data')
        }

        const videosData = await videosRes.json()
        const categoriesData = await categoriesRes.json()

        setVideos(videosData.videos || [])
        setCategories(Array.isArray(categoriesData) ? categoriesData : (categoriesData.categories || []))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [session, status])

  const filteredVideos = videos.filter(video => {
    const matchesSearch = !searchTerm || 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = !selectedCategory || video.categoryId === selectedCategory

    return matchesSearch && matchesCategory
  })

  const videosByCategory = categories.reduce((acc, category) => {
    const categoryVideos = filteredVideos.filter(video => video.categoryId === category.id)
    if (categoryVideos.length > 0) {
      acc[category.id] = {
        category,
        videos: categoryVideos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      }
    }
    return acc
  }, {} as Record<string, { category: Category; videos: Video[] }>)

  const uncategorizedVideos = filteredVideos
    .filter(video => !video.categoryId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const getVideoUrl = (video: Video): string => {
    if (video.uploadthingUrl) return video.uploadthingUrl
    if (video.uploadthingKey) return `https://utfs.io/f/${video.uploadthingKey}`
    return ''
  }

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-48"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!session) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in</h2>
          <p className="text-gray-600">You need to be signed in to view the video vault.</p>
        </div>
      </DashboardLayout>
    )
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Video Vault</h1>
          <p className="text-white/90 mb-4">
            Access your personal collection of training videos and resources
          </p>
          <div className="text-sm text-white/80">
            {filteredVideos.length} videos available
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF8900] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF8900] focus:border-transparent bg-white"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Videos by Category */}
        {Object.keys(videosByCategory).length === 0 && uncategorizedVideos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Videos Found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory 
                ? 'No videos match your search criteria. Try adjusting your filters.'
                : 'No videos are available yet. Check back soon!'}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Categorized Videos */}
            {Object.entries(videosByCategory).map(([categoryId, { category, videos }]) => (
              <div key={categoryId} id={`category-${categoryId}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                {category.description && (
                  <p className="text-gray-600 mb-6">{category.description}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </div>
            ))}

            {/* Uncategorized videos are hidden from member view */}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

interface VideoCardProps {
  video: Video
}

function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const getVideoUrl = (video: Video): string => {
    if (video.uploadthingUrl) return video.uploadthingUrl
    if (video.uploadthingKey) return `https://utfs.io/f/${video.uploadthingKey}`
    return ''
  }
  
  const videoUrl = getVideoUrl(video)

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return ''
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div id={`video-${video.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {video.fileType === 'VIDEO' && videoUrl ? (
        <div className="relative aspect-video bg-gray-900">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <video
                src={videoUrl}
                preload="metadata"
                muted
                playsInline
                className="w-full h-full object-cover"
                onLoadedMetadata={(e) => {
                  const v = e.target as HTMLVideoElement
                  v.currentTime = Math.min(2, v.duration * 0.1)
                }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <Play className="h-16 w-16 text-white drop-shadow-lg" />
              </div>
            </div>
          ) : (
            <video
              controls
              autoPlay
              className="w-full h-full"
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {video.duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              <Clock className="h-3 w-3 inline mr-1" />
              {formatDuration(video.duration)}
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <Play className="h-12 w-12 text-gray-400" />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
        {video.description && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{video.description}</p>
        )}
        <p className="text-xs text-gray-500">
          {new Date(video.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default function FitnessPage() {
  return (
    <Suspense fallback={
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-48"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    }>
      <FitnessPageContent />
    </Suspense>
  )
}