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

      {/* Stats band directly under hero */}
      <section className="bg-white relative z-20 mt-0">
        <div
          id="stats-section-content"
          className="site-container pt-12 pb-12 md:pt-14 md:pb-14 border-b border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-gray-900">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold leading-none">
                <AnimatedStat value="20+" />
              </div>
              <div className="stats-label text-gray-600 mt-2 text-sm sm:text-base">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold leading-none">
                <AnimatedStat value="100+" />
              </div>
              <div className="stats-label text-gray-600 mt-2 text-sm sm:text-base">
                Successful Properties
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold leading-none">
                <AnimatedStat value="100+" />
              </div>
              <div className="stats-label text-gray-600 mt-2 text-sm sm:text-base">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold leading-none">
                <AnimatedStat value="100k+" />
              </div>
              <div className="stats-label text-gray-600 mt-2 text-sm sm:text-base">
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <BrandSignupIncentives />
      </div>

      {/* Fuel solutions overview cards - carousel */}
      <div className="relative z-0">
        <FuelSolutionsCarousel />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "180ms" }}>
        <PremiumBlendSection />
      </div>
      {/* Partners / Trusted by Leading Companies Globally */}
      <div className="animate-fade-up" style={{ animationDelay: "220ms" }}>
        <PartnersSection />
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


