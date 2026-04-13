'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { BookOpen, Play, Users, TrendingUp, Calendar, Radio, MessageCircle, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [stats, setStats] = useState({ categories: 0, videos: 0 })
  const [isLive, setIsLive] = useState(false)
  const [liveTitle, setLiveTitle] = useState('')
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading' || !session) return

    Promise.all([
      fetch('/api/categories').then(r => r.json()),
      fetch('/api/mux/live').then(r => r.json()),
      fetch('/api/community/posts?limit=3').then(r => r.json()).catch(() => ({ posts: [] })),
    ]).then(([cats, live, community]) => {
      const catList = Array.isArray(cats) ? cats : []
      setStats({
        categories: catList.filter((c: any) => c.videoCount > 0).length,
        videos: catList.reduce((s: number, c: any) => s + (c.videoCount || 0), 0),
      })
      if (live.active && live.stream) {
        setIsLive(true)
        setLiveTitle(live.stream.title || 'Live Stream')
      }
      setRecentPosts(community.posts || [])
    }).finally(() => setLoading(false))
  }, [session, status])

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-xl h-32" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-200 rounded-xl h-24" />
            <div className="bg-gray-200 rounded-xl h-24" />
            <div className="bg-gray-200 rounded-xl h-24" />
            <div className="bg-gray-200 rounded-xl h-24" />
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
          <Link href="/auth/login" className="btn-primary">Sign In</Link>
        </div>
      </DashboardLayout>
    )
  }

  const user = session.user as any
  const userName = user?.name || 'Member'
  const userRole = user?.role || 'MEMBER'
  const userLevel = user?.membershipLevel || 'FREE'
  const isAdmin = ['GOD', 'ADMIN'].includes(userRole)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Live Banner */}
        {isLive && (
          <Link href="/vault" className="block bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white hover:from-red-600 hover:to-red-700 transition-all shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                <Radio className="h-5 w-5" />
                <div>
                  <p className="font-bold text-sm sm:text-base">Krystalore is LIVE!</p>
                  <p className="text-red-100 text-xs sm:text-sm">{liveTitle}</p>
                </div>
              </div>
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">Watch Now</span>
            </div>
          </Link>
        )}

        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-xl p-6 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
          <p className="text-white/90 text-sm sm:text-base mb-3">
            Your membership: <span className="font-semibold">{userLevel}</span>
            {isAdmin && <span className="ml-3 bg-white/20 px-2 py-0.5 rounded text-xs font-medium">ADMIN</span>}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {stats.categories} Categories</span>
            <span className="flex items-center gap-1"><Play className="h-4 w-4" /> {stats.videos} Videos</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Link href="/vault" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-teal hover:shadow-md transition-all group">
            <Play className="h-7 w-7 mx-auto mb-2 text-teal group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">Video Vault</span>
          </Link>
          <Link href="/dashboard/courses" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-teal hover:shadow-md transition-all group">
            <BookOpen className="h-7 w-7 mx-auto mb-2 text-[#FF8900] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">Courses</span>
          </Link>
          <Link href="/dashboard/community" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-teal hover:shadow-md transition-all group">
            <MessageCircle className="h-7 w-7 mx-auto mb-2 text-teal group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">Community</span>
          </Link>
          <Link href="/dashboard/progress" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-teal hover:shadow-md transition-all group">
            <Trophy className="h-7 w-7 mx-auto mb-2 text-[#FF8900] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-900">Progress</span>
          </Link>
        </div>

        {/* Admin Quick Access */}
        {isAdmin && (
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Admin</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/go-live" className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                <Radio className="h-4 w-4" /> Go Live
              </Link>
              <Link href="/admin/videos" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Manage Videos
              </Link>
              <Link href="/admin/clients" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                <Users className="h-4 w-4" /> Members
              </Link>
              <Link href="/admin" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Admin Panel
              </Link>
            </div>
          </div>
        )}

        {/* Community Preview */}
        {recentPosts.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Community</h2>
              <Link href="/dashboard/community" className="text-sm text-teal hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {recentPosts.map((post: any) => (
                <div key={post.id} className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal font-bold text-xs flex-shrink-0">
                    {post.author?.name?.[0]?.toUpperCase() || '?'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 line-clamp-2">{post.content}</p>
                    <p className="text-xs text-gray-400 mt-1">{post.author?.name} &middot; {post.commentCount || 0} comments</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
