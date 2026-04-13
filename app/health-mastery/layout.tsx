import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Mastery Group Coaching — Krystalore Crews | Executive Wellness & Leadership",
  description: "A high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy, rebuild consistency, and lead their life from the inside out. Weekly coaching calls, fitness systems, accountability, and community.",
  keywords: "health mastery, executive coaching, group coaching, fitness coaching, leadership development, wellness program, krystalore crews, entrepreneur health, energy optimization, accountability coaching",
  openGraph: {
    title: "Health Mastery Group Coaching — Krystalore Crews",
    description: "You've built success... now it's time to feel like it. A high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy.",
    url: "https://krystalore.com/health-mastery",
    siteName: "Krystalore Crews",
    type: "website",
    images: [
      {
        url: "https://krystalore.com/images/health-mastery/hero.webp",
        width: 1200,
        height: 630,
        alt: "Krystalore Crews Health Mastery Group Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Mastery Group Coaching — Krystalore Crews",
    description: "A high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy, rebuild consistency, and lead from the inside out.",
    images: ["https://krystalore.com/images/health-mastery/hero.webp"],
  },
  alternates: {
    canonical: "https://krystalore.com/health-mastery",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
