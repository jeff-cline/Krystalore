'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar, ChevronRight, Sun, Flame, Zap, Mountain,
  Users, Mic, ArrowRight
} from 'lucide-react'

function EventsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Event', name: 'Monday Motivation LIVE', description: 'Weekly live session to kick-start your week with energy, accountability, and intention.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: 'https://executive-krystalore.vercel.app/go-live' } },
      { '@type': 'Event', name: 'Freedom Friday LIVE', description: 'End your week with celebration, reflection, and community.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: 'https://executive-krystalore.vercel.app/go-live' } },
      { '@type': 'Event', name: 'Beyond Limits Power Hour', description: 'Intensive coaching sessions focused on breaking through specific challenges.', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const events = [
  { icon: Sun, title: 'Monday Motivation LIVE', schedule: 'Every Monday', desc: 'Kick-start your week with energy, accountability, and intention. Join Krystalore live for mindset activation, goal setting, and community connection.', color: 'from-[#E8A849] to-orange-600' },
  { icon: Flame, title: 'Freedom Friday LIVE', schedule: 'Every Friday', desc: 'Celebrate wins, reflect on growth, and set weekend intentions. A powerful community check-in to close out the week with purpose.', color: 'from-[#34c5c5] to-teal-600' },
  { icon: Zap, title: 'Beyond Limits Power Hour', schedule: 'Monthly', desc: 'Intensive group coaching sessions focused on breaking through specific challenges — leadership blocks, fitness plateaus, relationship patterns, and more.', color: 'from-purple-500 to-purple-700' },
  { icon: Mountain, title: 'Retreats', schedule: 'Quarterly', desc: 'Immersive multi-day experiences combining coaching, fitness, wellness, and adventure. Transform in an environment designed for breakthroughs.', color: 'from-gray-700 to-gray-900' },
]

export default function EventsPage() {
  return (
    <>
      <EventsJsonLd />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Events</span>
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <Image src="/images/go9/keynote.jpg" alt="Krystalore Crews speaking at events and keynotes" fill className="object-cover object-top" sizes="100vw" />
        </div>

        <section className="relative bg-gradient-to-br from-[#E8A849] via-orange-600 to-orange-800 text-white py-20 lg:py-28">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events & Experiences</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Live sessions, power hours, and transformational retreats designed to accelerate your growth.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((e) => (
                <div key={e.title} className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-r ${e.color} p-6 text-white`}>
                    <e.icon className="w-10 h-10 mb-3 opacity-90" />
                    <h2 className="text-2xl font-bold">{e.title}</h2>
                    <p className="text-sm opacity-80 mt-1">{e.schedule}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retreat links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Retreat Experiences</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Entrepreneur Retreats', href: '/entrepreneur-retreats' },
                { title: 'Couples Retreats', href: '/couples-retreats' },
                { title: 'Veteran Coaching', href: '/veteran-coaching' },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                  <span className="text-[#34c5c5] text-sm font-semibold flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Next Event</h2>
            <p className="text-lg text-gray-600 mb-8">Contact Krystalore for upcoming event schedules and registration.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#34c5c5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e07800] transition-colors">
                Contact for Events
              </Link>
              <Link href="/go-live" className="border-2 border-[#34c5c5] text-[#34c5c5] px-8 py-4 rounded-xl font-bold hover:bg-[#34c5c5]/5 transition-colors">
                Go Live Sessions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
