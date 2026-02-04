import type { Metadata } from "next";
import Home from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Danang Hapis Fadillah | AI Engineer",
  description: "AI Engineer at SimplifyAI specializing in Agentic AI, RAG systems, and Scalable Machine Learning solutions.",
  keywords: ['AI Engineer', 'ML Engineer', 'Agentic AI', 'Generative AI', 'Next.js', 'SimplifyAI', 'LangGraph'],
  openGraph: {
    title: "Danang Hapis Fadillah | AI Engineer",
    description: 'AI Engineer specializing in Agentic AI, RAG systems, and Scalable Machine Learning.',
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
