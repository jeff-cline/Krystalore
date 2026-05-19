import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free 30-Day Habit Tracker — Krystalore Crews',
  description:
    'Design your dream day, reduce overwhelm, and feel accomplished. Grab Krystalore Crews\' free 30-day habit tracker — one page, five minutes a day, real momentum.',
  openGraph: {
    title: 'Free 30-Day Habit Tracker — Krystalore Crews',
    description:
      'A printable + digital habit tracker that doesn\'t shame you. One page. Five minutes a day. Real momentum.',
    url: 'https://krystalore.com/habittracker',
    type: 'website',
  },
}

export default function HabitTrackerLayout({ children }: { children: React.ReactNode }) {
  return children
}
