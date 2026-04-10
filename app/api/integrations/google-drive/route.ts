import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const VAULT_PATH = join(process.cwd(), 'data', 'vault-videos.json')
const DRIVE_STATE_PATH = join(process.cwd(), 'data', 'google-drive-state.json')

function getDriveState() {
  if (existsSync(DRIVE_STATE_PATH)) {
    return JSON.parse(readFileSync(DRIVE_STATE_PATH, 'utf-8'))
  }
  return { connected: false, email: null, lastSync: null, videosImported: 0 }
}

function getVaultVideos() {
  if (existsSync(VAULT_PATH)) {
    return JSON.parse(readFileSync(VAULT_PATH, 'utf-8'))
  }
  return []
}

// GET: List files/folders from connected Drive (scaffold with mock data)
export async function GET() {
  const state = getDriveState()

  if (!state.connected) {
    return NextResponse.json({ error: 'Google Drive not connected' }, { status: 401 })
  }

  // Mock Drive file listing - in production this would use Google Drive API
  const mockFiles = [
    { id: 'folder-1', name: 'Coaching Videos', type: 'folder', mimeType: 'application/vnd.google-apps.folder', modifiedTime: '2026-02-01T10:00:00Z' },
    { id: 'folder-2', name: 'Retreat Content', type: 'folder', mimeType: 'application/vnd.google-apps.folder', modifiedTime: '2026-01-20T08:00:00Z' },
    { id: 'video-1', name: 'Leadership Masterclass Part 1.mp4', type: 'video', mimeType: 'video/mp4', size: '245MB', modifiedTime: '2026-02-05T14:30:00Z' },
    { id: 'video-2', name: 'Emotional Intelligence Workshop.mp4', type: 'video', mimeType: 'video/mp4', size: '180MB', modifiedTime: '2026-02-03T09:15:00Z' },
    { id: 'video-3', name: 'Monday Motivator Week 47.mp4', type: 'video', mimeType: 'video/mp4', size: '95MB', modifiedTime: '2026-01-28T11:00:00Z' },
    { id: 'video-4', name: 'Couples Communication Basics.mp4', type: 'video', mimeType: 'video/mp4', size: '320MB', modifiedTime: '2026-01-25T16:45:00Z' },
    { id: 'video-5', name: 'Veteran Transition Guide.mp4', type: 'video', mimeType: 'video/mp4', size: '210MB', modifiedTime: '2026-01-22T13:20:00Z' },
  ]

  return NextResponse.json({
    files: mockFiles,
    state: {
      email: state.email,
      lastSync: state.lastSync,
      videosImported: state.videosImported,
    },
  })
}

// POST: Import selected videos to the vault
export async function POST(request: NextRequest) {
  const state = getDriveState()

  if (!state.connected) {
    return NextResponse.json({ error: 'Google Drive not connected' }, { status: 401 })
  }

  const body = await request.json()
  const { videos } = body as { videos: Array<{ id: string; name: string; mimeType: string; size?: string }> }

  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return NextResponse.json({ error: 'No videos selected' }, { status: 400 })
  }

  const existingVideos = getVaultVideos()
  const importedIds = new Set(existingVideos.map((v: { driveId?: string }) => v.driveId))

  const newVideos = videos
    .filter(v => !importedIds.has(v.id))
    .map(v => ({
      id: `vault-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      driveId: v.id,
      title: v.name.replace(/\.[^.]+$/, ''),
      filename: v.name,
      mimeType: v.mimeType,
      size: v.size || 'Unknown',
      importedAt: new Date().toISOString(),
      source: 'google-drive',
      status: 'imported',
      category: 'Uncategorized',
      tags: [],
    }))

  const allVideos = [...existingVideos, ...newVideos]

  if (!existsSync(join(process.cwd(), 'data'))) {
    mkdirSync(join(process.cwd(), 'data'), { recursive: true })
  }

  writeFileSync(VAULT_PATH, JSON.stringify(allVideos, null, 2))

  // Update drive state
  state.lastSync = new Date().toISOString()
  state.videosImported = allVideos.length
  writeFileSync(DRIVE_STATE_PATH, JSON.stringify(state, null, 2))

  return NextResponse.json({
    imported: newVideos.length,
    skipped: videos.length - newVideos.length,
    totalInVault: allVideos.length,
  })
}
