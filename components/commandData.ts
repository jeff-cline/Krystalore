export type CcLink = { id: string; label: string; href: string; ext?: boolean }
export type CcBucket = { id: string; title: string; color: string; size: 'sm' | 'lg'; links: CcLink[] }
export type CcState = { master: string; buckets: CcBucket[] }

export const CC_KEY = 'cc-org-v2'
export const PALETTE = ['#0D9488', '#34c5c5', '#E8A849', '#e07800', '#6366f1', '#ec4899', '#0ea5e9', '#64748b']

export function newId() {
  return 'id-' + Math.random().toString(36).slice(2, 9)
}
const L = (label: string, href: string, ext = false): CcLink => ({ id: newId(), label, href, ext })

export const DEFAULT_STATE: CcState = {
  master: 'Krystalore Command Center',
  buckets: [
    { id: 'tools', title: 'Tools & Sales Kits', color: '#0D9488', size: 'lg', links: [
      L('Ecosystem Training Kit', '/ecosystem'), L('Sales Deck (Start)', '/start'), L('Media Kit — PDF Bios', '/pdf'),
      L('Buyer Pathway', '/infographic'), L('Investor Dashboard', '/retreat-center-investment-opportunity'), L('Orphan Dashboard', '/dash'),
    ] },
    { id: 'coaching', title: 'Coaching', color: '#34c5c5', size: 'sm', links: [
      L('All Coaching', '/services'), L('Corporate Wellness', '/wellness'), L('Leadership Training', '/leadership-training'),
      L('FIRE Challenge', '/firechallenge'), L('Health Mastery', '/health-mastery'), L('Private Coaching', '/privatemindset'),
      L('Million Dollar Body', '/million-dollar-body'), L('Beyond Limits Bootcamp', '/bootcamp'), L('Courses', '/courses'),
    ] },
    { id: 'events', title: 'Events', color: '#E8A849', size: 'sm', links: [
      L('Bombshell Bootcamp', '/bombshell-bootcamp'), L('Vision Board Party', '/vision-board'), L('Masterclass', '/masterclass'), L('Speaking', '/speaker'),
    ] },
    { id: 'retreats', title: 'Retreats', color: '#e07800', size: 'sm', links: [
      L('All Retreats', '/retreat'), L('Costa Rica', '/cr-retreat'), L('Puerto Rico', '/pr-retreat'), L('Tennessee', '/tn-retreat'),
      L('Business', '/business-smart-start'), L('Couples', '/couples-retreats'), L('Veterans', '/veteran-retreats'),
    ] },
    { id: 'missions', title: 'About & Missions', color: '#6366f1', size: 'sm', links: [
      L('About', '/about'), L('Books', '/books'), L('Shop', '/shop'), L('Podcast', '/podcasts'),
    ] },
    { id: 'external', title: 'External Properties', color: '#0ea5e9', size: 'sm', links: [
      L('Her Next Mission', 'https://hernextmission.org', true), L('Activate4Impact', 'https://activate4impact.com', true),
      L('R0cketship', 'https://r0cketship.com', true), L('World Changers', 'https://www.worldchangers.ai', true),
    ] },
  ],
}

// Local cache (this browser). Used for instant paint and as the seed source the
// first time this board is published to the shared server store.
export function loadState(): CcState {
  if (typeof window === 'undefined') return DEFAULT_STATE
  try {
    const raw = localStorage.getItem(CC_KEY)
    if (raw) {
      const s = JSON.parse(raw)
      if (s && Array.isArray(s.buckets)) return s
    }
  } catch {}
  return DEFAULT_STATE
}
export function saveState(s: CcState) {
  try { localStorage.setItem(CC_KEY, JSON.stringify(s)) } catch {}
}

// ---- Shared server store (so everyone sees the same board) --------------------
const EDIT_PW = 'Krystalore'

export function isDefaultState(s: CcState): boolean {
  try { return JSON.stringify(s) === JSON.stringify(DEFAULT_STATE) } catch { return false }
}

const normTitle = (t?: string) => (t || '').trim().toLowerCase()
const normHref = (h?: string) => (h || '').trim().toLowerCase().replace(/\/+$/, '')
const linkKey = (l: CcLink) => normHref(l.href) + '|' + normTitle(l.label)

// Union merge: return a board that contains EVERY bucket and EVERY link from both
// `base` and `extra`, de-duplicated. Used during migration so that no matter which
// device syncs when, nobody's links are ever lost — they only accumulate.
// `base` supplies the structure/order; `extra`'s unique links are appended.
export function mergeBoards(base: CcState, extra: CcState): CcState {
  const buckets: CcBucket[] = base.buckets.map((b) => ({ ...b, links: [...b.links] }))
  const idxByTitle = new Map<string, number>()
  buckets.forEach((b, i) => idxByTitle.set(normTitle(b.title), i))
  for (const eb of extra.buckets) {
    const key = normTitle(eb.title)
    const i = idxByTitle.get(key)
    if (i === undefined) {
      buckets.push({ ...eb, links: [...eb.links] })
      idxByTitle.set(key, buckets.length - 1)
      continue
    }
    const target = buckets[i]
    const seen = new Set(target.links.map(linkKey))
    for (const l of eb.links) {
      if (!seen.has(linkKey(l))) { target.links.push(l); seen.add(linkKey(l)) }
    }
  }
  return { master: base.master || extra.master, buckets }
}

// Fetch a board by key ('org' shared team board, or 'user:<email>' personal).
// Returns null if nothing is saved yet, access is denied, or the server is down —
// callers fall back to the local cache in that case.
export async function fetchState(key = 'org'): Promise<CcState | null> {
  try {
    const r = await fetch(`/api/command?key=${encodeURIComponent(key)}`, { cache: 'no-store' })
    if (!r.ok) return null
    const j = await r.json()
    const s = j?.data
    if (s && Array.isArray(s.buckets)) return s as CcState
  } catch {}
  return null
}

// Push a board to the store. Team board uses the editor password; personal
// boards ('user:<email>') are authorized by the login session. Best-effort.
export async function pushState(s: CcState, key = 'org'): Promise<boolean> {
  try {
    const body: any = { key, data: s }
    if (!key.startsWith('user:')) body.pw = EDIT_PW
    const r = await fetch('/api/command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return r.ok
  } catch { return false }
}

export type BoardRef = { email: string; name: string; role: string; hasBoard: boolean }

// GOD-only: the list of admin accounts whose boards can be toggled through.
export async function fetchBoards(): Promise<BoardRef[]> {
  try {
    const r = await fetch('/api/command/boards', { cache: 'no-store' })
    if (!r.ok) return []
    const j = await r.json()
    return Array.isArray(j?.boards) ? j.boards : []
  } catch { return [] }
}
