'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import {
  Sparkles,
  Target,
  Heart,
  Users,
  Palette,
  Star,
  Eye,
  Calendar,
  Clock,
  Video,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const MASTERCLASS_CHECKOUT_URL = 'https://krystalorecrews.com/masterclass-checkout'

// Quarterly schedule — edit this list to add future events.
// Each entry is the start datetime in America/New_York (UTC-5 standard / UTC-4 DST).
// Use ISO format with the correct offset.
const QUARTERLY_EVENTS = [
  { iso: '2026-06-27T12:00:00-04:00', endIso: '2026-06-27T14:00:00-04:00' },
  { iso: '2026-09-26T12:00:00-04:00', endIso: '2026-09-26T14:00:00-04:00' },
  { iso: '2026-12-19T12:00:00-05:00', endIso: '2026-12-19T14:00:00-05:00' },
  { iso: '2027-03-27T12:00:00-04:00', endIso: '2027-03-27T14:00:00-04:00' },
]

function getNextEvent(now: Date = new Date()) {
  const upcoming = QUARTERLY_EVENTS
    .map(e => ({ ...e, date: new Date(e.iso), end: new Date(e.endIso) }))
    .filter(e => e.end.getTime() >= now.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
  return upcoming[0] ?? null
}

function formatEventDate(date: Date) {
  const dateStr = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/New_York',
  })
  return dateStr
}

function formatEventTimeRange(start: Date, end: Date) {
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/New_York',
    })
  return `${fmt(start)} – ${fmt(end)} EST`
}

function JsonLd({ next }: { next: ReturnType<typeof getNextEvent> }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      next && {
        '@type': 'Event',
        name: 'Vision Board Party — Vision to Velocity',
        organizer: { '@type': 'Person', name: 'Krystalore Crews' },
        url: 'https://krystalore.com/vision-board',
        startDate: next.iso,
        endDate: next.endIso,
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@type': 'VirtualLocation', url: 'https://krystalore.com/vision-board' },
        offers: { '@type': 'Offer', url: MASTERCLASS_CHECKOUT_URL },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the Vision Board Party?', acceptedAnswer: { '@type': 'Answer', text: 'A 2-hour virtual experience where you craft your vision, embrace the chaos of creating, and design a fulfilling life. Live on Zoom with replay included.' } },
        ],
      },
    ].filter(Boolean),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is a Vision Board Party?', answer: 'A 2-hour virtual experience where Krystalore guides you through visualization, intention-setting, and creating a written vision and action plan for the next chapter of your life and business. Live on Zoom with replay included.' },
  { question: 'Do vision boards actually work?', answer: 'Yes — when paired with action. Visualization activates the same neural pathways as performance, priming your reticular activating system to spot opportunities aligned with your vision. The board is the compass; the work is yours.' },
  { question: 'What do I need to bring?', answer: 'Your laptop, a notebook, and whatever creative materials you love — magazines, photos, markers, scissors, glue. The session is held live on Zoom, so you create from your own space.' },
  { question: 'Is it live or replay?', answer: 'Both. Attend live on Zoom for the full interactive experience, and you also receive the replay so you can come back to the visualization, prompts, and frameworks anytime.' },
  { question: 'How often is the Vision Board Party?', answer: 'Quarterly — once a season. The dates are dynamic and announced on this page. Reserve early; spots are limited to keep the experience intimate.' },
  { question: 'Who is this for?', answer: 'Entrepreneurs, leaders, high-performers, women in transition — anyone ready to stop reacting to life and start designing it on purpose. No artistic skill required.' },
  { question: 'Can I host a private Vision Board Party?', answer: 'Yes. Krystalore hosts private Vision Board Parties for corporate teams, women’s groups, birthdays, and retreats. Email krystalore@thecrewscoach.com to plan a custom experience.' },
]

const whyAttend = [
  { icon: Eye, title: 'Clarity of Vision', desc: 'Translate the vague feeling of "what’s next" into a clear, written direction you can actually act on.' },
  { icon: Target, title: 'A Vision Board That Works', desc: 'Built with intention so it actually drives behavior — not a Pinterest collage that fades into wallpaper.' },
  { icon: Sparkles, title: 'Overcome Mental Blocks', desc: 'Guided processes that move past perfectionism, comparison, and the inner voice that keeps you small.' },
  { icon: Star, title: 'Inspired Action', desc: 'Walk out with the next 3 moves — concrete, scheduled, and tied to a measurable outcome.' },
  { icon: Users, title: 'Real Connection', desc: 'Two hours in a room (virtually) with other high-performers building the next chapter of their lives.' },
]

const whatYoullWalkAwayWith = [
  'A written vision for the next 90 days, 12 months, and 3 years',
  'A printable, magnetic vision board you’ll actually look at',
  'A 3-move action plan tied to your highest priorities',
  'Renewed confidence and the momentum to start before Monday',
]

const fitFor = [
  'You feel busy but unclear on what you’re actually building',
  'You’ve set goals before that quietly died in a notebook',
  'You want vision work paired with strategy, not magical thinking',
  'You want a quarterly reset to stay aligned, not drift',
]

export default function VisionBoardPage() {
  const next = getNextEvent()
  const nextDateLabel = next ? formatEventDate(next.date) : 'Announced Quarterly'
  const nextTimeLabel = next ? formatEventTimeRange(next.date, next.end) : '12:00 PM – 2:00 PM EST'

  return (
    <>
      <JsonLd next={next} />
      <Header />

      {/* Hero — light, photo-led, no cartoons */}
      <section className="relative bg-gradient-to-b from-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/10 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Calendar className="w-3.5 h-3.5" /> Quarterly · 2-Hour Virtual Experience
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-[1.05]">
                Vision Board Party
              </h1>
              <p className="text-xl md:text-2xl text-[#e07800] font-medium mb-3">
                Craft Your Vision. Embrace the Chaos.
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Two hours, live on Zoom with Krystalore Crews — guided visualization, intention setting, and a real plan to design the life and business you keep telling yourself you’ll start &ldquo;next quarter.&rdquo; Replay included.
              </p>

              {/* Next event card */}
              <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 mb-8 max-w-md">
                <p className="text-xs font-bold tracking-widest uppercase text-[#0D9488] mb-2">Next Session</p>
                <p className="text-xl font-bold text-gray-900 mb-1">{nextDateLabel}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#e07800]" /> {nextTimeLabel}</span>
                  <span className="inline-flex items-center gap-1.5"><Video className="w-4 h-4 text-[#34c5c5]" /> Live on Zoom · Replay Included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={MASTERCLASS_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  REGISTER NOW <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="#what-youll-walk-away-with"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-8 py-4 rounded-full hover:bg-[#34c5c5]/5 transition-colors"
                >
                  What You’ll Get
                </Link>
              </div>
              <p className="text-xs text-gray-500 mt-4">Secure registration on krystalorecrews.com — limited seats to keep the room intimate.</p>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/krystalore/REM08628.jpg"
                alt="Krystalore Crews hosting the quarterly Vision Board Party — live on Zoom"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Why Attend</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">A Vision That Actually Moves</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              This isn’t a craft hour. It’s a strategic, somatic, intentional reset for the next chapter — repeated quarterly so you stay aligned and don’t drift.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyAttend.map((item) => (
              <div key={item.title} className="bg-[#F6F8FA] rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <item.icon className="w-6 h-6 text-[#e07800]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens — flow */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">Inside the Two Hours</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Happens in the Room</h2>
          </div>
          <div className="space-y-4">
            {[
              { icon: Eye, title: 'Guided Visualization', desc: 'Krystalore leads a powerful visualization process to clarify your deepest goals and the version of you that’s ready to lead.' },
              { icon: Target, title: 'Intention Setting', desc: 'Specific, meaningful intentions across career, health, relationships, finances, and personal growth.' },
              { icon: Palette, title: 'Creative Building', desc: 'Design your board using magazines, photos, quotes, and your own art. No artistic skill required.' },
              { icon: Users, title: 'Community Sharing', desc: 'Share your vision with the group, receive encouragement, and witness the power of collective intention.' },
              { icon: Star, title: 'Action Planning', desc: 'Leave with a concrete 3-move plan — your board is the compass, your action is the engine.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#34c5c5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk-Away + Fit */}
      <section id="what-youll-walk-away-with" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Take Home</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You’ll Walk Away With</h2>
            <ul className="space-y-3">
              {whatYoullWalkAwayWith.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-[#F6F8FA] rounded-xl p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">Honest Fit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">This Workshop Is For You If…</h2>
            <ul className="space-y-3">
              {fitFor.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <Heart className="w-5 h-5 text-[#e07800] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Meet your host */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
                alt="Krystalore Crews — host of the quarterly Vision Board Party"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Meet Your Host</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Krystalore Crews</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  Veteran (22 years USAF), Amazon best-selling author, fitness and wellness coach, business mentor, and retreat leader. Trained in Compassionate Inquiry. Owner of Crews Beyond Limits Consulting.
                </p>
                <p>
                  Krystalore has led thousands through vision work that actually sticks — not because the board is pretty, but because the work behind it is honest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Vision Board Party FAQ" />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stop Dreaming in Silence.</h2>
          <p className="text-xl text-orange-50 mb-3">
            Reserve your seat for the {nextDateLabel} Vision Board Party.
          </p>
          <p className="text-orange-100 mb-8">{nextTimeLabel} · Live on Zoom · Replay Included</p>
          <a
            href={MASTERCLASS_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#e07800] font-black rounded-full px-10 py-5 text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex flex-wrap gap-6 justify-center mt-10 text-orange-100 text-sm">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/coworking" className="hover:text-white">Power Hour</Link>
            <Link href="/privatemindset" className="hover:text-white">Mindset Coaching</Link>
            <Link href="/retreat" className="hover:text-white">Retreats</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
