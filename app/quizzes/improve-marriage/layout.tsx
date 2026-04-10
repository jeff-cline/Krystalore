import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Improve My Marriage Assessment | Free Marriage Health Quiz by Krystalore Crews',
  description: 'Evaluate key areas of your marriage health — communication, appreciation, intimacy, and more. Get personalized recommendations for growth.',
  keywords: ['improve my marriage', 'marriage quiz', 'marriage health assessment', 'marriage help', 'relationship assessment', 'Krystalore Crews'],
  openGraph: {
    title: 'Improve My Marriage Assessment',
    description: 'Evaluate key areas of your marriage and get personalized recommendations for growth.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Improve My Marriage Assessment | Free Marriage Health Quiz by Krystalore Crews",
    description: "Evaluate key areas of your marriage health — communication, appreciation, intimacy, and more. Get personalized recommendations for growth.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
