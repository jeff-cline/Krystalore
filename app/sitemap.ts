import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://krystalore.com'
  
  // All public static routes (no auth-required pages, no dev/demo pages)
  const routes = [
    // Main
    '', '/about', '/contact', '/team', '/services', '/news',

    // Coaching & Programs
    '/private', '/private-mindset', '/c-suite-executive-coaching',
    '/emotional-intelligence-training', '/entrepreneur-coaching',
    '/leadership-training', '/leadership-training-programs',
    '/relationship-coaching', '/womens-coaching', '/veteran-coaching',
    '/business-bootcamp', '/business-smart-start', '/bombshell-bootcamp',
    '/million-dollar-body', '/six-week-shred', '/bootcamp',
    '/group-fitness', '/coworking', '/alignment', '/engage',

    // Retreats
    '/retreat', '/revival-retreat', '/corporate-retreat-planning',
    '/corporate-retreat-locations', '/retreat-planning-tools',
    '/couples-retreats', '/entrepreneur-retreats', '/veteran-retreats',
    '/womens-retreats', '/retreat-sponsorship', '/corporate-wellness',
    '/workshops',

    // Fitness & Wellness
    '/fitness', '/leg-workouts-from-home', '/virtual-hiit-camp-checkout',
    '/vision-board', '/monday-motivation', '/monday-morning-motivation-quotes',

    // Content
    '/blog', '/books', '/planner', '/podcasts', '/videos', '/vault',
    '/courses', '/courses/million-dollar-body',

    // Community & Events
    '/community', '/inner-circle', '/inner-circle/womens',
    '/inner-circle/mens', '/inner-circle/co-ed', '/inner-circle/apply',
    '/events', '/upcoming-events',

    // Speaking & Media
    '/keynote-speaker', '/speaker', '/reviews',

    // Products & Shop
    '/shop', '/products', '/productivity-tools',

    // Quizzes
    '/quizzes', '/quizzes/anxiety', '/quizzes/breathwork',
    '/quizzes/company-culture', '/quizzes/couples-compatibility',
    '/quizzes/depression', '/quizzes/emotional-intelligence',
    '/quizzes/entrepreneur-readiness', '/quizzes/improve-marriage',
    '/quizzes/life-alignment', '/quizzes/marathon-ready',
    '/quizzes/marriage-family', '/quizzes/personality',
    '/quizzes/relationship-management', '/quizzes/retreat-ready',
    '/quizzes/scale-your-business', '/quizzes/self-awareness',
    '/quizzes/self-management', '/quizzes/social-awareness',
    '/quizzes/veteran-transition', '/quizzes/womens-confidence',

    // Other
    '/gypsy-tours', '/real-estate', '/nonprofit', '/partners',

    // Booking & Apply
    '/book', '/apply', '/apply-for-coaching', '/breakthrough',
    '/referral', '/referral-program',

    // Legal
    '/privacy-policy', '/terms',

    // Sitemap
    '/sitemap-page',
  ]

  // Blog post slugs
  const blogSlugs = [
    'building-resilience-military-leadership',
    'thirty-four-minute-health-revolution',
    'wheelchair-to-warrior-journey',
    'authentic-connections-leadership',
    'marathon-mindset-business-endurance',
    'science-high-performance-recovery',
    'building-trust-virtual-teams',
    'overcoming-cancer-strength-adversity',
    'power-functional-fitness',
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/quizzes/') ? 0.6 : 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
