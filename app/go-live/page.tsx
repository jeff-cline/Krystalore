'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Square, Copy, Check, Radio, Users, Clock, Bell, MessageCircle, Eye, EyeOff, Upload } from 'lucide-react'

interface StreamInfo {
  active: boolean
  stream?: {
    streamId: string
    playbackId: string
    status: string
    title: string
    startedAt: string | null
  }
}

interface AdminStreamInfo {
  streamId: string
  streamKey: string
  playbackId: string
  rtmpUrl: string
}

interface CategoryOption {
  id: string
  name: string
  slug: string
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

export default function GoLivePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const role = (session?.user as any)?.role || 'MEMBER'
  const isAdmin = ['GOD', 'ADMIN'].includes(role)

  const [streamInfo, setStreamInfo] = useState<StreamInfo | null>(null)
  const [adminStream, setAdminStream] = useState<AdminStreamInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [showKey, setShowKey] = useState(false)
  const [title, setTitle] = useState('Live with Krystal')
  const [error, setError] = useState<string | null>(null)

  // Post-stream upload form state
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [categories, setCategories] = useState<CategoryOption[]>([])
  const [uploadData, setUploadData] = useState({
    title: '', description: '', keywords: '', categoryId: '', membershipLevel: 'FREE'
  })
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    fetch('/api/categories').then(r => r.json()).then(data => {
      if (Array.isArray(data)) setCategories(data)
    }).catch(() => {})
  }, [])

  const fetchStreamStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/mux/live')
      const data = await res.json()
      setStreamInfo(data)
    } catch {}
  }, [])

  useEffect(() => {
    fetchStreamStatus()
    const interval = setInterval(fetchStreamStatus, 5000)
    return () => clearInterval(interval)
  }, [fetchStreamStatus])

  const startStream = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/mux/live', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setAdminStream(data.stream)
      await fetchStreamStatus()
    } catch (err: any) {
      setError(err.message || 'Failed to start stream')
    } finally {
      setLoading(false)
    }
  }

  const stopStream = async () => {
    const streamId = streamInfo?.stream?.streamId || adminStream?.streamId
    if (!streamId) return
    setLoading(true)
    setError(null)
    try {
      await fetch(`/api/mux/live/${streamId}`, { method: 'DELETE' })
      setAdminStream(null)
      setShowUploadForm(true)
      setUploadData(prev => ({ ...prev, title: streamInfo?.stream?.title || title }))
      await fetchStreamStatus()
    } catch (err: any) {
      setError(err.message || 'Failed to stop stream')
    } finally {
      setLoading(false)
    }
  }

  const handleUploadSubmit = async () => {
    setUploading(true)
    try {
      const res = await fetch('/api/videos/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadData),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setShowUploadForm(false)
      setUploadData({ title: '', description: '', keywords: '', categoryId: '', membershipLevel: 'FREE' })
    } catch (err: any) {
      setError(err.message || 'Failed to save video')
    } finally {
      setUploading(false)
    }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const isLive = streamInfo?.active || (adminStream?.streamId && streamInfo?.stream?.status === 'active')

  if (status === 'loading') return <MainLayout><div className="p-12 text-center">Loading...</div></MainLayout>
  if (!session) return null

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Go Live with <span className="text-teal">Krystal</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {isAdmin
              ? 'Manage your live stream. Start broadcasting to your community.'
              : 'Watch live sessions, interact in real-time, and grow together.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">{error}</div>
        )}

        {/* Post-stream upload form */}
        {showUploadForm && isAdmin && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Upload className="h-5 w-5 text-teal" /> Prepare Stream Recording
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={uploadData.title} onChange={e => setUploadData(p => ({ ...p, title: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={uploadData.description} onChange={e => setUploadData(p => ({ ...p, description: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
                <input type="text" value={uploadData.keywords} onChange={e => setUploadData(p => ({ ...p, keywords: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={uploadData.categoryId} onChange={e => setUploadData(p => ({ ...p, categoryId: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900">
                    <option value="">Select category...</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Level</label>
                  <select value={uploadData.membershipLevel} onChange={e => setUploadData(p => ({ ...p, membershipLevel: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900">
                    <option value="FREE">FREE</option>
                    <option value="BASIC">BASIC</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={handleUploadSubmit} disabled={uploading || !uploadData.title}
                  className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                  {uploading ? 'Saving...' : 'Save & Publish'}
                </button>
                <button onClick={() => setShowUploadForm(false)} className="text-gray-600 hover:text-gray-900 py-3 px-6">
                  Skip
                </button>
              </div>
            </div>
          </div>
        )}

        {isAdmin ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Radio className="h-5 w-5 text-teal" /> Stream Controls
              </h2>

              {!adminStream && !streamInfo?.stream ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stream Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900"
                      placeholder="Enter stream title..." />
                  </div>
                  <button onClick={startStream} disabled={loading}
                    className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-teal-200 flex items-center gap-2 text-lg">
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Play className="h-5 w-5" />}
                    {loading ? 'Creating Stream...' : 'Start Live Stream'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isLive ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'}`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`} />
                      {isLive ? 'LIVE' : 'Waiting for stream input...'}
                    </div>
                    {streamInfo?.stream?.title && <span className="text-gray-600 font-medium">{streamInfo.stream.title}</span>}
                  </div>

                  {adminStream && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">RTMP URL</label>
                        <div className="flex items-center gap-2">
                          <code className="text-sm text-gray-800 flex-1 truncate">{adminStream.rtmpUrl}</code>
                          <button onClick={() => copyToClipboard(adminStream.rtmpUrl, 'rtmp')} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            {copied === 'rtmp' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Stream Key</label>
                        <div className="flex items-center gap-2">
                          <code className="text-sm text-gray-800 flex-1 truncate">{showKey ? adminStream.streamKey : '••••••••••••••••'}</code>
                          <button onClick={() => setShowKey(!showKey)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            {showKey ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                          </button>
                          <button onClick={() => copyToClipboard(adminStream.streamKey, 'key')} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            {copied === 'key' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {isLive && (adminStream?.playbackId || streamInfo?.stream?.playbackId) && (
                    <div className="rounded-xl overflow-hidden border border-gray-200">
                      <MuxPlayerEmbed playbackId={(adminStream?.playbackId || streamInfo?.stream?.playbackId)!} />
                    </div>
                  )}

                  <button onClick={stopStream} disabled={loading}
                    className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Square className="h-5 w-5" />}
                    {loading ? 'Stopping...' : 'End Stream'}
                  </button>

                  <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-gray-600">
                    <p className="font-medium text-teal mb-2">How to go live:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Open OBS Studio (or your streaming software)</li>
                      <li>Go to Settings → Stream → Service: Custom</li>
                      <li>Paste the RTMP URL as the Server</li>
                      <li>Paste the Stream Key</li>
                      <li>Click &quot;Start Streaming&quot; in OBS</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {isLive && streamInfo?.stream?.playbackId ? (
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
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />Started {new Date(streamInfo.stream.startedAt).toLocaleTimeString()}</span>
                      )}
                      <span className="flex items-center gap-1"><Users className="h-4 w-4" />Watching now</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-teal" /> Live Chat
                    </h3>
                    <div className="h-48 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">Chat coming soon</div>
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
        )}
      </div>
    </MainLayout>
  )
}
