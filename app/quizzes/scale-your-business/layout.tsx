import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale Your Business Quiz',
  description: 'Take the Scale Your Business self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Scale Your Business Quiz",
    description: "Take the Scale Your Business self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/scale-your-business",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Your Business Quiz",
    description: "Take the Scale Your Business self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
