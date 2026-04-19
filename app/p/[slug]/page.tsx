'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function CmsPageView() {
  const params = useParams()
  const { data: session } = useSession()
  const [page, setPage] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const isAdmin = ['GOD', 'ADMIN'].includes((session?.user as any)?.role || '')

  useEffect(() => {
    fetch(`/api/admin/pages`)
      .then(r => r.json())
      .then(pages => {
        if (!Array.isArray(pages)) { setLoading(false); return }
        // Admin can see all pages, public can only see published
        const found = pages.find((p: any) => p.slug === params.slug && (p.isPublished || isAdmin))
        setPage(found || null)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [params.slug, isAdmin])

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

  return (
    <>
      {/* Admin edit bar */}
      {isAdmin && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gray-900 text-white text-xs py-1.5 px-4 flex items-center justify-between">
          <span>Viewing: <strong>{page.title}</strong> {!page.isPublished && '(Draft)'}</span>
          <div className="flex gap-3">
            <Link href={`/admin/pages`} className="text-teal hover:underline">Edit in Admin</Link>
            {page.slug.startsWith('template-') && (
              <Link href={'/' + page.slug.replace('template-', '')} className="text-[#E8A849] hover:underline">View Original</Link>
            )}
          </div>
        </div>
      )}
      <div style={isAdmin ? { marginTop: '32px' } : undefined} dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}
