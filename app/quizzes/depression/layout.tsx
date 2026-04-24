import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Depression Quiz',
  description: 'Take the Depression self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Depression Quiz",
    description: "Take the Depression self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/depression",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Depression Quiz",
    description: "Take the Depression self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/depression', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
