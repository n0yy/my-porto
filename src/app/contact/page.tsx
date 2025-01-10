import Contact from "@/components/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Danang Hapis Fadillah. Connect via LinkedIn, Instagram, or Twitter to collaborate and build the future together.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with Danang Hapis Fadillah. Connect via LinkedIn, Instagram, or Twitter to collaborate and build the future together.",
    url: "https://hapeace.vercel.app/contact",
    images: [
      {
        url: "https://hapeace.vercel.app/og-contact.png",
        width: 800,
        height: 600,
        alt: "Danang Hapis Fadillah Profile Picture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Get in touch with Danang Hapis Fadillah. Connect via LinkedIn, Instagram, or Twitter to collaborate and build the future together.",
    images: ["https://hapeace.vercel.app/og-contact.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <Contact />
}