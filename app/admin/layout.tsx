'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import AdminSidebar from '@/components/layout/AdminSidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()
  const userName = (session?.user as any)?.name || 'Admin'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header — single clean nav */}
      <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-30">
        <div className="h-full px-4 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3">
            <img
              src="/images/krystalore-crews-logo.png"
              alt="Krystalore"
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline text-sm font-medium text-gray-500">Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-teal transition-colors">
              Member View
            </Link>
            <Link href="/" className="text-sm text-gray-500 hover:text-teal transition-colors">
              Site
            </Link>
            <span className="text-sm text-gray-400 hidden sm:inline">{userName}</span>
          </div>
        </div>
      </header>

      {/* Body with sidebar */}
      <div className="pt-16 flex">
        <AdminSidebar />
        <main className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
