import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Retreat Ready Quiz',
  description: 'Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Retreat Ready Quiz",
    description: "Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/retreat-ready",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retreat Ready Quiz",
    description: "Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/retreat-ready', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
