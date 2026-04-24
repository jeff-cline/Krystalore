'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Home,
  Users,
  Dumbbell,
  BookOpen,
  Calendar,
  Mic,
  ShoppingCart,
  HelpCircle,
  MapPin,
  Grid3X3,
  Search,
} from 'lucide-react'
import { SITE_ROUTES } from '@/lib/site-routes'

const iconByCategory: Record<string, any> = {
  Main: Home,
  'Coaching & Programs': Users,
  'Fitness & Wellness': Dumbbell,
  Content: BookOpen,
  'Community & Events': Calendar,
  'Speaking & Media': Mic,
  'Products & Shop': ShoppingCart,
  Quizzes: HelpCircle,
  Retreats: MapPin,
  More: Grid3X3,
}

const colorByCategory: Record<string, string> = {
  Main: '#0D9488',
  'Coaching & Programs': '#F97316',
  'Fitness & Wellness': '#34c5c5',
  Content: '#37a6a6',
  'Community & Events': '#0D9488',
  'Speaking & Media': '#F97316',
  'Products & Shop': '#37a6a6',
  Quizzes: '#F59E0B',
  Retreats: '#0EA5A4',
  More: '#6B7280',
}

export default function SitemapPage() {
  const [query, setQuery] = useState('')

  const grouped = useMemo(() => {
    const filtered = SITE_ROUTES.filter((r) =>
      `${r.title} ${r.path} ${r.category}`.toLowerCase().includes(query.toLowerCase())
    )

    const byCategory = new Map<string, typeof filtered>()
    for (const route of filtered) {
      if (!byCategory.has(route.category)) byCategory.set(route.category, [])
      byCategory.get(route.category)!.push(route)
    }

    return Array.from(byCategory.entries()).map(([category, pages]) => ({
      category,
      pages: pages.sort((a, b) => a.title.localeCompare(b.title)),
    }))
  }, [query])

  const totalPages = SITE_ROUTES.length

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Krystalore HTML Sitemap</h1>
          <p className="text-gray-600 mb-6">{totalPages} indexed public pages grouped by category.</p>

          <div className="relative mb-8">
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white"
            />
          </div>

          <div className="space-y-6">
            {grouped.map((group) => {
              const Icon = iconByCategory[group.category] || Grid3X3
              const color = colorByCategory[group.category] || '#6B7280'
              return (
                <section key={group.category} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3" style={{ background: `${color}10` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                    <h2 className="text-xl font-bold text-gray-900">{group.category}</h2>
                    <span className="text-sm text-gray-500">({group.pages.length})</span>
                  </div>
                  <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.pages.map((page) => (
                      <Link
                        key={page.path}
                        href={page.path}
                        className="rounded-lg border border-gray-200 px-4 py-3 hover:border-teal hover:shadow-sm transition"
                      >
                        <p className="font-semibold text-gray-900 text-sm">{page.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{page.path}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
