"use client";

import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import IncentivesHighlight from "@/components/IncentivesHighlight";
import DeliveryLogistics from "@/components/DeliveryLogistics";
import Testimonials from "@/components/Testimonials";
import CalculatorSection from "@/components/CalculatorSection";
import PartnersSection from "@/components/PartnersSection";
import BlogNews from "@/components/BlogNews";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import WhyBrandSection from "@/components/WhyBrandSection";
import ContactSection from "@/components/ContactSection";
import FuelSolutionsCarousel from "@/components/FuelSolutionsCarousel";
import AnimatedStat from "@/components/AnimatedStat";
import { CheckBadgeIcon, ArrowTrendingUpIcon, MegaphoneIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const quickActions = [
    { title: "Instant Brand\nRecognition", Icon: CheckBadgeIcon },
    { title: "Increase Your\nProfit", Icon: ArrowTrendingUpIcon },
    { title: "Operational\nSupport", Icon: MegaphoneIcon },
    { title: "Hassle-Free\nSet-Up", Icon: RocketLaunchIcon },
  ];

  const scrollToWhyBrand = () => {
    const el = document.getElementById("why-brand");
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
          className="max-w-[90rem] mx-auto px-6 sm:px-8 pt-12 pb-12 md:pt-14 md:pb-14 border-b border-gray-100"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Stats (left) */}
            <div className="flex flex-wrap gap-10 md:gap-12 text-xs sm:text-sm text-gray-900">
              <div className="flex items-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold leading-none">
                    <AnimatedStat value="20+" />
                  </div>
                  <div className="stats-label text-gray-600" style={{ fontSize: "16px" }}>
                    Years of Experience
                  </div>
                </div>
                <div className="mx-4 h-8 border-r border-gray-300" />
              </div>
              <div className="flex items-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold leading-none">
                    <AnimatedStat value="100+" />
                  </div>
                  <div className="stats-label text-gray-600" style={{ fontSize: "16px" }}>
                    Successful Properties
                  </div>
                </div>
                <div className="mx-4 h-8 border-r border-gray-300" />
              </div>
              <div className="flex items-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold leading-none">
                    <AnimatedStat value="100+" />
                  </div>
                  <div className="stats-label text-gray-600" style={{ fontSize: "16px" }}>
                    Projects Completed
                  </div>
                </div>
                <div className="mx-4 h-8 border-r border-gray-300" />
              </div>
              <div className="flex items-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold leading-none">
                    <AnimatedStat value="100k+" />
                  </div>
                  <div className="stats-label text-gray-600" style={{ fontSize: "16px" }}>
                    Satisfied Clients
                  </div>
                </div>
              </div>
            </div>

            {/* 4 square buttons (right) */}
            <div className="hidden lg:flex items-center justify-end gap-3 flex-nowrap">
              {quickActions.map(({ title, Icon }) => (
                <button
                  key={title}
                  type="button"
                  onClick={scrollToWhyBrand}
                  className="relative hover:z-20 w-[96px] h-[78px] rounded-md btn-orange-gradient text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] flex flex-col items-center justify-center gap-1.5 text-center px-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                >
                  <Icon className="w-[18px] h-[18px] text-white" />
                  <span className="text-[11px] leading-tight font-semibold whitespace-pre-line">
                    {title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fuel solutions overview cards - carousel */}
      <div className="relative z-0">
        <FuelSolutionsCarousel />
      </div>

      {/* Partners / Trusted by Leading Companies Globally */}
      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <PartnersSection />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
        <MissionSection />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
        <IncentivesHighlight />
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


