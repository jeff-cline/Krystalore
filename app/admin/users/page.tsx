'use client'

import { useState, useEffect } from 'react'
import { Users, Search, Filter, Download, Mail, Shield, UserX, UserCheck, MoreHorizontal } from 'lucide-react'

interface User {
  id: string
  name: string | null
  email: string
  role: string
  membershipLevel: string
  image: string | null
  createdAt: string
  emailVerified: string | null
  _count: {
    videos: number
    permissionOverrides: number
  }
}

interface UsersResponse {
  users: User[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export default function AdminUsersPage() {
  const [data, setData] = useState<UsersResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [membershipLevel, setMembershipLevel] = useState('ALL')
  const [page, setPage] = useState(1)
  const [notificationTarget, setNotificationTarget] = useState('')
  const [notificationSubject, setNotificationSubject] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const [sendingNotification, setSendingNotification] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [search, membershipLevel, page])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20'
      })
      
      if (search) params.set('search', search)
      if (membershipLevel !== 'ALL') params.set('membershipLevel', membershipLevel)

      const response = await fetch(`/api/admin/users?${params}`)
      if (response.ok) {
        const userData = await response.json()
        setData(userData)
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUserUpdate = async (userId: string, updates: any) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, ...updates })
      })

      if (response.ok) {
        fetchUsers() // Refresh the list
      } else {
        const error = await response.json()
        alert(`Update failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Update error:', error)
      alert('Update failed due to network error')
    }
  }

  const handleSendNotification = async () => {
    if (!notificationTarget || !notificationSubject || !notificationMessage) {
      alert('Please fill in all fields')
      return
    }

    setSendingNotification(true)
    try {
      const response = await fetch('/api/admin/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: notificationTarget,
          subject: notificationSubject,
          message: notificationMessage
        })
      })

      if (response.ok) {
        const result = await response.json()
        alert(result.message)
        setShowNotificationModal(false)
        setNotificationTarget('')
        setNotificationSubject('')
        setNotificationMessage('')
      } else {
        const error = await response.json()
        alert(`Notification failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Notification error:', error)
      alert('Notification failed due to network error')
    } finally {
      setSendingNotification(false)
    }
  }

  const exportUsers = async () => {
    try {
      const params = new URLSearchParams()
      if (search) params.set('search', search)
      if (membershipLevel !== 'ALL') params.set('membershipLevel', membershipLevel)
      params.set('limit', '1000') // Export more records

      const response = await fetch(`/api/admin/users?${params}`)
      if (response.ok) {
        const userData = await response.json()
        
        // Create CSV
        const csvData = userData.users.map((user: User) => ({
          Name: user.name || '',
          Email: user.email,
          Role: user.role,
          'Membership Level': user.membershipLevel,
          'Email Verified': user.emailVerified ? 'Yes' : 'No',
          'Videos Uploaded': user._count.videos,
          'Permission Overrides': user._count.permissionOverrides,
          'Joined Date': new Date(user.createdAt).toLocaleDateString()
        }))

        const csvString = [
          Object.keys(csvData[0]).join(','),
          ...csvData.map((row: any) => Object.values(row).join(','))
        ].join('\n')

        const blob = new Blob([csvString], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `users-export-${new Date().toISOString().split('T')[0]}.csv`
        a.click()
        window.URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Export error:', error)
      alert('Export failed')
    }
  }

  if (loading && !data) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-16 bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  const userStats = data ? {
    totalUsers: data.total,
    activeUsers: data.users.filter(u => u.emailVerified).length,
    premiumUsers: data.users.filter(u => ['PREMIUM', 'VIP'].includes(u.membershipLevel)).length,
    newThisMonth: data.users.filter(u => {
      const userDate = new Date(u.createdAt)
      const now = new Date()
      return userDate.getMonth() === now.getMonth() && userDate.getFullYear() === now.getFullYear()
    }).length
  } : { totalUsers: 0, activeUsers: 0, premiumUsers: 0, newThisMonth: 0 }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">
            Manage user accounts, permissions, and platform access
          </p>
        </div>
        <button 
          onClick={() => setShowNotificationModal(true)}
          className="btn-primary flex items-center"
        >
          <Mail className="h-4 w-4 mr-2" />
          Send Notification
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{userStats.totalUsers.toLocaleString()}</div>
          <p className="text-sm text-gray-400">Total Users</p>
        </div>
        <div className="card text-center">
          <UserCheck className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{userStats.activeUsers.toLocaleString()}</div>
          <p className="text-sm text-gray-400">Verified Users</p>
        </div>
        <div className="card text-center">
          <UserX className="h-8 w-8 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{userStats.newThisMonth}</div>
          <p className="text-sm text-gray-400">New This Month</p>
        </div>
        <div className="card text-center">
          <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{userStats.premiumUsers}</div>
          <p className="text-sm text-gray-400">Premium Members</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select 
              className="bg-dark-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white"
              value={membershipLevel}
              onChange={(e) => {
                setMembershipLevel(e.target.value)
                setPage(1)
              }}
            >
              <option value="ALL">All Levels</option>
              <option value="FREE">Free</option>
              <option value="BASIC">Basic</option>
              <option value="PREMIUM">Premium</option>
              <option value="VIP">VIP</option>
            </select>
            
            <button 
              onClick={exportUsers}
              className="flex items-center px-3 py-2 border border-gray-600 rounded-lg hover:bg-dark-700 transition-colors text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold text-white">
            All Users {data && `(${data.total} total)`}
          </h2>
        </div>
        
        {loading ? (
          <div className="p-6">
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Membership
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Videos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data?.users.map((user) => (
                  <tr key={user.id} className="hover:bg-dark-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#34c5c5] rounded-full flex items-center justify-center text-white font-medium mr-3">
                          {user.image ? (
                            <img src={user.image} alt="" className="w-10 h-10 rounded-full" />
                          ) : (
                            (user.name?.[0] || user.email[0]).toUpperCase()
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{user.name || 'No name'}</div>
                          <div className="text-sm text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={user.role}
                        onChange={(e) => handleUserUpdate(user.id, { role: e.target.value })}
                        className="bg-dark-700 border border-gray-600 rounded px-2 py-1 text-sm text-white"
                      >
                        <option value="MEMBER">Member</option>
                        <option value="ADMIN">Admin</option>
                        <option value="GOD">God</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={user.membershipLevel}
                        onChange={(e) => handleUserUpdate(user.id, { membershipLevel: e.target.value })}
                        className="bg-dark-700 border border-gray-600 rounded px-2 py-1 text-sm text-white"
                      >
                        <option value="FREE">Free</option>
                        <option value="BASIC">Basic</option>
                        <option value="PREMIUM">Premium</option>
                        <option value="VIP">VIP</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user._count.videos} uploaded
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.emailVerified ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'
                      }`}>
                        {user.emailVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-primary hover:text-primary/80">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-300">
                          <Shield className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-300">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination */}
        {data && data.totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-600">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing {((data.page - 1) * data.limit) + 1} to {Math.min(data.page * data.limit, data.total)} of {data.total} users
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 border border-gray-600 rounded text-sm hover:bg-dark-700 disabled:opacity-50 text-white"
                >
                  Previous
                </button>
                {[...Array(Math.min(5, data.totalPages))].map((_, i) => {
                  const pageNum = Math.max(1, Math.min(data.totalPages - 4, page - 2)) + i
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-3 py-1 rounded text-sm ${
                        page === pageNum ? 'bg-[#34c5c5] text-white' : 'border border-gray-600 hover:bg-dark-700 text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
                <button 
                  onClick={() => setPage(Math.min(data.totalPages, page + 1))}
                  disabled={page === data.totalPages}
                  className="px-3 py-1 border border-gray-600 rounded text-sm hover:bg-dark-700 disabled:opacity-50 text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Send Notification</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Target</label>
                <select
                  value={notificationTarget}
                  onChange={(e) => setNotificationTarget(e.target.value)}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  <option value="">Select target...</option>
                  <option value="all">All Users</option>
                  <option value="level:PREMIUM">Premium Members</option>
                  <option value="level:VIP">VIP Members</option>
                  <option value="level:BASIC">Basic Members</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  value={notificationSubject}
                  onChange={(e) => setNotificationSubject(e.target.value)}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Notification subject..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Your message..."
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowNotificationModal(false)}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-dark-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSendNotification}
                disabled={sendingNotification}
                className="btn-primary disabled:opacity-50"
              >
                {sendingNotification ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}