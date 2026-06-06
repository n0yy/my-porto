import type { Metadata } from "next";
import Projects from "@/components/pages/Project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI engineering, RAG system, machine learning, and full-stack web development projects by Danang Hapis Fadillah.",
  keywords: [
    "AI Projects",
    "Web Development",
    "Machine Learning",
    "Generative AI",
    "React",
    "NextJS",
    "Danang Hapis Fadillah",
    "BERT",
    "LLAMA",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description:
      "AI engineering, RAG system, machine learning, and full-stack web development case studies.",
    url: "/projects",
    images: [
      {
        url: "/og-projects.PNG",
        width: 1361,
        height: 645,
        alt: "Projects Overview - Danang Hapis Fadillah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Danang Hapis Fadillah",
    description:
      "Explore AI engineering, RAG system, machine learning, and full-stack web development case studies.",
    images: ["/og-projects.PNG"],
  },
};

export default function Page() {
  return <Projects />;
}
