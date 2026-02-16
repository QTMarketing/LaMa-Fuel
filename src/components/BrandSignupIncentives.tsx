"use client";

import Link from "next/link";

export default function BrandSignupIncentives() {
  return (
    <section className="bg-orange-gradient text-white">
      <div className="site-container py-10 md:py-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/80">Incentives</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight">
            Brand Sign-Up Incentives — Up to
            <span className="ml-2 inline-flex items-center rounded-xl bg-white px-4 py-2 text-orange-600 shadow-lg -translate-y-1">
              $1,000,000*
            </span>
          </h2>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-10 text-sm md:text-base text-white/90">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✓</span>
            <span>Volume programs, approved fast</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✓</span>
            <span>Funds via rebates or allowances</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✓</span>
            <span>We handle it all, you get paid</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/brand-application"
            className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-orange-600 shadow-md hover:brightness-95 transition"
          >
            See If I Qualify
          </Link>
        </div>
      </div>
    </section>
  );
}
