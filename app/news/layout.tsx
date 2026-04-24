import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "News | KRYSTALORE",
  description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
  openGraph: {
    title: "News | KRYSTALORE",
    description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
    url: "https://krystalore.com/news",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News | KRYSTALORE",
    description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/news', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
