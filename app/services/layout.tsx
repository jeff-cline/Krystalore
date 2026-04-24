import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Services | KRYSTALORE",
  description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
  openGraph: {
    title: "Services | KRYSTALORE",
    description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
    url: "https://krystalore.com/services",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | KRYSTALORE",
    description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/services', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
