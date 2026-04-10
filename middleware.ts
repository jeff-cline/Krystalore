import { withAuth } from 'next-auth/middleware'
import { NextResponse, NextRequest } from 'next/server'

// Old krystalorecrews.com URL -> new clean URL redirects (301 for SEO)
const REDIRECTS: Record<string, string> = {
  '/our-team': '/team',
  '/leadershiptraining': '/leadership-training',
  '/crewsbeyondlimitsgroupfitness': '/group-fitness',
  '/privatemindset': '/private-mindset',
  '/my-community': '/community',
  '/My-Community': '/community',
  '/revivalretreat': '/revival-retreat',
  '/podcast': '/podcasts',
  '/products-list': '/products',
  '/crews-beyond-limits--referral-programs': '/referral-program',
  '/terms--conditions': '/terms',
  '/reviveandthrive': '/retreat',
  '/weekly-events': '/events',
  '/upcoming-workshops': '/events',
  '/home': '/',
  '/home381348': '/',
  '/home-3300': '/',
  '/fitness157767': '/fitness',
  '/leadership': '/leadership-training',
}

// Middleware that handles redirects for ALL routes (no auth required)
function handleRedirects(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const lowercasePath = pathname.toLowerCase()

  // Check exact match first
  if (REDIRECTS[pathname]) {
    return NextResponse.redirect(new URL(REDIRECTS[pathname], req.url), 301)
  }

  // Check case-insensitive match
  for (const [from, to] of Object.entries(REDIRECTS)) {
    if (from.toLowerCase() === lowercasePath) {
      return NextResponse.redirect(new URL(to, req.url), 301)
    }
  }

  return null
}

// Auth middleware for protected routes
const authMiddleware = withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    // Admin routes require GOD or ADMIN role
    if (pathname.startsWith('/admin')) {
      if (!token || !['GOD', 'ADMIN'].includes(token.role as string)) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

// executive.krystalore.com -> krystalore.com redirects
const EXECUTIVE_REDIRECTS: Record<string, string> = {
  '/partners': 'https://krystalore.com/partners',
}

export default function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  
  // If request is from executive.krystalore.com, check for cross-domain redirects
  if (hostname.startsWith('executive.')) {
    const crossDomainDest = EXECUTIVE_REDIRECTS[req.nextUrl.pathname]
    if (crossDomainDest) {
      return NextResponse.redirect(crossDomainDest, 301)
    }
  }

  // Handle redirects first (no auth required)
  const redirect = handleRedirects(req)
  if (redirect) return redirect

  // Check if this route needs auth
  const pathname = req.nextUrl.pathname
  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/admin') ||
    pathname === '/go-live'
  ) {
    // @ts-expect-error - withAuth returns a middleware function
    return authMiddleware(req, {} as any)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Auth-protected routes
    '/dashboard/:path*',
    '/admin/:path*',
    '/go-live',
    // Old URL redirects
    '/our-team',
    '/leadershiptraining',
    '/crewsbeyondlimitsgroupfitness',
    '/privatemindset',
    '/my-community',
    '/My-Community',
    '/revivalretreat',
    '/podcast',
    '/products-list',
    '/crews-beyond-limits--referral-programs',
    '/terms--conditions',
    '/reviveandthrive',
    '/weekly-events',
    '/upcoming-workshops',
    '/home',
    '/home381348',
    '/home-3300',
    '/fitness157767',
    '/leadership',
    // executive.krystalore.com cross-domain redirects
    '/partners',
  ],
}
