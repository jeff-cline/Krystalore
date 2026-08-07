/**
 * Default "On Stage" photo grid for /speaker.
 *
 * These are the built-in defaults. Once anything is saved in
 * Admin → Speaker Page, the saved list wins and this file is only the
 * fallback (used if the database is empty or unreachable).
 */

export type StagePhoto = {
  src: string
  alt: string
}

export const onStagePhotos: StagePhoto[] = [
  { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore on stage' },
  { src: '/images/scraped/krystalore-keynote.jpg', alt: 'Keynote presentation' },
  { src: '/images/scraped/speaking.jpg', alt: 'Speaking engagement' },
  { src: '/images/krystalore/wny-heroes-speaking.png', alt: 'WNY Heroes speaking event' },
  { src: '/images/scraped/krystalore-event.jpg', alt: 'Event presentation' },
  { src: '/images/scraped/leadership-event.jpg', alt: 'Leadership event' },
  { src: '/images/krystalore/speaker-event-ros.jpg', alt: 'Krystalore at speaking event' },
]
