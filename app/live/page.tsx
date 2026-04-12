'use client'

import { useState, useEffect, useCallback } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Radio, Users, Clock, Bell, MessageCircle } from 'lucide-react'

interface StreamInfo {
  active: boolean
  source?: string
  stream?: {
    streamId: string
    playbackId: string
    status: string
    title: string
    startedAt: string | null
  }
}

function MuxPlayerEmbed({ playbackId }: { playbackId: string }) {
  const [MuxPlayer, setMuxPlayer] = useState<any>(null)
  const [loadError, setLoadError] = useState(false)
  useEffect(() => {
    import('@mux/mux-player-react').then((mod) => setMuxPlayer(() => mod.default)).catch(() => setLoadError(true))
  }, [])
  if (loadError) return (
    <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
      <video className="absolute inset-0 w-full h-full" src={`https://stream.mux.com/${playbackId}.m3u8`} autoPlay muted controls />
    </div>
  )
  if (!MuxPlayer) return (
    <div className="relative w-full bg-gray-900" style={{ paddingTop: '56.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
      </div>
    </div>
  )
  return <MuxPlayer playbackId={playbackId} streamType="live" autoPlay="muted" style={{ width: '100%', aspectRatio: '16/9' }} />
}

export default function LivePage() {
  const [streamInfo, setStreamInfo] = useState<StreamInfo | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchStreamStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/mux/live')
      const data = await res.json()
      setStreamInfo(data)
    } catch {
      setStreamInfo({ active: false })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStreamStatus()
    const interval = setInterval(fetchStreamStatus, 5000)
    return () => clearInterval(interval)
  }, [fetchStreamStatus])

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Live with <span className="text-teal">Krystal</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Watch live sessions, interact in real-time, and grow together.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Checking for live stream...</div>
        ) : streamInfo?.active && streamInfo.stream?.playbackId ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-200 text-sm font-semibold">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" /> LIVE NOW
              </div>
              <span className="text-gray-900 font-semibold text-lg">{streamInfo.stream.title}</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <MuxPlayerEmbed playbackId={streamInfo.stream.playbackId} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{streamInfo.stream.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {streamInfo.stream.startedAt && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Started {new Date(streamInfo.stream.startedAt).toLocaleTimeString()}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" />Watching now</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-teal" /> Live Chat
                </h3>
                <div className="h-48 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">
                  Chat coming soon
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Radio className="h-10 w-10 text-teal" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No live stream right now</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Krystal isn&apos;t streaming at the moment. Sign up to get notified when the next session starts!
            </p>
            <button className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-teal-200 flex items-center gap-2 mx-auto">
              <Bell className="h-5 w-5" /> Notify Me When Live
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
