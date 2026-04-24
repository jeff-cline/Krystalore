'use client'

import { useState, useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Lock, Users, Clock, Calendar, Video, Star, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  membershipLevel: string
  videoCount: number
}

const EMOJI_MAP: Record<string, string> = {
  'monday-motivator': '🔥', 'wacky-wednesday': '🎯', 'fighter-friday': '💪',
  'modified-series': '🌟', 'accelerated-series': '⚡', 'weighted-series': '🏋️',
  'dance-series': '💃', 'holiday-series': '🎄', 'course-content': '🎓',
  'podcast-episodes': '🎙️', 'live-replays': '📺',
}

const THUMBNAIL_MAP: Record<string, string> = {
  'monday-motivator': '/images/go9/keynote.jpg',
  'wacky-wednesday': '/images/go9/coaching.jpg',
  'fighter-friday': '/images/go9/fitness.jpg',
  'modified-series': '/images/go9/community-hands.jpg',
  'accelerated-series': '/images/go9/fitness-alt.jpg',
  'weighted-series': '/images/go9/fitness-balcony.jpg',
  'dance-series': '/images/go9/group.jpg',
  'holiday-series': '/images/go9/group-sunset.jpg',
  'course-content': '/images/go9/corporate.jpg',
  'podcast-episodes': '/images/go9/portrait.jpg',
  'live-replays': '/images/go9/hero.jpg',
}
const DEFAULT_THUMBNAIL = '/images/go9/retreat-costa-rica.jpg'

export default function VideoVaultPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((data) => {
        setCategories(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const featured = filtered.filter((c) =>
    ['monday-motivator', 'fighter-friday', 'course-content'].includes(c.slug)
  )

  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-950">
            Video <span className="text-teal">Vault</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Access premium videos including fitness series, course content, live replays,
            and exclusive training sessions. Everything you need for your transformation journey.
          </p>

          <div className="bg-gradient-to-r from-teal/10 to-primary/10 border border-teal/20 rounded-lg p-6 max-w-2xl mx-auto">
            <Lock className="h-12 w-12 text-teal mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-950 mb-2">Login to Access Full Video Vault</h2>
            <p className="text-gray-700 mb-4">
              Sign in to unlock all video categories and start your transformation journey today.
            </p>
            <Link href="/auth/login" className="btn-teal inline-flex items-center">
              Login to Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card text-center">
            <Play className="h-8 w-8 text-teal mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-950">{categories.reduce((s, c) => s + c.videoCount, 0) || '—'}</h3>
            <p className="text-gray-600">Total Videos</p>
          </div>
          <div className="card text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-950">{categories.length}</h3>
            <p className="text-gray-600">Categories</p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal"
          />
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading categories...</div>
        ) : (
          <>
            {/* Featured */}
            {featured.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">
                  Featured <span className="text-teal">Categories</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {featured.map((cat) => (
                    <div key={cat.id} className="card bg-gradient-to-br from-teal/5 to-primary/5 border-teal/20 relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                         onClick={() => window.location.href = '/auth/login'}>
                      <div className="absolute top-2 right-2">
                        <Star className="h-5 w-5 text-primary fill-current" />
                      </div>
                      <div className="relative mb-4">
                        <div className="bg-gray-100 rounded-lg h-48 relative overflow-hidden">
                          <Image src={THUMBNAIL_MAP[cat.slug] || DEFAULT_THUMBNAIL} alt={cat.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                              <Play className="h-7 w-7 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-2 left-2 bg-teal text-white px-2 py-1 rounded text-xs font-semibold">Featured</div>
                        <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">{cat.videoCount} videos</div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-950 mb-2">{cat.name}</h3>
                      <p className="text-gray-700 text-sm mb-3">{cat.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span className="flex items-center"><Video className="h-3 w-3 mr-1" />{cat.videoCount} videos</span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{cat.membershipLevel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Categories */}
            <section>
              <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">
                All Video <span className="text-teal">Categories</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((cat) => (
                  <div key={cat.id} className="card relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                       onClick={() => window.location.href = '/auth/login'}>
                    <div className="relative mb-4">
                      <div className="bg-gray-100 rounded-lg h-32 relative overflow-hidden">
                        <Image src={THUMBNAIL_MAP[cat.slug] || DEFAULT_THUMBNAIL} alt={cat.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                        <div className="absolute inset-0 bg-black/25 rounded-lg flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <Play className="h-5 w-5 text-white ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">{cat.videoCount}</div>
                    </div>
                    <h3 className="text-gray-950 font-semibold mb-2">{cat.name}</h3>
                    <p className="text-gray-700 text-sm mb-3">{cat.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="flex items-center"><Video className="h-3 w-3 mr-1" />{cat.videoCount} videos</span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{cat.membershipLevel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal/10 to-primary/10 border border-teal/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Ready to Transform Your Life?</h3>
            <p className="text-gray-700 mb-6">
              Join thousands of members who have access to our complete video vault.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/login" className="btn-teal">Login to Access</Link>
              <Link href="/signup" className="btn-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
