import type { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
    title: "About",
    description:
      "Discover more about Danang Hapis Fadillah, an AI professional with extensive expertise in machine learning technologies, NLP, and generative AI.",
    keywords: [
      "AI Engineer",
      "Web Developer",
      "Machine Learning",
      "Natural Language Processing",
      "Generative AI",
      "Bangkit Academy",
      "Danang Hapis Fadillah",
    ],
    openGraph: {
      title: "About",
      description:
        "Danang Hapis Fadillah is an AI professional passionate about innovation and creating impactful AI-driven solutions.",
      url: "https://hapeace.vercel.app/about",
      images: [
        {
          url: "https://hapeace.vercel.app/og-about.png",
          width: 800,
          height: 600,
          alt: "About Danang Hapis Fadillah",
        },
      ],
    },
  };

export default function Page() {
  return <About />;
}
