import { Syne } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "../context/Colors";
import Navbar from "../components/Navbar";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

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
