"use client";

import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import Testimonials from "@/components/Testimonials";
import { PremiumBlendSection } from "@/components/PartnersSection";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import WhyBrandSection from "@/components/WhyBrandSection";
import SupplyPathUnifiedSection from "@/components/SupplyPathUnifiedSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
        <Hero />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <SupplyPathUnifiedSection />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "180ms" }}>
        <PremiumBlendSection />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
        <MissionSection />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "360ms" }}>
        <LatestBlogPosts />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "480ms" }}>
        <WhyBrandSection />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "560ms" }}>
        <Testimonials />
      </div>
    </div>
  );
}


