'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { MessageCircle, Send, Pin, Trash2, ChevronDown, ChevronUp, Radio, Shield } from 'lucide-react'
import Link from 'next/link'

interface Post {
  id: string
  content: string
  group: string
  isPinned: boolean
  createdAt: string
  commentCount: number
  author: { id: string; name: string | null; image: string | null; role: string }
}

interface Comment {
  id: string
  content: string
  createdAt: string
  author: { id: string; name: string | null; image: string | null; role: string }
}

const GROUPS = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'veterans', label: 'Veterans' },
  { id: 'women', label: 'Women in Leadership' },
  { id: 'entrepreneurs', label: 'Entrepreneurs' },
  { id: 'goals', label: 'Goal Achievers' },
]

export default function CommunityPage() {
  const { data: session } = useSession()
  const userId = (session?.user as any)?.id
  const userRole = (session?.user as any)?.role || 'MEMBER'
  const isAdmin = ['GOD', 'ADMIN'].includes(userRole)

  const [group, setGroup] = useState('all')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [newPost, setNewPost] = useState('')
  const [posting, setPosting] = useState(false)
  const [expandedComments, setExpandedComments] = useState<Record<string, Comment[]>>({})
  const [loadingComments, setLoadingComments] = useState<Record<string, boolean>>({})
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({})
  const [isLive, setIsLive] = useState(false)

  const fetchPosts = useCallback(() => {
    setLoading(true)
    fetch(`/api/community/posts?group=${group}&limit=30`)
      .then(r => r.json())
      .then(data => setPosts(data.posts || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [group])

  useEffect(() => { fetchPosts() }, [fetchPosts])

  useEffect(() => {
    fetch('/api/mux/live').then(r => r.json()).then(d => setIsLive(d.active)).catch(() => {})
  }, [])

  const handlePost = async () => {
    if (!newPost.trim()) return
    setPosting(true)
    try {
      const res = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newPost, group: group === 'all' ? 'general' : group }),
      })
      const post = await res.json()
      if (!post.error) {
        setPosts(prev => [post, ...prev])
        setNewPost('')
      }
    } finally { setPosting(false) }
  }

  const toggleComments = async (postId: string) => {
    if (expandedComments[postId]) {
      setExpandedComments(prev => { const next = { ...prev }; delete next[postId]; return next })
      return
    }
    setLoadingComments(prev => ({ ...prev, [postId]: true }))
    try {
      const res = await fetch(`/api/community/posts/${postId}/comments`)
      const comments = await res.json()
      setExpandedComments(prev => ({ ...prev, [postId]: Array.isArray(comments) ? comments : [] }))
    } finally {
      setLoadingComments(prev => ({ ...prev, [postId]: false }))
    }
  }

  const handleComment = async (postId: string) => {
    const content = commentInputs[postId]?.trim()
    if (!content) return
    const res = await fetch(`/api/community/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    const comment = await res.json()
    if (!comment.error) {
      setExpandedComments(prev => ({ ...prev, [postId]: [...(prev[postId] || []), comment] }))
      setCommentInputs(prev => ({ ...prev, [postId]: '' }))
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, commentCount: p.commentCount + 1 } : p))
    }
  }

  const handlePin = async (postId: string, isPinned: boolean) => {
    await fetch(`/api/community/posts/${postId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isPinned }),
    })
    fetchPosts()
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/community/posts/${postId}`, { method: 'DELETE' })
    setPosts(prev => prev.filter(p => p.id !== postId))
  }

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    return `${days}d ago`
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Live Banner */}
        {isLive && (
          <Link href="/live" className="block bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white hover:from-red-600 hover:to-red-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              <Radio className="h-5 w-5" />
              <span className="font-bold">Krystalore is LIVE!</span>
              <span className="ml-auto bg-white/20 px-3 py-1 rounded-lg text-sm">Watch Now</span>
            </div>
          </Link>
        )}

        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Community</h1>
          <p className="text-gray-500 mt-1">Connect, share, and grow with fellow members</p>
        </div>

        {/* Group Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {GROUPS.map(g => (
            <button
              key={g.id}
              onClick={() => setGroup(g.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                group === g.id ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* New Post */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <textarea
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            placeholder="Share something with the community..."
            rows={3}
            className="w-full resize-none border border-gray-200 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-sm"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handlePost}
              disabled={posting || !newPost.trim()}
              className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white font-medium py-2 px-6 rounded-lg text-sm flex items-center gap-2 transition-colors"
            >
              <Send className="h-4 w-4" /> {posting ? 'Posting...' : 'Post'}
            </button>
          </div>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No posts yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className={`bg-white rounded-xl border ${post.isPinned ? 'border-teal/40 bg-teal/5' : 'border-gray-200'} p-4`}>
                {/* Post Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center text-teal font-bold text-sm flex-shrink-0">
                      {post.author.name?.[0]?.toUpperCase() || '?'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 text-sm">{post.author.name || 'Member'}</span>
                        {['GOD', 'ADMIN'].includes(post.author.role) && (
                          <Shield className="h-3.5 w-3.5 text-teal" />
                        )}
                        {post.isPinned && <Pin className="h-3.5 w-3.5 text-teal" />}
                      </div>
                      <span className="text-xs text-gray-400">{timeAgo(post.createdAt)} in {post.group}</span>
                    </div>
                  </div>
                  {(isAdmin || post.author.id === userId) && (
                    <div className="flex items-center gap-1">
                      {isAdmin && (
                        <button
                          onClick={() => handlePin(post.id, !post.isPinned)}
                          className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors"
                          title={post.isPinned ? 'Unpin' : 'Pin'}
                        >
                          <Pin className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Post Content */}
                <p className="text-gray-800 text-sm whitespace-pre-line mb-3">{post.content}</p>

                {/* Comments Toggle */}
                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments'}
                  {expandedComments[post.id] ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>

                {/* Comments */}
                {loadingComments[post.id] && (
                  <div className="mt-3 text-sm text-gray-400">Loading comments...</div>
                )}
                {expandedComments[post.id] && (
                  <div className="mt-3 space-y-3 pl-4 border-l-2 border-gray-100">
                    {expandedComments[post.id].map(comment => (
                      <div key={comment.id} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{comment.author.name || 'Member'}</span>
                          {['GOD', 'ADMIN'].includes(comment.author.role) && <Shield className="h-3 w-3 text-teal" />}
                          <span className="text-xs text-gray-400">{timeAgo(comment.createdAt)}</span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    ))}
                    <div className="flex gap-2 mt-2">
                      <input
                        value={commentInputs[post.id] || ''}
                        onChange={e => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                        onKeyDown={e => e.key === 'Enter' && handleComment(post.id)}
                        placeholder="Write a comment..."
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none"
                      />
                      <button
                        onClick={() => handleComment(post.id)}
                        disabled={!commentInputs[post.id]?.trim()}
                        className="bg-[#34c5c5] hover:bg-[#37a6a6] disabled:opacity-50 text-white px-3 py-2 rounded-lg transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
