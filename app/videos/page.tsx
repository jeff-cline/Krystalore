'use client'

import { useState, useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Play, Lock, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Snippet {
  id: string
  title: string
  description: string | null
  thumbnailUrl: string | null
  isLocked: boolean
  video: {
    id: string
    title: string
    category: string
    membershipLevel: string
    muxPlaybackId: string | null
    thumbnailUrl: string | null
    duration: number | null
    categoryRef: { name: string; slug: string } | null
  }
}

export default function PublicVideosPage() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/snippets')
      .then(r => r.json())
      .then(data => { setSnippets(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <MainLayout>
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-950">
            Watch & <span className="text-teal">Learn</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Preview our premium video content. Login to unlock full access to workouts, courses, and live replays.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/images/go9/fitness.jpg" alt="Krystalore Crews fitness video content and training" fill className="object-cover" sizes="100vw" />
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading content...</div>
        ) : snippets.length === 0 ? (
          <div className="text-center py-16">
            <Play className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Coming Soon</h2>
            <p className="text-gray-600 mb-6">We&apos;re building an amazing library of videos. Check back soon!</p>
            <Link href="/vault" className="btn-teal">Explore Categories</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snippets.map((snippet) => (
              <div key={snippet.id} className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                {/* Thumbnail with blur overlay */}
                <div className="relative h-52 bg-gradient-to-br from-teal/20 to-primary/20 overflow-hidden">
                  {snippet.thumbnailUrl || snippet.video.thumbnailUrl ? (
                    <img
                      src={snippet.thumbnailUrl || snippet.video.thumbnailUrl || ''}
                      alt={snippet.title}
                      className="w-full h-full object-cover filter blur-sm group-hover:blur-md transition-all"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play className="h-16 w-16 text-teal/30" />
                    </div>
                  )}

                  {/* Locked overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="h-10 w-10 text-white mx-auto mb-2" />
                      <Link
                        href="/auth/login"
                        className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm"
                      >
                        Login to Watch
                      </Link>
                    </div>
                  </div>

                  {/* Duration badge */}
                  {snippet.video.duration && (
                    <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {Math.floor(snippet.video.duration / 60)}:{String(Math.floor(snippet.video.duration % 60)).padStart(2, '0')}
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-2 left-2 bg-teal text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {snippet.video.categoryRef?.name || snippet.video.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-teal transition-colors">
                    {snippet.title}
                  </h3>
                  {snippet.description && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">{snippet.description}</p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                      {snippet.video.membershipLevel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal/10 to-primary/10 border border-teal/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Unlock Full Access</h3>
            <p className="text-gray-700 mb-6">Join to watch all videos, live streams, courses, and exclusive content.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/login" className="btn-teal">Login</Link>
              <Link href="/signup" className="btn-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
