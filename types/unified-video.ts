export interface UnifiedVideo {
  id: string
  source: 'local' | 'feedflix'
  title: string
  description: string | null
  category: string
  categoryId: string | null
  muxPlaybackId: string | null
  thumbnailUrl: string | null
  duration: number | null
  membershipLevel: string
  isPublished: boolean
  createdAt: string
  hasAccess: boolean
  viewCount?: number
  fileUrl?: string | null
  fileKey?: string | null
  fileType?: string
  uploader?: { name: string | null; image?: string | null }
}
