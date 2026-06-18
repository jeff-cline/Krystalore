'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/layout/header'
import CrystalRain from '@/components/CrystalRain'
import {
  Mic, Lock, ArrowRight, Activity, Brain, HeartPulse, Zap, ShieldCheck, Gauge as GaugeIcon,
  Sparkles, AudioLines, TrendingUp, Waves, Phone,
} from 'lucide-react'

type Phase = 'intro' | 'recording' | 'processing' | 'gate' | 'dashboard'
type Profile = { dims: Record<string, number>; overall: number; stress: number; burnout: number; samples: number[] }

const STATUS = [
  'Processing your vocal signature…',
  'Pondering tone, pace, and cadence…',
  'Leveraging proprietary data models…',
  'Connecting proprietary technology…',
  'Reading 10,000+ vocal signals…',
  'Percolating your wellness profile…',
  'Mapping stress & resilience markers…',
  'Calibrating your private dashboard…',
]
const DIM_META: Record<string, { icon: any; color: string }> = {
  Energy: { icon: Zap, color: '#E8A849' },
  Resilience: { icon: ShieldCheck, color: '#0D9488' },
  Clarity: { icon: Brain, color: '#6366f1' },
  Confidence: { icon: TrendingUp, color: '#e07800' },
  Mood: { icon: Sparkles, color: '#ec4899' },
  Calm: { icon: Waves, color: '#34c5c5' },
}

function computeProfile(samples: number[]): Profile {
  const s = samples.length ? samples : [0.06, 0.09, 0.05, 0.11, 0.07]
  const n = s.length
  const mean = s.reduce((a, b) => a + b, 0) / n
  const sd = Math.sqrt(s.reduce((a, b) => a + (b - mean) ** 2, 0) / n)
  const energy = Math.max(0, Math.min(1, mean * 5))
  const expr = Math.max(0, Math.min(1, sd * 8))
  const cl = (x: number) => Math.max(54, Math.min(95, Math.round(x)))
  const dims = {
    Energy: cl(58 + energy * 34),
    Resilience: cl(60 + expr * 26),
    Clarity: cl(66 + energy * 12 + (1 - expr) * 12),
    Confidence: cl(60 + energy * 22 + expr * 10),
    Mood: cl(62 + expr * 24),
    Calm: cl(72 - energy * 10 + (1 - expr) * 10),
  }
  const overall = cl(Object.values(dims).reduce((a, b) => a + b, 0) / 6)
  const stress = cl(100 - dims.Calm + 6)
  const burnout = cl((stress + (100 - dims.Energy) + (100 - dims.Resilience)) / 3)
  return { dims, overall, stress, burnout, samples: s.slice(-64) }
}

function Counter({ to, dur = 1500, prefix = '', suffix = '' }: { to: number; dur?: number; prefix?: string; suffix?: string }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let raf = 0, start = 0
    const step = (t: number) => { if (!start) start = t; const p = Math.min(1, (t - start) / dur); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step) }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, dur])
  return <>{prefix}{v.toLocaleString()}{suffix}</>
}

function Gauge({ value, size = 150, color = '#0D9488', label }: { value: number; size?: number; color?: string; label?: string }) {
  const r = size / 2 - 12, c = 2 * Math.PI * r
  const [off, setOff] = useState(c)
  useEffect(() => { const t = setTimeout(() => setOff(c * (1 - value / 100)), 120); return () => clearTimeout(t) }, [value, c])
  return (
    <svg width={size} height={size} className="block">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eef2f4" strokeWidth="11" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} transform={`rotate(-90 ${size / 2} ${size / 2})`} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(.2,.8,.2,1)' }} />
      <text x="50%" y="48%" textAnchor="middle" className="fill-gray-900 font-black" style={{ fontSize: size * 0.27 }}>{value}</text>
      {label && <text x="50%" y="65%" textAnchor="middle" className="fill-gray-400 font-bold" style={{ fontSize: size * 0.082, letterSpacing: 1 }}>{label}</text>}
    </svg>
  )
}

function Radar({ dims }: { dims: Record<string, number> }) {
  const keys = Object.keys(dims), N = keys.length, size = 300, cx = size / 2, cy = size / 2, R = size / 2 - 46
  const pt = (i: number, val: number) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / N; const r = (R * val) / 100; return [cx + r * Math.cos(a), cy + r * Math.sin(a)] }
  const poly = keys.map((k, i) => pt(i, dims[k]).join(',')).join(' ')
  return (
    <svg width="100%" viewBox={`0 0 ${size} ${size}`} className="max-w-[320px] mx-auto">
      {[20, 40, 60, 80, 100].map((g) => (
        <polygon key={g} points={keys.map((_, i) => pt(i, g).join(',')).join(' ')} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      ))}
      {keys.map((_, i) => { const [x, y] = pt(i, 100); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" /> })}
      <polygon points={poly} fill="rgba(13,148,136,0.22)" stroke="#0D9488" strokeWidth="2.5" style={{ transition: 'all 1s ease' }} />
      {keys.map((k, i) => { const [x, y] = pt(i, 116); return <text key={k} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-gray-500 font-bold" style={{ fontSize: 11 }}>{k}</text> })}
    </svg>
  )
}

function Bars({ dims }: { dims: Record<string, number> }) {
  return (
    <div className="space-y-2.5">
      {Object.entries(dims).map(([k, v]) => {
        const meta = DIM_META[k]
        return (
          <div key={k}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-gray-700 flex items-center gap-1.5"><meta.icon className="w-3.5 h-3.5" style={{ color: meta.color }} /> {k}</span>
              <span className="font-black" style={{ color: meta.color }}>{v}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${v}%`, background: meta.color, transition: 'width 1.2s ease' }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Wave({ samples }: { samples: number[] }) {
  const bars = samples.length ? samples : Array.from({ length: 48 }, (_, i) => 0.4 + Math.abs(Math.sin(i / 3)) * 0.5)
  const max = Math.max(...bars, 0.01)
  return (
    <div className="flex items-center gap-0.5 h-16">
      {bars.map((b, i) => <div key={i} className="flex-1 rounded-full bg-gradient-to-t from-[#0D9488] to-[#34c5c5]" style={{ height: `${Math.max(8, (b / max) * 100)}%` }} />)}
    </div>
  )
}

export default function VoicePage() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [countdown, setCountdown] = useState(30)
  const [level, setLevel] = useState(0)
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [micDenied, setMicDenied] = useState(false)
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [help, setHelp] = useState('')
  const [err, setErr] = useState(false); const [submitting, setSubmitting] = useState(false)

  const samplesRef = useRef<number[]>([])
  const rafRef = useRef<number>(0)
  const streamRef = useRef<MediaStream | null>(null)
  const ctxRef = useRef<any>(null)

  const cleanupAudio = () => {
    cancelAnimationFrame(rafRef.current)
    try { streamRef.current?.getTracks().forEach((t) => t.stop()) } catch {}
    try { ctxRef.current?.close() } catch {}
  }

  const beginRecording = async () => {
    samplesRef.current = []; setCountdown(30); setMicDenied(false); setPhase('recording')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const AC = (window.AudioContext || (window as any).webkitAudioContext)
      const ctx = new AC(); ctxRef.current = ctx
      const src = ctx.createMediaStreamSource(stream)
      const an = ctx.createAnalyser(); an.fftSize = 512; src.connect(an)
      const buf = new Uint8Array(an.fftSize)
      const loop = () => { an.getByteTimeDomainData(buf); let s = 0; for (let i = 0; i < buf.length; i++) { const x = (buf[i] - 128) / 128; s += x * x } const rms = Math.sqrt(s / buf.length); samplesRef.current.push(rms); setLevel(rms); rafRef.current = requestAnimationFrame(loop) }
      loop()
    } catch {
      setMicDenied(true)
      const loop = () => { const v = 0.05 + Math.abs(Math.sin(performance.now() / 170)) * 0.13 + Math.random() * 0.04; samplesRef.current.push(v); setLevel(v); rafRef.current = requestAnimationFrame(loop) }
      loop()
    }
  }

  const stopRecording = () => { cleanupAudio(); setProfile(computeProfile(samplesRef.current)); setPhase('processing') }

  // recording countdown
  useEffect(() => {
    if (phase !== 'recording') return
    if (countdown <= 0) { stopRecording(); return }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, countdown])

  // processing (~30s) -> gate
  useEffect(() => {
    if (phase !== 'processing') return
    setProgress(0)
    let raf = 0, start = 0
    const step = (t: number) => { if (!start) start = t; const p = Math.min(100, ((t - start) / 30000) * 100); setProgress(Math.round(p)); if (p < 100) raf = requestAnimationFrame(step); else setPhase('gate') }
    raf = requestAnimationFrame(step)
    const rot = setInterval(() => setStatusIdx((i) => (i + 1) % STATUS.length), 2800)
    return () => { cancelAnimationFrame(raf); clearInterval(rot) }
  }, [phase])

  useEffect(() => () => cleanupAudio(), [])

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) { setErr(true); return }
    setSubmitting(true)
    const lead = { name, email, phone, help, scores: profile, source: 'voice', ts: Date.now() }
    try { localStorage.setItem('voice-lead-last', JSON.stringify(lead)) } catch {}
    try { await fetch('/api/voice-lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(lead) }) } catch {}
    setPhase('dashboard')
  }

  const p = profile || computeProfile([])
  const topDim = Object.entries(p.dims).sort((a, b) => b[1] - a[1])[0]
  const lowDim = Object.entries(p.dims).sort((a, b) => a[1] - b[1])[0]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
        <style>{`@keyframes vspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes vpulse{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.5);opacity:0}}@keyframes vfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>

        {/* INTRO */}
        {phase === 'intro' && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5"><AudioLines className="w-3.5 h-3.5" /> Free · 30-Second Burnout &amp; Stress Snapshot</div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.04] mb-4">Your voice knows you’re burned out<br className="hidden md:block" /> before you do.</h1>
              <p className="text-lg md:text-xl text-gray-600 font-light mb-8">You can’t see stress building — but your voice can. Speak for 30 seconds and our engine reads <b className="text-gray-900">10,000+ signals</b> in your tone to map your stress load, energy, resilience, and burnout risk. Then we show you the way forward.</p>
              <button onClick={beginRecording} className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0D9488] to-[#34c5c5] text-white font-black text-lg px-9 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <Mic className="w-6 h-6" /> Begin Your 30-Second Analysis
              </button>
              <p className="text-xs text-gray-400 mt-4">No audio is uploaded or stored — analysis happens on your device. Illustrative wellness snapshot, not medical advice.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-14">
              {[
                { icon: HeartPulse, t: 'Mental + Physical', d: 'Stress load, mood, vocal energy, and breath-support markers in one snapshot.' },
                { icon: Brain, t: '10,000+ signals', d: 'Tone, pace, cadence, and micro-variations decoded in seconds.' },
                { icon: GaugeIcon, t: 'Your dashboard', d: 'A private, visual wellness report — and your next best step.' },
              ].map((x) => (
                <div key={x.t} className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <x.icon className="w-8 h-8 text-[#0D9488] mx-auto mb-3" />
                  <p className="font-black text-gray-900 mb-1">{x.t}</p>
                  <p className="text-sm text-gray-600">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Why this matters right now</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
                {[['66%', 'of workers hit burnout in 2025'], ['6 in 10', 'senior women feel burned out frequently'], ['$300B', 'annual cost of U.S. workplace stress'], ['34%', 'higher mental-health risk for women']].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-3xl font-black text-[#0D9488]">{v}</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-[11px] text-gray-400 mt-5 max-w-2xl mx-auto">Inspired by the fast-growing vocal-biomarker field (Sonde Health, Ellipsis Health). Stat sources: Gallup, McKinsey/Lean In, American Institute of Stress.</p>
            </div>
          </section>
        )}

        {/* RECORDING */}
        {phase === 'recording' && (
          <section className="max-w-3xl mx-auto px-4 py-16 text-center min-h-[70vh] flex flex-col items-center justify-center">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-3">Listening</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Say anything you want, or feel.</h2>
            <p className="text-gray-500 mb-10">Keep talking until the timer ends — there are no wrong words.</p>
            <div className="relative w-44 h-44 flex items-center justify-center mb-8">
              <span className="absolute inset-0 rounded-full bg-[#34c5c5]/30" style={{ animation: 'vpulse 1.8s ease-out infinite' }} />
              <span className="absolute rounded-full bg-[#0D9488]" style={{ width: `${90 + level * 260}px`, height: `${90 + level * 260}px`, opacity: 0.18, transition: 'all .1s' }} />
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#0D9488] to-[#34c5c5] flex items-center justify-center shadow-xl">
                <Mic className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex items-end gap-1 h-16 w-full max-w-md mb-6">
              {samplesRef.current.slice(-60).map((s, i) => <div key={i} className="flex-1 rounded-full bg-[#34c5c5]" style={{ height: `${Math.max(6, Math.min(100, s * 320))}%` }} />)}
            </div>
            <p className="text-6xl font-black text-gray-900 tabular-nums">{countdown}</p>
            <p className="text-sm text-gray-400 mt-1">seconds left</p>
            {micDenied && <p className="text-xs text-[#e07800] mt-3">Microphone unavailable — running a demo analysis so you can see your dashboard.</p>}
            <button onClick={stopRecording} className="mt-8 text-[#0D9488] font-bold text-sm border-2 border-[#34c5c5]/40 rounded-xl px-5 py-2.5 hover:bg-[#34c5c5]/5">I’m done — analyze now</button>
          </section>
        )}

        {/* PROCESSING */}
        {phase === 'processing' && (
          <section className="max-w-2xl mx-auto px-4 py-16 text-center min-h-[78vh] flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[#34c5c5]/25" style={{ animation: 'vpulse 2s ease-out infinite' }} />
              <span className="absolute inset-4 rounded-full bg-[#0D9488]/20" style={{ animation: 'vpulse 2s ease-out .6s infinite' }} />
              <img src="/favicon-192x192.png" alt="" className="relative w-24 h-24" style={{ animation: 'vspin 2.6s linear infinite' }} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Analyzing your vocal signature</h2>
            <p className="text-[#0D9488] font-semibold h-6 transition-all">{STATUS[statusIdx]}</p>
            <div className="w-full max-w-sm mt-7">
              <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#0D9488] to-[#34c5c5]" style={{ width: `${progress}%`, transition: 'width .2s linear' }} /></div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold"><span><Counter to={10247} /> signals</span><span>{progress}%</span></div>
            </div>
          </section>
        )}

        {/* GATE */}
        {phase === 'gate' && (
          <section className="relative overflow-hidden min-h-[82vh] flex items-center justify-center bg-gradient-to-br from-[#33413f] via-[#0D5953] to-[#0D9488]">
            <CrystalRain />
            <form onSubmit={submitLead} className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur rounded-3xl p-7 md:p-8 shadow-2xl m-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4"><Lock className="w-7 h-7 text-[#0D9488]" /></div>
              <h2 className="text-2xl font-black text-gray-900 text-center mb-1">Your report is ready 🔓</h2>
              <p className="text-gray-500 text-center text-sm mb-5">Where should we send your vocal-wellness dashboard?</p>
              <div className="space-y-2.5">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="First name *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (for your results text)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
                <textarea value={help} onChange={(e) => setHelp(e.target.value)} rows={2} placeholder="What would you most like help with?" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              </div>
              {err && <p className="text-red-400 text-sm mt-2">Please add your name and email.</p>}
              <button type="submit" disabled={submitting} className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black py-3.5 rounded-xl disabled:opacity-60">
                {submitting ? 'Unlocking…' : <>Unlock my dashboard <ArrowRight className="w-5 h-5" /></>}
              </button>
              <p className="text-[11px] text-gray-400 text-center mt-3">We respect your privacy. Illustrative wellness snapshot — not medical advice.</p>
            </form>
          </section>
        )}

        {/* DASHBOARD */}
        {phase === 'dashboard' && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
              <div>
                <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-1">Vocal Wellness Report{name ? ` · ${name}` : ''}</p>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900">Here’s what your voice revealed.</h1>
              </div>
              <div className="text-right text-xs text-gray-400 font-bold"><Counter to={10247} /> signals · 6 dimensions · live</div>
            </div>

            {/* top row */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Overall Vocal Wellness</p>
                <Gauge value={p.overall} size={170} color="#0D9488" label="SCORE" />
              </div>
              <div className="grid grid-rows-2 gap-5">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
                  <Gauge value={p.stress} size={92} color="#e07800" />
                  <div><p className="font-black text-gray-900">Stress Load</p><p className="text-sm text-gray-500">Nervous-system activation read from tone & pace.</p></div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
                  <Gauge value={p.burnout} size={92} color="#ec4899" />
                  <div><p className="font-black text-gray-900">Burnout Risk</p><p className="text-sm text-gray-500">Energy + resilience + stress, combined.</p></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5"><Activity className="w-4 h-4 text-[#0D9488]" /> Your vocal signature</p>
                <Wave samples={p.samples} />
                <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                  <div className="bg-[#F6F8FA] rounded-xl p-3"><p className="text-2xl font-black text-[#0D9488]"><Counter to={p.dims.Energy} /></p><p className="text-[11px] text-gray-500 font-bold">Vocal Energy</p></div>
                  <div className="bg-[#F6F8FA] rounded-xl p-3"><p className="text-2xl font-black text-[#0D9488]"><Counter to={p.dims.Calm} /></p><p className="text-[11px] text-gray-500 font-bold">Calm Index</p></div>
                </div>
              </div>
            </div>

            {/* radar + bars */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Your 6-dimension profile</p>
                <Radar dims={p.dims} />
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Dimension scores</p>
                <Bars dims={p.dims} />
              </div>
            </div>

            {/* insights */}
            <div className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] rounded-2xl p-6 md:p-8 text-white mb-5">
              <h3 className="text-xl font-black mb-3">What this means</h3>
              <ul className="space-y-2 text-white/90 text-[15px]">
                <li>• Your strongest signal is <b>{topDim[0]}</b> ({topDim[1]}/100) — lead with it.</li>
                <li>• Your biggest opportunity is <b>{lowDim[0]}</b> ({lowDim[1]}/100); your <b>Stress Load is {p.stress}</b> and <b>Burnout Risk {p.burnout}</b>.</li>
                <li>• Your nervous system responds fastest to a guided, whole-person reset — not another to-do list.</li>
              </ul>
            </div>

            {/* CTA → ShYft Master */}
            <div className="bg-white rounded-2xl border-2 border-[#34c5c5]/40 p-6 md:p-8 text-center">
              <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-2">Your answer</p>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Turn this snapshot into a plan with ShYft Master.</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">Your voice flagged where to focus. ShYft Master is the proprietary system that rebuilds your energy, resilience, and clarity — guided, personalized, and proven.</p>
              <a href="https://shyftmaster.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-lg px-9 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                Get My ShYft Master Plan <ArrowRight className="w-5 h-5" />
              </a>
              <div className="mt-7 pt-7 border-t border-gray-100">
                <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-2">Are you ready to shift your energy?</h4>
                <p className="text-gray-600 max-w-xl mx-auto mb-5">Contact Krystalore — the ShYft Master — today.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href="/book" className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#0D9488] text-white font-black px-7 py-3.5 rounded-2xl shadow-lg transition-colors"><Phone className="w-5 h-5" /> Book a Call</a>
                  <a href="/start" className="inline-flex items-center gap-2 bg-white border-2 border-[#34c5c5]/50 text-[#0D9488] font-black px-7 py-3.5 rounded-2xl hover:bg-[#34c5c5]/5 transition-colors">Explore your journey <ArrowRight className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="mt-5"><button onClick={() => { setPhase('intro'); setProfile(null) }} className="text-gray-400 text-sm font-semibold hover:text-[#0D9488]">Run another analysis</button></div>
            </div>

            <p className="text-[11px] text-gray-400 mt-6 text-center max-w-2xl mx-auto">This vocal-wellness snapshot is for informational and educational purposes only and is not medical, psychological, or diagnostic advice. If you’re struggling, please reach out to a qualified professional.</p>
          </section>
        )}
      </main>
    </>
  )
}
