"use client";

import Image from "next/image";
import Link from "next/link";
import { Fuel, Truck, Wrench, Leaf, Zap, FlaskConical, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PartnersSection() {
  const partners = [
    { file: "mobil.jpg", alt: "Mobil" },
    { file: "exxon.jpg", alt: "Exxon" },
    { file: "chevron.jpg", alt: "Chevron" },
    { file: "citgo.jpg", alt: "Citgo" },
    { file: "phillips.jpg", alt: "Phillips 66" },
    { file: "sunoco.jpg", alt: "Sunoco" },
    { file: "texco.jpg", alt: "Texaco" },
    { file: "alon-asf.jpg", alt: "Alon ASF" },
  ];

  // Duplicate array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-8">
      <div className="site-container">
        <div className="flex items-center gap-6">
          <div className="h-16 flex items-center">
            <h3 className="font-heading text-[26px] md:text-[30px] font-black text-slate-900 tracking-tight leading-none">
              Our Partners
            </h3>
          </div>
          <div className="relative overflow-hidden flex-1 h-16 flex items-center">
            <div className="flex items-center gap-12 animate-marquee w-max translate-y-[2px]">
              {duplicatedPartners.map((partner, index) => (
                <div key={`${partner.alt}-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <div className="h-12 w-40 flex items-center justify-center">
                    <Image
                      src={`/partners/${partner.file}`}
                      alt={partner.alt}
                      width={140}
                      height={56}
                      className="h-10 w-auto object-contain filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PremiumBlendSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const fuels = [
    { name: "Gasoline", Icon: Fuel, detail: "Retail and fleet-ready supply" },
    { name: "On-Road Diesel", Icon: Truck, detail: "Consistent transport-grade fuel" },
    { name: "Off-Road Diesel", Icon: Wrench, detail: "Built for equipment operations" },
    { name: "Biodiesel", Icon: Leaf, detail: "Lower-emission blend options" },
    { name: "E85 (Ethanol Blend)", Icon: Zap, detail: "Flexible high-ethanol offering" },
    { name: "DEF", Icon: FlaskConical, detail: "Reliable emissions fluid supply" },
  ];

  const renderCard = (fuel: (typeof fuels)[number], idx: number) => {
    const isDef = fuel.name === "DEF";
    const isHovered = hoveredCard === fuel.name;
    const hasAnyHover = hoveredCard !== null;
    const isGradient = (isDef && !hasAnyHover) || (!isDef && isHovered);

    return (
    <div
      key={fuel.name}
      onMouseEnter={() => setHoveredCard(fuel.name)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`group rounded-xl p-4 md:p-5 h-[220px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        idx < 2 ? "lg:mt-20" : ""
      } ${
        isGradient
          ? "border-transparent [background:linear-gradient(90deg,#FF6B35_0%,#FFA84B_100%)]"
          : "border border-slate-200 bg-white"
      }`}
    >
      <div
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 ${
          isGradient
            ? "bg-white/15 text-white"
            : "bg-orange-50 text-orange-600"
        }`}
      >
        <fuel.Icon className="h-4.5 w-4.5" />
      </div>
      <h3
        className={`mt-3 text-lg md:text-xl font-extrabold transition-colors duration-200 ${
          isGradient ? "!text-white" : "!text-slate-900"
        }`}
      >
        {fuel.name}
      </h3>
      <p
        className={`mt-1.5 text-sm transition-colors duration-200 ${
          isGradient ? "text-white/90" : "text-slate-600"
        }`}
      >
        {fuel.detail}
      </p>
      <Link
        href="/contact"
        className={`mt-4 inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-sm font-semibold transition-all duration-200 underline-offset-4 ${
          isGradient ? "text-white" : "text-orange-600"
        }`}
      >
        Order Now
        <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`} />
      </Link>
    </div>
  )};

  return (
    <section className="bg-slate-50 py-12 md:py-14">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
          <div className="sm:col-span-2 lg:col-span-2 text-center lg:text-left lg:pr-4">
            <p className="eyebrow text-orange-600">Fuel Sales</p>
            <h2 className="h2 mt-3 text-slate-900 max-w-xl mx-auto lg:mx-0">
              Fuels You Can Order Today
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Choose from gasoline, diesel, biodiesel, E85, and DEF with dependable
              branded supply and responsive operational support.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Order Fuel
              </Link>
            </div>
          </div>

          {fuels.map((fuel, idx) => renderCard(fuel, idx))}
        </div>
      </div>
    </section>
  );
}