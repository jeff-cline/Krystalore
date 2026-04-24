import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
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


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/quizzes/womens-confidence', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
