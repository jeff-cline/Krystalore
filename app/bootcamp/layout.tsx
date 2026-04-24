import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Bootcamp | KRYSTALORE",
  description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
  openGraph: {
    title: "Bootcamp | KRYSTALORE",
    description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
    url: "https://krystalore.com/bootcamp",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bootcamp | KRYSTALORE",
    description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/bootcamp', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
