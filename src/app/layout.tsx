import { Archivo_Black, Syne, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Metadata } from 'next';
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: '--font-syne' });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: '--font-outfit' });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-poster" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Danang Hapis Fadillah | AI Engineer Portfolio",
    template: "%s | Danang Hapis Fadillah"
  },
  description: siteConfig.description,
  keywords: ["AI Engineer", "RAG Systems", "Retrieval-Augmented Generation", "Web Developer", "Next.js", "Portfolio", "Danang Hapis Fadillah"],
  authors: [{ name: "Danang Hapis Fadillah" }],
  creator: "Danang Hapis Fadillah",
  publisher: "Danang Hapis Fadillah",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Danang Hapis Fadillah Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: "/og-home.PNG",
      width: 1363,
      height: 644,
      alt: "Danang Hapis Fadillah - AI Engineer Portfolio",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@hapeace',
    images: ["/og-home.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl("/me.jpg"),
      jobTitle: 'AI Engineer',
      description: siteConfig.description,
      knowsAbout: ['AI Engineering', 'Retrieval-Augmented Generation', 'Web Development', 'LangGraph', 'Next.js', 'FastAPI'],
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
      inLanguage: 'en-US',
      author: { '@id': `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${archivoBlack.variable} font-sans antialiased mx-5 md:mx-0`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
