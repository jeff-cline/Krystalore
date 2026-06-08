import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, ArrowRight, Rocket, CheckCircle2 } from 'lucide-react'

const BOOK_URL = 'https://krystalorecrews.com/book'
const FIRE_CHECKOUT_URL = 'https://www.krystalorecrews.com/firechallenge-checkout'

const teamPoints = [
  'Whole-team, self-leadership-first program',
  'Leadership coaching & personalized health reviews',
  'Built around your culture, schedule & goals',
]
const firePoints = [
  '60-minute kickoff keynote',
  'F.I.R.E. — Focus · Intention · Resilience · Energy',
  'Habit-tracking app, gamification & leaderboards',
  'Weekly accountability & recognition',
]

export default function CorporateWellnessFeature() {
  return (
    <section id="corporate-wellness" className="py-20 px-4 bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Global header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-2">Corporate Wellness</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Your team&apos;s greatest asset is their <span className="text-[#0D9488]">energy</span>.
          </h2>
          <p className="text-gray-600 text-lg mb-7">
            Self-leadership and vitality-first wellness for organizations — two ways in: a full program for your whole
            team, and the 30-day FIRE Challenge to ignite it.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition">
            <CalendarCheck className="w-5 h-5" /> Book a Call
          </a>
        </div>

        {/* Two cards: Team + Challenge/Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 — Corporate Wellness (Team) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-56">
              <Image src="/images/wellness/wellness-hero.jpg" alt="Corporate Wellness program for your team" fill className="object-cover object-[50%_15%]" sizes="(max-width: 768px) 100vw, 50vw" />
              <span className="absolute top-4 left-4 bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">For Your Team</span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Corporate Wellness Program</h3>
              <p className="text-gray-600 mb-5">A high-touch, accountable wellness partnership that lifts energy, resilience, and confidence — starting with leadership and flowing to your whole team.</p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {teamPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                    <span className="text-[15px]">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/wellness" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-5 py-3 rounded-xl shadow transition">
                  Explore the Program <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white font-bold px-5 py-3 rounded-xl transition-colors">
                  <CalendarCheck className="w-4 h-4" /> Book a Call
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 — FIRE Challenge (the Challenge / Tools) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-56">
              <Image src="/images/scraped/krystalore-event.jpg" alt="The Beyond Limits FIRE Challenge" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <span className="absolute top-4 left-4 bg-[#e07800] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">30-Day Challenge · Tools</span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-black text-gray-900 mb-2">The FIRE Challenge</h3>
              <p className="text-gray-600 mb-5">A 30-day experience that reignites energy and reduces overwhelm through practical daily habits, accountability, and team gamification — the spark that brings wellness to life.</p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {firePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#e07800] flex-shrink-0 mt-0.5" />
                    <span className="text-[15px]">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/firechallenge" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-5 py-3 rounded-xl shadow transition">
                  Explore the Challenge <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={FIRE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#e07800] hover:bg-[#c46700] text-white font-bold px-5 py-3 rounded-xl shadow transition">
                  <Rocket className="w-4 h-4" /> Join the Challenge
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
