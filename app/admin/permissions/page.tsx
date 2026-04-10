'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  Shield, Users, Settings, Plus, Save, X, Edit, Trash2, 
  Download, Upload, AlertCircle, CheckCircle, Lock, Unlock
} from 'lucide-react'

interface Category {
  id: string
  name: string
  slug: string
  membershipLevel: string
}

interface PermissionSet {
  id: string
  name: string
  description: string | null
  membershipLevel: string
  categories: Category[]
  _count: { users: number }
}

interface User {
  id: string
  name: string | null
  email: string
  membershipLevel: string
  permissionOverrides?: any[]
}

interface UserPermissions {
  user: User
  permissions: Array<{
    categoryId: string
    categoryName: string
    hasAccess: boolean
    isOverride: boolean
  }>
  overrides: any[]
}

export default function PermissionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [activeTab, setActiveTab] = useState<'sets' | 'users' | 'import'>('sets')
  
  // Permission Sets
  const [permissionSets, setPermissionSets] = useState<PermissionSet[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [editingSet, setEditingSet] = useState<PermissionSet | null>(null)
  const [showNewSet, setShowNewSet] = useState(false)
  const [newSet, setNewSet] = useState({
    name: '',
    description: '',
    membershipLevel: 'FREE' as string,
    categoryIds: [] as string[],
  })

  // User Permissions
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [userPermissions, setUserPermissions] = useState<UserPermissions | null>(null)
  
  // Import
  const [importing, setImporting] = useState(false)
  const [importResults, setImportResults] = useState<any>(null)
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  const fetchData = useCallback(async () => {
    try {
      const [permSetsRes, categoriesRes, usersRes] = await Promise.all([
        fetch('/api/permissions'),
        fetch('/api/categories'),
        fetch('/api/admin/users')
      ])

      const [permSets, cats, usersList] = await Promise.all([
        permSetsRes.json(),
        categoriesRes.json(),
        usersRes.json()
      ])

      setPermissionSets(permSets || [])
      setCategories(cats || [])
      setUsers(usersList?.users || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const createPermissionSet = async () => {
    try {
      await fetch('/api/permissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSet),
      })
      
      setShowNewSet(false)
      setNewSet({ name: '', description: '', membershipLevel: 'FREE', categoryIds: [] })
      fetchData()
    } catch (error) {
      console.error('Error creating permission set:', error)
    }
  }

  const updatePermissionSet = async (set: PermissionSet) => {
    try {
      await fetch('/api/permissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: set.id,
          name: set.name,
          description: set.description,
          membershipLevel: set.membershipLevel,
          categoryIds: set.categories.map(c => c.id),
        }),
      })
      
      setEditingSet(null)
      fetchData()
    } catch (error) {
      console.error('Error updating permission set:', error)
    }
  }

  const deletePermissionSet = async (id: string) => {
    if (!confirm('Are you sure you want to delete this permission set?')) return
    
    try {
      await fetch(`/api/permissions?id=${id}`, { method: 'DELETE' })
      fetchData()
    } catch (error) {
      console.error('Error deleting permission set:', error)
    }
  }

  const fetchUserPermissions = async (userId: string) => {
    try {
      const response = await fetch(`/api/permissions/users?userId=${userId}`)
      const data = await response.json()
      setUserPermissions(data)
    } catch (error) {
      console.error('Error fetching user permissions:', error)
    }
  }

  const toggleUserCategoryAccess = async (categoryId: string, hasAccess: boolean) => {
    if (!selectedUser || !userPermissions) return
    
    try {
      // Find the permission set that contains this category
      const permissionSet = permissionSets.find(set => 
        set.categories.some(cat => cat.id === categoryId)
      )
      
      if (!permissionSet) return

      await fetch('/api/permissions/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedUser,
          permissionSetId: permissionSet.id,
          hasAccess,
        }),
      })
      
      fetchUserPermissions(selectedUser)
    } catch (error) {
      console.error('Error toggling user access:', error)
    }
  }

  const runImport = async () => {
    setImporting(true)
    setImportResults(null)
    
    try {
      const response = await fetch('/api/import/uploadthing', { method: 'POST' })
      const results = await response.json()
      setImportResults(results)
    } catch (error) {
      console.error('Import error:', error)
      setImportResults({ success: false, error: 'Import failed' })
    } finally {
      setImporting(false)
    }
  }

  if (status === 'loading' || loading) {
    return <div className="p-8 text-center text-white">Loading...</div>
  }

  if (!session) return null

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Permission Management</h1>
        <p className="text-gray-400">Control access to categories and content across membership levels.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('sets')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'sets'
              ? 'bg-[#34c5c5] text-white'
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
          }`}
        >
          <Shield className="h-4 w-4 inline mr-2" />
          Permission Sets
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'users'
              ? 'bg-[#34c5c5] text-white'
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
          }`}
        >
          <Users className="h-4 w-4 inline mr-2" />
          User Overrides
        </button>
        <button
          onClick={() => setActiveTab('import')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'import'
              ? 'bg-[#34c5c5] text-white'
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
          }`}
        >
          <Upload className="h-4 w-4 inline mr-2" />
          Import Content
        </button>
      </div>

      {/* Permission Sets Tab */}
      {activeTab === 'sets' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Permission Sets</h2>
            <button
              onClick={() => setShowNewSet(true)}
              className="btn-primary flex items-center text-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Permission Set
            </button>
          </div>

          {/* New Permission Set Form */}
          {showNewSet && (
            <div className="card space-y-4">
              <h3 className="text-white font-medium">New Permission Set</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Name"
                  value={newSet.name}
                  onChange={e => setNewSet(p => ({ ...p, name: e.target.value }))}
                  className="form-input"
                />
                <select
                  value={newSet.membershipLevel}
                  onChange={e => setNewSet(p => ({ ...p, membershipLevel: e.target.value }))}
                  className="form-input"
                >
                  <option value="FREE">FREE</option>
                  <option value="BASIC">BASIC</option>
                  <option value="PREMIUM">PREMIUM</option>
                  <option value="VIP">VIP</option>
                </select>
                <div className="col-span-2">
                  <textarea
                    placeholder="Description"
                    value={newSet.description}
                    onChange={e => setNewSet(p => ({ ...p, description: e.target.value }))}
                    className="form-input"
                    rows={3}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categories
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center text-sm text-gray-300">
                      <input
                        type="checkbox"
                        checked={newSet.categoryIds.includes(category.id)}
                        onChange={e => {
                          if (e.target.checked) {
                            setNewSet(p => ({ ...p, categoryIds: [...p.categoryIds, category.id] }))
                          } else {
                            setNewSet(p => ({ ...p, categoryIds: p.categoryIds.filter(id => id !== category.id) }))
                          }
                        }}
                        className="mr-2 rounded"
                      />
                      {category.name}
                      <span className="ml-1 text-xs text-gray-500">({category.membershipLevel})</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button onClick={createPermissionSet} className="btn-primary text-sm">
                  <Save className="h-4 w-4 mr-1 inline" />Save
                </button>
                <button onClick={() => setShowNewSet(false)} className="btn-secondary text-sm">
                  <X className="h-4 w-4 mr-1 inline" />Cancel
                </button>
              </div>
            </div>
          )}

          {/* Permission Sets List */}
          <div className="grid gap-6">
            {permissionSets.map(set => (
              <div key={set.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{set.name}</h3>
                    <p className="text-gray-400 text-sm">{set.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                        {set.membershipLevel}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {set._count.users} user{set._count.users !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingSet({ ...set })}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deletePermissionSet(set.id)}
                      className="p-2 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Categories ({set.categories.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {set.categories.map(category => (
                      <span
                        key={category.id}
                        className="bg-dark-700 text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Overrides Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">User Permission Overrides</h2>
            <div className="card">
              <div className="flex gap-4 items-center mb-6">
                <div className="flex-1">
                  <select
                    value={selectedUser}
                    onChange={e => {
                      setSelectedUser(e.target.value)
                      if (e.target.value) fetchUserPermissions(e.target.value)
                    }}
                    className="form-input w-full"
                  >
                    <option value="">Select a user...</option>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name || user.email} ({user.membershipLevel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {userPermissions && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-white font-medium mb-2">
                      {userPermissions.user.name || userPermissions.user.email}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Membership Level: <span className="text-primary">{userPermissions.user.membershipLevel}</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-gray-300 font-medium">Category Access</h4>
                    {userPermissions.permissions.map(perm => (
                      <div key={perm.categoryId} className="flex items-center justify-between p-3 bg-dark-700 rounded">
                        <div className="flex items-center">
                          <span className="text-white">{perm.categoryName}</span>
                          {perm.isOverride && (
                            <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                              Override
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleUserCategoryAccess(perm.categoryId, !perm.hasAccess)}
                          className={`flex items-center px-3 py-1 rounded text-sm ${
                            perm.hasAccess
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {perm.hasAccess ? (
                            <>
                              <Unlock className="h-4 w-4 mr-1" />
                              Access
                            </>
                          ) : (
                            <>
                              <Lock className="h-4 w-4 mr-1" />
                              Blocked
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Import Tab */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Import UploadThing Content</h2>
            <p className="text-gray-400">Import all files from UploadThing into the database with automatic categorization.</p>
          </div>

          <div className="card">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">Import Process</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Categorized videos: Auto-assign to appropriate categories</li>
                  <li>• Uncategorized videos: Import as "Uncategorized" for manual assignment</li>
                  <li>• Images: Flag as portfolio content and auto-publish</li>
                  <li>• Other files: Store references but hide from users</li>
                  <li>• Existing files will be skipped</li>
                </ul>
              </div>

              <button
                onClick={runImport}
                disabled={importing}
                className="btn-primary flex items-center"
              >
                <Upload className="h-4 w-4 mr-2" />
                {importing ? 'Importing...' : 'Start Import'}
              </button>
            </div>
          </div>

          {importResults && (
            <div className="card">
              <div className="flex items-center mb-4">
                {importResults.success ? (
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                )}
                <h3 className="text-white font-medium">Import Results</h3>
              </div>
              
              {importResults.success ? (
                <div className="space-y-3">
                  <p className="text-gray-300">{importResults.message}</p>
                  
                  {importResults.results && (
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-dark-700 p-3 rounded">
                        <div className="text-green-400 font-bold text-lg">{importResults.results.imported}</div>
                        <div className="text-gray-400">Imported</div>
                      </div>
                      <div className="bg-dark-700 p-3 rounded">
                        <div className="text-yellow-400 font-bold text-lg">{importResults.results.skipped}</div>
                        <div className="text-gray-400">Skipped</div>
                      </div>
                      <div className="bg-dark-700 p-3 rounded">
                        <div className="text-red-400 font-bold text-lg">{importResults.results.errors}</div>
                        <div className="text-gray-400">Errors</div>
                      </div>
                    </div>
                  )}

                  {importResults.results?.categories && (
                    <div>
                      <h4 className="text-gray-300 font-medium mb-2">Categories Created/Updated</h4>
                      <div className="flex flex-wrap gap-2">
                        {importResults.results.categories.map((cat: string) => (
                          <span key={cat} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-red-400">
                  <p>{importResults.error}</p>
                  {importResults.details && <p className="text-sm mt-1">{importResults.details}</p>}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}