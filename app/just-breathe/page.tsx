'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Wind, Play, Headphones, Heart, Sparkles, Flame, Sun, Moon, ChevronDown, ChevronUp, Clock } from 'lucide-react'

const SPOTIFY_SHOW_ID = '6acctiaNwQqFy8HVuiXlN7'

const series = [
  {
    name: 'Rebirth Series',
    icon: Moon,
    color: 'from-purple-600 to-indigo-700',
    tagColor: 'bg-purple-100 text-purple-700',
    description: 'Release the old, welcome the new. Meditations for healing, identity shifts, and new beginnings.',
    episodes: [
      { num: 15, title: 'Healing the High Performer', duration: '3 min', desc: 'Address suppressed emotions and discover authentic strength through vulnerability.' },
      { num: 14, title: 'Your New Beginning', duration: '3 min', desc: 'Release yesterday and welcome fresh starts with intentional hope.' },
      { num: 13, title: 'The Identity Shift', duration: '3 min', desc: 'Step into the evolved version of yourself. Release old patterns, claim new chapters.' },
      { num: 12, title: 'The Compassion Reset', duration: '3 min', desc: 'Nervous system relief through self-compassion and grounded presence.' },
      { num: 11, title: 'Rise Beyond Loss', duration: '4 min', desc: 'A safe space for healing from identity, relationship, or directional loss.' },
    ],
  },
  {
    name: 'Activation Series',
    icon: Flame,
    color: 'from-[#E8A849] to-orange-600',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'Ignite your power. Movement, discipline, and mindset meditations for high achievers.',
    episodes: [
      { num: 10, title: 'The Post-Workout Rewire', duration: '3 min', desc: 'Capitalize on post-exercise mental openness to strengthen mindset and seal in growth.' },
      { num: 9, title: 'The Discipline Download', duration: '3 min', desc: 'Micro-habits, consistency, and systems that support lasting transformation.' },
      { num: 8, title: 'Move Your Body, Move Your Life', duration: '3 min', desc: 'How intentional movement shifts energy and creates momentum across all life areas.' },
      { num: 7, title: 'Stronger Than You Think', duration: '3 min', desc: 'Reconnect with your inner resilience and untapped potential.' },
      { num: 6, title: 'Ignite Your 34-Minute Mindset', duration: '3 min', desc: 'Daily discipline practices for reclaiming your time and energy.' },
    ],
  },
  {
    name: 'Awakening Series',
    icon: Sun,
    color: 'from-teal to-[#006767]',
    tagColor: 'bg-teal/10 text-teal',
    description: 'Come home to yourself. Grounding, clarity, and reconnection with your authentic truth.',
    episodes: [
      { num: 5, title: 'Returning Home to Yourself', duration: '3 min', desc: 'Reconnect with your truth and authentic inner essence beneath the noise.' },
      { num: 4, title: 'Breathing Through the Messy Middle', duration: '3 min', desc: 'Find peace during life transitions and uncertainty.' },
      { num: 3, title: 'Morning Clarity Meditation', duration: '3 min', desc: 'Start your day grounded, clear, and intentional.' },
      { num: 2, title: 'Grounding Into Stillness', duration: '3 min', desc: 'A foundational practice for calming the mind and centering the body.' },
      { num: 1, title: 'Welcome to Just Breathe', duration: '3 min', desc: 'Your introduction to the Beyond Limits Meditation Library.' },
    ],
  },
]

const benefits = [
  { icon: Heart, title: 'Healing', desc: 'Process emotions, release trauma, and restore your nervous system through guided breathwork.' },
  { icon: Sparkles, title: 'Clarity', desc: 'Cut through mental fog and access the clear-headed confidence to make powerful decisions.' },
  { icon: Flame, title: 'Activation', desc: 'Pair with your workouts and morning routine to amplify energy and lock in growth.' },
  { icon: Wind, title: 'Grounding', desc: 'Return to center when life gets chaotic. 3-minute sessions you can do anywhere, anytime.' },
]

const faqs = [
  { q: 'How long are the meditations?', a: 'Most sessions are 3-4 minutes — designed to fit into even the busiest schedule. You can do them before a workout, during a break, or right before bed.' },
  { q: 'Do I need meditation experience?', a: 'Not at all. Krystalore guides you through every breath. The Awakening Series is perfect for beginners, while the Activation and Rebirth Series go deeper.' },
  { q: 'Where can I listen?', a: 'Just Breathe is available on Spotify and most podcast platforms. You can also listen to the embedded player right here on this page.' },
  { q: 'What order should I listen in?', a: 'Start with the Awakening Series (Episodes 1-5) to build your foundation, then move to the Activation Series (6-10) for energy and discipline, and the Rebirth Series (11-15) for deep transformation.' },
  { q: 'Can I use these during workouts?', a: 'Absolutely! The Activation Series is specifically designed to pair with physical training. Episode 10 (The Post-Workout Rewire) is perfect right after exercise.' },
  { q: 'Is this free?', a: 'Yes! The entire Just Breathe meditation library is free on Spotify. Follow the show to get notified when new episodes drop.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="text-gray-600 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function JustBreathePage() {
  const [activeSeries, setActiveSeries] = useState(0)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Just Breathe: A Beyond Limits Meditation Library",
    "description": "Guided meditations for grounding, clarity, confidence, healing, and transformation by Krystalore Crews.",
    "url": "https://krystalore.com/just-breathe",
    "author": { "@type": "Person", "name": "Krystalore Crews" },
    "webFeed": `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    "image": "https://krystalore.com/images/just-breathe/cover.jpg",
    "genre": ["Meditation", "Mindfulness", "Health & Wellness"],
    "numberOfEpisodes": 15,
  }

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wind className="h-5 w-5 text-teal" />
                <span className="text-teal font-semibold text-sm uppercase tracking-wider">Meditation Library</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Just <span className="text-teal">Breathe</span>
              </h1>
              <p className="text-lg sm:text-xl text-purple-200 font-medium mb-2">
                A Beyond Limits Meditation Library
              </p>
              <p className="text-gray-400 text-base mb-8 max-w-lg">
                Short, powerful guided meditations for grounding, clarity, confidence, healing, and next-level transformation. Designed for busy leaders who need peace in 3 minutes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`} target="_blank" rel="noopener noreferrer"
                  className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-green-900/30">
                  <Play className="h-5 w-5" /> Listen Free on Spotify
                </a>
                <a href="#episodes" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/20">
                  <Headphones className="h-5 w-5" /> Browse Episodes
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 ring-4 ring-white/10">
                <Image src="/images/just-breathe/cover.jpg" alt="Just Breathe: A Beyond Limits Meditation Library with Krystalore Crews" fill className="object-cover" sizes="320px" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Embed Player */}
      <section className="mb-12">
        <div className="rounded-xl overflow-hidden">
          <iframe
            src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">What Meditation Does for You</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 text-center hover:shadow-md hover:border-teal/30 transition-all group">
              <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-teal/20 transition-colors">
                <b.icon className="h-6 w-6 text-teal" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{b.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Episodes by Series */}
      <section id="episodes" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">15 Guided Meditations</h2>
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">Three transformational series — start with Awakening, progress through Activation, and evolve with Rebirth.</p>

        {/* Series tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide justify-center">
          {series.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveSeries(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeSeries === i
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <s.icon className="h-4 w-4" /> {s.name}
            </button>
          ))}
        </div>

        {/* Active series */}
        {series.map((s, si) => si === activeSeries && (
          <div key={s.name}>
            <div className={`bg-gradient-to-r ${s.color} rounded-2xl p-6 sm:p-8 text-white mb-6`}>
              <div className="flex items-center gap-3 mb-2">
                <s.icon className="h-7 w-7" />
                <h3 className="text-xl sm:text-2xl font-bold">{s.name}</h3>
              </div>
              <p className="text-white/80 max-w-lg">{s.description}</p>
            </div>
            <div className="space-y-3">
              {s.episodes.map((ep) => (
                <a
                  key={ep.num}
                  href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:shadow-md hover:border-teal/30 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/10 transition-colors">
                    <Play className="h-5 w-5 text-gray-400 group-hover:text-teal transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.tagColor}`}>Ep. {ep.num}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {ep.duration}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{ep.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">{ep.desc}</p>
                  </div>
                  <Headphones className="h-5 w-5 text-gray-300 group-hover:text-teal transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About + CTA */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto min-h-[300px]">
              <Image src="/images/go9/meditation.webp" alt="Krystalore Crews meditation and mindfulness" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your Guide</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Krystalore Crews is a veteran, athlete, global retreat leader, and the creator of the Beyond Limits movement. She brings decades of experience in coaching, fitness, and personal transformation to each guided session.
              </p>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Whether you&apos;re a high-performing executive who needs 3 minutes of grounding, a veteran processing a transition, or someone simply ready to breathe deeper — this library was made for you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`} target="_blank" rel="noopener noreferrer"
                  className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 text-sm">
                  <Play className="h-4 w-4" /> Start Listening Free
                </a>
                <a href="/health-mastery" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors text-sm border border-white/20">
                  Explore Health Mastery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl border border-gray-200 px-6">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </section>
    </MainLayout>
  )
}
