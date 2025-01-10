import type { Metadata } from "next";
import Home from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Hi, I'm Hapeace",
  description: "Profile of Danang Hapis Fadillah, an AI Engineer and Web Developer experienced in machine learning and generative AI technologies.",
  keywords: ['AI Engineer', 'Web Developer', 'Machine Learning', 'Generative AI', 'Next.js', 'TailwindCSS', 'Firebase'],
  openGraph: {
    title: "Hi, I'm Hapeace",
    description: 'Profile of Danang Hapis Fadillah, an AI Engineer and Web Developer experienced in machine learning and generative AI technologies.',
    url: 'https://hapeace.vercel.app',
    images: [
      {
        url: 'https://hapeace.vercel.app/og-home.png',
        width: 800,
        height: 600,
        alt: 'Danang Hapis Fadillah',
      },
    ],
  },
}

export default function Page() {
  return <Home />
}
