import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';
import { dynamicMetadata } from '@/lib/dynamicMetadata';

const defaults: Metadata = {
  title: "Rewrite in Real Time — Live Masterclass with Krystalore Crews | May 20, 2026",
  description: "Mastering the Messy Middle of Your Transformation. A 90-minute live masterclass on staying consistent, confident, and in motion while everything in your life is changing. With Krystalore Crews.",
  keywords: "rewrite masterclass, krystalore crews, messy middle, transformation, consistency, confidence, freedom formula, 34 minute reset, leadership, wellness, live masterclass, personal development",
  openGraph: {
    title: "Rewrite in Real Time — Live Masterclass with Krystalore Crews",
    description: "How to stay consistent, confident, and in motion while everything in your life is changing. May 20, 2026.",
    url: "https://krystalore.com/masterclass",
    siteName: "Krystalore Crews",
    type: "website",
    images: [{ url: "https://krystalore.com/images/go9/speaking-event.jpg", width: 1200, height: 630, alt: "Rewrite in Real Time Masterclass with Krystalore Crews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewrite in Real Time — Live Masterclass | May 20",
    description: "Mastering the Messy Middle. Stay consistent, confident, and in motion while everything is changing.",
    images: ["https://krystalore.com/images/go9/speaking-event.jpg"],
  },
  alternates: { canonical: "https://krystalore.com/masterclass" },
};


export async function generateMetadata(): Promise<Metadata> {
  const base = await getCmsMeta('/masterclass', defaults);
  const dyn = await dynamicMetadata('masterclass');
  return { ...base, openGraph: { ...base.openGraph, ...dyn.openGraph }, twitter: { ...base.twitter, ...dyn.twitter } };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
