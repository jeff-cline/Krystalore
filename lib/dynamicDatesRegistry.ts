import type { DynamicDate } from './dynamicDates'

// Registry of every dynamic date wired into a page. These are the DEFAULTS (current
// page values) so the admin dashboard shows each page fully pre-populated — you can
// change one field and Save. Saving stores an override in the DB; until then the page
// renders these values. `label` names the page so you know where each date lives.
const off = { enabled: false, title: '', link: '', color: '#E8A849' }

export const DYNAMIC_DATE_REGISTRY: DynamicDate[] = [
  {
    slug: 'masterclass',
    label: 'Masterclass — Rewrite in Real Time (/masterclass)',
    pageUrl: '/masterclass',
    title: 'Rewrite in Real Time',
    description: 'Live Masterclass',
    date: 'June 13, 2026',
    heroImage: '/images/go9/speaking-event.jpg',
    cta: { ...off },
  },
  {
    slug: 'pr-retreat',
    label: 'Puerto Rico Retreat (/pr-retreat)',
    pageUrl: '/pr-retreat',
    title: 'Puerto Rico Retreat',
    description: 'A Caribbean reset for women ready to revive, reconnect, and rise.',
    date: 'March 28–April 3, 2027',
    heroImage: '/images/retreat/retreat-group-03.jpg',
    cta: { ...off },
  },
  {
    slug: 'workshops',
    label: 'Workshops (/workshops)',
    pageUrl: '/workshops',
    title: 'Workshops & Corporate Training',
    description: 'Live workshops for teams and leaders.',
    date: 'See schedule',
    heroImage: '/images/go9/corporate.jpg',
    cta: { ...off },
  },
  {
    slug: 'vision-board',
    label: 'Vision Board Party (/vision-board)',
    pageUrl: '/vision-board',
    title: 'Vision Board Party',
    description: 'Quarterly — the event date auto-advances in code; this controls the hero image + CTA.',
    date: '(auto-advancing)',
    heroImage: '/images/krystalore/REM08628.jpg',
    cta: { ...off },
  },
  {
    slug: 'bombshell-bootcamp',
    label: 'Bombshell Bootcamp (/bombshell-bootcamp)',
    pageUrl: '/bombshell-bootcamp',
    title: 'Bombshell Bootcamp',
    description: 'Activate your Freedom Formula.',
    date: 'Enrolling now',
    heroImage: '/images/go9/fitness.jpg',
    cta: { ...off },
  },
  {
    slug: 'upcoming-events',
    label: 'Upcoming Events (/upcoming-events)',
    pageUrl: '/upcoming-events',
    title: 'Upcoming Events',
    description: 'Live events & speaking engagements.',
    date: 'See schedule',
    heroImage: '/images/go9/keynote.jpg',
    cta: { ...off },
  },
  {
    slug: 'products',
    label: 'Products (/products)',
    pageUrl: '/products',
    title: 'Products',
    description: 'Krystalore products & lifestyle offerings.',
    date: '',
    heroImage: '/images/go9/group-evening.webp',
    cta: { ...off },
  },
  {
    slug: 'health-mastery',
    label: 'Health Mastery (/health-mastery)',
    pageUrl: '/health-mastery',
    title: 'Health Mastery',
    description: 'Group coaching for entrepreneurs and leaders.',
    date: 'Enrolling now',
    heroImage: '/images/health-mastery/hero.webp',
    cta: { ...off },
  },
  {
    slug: 'million-dollar-body',
    label: 'Million Dollar Body (/million-dollar-body)',
    pageUrl: '/million-dollar-body',
    title: 'Million Dollar Body',
    description: 'The signature body-transformation program.',
    date: 'Enrolling now',
    heroImage: '/images/go9/fitness.jpg',
    cta: { ...off },
  },
]

export const REGISTRY_BY_SLUG = new Map(DYNAMIC_DATE_REGISTRY.map((r) => [r.slug, r]))
