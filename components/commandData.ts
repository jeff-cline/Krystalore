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
