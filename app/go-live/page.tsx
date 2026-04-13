'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Square, Copy, Check, Radio, Clock, Eye, EyeOff, Monitor, Video } from 'lucide-react'

export const metadata = {
  title: 'Go Live — Krystalore',
  description: 'Broadcast live to your community. Stream directly from your browser or connect OBS.',
}

interface StreamInfo {
  active: boolean
  stream?: { streamId: string; playbackId: string; status: string; title: string; startedAt: string | null }
}
interface AdminStreamInfo { streamId: string; streamKey: string; playbackId: string; rtmpUrl: string }
interface FeedFlixStream { id: string; stream_key: string }
interface CategoryOption { id: string; name: string; slug: string }

function MuxPlayerEmbed({ playbackId }: { playbackId: string }) {
  const [MuxPlayer, setMuxPlayer] = useState<any>(null)
  useEffect(() => { import('@mux/mux-player-react').then(m => setMuxPlayer(() => m.default)).catch(() => {}) }, [])
  if (!MuxPlayer) return <div className="w-full bg-gray-900 rounded-xl" style={{ aspectRatio: '16/9' }} />
  return <MuxPlayer playbackId={playbackId} streamType="live" autoPlay="muted" style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px' }} />
}

export default function GoLivePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const role = (session?.user as any)?.role || 'MEMBER'
  const isAdmin = ['GOD', 'ADMIN'].includes(role)

  // Stream state
  const [streamInfo, setStreamInfo] = useState<StreamInfo | null>(null)
  const [adminStream, setAdminStream] = useState<AdminStreamInfo | null>(null)
  const [feedflixStream, setFeedflixStream] = useState<FeedFlixStream | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [showKey, setShowKey] = useState(false)

  // Pre-stream setup (set BEFORE going live)
  const [title, setTitle] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [membershipLevel, setMembershipLevel] = useState('FREE')
  const [streamMode, setStreamMode] = useState<'obs' | 'browser'>('browser')
  const [categories, setCategories] = useState<CategoryOption[]>([])

  // Browser streaming
  const [browserStreaming, setBrowserStreaming] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wsRef = useRef<WebSocket | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/login') }, [status, router])

  useEffect(() => {
    fetch('/api/categories').then(r => r.json()).then(data => {
      const cats = (Array.isArray(data) ? data : []).filter((c: any) => c.videoCount > 0 || c.name === 'Uncategorized')
      setCategories(cats)
    }).catch(() => {})
  }, [])

  const fetchStreamStatus = useCallback(async () => {
    try { const r = await fetch('/api/mux/live'); setStreamInfo(await r.json()) } catch {}
  }, [])

  useEffect(() => {
    fetchStreamStatus()
    const i = setInterval(fetchStreamStatus, 5000)
    return () => clearInterval(i)
  }, [fetchStreamStatus])

  useEffect(() => {
    if (browserStreaming && videoRef.current && mediaStreamRef.current) {
      videoRef.current.srcObject = mediaStreamRef.current
    }
  }, [browserStreaming])

  useEffect(() => { return () => { stopBrowserStream() } }, [])

  // --- Stream actions ---

  const startStream = async () => {
    if (!title.trim()) { setError('Please enter a stream title'); return }
    setLoading(true); setError(null)
    try {
      const res = await fetch('/api/mux/live', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setAdminStream(data.stream)
      await fetchStreamStatus()
    } catch (err: any) { setError(err.message) } finally { setLoading(false) }
  }

  const startBrowserStream = async () => {
    if (!title.trim()) { setError('Please enter a stream title'); return }
    setLoading(true); setError(null)
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720, frameRate: 30 }, audio: true })
      mediaStreamRef.current = mediaStream

      const res = await fetch('/api/feedflix/streams', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }) })
      const data = await res.json()
      if (data.error) { mediaStream.getTracks().forEach(t => t.stop()); mediaStreamRef.current = null; throw new Error(data.error) }
      if (!data.stream?.stream_key) { mediaStream.getTracks().forEach(t => t.stop()); mediaStreamRef.current = null; throw new Error('No stream key returned. Please try again.') }
      setFeedflixStream(data.stream)

      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus') ? 'video/webm;codecs=vp8,opus' : MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm'
      const relayUrl = `wss://relay.feedflix.com?key=${encodeURIComponent(data.stream.stream_key)}&mime=${encodeURIComponent(mimeType)}`

      await new Promise<void>((resolve, reject) => {
        const ws = new WebSocket(relayUrl)
        wsRef.current = ws
        ws.onopen = () => {
          const recorder = new MediaRecorder(mediaStream, { mimeType })
          recorderRef.current = recorder
          recorder.ondataavailable = (e) => { if (e.data.size > 0 && ws.readyState === WebSocket.OPEN) ws.send(e.data) }
          recorder.start(1000)
          setBrowserStreaming(true)
          resolve()
        }
        ws.onerror = () => reject(new Error('Connection to streaming relay failed'))
        ws.onclose = () => { if (recorderRef.current) stopBrowserStream() }
      })
      await fetchStreamStatus()
    } catch (err: any) { setError(err.message); stopBrowserStream(); setFeedflixStream(null) } finally { setLoading(false) }
  }

  const stopBrowserStream = () => {
    recorderRef.current?.stop(); recorderRef.current = null
    wsRef.current?.close(); wsRef.current = null
    mediaStreamRef.current?.getTracks().forEach(t => t.stop()); mediaStreamRef.current = null
    if (videoRef.current) videoRef.current.srcObject = null
    setBrowserStreaming(false)
  }

  const endStream = async () => {
    setLoading(true); setError(null)
    try {
      if (feedflixStream) { await fetch(`/api/feedflix/streams/${feedflixStream.id}`, { method: 'POST' }).catch(() => {}); setFeedflixStream(null) }
      if (browserStreaming) stopBrowserStream()
      const streamId = streamInfo?.stream?.streamId || adminStream?.streamId
      if (streamId) await fetch(`/api/mux/live/${streamId}`, { method: 'DELETE' }).catch(() => {})

      // Auto-save recording to vault with pre-set category and title
      if (title.trim()) {
        await fetch('/api/videos/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: title.trim(), categoryId: categoryId || undefined, membershipLevel, keywords: '' }),
        }).catch(() => {})
      }

      setAdminStream(null)
      await fetchStreamStatus()
      // Show success briefly then reset
      setError(null)
      setTitle(''); setCategoryId(''); setMembershipLevel('FREE')
    } catch (err: any) { setError(err.message) } finally { setLoading(false) }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text); setCopied(label); setTimeout(() => setCopied(null), 2000)
  }

  const isLive = streamInfo?.active || (adminStream?.streamId && streamInfo?.stream?.status === 'active') || browserStreaming
  const isStreaming = !!adminStream || !!feedflixStream || browserStreaming

  if (status === 'loading') return <MainLayout><div className="p-12 text-center">Loading...</div></MainLayout>
  if (!session) return null

  // Members see the viewer page
  if (!isAdmin) {
    return (
      <MainLayout>
        <div className="space-y-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Live with <span className="text-teal">Krystal</span></h1>
          {isLive && streamInfo?.stream?.playbackId ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-600 font-semibold">LIVE NOW — {streamInfo.stream.title}</span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                <MuxPlayerEmbed playbackId={streamInfo.stream.playbackId} />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 max-w-lg mx-auto">
              <Radio className="h-12 w-12 text-teal mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">No live stream right now</h2>
              <p className="text-gray-500">Check back soon or visit the <a href="/vault" className="text-teal hover:underline">Video Vault</a>.</p>
            </div>
          )}
        </div>
      </MainLayout>
    )
  }

  // Admin view
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Go Live</h1>
          <p className="text-gray-500 mt-1">Set up your stream details, then go live. The recording will auto-save to the vault when you end.</p>
        </div>

        {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">{error}</div>}

        {!isStreaming ? (
          /* --- PRE-STREAM SETUP --- */
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Radio className="h-5 w-5 text-teal" /> Stream Setup
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stream Title <span className="text-red-400">*</span></label>
              <input
                type="text" value={title} onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Monday Motivator — Full Body Burn"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={categoryId} onChange={e => setCategoryId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
                >
                  <option value="">Select category...</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Membership Level</label>
                <select
                  value={membershipLevel} onChange={e => setMembershipLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900"
                >
                  <option value="FREE">FREE — Everyone</option>
                  <option value="BASIC">BASIC</option>
                  <option value="PREMIUM">PREMIUM</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stream Method</label>
              <div className="flex gap-3">
                <button onClick={() => setStreamMode('browser')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all text-sm font-medium ${streamMode === 'browser' ? 'border-teal bg-teal/5 text-teal' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                  <Monitor className="h-5 w-5" /> Browser
                </button>
                <button onClick={() => setStreamMode('obs')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all text-sm font-medium ${streamMode === 'obs' ? 'border-teal bg-teal/5 text-teal' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                  <Video className="h-5 w-5" /> OBS / Software
                </button>
              </div>
            </div>

            <button
              onClick={streamMode === 'browser' ? startBrowserStream : startStream}
              disabled={loading || !title.trim()}
              className="w-full bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-teal-200 flex items-center justify-center gap-2 text-lg"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Play className="h-5 w-5" />}
              {loading ? 'Starting...' : 'Go Live'}
            </button>
          </div>
        ) : (
          /* --- LIVE / STREAMING --- */
          <div className="space-y-4">
            {/* Status bar */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${isLive ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`} />
                  {isLive ? 'LIVE' : 'Connecting...'}
                </div>
                <span className="text-gray-900 font-medium text-sm">{title}</span>
                {browserStreaming && <span className="text-xs text-teal bg-teal/10 px-2 py-0.5 rounded-full">Browser</span>}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                {streamInfo?.stream?.startedAt && (
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Started {new Date(streamInfo.stream.startedAt).toLocaleTimeString()}</span>
                )}
              </div>
            </div>

            {/* Browser preview */}
            {browserStreaming && (
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
                <video ref={videoRef} autoPlay muted playsInline className="w-full" style={{ aspectRatio: '16/9' }} />
              </div>
            )}

            {/* OBS credentials */}
            {adminStream && !browserStreaming && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">RTMP URL</label>
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-gray-800 flex-1 truncate">{adminStream.rtmpUrl}</code>
                    <button onClick={() => copyToClipboard(adminStream.rtmpUrl, 'rtmp')} className="p-1.5 hover:bg-gray-200 rounded-lg">
                      {copied === 'rtmp' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Stream Key</label>
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-gray-800 flex-1 truncate">{showKey ? adminStream.streamKey : '••••••••••••'}</code>
                    <button onClick={() => setShowKey(!showKey)} className="p-1.5 hover:bg-gray-200 rounded-lg">
                      {showKey ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                    <button onClick={() => copyToClipboard(adminStream.streamKey, 'key')} className="p-1.5 hover:bg-gray-200 rounded-lg">
                      {copied === 'key' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mux player (OBS mode when live) */}
            {!browserStreaming && isLive && (adminStream?.playbackId || streamInfo?.stream?.playbackId) && (
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <MuxPlayerEmbed playbackId={(adminStream?.playbackId || streamInfo?.stream?.playbackId)!} />
              </div>
            )}

            {/* End Stream */}
            <button onClick={endStream} disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Square className="h-5 w-5" />}
              {loading ? 'Ending Stream...' : 'End Live Stream'}
            </button>

            <p className="text-xs text-gray-400 text-center">
              When you end the stream, the recording will be saved to <strong>{categories.find(c => c.id === categoryId)?.name || 'Uncategorized'}</strong> in the vault.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
