'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  BookOpen, 
  Mic, 
  Book, 
  Dumbbell, 
  Users, 
  Share2,
  Settings,
  BarChart3,
  UserCog,
  FileText,
  Trophy
} from 'lucide-react'

interface SidebarProps {
  isAdmin?: boolean
}

export default function Sidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname()
  
  const dashboardItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/progress', icon: Trophy, label: 'Progress & Success' },
    { href: '/vault', icon: BookOpen, label: 'Video Vault' },
    { href: '/dashboard/courses', icon: BookOpen, label: 'Courses' },
    { href: '/dashboard/community', icon: Users, label: 'Community' },
    { href: '/go-live', icon: Mic, label: 'Go Live' },
  ]
  
  const adminItems = [
    { href: '/admin/settings', icon: Settings, label: 'Settings' },
    { href: '/admin/users', icon: UserCog, label: 'Users' },
    { href: '/admin/content', icon: FileText, label: 'Content' },
    { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  ]

  return (
    <div className="w-64 bg-dark-800 shadow-sm min-h-screen border-r border-dark-700">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">
          {isAdmin ? 'Admin Panel' : 'Member Area'}
        </h2>
        
        {/* Dashboard Navigation */}
        {!isAdmin && (
          <nav className="space-y-2">
            {dashboardItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#34c5c5] text-white'
                      : 'text-gray-300 hover:bg-dark-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
        
        {/* Admin Navigation */}
        {isAdmin && (
          <nav className="space-y-2">
            {adminItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#34c5c5] text-white'
                      : 'text-gray-300 hover:bg-dark-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
        
        {/* Points & Achievements for members */}
        {!isAdmin && (
          <div className="mt-8 p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">Points</span>
              <span className="text-sm font-bold text-primary">1,247</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">Streak</span>
              <span className="text-sm font-bold text-secondary">12 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Badges</span>
              <div className="flex -space-x-1">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <Trophy className="h-4 w-4 text-gray-400" />
                <Trophy className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}