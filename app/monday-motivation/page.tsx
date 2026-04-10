'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Play, Clock, Users, Zap, Target, Heart, Star, Calendar, Mic, Brain } from 'lucide-react'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        name: 'Monday Motivation LIVE with Krystalore Crews',
        description: 'Weekly live motivational show with mindset strategies, goal-setting, and high-energy inspiration every Monday morning.',
        thumbnailUrl: 'https://krystalore.com/images/krystalore-crews-logo.png',
        uploadDate: '2024-01-01',
        contentUrl: 'https://www.youtube.com/@krystalore',
        publisher: { '@type': 'Organization', name: 'Crews Beyond Limits' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is Monday Motivation LIVE?', acceptedAnswer: { '@type': 'Answer', text: 'Monday Motivation LIVE is a weekly show hosted by Krystalore Crews every Monday morning. It features high-energy mindset strategies, goal-setting frameworks, motivational stories, and actionable tips to start your week with confidence and purpose.' } },
          { '@type': 'Question', name: 'Where can I watch Monday Motivation LIVE?', acceptedAnswer: { '@type': 'Answer', text: 'Monday Motivation LIVE streams on YouTube at youtube.com/@krystalore. Past episodes are available on the channel for replay anytime.' } },
          { '@type': 'Question', name: 'What time does Monday Motivation LIVE air?', acceptedAnswer: { '@type': 'Answer', text: 'The show airs live every Monday morning. Check the YouTube channel and social media for exact times and special guest announcements.' } },
          { '@type': 'Question', name: 'Is Monday Motivation LIVE free to watch?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Monday Motivation LIVE is completely free. Subscribe to the YouTube channel to get notified when each episode goes live.' } },
          { '@type': 'Question', name: 'Can I submit questions for Monday Motivation LIVE?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely! During the live stream, you can submit questions in the chat. Krystalore regularly engages with viewer questions and provides real-time coaching and motivation.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const episodes = [
  { title: 'Destroy Your Comfort Zone', description: 'Why staying comfortable is the most dangerous thing you can do for your growth.', icon: Zap },
  { title: 'The 5 C\'s Power Framework', description: 'Core, Consistency, Confidence, Community, Celebration — the blueprint for breakthrough weeks.', icon: Target },
  { title: 'Mindset Over Matter', description: 'How to rewire your thinking patterns and crush self-doubt before it crushes you.', icon: Brain },
  { title: 'Goal-Setting That Works', description: 'Forget vague resolutions. Build weekly micro-goals that compound into massive results.', icon: Star },
  { title: 'Energy Management', description: 'Stop managing time. Start managing energy. Learn the rhythms of peak performance.', icon: Heart },
  { title: 'Your Network Is Your Net Worth', description: 'Building a community that challenges, supports, and elevates your game.', icon: Users },
]

const faqs = [
  { question: 'What is Monday Motivation LIVE?', answer: 'Monday Motivation LIVE is a weekly show hosted by Krystalore Crews every Monday morning. It features high-energy mindset strategies, goal-setting frameworks, motivational stories, and actionable tips to start your week with confidence and purpose. The show combines personal development, business strategy, and fitness mindset into one powerful weekly dose of inspiration.' },
  { question: 'Where can I watch Monday Motivation LIVE?', answer: 'Monday Motivation LIVE streams on YouTube at youtube.com/@krystalore. Past episodes are available on the channel for replay anytime. You can also catch clips and highlights on Instagram and TikTok @thecrewscoach.' },
  { question: 'What time does Monday Motivation LIVE air?', answer: 'The show airs live every Monday morning. Check the YouTube channel and Krystalore\'s social media for exact times and special guest announcements. Subscribe and hit the bell icon to get notified when each episode goes live.' },
  { question: 'Is Monday Motivation LIVE free to watch?', answer: 'Yes, Monday Motivation LIVE is completely free. Subscribe to the YouTube channel to get notified when each episode goes live. No login, no paywall — just pure motivation delivered straight to your screen every Monday.' },
  { question: 'Can I submit questions for Monday Motivation LIVE?', answer: 'Absolutely! During the live stream, you can submit questions in the YouTube chat. Krystalore regularly engages with viewer questions and provides real-time coaching, motivation, and strategy. It\'s like getting free coaching every Monday.' },
  { question: 'What topics does Monday Motivation LIVE cover?', answer: 'Topics range from mindset shifts and goal-setting to business growth, fitness motivation, emotional intelligence, leadership development, and personal transformation. Each episode is designed to give you at least one powerful takeaway you can apply immediately.' },
  { question: 'Who is Monday Motivation LIVE for?', answer: 'Anyone who wants to start their week with intention and energy. Entrepreneurs, executives, fitness enthusiasts, military families, and anyone committed to personal growth will find value in the show.' },
  { question: 'Can I listen to Monday Motivation as a podcast?', answer: 'Yes! Krystalore\'s podcast is available on Spotify and other major platforms. Search for Krystalore Crews or visit the podcast page for direct links to subscribe and listen on the go.' },
]

export default function MondayMotivationPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/hero.jpg" alt="Monday Motivation" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Monday Motivation</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Weekly motivation to start your Monday with fire, focus, and unstoppable energy.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* What Is Monday Motivation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Monday Motivation LIVE?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monday Motivation LIVE is Krystalore Crews&apos; weekly show designed to set your entire week on fire. Every Monday morning, Krystalore goes live on YouTube to deliver high-energy mindset strategies, personal development frameworks, and the kind of real talk that actually moves the needle.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This isn&apos;t generic &quot;you can do it&quot; content. It&apos;s battle-tested strategies from someone who went from a wheelchair to 26 marathons, who built a business empire as a military spouse, and who coaches executives and entrepreneurs to breakthrough performance every single day.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Does All In Look Like?</h3>
              <p className="text-gray-600 leading-relaxed">
                Each episode challenges you to go all in — on your mindset, your goals, your health, and your relationships. Most people quit right before it gets good. Monday Motivation helps you push through that wall.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/krystalore-keynote.jpg" alt="Krystalore Crews delivering Monday Motivation" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Episode Themes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Episode Themes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every Monday brings a new theme designed to challenge your thinking and accelerate your growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((ep) => (
              <div key={ep.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <ep.icon className="w-7 h-7 text-[#34c5c5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ep.title}</h3>
                <p className="text-gray-600 leading-relaxed">{ep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Your MAGIC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/speaker-stage.jpg" alt="Krystalore Crews on stage" fill className="object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Work Your MAGIC</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Krystalore&apos;s MAGIC framework is at the heart of every Monday Motivation episode:
              </p>
              <ul className="space-y-4">
                {[
                  { letter: 'M', word: 'Mindset', desc: 'Reprogram how you think about challenges, failure, and success.' },
                  { letter: 'A', word: 'Action', desc: 'Stop planning. Start doing. Imperfect action beats perfect inaction.' },
                  { letter: 'G', word: 'Growth', desc: 'Every week is an opportunity to be 1% better than last week.' },
                  { letter: 'I', word: 'Intention', desc: 'Live on purpose. Design your days instead of reacting to them.' },
                  { letter: 'C', word: 'Commitment', desc: 'Stay the course when motivation fades. Discipline > feelings.' },
                ].map((item) => (
                  <li key={item.letter} className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-[#34c5c5] text-white font-bold rounded-lg flex items-center justify-center flex-shrink-0">{item.letter}</span>
                    <div>
                      <span className="font-bold text-gray-900">{item.word}</span>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Embed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Listen on the Go</h2>
            <p className="text-gray-600 text-lg">Catch Krystalore&apos;s podcast on Spotify — motivation, mindset, and real talk wherever you are.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://open.spotify.com/embed/show/6acctiaNwQqFy8HVuiXlN7?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Monday Motivation FAQ" subtitle="Everything you need to know about the show." />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Starting Your Week on Empty</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Subscribe to Monday Motivation LIVE and join thousands who start every week with fire, focus, and a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.youtube.com/@krystalore" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all hover:scale-105">
              Subscribe on YouTube
            </a>
            <Link href="/book" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">
              Book a Call with Krystalore
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/monday-morning-motivation-quotes" className="hover:text-white">Motivation Quotes</Link>
            <Link href="/podcasts" className="hover:text-white">Podcast</Link>
            <Link href="/keynote-speaker" className="hover:text-white">Keynote Speaker</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
