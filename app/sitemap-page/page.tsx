'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { 
  Home, 
  Users, 
  Heart, 
  Dumbbell, 
  BookOpen, 
  Calendar,
  Mic,
  ShoppingCart,
  HelpCircle,
  MapPin,
  Building2,
  HandHeart,
  UserCheck,
  Shield,
  Lock,
  Settings,
  Briefcase,
  Image,
  Search,
  Filter
} from 'lucide-react'

interface SitemapPage {
  path: string
  title: string
  isNew?: boolean
  isQuiz?: boolean
  authRequired?: boolean
  isDynamic?: boolean
}

interface SitemapCategory {
  title: string
  icon: React.ComponentType<any>
  pages: SitemapPage[]
  color: string
}

const sitemapData: SitemapCategory[] = [
  {
    title: 'Main Pages',
    icon: Home,
    color: '#0D9488', // Teal
    pages: [
      { path: '/', title: 'Home' },
      { path: '/about', title: 'About' },
      { path: '/contact', title: 'Contact' },
      { path: '/team', title: 'Team' },
      { path: '/services', title: 'Services' },
      { path: '/news', title: 'News' },
      { path: '/portfolio', title: 'Portfolio' }
    ]
  },
  {
    title: 'Coaching & Programs',
    icon: Users,
    color: '#F97316', // Orange
    pages: [
      { path: '/private', title: 'Private Coaching' },
      { path: '/private-mindset', title: 'Private Mindset' },
      { path: '/c-suite-executive-coaching', title: 'C-Suite Executive Coaching' },
      { path: '/emotional-intelligence-training', title: 'Emotional Intelligence Training' },
      { path: '/entrepreneur-coaching', title: 'Entrepreneur Coaching' },
      { path: '/leadership-training', title: 'Leadership Training' },
      { path: '/leadership-training-programs', title: 'Leadership Training Programs' },
      { path: '/relationship-coaching', title: 'Relationship Coaching' },
      { path: '/womens-coaching', title: "Women's Coaching" },
      { path: '/veteran-coaching', title: 'Veteran Coaching' },
      { path: '/business-bootcamp', title: 'Business Bootcamp' },
      { path: '/business-smart-start', title: 'Business Smart Start' },
      { path: '/bombshell-bootcamp', title: 'Bombshell Bootcamp' },
      { path: '/million-dollar-body', title: 'Million Dollar Body' },
      { path: '/six-week-shred', title: 'Six Week Shred' },
      { path: '/bootcamp', title: 'Bootcamp' },
      { path: '/group-fitness', title: 'Group Fitness' },
      { path: '/coworking', title: 'Coworking' },
      { path: '/alignment', title: 'Alignment' },
      { path: '/engage', title: 'Engage' }
    ]
  },
  {
    title: 'Retreats',
    icon: MapPin,
    color: '#0D9488', // Teal
    pages: [
      { path: '/retreat', title: 'Retreats' },
      { path: '/revival-retreat', title: 'Revival Retreat' },
      { path: '/corporate-retreat-planning', title: 'Corporate Retreat Planning' },
      { path: '/corporate-retreat-locations', title: 'Corporate Retreat Locations' },
      { path: '/retreat-planning-tools', title: 'Retreat Planning Tools' },
      { path: '/couples-retreats', title: 'Couples Retreats' },
      { path: '/entrepreneur-retreats', title: 'Entrepreneur Retreats' },
      { path: '/veteran-retreats', title: 'Veteran Retreats' },
      { path: '/womens-retreats', title: "Women's Retreats" },
      { path: '/retreat-sponsorship', title: 'Retreat Sponsorship' },
      { path: '/corporate-wellness', title: 'Corporate Wellness' },
      { path: '/workshops', title: 'Workshops' }
    ]
  },
  {
    title: 'Fitness & Wellness',
    icon: Dumbbell,
    color: '#F97316', // Orange
    pages: [
      { path: '/fitness', title: 'Fitness' },
      { path: '/leg-workouts-from-home', title: 'Leg Workouts From Home' },
      { path: '/virtual-hiit-camp-checkout', title: 'Virtual HIIT Camp Checkout' },
      { path: '/vision-board', title: 'Vision Board' },
      { path: '/monday-motivation', title: 'Monday Motivation' },
      { path: '/monday-morning-motivation-quotes', title: 'Monday Morning Motivation Quotes' }
    ]
  },
  {
    title: 'Content',
    icon: BookOpen,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/blog', title: 'Blog' },
      { path: '/blog/[slug]', title: 'Blog Post', isDynamic: true },
      { path: '/books', title: 'Books' },
      { path: '/planner', title: 'Planner' },
      { path: '/podcasts', title: 'Podcasts' },
      { path: '/podcasts/[slug]', title: 'Podcast Episode', isDynamic: true },
      { path: '/videos', title: 'Videos' },
      { path: '/vault', title: 'Vault' },
      { path: '/courses', title: 'Courses' },
      { path: '/courses/[slug]', title: 'Course', isDynamic: true },
      { path: '/courses/million-dollar-body', title: 'Million Dollar Body Course' }
    ]
  },
  {
    title: 'Community & Events',
    icon: Calendar,
    color: '#0D9488', // Teal
    pages: [
      { path: '/community', title: 'Community' },
      { path: '/inner-circle', title: 'Inner Circle' },
      { path: '/inner-circle/womens', title: "Inner Circle - Women's" },
      { path: '/inner-circle/mens', title: "Inner Circle - Men's" },
      { path: '/inner-circle/co-ed', title: 'Inner Circle - Co-Ed' },
      { path: '/inner-circle/apply', title: 'Inner Circle - Apply' },
      { path: '/events', title: 'Events' },
      { path: '/upcoming-events', title: 'Upcoming Events' },
      { path: '/go-live', title: 'Go Live' }
    ]
  },
  {
    title: 'Speaking & Media',
    icon: Mic,
    color: '#F97316', // Orange
    pages: [
      { path: '/keynote-speaker', title: 'Keynote Speaker' },
      { path: '/speaker', title: 'Speaker' },
      { path: '/reviews', title: 'Reviews' }
    ]
  },
  {
    title: 'Products & Shop',
    icon: ShoppingCart,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/shop', title: 'Shop' },
      { path: '/products', title: 'Products' },
      { path: '/pricing-demo', title: 'Pricing Demo' }
    ]
  },
  {
    title: 'Quizzes',
    icon: HelpCircle,
    color: '#F97316', // Orange
    pages: [
      { path: '/quizzes', title: 'All Quizzes' },
      { path: '/quizzes/anxiety', title: 'Anxiety Quiz', isQuiz: true },
      { path: '/quizzes/breathwork', title: 'Breathwork Quiz', isQuiz: true },
      { path: '/quizzes/company-culture', title: 'Company Culture Quiz', isQuiz: true },
      { path: '/quizzes/couples-compatibility', title: 'Couples Compatibility Quiz', isQuiz: true },
      { path: '/quizzes/depression', title: 'Depression Quiz', isQuiz: true },
      { path: '/quizzes/emotional-intelligence', title: 'Emotional Intelligence Quiz', isQuiz: true },
      { path: '/quizzes/entrepreneur-readiness', title: 'Entrepreneur Readiness Quiz', isQuiz: true },
      { path: '/quizzes/improve-marriage', title: 'Improve Marriage Quiz', isQuiz: true },
      { path: '/quizzes/life-alignment', title: 'Life Alignment Quiz', isQuiz: true },
      { path: '/quizzes/marathon-ready', title: 'Marathon Ready Quiz', isQuiz: true },
      { path: '/quizzes/marriage-family', title: 'Marriage & Family Quiz', isQuiz: true },
      { path: '/quizzes/personality', title: 'Personality Quiz', isQuiz: true },
      { path: '/quizzes/relationship-management', title: 'Relationship Management Quiz', isQuiz: true },
      { path: '/quizzes/retreat-ready', title: 'Retreat Ready Quiz', isQuiz: true },
      { path: '/quizzes/scale-your-business', title: 'Scale Your Business Quiz', isQuiz: true },
      { path: '/quizzes/self-awareness', title: 'Self Awareness Quiz', isQuiz: true },
      { path: '/quizzes/self-management', title: 'Self Management Quiz', isQuiz: true },
      { path: '/quizzes/social-awareness', title: 'Social Awareness Quiz', isQuiz: true },
      { path: '/quizzes/veteran-transition', title: 'Veteran Transition Quiz', isQuiz: true },
      { path: '/quizzes/womens-confidence', title: "Women's Confidence Quiz", isQuiz: true }
    ]
  },
  {
    title: 'Gypsy Tours',
    icon: MapPin,
    color: '#0D9488', // Teal
    pages: [
      { path: '/gypsy-tours', title: 'Gypsy Tours' }
    ]
  },
  {
    title: 'Real Estate',
    icon: Building2,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/real-estate', title: 'Real Estate' }
    ]
  },
  {
    title: 'Nonprofit',
    icon: HandHeart,
    color: '#F97316', // Orange
    pages: [
      { path: '/nonprofit', title: 'Nonprofit' }
    ]
  },
  {
    title: 'Partners',
    icon: Briefcase,
    color: '#0D9488', // Teal
    pages: [
      { path: '/partners', title: 'Partners' }
    ]
  },
  {
    title: 'Account & Auth',
    icon: UserCheck,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/auth/login', title: 'Login', authRequired: true },
      { path: '/auth/signup', title: 'Sign Up', authRequired: true },
      { path: '/auth/forgot-password', title: 'Forgot Password', authRequired: true },
      { path: '/auth/reset-password', title: 'Reset Password', authRequired: true },
      { path: '/login', title: 'Login Page', authRequired: true },
      { path: '/signup', title: 'Sign Up Page', authRequired: true },
      { path: '/book', title: 'Book' },
      { path: '/apply', title: 'Apply' },
      { path: '/apply-for-coaching', title: 'Apply for Coaching' },
      { path: '/breakthrough', title: 'Breakthrough' },
      { path: '/referral', title: 'Referral' },
      { path: '/referral-program', title: 'Referral Program' }
    ]
  },
  {
    title: 'Dashboard',
    icon: Shield,
    color: '#F97316', // Orange
    pages: [
      { path: '/dashboard', title: 'Dashboard', authRequired: true },
      { path: '/dashboard/fitness', title: 'Dashboard - Fitness', authRequired: true },
      { path: '/dashboard/fitness/enhanced', title: 'Dashboard - Enhanced Fitness', authRequired: true },
      { path: '/dashboard/fitness/vault', title: 'Dashboard - Fitness Vault', authRequired: true },
      { path: '/dashboard/courses', title: 'Dashboard - Courses', authRequired: true },
      { path: '/dashboard/courses/bombshell-bootcamp', title: 'Dashboard - Bombshell Bootcamp', authRequired: true },
      { path: '/dashboard/books', title: 'Dashboard - Books', authRequired: true },
      { path: '/dashboard/community', title: 'Dashboard - Community', authRequired: true },
      { path: '/dashboard/events', title: 'Dashboard - Events', authRequired: true },
      { path: '/dashboard/podcasts', title: 'Dashboard - Podcasts', authRequired: true },
      { path: '/dashboard/progress', title: 'Dashboard - Progress', authRequired: true },
      { path: '/dashboard/gamification', title: 'Dashboard - Gamification', authRequired: true },
      { path: '/dashboard/referral', title: 'Dashboard - Referral', authRequired: true },
      { path: '/dashboard/referrals', title: 'Dashboard - Referrals', authRequired: true }
    ]
  },
  {
    title: 'Admin',
    icon: Lock,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/admin', title: 'Admin Panel', authRequired: true },
      { path: '/admin/analytics', title: 'Admin - Analytics', authRequired: true },
      { path: '/admin/clients', title: 'Admin - Clients', authRequired: true },
      { path: '/admin/content', title: 'Admin - Content', authRequired: true },
      { path: '/admin/integrations', title: 'Admin - Integrations', authRequired: true },
      { path: '/admin/leads', title: 'Admin - Leads', authRequired: true },
      { path: '/admin/permissions', title: 'Admin - Permissions', authRequired: true },
      { path: '/admin/reports', title: 'Admin - Reports', authRequired: true },
      { path: '/admin/settings', title: 'Admin - Settings', authRequired: true },
      { path: '/admin/users', title: 'Admin - Users', authRequired: true },
      { path: '/admin/videos', title: 'Admin - Videos', authRequired: true }
    ]
  },
  {
    title: 'Legal',
    icon: Settings,
    color: '#0D9488', // Teal
    pages: [
      { path: '/privacy-policy', title: 'Privacy Policy' },
      { path: '/legal/privacy', title: 'Legal - Privacy' },
      { path: '/legal/terms', title: 'Legal - Terms' },
      { path: '/terms', title: 'Terms' }
    ]
  },
  {
    title: 'Landing Pages',
    icon: Heart,
    color: '#F97316', // Orange
    pages: [
      { path: '/go', title: 'Landing Page - Go' },
      { path: '/go2', title: 'Landing Page - Go2' },
      { path: '/go4', title: 'Landing Page - Go4' },
      { path: '/go5', title: 'Landing Page - Go5' },
      { path: '/go6', title: 'Landing Page - Go6' },
      { path: '/go7', title: 'Landing Page - Go7' },
      { path: '/go9', title: 'Landing Page - Go9' },
      { path: '/demo-home', title: 'Demo Home' },
      { path: '/demo-2', title: 'Demo 2' },
      { path: '/demo-3', title: 'Demo 3' }
    ]
  },
  {
    title: 'Internal/Dev',
    icon: Image,
    color: '#37a6a6', // Dark
    pages: [
      { path: '/avatars', title: 'Avatars' },
      { path: '/images', title: 'Images' },
      { path: '/logos', title: 'Logos' },
      { path: '/marketing-notes', title: 'Marketing Notes' }
    ]
  }
]

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  const filteredData = useMemo(() => {
    if (!searchTerm) return sitemapData

    return sitemapData
      .map(category => ({
        ...category,
        pages: category.pages.filter(page => 
          page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.path.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(category => category.pages.length > 0)
  }, [searchTerm])

  const totalPages = sitemapData.reduce((sum, category) => sum + category.pages.length, 0)
  const filteredTotalPages = filteredData.reduce((sum, category) => sum + category.pages.length, 0)

  const getBadge = (page: SitemapPage) => {
    const badges = []
    if (page.isNew) badges.push({ text: 'New', color: 'bg-green-500' })
    if (page.isQuiz) badges.push({ text: 'Quiz', color: 'bg-purple-500' })
    if (page.authRequired) badges.push({ text: 'Auth Required', color: 'bg-red-500' })
    if (page.isDynamic) badges.push({ text: 'Dynamic', color: 'bg-blue-500' })
    return badges
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F1EC' }}>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#37a6a6' }}>
            Complete Sitemap
          </h1>
          <p className="text-lg mb-6" style={{ color: '#37a6a6' }}>
            Navigate through all pages on the Krystalore Crews platform
          </p>
          
          {/* Total Count */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white font-semibold mb-6"
               style={{ backgroundColor: '#0D9488' }}>
            {filteredTotalPages === totalPages ? totalPages : `${filteredTotalPages} of ${totalPages}`} Total Pages
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <Filter className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8">
          {filteredData.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.title} className="bg-white rounded-lg shadow-lg p-6">
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div 
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: category.color + '20', color: category.color }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold flex-1" style={{ color: '#37a6a6' }}>
                    {category.title}
                  </h2>
                  <span 
                    className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.pages.length} pages
                  </span>
                </div>

                {/* Pages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-all duration-200 hover:border-teal-500"
                    >
                      <span className="text-gray-800 group-hover:text-teal-600 font-medium">
                        {page.title}
                      </span>
                      <div className="flex gap-1">
                        {getBadge(page).map((badge, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs text-white rounded-full ${badge.color}`}
                          >
                            {badge.text}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No pages found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* JC Easter Egg */}
        <div className="text-center mt-16">
          <a 
            href="https://jeff-cline.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs hover:opacity-20 transition-opacity"
            style={{ 
              color: '#37a6a6', 
              opacity: 0.08, 
              fontSize: '6px',
              textDecoration: 'none'
            }}
          >
            JC
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}