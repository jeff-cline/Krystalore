'use client'

import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar, ChevronRight, Sun, Flame, Zap, Mountain,
  Users, ArrowRight
} from 'lucide-react'

function EventsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Event', name: 'Monday Motivation LIVE', description: 'Weekly live session to kick-start your week with energy, accountability, and intention.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: 'https://krystalore.com/live' } },
      { '@type': 'Event', name: 'Freedom Friday LIVE', description: 'End your week with celebration, reflection, and community.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: 'https://krystalore.com/live' } },
      { '@type': 'Event', name: 'Beyond Limits Power Hour', description: 'Intensive coaching sessions focused on breaking through specific challenges.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const events = [
  { icon: Sun, title: 'Monday Motivation LIVE', schedule: 'Every Monday', desc: 'Kick-start your week with energy, accountability, and intention. Join Krystalore live for mindset activation, goal setting, and community connection.', color: 'from-[#E8A849] to-orange-600', image: '/images/go9/keynote.jpg' },
  { icon: Flame, title: 'Freedom Friday LIVE', schedule: 'Every Friday', desc: 'Celebrate wins, reflect on growth, and set weekend intentions. A powerful community check-in to close out the week with purpose.', color: 'from-[#34c5c5] to-teal-600', image: '/images/go9/fitness.jpg' },
  { icon: Zap, title: 'Beyond Limits Power Hour', schedule: 'Monthly', desc: 'Intensive group coaching sessions focused on breaking through specific challenges — leadership blocks, fitness plateaus, relationship patterns, and more.', color: 'from-purple-500 to-purple-700', image: '/images/go9/coaching.jpg' },
  { icon: Mountain, title: 'Retreats', schedule: 'Quarterly', desc: 'Immersive multi-day experiences combining coaching, fitness, wellness, and adventure. Transform in an environment designed for breakthroughs.', color: 'from-gray-700 to-gray-900', image: '/images/go9/retreat-costa-rica.jpg' },
]

const retreats = [
  { title: 'Entrepreneur Retreats', href: '/entrepreneur-retreats', image: '/images/go9/corporate.jpg' },
  { title: 'Women\'s Retreats', href: '/womens-retreats', image: '/images/go9/group-sunset.jpg' },
  { title: 'Veteran Retreats', href: '/veteran-retreats', image: '/images/go9/veteran.jpg' },
  { title: 'Couples Retreats', href: '/couples-retreats', image: '/images/go9/retreat-group.jpg' },
]

export default function EventsPage() {
  return (
    <MainLayout>
      <EventsJsonLd />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-80 sm:h-96 lg:h-[28rem]">
          <Image src="/images/go9/speaking-event.jpg" alt="Krystalore Crews speaking at a live event" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <nav className="flex text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-medium">Events</span>
            </nav>
            <Calendar className="w-10 h-10 text-[#E8A849] mb-3" />
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">Events & Experiences</h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl">
              Live sessions, power hours, and transformational retreats designed to accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Weekly & Monthly Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group">
              <div className="relative h-56 sm:h-64">
                <Image src={e.image} alt={e.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className={`absolute inset-0 bg-gradient-to-t ${e.color} opacity-70`} />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <e.icon className="w-5 h-5" />
                    <span className="text-sm font-medium opacity-80">{e.schedule}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{e.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retreat Experiences */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Retreat Experiences</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {retreats.map((r) => (
            <Link key={r.href} href={r.href} className="group block rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative h-48 sm:h-56">
                <Image src={r.image} alt={r.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{r.title}</h3>
                <span className="text-teal text-sm font-medium flex items-center gap-1">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Krystalore Image + CTA */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto min-h-[300px]">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Join the Next Event?</h2>
              <p className="text-white/80 mb-8">
                Whether it&apos;s a live Monday session or a quarterly retreat, every event is designed to help you break through limits and lead with purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="bg-white text-[#006767] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center">
                  Contact for Events
                </Link>
                <Link href="/live" className="border-2 border-white/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-center">
                  Watch Live Sessions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
