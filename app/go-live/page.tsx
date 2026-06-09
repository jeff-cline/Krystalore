'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Square, Copy, Check, Radio, Users, Clock, Bell, MessageCircle, Eye, EyeOff, Upload, Video, MonitorUp, Mic, Plus, Trash2, ExternalLink } from 'lucide-react'

interface StreamInfo {
  active: boolean
  stream?: { streamId: string; playbackId: string; status: string; title: string; startedAt: string | null }
}
interface AdminStreamInfo { streamId: string; streamKey: string; playbackId: string; rtmpUrl: string; whipUrl?: string; simulcastCount?: number }
interface CategoryOption { id: string; name: string; slug: string }
interface Destination { platform: string; url: string; streamKey: string }

const PLATFORM_RTMP: Record<string, string> = {
  YouTube: 'rtmp://a.rtmp.youtube.com/live2',
  Facebook: 'rtmps://live-api-s.facebook.com:443/rtmp/',
  Custom: '',
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

  // broadcast mode + multi-destination restream
  const [mode, setMode] = useState<'browser' | 'obs'>('browser')
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [showDest, setShowDest] = useState(false)

  // browser (WHIP) broadcast state
  const [webcamLive, setWebcamLive] = useState(false)
  const [sharingScreen, setSharingScreen] = useState(false)
  const localVideoRef = useRef<HTMLVideoElement | null>(null)
  const pcRef = useRef<RTCPeerConnection | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Post-stream upload form
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [categories, setCategories] = useState<CategoryOption[]>([])
  const [uploadData, setUploadData] = useState({ title: '', description: '', keywords: '', categoryId: '', membershipLevel: 'FREE' })
  const [uploading, setUploading] = useState(false)

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/login') }, [status, router])
  useEffect(() => { fetch('/api/categories').then(r => r.json()).then(d => { if (Array.isArray(d)) setCategories(d) }).catch(() => {}) }, [])

  const fetchStreamStatus = useCallback(async () => {
    try { const res = await fetch('/api/mux/live'); setStreamInfo(await res.json()) } catch {}
  }, [])
  useEffect(() => {
    fetchStreamStatus()
    const interval = setInterval(fetchStreamStatus, 5000)
    return () => clearInterval(interval)
  }, [fetchStreamStatus])

  // ---- destinations helpers ----
  const addDestination = () => setDestinations(d => [...d, { platform: 'YouTube', url: PLATFORM_RTMP.YouTube, streamKey: '' }])
  const updateDestination = (i: number, patch: Partial<Destination>) => setDestinations(d => d.map((x, idx) => idx === i ? { ...x, ...patch, ...(patch.platform ? { url: PLATFORM_RTMP[patch.platform] ?? x.url } : {}) } : x))
  const removeDestination = (i: number) => setDestinations(d => d.filter((_, idx) => idx !== i))

  const createStream = async () => {
    const res = await fetch('/api/mux/live', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, simulcastTargets: destinations.filter(d => d.url && d.streamKey) }),
    })
    const data = await res.json()
    if (data.error) throw new Error(data.error)
    return data.stream as AdminStreamInfo
  }

  // ---- OBS mode ----
  const startStreamOBS = async () => {
    setLoading(true); setError(null)
    try { const s = await createStream(); setAdminStream(s); await fetchStreamStatus() }
    catch (err: any) { setError(err.message || 'Failed to start stream') }
    finally { setLoading(false) }
  }

  // ---- Browser (WHIP) mode ----
  async function whipPublish(whipUrl: string, streamKey: string, media: MediaStream) {
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] })
    pcRef.current = pc
    media.getTracks().forEach(t => pc.addTrack(t, media))
    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)
    // WHIP is non-trickle: wait for ICE gathering (cap at 2s)
    await new Promise<void>((resolve) => {
      if (pc.iceGatheringState === 'complete') return resolve()
      const check = () => { if (pc.iceGatheringState === 'complete') { pc.removeEventListener('icegatheringstatechange', check); resolve() } }
      pc.addEventListener('icegatheringstatechange', check)
      setTimeout(resolve, 2000)
    })
    const res = await fetch(whipUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/sdp', 'Authorization': `Bearer ${streamKey}` },
      body: pc.localDescription?.sdp || '',
    })
    if (!res.ok) throw new Error(`Broadcast handshake failed (${res.status}). If this persists, use the OBS option below.`)
    const answer = await res.text()
    await pc.setRemoteDescription({ type: 'answer', sdp: answer })
    return pc
  }

  const goLiveFromBrowser = async () => {
    setLoading(true); setError(null)
    try {
      const media = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: true })
      streamRef.current = media
      if (localVideoRef.current) { localVideoRef.current.srcObject = media; localVideoRef.current.play().catch(() => {}) }
      const s = await createStream()
      setAdminStream(s)
      await whipPublish(s.whipUrl || 'https://global-live.mux.com/whip', s.streamKey, media)
      setWebcamLive(true)
      await fetchStreamStatus()
    } catch (err: any) {
      // tear down on failure
      streamRef.current?.getTracks().forEach(t => t.stop()); streamRef.current = null
      pcRef.current?.close(); pcRef.current = null
      setError(err?.name === 'NotAllowedError' ? 'Camera/mic permission was denied. Allow access and try again.' : (err.message || 'Failed to go live'))
    } finally { setLoading(false) }
  }

  const toggleScreenShare = async () => {
    try {
      const pc = pcRef.current; if (!pc) return
      const sender = pc.getSenders().find(s => s.track?.kind === 'video')
      if (!sharingScreen) {
        const display = await navigator.mediaDevices.getDisplayMedia({ video: true })
        const track = display.getVideoTracks()[0]
        await sender?.replaceTrack(track)
        if (localVideoRef.current) localVideoRef.current.srcObject = display
        track.onended = () => { toggleScreenShare() }
        setSharingScreen(true)
      } else {
        const cam = await navigator.mediaDevices.getUserMedia({ video: true })
        const track = cam.getVideoTracks()[0]
        await sender?.replaceTrack(track)
        // recombine with existing audio for preview
        const audio = streamRef.current?.getAudioTracks()[0]
        const preview = new MediaStream(audio ? [track, audio] : [track])
        if (localVideoRef.current) localVideoRef.current.srcObject = preview
        setSharingScreen(false)
      }
    } catch (err: any) { setError(err.message || 'Screen share failed') }
  }

  const stopStream = async () => {
    const streamId = streamInfo?.stream?.streamId || adminStream?.streamId
    setLoading(true); setError(null)
    try {
      streamRef.current?.getTracks().forEach(t => t.stop()); streamRef.current = null
      pcRef.current?.close(); pcRef.current = null
      setWebcamLive(false); setSharingScreen(false)
      if (streamId) await fetch(`/api/mux/live/${streamId}`, { method: 'DELETE' })
      setAdminStream(null)
      setShowUploadForm(true)
      setUploadData(prev => ({ ...prev, title: streamInfo?.stream?.title || title }))
      await fetchStreamStatus()
    } catch (err: any) { setError(err.message || 'Failed to stop stream') }
    finally { setLoading(false) }
  }

  const handleUploadSubmit = async () => {
    setUploading(true)
    try {
      const res = await fetch('/api/videos/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(uploadData) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setShowUploadForm(false)
      setUploadData({ title: '', description: '', keywords: '', categoryId: '', membershipLevel: 'FREE' })
    } catch (err: any) { setError(err.message || 'Failed to save video') }
    finally { setUploading(false) }
  }

  const copyToClipboard = (text: string, label: string) => { navigator.clipboard.writeText(text); setCopied(label); setTimeout(() => setCopied(null), 2000) }
  const watchUrl = typeof window !== 'undefined' ? `${window.location.origin}/go-live` : '/go-live'
  const isLive = streamInfo?.active || webcamLive
  const hasStream = !!adminStream || !!streamInfo?.stream

  if (status === 'loading') return <MainLayout><div className="p-12 text-center">Loading...</div></MainLayout>
  if (!session) return null

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Go Live with <span className="text-teal">Krystal</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {isAdmin ? 'Broadcast straight from your browser — no software needed. Your community watches right here.' : 'Watch live sessions, interact in real-time, and grow together.'}
          </p>
        </div>

        {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">{error}</div>}

        {/* Post-stream upload form */}
        {showUploadForm && isAdmin && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2"><Upload className="h-5 w-5 text-teal" /> Save the Recording</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={uploadData.title} onChange={e => setUploadData(p => ({ ...p, title: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={uploadData.description} onChange={e => setUploadData(p => ({ ...p, description: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" rows={3} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={uploadData.categoryId} onChange={e => setUploadData(p => ({ ...p, categoryId: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none text-gray-900">
                    <option value="">Select category...</option>{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Membership Level</label>
                  <select value={uploadData.membershipLevel} onChange={e => setUploadData(p => ({ ...p, membershipLevel: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none text-gray-900">
                    <option value="FREE">FREE</option><option value="BASIC">BASIC</option><option value="PREMIUM">PREMIUM</option><option value="VIP">VIP</option></select></div>
              </div>
              <div className="flex gap-3">
                <button onClick={handleUploadSubmit} disabled={uploading || !uploadData.title} className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors">{uploading ? 'Saving...' : 'Save & Publish'}</button>
                <button onClick={() => setShowUploadForm(false)} className="text-gray-600 hover:text-gray-900 py-3 px-6">Skip</button>
              </div>
            </div>
          </div>
        )}

        {isAdmin ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2"><Radio className="h-5 w-5 text-teal" /> Stream Controls</h2>
                {!hasStream && (
                  <div className="inline-flex rounded-lg border border-gray-200 p-1 text-sm">
                    <button onClick={() => setMode('browser')} className={`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 ${mode === 'browser' ? 'bg-[#34c5c5] text-white' : 'text-gray-600'}`}><Video className="h-4 w-4" />Browser</button>
                    <button onClick={() => setMode('obs')} className={`px-3 py-1.5 rounded-md font-medium ${mode === 'obs' ? 'bg-[#34c5c5] text-white' : 'text-gray-600'}`}>OBS (advanced)</button>
                  </div>
                )}
              </div>

              {!hasStream ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stream Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" placeholder="Enter stream title..." />
                  </div>

                  {/* Optional: also broadcast to social (Mux Simulcast) */}
                  <div className="rounded-xl border border-gray-200 p-4">
                    <button onClick={() => setShowDest(s => !s)} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <ExternalLink className="h-4 w-4 text-teal" /> Also broadcast to social accounts {destinations.length ? `(${destinations.length})` : '(optional)'}
                    </button>
                    {showDest && (
                      <div className="mt-3 space-y-3">
                        {destinations.map((d, i) => (
                          <div key={i} className="grid grid-cols-12 gap-2 items-center">
                            <select value={d.platform} onChange={e => updateDestination(i, { platform: e.target.value })} className="col-span-3 px-2 py-2 rounded-lg border border-gray-200 text-sm text-gray-900">
                              <option>YouTube</option><option>Facebook</option><option>Custom</option>
                            </select>
                            <input placeholder="RTMP URL" value={d.url} onChange={e => updateDestination(i, { url: e.target.value })} className="col-span-5 px-2 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
                            <input placeholder="Stream key" value={d.streamKey} onChange={e => updateDestination(i, { streamKey: e.target.value })} className="col-span-3 px-2 py-2 rounded-lg border border-gray-200 text-sm text-gray-900" />
                            <button onClick={() => removeDestination(i)} className="col-span-1 p-2 text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        ))}
                        <button onClick={addDestination} className="text-sm text-teal font-medium flex items-center gap-1"><Plus className="h-4 w-4" /> Add destination</button>
                        <p className="text-xs text-gray-400">Paste the RTMP server + stream key from Facebook Live / YouTube Studio. We push your live to them via Mux at the same time.</p>
                      </div>
                    )}
                  </div>

                  {mode === 'browser' ? (
                    <button onClick={goLiveFromBrowser} disabled={loading} className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-teal-200 flex items-center gap-2 text-lg">
                      {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Video className="h-5 w-5" />}
                      {loading ? 'Starting…' : 'Go Live from Browser'}
                    </button>
                  ) : (
                    <button onClick={startStreamOBS} disabled={loading} className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2 text-lg">
                      {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Play className="h-5 w-5" />}
                      {loading ? 'Creating…' : 'Create OBS Stream'}
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isLive ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'}`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`} />
                      {isLive ? 'LIVE' : 'Connecting…'}
                    </div>
                    {streamInfo?.stream?.title && <span className="text-gray-600 font-medium">{streamInfo.stream.title}</span>}
                  </div>

                  {/* Browser broadcast: local preview + controls */}
                  {webcamLive && (
                    <>
                      <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
                        <video ref={localVideoRef} muted playsInline className="w-full" style={{ aspectRatio: '16/9' }} />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button onClick={toggleScreenShare} className="border border-gray-200 hover:border-teal text-gray-700 font-medium py-2.5 px-5 rounded-xl flex items-center gap-2">
                          <MonitorUp className="h-4 w-4" /> {sharingScreen ? 'Switch back to camera' : 'Share screen'}
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Share with your community:</span>
                        <code className="text-sm text-gray-800 flex-1 truncate">{watchUrl}</code>
                        <button onClick={() => copyToClipboard(watchUrl, 'watch')} className="p-2 hover:bg-gray-200 rounded-lg">{copied === 'watch' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}</button>
                      </div>
                    </>
                  )}

                  {/* OBS mode: RTMP + key */}
                  {adminStream && !webcamLive && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">RTMP URL</label>
                          <div className="flex items-center gap-2"><code className="text-sm text-gray-800 flex-1 truncate">{adminStream.rtmpUrl}</code>
                            <button onClick={() => copyToClipboard(adminStream.rtmpUrl, 'rtmp')} className="p-2 hover:bg-gray-200 rounded-lg">{copied === 'rtmp' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}</button></div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Stream Key</label>
                          <div className="flex items-center gap-2"><code className="text-sm text-gray-800 flex-1 truncate">{showKey ? adminStream.streamKey : '••••••••••••••••'}</code>
                            <button onClick={() => setShowKey(!showKey)} className="p-2 hover:bg-gray-200 rounded-lg">{showKey ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}</button>
                            <button onClick={() => copyToClipboard(adminStream.streamKey, 'key')} className="p-2 hover:bg-gray-200 rounded-lg">{copied === 'key' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400" />}</button></div>
                        </div>
                      </div>
                      <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-gray-600">
                        <p className="font-medium text-teal mb-2">How to go live with OBS:</p>
                        <ol className="list-decimal list-inside space-y-1"><li>Open OBS → Settings → Stream → Service: Custom</li><li>Paste the RTMP URL as the Server</li><li>Paste the Stream Key</li><li>Click “Start Streaming” in OBS</li></ol>
                      </div>
                    </>
                  )}

                  {/* Viewer-facing live preview via Mux (for confirming what community sees) */}
                  {isLive && (streamInfo?.stream?.playbackId) && !webcamLive && (
                    <div className="rounded-xl overflow-hidden border border-gray-200"><MuxPlayerEmbed playbackId={streamInfo.stream.playbackId} /></div>
                  )}
                  {adminStream && (adminStream.simulcastCount || 0) > 0 && (
                    <p className="text-xs text-gray-500">Also restreaming to {adminStream.simulcastCount} social destination(s).</p>
                  )}

                  <button onClick={stopStream} disabled={loading} className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Square className="h-5 w-5" />}{loading ? 'Stopping…' : 'End Stream'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {isLive && streamInfo?.stream?.playbackId ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-200 text-sm font-semibold"><div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" /> LIVE NOW</div>
                  <span className="text-gray-900 font-semibold text-lg">{streamInfo.stream.title}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"><MuxPlayerEmbed playbackId={streamInfo.stream.playbackId} /></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{streamInfo.stream.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {streamInfo.stream.startedAt && <span className="flex items-center gap-1"><Clock className="h-4 w-4" />Started {new Date(streamInfo.stream.startedAt).toLocaleTimeString()}</span>}
                      <span className="flex items-center gap-1"><Users className="h-4 w-4" />Watching now</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2"><MessageCircle className="h-5 w-5 text-teal" /> Live Chat</h3>
                    <div className="h-48 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">Chat coming soon</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
                <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6"><Radio className="h-10 w-10 text-teal" /></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">No live stream right now</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">Krystal isn&apos;t streaming at the moment. Sign up to get notified when the next session starts!</p>
                <button className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-teal-200 flex items-center gap-2 mx-auto"><Bell className="h-5 w-5" /> Notify Me When Live</button>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
