'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, LogOut } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import { coachingConfig } from '@/lib/coaching-config'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { data: session } = useSession()

  const role = (session?.user as any)?.role
  const isAdmin = role === 'GOD' || role === 'ADMIN'
  const isLoggedIn = !!session

  const isActive = (path: string) => pathname === path || pathname.startsWith(path)

  const retreatDropdown = [
    { name: 'Entrepreneurs', href: '/entrepreneur-retreats' },
    { name: 'Women', href: '/womens-retreats' },
    { name: 'Veterans', href: '/veteran-retreats' },
    { name: 'Couples', href: '/couples-retreats' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/krystalore-crews-logo.png"
                alt="Krystalore"
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className={`nav-link text-sm ${isActive('/dashboard') && !isActive('/dashboard/fitness') && !isActive('/dashboard/community') ? 'active' : ''}`}>
                  Dashboard
                </Link>
                <Link href="/vault" className={`nav-link text-sm ${isActive('/vault') || isActive('/vault') ? 'active' : ''}`}>
                  Video Vault
                </Link>
                <Link href="/courses" className={`nav-link text-sm ${isActive('/courses') ? 'active' : ''}`}>
                  Courses
                </Link>
                <Link href="/dashboard/community" className={`nav-link text-sm ${isActive('/dashboard/community') ? 'active' : ''}`}>
                  Community
                </Link>
                <Link href="/quizzes" className={`nav-link text-sm ${isActive('/quizzes') ? 'active' : ''}`}>
                  Quizzes
                </Link>

                {/* Retreats Dropdown */}
                <div
                  onMouseEnter={() => setActiveDropdown('retreats')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative"
                >
                  <button className={`nav-link text-sm flex items-center ${isActive('/retreats') || isActive('/entrepreneur-retreats') || isActive('/womens-retreats') || isActive('/veteran-retreats') || isActive('/couples-retreats') ? 'active' : ''}`}>
                    Retreats
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'retreats' && (
                    <div className="absolute left-0 top-full pt-2 w-48 z-50">
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
                  <>
                    <Link href="/go-live" className={`nav-link text-sm ${isActive('/go-live') ? 'active' : ''}`}>
                      Go Live
                    </Link>
                    <Link href="/admin" className={`nav-link text-sm font-medium ${isActive('/admin') ? 'active' : ''}`}>
                      Admin
                    </Link>
                  </>
                )}

                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors ml-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                {coachingConfig.externalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="nav-link text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/auth/login" className="btn-secondary text-sm">
                  Login
                </Link>
                <Link href="/auth/signup" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile: right side */}
          <div className="lg:hidden flex items-center gap-3">
            {isLoggedIn && (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-gray-500 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#34c5c5] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className={`block px-3 py-2 text-sm rounded ${isActive('/dashboard') && !isActive('/dashboard/fitness') && !isActive('/dashboard/community') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link href="/vault" className={`block px-3 py-2 text-sm rounded ${isActive('/vault') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Video Vault
                </Link>
                <Link href="/courses" className={`block px-3 py-2 text-sm rounded ${isActive('/courses') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Courses
                </Link>
                <Link href="/dashboard/community" className={`block px-3 py-2 text-sm rounded ${isActive('/dashboard/community') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Community
                </Link>
                <Link href="/quizzes" className={`block px-3 py-2 text-sm rounded ${isActive('/quizzes') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Quizzes
                </Link>
                <Link href="/live" className={`block px-3 py-2 text-sm rounded ${isActive('/live') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Live
                </Link>

                {isAdmin && (
                  <>
                    <div className="border-t border-gray-100 my-2" />
                    <Link href="/go-live" className={`block px-3 py-2 text-sm rounded ${isActive('/go-live') ? 'text-[#34c5c5] font-medium' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                      Go Live (Admin)
                    </Link>
                    <Link href="/admin" className={`block px-3 py-2 text-sm rounded font-medium ${isActive('/admin') ? 'text-[#34c5c5]' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                      Admin Panel
                    </Link>
                  </>
                )}

                <div className="border-t border-gray-100 my-2" />
                <button
                  onClick={() => { signOut({ callbackUrl: '/' }); setIsMenuOpen(false) }}
                  className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:text-red-600"
                >
                  <LogOut className="h-4 w-4 inline mr-2" />Logout
                </button>
              </>
            ) : (
              <>
                {coachingConfig.externalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#34c5c5]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-2" />
                <div className="flex space-x-3 px-3 py-2">
                  <Link href="/auth/login" className="btn-secondary text-sm flex-1 text-center" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/auth/signup" className="btn-primary text-sm flex-1 text-center" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
