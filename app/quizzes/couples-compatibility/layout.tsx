import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Couples Compatibility Assessment | Free Relationship Quiz by Krystalore Crews',
  description: 'Discover how compatible you and your partner are across communication, goals, values, and more. Free 10-question couples compatibility quiz with personalized results.',
  keywords: ['couples compatibility quiz', 'relationship quiz', 'couples assessment', 'compatibility test', 'relationship compatibility', 'Krystalore Crews'],
  openGraph: {
    title: 'Couples Compatibility Assessment',
    description: 'Discover how compatible you and your partner are across communication, goals, and values.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Couples Compatibility Assessment | Free Relationship Quiz by Krystalore Crews",
    description: "Discover how compatible you and your partner are across communication, goals, values, and more. Free 10-question couples compatibility quiz with personalized results.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
