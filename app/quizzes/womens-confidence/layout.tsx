import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Confidence Assessment | Krystalore Crews - Crews Beyond Limits",
  description: "Evaluate your confidence, self-care, and empowerment across all areas of life. Free 10-question assessment with personalized results and recommendations.",
  keywords: ["women's confidence quiz", "confidence assessment for women", "empowerment quiz", "self-care assessment", "women's empowerment", "Krystalore Crews"],
  openGraph: {
    title: "Women's Confidence Assessment | Krystalore Crews",
    description: "Evaluate your confidence, self-care, and empowerment across all areas of life.",
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/quizzes/womens-confidence',
  },
  twitter: {
    card: "summary_large_image",
    title: "Women",
    description: "Evaluate your confidence, self-care, and empowerment across all areas of life. Free 10-question assessment with personalized results and recommendations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
