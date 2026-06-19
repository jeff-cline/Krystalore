'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Wind, Anchor, Activity, Heart, Sparkles, Mountain, Lock, Play, ArrowRight,
  Phone, ShieldCheck, Clock, Check, X, Headphones,
} from 'lucide-react'

const SPOTIFY_SHOW_ID = '6acctiaNwQqFy8HVuiXlN7'

type Movement = { n: number; name: string; tag: string; mins: string; icon: any; desc: string; free?: boolean }

const MOVEMENTS: Movement[] = [
  { n: 1, name: 'Just Breathe', tag: 'Arrive', mins: '5 min', icon: Wind, free: true,
    desc: 'Before anything changes, your body has to feel safe. We start with breath — slow, low, and yours — to tell your nervous system it can come down off high alert.' },
  { n: 2, name: 'Anchor', tag: 'Your Inner Resource', mins: '6 min', icon: Anchor,
    desc: 'Build a felt sense of safety you can return to anytime — a steady place inside you that the hardest day cannot reach.' },
  { n: 3, name: 'Body Truth', tag: 'Somatic Sensing', mins: '6 min', icon: Activity,
    desc: 'Your body keeps the score — and the wisdom. A gentle, choice-full scan that lets sensation speak without ever flooding you.' },
  { n: 4, name: 'Welcome', tag: 'Feeling & Its Opposite', mins: '6 min', icon: Heart,
    desc: 'Meet what is here — the tension and the ease, the grief and the relief — and feel your nervous system learn it can hold both at once.' },
  { n: 5, name: 'Rewrite', tag: 'The Story Underneath', mins: '6 min', icon: Sparkles,
    desc: 'The belief that has been running you — “I have to earn rest,” “I am too much” — meets its truer counter-story. This is where identity shifts.' },
  { n: 6, name: 'Whole', tag: 'Rise & Integrate', mins: '5 min', icon: Mountain,
    desc: 'Drop beneath the noise into the steady joy that was never gone — and carry it back into your real life: your work, your people, your mission.' },
]

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
    setTimeout(() => { document.getElementById('movements')?.scrollIntoView({ behavior: 'smooth' }) }, 100)
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
                  <Clock className="w-3.5 h-3.5" /> Somatic · Trauma-Informed · 34 Minutes
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-[1.05]">The 34-Minute Mindful Method</h1>
                <p className="text-lg md:text-xl text-gray-600 font-light mb-7">Mind the mind. A somatic, trauma-informed nervous-system reset in <b className="text-gray-900">6 movements</b> and just <b className="text-gray-900">34 minutes</b> — built for the woman who carries everything. <span className="text-[#0D9488] font-semibold">Start free with Just Breathe.</span></p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#movements" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"><Play className="w-5 h-5" /> Listen Free Now</a>
                  <button onClick={() => setGateOpen(true)} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#34c5c5]/50 text-[#0D9488] font-black px-7 py-4 rounded-2xl hover:bg-[#34c5c5]/5 transition-colors"><Lock className="w-5 h-5" /> Unlock the Full Method</button>
                </div>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0D9488]" /> You set the pace. Nothing is forced. Stop any time.</p>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image src="/images/scraped/krystalore-coaching-headshot.jpg" alt="Krystalore Crews — somatic, trauma-informed mindfulness coach" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* TRUMPS THE 10-STEP */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">Why this method</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">The depth of a 10-step protocol. The time your life actually has.</h2>
            <p className="text-gray-600 mt-3">The clinical protocols work — but 10 steps and 45 minutes weren&rsquo;t built for a woman running a company, a household, and a mission. So Krystalore took the same evidence-based bones — breath, body, emotion, belief, integration — made them somatic and trauma-informed, and gave them back to you in 34 minutes.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 p-6 bg-[#F6F8FA]">
              <p className="font-black text-gray-500 mb-3">The old way</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {['10 steps to remember', '45+ minutes you don’t have', 'Clinical, one-size language', 'Designed for a quiet room and no kids'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#34c5c5]/40 p-6 bg-white shadow-sm">
              <p className="font-black text-[#0D9488] mb-3">The 34-Minute Mindful Method</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {['6 movements, one flow', '34 minutes — or one movement on a break', 'Somatic & trauma-informed: you stay in choice', 'Built for real, loud, beautiful lives'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0D9488]" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* THE MOVEMENTS */}
        <section id="movements" className="bg-[#F6F8FA] py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">Six movements · 34 minutes</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">One nervous-system reset, start to finish.</h2>
              <p className="text-gray-600 mt-3">Movement 1 is <b className="text-gray-900">free — listen right now.</b> The other five open with one step below. Trauma-informed throughout: you choose how far you go, and you can stop at any breath.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {MOVEMENTS.map((m) => {
                const accessible = m.free || unlocked
                return (
                  <div key={m.n} className={`relative rounded-2xl bg-white border p-6 ${accessible ? 'border-gray-200' : 'border-dashed border-[#34c5c5]/40'}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: accessible ? '#0D9488' : '#34c5c522' }}>
                        <m.icon className="w-6 h-6" style={{ color: accessible ? '#fff' : '#0D9488' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#0D9488]">Movement {m.n}</span>
                          <span className="text-[11px] text-gray-400">· {m.mins}</span>
                          {m.free && <span className="text-[10px] font-black bg-[#E8A849] text-white px-2 py-0.5 rounded-full">FREE</span>}
                          {!accessible && <span className="inline-flex items-center gap-1 text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"><Lock className="w-3 h-3" /> LOCKED</span>}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mt-1">{m.name} <span className="text-gray-400 font-semibold text-base">— {m.tag}</span></h3>
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* access area */}
                    <div className="mt-4">
                      {m.free ? (
                        <SpotifyPlayer compact />
                      ) : accessible ? (
                        <a href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0D9488] font-bold text-sm border border-[#34c5c5]/40 rounded-xl px-4 py-2 hover:bg-[#34c5c5]/5">
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
                <p className="text-[#0D9488] font-black flex items-center gap-2 mb-3"><Check className="w-5 h-5" /> Your full method is unlocked.</p>
                <p className="text-gray-600 text-sm mb-4">Listen to every movement free in the Just Breathe library. Krystalore will also email you the guided 34-minute sequence in order.</p>
                <SpotifyPlayer />
              </div>
            )}
          </div>
        </section>

        {/* TRAUMA-INFORMED CREDIBILITY */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image src="/images/go9/community-hands.jpg" alt="Somatic, trauma-informed mindfulness in community" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-2">Why somatic &amp; trauma-informed</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Healing your body can feel without flooding it.</h2>
              <div className="space-y-3 text-gray-600">
                <p>You can&rsquo;t think your way out of a body stuck on high alert. The 34-Minute Mindful Method works <b className="text-gray-900">bottom-up</b> — breath and sensation first — so your nervous system actually believes it&rsquo;s safe.</p>
                <p>Trauma-informed means you&rsquo;re never asked to relive anything. You titrate: small doses, your pace, always with an anchor to return to. That&rsquo;s the difference between feeling more and feeling <i>more in control.</i></p>
              </div>
              <p className="text-xs text-gray-400 mt-5">Wellness practice for self-regulation and reflection — not medical or psychological treatment. If you&rsquo;re in crisis, please reach out to a qualified professional.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Ready to shift your energy?</h2>
            <p className="text-white/85 mb-7 max-w-xl mx-auto">Start with Just Breathe today. When you&rsquo;re ready to go deeper, Krystalore — the ShYft Master — will meet you there.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/book" className="inline-flex items-center justify-center gap-2 bg-white text-[#0D9488] font-black px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"><Phone className="w-5 h-5" /> Book a Call</a>
              <a href="/start" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-black px-7 py-4 rounded-2xl hover:bg-white/20 transition-colors">Explore Your Journey <ArrowRight className="w-5 h-5" /></a>
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
            <h2 className="text-2xl font-black text-gray-900 text-center mb-1">Unlock all 6 movements</h2>
            <p className="text-gray-500 text-center text-sm mb-5">Movement 1 is yours free. Tell me where to send the other five — and the full 34-minute sequence.</p>
            <div className="space-y-2.5">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="First name *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (for your results text)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
              <textarea value={help} onChange={(e) => setHelp(e.target.value)} rows={2} placeholder="What’s weighing on you right now? (optional)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#34c5c5]" />
            </div>
            {err && <p className="text-red-400 text-sm mt-2">Please add your name and email.</p>}
            <button type="submit" disabled={submitting} className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black py-3.5 rounded-xl disabled:opacity-60">
              {submitting ? 'Unlocking…' : <>Unlock the full method <ArrowRight className="w-5 h-5" /></>}
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-3">We respect your privacy. No spam — just your meditations and the occasional note from Krystalore.</p>
          </form>
        </div>
      )}
    </>
  )
}
