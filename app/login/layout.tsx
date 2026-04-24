import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Login | KRYSTALORE",
  description: "Sign in to your Krystalore Crews executive coaching platform account.",
  openGraph: {
    title: "Login | KRYSTALORE",
    description: "Sign in to your Krystalore Crews executive coaching platform account.",
    url: "https://krystalore.com/login",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | KRYSTALORE",
    description: "Sign in to your Krystalore Crews executive coaching platform account.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/login', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
