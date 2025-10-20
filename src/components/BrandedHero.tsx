"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Partner files for trust strip
const partnerFiles = [
  { file: "alon-asf 1.png", alt: "Alon ASF" },
  { file: "exxon 1.png", alt: "Exxon" },
  { file: "sunoco 1.png", alt: "Sunoco" },
  { file: "chevron 1.png", alt: "Chevron" },
  { file: "mobil 1.png", alt: "Mobil" },
  { file: "phillips 1.png", alt: "Phillips 66" },
  { file: "texco 1.png", alt: "Texaco" },
  { file: "citgo 1.png", alt: "Citgo" },
];

// Offsets to huddle bubbles around center (in px)
// Arrange around a circle to avoid overlap (radius ~ 180px)
const clusterOffsets = [
  { x: 0, y: -180 },
  { x: 127, y: -127 },
  { x: 180, y: 0 },
  { x: 127, y: 127 },
  { x: 0, y: 180 },
  { x: -127, y: 127 },
  { x: -180, y: 0 },
  { x: -127, y: -127 },
];

export default function BrandedHero() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(partnerFiles.length);

  useEffect(() => {
    const compute = () => {
      const el = stripRef.current;
      if (!el) return;
      const containerWidth = el.clientWidth;
      const itemWidth = 160; // approx per-logo space (including gap)
      const paddingAllowance = 0;
      const count = Math.max(1, Math.min(partnerFiles.length, Math.floor((containerWidth - paddingAllowance) / itemWidth)));
      setVisibleCount(count);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-accent px-3 py-1 text-xs font-semibold">
              Over 500 Qualified Sites
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Bring more loyal customers with a major brand
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              National reputation, loyalty programs, and modern image packages that increase traffic and total profit—with incentive opportunities for qualified sites.
            </p>
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="#eligibility"
                  className="inline-flex items-center gap-2 rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95"
                >
                  <span>Check Eligibility</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative h-[360px] md:h-[440px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/commitment/1.jpg" 
              alt="Branded Fuel operations" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
        {/* Trust/Partner strip (inside hero container to show without scrolling) */}
        <div className="mt-20 relative -mx-6 lg:-mx-8 px-6 lg:px-8">
          <div className="text-center text-sm text-gray-600 font-medium">Brands you can join</div>
          <div ref={stripRef} className="mt-8 flex items-center justify-center gap-8 whitespace-nowrap overflow-hidden">
            {partnerFiles.slice(0, visibleCount).map((p, idx) => (
              <div key={p.alt + idx} className="flex-none h-12 w-40 flex items-center justify-center">
                <div className="relative h-12 w-36">
                  <Image
                    src={`/partners/new/${encodeURIComponent(p.file)}`}
                    alt={p.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


