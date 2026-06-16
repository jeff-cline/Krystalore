import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ChevronRight } from 'lucide-react'

const STAGES = [
  { n: 1, tier: 'Discover · Free', time: 'Day 1 · Free', items: ['Habit Tracker', 'Power Hour Coworking', 'Quizzes'], color: '#34c5c5', pos: { l: 50, t: 1 } },
  { n: 2, tier: 'Entry Events', time: 'Weeks 1–4', items: ['Vision Board Party', 'Bombshell Bootcamp', 'Rewrite Masterclass'], color: '#0D9488', pos: { l: 99, t: 50 } },
  { n: 3, tier: 'Core Programs', time: 'Months 1–3', items: ['Health Mastery', 'Beyond Limits Bootcamp', 'Courses'], color: '#E8A849', pos: { l: 50, t: 99 } },
  { n: 4, tier: 'Premium · VIP', time: '90 Days · Premium', items: ['Rise & Thrive Bundle', 'Costa Rica Retreat', 'Private Coaching'], color: '#e07800', pos: { l: 1, t: 50 } },
]
const ARROWS = [
  { l: 85, t: 15, r: 45 }, { l: 85, t: 85, r: 135 }, { l: 15, t: 85, r: 225 }, { l: 15, t: 15, r: 315 },
]

export default function Infographic2() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#34c5c5]/8 via-[#F6F8FA] to-white">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2 text-center">
          <img src="/images/krystalore-crews-logo.png" alt="Krystalore" className="h-9 w-auto mx-auto mb-4" />
          <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-2">The buyer pathway · full circle</p>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.05] mb-3">One compass. Free to premium. Enter anywhere.</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">The journey flows clockwise from free to premium, with the brand at the center — drop in at any point on the circle.</p>
        </section>

        {/* CIRCLE */}
        <section className="px-4 py-8">
          <div className="relative mx-auto w-full max-w-[520px]" style={{ aspectRatio: '1 / 1' }}>
            {/* conic ring (freemium -> premium) */}
            <div className="absolute inset-[14%] rounded-full" style={{ background: 'conic-gradient(from -90deg, #34c5c5, #0D9488 28%, #E8A849 58%, #e07800 84%, #34c5c5)' }} />
            <div className="absolute inset-[14%] rounded-full" style={{ boxShadow: 'inset 0 0 0 9999px transparent' }} />
            <div className="absolute rounded-full bg-white shadow-inner" style={{ inset: 'calc(14% + 26px)' }} />
            {/* center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <img src="/favicon-192x192.png" alt="" className="w-12 h-12 mb-2" />
              <img src="/images/krystalore-crews-logo.png" alt="Krystalore" className="h-7 w-auto mb-2" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">Drop in<br />anywhere</p>
            </div>
            {/* clockwise arrows */}
            {ARROWS.map((a, i) => (
              <ChevronRight key={i} className="absolute text-[#0D9488]/60" style={{ left: `${a.l}%`, top: `${a.t}%`, width: 22, height: 22, transform: `translate(-50%,-50%) rotate(${a.r}deg)` }} />
            ))}
            {/* nodes */}
            {STAGES.map((s) => (
              <div key={s.n} className="absolute" style={{ left: `${s.pos.l}%`, top: `${s.pos.t}%`, transform: 'translate(-50%,-50%)' }}>
                <div className="flex flex-col items-center">
                  <span className="w-11 h-11 rounded-full text-white font-black flex items-center justify-center shadow-lg ring-4 ring-white" style={{ background: s.color }}>{s.n}</span>
                  <div className="mt-1 bg-white rounded-lg shadow-md border border-gray-100 px-2.5 py-1 text-center whitespace-nowrap">
                    <p className="text-[11px] font-black text-gray-900 leading-none">{s.tier}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: s.color }}>{s.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEGEND */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-full text-white font-black text-xs flex items-center justify-center" style={{ background: s.color }}>{s.n}</span>
                  <span className="font-black text-gray-900 text-sm">{s.tier}</span>
                </div>
                <ul className="space-y-0.5">{s.items.map((i) => <li key={i} className="text-[12px] text-gray-600">· {i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">krystalore.com · One coaching core, four amplifiers.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
