import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Go Live | KRYSTALORE",
  description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
  openGraph: {
    title: "Go Live | KRYSTALORE",
    description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
    url: "https://krystalore.com/go-live",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Live | KRYSTALORE",
    description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/go-live', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
