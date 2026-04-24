import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Sign Up | KRYSTALORE",
  description: "Create your account on the Krystalore Crews executive coaching platform.",
  openGraph: {
    title: "Sign Up | KRYSTALORE",
    description: "Create your account on the Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/signup",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | KRYSTALORE",
    description: "Create your account on the Krystalore Crews executive coaching platform.",
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/signup', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
