'use client'

import { useState, useEffect } from 'react'
import { Users, Video, Calendar, TrendingUp, Upload, Play, MessageSquare, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

interface AdminStats {
  totalUsers: number
  totalVideos: number
  totalCategories: number
  publishedVideos: number
  videosByCategory: { name: string; count: number }[]
  usersByLevel: { level: string; count: number }[]
  recentVideos: Array<{
    id: string
    title: string
    createdAt: string
    category: string
    uploader: { name: string | null }
  }>
  storageUsed: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [importing, setImporting] = useState(false)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImportFromUploadThing = async () => {
    setImporting(true)
    try {
      const response = await fetch('/api/import/uploadthing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      
      if (response.ok) {
        const result = await response.json()
        alert(`Import completed! Processed ${result.processed} files, imported ${result.imported} new videos.`)
        fetchStats() // Refresh stats
      } else {
        const error = await response.json()
        alert(`Import failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Import error:', error)
      alert('Import failed due to network error')
    } finally {
      setImporting(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-20 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const statCards = stats ? [
    { 
      label: 'Total Users', 
      value: stats.totalUsers.toLocaleString(), 
      change: `${stats.usersByLevel.find(u => u.level === 'PREMIUM')?.count || 0} Premium`, 
      icon: Users, 
      color: 'text-primary' 
    },
    { 
      label: 'Videos in Vault', 
      value: stats.totalVideos.toLocaleString(), 
      change: `${stats.publishedVideos} published`, 
      icon: Video, 
      color: 'text-secondary' 
    },
    { 
      label: 'Categories', 
      value: stats.totalCategories.toString(), 
      change: `${stats.videosByCategory.length} active`, 
      icon: Calendar, 
      color: 'text-primary' 
    },
    { 
      label: 'Storage Used', 
      value: stats.storageUsed, 
      change: `${((stats.publishedVideos / stats.totalVideos) * 100).toFixed(1)}% published`, 
      icon: TrendingUp, 
      color: 'text-secondary' 
    },
  ] : []

  // System status - this could be enhanced with real monitoring data
  const systemStatus = [
    { name: 'Video Streaming', status: 'operational', color: 'bg-green-500' },
    { name: 'UploadThing', status: 'operational', color: 'bg-green-500' },
    { name: 'Database', status: 'operational', color: 'bg-green-500' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back, Krystal. Here's what's happening on your platform.</p>
        </div>
        <button
          onClick={handleImportFromUploadThing}
          disabled={importing}
          className="btn-primary flex items-center disabled:opacity-50"
        >
          <Upload className="h-4 w-4 mr-2" />
          {importing ? 'Importing...' : 'Import from UploadThing'}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Videos</h2>
          <div className="space-y-4">
            {stats?.recentVideos.map((video, index) => (
              <div key={video.id} className="flex items-start">
                <div className="bg-dark-700 rounded-full p-2 mr-4">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium">{video.title}</p>
                  <p className="text-gray-400 text-sm">Category: {video.category}</p>
                  <p className="text-gray-400 text-sm">Uploaded by: {video.uploader.name || 'Unknown'}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {new Date(video.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400 text-sm">No recent videos</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/admin/videos" 
              className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left block"
            >
              <Upload className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-white font-medium">Manage Videos</h3>
              <p className="text-gray-400 text-sm">Upload & organize</p>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left block"
            >
              <Users className="h-6 w-6 text-secondary mb-2" />
              <h3 className="text-white font-medium">Manage Users</h3>
              <p className="text-gray-400 text-sm">View all members</p>
            </Link>
            
            <Link 
              href="/admin/integrations" 
              className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left block"
            >
              <Calendar className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-white font-medium">Integrations</h3>
              <p className="text-gray-400 text-sm">Connect services</p>
            </Link>
            
            <Link 
              href="/admin/analytics" 
              className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left block"
            >
              <TrendingUp className="h-6 w-6 text-secondary mb-2" />
              <h3 className="text-white font-medium">View Analytics</h3>
              <p className="text-gray-400 text-sm">Platform insights</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Breakdown */}
      {stats && stats.videosByCategory.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Content Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.videosByCategory.slice(0, 6).map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-dark-700 rounded-lg p-4">
                  <h3 className="text-white font-medium">{category.name}</h3>
                  <p className="text-2xl font-bold text-primary mt-2">{category.count}</p>
                  <p className="text-gray-400 text-sm">videos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Status */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systemStatus.map((service, index) => (
            <div key={index} className="text-center">
              <div className={`${service.color} rounded-full w-4 h-4 mx-auto mb-2`}></div>
              <h3 className="text-white font-medium">{service.name}</h3>
              <p className="text-gray-400 text-sm capitalize">{service.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}