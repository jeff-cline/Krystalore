/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Existing redirects
      { source: '/rise-and-thrive-v2', destination: '/rise-and-thrive', permanent: true },
      { source: '/rise', destination: '/rise-and-thrive', permanent: true },
      { source: '/invest', destination: '/retreat-center-investment-opportunity', permanent: true },
      { source: '/deck', destination: '/start', permanent: true },
      { source: '/forgot-password', destination: '/auth/forgot-password', permanent: true },
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/podcast', destination: '/podcasts', permanent: true },

      // Old krystalore.com WordPress redirects
      { source: '/about-me', destination: '/about', permanent: true },
      { source: '/faq', destination: '/about', permanent: true },
      { source: '/womens-retreat', destination: '/womens-retreats', permanent: true },
      { source: '/beyond-limits-bootcamp-krystalore', destination: '/bootcamp', permanent: true },
      { source: '/home381348', destination: '/', permanent: true },
      { source: '/products-list', destination: '/shop', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/terms--conditions', destination: '/terms', permanent: true },
      { source: '/emotional-intelligence-training-for-leaders', destination: '/emotional-intelligence-training', permanent: true },

      // Old krystalorecrews.com (GHL) redirects
      { source: '/leadershiptraining', destination: '/leadership-training', permanent: true },
      { source: '/fitness157767', destination: '/fitness', permanent: true },
      { source: '/revivalretreat', destination: '/revival-retreat', permanent: true },
      { source: '/crewsbeyondlimitsgroupfitness', destination: '/group-fitness', permanent: true },
      { source: '/bombshellbootcamp', destination: '/bombshell-bootcamp', permanent: true },
      { source: '/milliondollarbodyacademy', destination: '/million-dollar-body', permanent: true },
      { source: '/6weekshred', destination: '/six-week-shred', permanent: true },
      { source: '/private-mindset', destination: '/privatemindset', permanent: true },
      { source: '/nonprofit', destination: 'https://hernextmission.org', permanent: true },
      { source: '/crews-beyond-limits--referral-programs', destination: '/referral-program', permanent: true },
      { source: '/visionboard', destination: '/vision-board', permanent: true },

      // Her Next Mission nonprofit — 301 to external site
      { source: '/nonprofit', destination: 'https://hernextmission.org', permanent: true },
      { source: '/nonprofit/:path*', destination: 'https://hernextmission.org/:path*', permanent: true },

      // Events nav short-slugs → real pages
      { source: '/bombshell', destination: '/bombshell-bootcamp', permanent: true },
      { source: '/retreats', destination: '/retreat', permanent: true },
      { source: '/ton-retreat', destination: '/tn-retreat', permanent: true },
      { source: '/speaking', destination: '/keynote-speaker', permanent: true },

      // Use the dedicated /just-breathe lander as the course page
      { source: '/courses/just-breathe', destination: '/just-breathe', permanent: true },

      // Readiness check rebranded to Her Next Mission (/check -> /hnm).
      // Note: redirect matching is case-insensitive, so /HNM resolves to /hnm
      // already — do NOT add a /HNM rule or it self-loops.
      { source: '/check', destination: '/hnm', permanent: true },

      // Zoom room shortcut
      { source: '/zoom', destination: 'https://us06web.zoom.us/j/8312497139?pwd=NGFwYUx6dUR6cmpyK1hZSUgwc2Fodz09#success', permanent: true },

    ]
  },
}

module.exports = nextConfig
