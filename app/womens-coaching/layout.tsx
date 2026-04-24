import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Empowerment Coaching by Krystalore Crews | Confidence, Leadership & Life Coaching for Women",
  description: "Transform your life with women's empowerment coaching from Krystalore Crews. Build courageous confidence, develop leadership skills, and create a life you love. Fitness, mindset, and personal development coaching for women.",
  keywords: ["women's coaching", "women's empowerment coaching", "confidence coaching for women", "women's leadership coaching", "life coaching for women", "women's personal development", "female empowerment", "women's fitness coaching", "Krystalore Crews", "Crews Beyond Limits"],
  openGraph: {
    title: "Women's Empowerment Coaching by Krystalore Crews",
    description: "Build courageous confidence, develop leadership skills, and create a life you love with expert coaching from Krystalore Crews.",
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/womens-coaching',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Empowerment Coaching by Krystalore Crews",
    description: "Build courageous confidence, develop leadership skills, and create a life you love.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
