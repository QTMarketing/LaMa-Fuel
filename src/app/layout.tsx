import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaMa Fuel",
  description: "Reliable fuel supply and fleet management solutions.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-dark antialiased overflow-x-hidden">
        <Navbar />
        <main className="animate-fade-up overflow-x-hidden">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}


