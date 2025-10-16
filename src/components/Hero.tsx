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

  return (
    <section className="relative h-screen flex flex-col justify-start items-center text-white">
      
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
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 flex flex-col justify-between h-full">
        
        {/* Main Content */}
        <div className="flex flex-col items-start text-left">

          {/* Top "Ticker" Bar */}
          <div className="flex items-center gap-4 p-2 mb-8 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            {benefits.map((benefit, idx) => (
              <button
                key={benefit.name}
                type="button"
                onClick={() => {
                  const el = document.getElementById(`why-${idx}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
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
        </div>

        {/* Stats Section - pinned top-right */}
        <div className="absolute right-[-48px] md:right-[-80px] top-48 md:top-56 z-20">
          <StatsSection />
        </div>

        {/* Trusted Partners Marquee (bottom area where stats used to be) */}
        <div className="mt-auto">
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-md px-4 py-2 shadow-lg md:shadow-xl shadow-inner w-screen ml-auto">
            <div className="flex items-center gap-6 text-sm text-white/80 font-medium">
              <span className="uppercase tracking-wider whitespace-nowrap text-white/80 font-bold">Trusted Partners</span>
              <div className="relative overflow-hidden flex-1">
                <div className="flex items-center animate-marquee w-max">
                  {[
                  { file: "mobil%201.png", alt: "Mobil" },
                  { file: "exxon%201.png", alt: "Exxon" },
                  { file: "chevron%201.png", alt: "Chevron" },
                  { file: "citgo%201.png", alt: "Citgo" },
                  { file: "phillips%201.png", alt: "Phillips 66" },
                  { file: "sunoco%201.png", alt: "Sunoco" },
                  { file: "texco%201.png", alt: "Texaco" },
                  { file: "alon-asf%201.png", alt: "Alon ASF" },
                    // duplicate inline for seamless loop
                  { file: "mobil%201.png", alt: "Mobil" },
                  { file: "exxon%201.png", alt: "Exxon" },
                  { file: "chevron%201.png", alt: "Chevron" },
                  { file: "citgo%201.png", alt: "Citgo" },
                  { file: "phillips%201.png", alt: "Phillips 66" },
                  { file: "sunoco%201.png", alt: "Sunoco" },
                  { file: "texco%201.png", alt: "Texaco" },
                  { file: "alon-asf%201.png", alt: "Alon ASF" },
                  ].map((partner, index) => (
                    <div key={`${partner.alt}-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                      <div className="h-16 w-36 flex items-center justify-center">
                        <Image
                        src={`/partners/new/${partner.file}`}
                          alt={partner.alt}
                          width={100}
                          height={32}
                          className="h-14 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}