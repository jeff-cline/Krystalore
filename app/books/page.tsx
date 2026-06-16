import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Link from 'next/link'
import { BookOpen, Headphones, Download, Users, Star, ExternalLink, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Books by Krystalore Crews | Leadership, Resilience & Personal Development',
  description: 'Books by Krystalore Crews — Your Krystal Clear Life Planner, the Crews Beyond Limits Tactical Life Planner, The Road to Resilience, and more. Stories of strength, courage, and transformation.',
  keywords: 'Krystalore Crews books, Road to Resilience, Leave No MilSpouse Behind, Krystal Clear Life Planner, Tactical Life Planner, Is Manifesting Bullshit, leadership books, personal development books, courageous confidence',
  alternates: { canonical: '/books' },
  openGraph: {
    title: 'Books by Krystalore Crews | Leadership & Resilience',
    description: 'Planners and books on leadership, resilience, and courageous confidence in seasons of change.',
    url: 'https://krystalore.com/books',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/bookish/road-to-resilience.jpg', width: 1200, height: 630, alt: 'Books by Krystalore Crews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books by Krystalore Crews',
    description: 'Planners and books on leadership, resilience, and courageous confidence.',
    images: ['https://krystalore.com/images/bookish/road-to-resilience.jpg'],
  },
}

const CONTACT_EMAIL = 'Krystalore@thecrewscoach.com'
function buildMailto(subject: string, detailsLabel: string) {
  const body = `Name:\nPhone Number:\nEmail:\n${detailsLabel}:`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const BOOKS = [
  {
    title: "Your Krystal Clear Life Planner: A Woman's 90-Day Action Plan to Embrace Chaos and Live a Fulfilling Life!",
    description: "A woman's 90-day action plan to embrace chaos and live a fulfilling life. Define your goals, build healthy habits, manage your time, and track your progress using the 5 C's — Core, Consistency, Confidence, Community, and Celebration — to support a balanced, intentional life.",
    category: 'Planning & Goal Setting',
    rating: 4.9,
    reviews: 127,
    image: '/images/bookish/krystal-clear-planner.jpg',
    imageAlt: 'Your Krystal Clear Life Planner cover',
    buyUrl: 'https://www.krystalorecrews.com/planner',
  },
  {
    title: "Crews Beyond Limits Tactical Life Planner: A Men's 90-Day Action Plan to Show Up, Work Hard, and Get Results",
    description: "A men's 90-day action plan to show up, work hard, and get results. A tactical, no-excuses framework built around ambition, action, fitness, mindset, and results — for men who want to lead with purpose and finish what they start.",
    category: 'Leadership & Strategy',
    rating: 4.9,
    reviews: 89,
    image: '/images/bookish/tactical-life-planner.jpg',
    imageAlt: 'Crews Beyond Limits Tactical Life Planner cover',
    buyUrl: 'https://www.krystalorecrews.com/mensplanner',
  },
  {
    title: 'The Road to Resilience: 5 Ways to Have Courageous Confidence in Seasons of Change',
    description: "Life doesn't come with a roadmap, but this book might just be the next best thing. It's about embracing life's messier moments and finding your confidence along the way — with a practical model for building courageous confidence and turning setbacks into stepping stones.",
    category: 'Personal Development',
    rating: 4.9,
    reviews: 203,
    image: '/images/bookish/road-to-resilience.jpg',
    imageAlt: 'The Road to Resilience book cover by Krystalore Crews',
    buyUrl: 'https://amzn.to/3QJNNmr',
  },
  {
    title: 'Is Manifesting Bullsh*t? Part 2: The Limit is You (Co-Author)',
    description: 'A no-nonsense look at manifestation that separates real techniques from wishful thinking. Krystalore joins a powerhouse collaboration of authors to explore how the only limit standing between you and your next level is you.',
    category: 'Mindset & Philosophy',
    rating: 4.7,
    reviews: 94,
    image: '/images/bookish/is-manifesting-bullshit-pt2.jpg',
    imageAlt: 'Is Manifesting Bullshit Part 2 - The Limit is You',
    buyUrl: 'https://amzn.to/4eOJUF5',
  },
  {
    title: 'Leave No MilSpouse Behind: Inspiring Stories That Empower Dreams (Co-Author)',
    description: 'Brings together the voices of incredible women who share the unique challenges and victories of life as military spouses. A firsthand look at everyday resilience, friendship, and the unbreakable bonds of family — featuring Krystalore Crews.',
    category: 'Military & Family',
    rating: 4.8,
    reviews: 156,
    image: '/images/bookish/leave-no-milspouse.jpg',
    imageAlt: 'Leave No MilSpouse Behind book cover',
    buyUrl: 'https://amzn.to/4ew6ty9',
  },
]

function BooksJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': BOOKS.map((b) => ({
      '@type': 'Book',
      name: b.title,
      author: { '@type': 'Person', name: 'Krystalore Crews' },
      description: b.description,
      genre: b.category,
      image: 'https://krystalore.com' + b.image,
      url: b.buyUrl,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BooksJsonLd />
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Stories of <span className="text-[#34c5c5]">Strength</span> and <span className="text-[#E8A849]">Resilience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you&apos;re looking for a dose of inspiration and some real talk on resilience,
            you&apos;ve come to the right place. These books and planners are all about facing challenges
            head-on and coming out stronger.
          </p>
        </div>

        {/* All Books */}
        <div className="space-y-12 mb-16">
          {BOOKS.map((book, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/3 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#34c5c5]/20 to-[#34c5c5]/5' : 'from-[#E8A849]/20 to-[#E8A849]/5'} flex items-center justify-center p-8`}>
                  <div className="text-center">
                    <img src={book.image} alt={book.imageAlt} className="w-full max-w-[240px] mx-auto rounded-lg shadow-md mb-4" />
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{book.rating} ({book.reviews} reviews)</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#34c5c5]/10 text-[#34c5c5] rounded-full mb-3 w-fit">
                    {book.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{book.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={book.buyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#34c5c5] hover:bg-[#e07a00] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get the Book
                    </a>
                    <a href="/book" className="inline-flex items-center border-2 border-[#34c5c5] text-[#34c5c5] hover:bg-[#34c5c5] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                      Book a Call to Discuss
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Me to Speak — featured */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 relative min-h-[300px]">
              <img src="/images/go9/speaking-event.jpg" alt="Krystalore Crews speaking on stage" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#E8A849]/15 text-[#e07800] rounded-full mb-3 w-fit">Speaking</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Me to Speak</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bring the stories behind the books to your stage. Krystalore delivers keynotes on resilience,
                leadership, and courageous confidence in seasons of change — leaving every audience inspired to act.
              </p>
              <a href="/speaker" className="inline-flex items-center bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-8 py-4 rounded-lg hover:shadow-lg transition-shadow w-fit">
                <Mic className="h-5 w-5 mr-2" />
                Book Me to Speak
              </a>
            </div>
          </div>
        </div>

        {/* Krystal Clear Life Planner CTA */}
        <div className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Are you ready to design the life you desire?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Clear the chaos and live a fulfilling life with the Krystal Clear Life Planner.
          </p>
          <a href="https://www.krystalorecrews.com/planner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-[#34c5c5] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Get Your Planner Today
          </a>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What&apos;s Included with Every Book</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Video Commercial', desc: 'Watch Krystal introduce each book and explain its key concepts' },
              { icon: Headphones, title: 'Audio Version', desc: 'Listen to the complete book narrated by Krystal herself' },
              { icon: Download, title: 'Sample Chapters', desc: 'Preview chapters to understand the content and writing style' },
              { icon: Users, title: 'Book Club Kit', desc: 'Downloadable discussion guides and worksheets for groups' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#34c5c5]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#34c5c5]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Podcast Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center mb-16">
          <Mic className="h-12 w-12 text-[#E8A849] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">The Krystal Clear Life Podcast</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Where clarity, confidence, and connection lead the way. Every episode inspires you to break past
            limitations, embrace a positive mindset, and connect deeply with a community that understands
            the importance of growth and resilience.
          </p>
          <Link href="/podcasts" className="inline-flex items-center bg-[#34c5c5] hover:bg-[#e07a00] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            <Headphones className="h-4 w-4 mr-2" />
            Listen Now
          </Link>
        </div>

        {/* Book Club + Bulk Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Start a Book Club</h3>
            <p className="text-gray-600 mb-4">
              Transform your reading experience with friends, colleagues, or community members.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-center"><Users className="h-4 w-4 text-[#34c5c5] mr-3 flex-shrink-0" />Free downloadable discussion guides</li>
              <li className="flex items-center"><Download className="h-4 w-4 text-[#34c5c5] mr-3 flex-shrink-0" />Chapter-by-chapter workbooks</li>
            </ul>
            <a href={buildMailto('Get Book Club Resources', 'Book club resource request details')} className="inline-flex items-center bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Get Book Club Resources
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Orders</h3>
            <p className="text-gray-600 mb-4">
              Perfect for corporate training, team development, or large group studies.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>10+ copies: <span className="font-semibold text-[#34c5c5]">15% discount</span></li>
              <li>25+ copies: <span className="font-semibold text-[#34c5c5]">25% discount</span></li>
              <li>50+ copies: <span className="font-semibold text-[#34c5c5]">35% discount</span></li>
            </ul>
            <a href={buildMailto('Request Bulk Pricing', 'Bulk order request details')} className="inline-flex items-center border-2 border-[#E8A849] text-[#E8A849] hover:bg-[#34c5c5] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Request Bulk Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
