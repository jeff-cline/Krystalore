'use client'

import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ChevronRight, Mic, Play, Clock, Users, Star,
  BookOpen, ArrowRight
} from 'lucide-react'

const podcasts: Record<string, {
  title: string
  subtitle: string
  description: string
  episodes: { title: string; desc: string; duration: string }[]
  platforms: { name: string; url: string }[]
}> = {
  'krystal-clear-life': {
    title: 'Krystal Clear Life',
    subtitle: 'Bold Conversations About Leadership, Resilience & Relationships',
    description: 'The Krystal Clear Life podcast is where Krystalore Crews brings raw, real, and bold conversations about leadership, resilience, relationships, health, and living beyond your limits. Featuring interviews with veterans, entrepreneurs, athletes, and everyday heroes who refuse to settle.',
    episodes: [
      { title: 'The 34-Minute Protocol That Changed Everything', desc: 'Krystalore shares the origin story behind the 34-minute daily performance protocol and how it transformed her recovery.', duration: '42 min' },
      { title: 'From Wheelchair to Marathon Finish Line', desc: 'The raw story of overcoming cancer, being wheelchair-bound, and running 26 marathons.', duration: '38 min' },
      { title: 'Leadership Lessons from 22 Years in the Air Force', desc: 'Military leadership principles that translate to business, relationships, and life.', duration: '45 min' },
      { title: 'Why Your Relationship Needs a Remodel', desc: 'Breaking down unhealthy patterns and rebuilding connections with intention.', duration: '35 min' },
      { title: 'Bombshell Bootcamp: Fitness as a Leadership Tool', desc: 'How physical training builds the mental toughness leaders need.', duration: '40 min' },
    ],
    platforms: [
      { name: 'Apple Podcasts', url: '#' },
      { name: 'Spotify', url: '#' },
      { name: 'YouTube', url: 'https://www.youtube.com/user/krystalore' },
      { name: 'Google Podcasts', url: '#' },
    ],
  },
}

function PodcastJsonLd({ podcast, slug }: { podcast: typeof podcasts[string]; slug: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: podcast.title,
    description: podcast.description,
    url: `https://executive-krystalore.vercel.app/podcasts/${slug}`,
    author: { '@type': 'Person', name: 'Krystalore Crews' },
    publisher: { '@type': 'Organization', name: 'Crews Beyond Limits Consulting' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function PodcastDetailPage({ params }: { params: { slug: string } }) {
  const podcast = podcasts[params.slug]
  if (!podcast) notFound()

  return (
    <>
      <PodcastJsonLd podcast={podcast} slug={params.slug} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/podcasts" className="hover:text-[#34c5c5]">Podcasts</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{podcast.title}</span>
          </nav>
        </div>

        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white py-20 lg:py-28">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mic className="w-14 h-14 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{podcast.title}</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">{podcast.subtitle}</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">{podcast.description}</p>

            {/* Listen On */}
            <div className="flex flex-wrap gap-3 mb-16">
              {podcast.platforms.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-[#34c5c5] hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <Play className="w-4 h-4" /> {p.name}
                </a>
              ))}
            </div>

            {/* Episodes */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Episodes</h2>
            <div className="space-y-4">
              {podcast.episodes.map((ep, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#34c5c5] transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-[#34c5c5] text-white rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{ep.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{ep.desc}</p>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {ep.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Never Miss an Episode</h2>
            <p className="text-xl opacity-90 mb-8">Subscribe on your favorite platform and join the conversation.</p>
            <Link href="/contact" className="bg-white text-[#E8A849] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Stay Connected
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/about" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">About Krystalore</h3>
                <p className="text-sm text-gray-500 mt-1">The voice behind the mic</p>
              </Link>
              <Link href="/books" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <BookOpen className="w-6 h-6 text-[#34c5c5] mb-2" />
                <h3 className="font-bold text-gray-900">Books</h3>
                <p className="text-sm text-gray-500 mt-1">Read while you listen</p>
              </Link>
              <Link href="/courses" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">Courses</h3>
                <p className="text-sm text-gray-500 mt-1">Go deeper with structured learning</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
