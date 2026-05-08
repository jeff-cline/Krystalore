export type SpeakerVideo = {
  id: string
  title: string
  thumbnail?: string
}

export type SpeakerVideoCategory = {
  slug: string
  name: string
  description?: string
  videos: SpeakerVideo[]
}

export const SPEAKER_PLAYLIST_URL =
  'https://www.youtube.com/playlist?list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw'

export function videoUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}&list=PLY4DtUstl0-uYuj3-IM9g3LA_57_i1YBw`
}

export function videoThumbnail(v: SpeakerVideo): string {
  return v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
}

export const speakerVideos: SpeakerVideoCategory[] = [
  {
    slug: 'resilience-reinvention',
    name: 'Resilience & Reinvention',
    description:
      'On showing up in the messy middle, growing through adversity, and navigating the seasons that change us.',
    videos: [
      {
        id: 'LBXH4_Lk48s',
        title: 'How To Show Up In The Messy Middle',
      },
      {
        id: 'C1aY5g_iYAs',
        title: 'Health, Healing, and Empowerment: How Adversity Helps You Grow',
      },
      {
        id: '8njKWQO3QPg',
        title: 'Navigating Seasons of Change with Annette Velasquez',
      },
    ],
  },
  {
    slug: 'wellness-empowerment',
    name: 'Wellness & Empowerment',
    description:
      'Practical tools for putting yourself first — self-love, happiness, and the wellness movement behind Crews Beyond Limits.',
    videos: [
      {
        id: 'LHPByUwaB1g',
        title: 'Self Love Is the Best Love — 3 Tips to Love & Live Happier',
      },
      {
        id: '_1F49mwlzV0',
        title: 'RY Happiness Summit — Krystalore Crews Interview',
      },
      {
        id: 'f4PBP6awuBw',
        title: 'The Crews Beyond Limits "You First" Movement',
      },
    ],
  },
  {
    slug: 'story-interviews',
    name: 'Story & Interviews',
    description:
      'Krystalore on the mic — NFL cheerleading, fitness, transition, confidence coaching, and the founding story of Crews Beyond Limits.',
    videos: [
      {
        id: 'ejAa8ncVyqs',
        title: 'How To Become Krystal Clear — NFL Cheerleading & Fitness',
      },
      {
        id: 'vZNjj921E6U',
        title: 'The Jeff Crilley Show — Transition & Confidence Coach',
      },
      {
        id: 'ZxwZDuLcMwU',
        title: 'Krystalore Crews — Crews Beyond Limits',
      },
    ],
  },
]
