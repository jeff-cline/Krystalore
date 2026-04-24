'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // In a real app, this would fetch the blog post by slug
  const blogPost = {
    title: 'Building Resilience: Lessons from Military Leadership',
    content: `
      <p>In my 22 years of military service, I learned that resilience isn't something you're born with—it's a skill you develop through deliberate practice, strategic thinking, and unwavering commitment to growth.</p>
      
      <p>The principles I learned in the Air Force have become the foundation of everything I teach about leadership, personal development, and breakthrough performance. Today, I want to share three critical lessons that transformed not just my military career, but my entire approach to life and business.</p>
      
      <h2>Lesson 1: Embrace Controlled Discomfort</h2>
      <p>The military taught me that growth happens at the edge of your comfort zone. Every training exercise, every deployment, every leadership challenge was designed to push us beyond what we thought possible.</p>
      
      <p>In business and personal development, this principle is just as powerful. When you deliberately seek out controlled discomfort—whether it's having difficult conversations, taking on challenging projects, or pushing your physical limits—you build the mental and emotional muscles needed for breakthrough performance.</p>
      
      <h2>Lesson 2: Systems Create Success</h2>
      <p>The military runs on systems, protocols, and processes for a reason. When the stakes are high, you can't rely on motivation or inspiration alone. You need systematic approaches that work regardless of how you feel in the moment.</p>
      
      <p>This is why my coaching programs focus so heavily on creating sustainable systems for success. Whether it's a fitness routine, a business process, or a personal development practice, the system is what carries you through when motivation fades.</p>
      
      <h2>Lesson 3: Mission Before Self</h2>
      <p>Perhaps the most transformative military principle is the concept of mission before self. This doesn't mean neglecting your own needs—it means understanding that your greatest fulfillment comes from contributing to something larger than yourself.</p>
      
      <p>In leadership, this translates to servant leadership. In fitness, it means showing up not just for yourself, but for the people who depend on you. In business, it means creating value for others while building something meaningful.</p>
      
      <h2>Applying Military Resilience in Civilian Life</h2>
      <p>The transition from military to civilian life taught me that these principles aren't just applicable in uniform—they're the foundation of any high-performance lifestyle.</p>
      
      <p>Whether you're leading a team, building a business, or simply trying to become the best version of yourself, these military-tested principles can help you crews beyond your limits and achieve results you never thought possible.</p>
      
      <p>Remember: resilience is a choice. It's a daily decision to show up, push through discomfort, and stay committed to your mission—no matter what obstacles appear in your path.</p>
    `,
    category: 'Mindset',
    date: 'March 10, 2026',
    readTime: '5 min read',
    author: 'Krystalore Crews'
  }

  const relatedPosts = [
    {
      title: 'Marathon Mindset: Applying Endurance Principles to Business',
      slug: 'marathon-mindset-business-endurance',
      category: 'Mindset'
    },
    {
      title: 'From Wheelchair to Warrior: My Journey Back',
      slug: 'wheelchair-to-warrior-journey',
      category: 'Mindset'
    },
    {
      title: 'Creating Authentic Connections in Leadership',
      slug: 'authentic-connections-leadership',
      category: 'Connection'
    }
  ]

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
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-teal-600 hover:text-teal-800 font-medium">
            ← Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blogPost.category)}`}>
              {blogPost.category}
            </span>
            <span className="text-gray-500">{blogPost.readTime}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center text-gray-600">
            <span>By {blogPost.author}</span>
            <span className="mx-2">•</span>
            <span>{blogPost.date}</span>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-gray max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
          style={{
            lineHeight: '1.75',
          }}
        />

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Share on LinkedIn
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Share on Twitter
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Share on Facebook
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
          <p className="text-gray-600 leading-relaxed">
            Krystalore Crews is a 22-year Air Force veteran, cancer survivor, and 26-time marathoner who transformed her life from a wheelchair to becoming an elite athlete. She now helps executives and entrepreneurs crews beyond their limits through coaching, speaking, and transformational programs.
          </p>
          <Link 
            href="/about" 
            className="inline-block mt-4 text-teal-600 hover:text-teal-800 font-medium"
          >
            Learn more about Krystalore →
          </Link>
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                <h4 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>

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