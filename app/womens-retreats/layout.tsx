import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Retreats by Krystalore Crews | Empowerment, Wellness & Leadership Retreats for Women",
  description: "Join a transformational women's retreat with Krystalore Crews. Revive & Thrive experiences combining confidence building, fitness, sisterhood, wellness, and vision casting. Weekend and 5-day retreats available.",
  keywords: ["women's retreat", "women's empowerment retreat", "wellness retreat for women", "women's leadership retreat", "women's wellness retreat", "sisterhood retreat", "Revive and Thrive retreat", "Krystalore Crews retreat", "Crews Beyond Limits"],
  openGraph: {
    title: "Women's Retreats by Krystalore Crews",
    description: "Transformational retreats combining confidence building, fitness, sisterhood, wellness, and vision casting for women ready to level up.",
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/womens-retreats',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Retreats by Krystalore Crews",
    description: "Transformational retreats for women ready to level up — mind, body, and beyond.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
