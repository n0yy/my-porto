import { Syne } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "../context/Colors";
import Navbar from "../components/Navbar";
import { Metadata } from 'next';

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

export const metadata: Metadata = {
  title: "Danang Hapis Fadillah | AI Engineer Portfolio",
  description: "Portfolio of Danang Hapis Fadillah, an AI Engineer specializing in Machine Learning, Generative AI, and Web Development.",
  openGraph: {
    title: "Danang Hapis Fadillah | AI Engineer",
    description: "Specializing in Agentic AI, RAG systems, and Scalable Machine Learning.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
      >
        <ColorProvider>
          {children}
          <Navbar />
        </ColorProvider>
      </body>
    </html>
  );
}
