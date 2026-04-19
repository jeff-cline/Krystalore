'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function CmsPageView() {
  const params = useParams()
  const [page, setPage] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/admin/pages`)
      .then(r => r.json())
      .then(pages => {
        const found = Array.isArray(pages) ? pages.find((p: any) => p.slug === params.slug && p.isPublished) : null
        setPage(found || null)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [params.slug])

  if (loading) return <MainLayout><div className="text-center py-12 text-gray-400">Loading...</div></MainLayout>
  if (!page) return (
    <MainLayout>
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <Link href="/" className="text-teal hover:underline">Go Home</Link>
      </div>
    </MainLayout>
  )

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto">
        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-teal prose-strong:text-gray-900 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
    </MainLayout>
  )
}
