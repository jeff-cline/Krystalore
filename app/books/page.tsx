import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Headphones, Download, Users, Star, ExternalLink, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Books by Krystalore Crews | Leadership, Resilience & Personal Development',
  description: 'Discover books by Krystalore Crews including The Road to Resilience, Leave No MilSpouse Behind, and the Krystal Clear Life Planner. Stories of strength, courage, and transformation.',
  keywords: 'Krystalore Crews books, Road to Resilience, Leave No MilSpouse Behind, Krystal Clear Life Planner, military spouse books, leadership books, personal development books, courageous confidence',
  openGraph: {
    title: 'Books by Krystalore Crews | Leadership & Resilience',
    description: 'Discover stories of strength and resilience. Books on leadership, military spouse empowerment, and personal transformation.',
    url: 'https://executive-krystalore.vercel.app/books',
    type: 'website',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/books/road-to-resilience-book-cover.png', width: 1200, height: 630, alt: 'Books by Krystalore Crews' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books by Krystalore Crews | Leadership, Resilience & Personal Development",
    description: "Discover books by Krystalore Crews including The Road to Resilience, Leave No MilSpouse Behind, and the Krystal Clear Life Planner. Stories of strength, courage, and transformation.",
  },
}

function BooksJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Book',
        name: 'The Road to Resilience: 5 Ways to Build Courageous Confidence',
        author: { '@type': 'Person', name: 'Krystalore Crews' },
        description: "Embracing life's messier moments and finding your own confidence along the way.",
        genre: 'Personal Development',
        publisher: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        image: 'https://executive-krystalore.vercel.app/images/books/road-to-resilience-book-cover.png',
      },
      {
        '@type': 'Book',
        name: 'Leave No MilSpouse Behind: Inspiring Stories That Empower Dreams',
        author: { '@type': 'Person', name: 'Krystalore Crews' },
        description: 'Real stories from military spouses about resilience, courage, and community.',
        genre: 'Military & Family',
        image: 'https://executive-krystalore.vercel.app/images/books/leave-no-milspouse-behind-book-cover.png',
      },
      {
        '@type': 'Book',
        name: 'Krystal Clear Life Planner',
        author: { '@type': 'Person', name: 'Krystalore Crews' },
        description: 'Define your goals, establish healthy habits, and lead a fulfilling life using the 5 C\'s framework.',
        genre: 'Planning & Goal Setting',
        image: 'https://executive-krystalore.vercel.app/images/books/krystal-clear-life-planner.png',
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function BooksPage() {
  const books = [
    {
      title: 'The Road to Resilience: 5 Ways to Build Courageous Confidence',
      description: "Life doesn't come with a roadmap, but this book might just be the next best thing. Written by Krystalore Crews, CEO of Crews Beyond Limits, this book is all about embracing life's messier moments and finding your own confidence along the way. Through honest, at times raw, personal stories, Krystalore shares her journey and introduces a practical model for building courageous confidence and transforming setbacks into stepping stones.",
      category: 'Personal Development',
      featured: true,
      rating: 4.9,
      reviews: 203,
      image: '/images/books/road-to-resilience-book-cover.png',
      imageAlt: 'The Road to Resilience book cover by Krystalore Crews - 5 Ways to Build Courageous Confidence',
    },
    {
      title: 'Leave No MilSpouse Behind: Inspiring Stories That Empower Dreams',
      description: 'Brings together the voices of six incredible women who share the unique challenges and victories of life as military spouses. These stories dive into the everyday resilience it takes to navigate the unknowns and forge a path that uplifts not only themselves but others too. Whether you\'re a military spouse or just looking for heartening stories of courage and community, this book offers a firsthand look at perseverance, friendship, and the unbreakable bonds of family.',
      category: 'Military & Family',
      featured: true,
      rating: 4.7,
      reviews: 156,
      image: '/images/books/leave-no-milspouse-behind-book-cover.png',
      imageAlt: 'Leave No MilSpouse Behind book cover - Inspiring Stories That Empower Military Spouse Dreams',
    },
    {
      title: 'Your Krystal Clear Life Planner',
      description: 'Define your goals, establish healthy habits, manage your time, and track your progress so that you can lead a fulfilling life. Developed from fitness, mindset, personal, and professional development courses to help women improve their lives so they can pursue their dreams and aspirations. Using the principles of the 5 C\'s: Core, Consistency, Confidence, Community, and Celebration, you will learn to build, reinforce, and maintain the eight pillars that support a balanced lifestyle.',
      category: 'Planning & Goal Setting',
      featured: true,
      rating: 4.8,
      reviews: 127,
      image: '/images/books/krystal-clear-life-planner.png',
      imageAlt: 'Krystal Clear Life Planner by Krystalore Crews - Goal setting and healthy habits planner',
    },
    {
      title: "Men's Tactical Life Planner",
      description: 'A structured approach to life planning specifically designed for men who want to lead with purpose and achieve their missions.',
      category: 'Leadership & Strategy',
      featured: false,
      rating: 4.9,
      reviews: 89,
      image: null,
      imageAlt: "Men's Tactical Life Planner - Leadership and strategy planning for men",
    },
    {
      title: "Is Manifesting Bullshit 2.0 (Collaboration)",
      description: 'A no-nonsense examination of manifestation practices, separating effective techniques from wishful thinking with practical applications.',
      category: 'Mindset & Philosophy',
      featured: false,
      rating: 4.6,
      reviews: 94,
      image: '/images/books/is-manifesting-bullshit-book-cover.png',
      imageAlt: 'Is Manifesting Bullshit 2.0 - A no-nonsense look at manifestation practices',
    },
  ]

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
            you&apos;ve come to the right place. These books are all about facing challenges head-on 
            and coming out stronger.
          </p>
        </div>

        {/* Featured Books */}
        <div className="space-y-12 mb-16">
          {books.filter(b => b.featured).map((book, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:flex">
                <div className={`md:w-1/3 bg-gradient-to-br ${index === 0 ? 'from-[#34c5c5]/20 to-[#34c5c5]/5' : index === 1 ? 'from-[#E8A849]/20 to-[#E8A849]/5' : 'from-[#34c5c5]/10 to-[#E8A849]/10'} flex items-center justify-center p-8`}>
                  <div className="text-center">
                    {book.image ? (
                      <img src={book.image} alt={book.imageAlt} className="w-full max-w-[280px] mx-auto rounded-lg shadow-md mb-4" />
                    ) : (
                      <BookOpen className={`h-20 w-20 mx-auto mb-4 ${index === 0 ? 'text-[#34c5c5]' : index === 1 ? 'text-[#E8A849]' : 'text-[#34c5c5]'}`} />
                    )}
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{book.rating} ({book.reviews} reviews)</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#34c5c5]/10 text-[#34c5c5] rounded-full mb-3">
                    {book.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{book.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/books" className="inline-flex items-center bg-[#34c5c5] hover:bg-[#e07a00] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get This Book
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

        {/* More Books Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More from Krystalore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.filter(b => !b.featured).map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#34c5c5]/10 rounded-lg p-4 flex-shrink-0">
                    {book.image ? (
                      <img src={book.image} alt={book.imageAlt} className="h-24 w-auto rounded shadow-sm" />
                    ) : (
                      <BookOpen className="h-8 w-8 text-[#E8A849]" />
                    )}
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded mb-2">
                      {book.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({book.reviews})</span>
                    </div>
                    <a href="/books" className="text-[#E8A849] font-semibold text-sm hover:underline inline-flex items-center">
                      Learn More <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Krystal Clear Life Planner CTA */}
        <div className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Are you ready to design the life you desire?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Clear the chaos and live a fulfilling life with the Krystal Clear Life Planner.
          </p>
          <a href="/books" className="inline-flex items-center bg-white text-[#34c5c5] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
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

        {/* Bulk Orders */}
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
            <a href="/book" className="inline-flex items-center bg-[#34c5c5] hover:bg-[#84d7d7] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
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
            <a href="/book" className="inline-flex items-center border-2 border-[#E8A849] text-[#E8A849] hover:bg-[#34c5c5] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Request Bulk Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
