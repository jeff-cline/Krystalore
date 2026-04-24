import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Life Alignment Quiz',
  description: 'Take the Life Alignment self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Life Alignment Quiz",
    description: "Take the Life Alignment self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/life-alignment",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Alignment Quiz",
    description: "Take the Life Alignment self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/life-alignment', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
