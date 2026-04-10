import { Metadata } from 'next'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowRight, Calendar, MapPin, Video, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upcoming Events & Experiences | Krystalore Crews',
  description: 'In-person, live, and virtual events with Krystalore Crews. Retreats, workshops, bootcamps, speaking events, and more.',
}

export default function UpcomingEventsPage() {
  const events = [
    { type: 'Virtual', title: 'Monday Motivation LIVE', schedule: 'Every Monday', desc: 'Start your week with fire. Mindset, motivation, and accountability.', link: '/go-live', color: '#84d7d7' },
    { type: 'Virtual', title: 'Freedom Friday LIVE', schedule: 'Every Friday', desc: 'Celebrate wins, release what doesn\'t serve you, and step into the weekend free.', link: '/go-live', color: '#E8A849' },
    { type: 'Virtual', title: 'Beyond Limits Bootcamp', schedule: 'Mon/Wed/Fri', desc: '30-minute HIIT, kickboxing, and functional fitness. All levels welcome.', link: '/bootcamp', color: '#34c5c5' },
    { type: 'Virtual', title: 'Co-Working Power Hour', schedule: 'Weekly', desc: 'Free co-working sessions on Zoom. Show up, focus up, get it done.', link: '/coworking', color: '#84d7d7' },
    { type: 'In-Person', title: 'Vision Board Workshop', schedule: 'Quarterly / By Request', desc: 'Strategic planning, goal setting, and action taking with accountability.', link: '/vision-board', color: '#B8A9D4' },
    { type: 'In-Person', title: 'Caribbean Retreat', schedule: 'Coming Soon', desc: 'Immersive transformation retreat on a Caribbean island. Small cohort, total immersion.', link: '/retreat', color: '#84d7d7' },
  ]

  return (
    <MainLayout>
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-teal-900" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Calendar className="h-16 w-16 text-[#84d7d7] mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">Upcoming Events & <span className="text-[#84d7d7]">Experiences</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">In-person, live, and virtual events to keep you connected, growing, and moving forward.</p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
        <Image src="/images/go9/keynote.jpg" alt="Krystalore Crews upcoming events and speaking engagements" fill className="object-cover" sizes="100vw" />
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <a key={i} href={event.link} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group block">
                <div className="h-2" style={{ backgroundColor: event.color }} />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: event.color + '20', color: event.color }}>
                    {event.type === 'Virtual' ? '🖥 Virtual' : '📍 In-Person'}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-1">{event.title}</h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: event.color }}>{event.schedule}</p>
                  <p className="text-gray-600 text-sm">{event.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/book" className="bg-[#34c5c5] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Book a Call to Learn More <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
