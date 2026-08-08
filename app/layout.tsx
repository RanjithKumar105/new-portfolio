import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: `${portfolioData.personal.name} - ${portfolioData.personal.bio}`,
  keywords: [
    "Ranjith Kumar",
    "AI ML Engineer",
    "Computer Vision",
    "Full Stack Developer",
    "SIT Mangaluru",
    "YOLOv8",
    "Next.js Portfolio",
    "Deep Learning",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#090a0f] text-slate-100 antialiased`}>
        <ScrollProgress />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
