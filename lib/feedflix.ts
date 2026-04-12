const FEEDFLIX_BASE_URL = process.env.FEEDFLIX_BASE_URL || 'https://feedflix.com'
const FEEDFLIX_API_KEY = process.env.FEEDFLIX_API_KEY || ''

interface FeedFlixRequestOptions {
  method?: string
  body?: Record<string, unknown>
  params?: Record<string, string>
}

async function feedflixFetch<T = unknown>(
  path: string,
  options: FeedFlixRequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, params } = options

  let url = `${FEEDFLIX_BASE_URL}${path}`
  if (params) {
    const searchParams = new URLSearchParams(params)
    url += `?${searchParams.toString()}`
  }

  const headers: Record<string, string> = {
    'X-Kastle-Key': FEEDFLIX_API_KEY,
    'Content-Type': 'application/json',
  }

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }))
    const msg = error.message || error.error || `FeedFlix API error: ${res.status}`
    const details = error.details ? ` — ${JSON.stringify(error.details)}` : ''
    throw new Error(`${msg}${details}`)
  }

  return res.json()
}

// Unwrap the { data: ... } envelope that all FeedFlix responses use
async function feedflixData<T = unknown>(
  path: string,
  options: FeedFlixRequestOptions = {}
): Promise<T> {
  const res = await feedflixFetch<{ data: T }>(path, options)
  return res.data
}

// --- Streams ---

export interface FeedFlixStream {
  id: string
  stream_key?: string
  playback_id?: string
  mux_playback_id?: string
  rtmp_url?: string
  title?: string
  status?: string
  started_at?: string
  ended_at?: string
  scheduled_at?: string
  user_id?: string
  category_id?: string
  site_id?: string
}

export async function createStream(data: { title: string; user_id: string; category_id: string }) {
  const res = await feedflixData<{ stream: FeedFlixStream; streamKey: string }>('/api/v1/streams', {
    method: 'POST',
    body: data,
  })
  return { ...res.stream, stream_key: res.streamKey }
}

export function getStream(id: string) {
  return feedflixData<FeedFlixStream>(`/api/v1/streams/${id}`)
}

export function getLiveStreams() {
  return feedflixData<FeedFlixStream[]>('/api/v1/streams/live')
}

export function getScheduledStreams() {
  return feedflixData<FeedFlixStream[]>('/api/v1/streams/scheduled')
}

export function scheduleStream(data: { title: string; scheduled_at: string; description?: string; user_id: string; category_id: string }) {
  return feedflixFetch<FeedFlixStream>('/api/v1/streams/schedule', {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  })
}

export function endStream(id: string) {
  return feedflixFetch<{ success: boolean }>(`/api/v1/streams/${id}/end`, {
    method: 'POST',
  })
}

// --- Vault ---

export interface FeedFlixVaultVideo {
  id: string
  title: string
  description?: string | null
  mux_asset_id?: string
  mux_playback_id?: string
  duration_seconds?: number | null
  file_size_bytes?: number | null
  view_count?: number
  created_at?: string
  category_id?: string
  category?: {
    id: string
    name: string
    sort_order?: number
  }
  user?: {
    name: string
    avatar_url?: string | null
  }
}

export interface FeedFlixVaultResponse {
  data: FeedFlixVaultVideo[]
  page: number
  per_page: number
  total: number
  total_pages: number
}

export function getVaultVideos(params?: { category?: string; search?: string; page?: string; per_page?: string }) {
  const filtered: Record<string, string> = {}
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v) filtered[k] = v
    }
  }
  return feedflixFetch<FeedFlixVaultResponse>('/api/v1/vault', {
    params: Object.keys(filtered).length ? filtered : undefined,
  })
}

export function getVaultVideo(id: string) {
  return feedflixData<FeedFlixVaultVideo>(`/api/v1/vault/${id}`)
}

export function updateVaultVideo(id: string, data: { title?: string; description?: string; category_id?: string }) {
  return feedflixFetch<FeedFlixVaultVideo>(`/api/v1/vault/${id}`, {
    method: 'PUT',
    body: data as unknown as Record<string, unknown>,
  })
}

export function deleteVaultVideo(id: string) {
  return feedflixFetch<{ success: boolean }>(`/api/v1/vault/${id}`, {
    method: 'DELETE',
  })
}

// --- Categories ---

export interface FeedFlixCategory {
  id: string
  name: string
  site_id?: string
  sort_order?: number
  created_at?: string
}

export function getCategories() {
  return feedflixData<FeedFlixCategory[]>('/api/v1/categories')
}

export function createCategory(data: { name: string }) {
  return feedflixFetch<FeedFlixCategory>('/api/v1/categories', {
    method: 'POST',
    body: data,
  })
}

export function updateCategory(id: string, data: { name: string }) {
  return feedflixFetch<FeedFlixCategory>(`/api/v1/categories/${id}`, {
    method: 'PUT',
    body: data,
  })
}

export function deleteCategory(id: string) {
  return feedflixFetch<{ success: boolean }>(`/api/v1/categories/${id}`, {
    method: 'DELETE',
  })
}

// --- Users ---

export interface FeedFlixUser {
  id: string
  name?: string
  email?: string
  role?: string
  avatar_url?: string | null
}

export function getUsers() {
  return feedflixData<FeedFlixUser[]>('/api/v1/users')
}

export function inviteUser(email: string) {
  return feedflixFetch<FeedFlixUser>('/api/v1/users/invite', {
    method: 'POST',
    body: { email },
  })
}

export function updateUserRole(id: string, role: string) {
  return feedflixFetch<FeedFlixUser>(`/api/v1/users/${id}/role`, {
    method: 'PUT',
    body: { role },
  })
}

// --- Roles ---

export interface FeedFlixRole {
  id: string
  name: string
  permissions: string[]
}

export function getRoles() {
  return feedflixData<FeedFlixRole[]>('/api/v1/roles')
}

export function createRole(data: { name: string; permissions: string[] }) {
  return feedflixFetch<FeedFlixRole>('/api/v1/roles', {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  })
}

// --- Billing ---

export interface FeedFlixBalance {
  balance: number
  is_unlimited: boolean
}

export interface FeedFlixUsage {
  total_spent: number
  by_type: Record<string, number>
  period_start: string
  period_end: string
}

export function getBillingBalance() {
  return feedflixData<FeedFlixBalance>('/api/v1/billing/balance')
}

export function getBillingUsage(days?: number) {
  return feedflixData<FeedFlixUsage>('/api/v1/billing/usage', {
    params: days ? { days: String(days) } : undefined,
  })
}

// --- Analytics ---

export interface FeedFlixViewership {
  peak_concurrent_viewers: number
  total_watch_minutes: number
  unique_viewers: number
  repeat_viewers: number
}

export interface FeedFlixEngagement {
  reactions_by_type: Record<string, number>
  chat_count: number
  participation_rate: number
  hand_raises: number
}

export interface FeedFlixContentPerformance {
  top_videos: { id: string; title: string; view_count: number }[]
  top_categories: { id: string; name: string; stream_count: number }[]
  top_streamers: { id: string; name: string; stream_count: number }[]
}

export function getViewership(days?: number) {
  return feedflixData<FeedFlixViewership>('/api/v1/analytics/viewership', {
    params: days ? { days: String(days) } : undefined,
  })
}

export function getEngagement(days?: number) {
  return feedflixData<FeedFlixEngagement>('/api/v1/analytics/engagement', {
    params: days ? { days: String(days) } : undefined,
  })
}

export function getContentPerformance() {
  return feedflixData<FeedFlixContentPerformance>('/api/v1/analytics/content')
}

// --- Relay ---

export const FEEDFLIX_RELAY_URL = process.env.FEEDFLIX_RELAY_URL || 'wss://relay.feedflix.com'
