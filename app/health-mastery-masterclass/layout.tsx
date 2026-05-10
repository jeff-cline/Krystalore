import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Emotional Mastery Masterclass — Krystalore Crews | The Root Beneath Every Pattern",
  description: "Emotional patterns shape your relationships, health, confidence, leadership, business, and self-worth. Get the free Emotional Mastery book and information about the monthly intensive with Krystalore Crews.",
  keywords: "emotional mastery, emotional intelligence, nervous system healing, somatic healing, emotional regulation, self-worth, healing relationship patterns, embodied leadership, krystalore crews",
  openGraph: {
    title: "Emotional Mastery Masterclass — Krystalore Crews",
    description: "The same emotional patterns affecting your relationships are also shaping your health, confidence, business, visibility, boundaries, self-worth, and ability to receive love and success.",
    url: "https://krystalore.com/health-mastery-masterclass",
    siteName: "Krystalore Crews",
    type: "website",
    images: [
      {
        url: "https://krystalore.com/images/health-mastery/hero.webp",
        width: 1200,
        height: 630,
        alt: "Emotional Mastery Masterclass — Krystalore Crews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Mastery Masterclass — Krystalore Crews",
    description: "The emotional patterns shaping every area of your life often operate beneath conscious awareness. Learn how Emotional Mastery changes the way you love, lead, communicate, heal, and live.",
    images: ["https://krystalore.com/images/health-mastery/hero.webp"],
  },
  alternates: {
    canonical: "https://krystalore.com/health-mastery-masterclass",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/health-mastery-masterclass', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
