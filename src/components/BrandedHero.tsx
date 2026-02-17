"use client";

import Image from "next/image";

export default function BrandedHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background pattern (thin lines + dots) */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="absolute -top-10 -left-10 h-72 w-72 text-gray-300 animate-drift-slow" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="fill-current" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <svg className="absolute bottom-0 right-0 h-96 w-96 text-gray-300 animate-drift-slow" viewBox="0 0 400 400" fill="none">
          <g stroke="currentColor" strokeWidth="0.5">
            <path d="M0 50 H400" />
            <path d="M0 100 H400" />
            <path d="M0 150 H400" />
            <path d="M0 200 H400" />
            <path d="M0 250 H400" />
            <path d="M0 300 H400" />
          </g>
        </svg>
      </div>

      <div className="site-container py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-accent px-3 py-1 text-xs font-semibold">
              Branded Fuel Supply
            </div>
            <h1 className="h1 mt-3 animate-slide-text leading-tight !text-black" style={{ color: '#000000' }}>
              Branded Fuel Supply for Growth-Focused Operators
            </h1>
            <p className="body mt-4 max-w-2xl">
              Order gasoline, on-road diesel, off-road diesel, biodiesel, E85, and DEF through trusted branded
              programs backed by reliable operational support.
            </p>
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="#eligibility"
                  className="btn-primary"
                >
                  <span>Check Eligibility</span>
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  <span>Talk to Brand Advisor</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative h-[360px] md:h-[440px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/commitment/1.jpg" 
              alt="Fuels operations" 
              fill 
              className="object-cover opacity-100" 
              style={{ opacity: 1 }}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
            Best for high-traffic sites
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
            Program-dependent incentives
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
            Compliance-first rollout support
          </span>
        </div>
      </div>
    </section>
  );
}


