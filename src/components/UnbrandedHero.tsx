"use client";

import Image from "next/image";

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

      <div className="site-container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-accent px-3 py-1 text-xs font-semibold">
              Built for Independent Operators
            </div>
            <h1 className="h1 mt-3 animate-slide-text">
              LaMa Fuel supply, built for control.
            </h1>
            <p className="body mt-4 max-w-2xl">
              Reliable supply, competitive pricing, and compliance-first support that protect your margins without
              franchise constraints.
            </p>
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  <span>Request Fuel</span>
                </a>
              </div>
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

      {/* Incentives section removed to keep unbranded-first positioning */}
    </section>
  );
}


