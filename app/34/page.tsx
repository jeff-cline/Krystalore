'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Wind, Activity, Sparkles, ShieldCheck, Lock, Play, ArrowRight,
  Phone, Clock, Check, X, Headphones, Mic, Heart,
} from 'lucide-react'

const SPOTIFY_SHOW_ID = '6acctiaNwQqFy8HVuiXlN7'

type Step = { n: number; mins: number; name: string; tag: string; icon: any; color: string; desc: string; items: string[] }
type Series = { name: string; tag: string; icon: any; desc: string; free?: boolean }

const STEPS: Step[] = [
  { n: 1, mins: 2, name: 'Arrive', tag: 'Meditate', icon: Wind, color: '#34c5c5',
    desc: 'Two minutes of mindful meditation — set your intention, name your goal, and drop into gratitude. You start the day on your own terms, before anyone else needs you.',
    items: ['Mindful meditation', 'Intention & goal setting', 'Gratitude practice'] },
  { n: 2, mins: 30, name: 'Move', tag: 'Movement', icon: Activity, color: '#0D9488',
    desc: 'Thirty minutes of mindful movement — stretching, breath work, and nervous-system regulation — finishing with a cool-down and real rest and recovery.',
    items: ['Mindful movement & stretching', 'Breath work', 'Nervous-system regulation', 'Cool-down, rest & recovery'] },
  { n: 3, mins: 2, name: 'Reflect', tag: 'Celebrate', icon: Sparkles, color: '#E8A849',
    desc: 'Two minutes of celebration and reflection — a feedback loop for your brain to register everything you accomplished, and a daily reflection to close the day strong.',
    items: ['Celebrate the win', 'Daily reflection', 'Feedback loop for the brain'] },
]

const SERIES: Series[] = [
  { name: 'Just Breathe', tag: 'For the High Performer', icon: Wind, free: true,
    desc: 'Short, powerful guided meditations to begin your practice — for the leader who needs peace in three minutes.' },
  { name: 'Four Seasons of Change', tag: 'Healing & New Beginnings', icon: Sparkles,
    desc: 'Meditations for identity shifts, healing, and stepping fully into your next chapter.' },
  { name: 'For Athletes', tag: 'Power & Performance', icon: Activity,
    desc: 'Focus, recovery, and mindset meditations for the body that performs.' },
  { name: 'For Veterans', tag: 'Resilience & Reset', icon: ShieldCheck,
    desc: 'Grounding and steadiness for those who have carried the most.' },
]

const POURS = ['Their family', 'Their fitness', 'Their business', 'Their community', 'Their job']

function SpotifyPlayer({ compact = false }: { compact?: boolean }) {
  return (
    <iframe
      title="Just Breathe meditations"
      src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
      width="100%" height={compact ? 152 : 232} frameBorder="0" allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
      style={{ borderRadius: 12 }}
    />
  )
}

export default function ThirtyFourPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [help, setHelp] = useState('')
  const [err, setErr] = useState(false); const [submitting, setSubmitting] = useState(false)

  useEffect(() => { try { if (localStorage.getItem('34-unlocked') === '1') setUnlocked(true) } catch {} }, [])

  const submitGate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) { setErr(true); return }
    setSubmitting(true)
    const lead = { name, email, phone, help, source: '34-minute-method', ts: Date.now() }
    try { localStorage.setItem('34-lead-last', JSON.stringify(lead)) } catch {}
    try { await fetch('/api/voice-lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(lead) }) } catch {}
    try { localStorage.setItem('34-unlocked', '1') } catch {}
    setUnlocked(true); setSubmitting(false); setGateOpen(false)
    setTimeout(() => { document.getElementById('meditations')?.scrollIntoView({ behavior: 'smooth' }) }, 100)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Heart className="w-3.5 h-3.5" /> The Ultimate Self-Love &amp; Self-Trust Practice
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-[1.05]">The 34-Minute Mindful Method</h1>
                <p className="text-lg md:text-xl text-gray-600 font-light mb-7">For the one who runs on empty and still pours into everyone else. <b className="text-gray-900">Three steps. Thirty-four minutes.</b> Just <b className="text-gray-900">2% of your day</b> — and the most powerful 2% you will ever give yourself.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#method" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"><Play className="w-5 h-5" /> See the Method</a>
                  <a href="/voice" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-black px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"><Mic className="w-5 h-5" /> Free Voice Analyzer</a>
                </div>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0D9488]" /> You set the pace. Nothing is forced. This is for you.</p>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image src="https://66x17tzw9x.ufs.sh/f/WajS70ZPD48mbd5aZXEPMWOdI2tZTychSL6jHBKm47XinweF" alt="Krystalore Crews — the 34-Minute Mindful Method" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* 2% BAND */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] py-14 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs mb-2">The math of self-love</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">You have 1,440 minutes in a day.<br className="hidden sm:block" /> Give yourself 34.</h2>
            <div className="inline-flex items-baseline gap-3 bg-white/10 rounded-2xl px-8 py-5 ring-1 ring-white/20">
              <span className="text-5xl md:text-6xl font-black text-[#E8A849]">2%</span>
              <span className="text-left text-white/85 text-sm font-semibold">of your day —<br />the 2% that pours<br />back into you.</span>
            </div>
            <p className="text-white/80 mt-6 max-w-xl mx-auto">It is the best, most impactful, most powerful 2% you can spend. The one practice that fills you, so you can keep filling everyone else.</p>
          </div>
        </section>

        {/* THE METHOD — 3 STEPS */}
        <section id="method" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">The method</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Three steps. Thirty-four minutes.</h2>
            <p className="text-gray-600 mt-3">Meditate, move, reflect. A simple daily flow — <b className="text-gray-900">2 + 30 + 2</b> — designed for the busy person who needs it most.</p>
          </div>

          {/* proportion bar */}
          <div className="flex rounded-full overflow-hidden mb-8 ring-1 ring-gray-200 h-3">
            <div style={{ width: '6%', background: '#34c5c5' }} title="2 min" />
            <div style={{ width: '88%', background: '#0D9488' }} title="30 min" />
            <div style={{ width: '6%', background: '#E8A849' }} title="2 min" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.color }}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider" style={{ color: s.color }}>Step {s.n} · {s.tag}</span>
                    <p className="text-xl font-black text-gray-900 leading-tight">{s.name} <span className="text-gray-400 text-sm font-bold">{s.mins} min</span></p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mt-auto">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 flex-shrink-0" style={{ color: s.color }} />{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-[#F6F8FA] py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 order-2 lg:order-1">
                <Image src="/images/go9/community-hands.jpg" alt="A self-love and self-trust practice for busy people" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">Who it&rsquo;s for</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">For the one who pours into everything else.</h2>
                <p className="text-gray-600 mb-5">You give yourself to everyone and everything — and somewhere in there, you forgot you were on the list too. The 34-Minute Mindful Method is a <b className="text-gray-900">self-love and self-trust practice</b>: regulate your nervous system, rebuild your confidence, and meet your busy life with intention.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {POURS.map((p) => (
                    <span key={p} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm font-semibold text-gray-700"><Heart className="w-3.5 h-3.5 text-[#e07800]" /> {p}</span>
                  ))}
                </div>
                <p className="text-gray-600">Become more intentional with <b className="text-gray-900">yourself</b>, the relationship you have with yourself, with others, in your fitness, your business, your relationships, your marriage — your whole life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VOICE ANALYZER / TECH */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-3xl bg-gradient-to-br from-[#34c5c5]/12 to-[#E8A849]/12 border border-[#34c5c5]/30 p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#e07800] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4"><Sparkles className="w-3.5 h-3.5" /> New · Tech for the busy mind</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Not sure where to start? Let your voice tell you.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">We leveraged technology for the busy person: a <b className="text-gray-900">30-second voice analyzer</b> that reads how stressed and burned out you really are — and hands you a real assessment and your very next step.</p>
            <a href="/voice" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-lg px-9 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"><Mic className="w-5 h-5" /> Free Voice Analyzer</a>
          </div>
        </section>

        {/* JUST BREATHE MEDITATIONS */}
        <section id="meditations" className="bg-[#F6F8FA] py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">Start your practice · Just Breathe</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">A busy mind makes meditation hard. So we made it simple.</h2>
              <p className="text-gray-600 mt-3">When you first begin, sitting still is the hardest part. <b className="text-gray-900">Just Breathe</b> is a library of short, guided meditations — in series for high performers, for change, for athletes, and for veterans. The first is <b className="text-gray-900">free</b>; the rest open with one step below.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {SERIES.map((s) => {
                const accessible = s.free || unlocked
                return (
                  <div key={s.name} className={`rounded-2xl bg-white border p-6 ${accessible ? 'border-gray-200' : 'border-dashed border-[#34c5c5]/40'}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: accessible ? '#0D9488' : '#34c5c522' }}>
                        <s.icon className="w-6 h-6" style={{ color: accessible ? '#fff' : '#0D9488' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#0D9488]">{s.tag}</span>
                          {s.free && <span className="text-[10px] font-black bg-[#E8A849] text-white px-2 py-0.5 rounded-full">FREE</span>}
                          {!accessible && <span className="inline-flex items-center gap-1 text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"><Lock className="w-3 h-3" /> LOCKED</span>}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mt-1">{s.name}</h3>
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {s.free ? (
                        <SpotifyPlayer compact />
                      ) : accessible ? (
                        <a href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-bold text-sm rounded-xl px-4 py-2 transition-colors">
                          <Headphones className="w-4 h-4" /> Listen in the library
                        </a>
                      ) : (
                        <button onClick={() => setGateOpen(true)} className="inline-flex items-center gap-2 text-white font-bold text-sm bg-gradient-to-r from-[#E8A849] to-[#e07800] rounded-xl px-4 py-2 shadow hover:shadow-md transition-shadow">
                          <Lock className="w-4 h-4" /> Unlock to listen
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {unlocked && (
              <div className="mt-8 bg-white rounded-2xl border-2 border-[#0D9488]/30 p-6 md:p-7">
                <p className="text-[#0D9488] font-black flex items-center gap-2 mb-3"><Check className="w-5 h-5" /> Every series is unlocked.</p>
                <p className="text-gray-600 text-sm mb-4">Listen to the full Just Breathe library free, and Krystalore will email you the guided 34-minute sequence.</p>
                <SpotifyPlayer />
              </div>
            )}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#E8A849] to-[#e07800] py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Give yourself the 2%.</h2>
            <p className="text-white/90 mb-7 max-w-xl mx-auto">Start with your free voice analyzer and your first Just Breathe meditation today. When you&rsquo;re ready to go deeper, Krystalore will meet you there.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/voice" className="inline-flex items-center justify-center gap-2 bg-white text-[#e07800] font-black px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"><Mic className="w-5 h-5" /> Free Voice Analyzer</a>
              <a href="/book" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/50 text-white font-black px-7 py-4 rounded-2xl hover:bg-white/25 transition-colors"><Phone className="w-5 h-5" /> Book a Call</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* LEAD GATE */}
      {gateOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4" onClick={() => setGateOpen(false)}>
          <form onSubmit={submitGate} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl p-7 md:p-8 w-full max-w-md shadow-2xl relative">
            <button type="button" onClick={() => setGateOpen(false)} className="absolute top-4 right-4 text-gray-300 hover:text-gray-500"><X className="w-5 h-5" /></button>
            <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4"><Lock className="w-7 h-7 text-[#0D9488]" /></div>
            <h2 className="text-2xl font-black text-gray-900 text-center mb-1">Unlock every meditation series</h2>
            <p className="text-gray-500 text-center text-sm mb-5">Just Breathe is yours free. Tell me where to send the rest — Four Seasons of Change, Athletes, Veterans — and the full 34-minute sequence.</p>
            <div className="space-y-2.5">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="First name *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (for your results text)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <textarea value={help} onChange={(e) => setHelp(e.target.value)} rows={2} placeholder="What’s weighing on you right now? (optional)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
            </div>
            {err && <p className="text-red-400 text-sm mt-2">Please add your name and email.</p>}
            <button type="submit" disabled={submitting} className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black py-3.5 rounded-xl disabled:opacity-60">
              {submitting ? 'Unlocking…' : <>Unlock the meditations <ArrowRight className="w-5 h-5" /></>}
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-3">We respect your privacy. No spam — just your meditations and the occasional note from Krystalore.</p>
          </form>
        </div>
      )}
    </>
  )
}
