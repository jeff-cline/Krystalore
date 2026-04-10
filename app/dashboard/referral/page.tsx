import DashboardLayout from '@/components/layout/dashboard-layout'
import { Share2, Gift, DollarSign, Users, Trophy } from 'lucide-react'

export default function ReferralPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Referral Program</h1>
          <p className="text-gray-600 mt-2">
            Earn rewards by sharing the transformation with others
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Share2 className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Referral Program Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building an amazing referral program that will let you earn rewards for 
            sharing Executive Krystalore with your network. Get ready to turn your influence 
            into income while helping others transform their lives!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <DollarSign className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">High Commissions</h4>
              <p className="text-sm text-gray-600">Earn up to 40% commission on every referral that joins.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Gift className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Monthly Bonuses</h4>
              <p className="text-sm text-gray-600">Get additional bonuses based on your referral tier and activity.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Users className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Easy Sharing</h4>
              <p className="text-sm text-gray-600">Share your unique link via email, social media, or text messages.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">VIP Rewards</h4>
              <p className="text-sm text-gray-600">Unlock exclusive perks and VIP access as your referrals grow.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white mb-8">
            <h3 className="text-lg font-semibold mb-4">💰 What You'll Earn</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-white/90">
              <div className="text-center">
                <div className="text-xl font-bold">25-40%</div>
                <div>Commission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">$25-$200</div>
                <div>Monthly Bonuses</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">VIP</div>
                <div>Exclusive Access</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">Monthly</div>
                <div>Payouts</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">🚀 How It Will Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FF8900] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Share Your Link</h4>
                <p className="text-gray-600">Get your unique referral link and share it with your network.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#34c5c5] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">They Join & Succeed</h4>
                <p className="text-gray-600">Your referrals sign up and benefit from the platform.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">You Earn Rewards</h4>
                <p className="text-gray-600">Receive ongoing commissions and bonuses from their success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}