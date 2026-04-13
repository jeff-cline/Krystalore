'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { coachingConfig } from '@/lib/coaching-config'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { data: session } = useSession()
  
  const role = (session?.user as any)?.role
  const isAdmin = role === 'GOD' || role === 'ADMIN'
  
  const isActive = (path: string) => pathname === path || pathname.startsWith(path)

  const externalLinks = coachingConfig.externalLinks
  const externalSite = coachingConfig.externalSite

  const retreatDropdown = [
    { name: 'Entrepreneurs', href: '/entrepreneur-retreats' },
    { name: 'Women', href: '/womens-retreats' },
    { name: 'Veterans', href: '/veteran-retreats' },
    { name: 'Couples', href: '/couples-retreats' },
  ]

  return (
    <nav className="shadow-sm">
      {/* Top Bar - External Links */}
      <div style={{ backgroundColor: '#F4F1EC' }} className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center h-9 space-x-6">
            {externalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-xs text-gray-600 hover:text-[#34c5c5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="/images/krystalore-crews-logo.png" 
                  alt="EXECUTIVE COACHING, leadership, health, wellness, business life coach krystalore logo" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5">
              <Link href="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
                Dashboard
              </Link>
              <Link href="/dashboard/fitness/vault" className={`nav-link ${isActive('/vault') || isActive('/dashboard/fitness/vault') ? 'active' : ''}`}>
                Video Vault
              </Link>
              <Link href="/go-live" className={`nav-link ${isActive('/go-live') ? 'active' : ''}`}>
                Go Live
              </Link>
              <Link href="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`}>
                Courses
              </Link>
              <Link href="/quizzes" className={`nav-link ${isActive('/quizzes') ? 'active' : ''}`}>
                Quizzes
              </Link>
              
              {/* Retreats Dropdown */}
              <div
                onMouseEnter={() => setActiveDropdown('retreats')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative"
              >
                <button className={`nav-link flex items-center ${isActive('/retreats') ? 'active' : ''}`}>
                  Retreats
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'retreats' && (
                  <div className="absolute left-0 top-full pt-2 w-52 z-50">
                    <div className="bg-white rounded-md shadow-lg border border-gray-200">
                      {retreatDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#34c5c5] hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {isAdmin && (
                <Link href="/admin" className={`nav-link ${isActive('/admin') ? 'active' : ''}`}>
                  Admin
                </Link>
              )}

              {session ? (
                <Link href="/dashboard" className="btn-primary text-sm">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/auth/login" className="btn-secondary text-sm">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="btn-primary text-sm">
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#34c5c5] focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 pt-2">
              {coachingConfig.coachName} Site
            </p>
            {externalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-1.5 text-sm text-gray-500 hover:text-[#34c5c5]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-100 my-2" />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 pt-2">
              Platform
            </p>
            {[
              { name: 'Dashboard', href: '/dashboard' },
              { name: 'Video Vault', href: '/dashboard/fitness/vault' },
              { name: 'Go Live', href: '/go-live' },
              { name: 'Courses', href: '/courses' },
              { name: 'Quizzes', href: '/quizzes' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm ${isActive(item.href) ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-100 my-2" />
            <div className="flex space-x-3 px-3 py-2">
              {session ? (
                <Link href="/dashboard" className="btn-primary text-sm flex-1 text-center" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/auth/login" className="btn-secondary text-sm flex-1 text-center" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/auth/signup" className="btn-primary text-sm flex-1 text-center" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
