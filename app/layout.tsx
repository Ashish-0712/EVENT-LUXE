import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventLuxe | Luxury 3D Event Management",
  description: "Creating Memories Beyond Imagination. Find the perfect event planner for luxury weddings, corporate events, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0B0B0B] text-white overflow-x-hidden`}
      >
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
