import DashboardLayout from '@/components/layout/dashboard-layout'
import { Share2, Gift, DollarSign, Users, Trophy } from 'lucide-react'

export default function ReferralsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Referrals</h1>
          <p className="text-gray-600 mt-2">
            Track your referrals and earnings
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Referral Tracking Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            This page will show your detailed referral statistics, earnings history, 
            and the people you've referred to Executive Krystalore. Track your success 
            and see how your network is growing!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Users className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Referral List</h4>
              <p className="text-sm text-gray-600">See all the people you've referred and their status.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <DollarSign className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Earnings Tracker</h4>
              <p className="text-sm text-gray-600">Monitor your monthly and lifetime referral earnings.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Performance Stats</h4>
              <p className="text-sm text-gray-600">View conversion rates and referral activity analytics.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Gift className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Bonus Tracking</h4>
              <p className="text-sm text-gray-600">Track milestone bonuses and special rewards earned.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">📊 What You'll See Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div>• Detailed referral list with names and status</div>
              <div>• Monthly and lifetime earnings breakdown</div>
              <div>• Conversion rates and click analytics</div>
              <div>• Payout history and pending payments</div>
              <div>• Milestone progress and bonus tracking</div>
              <div>• Referral tier progression charts</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}