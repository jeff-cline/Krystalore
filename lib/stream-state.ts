// Simple in-memory + JSON file stream state management
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const STATE_FILE = join(process.cwd(), 'data', 'stream-state.json')

export interface StreamState {
  activeStream: {
    streamId: string
    streamKey: string
    playbackId: string
    status: 'idle' | 'active' | 'disabled'
    title: string
    startedAt: string | null
  } | null
  recordings: {
    assetId: string
    playbackId: string
    title: string
    duration: number
    createdAt: string
    driveFileId?: string
    status: 'processing' | 'ready' | 'uploaded' | 'deleted'
  }[]
}

const defaultState: StreamState = {
  activeStream: null,
  recordings: [],
}

function ensureDataDir() {
  const dir = join(process.cwd(), 'data')
  const { mkdirSync } = require('fs')
  try { mkdirSync(dir, { recursive: true }) } catch {}
}

export function getStreamState(): StreamState {
  try {
    if (existsSync(STATE_FILE)) {
      return JSON.parse(readFileSync(STATE_FILE, 'utf-8'))
    }
  } catch {}
  return { ...defaultState, recordings: [] }
}

export function saveStreamState(state: StreamState) {
  ensureDataDir()
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))
}

export function updateActiveStream(stream: StreamState['activeStream']) {
  const state = getStreamState()
  state.activeStream = stream
  saveStreamState(state)
}

export function addRecording(recording: StreamState['recordings'][0]) {
  const state = getStreamState()
  state.recordings.unshift(recording)
  saveStreamState(state)
}

export function updateRecording(assetId: string, updates: Partial<StreamState['recordings'][0]>) {
  const state = getStreamState()
  const idx = state.recordings.findIndex(r => r.assetId === assetId)
  if (idx !== -1) {
    state.recordings[idx] = { ...state.recordings[idx], ...updates }
    saveStreamState(state)
  }
}
