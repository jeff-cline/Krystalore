/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Existing redirects
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
      { source: '/privatemindset', destination: '/private-mindset', permanent: true },
      { source: '/crews-beyond-limits--referral-programs', destination: '/referral-program', permanent: true },
      { source: '/visionboard', destination: '/vision-board', permanent: true },

    ]
  },
}

module.exports = nextConfig
