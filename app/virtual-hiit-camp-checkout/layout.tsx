import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Beyond Limits Bootcamp Checkout | Virtual HIIT Camp | Krystalore Crews',
  description: 'Join Beyond Limits Bootcamp — live virtual HIIT, cardio, and kickboxing workouts 3x per week. 30-minute sessions, unlimited replays, private community. Starting at $89/month.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
