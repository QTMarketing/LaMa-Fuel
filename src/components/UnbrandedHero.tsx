"use client";

import Image from "next/image";
import { BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function UnbrandedHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background subtle dots/lines reused */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="absolute -top-10 -left-10 h-72 w-72 text-gray-300 animate-drift-slow" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots-unb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="fill-current" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-unb)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-accent px-3 py-1 text-xs font-semibold">
              Built for Independent Operators
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Grow faster with LaMa Fuel
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Reliable supply, competitive pricing, and data-driven controls that protect your margins and streamline operations—without the constraints of a brand program.
            </p>
            <div className="mt-8">
              <a
                href="#eligibility"
                className="inline-flex items-center gap-2 rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95"
              >
                <span>Check Eligibility</span>
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative h-[360px] md:h-[440px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/commitment/2.jpg" 
              alt="LaMa Fuel - Independent fuel operations" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Incentives section - full width outside container */}
      <div className="-mt-4 bg-orange-gradient py-10 sm:py-12 w-full">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
            <BadgeDollarSign className="w-4 h-4 text-white/80" /> Incentives
          </div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight whitespace-nowrap">
            Brand sign-up incentives — up to {" "}
            <motion.span
              className="inline-block bg-white rounded-lg px-4 py-1.5 shadow-sm"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-black text-[1.15em] text-primary-gradient">$1,000,000*</span>
            </motion.span>
          </h2>

          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                  <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Volume programs, approved fast</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                  <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Funds via rebates or allowances</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
                  <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>We handle it all, you get paid</span>
            </li>
          </ul>

          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="group bg-white px-8 py-3 rounded-md font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[linear-gradient(90deg,#FF6B35_0%,#FFA84B_100%)] min-w-[240px] md:min-w-[280px]"
            >
              <span className="relative inline-block">
                <span className="block text-primary-gradient transition-opacity duration-200 group-hover:opacity-0">See If I Qualify</span>
                <span className="absolute inset-0 block text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">See If I Qualify</span>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}


