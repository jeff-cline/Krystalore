'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Headphones,
  Play,
  Calendar,
  Clock,
  Star,
  ArrowRight,
} from 'lucide-react'

const podcasts = [
  {
    title: 'Krystal Clear Life Podcast',
    description:
      'Weekly deep-dive conversations on leadership, personal development, and life transformation. Real talk with inspiring guests and practical insights you can act on tomorrow.',
    slug: 'krystal-clear-life',
    cover: '/images/podcast/krystal-clear-life.png',
    featured: true,
    episodes: 156,
    frequency: 'Weekly',
    category: 'Leadership & Life',
    rating: 4.9,
    subscribers: 45000,
    latestEpisode: {
      title: 'Breaking Through Your Comfort Zone: Why Discomfort Is Your Friend',
      date: 'Feb 5, 2026',
      duration: '42 min',
    },
    accent: '#0D9488',
  },
  {
    title: 'Your Next Mission Podcast',
    description:
      'Built for Veterans transitioning from military service to civilian leadership and entrepreneurship. The conversations no one else is having about life after service.',
    slug: 'your-next-mission',
    cover: '/images/podcast/your-next-mission.png',
    featured: true,
    episodes: 89,
    frequency: 'Bi-weekly',
    category: 'Veterans & Transition',
    rating: 4.8,
    subscribers: 23000,
    latestEpisode: {
      title: 'Translating Military Leadership Skills in Corporate America',
      date: 'Feb 1, 2026',
      duration: '38 min',
    },
    accent: '#e07800',
  },
  {
    title: 'Monday Motivation LIVE',
    description:
      'Start your week with high-energy motivation, actionable tips, and the mindset shifts you need to crush your goals.',
    slug: 'monday-motivation-live',
    cover: '/images/podcast/monday-motivation.png',
    featured: false,
    episodes: 124,
    frequency: 'Weekly',
    category: 'Motivation & Mindset',
    rating: 4.7,
    subscribers: 31000,
    latestEpisode: {
      title: 'The Power of Small Wins: How to Build Unstoppable Momentum',
      date: 'Feb 5, 2026',
      duration: '15 min',
    },
    accent: '#E8A849',
  },
  {
    title: 'Freedom Friday',
    description:
      'End your week by breaking free from limiting beliefs, negative patterns, and anything holding you back from your potential.',
    slug: 'freedom-friday',
    cover: '/images/go9/group-sunset.jpg',
    featured: false,
    episodes: 78,
    frequency: 'Weekly',
    category: 'Personal Freedom',
    rating: 4.8,
    subscribers: 19000,
    latestEpisode: {
      title: 'Releasing the Need for Perfectionism',
      date: 'Feb 2, 2026',
      duration: '28 min',
    },
    accent: '#34c5c5',
  },
  {
    title: 'Just Breathe — Meditation Series',
    description:
      'Guided meditations, breathwork, and mindfulness practices for high performers. Three-to-four minute resets you can do between meetings.',
    slug: 'just-breathe',
    cover: '/images/just-breathe/cover.jpg',
    featured: false,
    episodes: 67,
    frequency: 'Weekly',
    category: 'Meditation & Wellness',
    rating: 4.9,
    subscribers: 28000,
    latestEpisode: {
      title: '10-Minute Morning Clarity Meditation',
      date: 'Feb 4, 2026',
      duration: '12 min',
    },
    accent: '#0D9488',
  },
]

const totalSubscribers = podcasts.reduce((sum, p) => sum + p.subscribers, 0)
const totalEpisodes = podcasts.reduce((sum, p) => sum + p.episodes, 0)

/* ---------------- Platform brand marks (real SVGs) ---------------- */

function SpotifyMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 168 168" className={className} aria-hidden="true">
      <path fill="#1DB954" d="M84 0a84 84 0 1 0 84 84A84.1 84.1 0 0 0 84 0Zm38.5 121.1a5.2 5.2 0 0 1-7.2 1.7c-19.6-12-44.4-14.7-73.5-8a5.2 5.2 0 1 1-2.3-10.2c31.9-7.3 59.2-4.2 81.3 9.4a5.2 5.2 0 0 1 1.7 7.1Zm10.3-22.8a6.5 6.5 0 0 1-8.9 2.1c-22.5-13.8-56.9-17.8-83.5-9.7a6.5 6.5 0 1 1-3.8-12.5c30.4-9.2 68.3-4.7 94.1 11.1a6.5 6.5 0 0 1 2.1 9Zm.9-23.7c-27-16-71.5-17.5-97.3-9.7a7.8 7.8 0 1 1-4.5-15c29.6-9 78.7-7.2 109.8 11.2a7.8 7.8 0 1 1-8 13.5Z"/>
    </svg>
  )
}

function ApplePodcastsMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ap-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F452FF"/>
          <stop offset="1" stopColor="#832BC1"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#ap-grad)"/>
      <path fill="#fff" d="M128 56a52 52 0 0 1 52 52c0 18-9 34-23 43l9 30a8 8 0 0 1-8 11h-60a8 8 0 0 1-8-11l9-30a52 52 0 0 1-23-43 52 52 0 0 1 52-52Zm0 24a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 50a14 14 0 1 1-14 14 14 14 0 0 1 14-14Z"/>
    </svg>
  )
}

function YouTubeMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 180" className={className} aria-hidden="true">
      <rect width="256" height="180" rx="32" fill="#FF0000"/>
      <polygon points="104,55 104,125 165,90" fill="#fff"/>
    </svg>
  )
}

function AmazonMusicMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <rect width="256" height="256" rx="56" fill="#0099C7"/>
      <circle cx="128" cy="128" r="60" fill="none" stroke="#fff" strokeWidth="14"/>
      <circle cx="128" cy="128" r="20" fill="#fff"/>
      <path fill="#FF9900" d="M64 200c40 20 88 20 128 0l-8-14c-36 18-76 18-112 0Z"/>
    </svg>
  )
}

function InsightTimerMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <rect width="256" height="256" rx="56" fill="#0F2742"/>
      <path fill="#F2A65A" d="M128 56c-30 0-58 16-58 16 8 22 28 56 58 56s50-34 58-56c0 0-28-16-58-16Z"/>
      <path fill="#5BBFB2" d="M128 200c-30 0-58-16-58-16 8-22 28-56 58-56s50 34 58 56c0 0-28 16-58 16Z"/>
    </svg>
  )
}

function StitcherMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <rect width="256" height="256" rx="56" fill="#F39440"/>
      <path
        fill="#fff"
        d="M80 96h20v64H80zm32-16h20v96h-20zm32 16h20v64h-20zm32 16h20v32h-20z"
      />
    </svg>
  )
}

const platforms = [
  { name: 'Spotify', url: '#', Mark: SpotifyMark },
  { name: 'Apple Podcasts', url: '#', Mark: ApplePodcastsMark },
  { name: 'YouTube', url: '#', Mark: YouTubeMark },
  { name: 'Amazon Music', url: '#', Mark: AmazonMusicMark },
  { name: 'Insight Timer', url: '#', Mark: InsightTimerMark },
  { name: 'Stitcher', url: '#', Mark: StitcherMark },
]

/* ---------------- Page ---------------- */

export default function PodcastsPage() {
  const featured = podcasts.filter((p) => p.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO — full, not cropped */}
        <section className="relative bg-gradient-to-b from-[#F6F8FA] to-white pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/10 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Headphones className="w-3.5 h-3.5" /> Five Shows · One Krystalore
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                  Krystal&apos;s <span className="text-[#0D9488]">Podcast Channels</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                  Turn your commute, your workout, or your morning into a powerful learning session. Five shows covering leadership, Veterans transition, motivation, meditation, and personal freedom.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
                  >
                    Start Listening <Play className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="#all-shows"
                    className="inline-flex items-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-7 py-3.5 rounded-full hover:bg-[#34c5c5]/5 transition-colors"
                  >
                    Browse All Shows
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/go9/speaking-headshot.jpg"
                  alt="Krystalore Crews — host of the Beyond Limits podcast network"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <Headphones className="h-7 w-7 text-[#e07800] mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-black text-gray-900">{totalSubscribers.toLocaleString()}</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mt-1">Subscribers</p>
            </div>
            <div>
              <Play className="h-7 w-7 text-[#0D9488] mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-black text-gray-900">{totalEpisodes}</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mt-1">Episodes</p>
            </div>
            <div>
              <Star className="h-7 w-7 text-[#E8A849] mx-auto mb-2 fill-[#E8A849]" />
              <p className="text-2xl md:text-3xl font-black text-gray-900">4.8</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mt-1">Avg Rating</p>
            </div>
          </div>
        </section>

        {/* FEATURED SERIES — JUST BREATHE */}
        <section className="py-16 bg-[#F6F8FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-5 gap-0 items-stretch">
                <div className="md:col-span-2 relative min-h-[280px] md:min-h-[420px]">
                  <Image
                    src="/images/just-breathe/cover.jpg"
                    alt="Just Breathe — Meditation Series for High Performers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                  <span className="inline-flex items-center gap-2 bg-[#E8A849]/15 text-[#e07800] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    <Star className="h-3.5 w-3.5 fill-current" /> Featured Series
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
                    Just Breathe
                  </h2>
                  <p className="text-xl text-[#0D9488] font-bold mb-4">
                    Meditation Series for High Performers
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
                    Three-to-four minute resets engineered for executives, founders, and the women carrying everything. Pre-meeting clarity, post-workout rewire, recovery on demand.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/just-breathe"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                      Listen to Just Breathe <Play className="h-4 w-4 fill-current" />
                    </Link>
                    <Link
                      href="/podcasts/just-breathe"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-[#34c5c5] hover:text-[#0D9488] font-bold px-7 py-3.5 rounded-full transition-colors"
                    >
                      Episode Library
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 mt-5 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-[#e07800]" /> 3-4 min sessions
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Headphones className="h-4 w-4 text-[#0D9488]" /> Apple · Spotify · Insight Timer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SHOWS — image per card */}
        <section id="featured" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Featured Shows</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Start Here</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Two flagship shows that anchor the network. Long-form on leadership, life, and the work that actually changes things.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((p) => (
                <article key={p.slug} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.cover}
                      alt={`${p.title} — cover art`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-4 left-4 bg-white text-[#e07800] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                      Featured
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${p.accent}1a`, color: p.accent }}
                      >
                        {p.category}
                      </span>
                      <span className="text-xs text-gray-500">{p.frequency}</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{p.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-[#F6F8FA] rounded-xl py-3 text-center">
                        <p className="text-lg font-black text-gray-900">{p.episodes}</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Episodes</p>
                      </div>
                      <div className="bg-[#F6F8FA] rounded-xl py-3 text-center">
                        <p className="text-lg font-black text-gray-900">{p.subscribers.toLocaleString()}</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Subscribers</p>
                      </div>
                    </div>

                    <div className="bg-[#F6F8FA] rounded-xl p-4 mb-5 border border-gray-100">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1.5">Latest Episode</p>
                      <p className="font-bold text-gray-900 mb-1.5 leading-snug">{p.latestEpisode.title}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.latestEpisode.date}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.latestEpisode.duration}</span>
                      </p>
                    </div>

                    <Link
                      href={`/podcasts/${p.slug}`}
                      className="block w-full text-center bg-gradient-to-r from-[#0D9488] to-[#34c5c5] hover:from-[#e07800] hover:to-[#E8A849] text-white font-black py-3.5 rounded-full transition-all"
                    >
                      Listen Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ALL SHOWS — each card has image */}
        <section id="all-shows" className="py-20 bg-[#F6F8FA] scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">The Network</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">All Podcast Channels</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcasts.map((p) => (
                <article key={p.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                  <div className="relative aspect-square">
                    <Image
                      src={p.cover}
                      alt={`${p.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="inline-flex self-start items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
                      style={{ backgroundColor: `${p.accent}1a`, color: p.accent }}
                    >
                      {p.category}
                    </span>
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{p.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="flex justify-between bg-[#F6F8FA] rounded-lg px-3 py-2">
                        <span className="text-gray-500">Episodes</span>
                        <span className="font-bold text-gray-900">{p.episodes}</span>
                      </div>
                      <div className="flex justify-between bg-[#F6F8FA] rounded-lg px-3 py-2">
                        <span className="text-gray-500">Rating</span>
                        <span className="font-bold text-gray-900 flex items-center gap-1">
                          <Star className="h-3 w-3 text-[#E8A849] fill-[#E8A849]" /> {p.rating}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/podcasts/${p.slug}`}
                      className="block w-full text-center border-2 border-gray-200 hover:border-[#34c5c5] hover:bg-[#34c5c5]/5 text-gray-700 hover:text-[#0D9488] py-2.5 rounded-full text-sm font-bold transition-all"
                    >
                      View Episodes
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Krystalore in action — photo gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Behind the Mic</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">In the Room With Krystalore</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Live tapings, on-stage interviews, retreat conversations, and the off-camera work that fuels every episode.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/images/go9/keynote.jpg', alt: 'Krystalore Crews speaking at a leadership keynote' },
                { src: '/images/krystalore/REM08628.jpg', alt: 'Krystalore Crews — on-stage' },
                { src: '/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg', alt: 'Krystalore Crews leading a session' },
                { src: '/images/go9/coaching.jpg', alt: 'Krystalore Crews — coaching conversation' },
                { src: '/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg', alt: 'Krystalore Crews portrait' },
                { src: '/images/go9/group.jpg', alt: 'Krystalore Crews with community' },
                { src: '/images/go9/hero.jpg', alt: 'Krystalore Crews — outdoor' },
                { src: '/images/krystalore/cropped-HighResolution-143-scaled-2.jpg', alt: 'Krystalore Crews — retreat' },
              ].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTEN ANYWHERE — real brand logos */}
        <section className="py-20 bg-gradient-to-br from-[#F6F8FA] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">Listen Anywhere</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Available on Every Platform You Use</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Subscribe on your favorite app. Episodes drop automatically — no missed weeks.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  className="group bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-xl hover:border-[#34c5c5]/40 hover:-translate-y-0.5 transition-all"
                >
                  <p.Mark className="w-14 h-14 mb-3" />
                  <span className="text-sm font-bold text-gray-800 group-hover:text-[#0D9488] transition-colors">
                    {p.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Start <span className="underline decoration-white/50 underline-offset-4">Listening</span> Today
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-xl mx-auto">
              Transform your daily routine with powerful insights, real talk, and the kind of motivation that actually moves you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/podcasts/krystal-clear-life"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#e07800] font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
              >
                Start With Krystal Clear Life <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/just-breathe"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Try a 3-Minute Meditation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
