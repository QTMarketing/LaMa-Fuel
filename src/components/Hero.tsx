"use client";
import Image from "next/image";
import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import { CheckBadgeIcon, ArrowTrendingUpIcon, MegaphoneIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const benefits = [
    { name: 'Instant Brand Recognition', icon: <CheckBadgeIcon className="w-5 h-5" /> },
    { name: 'Increase Your Profit', icon: <ArrowTrendingUpIcon className="w-5 h-5" /> },
    { name: 'Marketing & Operational Support', icon: <MegaphoneIcon className="w-5 h-5" /> },
    { name: 'Hassle-Free Set-Up', icon: <RocketLaunchIcon className="w-5 h-5" /> },
  ];

  const partners = [
    { file: "mobil 1.png", alt: "Mobil" },
    { file: "exxon 1.png", alt: "Exxon" },
    { file: "chevron 1.png", alt: "Chevron" },
    { file: "citgo 1.png", alt: "Citgo" },
    { file: "phillips 1.png", alt: "Phillips 66" },
    { file: "sunoco 1.png", alt: "Sunoco" },
    { file: "texco 1.png", alt: "Texaco" },
    { file: "alon-asf 1.png", alt: "Alon ASF" },
  ];

  return (
    <section className="relative flex flex-col justify-start items-center text-white">
      
      {/* Background Image - Stretches to fill the container */}
      <Image 
        src="/hero-image.jpg"
        alt="Modern LaMa Fuel facility at dusk" 
        layout="fill"
        className="object-cover z-0"
        priority 
      />

      {/* Dark Overlay - Crucial for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Standard Site Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-12 md:pb-14 flex flex-col">
        
        {/* Main Content */}
        <div className="flex flex-col items-start text-left">

          {/* Top "Ticker" Bar */}
          <div className="flex items-center gap-4 p-2 mb-8 bg-white/10 rounded-full backdrop-blur-md">
            {benefits.map((benefit, idx) => (
              <button
                key={benefit.name}
                type="button"
                onClick={() => {
                  const target = document.getElementById('why-brand');
                  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.dispatchEvent(new CustomEvent('activate-why-topic', { detail: { index: idx } }));
                }}
                className="group flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 cursor-pointer"
              >
                {/* icon: solid orange on hover */}
                <span className="text-white group-hover:text-[#FF6B35]">{benefit.icon}</span>
                {/* text: gradient on hover (triggered by group hover) */}
                <span className="text-sm font-medium group-hover:text-primary-gradient">{benefit.name}</span>
              </button>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            Fuel Smarter, Grow Faster
          </h1>

          {/* Sub-headline and Paragraph */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Optimize Your Fleet Operations.</h2>
            <p className="mt-2 max-w-2xl text-lg text-white/80">
              Gain full control with real-time monitoring, advanced analytics, and powerful theft detection. LaMa Fuel provides the tools you need to reduce costs and drive efficiency.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
              className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 active:scale-95 transition w-full sm:w-auto"
            >
              <span>Join Us</span>
            </button>
            <Link href="/services">
              <button className="text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 active:scale-95 transition w-full sm:w-auto">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Supporting Cards */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Card 1: LaMa Fuel */}
            <div className="rounded-xl bg-black/50 backdrop-blur-sm p-5 shadow-lg ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] min-h-[170px] flex flex-col group hover:bg-white transition-colors">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-gray-900">LaMa Fuel</h3>
                <div className="flex items-center gap-2 text-xs text-white/80 transition-colors group-hover:text-gray-700">
                  <span>Brand sign-up incentives — up to</span>
                  <span className="animate-sway-lr inline-flex items-center rounded-md bg-white/90 text-gray-900 px-2 py-0.5 ring-1 ring-black/10 group-hover:bg-gray-100">
                    <span className="text-base font-bold">$1,000,000</span><span className="text-[10px] ml-1">*</span>
                  </span>
                </div>
              </div>
              <p className="mt-2 text-white/80 text-sm flex-1 transition-colors group-hover:text-gray-700">
                Partner with LaMa Fuel to access reliable supply chains, competitive pricing, and data-driven tools designed to streamline your fuel operations.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
                  className="bg-orange-gradient text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] active:scale-95"
                >
                  Join Us
                </button>
              </div>
            </div>

            {/* Card 2: Branded Fuel */}
            <div className="rounded-xl bg-black/50 backdrop-blur-sm p-5 shadow-lg ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] min-h-[170px] flex flex-col group hover:bg-white transition-colors">
              <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-gray-900">Branded Fuel</h3>
              <p className="mt-2 text-white/80 text-sm flex-1 transition-colors group-hover:text-gray-700">
                Boost your visibility and trust with our top-tier branded fuel programs backed by nationwide partners like Exxon, Mobil, and Chevron.
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-brand-app"))}
                  className="bg-orange-gradient text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] active:scale-95"
                >
                  Join Us
                </button>
                <div className="flex-1 min-w-0">
                  <div className="relative h-8 overflow-hidden">
                    <div className="absolute left-0 top-0 h-8 w-full overflow-hidden">
                      <div className="flex items-center whitespace-nowrap animate-marquee w-max">
                        {[...partners, ...partners].map((partner, index) => (
                          <div key={`card-${partner.alt}-${index}`} className="flex-shrink-0 mx-4 flex items-center justify-center">
                            <Image
                              src={`/partners/new/${encodeURIComponent(partner.file)}`}
                              alt={partner.alt}
                              width={72}
                              height={24}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Stats Section - pinned top-right */}
        <div className="absolute right-[-48px] md:right-[-80px] top-32 md:top-40 z-20">
          <StatsSection />
        </div>

        
      </div>
    </section>
  );
}