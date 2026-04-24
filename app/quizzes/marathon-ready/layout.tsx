import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Marathon Ready Quiz',
  description: 'Take the Marathon Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Marathon Ready Quiz",
    description: "Take the Marathon Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/marathon-ready",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marathon Ready Quiz",
    description: "Take the Marathon Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/marathon-ready', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
