'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
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

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" /></div>
  if (!page) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <Link href="/" className="text-teal hover:underline">Go Home</Link>
      </div>
    </div>
  )

  // Render the full HTML content — this preserves all Tailwind classes and layout from the scraped template
  return <div dangerouslySetInnerHTML={{ __html: page.content }} />
}
