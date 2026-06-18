'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Mic, Lock, ArrowRight, Activity, Brain, HeartPulse, Zap, ShieldCheck, Gauge as GaugeIcon,
  Target, Waves, Phone,
} from 'lucide-react'

// ── Her Next Mission palette (from hernextmission.org/assets/css/site.css) ──
const C = {
  paper: '#FFFFFF', ivory: '#FAF7EE', line: '#E5E0D2', lineStrong: '#C8BFA8',
  ink: '#0A0A14', inkSoft: '#4B4B57', inkMute: '#7E7E8A',
  navy: '#0E1A3D', navyDeep: '#050A22', navyBright: '#1F2D6A',
  purple: '#5B3FA8', purpleDeep: '#2A1A52', purpleSoft: '#8C77C7',
  gold: '#D4A537', goldSoft: '#F2D278', goldDeep: '#8C6618', goldGlow: '#FCEFC0',
}
const serif = { fontFamily: "'Fraunces', 'Cormorant Garamond', Georgia, serif" } as const
const goldBtn = { background: `linear-gradient(135deg, ${C.goldSoft} 0%, ${C.gold} 50%, ${C.goldDeep} 100%)`, color: C.navyDeep, boxShadow: '0 12px 32px rgba(212,165,55,.32)' } as const

type Phase = 'intro' | 'recording' | 'processing' | 'gate' | 'dashboard'
type Profile = { dims: Record<string, number>; overall: number; stress: number; recovery: number; samples: number[] }

const STATUS = [
  'Scanning vocal stress markers…',
  'Mapping resilience & recovery patterns…',
  'Reading 10,000+ readiness signals…',
  'Assessing steadiness under load…',
  'Finding true north…',
  'Gauging focus and drive…',
  'Calibrating your readiness profile…',
  'Percolating your private snapshot…',
]
const DIM_META: Record<string, { icon: any; color: string }> = {
  Readiness: { icon: Target, color: C.gold },
  Resilience: { icon: ShieldCheck, color: C.navy },
  Focus: { icon: Brain, color: C.purple },
  Steadiness: { icon: Waves, color: C.navyBright },
  Drive: { icon: Zap, color: C.goldDeep },
  Recovery: { icon: HeartPulse, color: C.purpleSoft },
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
    Readiness: cl(60 + energy * 20 + expr * 12),
    Resilience: cl(60 + expr * 26),
    Focus: cl(66 + energy * 12 + (1 - expr) * 12),
    Steadiness: cl(72 - energy * 10 + (1 - expr) * 12),
    Drive: cl(58 + energy * 34),
    Recovery: cl(62 + (1 - energy) * 14 + expr * 16),
  }
  const overall = cl(Object.values(dims).reduce((a, b) => a + b, 0) / 6)
  const stress = cl(100 - dims.Steadiness + 6)
  const recovery = cl((dims.Recovery + dims.Resilience + dims.Steadiness) / 3)
  return { dims, overall, stress, recovery, samples: s.slice(-64) }
}

function Counter({ to, dur = 1500 }: { to: number; dur?: number }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let raf = 0, start = 0
    const step = (t: number) => { if (!start) start = t; const p = Math.min(1, (t - start) / dur); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step) }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, dur])
  return <>{v.toLocaleString()}</>
}

function Gauge({ value, size = 150, color = C.navy, label }: { value: number; size?: number; color?: string; label?: string }) {
  const r = size / 2 - 12, c = 2 * Math.PI * r
  const [off, setOff] = useState(c)
  useEffect(() => { const t = setTimeout(() => setOff(c * (1 - value / 100)), 120); return () => clearTimeout(t) }, [value, c])
  return (
    <svg width={size} height={size} className="block">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#EFEADD" strokeWidth="11" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} transform={`rotate(-90 ${size / 2} ${size / 2})`} style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(.2,.8,.2,1)' }} />
      <text x="50%" y="48%" textAnchor="middle" style={{ ...serif, fill: C.ink, fontWeight: 700, fontSize: size * 0.27 }}>{value}</text>
      {label && <text x="50%" y="65%" textAnchor="middle" style={{ fill: C.inkMute, fontWeight: 700, fontSize: size * 0.082, letterSpacing: 1 }}>{label}</text>}
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
        <polygon key={g} points={keys.map((_, i) => pt(i, g).join(',')).join(' ')} fill="none" stroke={C.line} strokeWidth="1" />
      ))}
      {keys.map((_, i) => { const [x, y] = pt(i, 100); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={C.line} strokeWidth="1" /> })}
      <polygon points={poly} fill="rgba(91,63,168,0.18)" stroke={C.purple} strokeWidth="2.5" style={{ transition: 'all 1s ease' }} />
      {keys.map((k, i) => { const [x, y] = pt(i, 116); return <text key={k} x={x} y={y} textAnchor="middle" dominantBaseline="middle" style={{ fill: C.inkSoft, fontWeight: 700, fontSize: 11 }}>{k}</text> })}
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
              <span className="font-bold flex items-center gap-1.5" style={{ color: C.inkSoft }}><meta.icon className="w-3.5 h-3.5" style={{ color: meta.color }} /> {k}</span>
              <span className="font-black" style={{ color: meta.color }}>{v}</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: '#EFEADD' }}>
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
      {bars.map((b, i) => <div key={i} className="flex-1 rounded-full" style={{ height: `${Math.max(8, (b / max) * 100)}%`, background: `linear-gradient(to top, ${C.navy}, ${C.gold})` }} />)}
    </div>
  )
}

const card = { background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16 } as const

export default function HnmPage() {
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

  useEffect(() => {
    if (phase !== 'recording') return
    if (countdown <= 0) { stopRecording(); return }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, countdown])

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
    const lead = { name, email, phone, help, scores: profile, source: 'veteran-first-responder', ts: Date.now() }
    try { localStorage.setItem('hnm-lead-last', JSON.stringify(lead)) } catch {}
    try { await fetch('/api/voice-lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(lead) }) } catch {}
    setPhase('dashboard')
  }

  const p = profile || computeProfile([])
  const topDim = Object.entries(p.dims).sort((a, b) => b[1] - a[1])[0]
  const lowDim = Object.entries(p.dims).sort((a, b) => a[1] - b[1])[0]

  const eyebrow = (text: string, light = false) => (
    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase mb-4" style={{ letterSpacing: '0.22em', color: light ? C.goldSoft : C.goldDeep }}>
      <span style={{ width: 18, height: 1, background: light ? C.goldSoft : C.gold, display: 'inline-block' }} /> {text}
    </div>
  )

  return (
    <main style={{ background: C.ivory, color: C.ink, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');@keyframes vspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes vpulse{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.5);opacity:0}}`}</style>

      {/* slim brand header */}
      <header style={{ background: C.paper, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="https://hernextmission.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
            <img src="/images/hnm/logo-mark.png" alt="" className="h-9 w-9 object-contain" />
            <span style={{ ...serif, color: C.navyDeep, fontWeight: 600, fontSize: 18, letterSpacing: '0.01em' }}>Her Next Mission</span>
          </a>
          <a href="https://hernextmission.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hidden sm:block" style={{ color: C.navyBright }}>hernextmission.org →</a>
        </div>
      </header>

      {/* INTRO */}
      {phase === 'intro' && (
        <>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                {eyebrow('From Service to Success')}
                <h1 style={{ ...serif, color: C.navyDeep, fontWeight: 600, lineHeight: 1.02, letterSpacing: '-0.02em' }} className="text-4xl md:text-6xl mb-5">Are you mission-ready — or running on fumes?</h1>
                <p className="text-lg md:text-xl mb-8" style={{ color: C.inkSoft }}>For women <b style={{ color: C.ink }}>Veterans and first responders</b>. Speak for 30 seconds and we read <b style={{ color: C.ink }}>10,000+ signals</b> in your voice to map your operational stress, resilience, focus, and recovery — then show you the way to your next mission.</p>
                <button onClick={beginRecording} className="inline-flex items-center gap-3 font-bold text-lg px-9 py-5 rounded-2xl transition-transform hover:-translate-y-0.5" style={goldBtn}>
                  <Mic className="w-6 h-6" /> Run My 30-Second Check
                </button>
                <p className="text-xs mt-4" style={{ color: C.inkMute }}>No audio is uploaded or stored — analysis happens on your device. An illustrative readiness snapshot, not a medical or psychological screening.</p>
              </div>
              <div className="relative">
                <div className="overflow-hidden shadow-2xl" style={{ borderRadius: 28, border: `1px solid ${C.lineStrong}` }}>
                  <img src="/images/scraped/leadership-event.jpg" alt="Women Veterans & first responders — leadership" className="w-full h-full object-cover" style={{ aspectRatio: '4/5' }} />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, t: 'Resilience + recovery', d: 'How steady you hold under load — and how fast you bounce back.' },
                { icon: Brain, t: '10,000+ signals', d: 'Tone, pace, cadence, and micro-variations decoded in seconds.' },
                { icon: GaugeIcon, t: 'Your readiness board', d: 'A private, visual snapshot — and your next move.' },
              ].map((x) => (
                <div key={x.t} className="p-6 text-center" style={card}>
                  <x.icon className="w-8 h-8 mx-auto mb-3" style={{ color: C.gold }} />
                  <p className="font-bold mb-1" style={{ ...serif, color: C.navyDeep, fontSize: 18 }}>{x.t}</p>
                  <p className="text-sm" style={{ color: C.inkSoft }}>{x.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <div className="p-6 md:p-8" style={{ ...card, background: C.navyDeep, border: 'none', borderRadius: 28 }}>
              <p className="text-center text-xs font-bold uppercase mb-5" style={{ letterSpacing: '0.18em', color: C.goldSoft }}>Why readiness matters for those who serve</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
                {[['1 in 3', 'first responders face high operational stress'], ['50%+', 'of trauma-exposed Veterans & responders report lasting stress'], ['5×', 'more likely to carry lasting stress than the public'], ['100%', 'of resilience is trainable — it is built, not born']].map(([v, l]) => (
                  <div key={l}>
                    <p style={{ ...serif, color: C.goldSoft, fontWeight: 600 }} className="text-3xl">{v}</p>
                    <p className="text-[11px] leading-snug mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>{l}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-[11px] mt-5 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>Inspired by the emerging vocal-biomarker field (Sonde Health, Ellipsis Health). Stat sources: SAMHSA, Ruderman Foundation, Nature.</p>
            </div>
          </section>
        </>
      )}

      {/* RECORDING */}
      {phase === 'recording' && (
        <section className="max-w-3xl mx-auto px-4 py-16 text-center min-h-[70vh] flex flex-col items-center justify-center">
          {eyebrow('Listening')}
          <h2 style={{ ...serif, color: C.navyDeep, fontWeight: 600 }} className="text-3xl md:text-4xl mb-2">Talk to me for 30 seconds.</h2>
          <p className="mb-10" style={{ color: C.inkSoft }}>Your day, a mission, what is on your mind — there are no wrong words.</p>
          <div className="relative w-44 h-44 flex items-center justify-center mb-8">
            <span className="absolute inset-0 rounded-full" style={{ background: 'rgba(212,165,55,0.28)', animation: 'vpulse 1.8s ease-out infinite' }} />
            <span className="absolute rounded-full" style={{ width: `${90 + level * 260}px`, height: `${90 + level * 260}px`, background: C.navy, opacity: 0.16, transition: 'all .1s' }} />
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-xl" style={{ background: `linear-gradient(135deg, ${C.navyBright}, ${C.navyDeep})` }}>
              <Mic className="w-12 h-12" style={{ color: C.goldSoft }} />
            </div>
          </div>
          <div className="flex items-end gap-1 h-16 w-full max-w-md mb-6">
            {samplesRef.current.slice(-60).map((s, i) => <div key={i} className="flex-1 rounded-full" style={{ height: `${Math.max(6, Math.min(100, s * 320))}%`, background: C.gold }} />)}
          </div>
          <p style={{ ...serif, color: C.navyDeep, fontWeight: 700 }} className="text-6xl tabular-nums">{countdown}</p>
          <p className="text-sm mt-1" style={{ color: C.inkMute }}>seconds left</p>
          {micDenied && <p className="text-xs mt-3" style={{ color: C.goldDeep }}>Microphone unavailable — running a demo analysis so you can see your readiness board.</p>}
          <button onClick={stopRecording} className="mt-8 font-bold text-sm rounded-xl px-5 py-2.5" style={{ color: C.navyBright, border: `2px solid ${C.lineStrong}` }}>I&rsquo;m done — analyze now</button>
        </section>
      )}

      {/* PROCESSING */}
      {phase === 'processing' && (
        <section className="px-4 py-16 text-center min-h-[78vh] flex flex-col items-center justify-center" style={{ background: `radial-gradient(circle at 50% 35%, ${C.navyBright} 0%, ${C.navyDeep} 60%)` }}>
          <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full" style={{ background: 'rgba(212,165,55,0.25)', animation: 'vpulse 2s ease-out infinite' }} />
            <span className="absolute inset-4 rounded-full" style={{ background: 'rgba(242,210,120,0.2)', animation: 'vpulse 2s ease-out .6s infinite' }} />
            <img src="/images/hnm/compass-true-north-clean.png" alt="" className="relative w-28 h-28 object-contain" style={{ animation: 'vspin 6s linear infinite' }} />
          </div>
          <h2 style={{ ...serif, color: '#fff', fontWeight: 600 }} className="text-2xl md:text-3xl mb-2">Assessing your readiness signature</h2>
          <p className="font-semibold h-6" style={{ color: C.goldSoft }}>{STATUS[statusIdx]}</p>
          <div className="w-full max-w-sm mt-7">
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.14)' }}><div className="h-full" style={{ width: `${progress}%`, background: `linear-gradient(to right, ${C.goldSoft}, ${C.gold})`, transition: 'width .2s linear' }} /></div>
            <div className="flex justify-between text-xs mt-2 font-bold" style={{ color: 'rgba(255,255,255,0.6)' }}><span><Counter to={10247} /> signals</span><span>{progress}%</span></div>
          </div>
        </section>
      )}

      {/* GATE */}
      {phase === 'gate' && (
        <section className="relative overflow-hidden min-h-[82vh] flex items-center justify-center" style={{ background: `radial-gradient(circle at 50% 0%, ${C.purpleDeep} 0%, ${C.navyDeep} 70%)` }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(212,165,55,0.16), transparent 55%)' }} />
          <form onSubmit={submitLead} className="relative z-10 w-full max-w-md m-4 p-7 md:p-8" style={{ background: C.paper, borderRadius: 28, boxShadow: '0 24px 60px rgba(5,10,34,0.5)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: C.goldGlow }}><Lock className="w-7 h-7" style={{ color: C.goldDeep }} /></div>
            <h2 style={{ ...serif, color: C.navyDeep, fontWeight: 600 }} className="text-2xl text-center mb-1">Your readiness board is ready</h2>
            <p className="text-center text-sm mb-5" style={{ color: C.inkSoft }}>Where should we send your results?</p>
            <div className="space-y-2.5">
              {[['First name *', name, setName, 'text'], ['Email *', email, setEmail, 'email'], ['Phone (for your results text)', phone, setPhone, 'tel']].map(([ph, val, set, type]: any) => (
                <input key={ph} value={val} onChange={(e) => set(e.target.value)} type={type} placeholder={ph} className="w-full px-4 py-3 rounded-xl outline-none" style={{ border: `1px solid ${C.line}`, background: C.ivory }} />
              ))}
              <textarea value={help} onChange={(e) => setHelp(e.target.value)} rows={2} placeholder="What would you most like help with?" className="w-full px-4 py-3 rounded-xl outline-none" style={{ border: `1px solid ${C.line}`, background: C.ivory }} />
            </div>
            {err && <p className="text-sm mt-2" style={{ color: '#b91c1c' }}>Please add your name and email.</p>}
            <button type="submit" disabled={submitting} className="w-full mt-4 inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl disabled:opacity-60" style={goldBtn}>
              {submitting ? 'Unlocking…' : <>Unlock my readiness board <ArrowRight className="w-5 h-5" /></>}
            </button>
            <p className="text-[11px] text-center mt-3" style={{ color: C.inkMute }}>We respect your privacy. An illustrative readiness snapshot — not medical or psychological advice.</p>
          </form>
        </section>
      )}

      {/* DASHBOARD */}
      {phase === 'dashboard' && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              {eyebrow(`Resilience & Readiness Check${name ? ` · ${name}` : ''}`)}
              <h1 style={{ ...serif, color: C.navyDeep, fontWeight: 600 }} className="text-3xl md:text-4xl">Here&rsquo;s where you stand.</h1>
            </div>
            <div className="text-right text-xs font-bold" style={{ color: C.inkMute }}><Counter to={10247} /> signals · 6 dimensions · live</div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-5">
            <div className="p-6 flex flex-col items-center justify-center" style={card}>
              <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: '0.12em', color: C.inkMute }}>Overall Readiness</p>
              <Gauge value={p.overall} size={170} color={C.navy} label="SCORE" />
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="p-5 flex items-center gap-4" style={card}>
                <Gauge value={p.stress} size={92} color={C.goldDeep} />
                <div><p className="font-bold" style={{ ...serif, color: C.navyDeep }}>Operational Stress Load</p><p className="text-sm" style={{ color: C.inkSoft }}>Nervous-system activation read from tone & pace.</p></div>
              </div>
              <div className="p-5 flex items-center gap-4" style={card}>
                <Gauge value={p.recovery} size={92} color={C.purple} />
                <div><p className="font-bold" style={{ ...serif, color: C.navyDeep }}>Recovery Capacity</p><p className="text-sm" style={{ color: C.inkSoft }}>How well you reset between the demands.</p></div>
              </div>
            </div>
            <div className="p-6" style={card}>
              <p className="text-xs font-bold uppercase mb-2 flex items-center gap-1.5" style={{ letterSpacing: '0.12em', color: C.inkMute }}><Activity className="w-4 h-4" style={{ color: C.gold }} /> Your vocal signature</p>
              <Wave samples={p.samples} />
              <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                <div className="rounded-xl p-3" style={{ background: C.ivory }}><p style={{ ...serif, color: C.navy, fontWeight: 700 }} className="text-2xl"><Counter to={p.dims.Drive} /></p><p className="text-[11px] font-bold" style={{ color: C.inkMute }}>Drive</p></div>
                <div className="rounded-xl p-3" style={{ background: C.ivory }}><p style={{ ...serif, color: C.navy, fontWeight: 700 }} className="text-2xl"><Counter to={p.dims.Steadiness} /></p><p className="text-[11px] font-bold" style={{ color: C.inkMute }}>Steadiness</p></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="p-6" style={card}>
              <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: '0.12em', color: C.inkMute }}>Your 6-dimension readiness profile</p>
              <Radar dims={p.dims} />
            </div>
            <div className="p-6" style={card}>
              <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: '0.12em', color: C.inkMute }}>Dimension scores</p>
              <Bars dims={p.dims} />
            </div>
          </div>

          <div className="p-6 md:p-8 mb-5 text-white" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.purpleDeep})`, borderRadius: 28 }}>
            <h3 style={{ ...serif, fontWeight: 600 }} className="text-xl mb-3">What this means</h3>
            <ul className="space-y-2 text-[15px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <li>• Your strongest asset is <b style={{ color: C.goldSoft }}>{topDim[0]}</b> ({topDim[1]}/100) — lead with it.</li>
              <li>• Your biggest opportunity is <b style={{ color: C.goldSoft }}>{lowDim[0]}</b> ({lowDim[1]}/100); your <b>Operational Stress Load is {p.stress}</b> with a <b>Recovery Capacity of {p.recovery}</b>.</li>
              <li>• Readiness is rebuilt with a guided mission — structured recovery, not white-knuckling it alone.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 md:p-8 text-center" style={{ ...card, border: `2px solid ${C.gold}`, borderRadius: 28 }}>
            {eyebrow('Your next mission')}
            <h3 style={{ ...serif, color: C.navyDeep, fontWeight: 600 }} className="text-2xl md:text-3xl mb-3">It&rsquo;s her turn — and it&rsquo;s yours.</h3>
            <p className="max-w-xl mx-auto mb-6" style={{ color: C.inkSoft }}>Her Next Mission is coaching, community, and clarity built for women who served. Your voice flagged where to focus — let&rsquo;s build the plan together.</p>
            <a href="https://hernextmission.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-lg px-9 py-4 rounded-2xl transition-transform hover:-translate-y-0.5" style={goldBtn}>
              Step Into Her Next Mission <ArrowRight className="w-5 h-5" />
            </a>
            <div className="mt-5 pt-5" style={{ borderTop: `1px solid ${C.line}` }}>
              <p className="text-sm mb-2" style={{ color: C.inkSoft }}>Want the proprietary system that rebuilds resilience &amp; recovery?</p>
              <a href="https://shyftmaster.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:underline" style={{ color: C.navyBright }}>Explore ShYft Master <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="mt-4"><button onClick={() => { setPhase('intro'); setProfile(null) }} className="text-sm font-semibold" style={{ color: C.inkMute }}>Run another check</button></div>
          </div>

          <div className="mt-6 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-4 py-2" style={{ color: C.goldDeep, background: C.goldGlow }}>
              <Phone className="w-4 h-4" /> In crisis? Dial 988, then press 1 — the Veterans Crisis Line.
            </div>
            <p className="text-[11px] mt-4" style={{ color: C.inkMute }}>This resilience &amp; readiness snapshot is for informational and educational purposes only and is not medical, psychological, or diagnostic advice. If you or someone you serve with is struggling, please reach out to a qualified professional or the resources above.</p>
          </div>
        </section>
      )}
    </main>
  )
}
