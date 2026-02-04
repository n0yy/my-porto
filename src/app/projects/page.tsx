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
    url: "https://dananghapis.dev/projects",
    images: [
      {
        url: "/og-projects.png", // Simplified path, metadataBase will handle it
        width: 1200,
        height: 630,
        alt: "Projects Overview - Danang Hapis Fadillah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Danang Hapis Fadillah",
    description:
      "Discover projects that demonstrate advanced skills in AI and web development. A showcase of innovation and creativity.",
  },
};

export default function Page() {
  return <Projects />;
}
