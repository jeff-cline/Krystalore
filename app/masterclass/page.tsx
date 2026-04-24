'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Play,
  Check,
  Crown,
  Heart,
  Sparkles,
  ShieldCheck,
  Users,
} from 'lucide-react'

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
const CONTACT_EMAIL = 'mailto:krystalore@thecrewscoach.com?subject=Masterclass%20Special%20Pricing'

const propertyImages = [
  '/images/retreat/retreat-01.jpg',
  '/images/retreat/retreat-02.jpg',
  '/images/retreat/retreat-03.jpg',
  '/images/retreat/retreat-04.jpg',
  '/images/retreat/retreat-05.jpg',
  '/images/retreat/retreat-06.jpg',
  '/images/retreat/retreat-07.jpg',
  '/images/retreat/retreat-08.jpg',
  '/images/retreat/retreat-09.jpg',
  '/images/retreat/retreat-10.jpg',
  '/images/retreat/retreat-group-01.jpg',
  '/images/retreat/retreat-group-02.jpg',
  '/images/retreat/retreat-group-03.jpg',
  '/images/retreat/retreat-group-04.jpg',
  '/images/retreat/retreat-group-05.jpg',
  '/images/retreat/retreat-group-06.jpg',
]

function getTimeLeft(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  }
}

function CountdownTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/10 border border-white/25 backdrop-blur-sm p-4 sm:p-6 text-center">
      <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-teal-100 font-semibold">{label}</div>
    </div>
  )
}

export default function MasterclassPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(EVENT_START))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(EVENT_START)), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="/images/retreat/retreat-hero.png"
          alt="Krystalore leading transformation at retreat property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/35" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-[#E8A849] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
            Rewrite in Real Time • Mastering the Messy Middle of Your Transformation
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] max-w-5xl">
            How to Stay Consistent, Confident, and in Motion While Everything Is Changing
          </h1>
          <p className="text-teal-100 text-lg sm:text-2xl max-w-3xl mt-5">
            Masterclass experience hosted from the same Puerto Rico retreat property with direct access to retreat CTAs.
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <CountdownTile label="Days" value={timeLeft.days} />
            <CountdownTile label="Hours" value={timeLeft.hours} />
            <CountdownTile label="Minutes" value={timeLeft.minutes} />
            <CountdownTile label="Seconds" value={timeLeft.seconds} />
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={CHECKOUT_URL} className="inline-flex items-center justify-center gap-2 bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 px-8 rounded-xl transition-colors">
              Join the Masterclass
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PRIVATE_RETREAT_URL} className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold py-4 px-8 rounded-xl">
              Request Private Retreat
            </a>
            <a href={WAITLIST_URL} className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border border-white/35 text-white font-semibold py-4 px-8 rounded-xl">
              Join VIP Waitlist
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-5">You’re Not Starting Over. You’re in the Middle of Becoming.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You’ve outgrown who you used to be — but you’re not fully stepped into who you’re becoming yet. That space is the messy middle.
            This is where identity shifts, habits are tested, and leadership gets forged.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-10 text-left">
            {[
              'Your identity is shifting',
              'Your habits are being tested',
              'Your energy isn’t always consistent',
              'You’re learning to lead yourself at a higher level',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-5">
                <Check className="h-5 w-5 text-teal mt-0.5" />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden bg-black shadow-xl">
            <video src="/videos/rewrite-intro.mp4" controls poster="/images/go9/speaking-event.jpg" className="w-full" style={{ aspectRatio: '16/9' }} playsInline />
          </div>
          <p className="text-center text-gray-500 mt-3 italic">“If you’re in a season of change, this is for you…”</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-black text-center mb-8">Live Masterclass Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Calendar, title: 'Date', value: 'May 20' },
                { icon: Clock, title: 'Time', value: '5:00–6:30 PM EST' },
                { icon: MapPin, title: 'Location', value: 'Live on Zoom' },
                { icon: Play, title: 'Replay', value: 'Registered guests only' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="h-6 w-6 mx-auto mb-2 text-teal-100" />
                  <p className="text-xs uppercase tracking-wider text-teal-100">{item.title}</p>
                  <p className="font-bold text-lg mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">This Is Not About Starting Strong. It’s About Staying in It.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                You already know how to start. You’ve invested in yourself. You’ve done the work. You’ve shown up.
                But when life gets full and pressure hits, consistency breaks. This masterclass teaches how to stay anchored
                so your confidence, leadership, relationships, and results keep moving forward.
              </p>
            </div>
            <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/retreat/retreat-03.jpg" alt="Aerial view of retreat property" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-black text-center mb-3">What You’ll Walk Away With</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Inside this 90-minute masterclass, you will learn how to build sustainable momentum with structure and self-leadership.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Stay consistent in your health, mindset, and habits during seasons of change',
              'Build real confidence through action, not waiting to feel ready',
              'Stop the cycle of starting over and create sustainable momentum',
              'Regulate your energy and focus so you show up powerfully',
              'Anchor into a simple daily structure that supports your next level',
              'Apply practical tools immediately to your life and leadership',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <Check className="h-5 w-5 text-teal mb-2" />
                <p className="text-gray-800 font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-black text-center mb-3">The Framework: The Freedom Formula</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Signature system for high performers ready to live, lead, and perform at a higher level without burning out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Core', desc: 'Get grounded in who you are becoming—not who you used to be', icon: ShieldCheck },
              { title: 'Confidence', desc: 'Build self-trust through aligned action', icon: Crown },
              { title: 'Consistency', desc: 'Create daily habits that move you forward no matter what', icon: Check },
              { title: 'Community', desc: 'Surround yourself with the right energy and support', icon: Users },
              { title: 'Celebration', desc: 'Lock in your growth and reinforce your identity', icon: Sparkles },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <item.icon className="h-6 w-6 text-teal mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative min-h-[340px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/retreat/retreat-06.jpg" alt="Open-air retreat relaxation area" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">The Standard: The 34-Minute Reset</h3>
              <p className="text-gray-600 mb-6">You don’t need hours. You need a standard you can keep.</p>
              <div className="space-y-3">
                {[
                  '2 minutes to get clear',
                  '30 minutes to move your body and shift your state',
                  '2 minutes to reflect and reinforce',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2 text-gray-800">
                    <Sparkles className="h-4 w-4 text-[#E8A849] mt-1" />
                    <span className="font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-black text-center mb-3">Retreat Property Gallery</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Full retreat-photo pull from the hosted property and retreat experience, integrated here per your request.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {propertyImages.map((src, i) => (
              <a key={src} href={CHECKOUT_URL} className="block relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Krystalore retreat property photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-4">Investment: $297</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            If you’re attending the Re-Written Summit or connected to the community, special pricing is available.
            Email or DM for coupon details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href={CHECKOUT_URL} className="bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 px-8 rounded-xl inline-flex items-center justify-center gap-2">
              Join the Masterclass <ArrowRight className="h-4 w-4" />
            </a>
            <a href={CONTACT_EMAIL} className="bg-teal hover:bg-[#006767] text-white font-semibold py-4 px-8 rounded-xl inline-flex items-center justify-center">
              Email for Special Pricing
            </a>
          </div>

          <p className="text-lg text-gray-800 font-medium mb-6">
            You’re not lost. You’re not behind. You’re in the middle of something that is asking you to rise.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left max-w-3xl mx-auto">
            <h4 className="font-bold text-xl mb-3">About Your Host</h4>
            <div className="flex gap-4 items-start">
              <Image src="/images/retreat/krystalore-host.png" alt="Krystalore Crews host headshot" width={92} height={92} className="rounded-full object-cover" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Krystalore Crews is a leadership consultant, wellness expert, keynote speaker, and 22-year U.S. Air Force Veteran.
                She is CEO of Crews Beyond Limits and creator of the Freedom Formula, having trained over 200,000 military and corporate personnel
                while leading global retreat experiences focused on resilience, discipline, and high performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-[#006767] to-teal text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-3">Continued Support Paths</h3>
          <p className="text-teal-50 mb-6">Beyond Limits Bootcamp • Health Mastery Coaching • Leadership & Wellness Retreat Experiences</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CHECKOUT_URL} className="bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-3.5 px-7 rounded-xl">Reserve My Spot</a>
            <a href={PRIVATE_RETREAT_URL} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl">Request Private Tour</a>
            <a href={WAITLIST_URL} className="bg-white text-[#006767] hover:bg-gray-100 font-bold py-3.5 px-7 rounded-xl">Get VIP Waitlist Access</a>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </div>
  )
}
