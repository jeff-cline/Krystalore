import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { Headphones, Play, Calendar, Clock, Download, Rss, Star, Users } from 'lucide-react'

export default function PodcastsPage() {
  const podcasts = [
    {
      title: 'Krystal Clear Life Podcast',
      description: 'Weekly deep-dive conversations about leadership, personal development, and life transformation with inspiring guests and practical insights.',
      slug: 'krystal-clear-life',
      featured: true,
      episodes: 156,
      frequency: 'Weekly',
      category: 'Leadership & Life',
      rating: 4.9,
      subscribers: 45000,
      latestEpisode: {
        title: 'Breaking Through Your Comfort Zone: Why Discomfort Is Your Friend',
        date: '2024-02-05',
        duration: '42 min'
      },
      platforms: ['Apple Podcasts', 'Spotify', 'Google Podcasts', 'Amazon Music']
    },
    {
      title: 'Your Next Mission Podcast: From Service to Success',
      description: 'Specifically designed for veterans transitioning from military service to civilian leadership roles and entrepreneurial success.',
      slug: 'your-next-mission',
      featured: true,
      episodes: 89,
      frequency: 'Bi-weekly',
      category: 'Veterans & Transition',
      rating: 4.8,
      subscribers: 23000,
      latestEpisode: {
        title: 'Translating Military Leadership Skills in Corporate America',
        date: '2024-02-01',
        duration: '38 min'
      },
      platforms: ['Apple Podcasts', 'Spotify', 'Google Podcasts', 'Stitcher']
    },
    {
      title: 'Monday Motivation LIVE',
      description: 'Start your week with high-energy motivation, actionable tips, and the mindset shifts you need to crush your goals.',
      slug: 'monday-motivation-live',
      featured: false,
      episodes: 124,
      frequency: 'Weekly',
      category: 'Motivation & Mindset',
      rating: 4.7,
      subscribers: 31000,
      latestEpisode: {
        title: 'The Power of Small Wins: How to Build Unstoppable Momentum',
        date: '2024-02-05',
        duration: '15 min'
      },
      platforms: ['Apple Podcasts', 'Spotify', 'YouTube', 'Instagram Live']
    },
    {
      title: 'Freedom Friday',
      description: 'End your week by breaking free from limiting beliefs, negative patterns, and anything holding you back from your potential.',
      slug: 'freedom-friday',
      featured: false,
      episodes: 78,
      frequency: 'Weekly',
      category: 'Personal Freedom',
      rating: 4.8,
      subscribers: 19000,
      latestEpisode: {
        title: 'Releasing the Need for Perfectionism',
        date: '2024-02-02',
        duration: '28 min'
      },
      platforms: ['Apple Podcasts', 'Spotify', 'Google Podcasts']
    },
    {
      title: 'Just Breathe - Meditation Series',
      description: 'Guided meditations, breathwork sessions, and mindfulness practices to help you find calm in the chaos of leadership.',
      slug: 'just-breathe',
      featured: false,
      episodes: 67,
      frequency: 'Weekly',
      category: 'Meditation & Wellness',
      rating: 4.9,
      subscribers: 28000,
      latestEpisode: {
        title: '10-Minute Morning Clarity Meditation',
        date: '2024-02-04',
        duration: '12 min'
      },
      platforms: ['Apple Podcasts', 'Spotify', 'Insight Timer', 'Calm']
    }
  ]

  const totalSubscribers = podcasts.reduce((sum, podcast) => sum + podcast.subscribers, 0)
  const totalEpisodes = podcasts.reduce((sum, podcast) => sum + podcast.episodes, 0)

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Krystal's <span className="text-primary">Podcast Channels</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your commute, workout, or downtime into powerful learning sessions. 
            Access five unique podcast channels covering leadership, motivation, wellness, and personal growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/images/go9/speaking-headshot.jpg" alt="Krystalore Crews speaking at a leadership event" fill className="object-cover object-top" sizes="100vw" />
        </div>

        {/* Podcast Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">{totalSubscribers.toLocaleString()}</h3>
            <p className="text-gray-400">Total Subscribers</p>
          </div>
          
          <div className="card text-center">
            <Play className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">{totalEpisodes}</h3>
            <p className="text-gray-400">Total Episodes</p>
          </div>
          
          <div className="card text-center">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">4.8</h3>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>

        {/* Featured Podcasts */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Shows</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {podcasts.filter(podcast => podcast.featured).map((podcast, index) => (
              <div key={index} className="card bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="bg-[#34c5c5] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                      Featured
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-2">{podcast.title}</h3>
                    <p className="text-gray-300 mb-4">{podcast.description}</p>
                  </div>
                  <Headphones className="h-8 w-8 text-primary ml-4" />
                </div>

                {/* Podcast Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-secondary-700 rounded">
                    <div className="text-lg font-bold text-white">{podcast.episodes}</div>
                    <div className="text-xs text-gray-400">Episodes</div>
                  </div>
                  <div className="text-center p-3 bg-secondary-700 rounded">
                    <div className="text-lg font-bold text-white">{podcast.subscribers.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Subscribers</div>
                  </div>
                </div>

                {/* Latest Episode */}
                <div className="bg-secondary-700 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Latest Episode:</h4>
                  <h5 className="text-white font-semibold mb-1">{podcast.latestEpisode.title}</h5>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {podcast.latestEpisode.date}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {podcast.latestEpisode.duration}
                  </div>
                </div>

                <Link 
                  href={`/podcasts/${podcast.slug}`}
                  className="btn-primary w-full"
                >
                  Listen Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Podcasts */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">All Podcast Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <div key={index} className="card hover:bg-secondary-700 transition-colors">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Headphones className="h-6 w-6 text-primary" />
                    <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">
                      {podcast.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{podcast.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{podcast.description}</p>
                  
                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <div className="flex justify-between">
                      <span>Episodes:</span>
                      <span>{podcast.episodes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span>{podcast.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span>{podcast.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Latest Episode Preview */}
                  <div className="bg-secondary-700 rounded p-3 mb-3">
                    <h5 className="text-white text-sm font-semibold mb-1">{podcast.latestEpisode.title}</h5>
                    <div className="text-xs text-gray-400">
                      {podcast.latestEpisode.date} • {podcast.latestEpisode.duration}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/podcasts/${podcast.slug}`}
                  className="btn-secondary w-full text-sm"
                >
                  View Podcast
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Options */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-white mb-6">Listen Anywhere</h2>
          <p className="text-gray-300 mb-6">
            All podcasts are available on your favorite platforms. Choose your preferred way to listen and never miss an episode.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-colors">
              <div className="h-8 w-8 bg-primary rounded mx-auto mb-2"></div>
              <span className="text-white text-sm">Apple Podcasts</span>
            </div>
            <div className="text-center p-4 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-colors">
              <div className="h-8 w-8 bg-green-500 rounded mx-auto mb-2"></div>
              <span className="text-white text-sm">Spotify</span>
            </div>
            <div className="text-center p-4 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-colors">
              <div className="h-8 w-8 bg-blue-500 rounded mx-auto mb-2"></div>
              <span className="text-white text-sm">Google Podcasts</span>
            </div>
            <div className="text-center p-4 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-colors">
              <div className="h-8 w-8 bg-[#34c5c5] rounded mx-auto mb-2"></div>
              <span className="text-white text-sm">More Platforms</span>
            </div>
          </div>
        </div>

        {/* Podcast Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Why Subscribe?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Play className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span>Weekly fresh content across 5 different channels</span>
              </li>
              <li className="flex items-start">
                <Download className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span>Download episodes for offline listening</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span>Access to exclusive subscriber-only content</span>
              </li>
              <li className="flex items-start">
                <Rss className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span>Automatic notifications for new episodes</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Perfect For</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Commuting and daily travel</li>
              <li>• Workout sessions and runs</li>
              <li>• Morning routines and preparation</li>
              <li>• Quiet time and reflection</li>
              <li>• Learning during multitasking</li>
              <li>• Team listening and discussion</li>
            </ul>
          </div>
        </div>

        {/* Guest Appearances */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-white mb-6">Notable Guest Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                "From Navy SEAL to CEO: Leadership Under Pressure"
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                Krystal Clear Life Podcast • Episode 142
              </p>
              <p className="text-gray-300">
                An incredible conversation with former Navy SEAL turned Fortune 500 CEO about leadership principles that work in both combat and boardrooms.
              </p>
            </div>

            <div className="bg-secondary-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                "Breaking the Glass Ceiling: Women in Executive Leadership"
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                Your Next Mission Podcast • Episode 76
              </p>
              <p className="text-gray-300">
                A powerful panel discussion with three female executives who share their journey from military service to C-suite success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start <span className="text-primary">Listening</span> Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your daily routine with powerful insights and motivation delivered straight to your ears.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcasts/krystal-clear-life" className="btn-primary">
              Start with Main Podcast
            </Link>
            <button className="btn-secondary">
              Subscribe to All Channels
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}