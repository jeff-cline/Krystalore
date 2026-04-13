'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Video,
  Upload,
  Calendar,
  MessageSquare,
  Shield,
  Database,
  Plug,
  UserPlus,
  Radio,
  TrendingUp,
  Coins,
  Menu,
  X
} from 'lucide-react'

export default function AdminSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const adminItems = [
    { href: '/admin', icon: Home, label: 'Dashboard' },
    { href: '/admin/clients', icon: Users, label: 'Clients' },
    { href: '/admin/leads', icon: UserPlus, label: 'Leads' },
    { href: '/admin/reports', icon: BarChart3, label: 'Reports' },
    { href: '/admin/content', icon: FileText, label: 'Content' },
    { href: '/admin/videos', icon: Video, label: 'Video Management' },
    { href: '/admin/permissions', icon: Shield, label: 'Permissions' },
    { href: '/admin/integrations', icon: Plug, label: 'Integrations' },
    { href: '/admin/settings', icon: Settings, label: 'Settings' },
  ]

  const feedflixItems = [
    { href: '/admin/feedflix/streams', icon: Radio, label: 'Live Streams' },
    { href: '/admin/feedflix/analytics', icon: TrendingUp, label: 'Analytics' },
    { href: '/admin/feedflix/billing', icon: Coins, label: 'Billing & Usage' },
  ]

  const quickActions = [
    { href: '/admin/upload', icon: Upload, label: 'Upload Video' },
    { href: '/admin/messages', icon: MessageSquare, label: 'Member Messages' },
    { href: '/admin/backup', icon: Database, label: 'Data Backup' },
  ]

  const navContent = (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Shield className="h-6 w-6 text-teal mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
        </div>
        <button onClick={() => setOpen(false)} className="lg:hidden p-1 text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main Admin Navigation */}
      <nav className="space-y-1 mb-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Main
        </h3>
        {adminItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive ? 'bg-teal text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Streaming */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Streaming
        </h3>
        <nav className="space-y-1">
          {feedflixItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive ? 'bg-teal text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Quick Actions */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <nav className="space-y-1">
          {quickActions.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-20 left-4 z-40 bg-white border border-gray-200 shadow-md rounded-lg p-2 text-gray-600"
        aria-label="Open admin menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar — mobile: slide-over, desktop: fixed */}
      <div
        className={`
          fixed top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 overflow-y-auto z-50
          transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:z-auto
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {navContent}
      </div>
    </>
  )
}
