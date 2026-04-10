'use client'

import { useState, useEffect } from 'react'
import { Video, Image, File, Folder, Upload, Link as LinkIcon, Users } from 'lucide-react'
import Link from 'next/link'

interface ContentStats {
  totalVideos: number
  publishedVideos: number
  unpublishedVideos: number
  totalCategories: number
  videosByCategory: Array<{
    name: string
    count: number
    categoryId?: string
  }>
  fileTypes: Array<{
    type: string
    count: number
  }>
  storageUsed: string
  recentUploads: Array<{
    id: string
    title: string
    category: string
    fileType: string
    createdAt: string
    uploader: { name: string | null }
  }>
}

export default function AdminContentPage() {
  const [stats, setStats] = useState<ContentStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContentStats()
  }, [])

  const fetchContentStats = async () => {
    try {
      const [videosResponse, categoriesResponse] = await Promise.all([
        fetch('/api/videos?limit=1000'),
        fetch('/api/categories')
      ])

      const [videosData, categoriesData] = await Promise.all([
        videosResponse.json(),
        categoriesResponse.json()
      ])

      // Calculate stats from the data
      const videos = videosData.videos || []
      const categories = categoriesData.categories || []

      const publishedVideos = videos.filter((v: any) => v.isPublished).length
      const unpublishedVideos = videos.length - publishedVideos

      // Group by category
      const videosByCategory = Object.entries(
        videos.reduce((acc: any, video: any) => {
          const category = video.category || 'Uncategorized'
          acc[category] = (acc[category] || 0) + 1
          return acc
        }, {})
      ).map(([name, count]) => ({ name, count: count as number }))
      .sort((a, b) => b.count - a.count)

      // Group by file type
      const fileTypes = Object.entries(
        videos.reduce((acc: any, video: any) => {
          const type = video.fileType || 'OTHER'
          acc[type] = (acc[type] || 0) + 1
          return acc
        }, {})
      ).map(([type, count]) => ({ type, count: count as number }))

      // Calculate storage
      const totalBytes = videos.reduce((acc: number, video: any) => 
        acc + (video.fileSize || 0), 0)
      const storageUsedGB = (totalBytes / (1024 * 1024 * 1024)).toFixed(2)

      // Recent uploads
      const recentUploads = videos
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 10)

      const contentStats: ContentStats = {
        totalVideos: videos.length,
        publishedVideos,
        unpublishedVideos,
        totalCategories: categories.length,
        videosByCategory,
        fileTypes,
        storageUsed: `${storageUsedGB} GB`,
        recentUploads
      }

      setStats(contentStats)
    } catch (error) {
      console.error('Failed to fetch content stats:', error)
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
              <div className="h-20 bg-gray-700 rounded"></div>
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
          <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
          <p className="text-gray-400">
            Overview of all content, uploads, and category management
          </p>
        </div>
        <div className="flex space-x-3">
          <Link href="/admin/videos" className="btn-secondary">
            <Video className="h-4 w-4 mr-2" />
            Manage Videos
          </Link>
          <Link href="/admin/videos" className="btn-primary">
            <Upload className="h-4 w-4 mr-2" />
            Upload Content
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Videos</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.totalVideos.toLocaleString()}</p>
                <p className="text-sm mt-1 text-primary">{stats.publishedVideos} published</p>
              </div>
              <Video className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.totalCategories}</p>
                <p className="text-sm mt-1 text-secondary">{stats.videosByCategory.length} with content</p>
              </div>
              <Folder className="h-8 w-8 text-secondary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Unpublished</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.unpublishedVideos}</p>
                <p className="text-sm mt-1 text-yellow-500">Needs review</p>
              </div>
              <File className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Storage Used</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.storageUsed}</p>
                <p className="text-sm mt-1 text-blue-500">Total size</p>
              </div>
              <Upload className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Breakdown by Category */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Videos by Category</h2>
          <div className="space-y-4">
            {stats?.videosByCategory.slice(0, 8).map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-4 w-4 text-secondary mr-3" />
                  <div>
                    <p className="text-white font-medium">{category.name}</p>
                    <Link 
                      href={`/admin/videos?category=${encodeURIComponent(category.name)}`}
                      className="text-xs text-primary hover:underline"
                    >
                      View videos in this category
                    </Link>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{category.count}</p>
                  <p className="text-xs text-gray-400">videos</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No categories found</p>
            )}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <Link href="/admin/videos" className="btn-secondary w-full text-center">
              Manage All Videos
            </Link>
          </div>
        </div>

        {/* File Types Breakdown */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Content Types</h2>
          <div className="space-y-4">
            {stats?.fileTypes.map((fileType, index) => {
              const getIcon = (type: string) => {
                switch (type) {
                  case 'VIDEO': return Video
                  case 'IMAGE': return Image
                  default: return File
                }
              }
              const Icon = getIcon(fileType.type)
              
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <p className="text-white font-medium capitalize">
                        {fileType.type.toLowerCase()}s
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{fileType.count}</p>
                    <p className="text-xs text-gray-400">files</p>
                  </div>
                </div>
              )
            }) || (
              <p className="text-gray-400">No content found</p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Recent Uploads</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Content
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Type
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Uploader
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {stats?.recentUploads.map((upload) => (
                <tr key={upload.id} className="hover:bg-dark-700">
                  <td className="py-3">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-primary mr-2" />
                      <div>
                        <p className="text-white font-medium text-sm">{upload.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-300">
                    {upload.category}
                  </td>
                  <td className="py-3 text-sm text-gray-300 capitalize">
                    {upload.fileType.toLowerCase()}
                  </td>
                  <td className="py-3 text-sm text-gray-300">
                    {upload.uploader.name || 'Unknown'}
                  </td>
                  <td className="py-3 text-sm text-gray-300">
                    {new Date(upload.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3">
                    <Link 
                      href={`/admin/videos?search=${encodeURIComponent(upload.title)}`}
                      className="text-primary hover:text-primary/80 text-sm"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-400">
                    No recent uploads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/videos" 
            className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left block"
          >
            <Upload className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-white">Upload New Content</h3>
            <p className="text-sm text-gray-400">Add videos to the platform</p>
          </Link>
          
          <div className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left">
            <Users className="h-6 w-6 text-secondary mb-2" />
            <h3 className="font-medium text-white">Bulk Category Assignment</h3>
            <p className="text-sm text-gray-400">Organize uncategorized content</p>
          </div>
          
          <div className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left">
            <File className="h-6 w-6 text-yellow-500 mb-2" />
            <h3 className="font-medium text-white">Review Unpublished</h3>
            <p className="text-sm text-gray-400">Check {stats?.unpublishedVideos || 0} pending items</p>
          </div>
        </div>
      </div>
    </div>
  )
}