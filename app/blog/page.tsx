'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Building Resilience: Lessons from Military Leadership',
      excerpt: 'Discover how military training principles can transform your approach to business challenges and personal growth.',
      category: 'Mindset',
      slug: 'building-resilience-military-leadership',
      readTime: '5 min read',
      date: 'March 10, 2026'
    },
    {
      title: 'The 34-Minute Health Revolution',
      excerpt: 'Learn why just 34 minutes a day can completely transform your physical and mental well-being.',
      category: 'Fitness',
      slug: 'thirty-four-minute-health-revolution',
      readTime: '8 min read',
      date: 'March 5, 2026'
    },
    {
      title: 'From Wheelchair to Warrior: My Journey Back',
      excerpt: 'The personal story of overcoming physical limitations and discovering inner strength.',
      category: 'Mindset',
      slug: 'wheelchair-to-warrior-journey',
      readTime: '12 min read',
      date: 'February 28, 2026'
    },
    {
      title: 'Creating Authentic Connections in Leadership',
      excerpt: 'How to build meaningful relationships that drive team performance and organizational success.',
      category: 'Connection',
      slug: 'authentic-connections-leadership',
      readTime: '7 min read',
      date: 'February 20, 2026'
    },
    {
      title: 'Marathon Mindset: Applying Endurance Principles to Business',
      excerpt: 'What 26 marathons taught me about persistence, planning, and achieving long-term goals.',
      category: 'Mindset',
      slug: 'marathon-mindset-business-endurance',
      readTime: '10 min read',
      date: 'February 15, 2026'
    },
    {
      title: 'The Science of High-Performance Recovery',
      excerpt: 'Understanding how rest, nutrition, and recovery practices fuel peak performance.',
      category: 'Fitness',
      slug: 'science-high-performance-recovery',
      readTime: '6 min read',
      date: 'February 8, 2026'
    },
    {
      title: 'Building Trust in Virtual Teams',
      excerpt: 'Strategies for creating connection and accountability in remote work environments.',
      category: 'Connection',
      slug: 'building-trust-virtual-teams',
      readTime: '9 min read',
      date: 'January 30, 2026'
    },
    {
      title: 'Overcoming Cancer: Strength Through Adversity',
      excerpt: 'How facing cancer changed my perspective on life, leadership, and what truly matters.',
      category: 'Mindset',
      slug: 'overcoming-cancer-strength-adversity',
      readTime: '11 min read',
      date: 'January 22, 2026'
    },
    {
      title: 'The Power of Functional Fitness',
      excerpt: 'Why functional movement patterns are essential for long-term health and performance.',
      category: 'Fitness',
      slug: 'power-functional-fitness',
      readTime: '7 min read',
      date: 'January 15, 2026'
    }
  ]

  const categories = ['All', 'Fitness', 'Mindset', 'Connection']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fitness':
        return 'bg-teal-100 text-teal-800'
      case 'Mindset':
        return 'bg-orange-100 text-orange-800'
      case 'Connection':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/speaking-headshot.jpg" alt="Krystalore Crews blog and personal brand content" fill className="object-cover object-top" sizes="100vw" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Insights & Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover strategies, stories, and insights to help you crews beyond your limits in fitness, mindset, and meaningful connections.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and inspiration delivered to your inbox. Join our community of high-achievers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a 
          href="https://jeff-cline.com" 
          className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity"
        >
          JC
        </a>
      </div>
    </div>
  )
}