'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Radio, Calendar, Clock, Plus, Video, Trash2 } from 'lucide-react'

interface Stream {
  id: string
  title?: string
  status?: string
  started_at?: string
  ended_at?: string
  scheduled_at?: string
  playback_id?: string
  category_id?: string
  category?: {
    id: string
    name: string
    sort_order?: number
  }
}

export default function FeedFlixStreamsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [liveStreams, setLiveStreams] = useState<Stream[]>([])
  const [scheduledStreams, setScheduledStreams] = useState<Stream[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Schedule form
  const [showScheduleForm, setShowScheduleForm] = useState(false)
  const [scheduleTitle, setScheduleTitle] = useState('')
  const [scheduleDate, setScheduleDate] = useState('')
  const [scheduleDescription, setScheduleDescription] = useState('')
  const [scheduling, setScheduling] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  const fetchStreams = () => {
    setLoading(true)
    Promise.all([
      fetch('/api/feedflix/streams?type=live').then(r => r.json()),
      fetch('/api/feedflix/streams?type=scheduled').then(r => r.json()),
    ])
      .then(([live, scheduled]) => {
        setLiveStreams(live.streams || [])
        setScheduledStreams(scheduled.streams || [])
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchStreams()
    const interval = setInterval(fetchStreams, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleSchedule = async () => {
    if (!scheduleTitle || !scheduleDate) return
    setScheduling(true)
    try {
      const res = await fetch('/api/feedflix/streams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: scheduleTitle,
          scheduled_at: new Date(scheduleDate).toISOString(),
          description: scheduleDescription,
        }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setShowScheduleForm(false)
      setScheduleTitle('')
      setScheduleDate('')
      setScheduleDescription('')
      fetchStreams()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setScheduling(false)
    }
  }

  if (status === 'loading') return null

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Live Streams</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Manage live and scheduled streams</p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => setShowScheduleForm(!showScheduleForm)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Calendar className="h-4 w-4" /> <span className="hidden sm:inline">Schedule</span> <span className="sm:hidden">Schedule</span>
          </button>
          <button
            onClick={() => router.push('/go-live')}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-[#34c5c5] text-white rounded-xl text-sm font-medium hover:bg-[#37a6a6] transition-colors"
          >
            <Radio className="h-4 w-4" /> Go Live
          </button>
        </div>
      </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm mb-6">{error}</div>
          )}

          {/* Schedule Form */}
          {showScheduleForm && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal" /> Schedule a Stream
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={scheduleTitle}
                    onChange={e => setScheduleTitle(e.target.value)}
                    placeholder="Stream title..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    value={scheduleDate}
                    onChange={e => setScheduleDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                <textarea
                  value={scheduleDescription}
                  onChange={e => setScheduleDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSchedule}
                  disabled={scheduling || !scheduleTitle || !scheduleDate}
                  className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-2 px-6 rounded-xl transition-colors text-sm"
                >
                  {scheduling ? 'Scheduling...' : 'Schedule'}
                </button>
                <button
                  onClick={() => setShowScheduleForm(false)}
                  className="text-gray-600 hover:text-gray-900 py-2 px-4 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading streams...</div>
          ) : (
            <div className="space-y-8">
              {/* Live Now */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" /> Live Now
                </h2>
                {liveStreams.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {liveStreams.map(stream => (
                      <div key={stream.id} className="bg-white rounded-2xl border border-red-200 p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{stream.title || 'Untitled Stream'}</h3>
                          <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE
                          </span>
                        </div>
                        {stream.category && (
                          <a
                            href={`/dashboard/fitness/vault?category=${encodeURIComponent(stream.category.name || '')}`}
                            className="inline-block text-xs font-medium bg-teal/10 text-teal px-2 py-1 rounded mb-2 hover:bg-teal/20 transition-colors"
                          >
                            {stream.category.name || 'Uncategorized'}
                          </a>
                        )}
                        {stream.started_at && (
                          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mb-4">
                            <Clock className="h-3.5 w-3.5" />
                            Started {new Date(stream.started_at).toLocaleString()}
                          </p>
                        )}
                        <div className="flex gap-2">
                          <button
                            onClick={() => fetch(`/api/feedflix/streams/${stream.id}`, { method: 'POST' }).then(fetchStreams)}
                            className="flex-1 py-2 px-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-medium transition-colors text-center"
                          >
                            End Stream
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this stream? This cannot be undone.')) {
                                fetch(`/api/feedflix/streams/${stream.id}`, { method: 'POST' })
                                  .then(() => fetchStreams())
                              }
                            }}
                            className="py-2 px-3 bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl text-sm font-medium transition-colors flex items-center gap-1"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-400 text-sm">
                    No streams are live right now
                  </div>
                )}
              </div>

              {/* Scheduled */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-teal" /> Scheduled
                </h2>
                {scheduledStreams.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scheduledStreams.map(stream => (
                      <div key={stream.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{stream.title || 'Untitled'}</h3>
                        {stream.scheduled_at && (
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(stream.scheduled_at).toLocaleString()}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-400 text-sm">
                    No scheduled streams
                  </div>
                )}
              </div>
            </div>
          )}
    </div>
  )
}
