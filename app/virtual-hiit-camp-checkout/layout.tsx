import type { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';
const defaults: Metadata = {
  title: 'Beyond Limits Bootcamp Checkout | Virtual HIIT Camp | Krystalore Crews',
  description: 'Join Beyond Limits Bootcamp — live virtual HIIT, cardio, and kickboxing workouts 3x per week. 30-minute sessions, unlimited replays, private community. Starting at $89/month.',
}

export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/virtual-hiit-camp-checkout', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
