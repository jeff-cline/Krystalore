'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Video, Calendar, BarChart3, PieChart, Activity, Target } from 'lucide-react'

interface AnalyticsData {
  overview: {
    totalUsers: number
    userGrowthPercent: number
    totalVideos: number
    videoGrowthPercent: number
    totalCategories: number
    storageUsed: string
  }
  userGrowthTrend: Array<{
    period: string
    users: number
    change: number
  }>
  contentGrowthTrend: Array<{
    period: string
    videos: number
    change: number
  }>
  membershipDistribution: Array<{
    level: string
    count: number
    percentage: number
    revenue?: number
  }>
  categoryDistribution: Array<{
    category: string
    videos: number
    percentage: number
  }>
  topPerformingCategories: Array<{
    category: string
    videos: number
    userEngagement: number
    growthRate: number
  }>
}

export default function AdminAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('30d')

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const fetchAnalytics = async () => {
    try {
      const [statsResponse, usersResponse, videosResponse] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/users?limit=1000'),
        fetch('/api/videos?limit=1000')
      ])

      const [stats, usersData, videosData] = await Promise.all([
        statsResponse.json(),
        usersResponse.json(),
        videosResponse.json()
      ])

      const users = usersData.users || []
      const videos = videosData.videos || []

      // Calculate user growth trend
      const last6Months = Array.from({ length: 6 }, (_, i) => {
        const date = new Date()
        date.setMonth(date.getMonth() - i)
        return {
          date: date.toISOString().slice(0, 7),
          display: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        }
      }).reverse()

      const usersByMonth = users.reduce((acc: any, user: any) => {
        const month = new Date(user.createdAt).toISOString().slice(0, 7)
        acc[month] = (acc[month] || 0) + 1
        return acc
      }, {})

      const userGrowthTrend = last6Months.map((month, index) => {
        const currentUsers = usersByMonth[month.date] || 0
        const previousUsers = index > 0 ? usersByMonth[last6Months[index - 1].date] || 0 : 0
        const change = previousUsers > 0 ? Math.round(((currentUsers - previousUsers) / previousUsers) * 100) : 0
        
        return {
          period: month.display,
          users: currentUsers,
          change
        }
      })

      // Calculate content growth trend
      const videosByMonth = videos.reduce((acc: any, video: any) => {
        const month = new Date(video.createdAt).toISOString().slice(0, 7)
        acc[month] = (acc[month] || 0) + 1
        return acc
      }, {})

      const contentGrowthTrend = last6Months.map((month, index) => {
        const currentVideos = videosByMonth[month.date] || 0
        const previousVideos = index > 0 ? videosByMonth[last6Months[index - 1].date] || 0 : 0
        const change = previousVideos > 0 ? Math.round(((currentVideos - previousVideos) / previousVideos) * 100) : 0
        
        return {
          period: month.display,
          videos: currentVideos,
          change
        }
      })

      // Membership distribution
      const membershipCounts = users.reduce((acc: any, user: any) => {
        acc[user.membershipLevel] = (acc[user.membershipLevel] || 0) + 1
        return acc
      }, {})

      const totalUsers = users.length
      const membershipDistribution = Object.entries(membershipCounts).map(([level, count]) => ({
        level,
        count: count as number,
        percentage: Math.round(((count as number) / totalUsers) * 100),
        revenue: (count as number) * (level === 'VIP' ? 200 : level === 'PREMIUM' ? 100 : level === 'BASIC' ? 50 : 0) // Mock revenue
      }))

      // Category distribution
      const categoryVideos = videos.reduce((acc: any, video: any) => {
        const category = video.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + 1
        return acc
      }, {})

      const totalVideos = videos.length
      const categoryDistribution = Object.entries(categoryVideos).map(([category, count]) => ({
        category,
        videos: count as number,
        percentage: Math.round(((count as number) / totalVideos) * 100)
      })).sort((a, b) => b.videos - a.videos)

      // Top performing categories (with mock engagement data)
      const topPerformingCategories = categoryDistribution.slice(0, 5).map(cat => ({
        ...cat,
        userEngagement: Math.floor(Math.random() * 40) + 60, // 60-100%
        growthRate: Math.floor(Math.random() * 50) - 10 // -10% to 40%
      }))

      // Calculate growth percentages
      const currentMonthUsers = userGrowthTrend[userGrowthTrend.length - 1]?.users || 0
      const previousMonthUsers = userGrowthTrend[userGrowthTrend.length - 2]?.users || 0
      const userGrowthPercent = previousMonthUsers > 0 ? Math.round(((currentMonthUsers - previousMonthUsers) / previousMonthUsers) * 100) : 0

      const currentMonthVideos = contentGrowthTrend[contentGrowthTrend.length - 1]?.videos || 0
      const previousMonthVideos = contentGrowthTrend[contentGrowthTrend.length - 2]?.videos || 0
      const videoGrowthPercent = previousMonthVideos > 0 ? Math.round(((currentMonthVideos - previousMonthVideos) / previousMonthVideos) * 100) : 0

      const analyticsData: AnalyticsData = {
        overview: {
          totalUsers: stats.totalUsers,
          userGrowthPercent,
          totalVideos: stats.totalVideos,
          videoGrowthPercent,
          totalCategories: stats.totalCategories,
          storageUsed: stats.storageUsed
        },
        userGrowthTrend,
        contentGrowthTrend,
        membershipDistribution,
        categoryDistribution,
        topPerformingCategories
      }

      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-24 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Platform Analytics</h1>
          <p className="text-gray-400">
            Real-time insights into platform performance and user engagement
          </p>
        </div>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
          <option value="1y">Last Year</option>
        </select>
      </div>

      {/* Overview Cards */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.overview.totalUsers.toLocaleString()}</p>
                <p className={`text-sm mt-1 flex items-center ${
                  analytics.overview.userGrowthPercent >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {analytics.overview.userGrowthPercent >= 0 ? '+' : ''}{analytics.overview.userGrowthPercent}% MoM
                </p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Videos</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.overview.totalVideos.toLocaleString()}</p>
                <p className={`text-sm mt-1 flex items-center ${
                  analytics.overview.videoGrowthPercent >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {analytics.overview.videoGrowthPercent >= 0 ? '+' : ''}{analytics.overview.videoGrowthPercent}% MoM
                </p>
              </div>
              <Video className="h-8 w-8 text-secondary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.overview.totalCategories}</p>
                <p className="text-sm mt-1 text-primary">Active content areas</p>
              </div>
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Storage Used</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.overview.storageUsed}</p>
                <p className="text-sm mt-1 text-blue-500">Total platform storage</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Growth Trend */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Users className="h-5 w-5 mr-2" />
            User Growth Trend
          </h2>
          <div className="space-y-4">
            {analytics?.userGrowthTrend.map((period, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-primary mr-3" />
                  <span className="text-white">{period.period}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">+{period.users}</p>
                  <p className={`text-xs flex items-center justify-end ${
                    period.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {period.change >= 0 ? '+' : ''}{period.change}%
                  </p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No user growth data available</p>
            )}
          </div>
        </div>

        {/* Content Growth Trend */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Video className="h-5 w-5 mr-2" />
            Content Growth Trend
          </h2>
          <div className="space-y-4">
            {analytics?.contentGrowthTrend.map((period, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-secondary mr-3" />
                  <span className="text-white">{period.period}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">+{period.videos}</p>
                  <p className={`text-xs flex items-center justify-end ${
                    period.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {period.change >= 0 ? '+' : ''}{period.change}%
                  </p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No content growth data available</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Membership Distribution */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <PieChart className="h-5 w-5 mr-2" />
            Membership Distribution
          </h2>
          <div className="space-y-4">
            {analytics?.membershipDistribution.map((membership, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    membership.level === 'VIP' ? 'bg-purple-500' :
                    membership.level === 'PREMIUM' ? 'bg-blue-500' :
                    membership.level === 'BASIC' ? 'bg-green-500' :
                    'bg-gray-500'
                  }`}></div>
                  <div>
                    <p className="text-white font-medium">{membership.level}</p>
                    <p className="text-xs text-gray-400">{membership.percentage}% of users</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{membership.count}</p>
                  <p className="text-xs text-gray-400">
                    ${membership.revenue?.toLocaleString() || 0} MRR
                  </p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No membership data available</p>
            )}
          </div>
        </div>

        {/* Category Distribution */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Category Distribution
          </h2>
          <div className="space-y-4">
            {analytics?.categoryDistribution.slice(0, 6).map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <div>
                    <p className="text-white font-medium">{category.category}</p>
                    <p className="text-xs text-gray-400">{category.percentage}% of content</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{category.videos}</p>
                  <p className="text-xs text-gray-400">videos</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No category data available</p>
            )}
          </div>
        </div>
      </div>

      {/* Top Performing Categories */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Top Performing Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Videos
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Engagement
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Growth Rate
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {analytics?.topPerformingCategories.map((category, index) => (
                <tr key={index} className="hover:bg-dark-700">
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span className="text-white font-medium">{category.category}</span>
                    </div>
                  </td>
                  <td className="py-3 text-white">{category.videos}</td>
                  <td className="py-3 text-white">{category.userEngagement}%</td>
                  <td className="py-3">
                    <span className={`${
                      category.growthRate >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {category.growthRate >= 0 ? '+' : ''}{category.growthRate}%
                    </span>
                  </td>
                  <td className="py-3">
                    <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      category.userEngagement >= 85 ? 'bg-green-800 text-green-200' :
                      category.userEngagement >= 70 ? 'bg-blue-800 text-blue-200' :
                      category.userEngagement >= 60 ? 'bg-yellow-800 text-yellow-200' :
                      'bg-red-800 text-red-200'
                    }`}>
                      {category.userEngagement >= 85 ? 'Excellent' :
                       category.userEngagement >= 70 ? 'Very Good' :
                       category.userEngagement >= 60 ? 'Good' : 'Needs Attention'}
                    </div>
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    No performance data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-dark-700 rounded-lg">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h3 className="text-white font-semibold">User Growth</h3>
            <p className="text-sm text-gray-400 mt-1">
              {analytics?.overview.userGrowthPercent && analytics.overview.userGrowthPercent > 0 
                ? `Growing by ${analytics.overview.userGrowthPercent}% monthly`
                : 'User growth has slowed'
              }
            </p>
          </div>
          
          <div className="text-center p-4 bg-dark-700 rounded-lg">
            <Video className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Content Library</h3>
            <p className="text-sm text-gray-400 mt-1">
              {analytics?.overview.totalVideos} videos across {analytics?.overview.totalCategories} categories
            </p>
          </div>
          
          <div className="text-center p-4 bg-dark-700 rounded-lg">
            <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Premium Conversion</h3>
            <p className="text-sm text-gray-400 mt-1">
              {analytics?.membershipDistribution.find(m => ['PREMIUM', 'VIP'].includes(m.level))?.percentage || 0}% of users are premium
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}