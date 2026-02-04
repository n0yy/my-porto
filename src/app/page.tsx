import type { Metadata } from "next";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Project";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/Footer";

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
  return (
    <div className="flex flex-col">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
