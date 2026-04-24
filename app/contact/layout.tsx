import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Contact | KRYSTALORE",
  description: "Get in touch with Krystalore Crews for executive coaching, speaking engagements, and partnership opportunities.",
  openGraph: {
    title: "Contact | KRYSTALORE",
    description: "Get in touch with Krystalore Crews for executive coaching, speaking engagements, and partnership opportunities.",
    url: "https://krystalore.com/contact",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | KRYSTALORE",
    description: "Get in touch with Krystalore Crews for executive coaching, speaking engagements, and partnership opportunities.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/contact', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
