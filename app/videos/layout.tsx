import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Videos | KRYSTALORE",
  description: "Watch coaching videos, tips, and inspirational content from Krystalore Crews.",
  openGraph: {
    title: "Videos | KRYSTALORE",
    description: "Watch coaching videos, tips, and inspirational content from Krystalore Crews.",
    url: "https://krystalore.com/videos",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | KRYSTALORE",
    description: "Watch coaching videos, tips, and inspirational content from Krystalore Crews.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/videos', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
