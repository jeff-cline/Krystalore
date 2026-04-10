'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { BookOpen, Clock, Star, PlayCircle } from 'lucide-react'

interface Category {
  id: string
  name: string
  description?: string
  hasAccess: boolean
  videoCount: number
}

export default function CoursesPage() {
  const { data: session, status } = useSession()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/categories')
        if (!response.ok) {
          throw new Error('Failed to fetch categories')
        }

        const data = await response.json()
        // Filter for categories that could be considered "courses" 
        // (you could add a "type" field to categories to distinguish courses from other content)
        const courseCategories = data.categories?.filter((cat: Category) => 
          cat.hasAccess && cat.videoCount > 0
        ) || []
        
        setCategories(courseCategories)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [session, status])

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
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
          <p className="text-gray-600">You need to be signed in to view courses.</p>
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

  if (categories.length === 0) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
            <p className="text-gray-600 mt-2">
              Structured learning experiences and course content
            </p>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Courses Coming Soon</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on bringing you structured course content and learning paths. 
              In the meantime, check out our video vault for training materials and resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <BookOpen className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Structured Learning</h4>
                <p className="text-sm text-gray-600">Progressive course modules with clear learning objectives.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <Star className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Progress Tracking</h4>
                <p className="text-sm text-gray-600">Track your completion and mastery of each course.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <Clock className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Self-Paced</h4>
                <p className="text-sm text-gray-600">Learn at your own pace with lifetime access to content.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white mb-8">
              <h3 className="text-lg font-semibold mb-4">🎓 Course Topics You'll Love</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
                <div>• Executive Leadership Development</div>
                <div>• Personal Transformation</div>
                <div>• Communication & Confidence</div>
                <div>• Business Strategy & Growth</div>
                <div>• Health & Wellness Integration</div>
                <div>• Mindset & Peak Performance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/fitness" className="btn-primary">
                Browse Video Vault
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600 mt-2">
            Your structured learning content and course materials
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          {categories.map((category) => (
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
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              {category.description && (
                <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
              )}
              
              <div className="flex items-center text-sm text-gray-500">
                <PlayCircle className="h-4 w-4 mr-1" />
                <span>View course content</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Note about course development */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">📚 Course Structure in Development</h3>
          <p className="text-blue-800 text-sm">
            We're currently organizing our extensive video library into structured course formats. 
            For now, you can access all course content through our Video Vault, organized by categories. 
            Full course progression tracking and certificates are coming soon!
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}