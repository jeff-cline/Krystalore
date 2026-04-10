import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const DRIVE_STATE_PATH = join(process.cwd(), 'data', 'google-drive-state.json')

function getDriveState() {
  if (existsSync(DRIVE_STATE_PATH)) {
    return JSON.parse(readFileSync(DRIVE_STATE_PATH, 'utf-8'))
  }
  return { connected: false, email: null, lastSync: null, videosImported: 0 }
}

function saveDriveState(state: Record<string, unknown>) {
  const dir = join(process.cwd(), 'data')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(DRIVE_STATE_PATH, JSON.stringify(state, null, 2))
}

// GET: Check connection status or initiate OAuth
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')

  if (action === 'status') {
    const state = getDriveState()
    return NextResponse.json(state)
  }

  if (action === 'authorize') {
    // Scaffold: In production, redirect to Google OAuth consent screen
    // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?...`
    // return NextResponse.redirect(authUrl)
    
    return NextResponse.json({
      message: 'OAuth scaffold - in production this redirects to Google consent screen',
      authUrl: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT&scope=https://www.googleapis.com/auth/drive.readonly&response_type=code&access_type=offline',
      note: 'Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env to enable real OAuth',
    })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}

// POST: Connect or disconnect
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { action } = body as { action: string }

  if (action === 'connect') {
    // Scaffold: simulate successful OAuth connection
    const state = {
      connected: true,
      email: 'krystalore@crewsbeyondlimitsconsulting.com',
      connectedAt: new Date().toISOString(),
      lastSync: null,
      videosImported: 0,
      accessToken: 'scaffold_token_placeholder',
      refreshToken: 'scaffold_refresh_placeholder',
    }
    saveDriveState(state)
    return NextResponse.json({ success: true, state })
  }

  if (action === 'disconnect') {
    const state = { connected: false, email: null, lastSync: null, videosImported: 0 }
    saveDriveState(state)
    return NextResponse.json({ success: true, state })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
