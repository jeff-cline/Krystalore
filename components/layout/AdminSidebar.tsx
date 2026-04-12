'use client'

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
  Coins
} from 'lucide-react'

export default function AdminSidebar() {
  const pathname = usePathname()

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

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-teal mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
        </div>
        
        {/* Main Admin Navigation */}
        <nav className="space-y-2 mb-8">
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
                  isActive
                    ? 'bg-teal text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* FeedFlix */}
        <div className="border-t border-gray-200 pt-6 mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            FeedFlix
          </h3>
          <nav className="space-y-2">
            {feedflixItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-teal text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <nav className="space-y-2">
            {quickActions.map((item) => {
              const Icon = item.icon
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        
        {/* Admin Info */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-sm">
            <div className="text-gray-500 mb-1">Logged in as:</div>
            <div className="text-gray-900 font-semibold text-xs">krystalore@crewsbeyondlimitsconsulting.com</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <Link href="/admin/clients" className="text-center hover:bg-gray-100 rounded p-1 transition-colors">
              <div className="text-teal font-bold">1,247</div>
              <div className="text-gray-400">Users</div>
            </Link>
            <Link href="/admin/videos" className="text-center hover:bg-gray-100 rounded p-1 transition-colors">
              <div className="text-primary font-bold">902</div>
              <div className="text-gray-400">Videos</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}