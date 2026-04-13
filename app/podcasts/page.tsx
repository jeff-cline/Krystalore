'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Headphones, Play, ExternalLink, Mic, ChevronDown, ChevronUp, Radio, Users, Heart, Star, Wind, Moon, Flame, Sun, ArrowRight } from 'lucide-react'

const podcasts = [
  {
    name: 'The Krystal Clear Life Podcast',
    tagline: 'Where clarity, confidence, and connection lead the way.',
    description: 'Engaging conversations, motivational insights, and practical advice to help you break through limits and live a fulfilling life amidst the chaos. Every episode inspires you to embrace a positive mindset and connect deeply with a community that understands growth and resilience.',
    image: '/images/podcast/krystal-clear-life.png',
    color: 'from-[#34c5c5] to-[#006767]',
    episodes: [
      { title: 'EP 1: Unveiling the Journey', duration: '22 min' },
      { title: 'EP 2: The Freedom Formula', duration: '33 min' },
      { title: 'EP 3: From Chaos to Clarity', duration: '34 min' },
      { title: 'EP 4: Health and Wealth', duration: '39 min' },
      { title: 'Igniting Passion: A Journey Within', duration: '30 min' },
    ],
    platforms: [
      { name: 'Spotify', url: 'https://open.spotify.com/show/6hmHDwwCz92RugLTZ50bXi', color: 'bg-[#1DB954]' },
      { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/the-krystal-clear-life-podcast', color: 'bg-purple-600' },
    ],
    featured: true,
  },
  {
    name: 'Your Next Mission',
    tagline: 'From Service to Success — interviewing female Veterans on their transition story.',
    description: 'Powerful conversations with women who served in the military and are now building extraordinary lives in the civilian world. Each episode features a veteran sharing her story of transition, resilience, and the mission after the mission.',
    image: '/images/podcast/your-next-mission.png',
    color: 'from-gray-800 to-gray-900',
    episodes: [],
    platforms: [
      { name: 'Megaphone', url: 'https://cms.megaphone.fm/channel/servicetosuccessyournextmissionafterthemilitary', color: 'bg-blue-600' },
    ],
    featured: false,
  },
  {
    name: 'Monday Motivation LIVE',
    tagline: 'Start your week off right! Join Krystalore LIVE on all socials.',
    description: 'Every Monday, Krystalore goes live to kick-start your week with energy, accountability, and intention. Mindset activation, goal setting, and community connection — all in one powerful session. Join the THRIVE Network for access.',
    image: '/images/podcast/monday-motivation.png',
    color: 'from-[#E8A849] to-orange-600',
    episodes: [],
    platforms: [
      { name: 'Facebook Group', url: 'https://www.facebook.com/groups/crewsbeyondlimits', color: 'bg-blue-700' },
    ],
    featured: false,
  },
]

const faqs = [
  { q: 'Where can I listen to The Krystal Clear Life Podcast?', a: 'The Krystal Clear Life Podcast is available on Spotify, Apple Podcasts, and most major podcast platforms. Click "Listen on Spotify" above to start listening.' },
  { q: 'How often are new episodes released?', a: 'New episodes drop regularly. Follow the podcast on your preferred platform and turn on notifications to never miss an episode.' },
  { q: 'Can I be a guest on the podcast?', a: 'Yes! If you have a story of resilience, leadership, or transformation to share, reach out to krystalore@thecrewscoach.com with your story and topic idea.' },
  { q: 'What is Monday Motivation LIVE?', a: 'Every Monday, Krystalore goes live on Facebook and social media to help you start the week with energy and intention. Join the Crews Beyond Limits Facebook group to participate.' },
  { q: 'What is Your Next Mission about?', a: 'Your Next Mission interviews female veterans about their transition from military service to civilian success. It celebrates the strength and stories of women who served.' },
  { q: 'Is there a community I can join?', a: 'Yes! Join the THRIVE Network — our free community on Facebook at facebook.com/groups/crewsbeyondlimits for weekly motivation, support, and connection.' },
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

export default function PodcastsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The Krystal Clear Life Podcast",
    "description": "Engaging conversations, motivational insights, and practical advice to help you break through limits.",
    "url": "https://krystalore.com/podcasts",
    "author": { "@type": "Person", "name": "Krystalore Crews" },
    "webFeed": "https://open.spotify.com/show/6hmHDwwCz92RugLTZ50bXi",
    "image": "https://krystalore.com/images/podcast/krystal-clear-life.png",
  }

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-[#006767] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Headphones className="h-6 w-6 text-[#E8A849]" />
                <span className="text-[#E8A849] font-semibold text-sm uppercase tracking-wider">Podcasts</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Listen to <span className="text-teal">Krystalore</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg">
                Every episode inspires you to break past limitations, embrace a positive mindset, and connect deeply with a community that understands growth and resilience.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://open.spotify.com/show/6hmHDwwCz92RugLTZ50bXi" target="_blank" rel="noopener noreferrer"
                  className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
                  <Play className="h-5 w-5" /> Listen on Spotify
                </a>
                <a href="https://www.facebook.com/groups/crewsbeyondlimits" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/20">
                  <Users className="h-5 w-5" /> Join THRIVE Network
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-teal/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image src="/images/podcast/krystal-clear-life.png" alt="The Krystal Clear Life Podcast by Krystalore Crews" fill className="object-cover" sizes="320px" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Shows */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">All Shows</h2>
        <div className="space-y-8">
          {podcasts.map((podcast) => (
            <div key={podcast.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Artwork */}
                <div className={`relative bg-gradient-to-br ${podcast.color} p-6 flex items-center justify-center min-h-[250px] md:min-h-0`}>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-xl">
                    <Image src={podcast.image} alt={podcast.name} fill className="object-cover" sizes="250px" />
                  </div>
                </div>
                {/* Details */}
                <div className="md:col-span-2 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{podcast.name}</h3>
                  <p className="text-teal font-medium text-sm mb-3">{podcast.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{podcast.description}</p>

                  {/* Episodes preview */}
                  {podcast.episodes.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Latest Episodes</h4>
                      <div className="space-y-2">
                        {podcast.episodes.map((ep, i) => (
                          <div key={i} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg text-sm">
                            <div className="flex items-center gap-3">
                              <Play className="h-4 w-4 text-teal flex-shrink-0" />
                              <span className="text-gray-900 font-medium">{ep.title}</span>
                            </div>
                            <span className="text-gray-400 text-xs whitespace-nowrap">{ep.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Platform buttons */}
                  <div className="flex flex-wrap gap-2">
                    {podcast.platforms.map((platform) => (
                      <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer"
                        className={`${platform.color} text-white font-medium py-2 px-5 rounded-lg text-sm flex items-center gap-2 hover:opacity-90 transition-opacity`}>
                        <ExternalLink className="h-3.5 w-3.5" /> {platform.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Mic, label: '4 Shows', desc: 'Podcasts & meditations' },
            { icon: Headphones, label: '20+ Episodes', desc: 'And growing weekly' },
            { icon: Wind, label: '15 Meditations', desc: 'Just Breathe library' },
            { icon: Star, label: '5-Star', desc: 'Listener reviews' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <stat.icon className="h-7 w-7 text-teal mx-auto mb-2" />
              <p className="font-bold text-gray-900">{stat.label}</p>
              <p className="text-gray-500 text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Just Breathe Meditation Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Cover Art + Intro */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-teal" />
                <span className="text-teal font-semibold text-sm uppercase tracking-wider">Meditation Library</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Just Breathe</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                15 guided meditations for grounding, clarity, confidence, and healing. Short 3-minute sessions designed for busy leaders.
              </p>
              <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-xl shadow-purple-500/20 mb-6">
                <Image src="/images/just-breathe/cover.jpg" alt="Just Breathe Meditation Library" fill className="object-cover" sizes="160px" />
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://open.spotify.com/show/6acctiaNwQqFy8HVuiXlN7" target="_blank" rel="noopener noreferrer"
                  className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2 text-sm">
                  <Play className="h-4 w-4" /> Listen Free
                </a>
                <Link href="/just-breathe" className="bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm border border-white/20 flex items-center gap-2">
                  All Episodes <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 3 Series Cards */}
            <div className="lg:col-span-2 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: 'Awakening',
                  icon: Sun,
                  color: 'from-teal to-[#006767]',
                  episodes: '5 Episodes',
                  desc: 'Ground yourself. Find clarity, stillness, and reconnect with your authentic truth.',
                  highlights: ['Morning Clarity', 'Grounding Into Stillness', 'Breathing Through the Messy Middle'],
                },
                {
                  name: 'Activation',
                  icon: Flame,
                  color: 'from-[#E8A849] to-orange-600',
                  episodes: '5 Episodes',
                  desc: 'Ignite your power. Movement, discipline, and mindset meditations for high achievers.',
                  highlights: ['Post-Workout Rewire', 'Discipline Download', 'Stronger Than You Think'],
                },
                {
                  name: 'Rebirth',
                  icon: Moon,
                  color: 'from-purple-600 to-indigo-700',
                  episodes: '5 Episodes',
                  desc: 'Release the old, welcome the new. Healing, identity shifts, and new beginnings.',
                  highlights: ['Healing the High Performer', 'The Identity Shift', 'Rise Beyond Loss'],
                },
              ].map((s, i) => (
                <Link key={i} href="/just-breathe" className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all">
                  <div className={`bg-gradient-to-br ${s.color} p-5 text-white`}>
                    <s.icon className="h-6 w-6 mb-2 opacity-80" />
                    <h3 className="font-bold text-lg mb-0.5">{s.name}</h3>
                    <p className="text-white/70 text-xs">{s.episodes}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4">
                    <p className="text-gray-300 text-xs leading-relaxed mb-3">{s.desc}</p>
                    <ul className="space-y-1.5">
                      {s.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                          <Play className="h-3 w-3 text-teal flex-shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <p className="text-teal text-xs font-medium mt-3 flex items-center gap-1 group-hover:underline">
                      Explore Series <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Host */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-[#E8A849] to-orange-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto min-h-[300px]">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews — podcast host" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Your Host</h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                Krystalore Crews is a leadership coach, fitness expert, keynote speaker, and author. With decades of experience empowering entrepreneurs, veterans, and leaders, she brings raw authenticity and actionable wisdom to every conversation.
              </p>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                Whether she&apos;s interviewing veterans on Your Next Mission, breaking down the Freedom Formula on The Krystal Clear Life, or firing up the community on Monday Motivation — Krystalore meets you where you are and pushes you to where you&apos;re meant to be.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="bg-white text-[#E8A849] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  Read Full Bio
                </Link>
                <Link href="/contact" className="border-2 border-white/50 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors text-sm">
                  Book Krystalore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="mb-16 text-center">
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-200">
          <Radio className="h-10 w-10 text-teal mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Never Miss an Episode</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Follow on Spotify, join the THRIVE Network on Facebook, and subscribe to get notified when new episodes drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://open.spotify.com/show/6hmHDwwCz92RugLTZ50bXi" target="_blank" rel="noopener noreferrer"
              className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Play className="h-5 w-5" /> Follow on Spotify
            </a>
            <a href="https://www.facebook.com/groups/crewsbeyondlimits" target="_blank" rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Users className="h-5 w-5" /> Join THRIVE Network
            </a>
            <Link href="/just-breathe"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Wind className="h-5 w-5" /> Just Breathe Meditations
            </Link>
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
