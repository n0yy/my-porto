import Contact from "@/components/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact me to collaborate on AI engineering, RAG systems, and web development.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description:
      "Contact me to collaborate on AI engineering, RAG systems, and web development.",
    url: "https://hapeace.vercel.app/contact",
    images: [
      {
        url: "/og-contact.PNG",
        width: 1359,
        height: 649,
        alt: "Danang Hapis Fadillah Profile Picture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Contact me to collaborate on AI engineering, RAG systems, and web development.",
    images: ["/og-contact.PNG"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <Contact />
}
