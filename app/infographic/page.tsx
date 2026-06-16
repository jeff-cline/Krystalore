import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Compass } from 'lucide-react'

const STAGES = [
  { n: 1, tier: 'Discover · Free', time: 'Day 1 · Free', items: ['Habit Tracker', 'Power Hour Coworking', 'Quizzes'], color: '#34c5c5', pos: { l: 8, t: 82 } },
  { n: 2, tier: 'Entry Events', time: 'Weeks 1–4', items: ['Vision Board Party', 'Bombshell Bootcamp', 'Rewrite Masterclass'], color: '#0D9488', pos: { l: 35, t: 60 } },
  { n: 3, tier: 'Core Programs', time: 'Months 1–3', items: ['Health Mastery', 'Beyond Limits Bootcamp', 'Courses'], color: '#E8A849', pos: { l: 63, t: 38 } },
  { n: 4, tier: 'Premium · VIP', time: '90 Days · Premium', items: ['Rise & Thrive Bundle', 'Costa Rica Retreat', 'Private Coaching'], color: '#e07800', pos: { l: 86, t: 15 } },
]
const PILLARS = ['Non-Profit · Her Next Mission', 'Corporate · Activate4Impact', 'Tech · R0cketship', 'Community · World Changers']

function Card({ s }: { s: typeof STAGES[number] }) {
  return (
    <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-4 w-[200px]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-7 h-7 rounded-full text-white font-black text-sm flex items-center justify-center" style={{ background: s.color }}>{s.n}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: s.color + '22', color: s.color }}>{s.time}</span>
      </div>
      <p className="font-black text-gray-900 text-sm leading-tight mb-1.5">{s.tier}</p>
      <ul className="space-y-0.5">
        {s.items.map((i) => <li key={i} className="text-[11px] text-gray-600 leading-snug">· {i}</li>)}
      </ul>
    </div>
  )
}

export default function Infographic() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/8 via-[#F6F8FA] to-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <div className="flex items-center gap-4 mb-5">
            <img src="/images/krystalore-crews-logo.png" alt="Krystalore" className="h-9 w-auto" />
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 hidden sm:block">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" fill className="object-cover object-top" sizes="48px" />
            </div>
          </div>
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-2">The buyer pathway</p>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.05] mb-3">From free to premium — one road, every door open.</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">Enter for free and climb the journey from discovery to the premium VIP experience — or drop in anywhere along the way.</p>
        </section>

        {/* DESKTOP — diagonal road */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <svg viewBox="0 0 1000 562" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M70,500 C 240,470 270,400 360,358 S 560,300 640,232 S 800,150 880,96" fill="none" stroke="#0D9488" strokeWidth="34" strokeLinecap="round" opacity="0.95" />
              <path d="M70,500 C 240,470 270,400 360,358 S 560,300 640,232 S 800,150 880,96" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="14 16" strokeLinecap="round" />
            </svg>
            {/* crystal at the start */}
            <img src="/favicon-192x192.png" alt="" className="absolute" style={{ left: '4%', top: '90%', width: 46, transform: 'translate(-50%,-50%)', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.2))' }} />
            {/* compass — bottom-right open space */}
            <div className="absolute" style={{ left: '90%', top: '82%', transform: 'translate(-50%,-50%)' }}>
              <div className="w-20 h-20 rounded-full bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center">
                <Compass className="w-11 h-11 text-[#0D9488]" />
              </div>
            </div>
            {STAGES.map((s) => (
              <div key={s.n} className="absolute" style={{ left: `${s.pos.l}%`, top: `${s.pos.t}%`, transform: 'translate(-50%,-50%)' }}>
                <Card s={s} />
              </div>
            ))}
            <span className="absolute text-xs font-bold uppercase tracking-wider text-gray-400" style={{ left: '2%', top: '99%' }}>Freemium</span>
            <span className="absolute text-xs font-bold uppercase tracking-wider text-[#e07800]" style={{ left: '88%', top: '2%' }}>Premium</span>
          </div>
        </section>

        {/* MOBILE — stacked */}
        <section className="md:hidden px-4 pb-2">
          <div className="relative pl-6 space-y-4">
            <div className="absolute left-2 top-2 bottom-2 w-1 rounded bg-gradient-to-b from-[#34c5c5] to-[#e07800]" />
            {STAGES.map((s) => (
              <div key={s.n} className="relative">
                <span className="absolute -left-[1.15rem] top-3 w-4 h-4 rounded-full ring-2 ring-white" style={{ background: s.color }} />
                <Card s={s} />
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-xs mb-3">The four pillars wrap the journey</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {PILLARS.map((p) => (
              <div key={p} className="rounded-xl bg-white border border-gray-200 p-3 text-center text-sm font-bold text-gray-700">{p}</div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">krystalore.com · One coaching core, four amplifiers.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
