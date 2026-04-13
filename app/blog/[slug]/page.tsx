'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, BookOpen } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/blog/${params.slug}`)
      .then(r => r.json())
      .then(data => { if (!data.error) setPost(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [params.slug])

  if (loading) return <MainLayout><div className="text-center py-12 text-gray-400">Loading...</div></MainLayout>
  if (!post) return (
    <MainLayout>
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
        <Link href="/blog" className="text-teal hover:underline">Back to Blog</Link>
      </div>
    </MainLayout>
  )

  return (
    <MainLayout>
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {post.coverImage && (
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover object-top" sizes="100vw" />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="bg-teal/10 text-teal px-3 py-1 rounded-full font-medium">{post.category}</span>
          {post.readTime && <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime} min read</span>}
          {post.publishedAt && <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

        {post.author?.name && (
          <p className="text-gray-500 text-sm mb-8">By <span className="font-medium text-gray-700">{post.author.name}</span></p>
        )}

        <div className="prose prose-gray max-w-none mb-12 text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-a:text-teal prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Keep Reading</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors text-sm">More Posts</Link>
            <Link href="/podcasts" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors text-sm">Podcasts</Link>
            <Link href="/just-breathe" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors text-sm">Meditations</Link>
            <Link href="/health-mastery" className="bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm">Health Mastery</Link>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
