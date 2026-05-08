'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import {
  CheckCircle,
  Send,
  Sparkles,
  Eye,
  Shield,
  Compass,
  Target,
  Mountain,
  Play,
  ArrowRight,
} from 'lucide-react'
import { useState } from 'react'
import {
  speakerVideos,
  videoUrl,
  videoThumbnail,
  SPEAKER_PLAYLIST_URL,
} from '@/data/speaker-videos'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Krystalore Crews',
        jobTitle: 'International Speaker, Corporate Host & Wellness Consultant',
        url: 'https://krystalore.com/speaker',
        sameAs: [
          'https://www.youtube.com/playlist?list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw',
        ],
        knowsAbout: [
          'Leadership',
          'Emotional Intelligence',
          'Resilience',
          'Burnout Prevention',
          'Veteran Transition',
          "Women's Empowerment",
          'Somatic Wellness',
          'Corporate Wellness',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I book Krystalore as a keynote speaker?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Submit the booking request form on this page or email krystalore@thecrewscoach.com. Krystalore speaks at corporate events, conferences, retreats, military events, and women\'s empowerment gatherings worldwide.',
            },
          },
        ],
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

const roleChips = [
  'International Speaker',
  'Corporate Host & Emcee',
  'Retreat Leader',
  'Wellness Consultant',
  '22-yr USAF Veteran',
  'Nonprofit Founder',
  'Certified Coach',
  'Author',
  '27x Marathon Finisher',
  'Cancer Survivor',
]

const stats = [
  { value: '22+', label: 'Years of Service' },
  { value: '27', label: 'Marathon Finishes' },
  { value: '3', label: 'Orgs Founded' },
]

const credentialDetails = [
  { title: '22-Year USAF Veteran', detail: 'Built & executed national programs; trained coaches, trainers & speakers' },
  { title: 'Founder — Her Next Mission', detail: 'Nonprofit supporting women Veterans navigating life after service' },
  { title: 'Founder — Revive & Thrive Retreats', detail: 'International corporate & leadership retreat experiences' },
  { title: 'Founder — Crews Beyond Limits', detail: 'Corporate wellness, leadership & group fitness programming' },
  { title: 'Amazon Best-Selling Author', detail: 'Leadership, resilience & reinvention' },
  { title: 'Somatic Trauma-Informed Holistic Coach', detail: 'Psychological safety, EQ & whole-person wellness' },
  { title: 'Former NFL Cheerleader — Buffalo Bills', detail: 'Performance, presence & elite professionalism' },
  { title: '27x Marathon & 50-Mile Ultra Finisher', detail: 'Cancer survivor & wheelchair-bound comeback — resilience lived, not just taught' },
]

const whatSetsApart = [
  { icon: Eye, title: 'Reads Every Room', desc: 'Krystalore intuitively senses group energy — adjusting pace, depth, and tone in real time so every audience feels met, not managed.' },
  { icon: Shield, title: 'Thrives Under Pressure', desc: 'Military-trained composure meets performer-level presence. Technical issues, tough crowds, last-minute pivots — she handles all of it with calm authority.' },
  { icon: Compass, title: 'Challenges & Guides', desc: "She doesn't just inspire — she challenges. Every session stretches comfort zones while honoring psychological safety and each person's humanity." },
  { icon: Target, title: 'Mission-Driven Results', desc: 'Client goals are the mission. Krystalore customizes every experience to deliver the exact transformation — emotionally, culturally, or strategically — the client needs.' },
  { icon: Mountain, title: 'Lived Resilience', desc: "Cancer survivor. Wheelchair-bound comeback. 27 marathons & a 50-mile finish. Her story isn't a backdrop — it's her credential. When she speaks about rising, the room knows she means it." },
]

const services = [
  {
    title: 'Virtual Event Host',
    price: '$2,500+',
    priceNote: 'Starting at',
    bullets: [
      'Award & recognition ceremonies',
      'Virtual summits & panel moderation',
      'Internal culture & team events',
      'Script review & prep call included',
      'Live facilitation or recorded session',
    ],
  },
  {
    title: 'Live Emcee + Facilitation',
    price: '$5,000+',
    priceNote: 'Starting at • Travel billed separately',
    featured: true,
    bullets: [
      'Conferences & leadership summits',
      'Corporate retreats & offsites',
      "Women's leadership experiences",
      'Full event flow & energy management',
      'Speaker introductions & stage transitions',
    ],
  },
  {
    title: 'Leadership & Wellness Workshop',
    price: '$3,500+',
    priceNote: 'Add-on • Virtual or onsite',
    bullets: [
      'Burnout Prevention for High Performers',
      'EQ for Leaders & Resilience Through Change',
      'Self-Leadership & Accountability',
      'The 34-Minute Performance Method',
      'Rebuilding Confidence After Transition',
    ],
  },
  {
    title: 'Four Lenses Workshop',
    price: 'Contact for pricing',
    priceNote: 'Personality & Team Dynamics',
    bullets: [
      'Fun, high-energy facilitation style',
      'Four Lenses personality framework',
      'Team communication & cohesion building',
      'Self-awareness for leaders & teams',
      'Virtual or onsite delivery',
    ],
  },
  {
    title: 'Corporate Fitness & Wellness',
    price: 'Group rates available',
    priceNote: 'Movement & Wellness Programming',
    bullets: [
      'Corporate group fitness programming',
      'Breathwork & morning movement activation',
      'Executive wellness & mindset reset sessions',
      'Team wellness breaks at events',
      'Ongoing corporate wellness program design',
    ],
  },
  {
    title: 'Private Coaching',
    price: 'Contact for pricing',
    priceNote: '1:1 Leadership & Holistic Coaching',
    bullets: [
      'Private leadership & performance coaching',
      'Somatic trauma-informed holistic wellness',
      'Psychological safety & identity work',
      'Veteran transition & reinvention coaching',
      'Speaker, trainer & coach mentorship',
    ],
  },
]

const signatureTopics = [
  'Health is Wealth',
  'Resilience Through Reinvention',
  'Leadership From the Inside Out',
  'The Freedom Formula',
  'Burnout Prevention for High Achievers',
  'Identity Shifts & Life Transitions',
  'The 34-Minute Performance Method',
  'Confidence, Energy & Sustainable Success',
  'EQ for Leaders',
  'Rebuilding After Transition',
  'Veteran Resilience & Reinvention',
  'Somatic Wellness & Psychological Safety',
  'Empowering Teams Through Connection',
]

const stagePresence = [
  'Magnetic, high-energy presence that electrifies any room',
  'Reads the room instantly — adjusts depth, tone & pacing live',
  'Meets audiences where they are, then guides them higher',
  'Military-trained composure & grace under pressure',
  'Ensures psychological safety while challenging growth',
  'Somatic & trauma-informed — empowers without overwhelm',
  'Four Lenses facilitation: fun, engaging, transformational',
  "Mission-customized to every client's specific outcomes",
]

const idealClients = [
  'Healthcare Organizations',
  'Corporate Wellness Programs',
  "Women's Leadership",
  'Veteran-Focused Orgs',
  'Military Spouses',
  'Law Enforcement & First Responders',
  'Employee Resource Groups',
  'High-Pressure Sales Teams',
  'HR & Recruiting Teams',
  'Athletic Teams & Coaches',
  'Nonprofit & Mission-Driven',
  'Conferences & Summits',
  'Entrepreneur Communities',
  'High-Performance Teams',
  'Leadership Development Programs',
]

const faqs = [
  {
    question: 'How do I book Krystalore as a keynote speaker?',
    answer:
      'Submit the booking request form on this page or schedule a call to discuss your event details — audience, topic, format, and logistics. Krystalore speaks at corporate events, conferences, retreats, military events, women\'s empowerment gatherings, and association meetings worldwide.',
  },
  {
    question: 'What does Krystalore typically deliver?',
    answer:
      'Six core offerings: Virtual Event Host, Live Emcee + Facilitation, Leadership & Wellness Workshops, Four Lenses team workshops, Corporate Fitness & Wellness programming, and Private Coaching. Each is fully customized to your audience and outcomes.',
  },
  {
    question: 'What topics does Krystalore speak on?',
    answer:
      'Signature topics include Health is Wealth, Resilience Through Reinvention, Leadership From the Inside Out, The Freedom Formula, Burnout Prevention for High Achievers, Identity Shifts & Life Transitions, The 34-Minute Performance Method, EQ for Leaders, Veteran Resilience & Reinvention, and Somatic Wellness & Psychological Safety.',
  },
  {
    question: "What is Krystalore's speaking fee?",
    answer:
      'Virtual Event Host engagements start at $2,500+. Live Emcee + Facilitation engagements start at $5,000+ (travel billed separately). Workshops start at $3,500+. Four Lenses, Corporate Fitness, and Private Coaching are quoted based on scope. Nonprofit and military events may qualify for reduced rates.',
  },
  {
    question: 'Does Krystalore travel for speaking engagements?',
    answer:
      'Yes. Krystalore travels domestically and internationally for speaking engagements. Travel logistics are coordinated by our team. Virtual presentations are also available for remote or hybrid events.',
  },
  {
    question: 'What makes Krystalore different from other speakers?',
    answer:
      "Krystalore doesn't just motivate — she transforms. With 22 years of military leadership, 27 marathons, a 50-mile ultra, cancer survival, NFL cheerleading experience, and a thriving coaching business, she brings real-world credibility that resonates deeply with audiences. Her sessions are interactive, somatically grounded, and actionable.",
  },
  {
    question: 'Can Krystalore customize her talk for our audience?',
    answer:
      'Absolutely. Every talk is customized to your audience, industry, and event objectives. Krystalore conducts a pre-event discovery call to understand your goals and tailor her message accordingly.',
  },
  {
    question: 'Does Krystalore offer post-event follow-up?',
    answer:
      'Yes. For organizations that want lasting impact beyond the keynote, Krystalore offers post-event workshops, coaching programs, and follow-up sessions to reinforce key messages and drive behavioral change.',
  },
]

function SpeakerBookingForm() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    organization: '',
    date: '',
    budget: '',
    topic: '',
    details: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/speaker-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12 bg-[#0D9488]/5 rounded-2xl border border-[#0D9488]/20">
        <CheckCircle className="w-16 h-16 text-[#0D9488] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
        <p className="text-gray-600">
          We&apos;ll be in touch within 24 hours to discuss your event. A confirmation has
          been sent to <strong>{form.email}</strong>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
        <input
          type="text"
          required
          value={form.firstName}
          onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
          placeholder="First Name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
          placeholder="Email"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
          placeholder="Phone"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Organization</label>
        <input
          type="text"
          value={form.organization}
          onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
          placeholder="Organization"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Event Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Budget</label>
          <input
            type="text"
            value={form.budget}
            onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none"
            placeholder="$"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Speaking Topic</label>
        <select
          value={form.topic}
          onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none bg-white"
        >
          <option value="">Select a topic...</option>
          <option value="keynote">Keynote Address</option>
          <option value="leadership">Leadership & Emotional Intelligence</option>
          <option value="resilience">Resilience & Mindset</option>
          <option value="wellness">Health & Wellness</option>
          <option value="women">Women&apos;s Empowerment</option>
          <option value="veteran">Veteran Transition</option>
          <option value="workshop">Workshop / Training</option>
          <option value="emcee">Emcee / Host</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
        <textarea
          rows={4}
          value={form.details}
          onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none resize-none"
          placeholder="Tell us about your event, audience, and what you're looking for..."
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or email{' '}
          <a className="underline" href="mailto:krystalore@thecrewscoach.com">
            krystalore@thecrewscoach.com
          </a>{' '}
          directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl px-8 py-4 font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" /> {status === 'sending' ? 'Sending...' : 'Submit Booking Request'}
      </button>
    </form>
  )
}

function VideoLibrary() {
  if (!speakerVideos.length) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Krystalore in Action
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse the full video library on YouTube — keynotes, workshops, interviews, and behind
            the scenes from stages around the country.
          </p>
          <a
            href={SPEAKER_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Play className="w-5 h-5" /> Watch on YouTube
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Krystalore in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A handful of favorites organized by theme. Tap any video to watch on YouTube — or jump
            into the full library for more.
          </p>
        </div>
        <div className="space-y-16">
          {speakerVideos.map((cat) => (
            <div key={cat.slug}>
              <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{cat.name}</h3>
                  {cat.description && (
                    <p className="text-gray-600 mt-1 max-w-xl">{cat.description}</p>
                  )}
                </div>
                <a
                  href={SPEAKER_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D9488] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View all on YouTube <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.videos.map((v) => (
                  <a
                    key={v.id}
                    href={videoUrl(v.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                      <Image
                        src={videoThumbnail(v)}
                        alt={v.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-[#0D9488] fill-[#0D9488] ml-1" />
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-3 font-semibold text-gray-900 group-hover:text-[#0D9488] transition-colors line-clamp-2">
                      {v.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={SPEAKER_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Play className="w-5 h-5" /> View Full Video Library on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}

export default function SpeakerPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-end">
        <Image
          src="/images/go9/keynote.jpg"
          alt="Krystalore Crews — international speaker and corporate host"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 20%' }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10 pb-12 lg:pb-16">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#34c5c5] mb-3 drop-shadow">
            Corporate Experiences by
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg max-w-3xl leading-tight">
            Krystalore Crews
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl drop-shadow-md leading-relaxed">
            Creating experiences that energize people, elevate culture, and make teams feel
            seen — then challenge them to rise.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 max-w-3xl">
            {roleChips.map((chip) => (
              <span
                key={chip}
                className="text-xs md:text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg"
            >
              Book to Speak / Emcee
            </a>
            <Link
              href="/corporate-wellness"
              className="bg-[#E8A849] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg"
            >
              Book Leadership Training
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-5xl font-black text-white">{s.value}</div>
              <div className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white/85 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top photo strip (kept) */}
      <section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-8">
            Keynote Speaker &bull; Corporate Trainer &bull; Workshop Facilitator &bull; Emcee
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore speaking on stage' },
              { src: '/images/scraped/krystalore-speaking-2.jpg', alt: 'Krystalore at speaking engagement' },
              { src: '/images/scraped/leadership-workshop.jpg', alt: 'Leadership workshop session' },
              { src: '/images/scraped/krystalore-event.jpg', alt: 'Krystalore at event' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/krystalore-keynote.jpg"
                alt="Krystalore Crews keynote portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-3">
              About Krystalore
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              She doesn&apos;t just perform — she transforms.
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                Krystalore Crews is an internationally recognized speaker, corporate wellness
                consultant, somatic trauma-informed holistic wellness coach, and transformational
                retreat leader — known for walking into any room, instantly reading the energy, and
                meeting people exactly where they are before leading them somewhere greater.
              </p>
              <p>
                A 22-year USAF Veteran who built and executed national programs and trained coaches,
                trainers, and speakers nationwide, Krystalore brings military-grade discipline,
                adaptability, and calm-under-pressure precision to every stage. She doesn&apos;t just
                perform — she transforms, ensuring psychological safety while challenging every
                audience to grow.
              </p>
              <p>
                Amazon Best-Selling Author, former Buffalo Bills NFL Cheerleader, cancer survivor,
                and 27-time marathon finisher and 50-mile ultra-endurance race finisher — including
                her comeback from being wheelchair-bound — Krystalore is the living proof behind
                everything she teaches. Her resilience is not a metaphor. It is her story. And she
                brings every mile of it to the stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Credentials &amp; Roles
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {credentialDetails.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 flex items-start gap-3 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">{c.title}</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Krystalore Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            What Sets Krystalore Apart
          </h2>
          <blockquote className="max-w-3xl mx-auto mb-14 px-6 py-6 border-l-4 border-[#34c5c5] bg-gradient-to-r from-teal-50 to-transparent italic text-gray-700 text-lg leading-relaxed rounded-r-xl">
            &ldquo;She doesn&apos;t just show up to a room — she reads it, meets it, and moves it.
            Krystalore brings an energy that is rare: high-voltage and deeply human at the same
            time. She knows when to challenge and when to hold space, and she does both with
            military precision.&rdquo;
          </blockquote>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsApart.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-3">
              Full Service Menu
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six ways to bring Krystalore to your team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every engagement is fully customized. Pricing below reflects starting points; final
              proposals are tailored to your event, audience, and outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow flex flex-col ${
                  s.featured ? 'ring-2 ring-[#34c5c5]' : ''
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-7 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Most Requested
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <div className="text-3xl font-black text-[#0D9488] mb-1">{s.price}</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-5">{s.priceNote}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                      <Sparkles className="w-4 h-4 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="mt-auto text-center bg-gray-900 hover:bg-[#0D9488] text-white font-semibold rounded-xl px-5 py-3 transition-colors"
                >
                  Request This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Signature Topics</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Pick the angle that matches your audience. Every topic is customized to your industry,
            outcomes, and tone.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {signatureTopics.map((topic) => (
              <span
                key={topic}
                className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-[#34c5c5]/30 text-[#0D9488] font-semibold rounded-full px-5 py-2.5 text-sm md:text-base"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Stage Presence &amp; Facilitation Style
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {stagePresence.map((line) => (
              <div key={line} className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm">
                <span className="text-[#34c5c5] text-2xl leading-none mt-0.5">✦</span>
                <p className="text-gray-700 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ideal Clients</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Krystalore brings the most value to mission-driven teams, high-pressure cultures, and
            audiences ready to be challenged with care.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {idealClients.map((client) => (
              <span
                key={client}
                className="bg-gray-100 hover:bg-[#34c5c5]/10 hover:text-[#0D9488] text-gray-700 font-semibold rounded-full px-5 py-2.5 text-sm md:text-base transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* On Stage Photos (kept) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">On Stage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore on stage' },
              { src: '/images/scraped/krystalore-keynote.jpg', alt: 'Keynote presentation' },
              { src: '/images/scraped/speaking.jpg', alt: 'Speaking engagement' },
              { src: '/images/krystalore/wny-heroes-speaking.png', alt: 'WNY Heroes speaking event' },
              { src: '/images/scraped/krystalore-event.jpg', alt: 'Event presentation' },
              { src: '/images/scraped/leadership-event.jpg', alt: 'Leadership event' },
              { src: '/images/krystalore/speaker-event-ros.jpg', alt: 'Krystalore at speaking event' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Reel (kept) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Speaker Reel</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/1nDPdZd21VE"
              title="Krystalore Crews Speaker Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Video Library (new) */}
      <VideoLibrary />

      {/* Booking Request Form */}
      <section id="book" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-3">
            Book Krystalore
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Let&apos;s create an experience your people will never forget.
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Fill out the form and Krystalore&apos;s team will be in touch within 24 hours.
          </p>
          <SpeakerBookingForm />
        </div>
      </section>

      <FAQSection faqs={faqs} title="Speaker Booking FAQ" />

      {/* Closing CTA (kept) */}
      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="italic text-lg md:text-xl text-teal-50 mb-6 max-w-2xl mx-auto leading-relaxed">
            &ldquo;From wheelchair to the finish line — 27 times. Every room she enters knows
            resilience isn&apos;t a topic she covers. It&apos;s a life she&apos;s lived.&rdquo;
          </blockquote>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your audience deserves more than motivation. They deserve transformation.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#book"
              className="bg-white text-[#34c5c5] font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105"
            >
              Book to Speak / Emcee
            </a>
            <Link
              href="/corporate-wellness"
              className="bg-[#E8A849] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105"
            >
              Book Leadership Training
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/leadership-training" className="hover:text-white">
              Leadership Training
            </Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">
              EQ Training
            </Link>
            <Link href="/corporate-retreat-planning" className="hover:text-white">
              Corporate Retreats
            </Link>
            <Link href="/workshops" className="hover:text-white">
              Workshops
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2">
        <a
          href="https://jeff-cline.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}
        >
          JC
        </a>
      </div>
    </>
  )
}
