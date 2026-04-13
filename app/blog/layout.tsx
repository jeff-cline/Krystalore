import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Krystalore Crews | Fitness, Mindset, Leadership & Wellness",
  description: "Insights on fitness, mindset, leadership, and wellness from Krystalore Crews. Practical tips for entrepreneurs, veterans, and leaders who want to level up.",
  keywords: "krystalore crews blog, fitness blog, leadership blog, wellness tips, mindset blog, veteran blog, entrepreneur health, workout tips, healthy habits",
  openGraph: {
    title: "Blog — Krystalore Crews",
    description: "Fitness, mindset, leadership, and wellness insights from Krystalore Crews.",
    url: "https://krystalore.com/blog",
    siteName: "Krystalore Crews",
    type: "website",
  },
  alternates: { canonical: "https://krystalore.com/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
