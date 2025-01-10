import type { Metadata } from "next";
import Projects from "@/components/pages/Project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a curated selection of projects showcasing expertise in web development and AI. Highlights include innovative solutions in machine learning, generative AI, and responsive design.",
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
  openGraph: {
    title: "Projects",
    description:
      "Showcasing a continuous journey in web development and AI, featuring innovative solutions in technology and design.",
    url: "https://hapeace.vercel.app/projects",
    images: [
      {
        url: "https://hapeace.vercel.app/og-projects.png",
        width: 800,
        height: 600,
        alt: "Projects Overview - Danang Hapis Fadillah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Danang Hapis Fadillah",
    description:
      "Discover projects that demonstrate advanced skills in AI and web development. A showcase of innovation and creativity.",
    images: [
      {
        url: "https://hapeace.vercel.app/og-projects.png",
        alt: "Projects Overview - Danang Hapis Fadillah",
      },
    ],
  },
};

export default function Page() {
  return <Projects />;
}
