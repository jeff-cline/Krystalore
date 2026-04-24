'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Clock, Tag, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Why 20 Minutes is Better Than 0!',
    excerpt: 'As you are starting your exercise journey, you may wonder what the best workout plan is! The best workout plan for beginners is the one that you can do. If you can break down that one hour into 20-minute increments, it makes your plan much more manageable.',
    category: 'Fitness',
    date: 'August 14, 2022',
    readTime: '4 min read',
    slug: 'why-20-minutes-is-better-than-0',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/why-20-minutes-is-better-than-0!',
    color: 'bg-[#0D9488]',
  },
  {
    title: '3 Secrets For More Energy',
    excerpt: "People ask me all the time how I can stay so energized, work out, pour into others, and travel. Here's the truth: I'm not full of energy all the time. But I've learned how to recharge strategically -- and it starts with giving yourself permission to rest.",
    category: 'Fitness',
    date: 'August 7, 2022',
    readTime: '5 min read',
    slug: '3-secrets-for-more-energy',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/3-secrets-for-more-energy',
    color: 'bg-[#E8A849]',
  },
  {
    title: 'How To Run a Race in 7 Easy Steps',
    excerpt: "If running a race has been a goal of yours, let's make that a reality! Whether you're a complete beginner or getting back into running, these seven steps will get you race-ready and feeling amazing.",
    category: 'Fitness',
    date: 'July 31, 2022',
    readTime: '5 min read',
    slug: 'how-to-run-a-race-in-7-easy-steps',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/how-to-run-a-race-in-7-easy-steps',
    color: 'bg-[#0D9488]',
  },
  {
    title: 'How to Eat Healthy When Traveling',
    excerpt: "Have you wondered if it's possible to eat healthy when traveling? As a fitness coach and someone who is always on the go, I can tell you that it is completely possible! Here are my tips for staying on track.",
    category: 'Fitness',
    date: 'July 24, 2022',
    readTime: '4 min read',
    slug: 'how-to-eat-healthy-when-traveling',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/how-to-eat-healthy-when-traveling',
    color: 'bg-[#E8A849]',
  },
  {
    title: 'Why Losing Weight Is So Hard (and how to fix it!)',
    excerpt: 'Energetic motivation to set fitness, career, and relationship goals, put a strategic plan in place, and receive the encouragement to go beyond your limits. The real fix starts with understanding why the struggle exists.',
    category: 'Fitness',
    date: 'July 17, 2022',
    readTime: '5 min read',
    slug: 'why-losing-weight-is-so-hard',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/why-losing-weight-is-so-hard-and-how-to-fix-it-be',
    color: 'bg-[#0D9488]',
  },
  {
    title: 'Take the Next Step: Level Up Your Life and Fitness!',
    excerpt: "Recently I had the opportunity to speak at a Level Up Conference in Las Vegas. So I thought it was only fitting to talk about how you can level up your own life and take the next step to become the person you were meant to be.",
    category: 'Fitness',
    date: 'July 10, 2022',
    readTime: '4 min read',
    slug: 'level-up-your-life-and-fitness',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/Take-the-Next-Step:Level-Up-Your-Life-and-Fitness!',
    color: 'bg-[#E8A849]',
  },
  {
    title: 'What Short Term Goals Can Do For Your Life',
    excerpt: "As a fitness and mindset coach, I always hear people talk about the big picture. They want to lose weight, run a marathon, feel confident. But the one thing most people miss? Breaking it down into short-term wins.",
    category: 'Fitness',
    date: 'July 6, 2022',
    readTime: '4 min read',
    slug: 'what-short-term-goals-can-do',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/What-Short-Term-Goals-Can-Do-For-Your-Life',
    color: 'bg-[#0D9488]',
  },
  {
    title: '3 Actions For Getting Rid of That "Stuck" Feeling',
    excerpt: "Today I wanted to talk to you about something so common. It's something that many of my clients struggle with, and I even struggle with it too! Dealing with that stuck feeling in your life -- and what to actually do about it.",
    category: 'Connection',
    date: 'June 26, 2022',
    readTime: '4 min read',
    slug: '3-actions-for-getting-unstuck',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/3-Actions-For-Getting-Rid-of-That-"Stuck"-Feeling',
    color: 'bg-[#F97316]',
  },
  {
    title: '3 Tips to Build Accountability in Your Life',
    excerpt: "Life gets busy. It's easy to let things slide or put tasks on the back burner, especially when it comes to your own goals! Here are my 3 best tips to build accountability and actually follow through.",
    category: 'Mindset',
    date: 'June 19, 2022',
    readTime: '4 min read',
    slug: '3-tips-to-build-accountability',
    externalUrl: 'https://www.krystalorecrews.com/blog/b/3-Tips-to-Build-Accountability-in-Your-Life',
    color: 'bg-[#7C3AED]',
  },
]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">News & Blog</span>
          </nav>
        </div>

        {/* Hero — Tony Robbins style: face visible top, text bottom-left */}
        <section className="relative overflow-hidden min-h-[50vh] lg:min-h-[60vh] flex items-end">
          <Image 
            src="/images/go9/keynote.jpg" 
            alt="Krystalore Crews speaking at a keynote event" 
            fill 
            className="object-cover" 
            style={{ objectPosition: '50% 25%' }}
            priority
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg max-w-2xl">
              News & <span className="text-[#E8A849]">Blog</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl drop-shadow-md">
              Stories, strategies, and insights on fitness, mindset, leadership, and building a life beyond limits.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#34c5c5]/40 transition-all duration-300"
                >
                  {/* Category bar */}
                  <div className={`${post.color} px-4 py-2`}>
                    <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#34c5c5] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-[#34c5c5] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want More From Krystalore?</h2>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
              Catch the podcast for deeper conversations on healing, leadership, and transformation. Or book a breakthrough call to start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/podcasts" className="bg-white text-[#0D9488] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Listen to the Podcast
              </Link>
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Book a Breakthrough Call
              </a>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Explore More</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link href="/about" className="block bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">About Krystalore</h3>
                <p className="text-sm text-gray-500 mt-1">Her story of resilience</p>
              </Link>
              <Link href="/events" className="block bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">Events</h3>
                <p className="text-sm text-gray-500 mt-1">Live sessions & retreats</p>
              </Link>
              <Link href="/books" className="block bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">Books</h3>
                <p className="text-sm text-gray-500 mt-1">Road to Resilience & more</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
