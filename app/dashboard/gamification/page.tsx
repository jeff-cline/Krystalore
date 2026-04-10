import DashboardLayout from '@/components/layout/dashboard-layout'
import { Trophy, Award, Target, Flame, Star, Zap } from 'lucide-react'

export default function GamificationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gamification</h1>
          <p className="text-gray-600 mt-2">
            Track your progress and earn rewards for your achievements
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gamification Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get ready for an engaging experience! We're building a comprehensive point system, 
            achievement badges, and level progression to make your learning journey even more 
            rewarding and motivating.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Trophy className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Points & Levels</h4>
              <p className="text-sm text-gray-600">Earn points for completing activities and progress through achievement levels.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Award className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Badges & Awards</h4>
              <p className="text-sm text-gray-600">Collect badges for milestones like course completion and consistency streaks.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Flame className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Streaks & Habits</h4>
              <p className="text-sm text-gray-600">Build momentum with daily login streaks and habit tracking.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white mb-8">
            <h3 className="text-lg font-semibold mb-4">🎮 Features You'll Love</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                <span>Achievement Levels: Newcomer → Legend</span>
              </div>
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
                <span>Goal Tracking & Rewards</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span>Special Badges for Milestones</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>Daily Challenges & Bonuses</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                <span>Leaderboards & Competitions</span>
              </div>
              <div className="flex items-center">
                <Flame className="h-4 w-4 mr-2" />
                <span>Consistency Streak Rewards</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">🏆 Preview: How You'll Earn Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-[#FF8900] mb-2">Daily Activities</h4>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between">
                    <span>Daily login</span>
                    <span className="font-medium">10 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Watch video</span>
                    <span className="font-medium">20 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complete workout</span>
                    <span className="font-medium">30 pts</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#34c5c5] mb-2">Milestones</h4>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between">
                    <span>Complete course</span>
                    <span className="font-medium">250 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Perfect quiz score</span>
                    <span className="font-medium">100 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>7-day streak</span>
                    <span className="font-medium">150 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}