import DashboardLayout from '@/components/layout/dashboard-layout'
import { Users, MessageCircle, Calendar, Star } from 'lucide-react'

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Community</h1>
          <p className="text-gray-600 mt-2">
            Connect with like-minded leaders and professionals
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building an amazing community platform where you'll be able to connect 
            with fellow executives, veterans, entrepreneurs, and leaders. Get ready for 
            meaningful discussions, networking opportunities, and collaborative growth!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Users className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Focused Groups</h4>
              <p className="text-sm text-gray-600">Join communities for veterans, entrepreneurs, women leaders, and corporate executives.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <MessageCircle className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Discussions</h4>
              <p className="text-sm text-gray-600">Engage in meaningful conversations about leadership, growth, and success.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Events</h4>
              <p className="text-sm text-gray-600">Attend virtual meetups, workshops, and networking events with other members.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Mentorship</h4>
              <p className="text-sm text-gray-600">Connect with mentors and mentees for professional development and guidance.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">👥 Community Groups You'll Love</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div className="flex items-center">
                <span className="mr-2">🎖️</span>
                <span>Veterans Leadership Network</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👑</span>
                <span>Women in Leadership</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🚀</span>
                <span>Entrepreneurs & Founders</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💼</span>
                <span>Corporate Executives</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💪</span>
                <span>Health & Fitness</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎯</span>
                <span>Goal Achievers</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center">
              <Star className="h-5 w-5 mr-2 text-[#FF8900]" />
              Community Guidelines (Preview)
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <strong className="text-gray-900">Be Respectful:</strong> Treat all members with courtesy and professionalism.
              </div>
              <div>
                <strong className="text-gray-900">Share Knowledge:</strong> Help others by sharing insights and experiences.
              </div>
              <div>
                <strong className="text-gray-900">Stay Focused:</strong> Keep discussions relevant to each community's purpose.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}