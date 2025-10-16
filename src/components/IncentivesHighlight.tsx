"use client";

import { BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function IncentivesHighlight() {
  const BulletIcon = () => (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#FF6B35]">
        <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
  const openBrandAppModal = () => {
    // Reuse global modal event as a short eligibility entry point
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-brand-app"));
    }
  };

  return (
    <section className="w-full bg-orange-gradient py-10 sm:py-12">
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
        {/** Subline removed as requested **/}

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
            <BulletIcon />
            <span>Volume programs, approved fast</span>
          </li>
          <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
            <BulletIcon />
            <span>Funds via rebates or allowances</span>
          </li>
          <li className="flex items-center justify-center gap-2 text-white/95 text-xs sm:text-sm font-semibold">
            <BulletIcon />
            <span>We handle it all, you get paid</span>
          </li>
        </ul>

        <div className="mt-10">
          <motion.button
            onClick={openBrandAppModal}
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

        {/** Disclosure removed as requested **/}
      </div>
    </section>
  );
}


