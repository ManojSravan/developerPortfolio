import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 

export const metadata: Metadata = {
  title: "Manoj Sravan | Full-Stack Developer & Software Engineer",
  description:
    "I'm Manoj Sravan, a full-stack developer based in India. I collaborate with startups and small businesses to build scalable and impactful digital products. Specialized in Node.js, Express, React, PostgreSQL, and MongoDB.",
  keywords: [
    "Manoj Sravan",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Developer",
    "Freelance Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "Startup Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Manoj Sravan", url: "https://linkedin.com/in/manojsravan" }],
  creator: "Manoj Sravan",
  publisher: "Manoj Sravan",
  openGraph: {
    title: "Manoj Sravan | Full-Stack Developer",
    description:
      "Full-stack developer based in India. Helping startups and small businesses build scalable web applications using modern JavaScript frameworks.",
    url: "https://manojsravan.dev", // replace with your actual domain
    siteName: "Manoj Sravan Portfolio",
    images: [
      {
        url: "/og-image.png", // replace with your preview image
        width: 1200,
        height: 630,
        alt: "Manoj Sravan Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Sravan | Full-Stack Developer",
    description:
      "Building scalable digital products for startups using Node.js, React, and PostgreSQL.",
    creator: "@manojsravan", // optional if you create a Twitter handle
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://manojsravan.dev"), // replace with your actual domain
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Analytics/>
        <Footer/> 
      </body>
    </html>
  );
}
