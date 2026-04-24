import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Events | KRYSTALORE",
  description: "Upcoming events, workshops, and live sessions with Krystalore Crews for leadership and personal development.",
  openGraph: {
    title: "Events | KRYSTALORE",
    description: "Upcoming events, workshops, and live sessions with Krystalore Crews for leadership and personal development.",
    url: "https://krystalore.com/events",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | KRYSTALORE",
    description: "Upcoming events, workshops, and live sessions with Krystalore Crews for leadership and personal development.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/events', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
