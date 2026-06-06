import type { Metadata } from "next";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Project";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  keywords: ['AI Engineer', 'RAG Systems', 'Retrieval-Augmented Generation', 'Web Developer', 'Next.js', 'FastAPI', 'LangGraph'],
  openGraph: {
    title: "Danang Hapis Fadillah | AI Engineer",
    description: siteConfig.description,
    url: '/',
    images: [
      {
        url: '/og-home.PNG',
        width: 1363,
        height: 644,
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
