'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Play, Clock, Calendar, Headphones } from 'lucide-react'

interface Video {
  id: string
  title: string
  description?: string
  uploadthingUrl?: string
  uploadthingKey?: string
  fileType: 'VIDEO' | 'IMAGE' | 'OTHER'
  duration?: number
  createdAt: string
  category?: {
    id: string
    name: string
  }
}

export default function PodcastsPage() {
  const { data: session, status } = useSession()
  const [podcastVideos, setPodcastVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchPodcasts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/videos')
        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }

        const data = await response.json()
        // Filter for videos that could be considered "podcasts" or audio content
        // You could add a specific category for podcasts or filter by title/description
        const podcasts = data.videos?.filter((video: Video) => 
          video.category?.name?.toLowerCase().includes('podcast') ||
          video.title?.toLowerCase().includes('podcast') ||
          video.title?.toLowerCase().includes('audio') ||
          video.category?.name?.toLowerCase().includes('audio')
        ) || []
        
        setPodcastVideos(podcasts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPodcasts()
  }, [session, status])

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
          <p className="text-gray-600">You need to be signed in to view podcasts.</p>
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

  // Show podcasts if they exist
  if (podcastVideos.length > 0) {
    const getVideoUrl = (video: Video): string => {
      if (video.uploadthingUrl) return video.uploadthingUrl
      if (video.uploadthingKey) return `https://utfs.io/f/${video.uploadthingKey}`
      return ''
    }

    const formatDuration = (seconds?: number): string => {
      if (!seconds) return ''
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Podcasts</h1>
            <p className="text-gray-600 mt-2">
              Audio content and podcast episodes
            </p>
          </div>

          {/* Podcast Episodes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastVideos.map((video) => {
              const videoUrl = getVideoUrl(video)
              return (
                <div key={video.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] h-32 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <Headphones className="h-12 w-12 text-white opacity-80" />
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {formatDuration(video.duration)}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(video.createdAt).toLocaleDateString()}
                      </span>
                      {video.category && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {video.category.name}
                        </span>
                      )}
                    </div>
                    
                    {videoUrl && (
                      <button 
                        onClick={() => {
                          // You could implement a podcast player modal here
                          window.open(videoUrl, '_blank')
                        }}
                        className="w-full flex items-center justify-center bg-[#FF8900] text-white py-2 rounded-lg font-medium hover:bg-[#FF8900]/90 transition-colors"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Listen Now
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </DashboardLayout>
    )
  }

  // Show empty state
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Podcasts</h1>
          <p className="text-gray-600 mt-2">
            Access exclusive podcast content and audio programs
          </p>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Headphones className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Podcasts Available</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on bringing you exclusive podcast content and audio programs. 
            In the meantime, check out our video vault which may contain audio-focused content 
            and training materials you can listen to.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Headphones className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Audio Learning</h4>
              <p className="text-sm text-gray-600">Learn on the go with audio-focused content and discussions.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Play className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Episodes</h4>
              <p className="text-sm text-gray-600">Access member-only podcast episodes and interviews.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Clock className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Listening</h4>
              <p className="text-sm text-gray-600">Listen while commuting, exercising, or multitasking.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white mb-8">
            <h3 className="text-lg font-semibold mb-4">🎧 Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div>• Krystal Clear Life Podcast</div>
              <div>• Monday Motivation Audio</div>
              <div>• Freedom Friday Discussions</div>
              <div>• Executive Interview Series</div>
              <div>• Meditation & Mindfulness</div>
              <div>• Leadership Development Audio</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard/fitness" className="btn-primary">
              Browse Video Content
            </Link>
            <Link href="/dashboard" className="btn-secondary">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}