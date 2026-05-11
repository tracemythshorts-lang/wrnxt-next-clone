import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "WRNXT Digital | High-Velocity Software Architecture & Digital Governance",
  description: "WRNXT is a premier digital engineering collective specializing in mission-critical software architecture, zero-downtime IT governance, and high-impact digital marketing for ambitious global brands.",
  keywords: [
    "Software Architecture", 
    "Digital Governance", 
    "Enterprise Software Engineering", 
    "High-Velocity Marketing", 
    "Zero-Downtime IT Support", 
    "WRNXT Digital", 
    "CTO Consulting",
    "Digital Transformation"
  ],
  authors: [{ name: "WRNXT Digital Engineering" }],
  openGraph: {
    title: "WRNXT Digital | High-Velocity Software Architecture",
    description: "Mission-critical ecosystems built for absolute scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
