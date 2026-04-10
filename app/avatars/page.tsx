import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { Shield, Users, Target, Building, Star, MessageCircle, Calendar, Award } from 'lucide-react'

export default function AvatarsPage() {
  const avatars = [
    {
      name: 'Veterans',
      description: 'A specialized community for military veterans transitioning to civilian leadership roles.',
      slug: 'veterans',
      icon: Shield,
      color: 'from-green-600 to-green-800',
      members: 1247,
      activeDiscussions: 23,
      upcomingEvents: 3,
      features: [
        'Transition support and career guidance',
        'Leadership skill translation workshops',
        'Networking with fellow veterans in business',
        'Monthly veteran-focused webinars',
        'Resource sharing for VA benefits and opportunities'
      ],
      moderators: ['Krystal Ore', 'Colonel (Ret.) Mike Johnson', 'Sarah Martinez, MBA']
    },
    {
      name: 'Women',
      description: 'Empowering women leaders to break barriers and achieve their full potential.',
      slug: 'women',
      icon: Star,
      color: 'from-pink-600 to-pink-800',
      members: 2156,
      activeDiscussions: 45,
      upcomingEvents: 5,
      features: [
        'Women in leadership mentorship programs',
        'Work-life balance strategies and support',
        'Confidence building and personal branding',
        'Monthly women-only leadership circles',
        'Salary negotiation and career advancement'
      ],
      moderators: ['Krystal Ore', 'Dr. Amanda Chen', 'Lisa Rodriguez, CEO']
    },
    {
      name: 'Entrepreneurs',
      description: 'Connect with fellow business builders and scale your entrepreneurial journey.',
      slug: 'entrepreneurs',
      icon: Target,
      color: 'from-blue-600 to-blue-800',
      members: 1893,
      activeDiscussions: 38,
      upcomingEvents: 4,
      features: [
        'Business strategy and growth tactics',
        'Investor readiness and funding guidance',
        'Marketing and sales optimization',
        'Peer-to-peer business mentoring',
        'Monthly pitch practice sessions'
      ],
      moderators: ['Krystal Ore', 'David Kim, Serial Entrepreneur', 'Maria Santos, VC Partner']
    },
    {
      name: 'Corporate',
      description: 'Executive leadership development for corporate professionals and C-suite aspirants.',
      slug: 'corporate',
      icon: Building,
      color: 'from-purple-600 to-purple-800',
      members: 3421,
      activeDiscussions: 67,
      upcomingEvents: 6,
      features: [
        'Executive presence and boardroom skills',
        'Corporate politics navigation',
        'Team leadership and organizational change',
        'C-suite preparation and succession planning',
        'Monthly executive roundtables'
      ],
      moderators: ['Krystal Ore', 'James Wilson, Former Fortune 500 CEO', 'Dr. Patricia Lee']
    }
  ]

  const communityStats = {
    totalMembers: avatars.reduce((sum, avatar) => sum + avatar.members, 0),
    totalDiscussions: avatars.reduce((sum, avatar) => sum + avatar.activeDiscussions, 0),
    totalEvents: avatars.reduce((sum, avatar) => sum + avatar.upcomingEvents, 0)
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Avatar <span className="text-primary">Communities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded leaders who share your background, challenges, and aspirations. 
            Find your tribe and accelerate your growth through specialized communities.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">{communityStats.totalMembers.toLocaleString()}</h3>
            <p className="text-gray-400">Active Members</p>
          </div>
          
          <div className="card text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">{communityStats.totalDiscussions}</h3>
            <p className="text-gray-400">Active Discussions</p>
          </div>
          
          <div className="card text-center">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">{communityStats.totalEvents}</h3>
            <p className="text-gray-400">Upcoming Events</p>
          </div>
        </div>

        {/* Avatar Communities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {avatars.map((avatar, index) => {
            const IconComponent = avatar.icon
            return (
              <div key={index} className="card hover:bg-secondary-700 transition-all duration-300 group">
                <div className={`bg-gradient-to-r ${avatar.color} rounded-lg p-6 mb-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent className="h-12 w-12 text-white mr-4" />
                      <div>
                        <h2 className="text-2xl font-bold text-white">{avatar.name}</h2>
                        <p className="text-gray-200">{avatar.members.toLocaleString()} members</p>
                      </div>
                    </div>
                    <Award className="h-8 w-8 text-white opacity-50" />
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{avatar.description}</p>

                {/* Community Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary-700 rounded">
                    <div className="text-lg font-bold text-white">{avatar.activeDiscussions}</div>
                    <div className="text-xs text-gray-400">Active Discussions</div>
                  </div>
                  <div className="text-center p-3 bg-secondary-700 rounded">
                    <div className="text-lg font-bold text-white">{avatar.upcomingEvents}</div>
                    <div className="text-xs text-gray-400">Upcoming Events</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Community Features:</h3>
                  <ul className="space-y-2">
                    {avatar.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-400">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                    {avatar.features.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{avatar.features.length - 3} more features...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Moderators */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Community Moderators:</h4>
                  <div className="text-sm text-gray-500">
                    {avatar.moderators.slice(0, 2).join(', ')}
                    {avatar.moderators.length > 2 && ' & more'}
                  </div>
                </div>

                <Link
                  href={`/avatars/${avatar.slug}`}
                  className="btn-primary w-full group-hover:bg-primary-600 transition-colors"
                >
                  Join {avatar.name} Community
                </Link>
              </div>
            )
          })}
        </div>

        {/* How Communities Work */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-white mb-6">How Avatar Communities Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
              <p className="text-gray-400">
                Join discussions, share experiences, and build meaningful relationships with peers who understand your journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Learn</h3>
              <p className="text-gray-400">
                Access specialized content, workshops, and resources tailored specifically for your community's needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Grow</h3>
              <p className="text-gray-400">
                Accelerate your development through mentorship, accountability partnerships, and exclusive opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="card bg-secondary-800/50">
          <h3 className="text-lg font-semibold text-white mb-4">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-2">Our Values:</h4>
              <ul className="space-y-1">
                <li>• Respect and inclusivity for all members</li>
                <li>• Constructive and supportive communication</li>
                <li>• Professional networking and growth focus</li>
                <li>• Confidentiality and trust within discussions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Community Benefits:</h4>
              <ul className="space-y-1">
                <li>• Expert moderation and guidance</li>
                <li>• Monthly exclusive events and workshops</li>
                <li>• Direct access to Krystal and guest experts</li>
                <li>• Networking opportunities and partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-white mb-6">Community Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-secondary-700 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "The Veterans community helped me translate my military leadership experience into corporate success. 
                The transition support was invaluable."
              </p>
              <footer className="text-primary font-semibold">— Michael R., Former Navy Officer</footer>
            </blockquote>
            
            <blockquote className="bg-secondary-700 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "Being part of the Women's community gave me the confidence to negotiate my promotion to VP. 
                The mentorship and support system is incredible."
              </p>
              <footer className="text-primary font-semibold">— Sarah M., Tech Executive</footer>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find Your <span className="text-primary">Leadership Tribe</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the community that understands your unique challenges and can help you reach your full potential.
          </p>
          <Link href="/auth/signup" className="btn-primary text-lg px-8 py-4">
            Join Our Communities
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}