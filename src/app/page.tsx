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
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
        <Hero />
      </div>

      {/* Desktop incentive card floating between hero and stats (doesn't affect layout) */}
      <div className="hidden md:flex absolute right-0 top-[45vh] z-30 pointer-events-none justify-end pr-4 lg:pr-8">
        <div className="pointer-events-auto w-80 lg:w-96 bg-white/95 shadow-2xl border border-gray-200 rounded-2xl p-6 text-gray-900 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Incentive
          </p>
          <h3 className="font-heading font-bold text-[26px] md:text-[32px] tracking-wider text-[#101828] leading-snug">
            Brand sign-up incentives — up to{" "}
            <span className="whitespace-nowrap inline-block bg-orange-gradient text-white px-3 py-1" style={{ borderRadius: '0.375rem' }}>
              $1,000,000*
            </span>
          </h3>
          <p className="text-xs text-gray-600">
            Ask our team how your site can qualify for capital support and image upgrades.
          </p>
          <Link
            href="/brand-application"
            className="inline-flex items-center justify-center rounded-md bg-orange-gradient px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition w-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Stats band directly under hero */}
      <section className="bg-white relative z-10 mt-0">
        <div id="stats-section-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5 md:pt-14 md:pb-7 border-b border-gray-100 flex flex-wrap gap-8 md:gap-10 text-xs sm:text-sm text-gray-900">
          <div className="flex items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold leading-none">
                <AnimatedStat value="20+" />
              </div>
              <div className="stats-label text-gray-600" style={{ fontSize: '16px' }}>Years of Experience</div>
            </div>
            <div className="mx-4 h-8 border-r border-gray-300" />
          </div>
          <div className="flex items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold leading-none">
                <AnimatedStat value="100+" />
              </div>
              <div className="stats-label text-gray-600" style={{ fontSize: '16px' }}>Successful Properties</div>
            </div>
            <div className="mx-4 h-8 border-r border-gray-300" />
          </div>
          <div className="flex items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold leading-none">
                <AnimatedStat value="100+" />
              </div>
              <div className="stats-label text-gray-600" style={{ fontSize: '16px' }}>Projects Completed</div>
            </div>
            <div className="mx-4 h-8 border-r border-gray-300" />
          </div>
          <div className="flex items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold leading-none">
                <AnimatedStat value="100k+" />
              </div>
              <div className="stats-label text-gray-600" style={{ fontSize: '16px' }}>Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel solutions overview cards - carousel */}
      <FuelSolutionsCarousel />

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


