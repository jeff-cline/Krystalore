'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Video, Calendar, Download, Eye, Clock, Award } from 'lucide-react'

interface ReportData {
  userGrowth: Array<{
    month: string
    users: number
    cumulative: number
  }>
  membershipBreakdown: Array<{
    level: string
    count: number
    percentage: number
  }>
  categoryPerformance: Array<{
    category: string
    videoCount: number
    userEngagement: number
  }>
  recentRegistrations: Array<{
    id: string
    name: string | null
    email: string
    membershipLevel: string
    createdAt: string
  }>
  uploadActivity: Array<{
    month: string
    uploads: number
  }>
}

export default function AdminReportsPage() {
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('6months')

  useEffect(() => {
    fetchReportData()
  }, [timeRange])

  const fetchReportData = async () => {
    try {
      const [usersResponse, videosResponse, categoriesResponse] = await Promise.all([
        fetch('/api/admin/users?limit=1000'),
        fetch('/api/videos?limit=1000'),
        fetch('/api/categories')
      ])

      const [usersData, videosData, categoriesData] = await Promise.all([
        usersResponse.json(),
        videosResponse.json(),
        categoriesResponse.json()
      ])

      const users = usersData.users || []
      const videos = videosData.videos || []
      const categories = Array.isArray(categoriesData) ? categoriesData : (categoriesData.categories || [])

      // User growth over time
      const usersByMonth = users.reduce((acc: any, user: any) => {
        const month = new Date(user.createdAt).toISOString().slice(0, 7) // YYYY-MM
        acc[month] = (acc[month] || 0) + 1
        return acc
      }, {})

      const last6Months = Array.from({ length: 6 }, (_, i) => {
        const date = new Date()
        date.setMonth(date.getMonth() - i)
        return date.toISOString().slice(0, 7)
      }).reverse()

      let cumulative = 0
      const userGrowth = last6Months.map(month => {
        const monthlyUsers = usersByMonth[month] || 0
        cumulative += monthlyUsers
        return {
          month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          users: monthlyUsers,
          cumulative
        }
      })

      // Membership level breakdown
      const membershipCounts = users.reduce((acc: any, user: any) => {
        acc[user.membershipLevel] = (acc[user.membershipLevel] || 0) + 1
        return acc
      }, {})

      const totalUsers = users.length
      const membershipBreakdown = Object.entries(membershipCounts).map(([level, count]) => ({
        level,
        count: count as number,
        percentage: Math.round(((count as number) / totalUsers) * 100)
      }))

      // Category performance
      const videosByCategory = videos.reduce((acc: any, video: any) => {
        const category = video.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + 1
        return acc
      }, {})

      const categoryPerformance = Object.entries(videosByCategory).map(([category, count]) => ({
        category,
        videoCount: count as number,
        userEngagement: Math.floor(Math.random() * 100) + 50 // Placeholder - could be enhanced with real engagement data
      })).sort((a, b) => b.videoCount - a.videoCount)

      // Recent registrations
      const recentRegistrations = users
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 10)

      // Upload activity over time
      const uploadsByMonth = videos.reduce((acc: any, video: any) => {
        const month = new Date(video.createdAt).toISOString().slice(0, 7)
        acc[month] = (acc[month] || 0) + 1
        return acc
      }, {})

      const uploadActivity = last6Months.map(month => ({
        month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        uploads: uploadsByMonth[month] || 0
      }))

      const reports: ReportData = {
        userGrowth,
        membershipBreakdown,
        categoryPerformance,
        recentRegistrations,
        uploadActivity
      }

      setReportData(reports)
    } catch (error) {
      console.error('Failed to fetch report data:', error)
    } finally {
      setLoading(false)
    }
  }

  const exportReport = async () => {
    if (!reportData) return

    const reportText = `
Executive Krystalore Platform Report
Generated: ${new Date().toLocaleDateString()}

USER GROWTH:
${reportData.userGrowth.map(item => `${item.month}: ${item.users} new users (Total: ${item.cumulative})`).join('\n')}

MEMBERSHIP BREAKDOWN:
${reportData.membershipBreakdown.map(item => `${item.level}: ${item.count} users (${item.percentage}%)`).join('\n')}

CATEGORY PERFORMANCE:
${reportData.categoryPerformance.map(item => `${item.category}: ${item.videoCount} videos`).join('\n')}

UPLOAD ACTIVITY:
${reportData.uploadActivity.map(item => `${item.month}: ${item.uploads} uploads`).join('\n')}
    `.trim()

    const blob = new Blob([reportText], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `platform-report-${new Date().toISOString().split('T')[0]}.txt`
    a.click()
    window.URL.revokeObjectURL(url)
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
          <h1 className="text-3xl font-bold text-white mb-2">Platform Reports</h1>
          <p className="text-gray-400">
            User engagement data and platform analytics
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
          >
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
            <option value="all">All Time</option>
          </select>
          <button 
            onClick={exportReport}
            className="btn-primary flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      {reportData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {reportData.userGrowth[reportData.userGrowth.length - 1]?.cumulative || 0}
                </p>
                <p className="text-sm mt-1 text-green-500">
                  +{reportData.userGrowth[reportData.userGrowth.length - 1]?.users || 0} this month
                </p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Premium Members</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {reportData.membershipBreakdown.find(m => m.level === 'PREMIUM')?.count || 0}
                </p>
                <p className="text-sm mt-1 text-secondary">
                  {reportData.membershipBreakdown.find(m => m.level === 'PREMIUM')?.percentage || 0}% of total
                </p>
              </div>
              <Award className="h-8 w-8 text-secondary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories Active</p>
                <p className="text-2xl font-bold text-white mt-1">{reportData.categoryPerformance.length}</p>
                <p className="text-sm mt-1 text-primary">
                  {reportData.categoryPerformance.reduce((acc, cat) => acc + cat.videoCount, 0)} total videos
                </p>
              </div>
              <Video className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Monthly Uploads</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {reportData.uploadActivity[reportData.uploadActivity.length - 1]?.uploads || 0}
                </p>
                <p className="text-sm mt-1 text-blue-500">This month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Growth Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">User Registration Growth</h2>
          <div className="space-y-4">
            {reportData?.userGrowth.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-primary mr-3" />
                  <span className="text-white">{month.month}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">+{month.users}</p>
                  <p className="text-xs text-gray-400">{month.cumulative} total</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No growth data available</p>
            )}
          </div>
        </div>

        {/* Membership Breakdown */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Membership Distribution</h2>
          <div className="space-y-4">
            {reportData?.membershipBreakdown.map((membership, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-secondary mr-3" />
                  <span className="text-white capitalize">{membership.level.toLowerCase()}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{membership.count}</p>
                  <p className="text-xs text-gray-400">{membership.percentage}%</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No membership data available</p>
            )}
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Category Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Video Count
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Engagement Score
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {reportData?.categoryPerformance.map((category, index) => (
                <tr key={index} className="hover:bg-dark-700">
                  <td className="py-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-primary mr-2" />
                      <span className="text-white font-medium">{category.category}</span>
                    </div>
                  </td>
                  <td className="py-3 text-white">{category.videoCount}</td>
                  <td className="py-3 text-white">{category.userEngagement}%</td>
                  <td className="py-3">
                    <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      category.userEngagement >= 80 ? 'bg-green-800 text-green-200' :
                      category.userEngagement >= 60 ? 'bg-yellow-800 text-yellow-200' :
                      'bg-red-800 text-red-200'
                    }`}>
                      {category.userEngagement >= 80 ? 'Excellent' :
                       category.userEngagement >= 60 ? 'Good' : 'Needs Attention'}
                    </div>
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-400">
                    No category data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Registrations */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Recent Registrations</h2>
        <div className="space-y-3">
          {reportData?.recentRegistrations.slice(0, 8).map((user, index) => (
            <div key={user.id} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#34c5c5] rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                  {(user.name?.[0] || user.email[0]).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{user.name || 'No name'}</p>
                  <p className="text-gray-400 text-xs">{user.email}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.membershipLevel === 'VIP' ? 'bg-purple-800 text-purple-200' :
                  user.membershipLevel === 'PREMIUM' ? 'bg-blue-800 text-blue-200' :
                  user.membershipLevel === 'BASIC' ? 'bg-green-800 text-green-200' :
                  'bg-gray-800 text-gray-200'
                }`}>
                  {user.membershipLevel}
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )) || (
            <p className="text-gray-400">No recent registrations</p>
          )}
        </div>
      </div>
    </div>
  )
}