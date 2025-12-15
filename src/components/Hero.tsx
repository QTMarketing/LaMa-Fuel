"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CheckBadgeIcon, ArrowTrendingUpIcon, MegaphoneIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const benefits = [
    {
      name: "Instant Brand Recognition",
      icon: <CheckBadgeIcon className="w-5 h-5" />,
      image: "/features/brand-recognition.jpg",
    },
    {
      name: "Increase Your Profit",
      icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
      image: "/features/increase-profit.jpg",
    },
    {
      name: "Operational Support",
      icon: <MegaphoneIcon className="w-5 h-5" />,
      image: "/features/support.jpg",
    },
    {
      name: "Hassle-Free Set-Up",
      icon: <RocketLaunchIcon className="w-5 h-5" />,
      image: "/features/setup.jpg",
    },
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

  const heroImage = "/hero2.png";
  const heroAlt = "Modern LaMa Fuel facility at dusk";

  return (
    <section className="relative flex flex-col items-center text-white min-h-[70vh] overflow-x-hidden">
      <Head>
        <title>LaMa Fuel | Fuel Smarter, Grow Faster</title>
        {heroImage && <link rel="preload" as="image" href={heroImage} />}
      </Head>
      {/* Background Image - Stretches to fill the container */}
      <Image 
        src={heroImage}
        alt={heroAlt} 
        fill
        className="object-cover z-0"
      />

      {/* Dark Overlay - strengthen for better text contrast */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>

      {/* Standard Site Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-8 flex flex-col">

        {/* Main Content - centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Headline */}
          <h1 className="hero-headline font-heading font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl tracking-[0.08em] leading-none text-white drop-shadow-lg mb-1 md:whitespace-nowrap">
            Fuel Smarter, Grow Faster
          </h1>

          {/* Supporting copy and primary actions */}
          <div className="mb-10">
            <p className="mt-1 max-w-4xl text-white/80 mb-8">
              Gain full control with real-time monitoring, advanced analytics, and powerful theft detection. LaMa Fuel provides the tools you need to reduce costs and drive efficiency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/brand-application"
                className="bg-orange-gradient text-white px-6 sm:px-8 py-3 rounded-md font-semibold shadow-md hover:opacity-90 active:scale-95 transition inline-block"
              >
                Join Us
              </Link>
              <Link
                href="/about"
                className="px-6 sm:px-8 py-3 rounded-md border border-white/70 font-semibold text-white/90 hover:bg-white/10 hover:text-white transition"
              >
                About us
              </Link>
            </div>
          </div>
        </div>

        

        

        
      </div>

      {/* Benefit buttons - 2x2 grid of square buttons */}
      <div className="absolute inset-x-0 bottom-10 z-30 pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 2x2 grid of square buttons */}
          <div className="grid grid-cols-2 gap-2 pointer-events-auto w-fit">
            {benefits.map((benefit, idx) => (
              <button
                key={benefit.name}
                type="button"
                onClick={() => {
                  const target = document.getElementById("why-brand");
                  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.dispatchEvent(
                    new CustomEvent("activate-why-topic", { detail: { index: idx } })
                  );
                }}
                className="group flex flex-col items-center justify-center gap-1.5 w-32 h-12 sm:w-36 sm:h-12 md:w-40 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400/80"
              >
                <span className="text-white group-hover:text-[#FF6B35] transition-colors w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 flex-shrink-0">
                  {benefit.icon}
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white text-center leading-tight px-1">
                  {benefit.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile incentive card below content */}
      <div className="md:hidden w-full px-4 pb-6">
        <div className="mx-auto max-w-sm rounded-2xl bg-white/95 shadow-2xl border border-gray-200 p-5 text-gray-900">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Incentive
          </p>
          <h3 className="mt-2 font-heading font-bold text-lg tracking-wider text-gray-900 leading-snug">
            Brand sign-up incentives — up to{" "}
            <span className="whitespace-nowrap">$1,000,000*</span>
          </h3>
          <Link
            href="/brand-application"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-orange-gradient px-4 py-7 text-xs font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition w-full"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}