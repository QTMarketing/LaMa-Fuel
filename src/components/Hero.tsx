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
    <section className="relative flex flex-col justify-start items-center text-white min-h-screen overflow-x-hidden">
      
      {/* Background Image - Stretches to fill the container */}
      <Image 
        src="/hero-image.jpg"
        alt="Modern LaMa Fuel facility at dusk" 
        layout="fill"
        className="object-cover z-0"
        priority 
      />

      {/* Dark Overlay - Crucial for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Standard Site Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 md:pr-32 pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-20 flex flex-col **flex-grow**">
        
        {/* Main Content */}
        <div className="flex flex-col items-start text-left **flex-grow**">

          {/* Top "Ticker" Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 mb-8 bg-white/10 rounded-xl sm:rounded-full backdrop-blur-md sm:overflow-x-auto sm:scrollbar-hide -mx-2">
            {benefits.map((benefit, idx) => (
              <button
                key={benefit.name}
                type="button"
                onClick={() => {
                  const target = document.getElementById('why-brand');
                  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.dispatchEvent(new CustomEvent('activate-why-topic', { detail: { index: idx } }));
                }}
                className="group flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 cursor-pointer flex-shrink-0"
              >
                {/* icon: solid orange on hover */}
                <span className="text-white group-hover:text-[#FF6B35]">{benefit.icon}</span>
                {/* text: gradient on hover (triggered by group hover) */}
                <span className="text-sm font-medium group-hover:text-primary-gradient">{benefit.name}</span>
              </button>
            ))}
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-3">
            Fuel Smarter, Grow Faster
          </h1>

          {/* Sub-headline and Paragraph */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Optimize Your Fleet Operations.</h2>
            <p className="mt-2 max-w-2xl text-base sm:text-lg text-white/80 mb-8">
              Gain full control with real-time monitoring, advanced analytics, and powerful theft detection. LaMa Fuel provides the tools you need to reduce costs and drive efficiency.
            </p>
          </div>

          {/* Stats Section - repositioned below intro paragraph */}
          <div className="hidden md:block absolute right-[-48px] md:right-[-80px] top-28 md:top-32 z-20">
            <StatsSection />
          </div>

          {/* Supporting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8 md:mt-20 lg:mt-28">
            {/* Card 1: LaMa Fuel */}
            <div className="rounded-xl bg-black/50 backdrop-blur-sm p-4 sm:p-6 shadow-lg ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] min-h-[220px] flex flex-col group hover:bg-white transition-colors overflow-hidden">
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-3">
                <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-gray-900">LaMa Fuel</h3>
                <div className="w-full sm:w-auto text-white/80 transition-colors group-hover:text-gray-700">
                  {/* Mobile: split into two lines */}
                  <div className="flex sm:hidden flex-col gap-1 break-words max-w-full w-full">
                    <p className="w-full break-words">Brand sign-up incentives —</p>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                      <span>up to</span>
                      <span className="animate-sway-lr inline-flex items-center rounded-md bg-white/90 text-gray-900 px-2.5 py-1 ring-1 ring-black/10 group-hover-white-text">
                        <span className="text-sm font-bold whitespace-nowrap">$1,000,000</span><span className="text-[10px] ml-1">*</span>
                      </span>
                    </div>
                  </div>
                  {/* Desktop/tablet: single line */}
                  <div className="hidden sm:flex items-center gap-2">
                    <span>Brand sign-up incentives — up to</span>
                    <span className="animate-sway-lr inline-flex items-center rounded-md bg-white/90 text-gray-900 px-2.5 py-1 ring-1 ring-black/10 group-hover-white-text">
                      <span className="text-base font-bold whitespace-nowrap">$1,000,000</span><span className="text-[10px] ml-1">*</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-white/80 text-sm flex-1 transition-colors group-hover:text-gray-700">
                Built for independent operators. Get reliable supply, competitive pricing, and real-time controls that protect your margins—without brand constraints. Access modern tools, operational visibility, and marketing freedom tailored to your market.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-brand-app'))}
                  className="bg-orange-gradient text-white px-6 sm:px-10 py-3 sm:py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFA84B] hover-orange-gradient-border active:scale-95 w-full sm:w-auto text-base sm:text-lg"
                >
                  Join Us
                </button>
                <Link href="/solutions/unbranded" className="bg-transparent border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-2 rounded-md font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-black hover:!bg-white hover:!text-transparent hover:!bg-clip-text hover:!bg-gradient-to-r hover:!from-[#FF6B35] hover:!to-[#FFA84B] hover-orange-gradient-border active:scale-95 inline-block text-center w-full sm:w-auto text-base sm:text-lg">
                  Explore
                </Link>
              </div>
            </div>

            {/* Card 2: Branded Fuel */}
            <div className="rounded-xl bg-black/50 backdrop-blur-sm p-6 shadow-lg ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] min-h-[220px] flex flex-col group hover:bg-white transition-colors">
              <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-gray-900">Branded Fuel</h3>
              <p className="mt-3 text-white/80 text-sm flex-1 transition-colors group-hover:text-gray-700">
                Boost your visibility and trust with our top-tier branded fuel programs backed by nationwide partners like Exxon, Mobil, and Chevron.
              </p>
              <div className="mt-4 flex-1 min-w-0">
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
              <div className="mt-4 flex gap-3 justify-center">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-brand-app'))}
                  className="bg-orange-gradient text-white px-12 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFA84B] hover-orange-gradient-border active:scale-95"
                >
                  Join Us
                </button>
                <Link href="/solutions/branded" className="bg-transparent border border-white/30 text-white px-12 py-2 rounded-md font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-black hover:!bg-white hover:!text-transparent hover:!bg-clip-text hover:!bg-gradient-to-r hover:!from-[#FF6B35] hover:!to-[#FFA84B] hover-orange-gradient-border active:scale-95 inline-block text-center">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>

        

        

        
      </div>
    </section>
  );
}