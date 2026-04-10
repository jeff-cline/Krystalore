'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Link from 'next/link'
import { TrendingUp, BarChart3, Target, Calendar } from 'lucide-react'

interface Assessment {
  date: string
  quizType: string
  scores: Record<string, number>
  overallScore: number
  level: string
}

interface UserProgress {
  email: string
  name: string | null
  assessments: Assessment[]
}

export default function ProgressPage() {
  const { data: session, status } = useSession()
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchProgress = async () => {
      try {
        setLoading(true)
        const email = (session.user as any)?.email
        if (!email) {
          setLoading(false)
          return
        }

        const response = await fetch(`/api/progress?email=${encodeURIComponent(email)}`)
        if (response.ok) {
          const data = await response.json()
          if (data.assessments && data.assessments.length > 0) {
            setProgress(data)
          }
        }
        // If API doesn't exist or returns no data, we'll show empty state
      } catch (err) {
        // API might not exist, that's okay - we'll show empty state
        console.log('Progress API not available')
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
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
          <p className="text-gray-600">You need to be signed in to view your progress.</p>
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

  // Show empty state if no progress data
  if (!progress || !progress.assessments || progress.assessments.length === 0) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Progress & Success</h1>
              <p className="text-gray-600 mt-1">Track your progress as you complete courses and assessments</p>
            </div>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Journey Starts Here</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Track your progress as you complete courses and assessments. Your transformation data 
              will appear here as you engage with the platform and take evaluations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <Target className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Set Goals</h4>
                <p className="text-sm text-gray-600">Define your objectives and track your achievements over time.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <TrendingUp className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Track Growth</h4>
                <p className="text-sm text-gray-600">Monitor your improvement across different skill areas.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <Calendar className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Regular Check-ins</h4>
                <p className="text-sm text-gray-600">Take assessments to measure your ongoing development.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/courses" className="btn-primary">
                Explore Courses
              </Link>
              <Link href="/dashboard/fitness" className="btn-secondary">
                Browse Content
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Coming Soon: Advanced Progress Tracking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">📊 Detailed Analytics</h3>
                <p className="text-white/90 text-sm">
                  View comprehensive charts and graphs showing your growth across different competencies and time periods.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🏆 Achievement Levels</h3>
                <p className="text-white/90 text-sm">
                  Progress through different levels (Beginner, Rising, Advancing, Elite, Master) as you develop your skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📈 Trend Analysis</h3>
                <p className="text-white/90 text-sm">
                  Identify patterns in your learning and receive personalized recommendations for continued growth.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎯 Goal Setting</h3>
                <p className="text-white/90 text-sm">
                  Set specific targets and track your progress towards achieving your professional development goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  // Display real progress data with quiz results
  const latestAssessment = progress.assessments[progress.assessments.length - 1]
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Progress & Success</h1>
            <p className="text-gray-600 mt-1">Your assessment history and growth tracking</p>
          </div>
          <Link href="/quizzes" className="px-4 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: '#34c5c5' }}>
            Take Another Assessment
          </Link>
        </div>

        {/* Latest Score Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold" style={{ color: '#34c5c5' }}>{latestAssessment.overallScore}%</div>
            <div className="text-gray-500 mt-2 text-lg">Latest Score - {latestAssessment.quizType}</div>
            <div className="text-gray-400 text-sm mt-1">{new Date(latestAssessment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          
          {/* Category Breakdown */}
          {latestAssessment.scores && Object.keys(latestAssessment.scores).length > 0 && (
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Category Breakdown</h3>
              {Object.entries(latestAssessment.scores).map(([name, score]: [string, any]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{name}</span>
                    <span className="font-bold" style={{ color: '#34c5c5' }}>{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${score}%`, backgroundColor: '#34c5c5' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Assessment History */}
        {progress.assessments.length > 1 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" style={{ color: '#E8A849' }} />
              Assessment History
            </h3>
            <div className="space-y-3">
              {[...progress.assessments].reverse().map((assessment, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F4F1EC' }}>
                  <div>
                    <div className="font-medium text-gray-900">{assessment.quizType}</div>
                    <div className="text-sm text-gray-500">{new Date(assessment.date).toLocaleDateString()}</div>
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#34c5c5' }}>{assessment.overallScore}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-lg p-8 text-center" style={{ background: 'linear-gradient(135deg, #1B2838 0%, #2d3f52 100%)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#E8A849' }}>Ready to Go Deeper?</h2>
          <p className="mb-6" style={{ color: '#beeaea' }}>Book a consultation with Krystalore to create your personalized transformation roadmap based on your results.</p>
          <a href="https://krystalore.com/book" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg font-bold text-lg" style={{ backgroundColor: '#E8A849', color: '#1B2838' }}>
            Book Your Consultation
          </a>
        </div>
      </div>
    </DashboardLayout>
  )
}