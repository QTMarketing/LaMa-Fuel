import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaMa Fuel",
  description: "Reliable fuel supply and fleet management solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-dark antialiased">
        <Navbar />
        <main className="animate-fade-up">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}


