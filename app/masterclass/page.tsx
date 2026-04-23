'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Sparkles, Palmtree, Waves, Utensils, ShieldCheck, ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

const EVENT_START = '2026-07-09T00:00:00-05:00'
const CHECKOUT_URL = 'https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout'
const PRIVATE_RETREAT_URL = 'https://www.krystalorecrews.com/retreat-private-request'
const WAITLIST_URL = 'https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist'

function getTimeLeft(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, expired: false }
}

function CountdownCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 text-center">
      <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tabular-nums leading-none">{String(value).padStart(2, '0')}</div>
      <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-teal-100">{label}</div>
    </div>
  )
}

export default function MasterclassPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(EVENT_START))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(EVENT_START)), 1000)
    return () => clearInterval(timer)
  }, [])

  const details = useMemo(
    () => [
      { icon: Calendar, title: 'Masterclass + Retreat Preview', value: 'July 9–15, 2026' },
      { icon: Clock, title: 'Countdown to Arrival', value: 'Clock is live in real-time' },
      { icon: MapPin, title: 'Location', value: 'Puerto Rico • Fly into SJU' },
    ],
    []
  )

  return (
    <MainLayout>
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-[620px] sm:h-[700px]">
          <Image
            src="/images/go9/retreat-costa-rica.jpg"
            alt="Luxury tropical retreat property"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12">
              <p className="text-[#E8A849] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
                Krystalore Masterclass Experience
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] max-w-5xl">
                Masterclass at the Revival Retreat
              </h1>
              <p className="text-teal-100 text-base sm:text-xl mt-4 max-w-3xl">
                A combined landing page with the Rewrite look-and-feel, featuring the retreat countdown, location highlights, and direct action links.
              </p>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <CountdownCard label="Days" value={timeLeft.days} />
                <CountdownCard label="Hours" value={timeLeft.hours} />
                <CountdownCard label="Minutes" value={timeLeft.minutes} />
                <CountdownCard label="Seconds" value={timeLeft.seconds} />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center gap-2 bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 px-7 rounded-xl transition-colors text-center shadow-lg shadow-[#E8A849]/30"
                >
                  Reserve My Spot
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={PRIVATE_RETREAT_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-7 rounded-xl border border-white/20 backdrop-blur-sm"
                >
                  Request Private Retreat
                </a>
                <a
                  href={WAITLIST_URL}
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-7 rounded-xl border border-white/30"
                >
                  Join VIP Waitlist
                </a>
              </div>

              {timeLeft.expired && (
                <p className="mt-4 text-sm font-semibold text-[#E8A849]">
                  This countdown reached zero. CTA links above still route to the active retreat pages.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {details.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <item.icon className="h-6 w-6 text-teal mb-3" />
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{item.title}</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-teal font-semibold uppercase tracking-wider text-sm">Property Highlights</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">Where the Masterclass Experience Happens</h2>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
              Inspired by the Revival Retreat page: luxury accommodations, chef-prepared meals, tropical adventure, movement sessions, and high-touch support in a private destination setting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative min-h-[360px] rounded-2xl overflow-hidden">
              <Image src="/images/revival-retreat/revival-hero.png" alt="Retreat villa setting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
            <div className="grid gap-6">
              <div className="relative min-h-[170px] rounded-2xl overflow-hidden">
                <Image src="/images/revival-retreat/revival-event.jpeg" alt="Retreat event group" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <div className="relative min-h-[170px] rounded-2xl overflow-hidden">
                <Image src="/images/go9/group-sunset.jpg" alt="Sunset retreat gathering" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Palmtree, title: 'Luxury Villa Stay', desc: 'Private, scenic property designed for deep reset and high-level focus.' },
              { icon: Utensils, title: 'Private Chef Experience', desc: 'Nourishing meals and beverages prepared for your retreat week.' },
              { icon: Waves, title: 'Adventure + Spa Energy', desc: 'Rainforest and ocean experiences balanced with restoration.' },
              { icon: ShieldCheck, title: 'High-Touch Service', desc: 'Supportive details handled so you can fully receive the experience.' },
            ].map((h) => (
              <div key={h.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h.icon className="h-5 w-5 text-teal mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-10 text-white text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-100 font-semibold mb-2">Ready Now</p>
            <h3 className="text-2xl sm:text-4xl font-black mb-3">Take the Next Step</h3>
            <p className="text-teal-50 max-w-2xl mx-auto mb-6">
              These CTA buttons are wired to the same destination URLs from the live revivalretreat page so the funnel matches what you requested.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={CHECKOUT_URL} className="bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-3.5 px-6 rounded-xl transition-colors">Say no more — I&apos;ve been waiting for this!</a>
              <a href={PRIVATE_RETREAT_URL} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-6 rounded-xl">Request Private Tour</a>
              <a href={WAITLIST_URL} className="bg-white text-[#006767] hover:bg-gray-100 font-bold py-3.5 px-6 rounded-xl">Join the 2026 VIP waitlist</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            '7-day luxury retreat flow',
            'Puerto Rico location + SJU airport access',
            'Transformational coaching + movement',
            'Sisterhood and breakthrough support',
          ].map((line) => (
            <div key={line} className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#E8A849]" />
              {line}
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
