'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/layout/AdminSidebar'
import MainLayout from '@/components/layout/MainLayout'
import { TrendingUp, Eye, Users, MessageCircle, Video, Clock, Trophy } from 'lucide-react'

interface Analytics {
  viewership: {
    peak_concurrent_viewers: number
    total_watch_minutes: number
    unique_viewers: number
    repeat_viewers: number
  }
  engagement: {
    reactions_by_type: Record<string, number>
    chat_count: number
    participation_rate: number
    hand_raises: number
  }
  content: {
    top_videos: { id: string; title: string; view_count: number }[]
    top_categories: { id: string; name: string; stream_count: number }[]
    top_streamers: { id: string; name: string; stream_count: number }[]
  }
}

export default function FeedFlixAnalyticsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(30)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    setLoading(true)
    fetch(`/api/feedflix/analytics?days=${days}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        setAnalytics(data)
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [days])

  if (status === 'loading') return null

  const totalReactions = analytics
    ? Object.values(analytics.engagement.reactions_by_type).reduce((s, n) => s + n, 0)
    : 0

  return (
    <MainLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="ml-64 flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Streaming Analytics</h1>
              <p className="text-gray-500 mt-1">FeedFlix viewership and engagement metrics</p>
            </div>
            <select
              value={days}
              onChange={e => setDays(Number(e.target.value))}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            >
              <option value={7}>Last 7 days</option>
              <option value={14}>Last 14 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm mb-6">{error}</div>
          )}

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading analytics...</div>
          ) : analytics ? (
            <div className="space-y-8">
              {/* Viewership Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={Users} label="Unique Viewers" value={analytics.viewership.unique_viewers.toLocaleString()} />
                <StatCard icon={Eye} label="Peak Concurrent" value={analytics.viewership.peak_concurrent_viewers.toLocaleString()} />
                <StatCard icon={Clock} label="Watch Minutes" value={analytics.viewership.total_watch_minutes.toLocaleString()} />
                <StatCard icon={Users} label="Repeat Viewers" value={analytics.viewership.repeat_viewers.toLocaleString()} />
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={MessageCircle} label="Chat Messages" value={analytics.engagement.chat_count.toLocaleString()} />
                <StatCard icon={TrendingUp} label="Participation Rate" value={`${Math.round(analytics.engagement.participation_rate * 100)}%`} />
                <StatCard icon={Trophy} label="Total Reactions" value={totalReactions.toLocaleString()} />
                <StatCard icon={Users} label="Hand Raises" value={analytics.engagement.hand_raises.toLocaleString()} />
              </div>

              {/* Top Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Videos */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Video className="h-5 w-5 text-teal" /> Top Videos
                  </h2>
                  {analytics.content.top_videos.length > 0 ? (
                    <div className="space-y-3">
                      {analytics.content.top_videos.map((video, i) => (
                        <div key={video.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-400 w-6">{i + 1}</span>
                            <span className="text-sm text-gray-900 truncate">{video.title}</span>
                          </div>
                          <span className="text-sm text-gray-500 whitespace-nowrap">{video.view_count} views</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">No video data yet</p>
                  )}
                </div>

                {/* Top Categories */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange" /> Top Categories
                  </h2>
                  {analytics.content.top_categories.length > 0 ? (
                    <div className="space-y-3">
                      {analytics.content.top_categories.map((cat, i) => (
                        <div key={cat.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-400 w-6">{i + 1}</span>
                            <span className="text-sm text-gray-900">{cat.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 whitespace-nowrap">{cat.stream_count} streams</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">No category data yet</p>
                  )}
                </div>

                {/* Top Streamers */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal" /> Top Streamers
                  </h2>
                  {analytics.content.top_streamers.length > 0 ? (
                    <div className="space-y-3">
                      {analytics.content.top_streamers.map((streamer, i) => (
                        <div key={streamer.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-400 w-6">{i + 1}</span>
                            <span className="text-sm text-gray-900">{streamer.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 whitespace-nowrap">{streamer.stream_count} streams</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">No streamer data yet</p>
                  )}
                </div>
              </div>

              {/* Reactions Breakdown */}
              {totalReactions > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Reactions Breakdown</h2>
                  <div className="flex gap-6 flex-wrap">
                    {Object.entries(analytics.engagement.reactions_by_type).map(([type, count]) => (
                      <div key={type} className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{count}</p>
                        <p className="text-sm text-gray-500 capitalize">{type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </MainLayout>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
          <Icon className="h-5 w-5 text-teal" />
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}
