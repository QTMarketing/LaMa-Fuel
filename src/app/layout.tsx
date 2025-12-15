import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LaMa Fuel",
  description: "Reliable fuel supply and fleet management solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <body className="bg-white text-dark antialiased overflow-x-hidden font-sans">
        <Navbar />
        <main className="animate-fade-up overflow-x-hidden">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}


