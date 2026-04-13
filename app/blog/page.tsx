'use client'

import { useState, useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Clock, Search } from 'lucide-react'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  category: string
  readTime: number | null
  publishedAt: string | null
  author: { name: string | null }
}

const categories = ['All', 'Fitness', 'Mindset', 'Leadership', 'Wellness', 'Connection', 'Nutrition']

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(`/api/blog?category=${category}&limit=20`)
      .then(r => r.json())
      .then(data => setPosts(data.posts || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [category])

  const filtered = search ? posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) : posts

  return (
    <MainLayout>
      <section className="relative rounded-2xl overflow-hidden mb-10">
        <div className="relative h-64 sm:h-80">
          <Image src="/images/go9/speaking-headshot.jpg" alt="Krystalore Crews Blog" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <BookOpen className="w-8 h-8 text-[#E8A849] mb-2" />
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Blog</h1>
            <p className="text-white/80 max-w-xl">Fitness, mindset, leadership, and wellness insights from Krystalore Crews.</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input type="text" placeholder="Search posts..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-gray-900" />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${category === cat ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading posts...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative h-44 sm:h-48 bg-gray-100">
                {post.coverImage ? (
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal/20 to-[#E8A849]/20 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-teal/30" />
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded">{post.category}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors line-clamp-2">{post.title}</h2>
                {post.excerpt && <p className="text-gray-500 text-sm mb-3 line-clamp-2">{post.excerpt}</p>}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime || 4} min read</span>
                  {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <section className="mb-12 text-center">
        <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Want More From Krystalore?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Listen to the podcast, try the free meditation library, or join Health Mastery.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/podcasts" className="bg-white text-[#006767] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors text-sm">Podcasts</Link>
            <Link href="/just-breathe" className="bg-white/10 border border-white/20 text-white font-medium py-3 px-6 rounded-xl hover:bg-white/20 transition-colors text-sm">Just Breathe</Link>
            <Link href="/health-mastery" className="bg-white/10 border border-white/20 text-white font-medium py-3 px-6 rounded-xl hover:bg-white/20 transition-colors text-sm">Health Mastery</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
