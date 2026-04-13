import type { UnifiedVideo } from '@/types/unified-video'
import type { FeedFlixVaultVideo } from '@/lib/feedflix'

/**
 * Normalize a local Prisma video to UnifiedVideo shape
 */
export function normalizeLocalVideo(video: any, hasAccess: boolean): UnifiedVideo {
  return {
    id: video.id,
    source: 'local',
    title: video.title,
    description: video.description || null,
    category: video.category || video.categoryRef?.name || '',
    categoryId: video.categoryId || null,
    muxPlaybackId: video.muxPlaybackId || null,
    thumbnailUrl: video.thumbnailUrl || null,
    duration: video.duration || null,
    membershipLevel: video.membershipLevel || 'FREE',
    isPublished: video.isPublished ?? true,
    createdAt: video.createdAt?.toISOString?.() || video.createdAt || '',
    hasAccess,
    fileUrl: video.fileUrl || null,
    fileKey: video.fileKey || null,
    fileType: video.fileType || 'VIDEO',
    uploader: video.uploader ? { name: video.uploader.name, image: video.uploader.image } : undefined,
  }
}

/**
 * Normalize a FeedFlix vault video to UnifiedVideo shape
 */
export function normalizeFeedFlixVideo(
  video: FeedFlixVaultVideo,
  localMapping: { id: string; name: string; membershipLevel: string } | null,
  hasAccess: boolean
): UnifiedVideo {
  return {
    id: `ff_${video.id}`,
    source: 'feedflix',
    title: video.title,
    description: video.description || null,
    category: localMapping?.name || video.category?.name || '',
    categoryId: localMapping?.id || null,
    muxPlaybackId: video.mux_playback_id || null,
    thumbnailUrl: null,
    duration: video.duration_seconds || null,
    membershipLevel: localMapping?.membershipLevel || 'FREE',
    isPublished: true,
    createdAt: video.created_at || '',
    hasAccess,
    viewCount: video.view_count || 0,
    uploader: video.user ? { name: video.user.name } : undefined,
  }
}

/**
 * Merge local and FeedFlix videos, deduplicating on muxPlaybackId.
 * Local videos take priority in dedup (richer metadata).
 */
export function mergeAndDedup(
  localVideos: UnifiedVideo[],
  feedflixVideos: UnifiedVideo[]
): UnifiedVideo[] {
  const localPlaybackIds = new Set(
    localVideos.filter(v => v.muxPlaybackId).map(v => v.muxPlaybackId)
  )

  // Only include FeedFlix videos that don't already exist locally
  const uniqueFeedflix = feedflixVideos.filter(v => {
    if (!v.muxPlaybackId) return true
    return !localPlaybackIds.has(v.muxPlaybackId)
  })

  const merged = [...localVideos, ...uniqueFeedflix]
  merged.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return merged
}
