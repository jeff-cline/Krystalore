'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Quote, Sparkles, BookOpen, Heart, Sun, Star } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: 'Monday Morning Motivation Quotes', author: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/monday-morning-motivation-quotes' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Why are Monday motivation quotes important?', acceptedAnswer: { '@type': 'Answer', text: 'Monday morning sets the tone for your entire week. Starting with intentional, powerful quotes helps reframe your mindset, build momentum, and approach challenges with confidence rather than dread.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const quoteCategories = [
  {
    category: 'Atomic Habits & Consistency',
    quotes: [
      '"You do not rise to the level of your goals. You fall to the level of your systems." — James Clear',
      '"Every action you take is a vote for the type of person you wish to become." — James Clear',
      '"Success is the product of daily habits — not once-in-a-lifetime transformations." — James Clear',
    ]
  },
  {
    category: 'Deep Wisdom & Truth',
    quotes: [
      '"The only person you are destined to become is the person you decide to be." — Ralph Waldo Emerson',
      '"She remembered who she was and the game changed." — Lalah Delia',
      '"You were not made to be subtle. You were made to burn." — Krystalore Crews',
    ]
  },
  {
    category: 'Faith & Purpose',
    quotes: [
      '"Faith is taking the first step even when you don\'t see the whole staircase." — Martin Luther King Jr.',
      '"Your purpose is not something you create. It\'s something you uncover by showing up." — Krystalore Crews',
      '"What you seek is seeking you." — Rumi',
    ]
  },
  {
    category: 'Resilience & Strength',
    quotes: [
      '"The woman who doesn\'t require validation from anyone is the most feared individual on the planet." — Mohadesa Najumi',
      '"You didn\'t come this far to only come this far." — Unknown',
      '"Rock bottom became the solid foundation on which I rebuilt my life." — J.K. Rowling',
    ]
  },
  {
    category: 'Leadership & Growth',
    quotes: [
      '"A leader is one who knows the way, goes the way, and shows the way." — John C. Maxwell',
      '"The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb',
      '"Growth is uncomfortable. Staying the same is uncomfortable. Choose your uncomfortable." — Krystalore Crews',
    ]
  },
]

const faqs = [
  { question: 'Why are Monday motivation quotes important?', answer: 'Monday morning sets the tone for your entire week. Starting with intentional, powerful quotes helps reframe your mindset, build momentum, and approach challenges with confidence rather than dread. Research shows that positive priming in the morning improves productivity, mood, and decision-making throughout the day.' },
  { question: 'How should I use motivation quotes effectively?', answer: 'Don\'t just read them — reflect on them. Choose one quote each Monday and journal about how it applies to your current situation. Write it on a sticky note, set it as your phone wallpaper, or share it with your team. The key is intentional engagement, not passive consumption.' },
  { question: 'Where can I find more Krystalore Crews content?', answer: 'Follow Krystalore on YouTube @krystalore for Monday Motivation LIVE, listen to her podcast on Spotify, read her books, and follow @thecrewscoach on Instagram and TikTok for daily motivational content.' },
  { question: 'Does Krystalore do live motivation sessions?', answer: 'Yes! Monday Motivation LIVE airs every Monday on YouTube. It\'s a free, high-energy show with mindset strategies, coaching, and real talk. Subscribe at youtube.com/@krystalore.' },
  { question: 'Can I use these quotes for my team meetings?', answer: 'Absolutely. Starting team meetings with a motivational quote is a proven strategy for setting a positive, focused tone. Many leaders use Krystalore\'s quotes to kick off Monday all-hands meetings or weekly standups.' },
  { question: 'How do I stay motivated beyond Monday?', answer: 'Monday is the spark, but systems sustain the fire. Build daily habits, join an accountability community like Crews Beyond Limits, and use coaching or courses to maintain momentum throughout the week.' },
]

export default function MondayMorningMotivationQuotesPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/hero.jpg" alt="Monday Morning Motivation Quotes" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Monday Morning Motivation Quotes</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Start your week with powerful words that ignite purpose, drive, and unstoppable momentum.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* Quote Graphics from Original Site */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Quote Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/motivation-quotes/atomic-habits-quotes.png" alt="Atomic Habits motivation quotes" fill className="object-cover object-center" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/motivation-quotes/deep-quotes.png" alt="Deep wisdom quotes" fill className="object-cover object-center" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/motivation-quotes/faith-quotes.png" alt="Faith quotes" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          {quoteCategories.map((cat) => (
            <div key={cat.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Quote className="w-6 h-6 text-[#34c5c5]" /> {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.quotes.map((q) => (
                  <div key={q} className="bg-white rounded-xl p-6 border-l-4 border-[#34c5c5] shadow-sm">
                    <p className="text-gray-700 leading-relaxed italic text-lg">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Podcast */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">More Motivation on the Podcast</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://open.spotify.com/embed/show/6acctiaNwQqFy8HVuiXlN7?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="border-0" />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Motivation Quotes FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don&apos;t Just Read Quotes. Live Them.</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">Join Monday Motivation LIVE every week and get the coaching, community, and accountability to turn inspiration into action.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.youtube.com/@krystalore" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Subscribe on YouTube</a>
            <Link href="/monday-motivation" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Monday Motivation</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/books" className="hover:text-white">Books</Link>
            <Link href="/podcasts" className="hover:text-white">Podcast</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
