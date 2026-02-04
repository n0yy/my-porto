import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "../context/Colors";
import Navbar from "../components/Navbar";
import { Metadata } from 'next';

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: '--font-syne' });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: '--font-outfit' });

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://hapeace.vercel.app'),
  title: {
    default: "Danang Hapis Fadillah | AI Engineer Portfolio",
    template: "%s | Danang Hapis Fadillah"
  },
  description: "Portfolio of Danang Hapis Fadillah, an AI Engineer specializing in Machine Learning, Generative AI, and Web Development.",
  keywords: ["AI Engineer", "Machine Learning", "Generative AI", "Fullstack Developer", "Portfolio", "Danang Hapis Fadillah"],
  authors: [{ name: "Danang Hapis Fadillah" }],
  creator: "Danang Hapis Fadillah",
  openGraph: {
    title: "Danang Hapis Fadillah | AI Engineer",
    description: "Specializing in Agentic AI, RAG systems, and Scalable Machine Learning.",
    url: 'https://hapeace.vercel.app',
    siteName: 'Danang Hapis Fadillah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Danang Hapis Fadillah | AI Engineer",
    description: "Specializing in Agentic AI, RAG systems, and Scalable Machine Learning.",
    creator: '@hapeace',
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
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Danang Hapis Fadillah',
  url: 'https://hapeace.vercel.app',
  jobTitle: 'AI Engineer',
  description: 'Specializing in Agentic AI, RAG systems, and Scalable Machine Learning.',
  sameAs: [
    'https://github.com/n0yy',
    'https://www.linkedin.com/in/danang-hapis-fadillah-682878202/',
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
        className={`${syne.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ColorProvider>
          {children}
          <Navbar />
        </ColorProvider>
      </body>
    </html>
  );
}
