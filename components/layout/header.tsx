'use client'

import { useState } from 'react'
import Link from 'next/link'

const retreatLinks = [
  { href: '/retreat', label: "Women's Retreats" },
  { href: '/business-smart-start', label: 'Business Retreats' },
  { href: '/couples-retreats', label: 'Couples Retreats' },
  { href: '/veteran-retreats', label: 'Veterans Retreats' },
]

const coachingLinks = [
  { href: '/services', label: 'All Coaching' },
  { href: '/health-mastery', label: 'Health Mastery' },
]

type NavLink = { href: string; label: string; external?: boolean }

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/books', label: 'Books' },
  { href: '/podcasts', label: 'Podcast' },
  { href: 'https://blog.krystalore.com/', label: 'Blog', external: true },
  { href: '/shop', label: 'Shop' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [retreatsOpen, setRetreatsOpen] = useState(false)
  const [mobileRetreatsOpen, setMobileRetreatsOpen] = useState(false)
  const [coachingOpen, setCoachingOpen] = useState(false)
  const [mobileCoachingOpen, setMobileCoachingOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/images/krystalore-crews-logo.png"
                alt="EXECUTIVE COACHING, leadership, health, wellness, business life coach krystalore logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map(link =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#34c5c5] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-[#34c5c5] transition-colors">
                  {link.label}
                </Link>
              )
            )}

            {/* Coaching dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoachingOpen(true)}
              onMouseLeave={() => setCoachingOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCoachingOpen(o => !o)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#34c5c5] transition-colors"
                aria-haspopup="true"
                aria-expanded={coachingOpen}
              >
                Coaching
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coachingOpen && (
                <div className="absolute left-0 top-full pt-2 w-56 z-50">
                  <div className="bg-white rounded-md shadow-lg border border-gray-200 py-1">
                    {coachingLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setCoachingOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#34c5c5] hover:bg-gray-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Retreats dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRetreatsOpen(true)}
              onMouseLeave={() => setRetreatsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setRetreatsOpen(o => !o)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#34c5c5] transition-colors"
                aria-haspopup="true"
                aria-expanded={retreatsOpen}
              >
                Retreats
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {retreatsOpen && (
                <div className="absolute left-0 top-full pt-2 w-56 z-50">
                  <div className="bg-white rounded-md shadow-lg border border-gray-200 py-1">
                    {retreatLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setRetreatsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#34c5c5] hover:bg-gray-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-[#34c5c5] transition-colors">
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-[#34c5c5] text-white px-4 py-2 rounded-lg hover:bg-[#37a6a6] transition-colors shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#34c5c5] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map(link =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Coaching expandable */}
            <button
              type="button"
              onClick={() => setMobileCoachingOpen(o => !o)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
              aria-expanded={mobileCoachingOpen}
            >
              Coaching
              <svg
                className={`h-5 w-5 transition-transform ${mobileCoachingOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileCoachingOpen && (
              <div className="pl-4 space-y-1">
                {coachingLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileCoachingOpen(false)
                    }}
                    className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Retreats expandable */}
            <button
              type="button"
              onClick={() => setMobileRetreatsOpen(o => !o)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
              aria-expanded={mobileRetreatsOpen}
            >
              Retreats
              <svg
                className={`h-5 w-5 transition-transform ${mobileRetreatsOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileRetreatsOpen && (
              <div className="pl-4 space-y-1">
                {retreatLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileRetreatsOpen(false)
                    }}
                    className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200 mt-3 pt-3 space-y-1">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-[#34c5c5] text-white text-center rounded-lg hover:bg-[#37a6a6] transition-colors text-lg font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
