/**
 * COACHING Container Configuration
 * 
 * This is the central configuration for the white-label coaching platform.
 * To deploy for a different coach, change these values and redeploy.
 * See COACHING.md for full documentation.
 */

export const coachingConfig = {
  platformName: "Executive Krystalore",
  platformTagline: "Leadership & Transformation Platform",
  coachName: "Krystalore Crews",
  supportEmail: "krystalore@thecrewscoach.com",
  externalSite: "https://www.krystalorecrews.com",
  
  framework: {
    name: "COACHING",
    version: "1.0.0",
    description: "White-label coaching platform",
  },
  
  brandColors: {
    primary: "#34c5c5",    // Teal
    accent: "#E8A849",     // Orange (CTAs)
    text: "#37a6a6",
    headings: "#37a6a6",
    lightBg: "#F4F1EC",
    white: "#FFFFFF",
  },
  
  features: {
    goLive: true,
    videoVault: true,
    quizzes: true,
    courses: true,
    retreats: true,
    podcasts: true,
    books: true,
    fitness: true,
    community: true,
    referrals: true,
    personalProgress: true,
  },
  
  externalLinks: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Events', path: '/events' },
    { name: 'Books', path: '/books' },
    { name: 'Podcast', path: '/podcasts' },
    { name: 'Shop', path: '/shop' },
  ],
  
  internalLinks: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Video Vault', href: '/vault' },
    { name: 'Go Live', href: '/go-live' },
    { name: 'Courses', href: '/courses' },
    { name: 'Quizzes', href: '/quizzes' },
    { name: 'Retreats', href: '/retreats' },
  ],
  
  admins: [
    { email: 'krystalore@thecrewscoach.com', role: 'owner', name: 'Krystalore Crews' },
    { email: 'krystalore@crewsbeyondlimitsconsulting.com', role: 'owner', name: 'Krystalore Crews' },
    { email: 'jeff@jeffcline.dev', role: 'super-admin', name: 'Jeff Cline' },
  ],
  
  communityTypes: [
    'Veteran',
    'Woman Leader',
    'Entrepreneur',
    'Corporate Executive',
    'Couples',
  ],
}

export type CoachingConfig = typeof coachingConfig
