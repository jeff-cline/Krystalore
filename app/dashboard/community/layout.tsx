import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Community | KRYSTALORE",
  description: "Connect with fellow members in the Krystalore community — share wins, ask questions, and grow together.",
  openGraph: {
    title: "Community | KRYSTALORE",
    description: "Connect with fellow members in the Krystalore community — share wins, ask questions, and grow together.",
    url: "https://krystalore.com/dashboard/community",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | KRYSTALORE",
    description: "Connect and grow with the Krystalore community.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/dashboard/community', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
