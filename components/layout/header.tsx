'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/courses', label: 'Courses' },
    { href: '/events', label: 'Events' },
    { href: '/books', label: 'Books' },
    { href: '/podcasts', label: 'Podcast' },
    { href: '/shop', label: 'Shop' },
  ]

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
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-[#34c5c5] transition-colors">
                {link.label}
              </Link>
            ))}
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
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#34c5c5] rounded-lg transition-colors text-lg"
              >
                {link.label}
              </Link>
            ))}
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
