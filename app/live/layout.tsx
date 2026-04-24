import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Live Stream | KRYSTALORE",
  description: "Watch Krystalore Crews live — coaching sessions, fitness classes, and interactive leadership development in real-time.",
  openGraph: {
    title: "Live Stream | KRYSTALORE",
    description: "Watch Krystalore Crews live — coaching sessions, fitness classes, and interactive leadership development in real-time.",
    url: "https://krystalore.com/live",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Stream | KRYSTALORE",
    description: "Watch Krystalore Crews live — coaching, fitness, and leadership in real-time.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/live', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
