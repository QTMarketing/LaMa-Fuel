"use client";

import Image from "next/image";
import Link from "next/link";

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
  const fuels = [
    { name: "Gasoline", icon: "⛽" },
    { name: "On‑Road Diesel", icon: "🚛" },
    { name: "Off‑Road Diesel", icon: "🛠️" },
    { name: "Biodiesel", icon: "🌿" },
    { name: "E85 (Ethanol Blend)", icon: "⚡" },
    { name: "DEF", icon: "🧪" },
  ];

  return (
    <section className="bg-orange-gradient py-12 md:py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Side - Title (Centered) */}
          <div className="lg:pr-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight !text-white" 
              style={{ color: '#ffffff', opacity: 1, visibility: 'visible' }}
            >
              Fuel We Provide
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/90">
              A reliable mix of unbranded fuels engineered for performance, compliance, and availability.
            </p>
          </div>

          {/* Right Side - Cards Grid (2 per row, smaller) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fuels.map((fuel) => (
              <div
                key={fuel.name}
                className="group fuel-card-title rounded-xl border border-white/20 bg-white overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-4 flex flex-col bg-white min-h-[140px] justify-between">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-2">{fuel.icon}</div>
                    <h3 
                      className="text-lg md:text-xl font-extrabold !text-black mb-3 text-center" 
                      style={{ color: '#000000' }}
                    >
                      {fuel.name}
                    </h3>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-auto btn-orange-gradient text-white hover:opacity-90 px-3 py-2 rounded-md font-semibold w-full text-center transition text-xs"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}