"use client";

import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import BrandSignupIncentives from "@/components/BrandSignupIncentives";
import Testimonials from "@/components/Testimonials";
import CalculatorSection from "@/components/CalculatorSection";
import PartnersSection, { PremiumBlendSection } from "@/components/PartnersSection";
import BlogNews from "@/components/BlogNews";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import WhyBrandSection from "@/components/WhyBrandSection";
import ContactSection from "@/components/ContactSection";
import FuelSolutionsCarousel from "@/components/FuelSolutionsCarousel";
import FuelsWeProvideSection from "@/components/FuelsWeProvideSection";
import AnimatedStat from "@/components/AnimatedStat";
import { CheckBadgeIcon, ArrowTrendingUpIcon, MegaphoneIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const quickActions = [
    { title: "Higher\nMargins", Icon: ArrowTrendingUpIcon },
    { title: "Flexible\nSupply", Icon: CheckBadgeIcon },
    { title: "Reliable\nDelivery", Icon: RocketLaunchIcon },
    { title: "No Franchise\nFees", Icon: MegaphoneIcon },
  ];

  const scrollToWhyBrand = () => {
    const el = document.getElementById("why-unbranded");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
        <Hero />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <BrandSignupIncentives />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
        <FuelsWeProvideSection />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "180ms" }}>
        <PremiumBlendSection />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
        <MissionSection />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "360ms" }}>
        <WhyBrandSection />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "480ms" }}>
        <LatestBlogPosts />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "560ms" }}>
        <Testimonials />
      </div>
    </div>
  );
}


