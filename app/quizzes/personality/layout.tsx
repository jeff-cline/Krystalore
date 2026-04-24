import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Personality Quiz',
  description: 'Take the Personality self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Personality Quiz",
    description: "Take the Personality self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/personality",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personality Quiz",
    description: "Take the Personality self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/personality', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
