import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veteran Transition Readiness Quiz | Krystalore Crews',
  description: 'Assess your readiness for the military-to-civilian transition across career, identity, wellness, family, and community. Free veteran transition quiz by Krystalore Crews.',
  keywords: ['veteran transition quiz', 'military transition readiness', 'veteran career readiness', 'military to civilian assessment', 'veteran coaching quiz'],
  openGraph: {
    title: 'Veteran Transition Readiness Quiz',
    description: 'Free assessment to evaluate your readiness for military-to-civilian transition. Get personalized recommendations.',
    url: 'https://executive-krystalore.vercel.app/quizzes/veteran-transition',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteran Transition Readiness Quiz | Krystalore Crews",
    description: "Assess your readiness for the military-to-civilian transition across career, identity, wellness, family, and community. Free veteran transition quiz by Krystalore Crews.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
