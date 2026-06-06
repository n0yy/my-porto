import type { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
    title: "About",
    description:
      "Discover Danang Hapis Fadillah's work across AI Engineering, RAG Systems, and Web Development.",
    keywords: [
      "AI Engineer",
      "RAG Systems",
      "Web Developer",
      "Machine Learning",
      "Natural Language Processing",
      "Generative AI",
      "Bangkit Academy",
      "Danang Hapis Fadillah",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
      title: "About",
      description:
        "Danang Hapis Fadillah builds reliable AI applications, RAG systems, and production-ready web experiences.",
      url: "https://hapeace.vercel.app/about",
      images: [
        {
          url: "/og-about.PNG",
          width: 1361,
          height: 644,
          alt: "About Danang Hapis Fadillah",
        },
      ],
    },
  };

export default function Page() {
  return <About />;
}
