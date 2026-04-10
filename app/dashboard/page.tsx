'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { BookOpen, Play, Users, TrendingUp, Calendar, Target } from 'lucide-react'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  description?: string
  hasAccess: boolean
  videoCount: number
}

interface Video {
  id: string
  title: string
  description?: string
  uploadthingUrl?: string
  category?: {
    name: string
  }
  createdAt: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [categories, setCategories] = useState<Category[]>([])
  const [recentVideos, setRecentVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const [categoriesRes, videosRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/videos?limit=5&orderBy=createdAt&order=desc')
        ])

        if (!categoriesRes.ok || !videosRes.ok) {
          throw new Error('Failed to fetch data')
        }

        const categoriesData = await categoriesRes.json()
        const videosData = await videosRes.json()

        setCategories(categoriesData.categories || [])
        setRecentVideos(videosData.videos || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [session, status])

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-lg h-24"></div>
            <div className="bg-gray-200 rounded-lg h-24"></div>
            <div className="bg-gray-200 rounded-lg h-24"></div>
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
          <p className="text-gray-600 mb-6">You need to be signed in to view your dashboard.</p>
          <Link href="/auth/login" className="btn-primary">
            Sign In
          </Link>
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

  const user = session.user as any
  const userName = user?.name || 'User'
  const userRole = user?.role || 'USER'
  const accessibleCategories = categories.filter(cat => cat.hasAccess)
  const totalAccessibleVideos = accessibleCategories.reduce((sum, cat) => sum + cat.videoCount, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
          <p className="text-white/90 mb-4">
            Ready to continue your executive development journey? 
            {accessibleCategories.length > 0 && ` You have access to ${accessibleCategories.length} categories with ${totalAccessibleVideos} videos.`}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-medium">Role: {userRole}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="font-medium">{accessibleCategories.length} Categories</span>
            </div>
            <div className="flex items-center">
              <Play className="h-5 w-5 mr-2" />
              <span className="font-medium">{totalAccessibleVideos} Videos</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        {accessibleCategories.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Content Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibleCategories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/dashboard/fitness?category=${category.id}`}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200 hover:border-[#FF8900]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="h-8 w-8 text-[#FF8900]" />
                    <span className="text-sm font-medium text-gray-600">
                      {category.videoCount} videos
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Content Access</h3>
            <p className="text-gray-600">
              You don't have access to any content categories yet. Contact your administrator to get started.
            </p>
          </div>
        )}

        {/* Recent Videos */}
        {recentVideos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Added Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentVideos.map((video) => (
                <Link
                  key={video.id}
                  href={`/dashboard/fitness#video-${video.id}`}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200 hover:border-[#34c5c5]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Play className="h-8 w-8 text-[#34c5c5]" />
                    {video.category && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {video.category.name}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{video.description}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    {new Date(video.createdAt).toLocaleDateString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dashboard/fitness" className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#FF8900] transition-colors group">
              <Play className="h-8 w-8 mx-auto mb-2 text-gray-600 group-hover:text-[#FF8900]" />
              <span className="text-sm font-medium">Video Vault</span>
            </Link>
            <Link href="/dashboard/courses" className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#FF8900] transition-colors group">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-gray-600 group-hover:text-[#FF8900]" />
              <span className="text-sm font-medium">Courses</span>
            </Link>
            <Link href="/dashboard/progress" className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#FF8900] transition-colors group">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-gray-600 group-hover:text-[#FF8900]" />
              <span className="text-sm font-medium">Progress</span>
            </Link>
            <Link href="/dashboard/events" className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#FF8900] transition-colors group">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-gray-600 group-hover:text-[#FF8900]" />
              <span className="text-sm font-medium">Events</span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}