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
    <section className="bg-white pt-8 pb-4">
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
    <section className="bg-white py-0">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden">
          <div className="relative min-h-[600px] lg:min-h-[700px] bg-[#2B2B2B] flex items-center justify-center">
            <Image
              src="/photos/pump13.jpg"
              alt="Fuel distribution"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-dark text-white p-10 lg:p-14 flex flex-col justify-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-left">Fuel We Provide</h2>
              <p className="mt-3 text-sm md:text-base text-white/70 text-left">
                A reliable mix of unbranded fuels engineered for performance, compliance, and availability.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fuels.map((fuel) => (
                <Link
                  key={fuel.name}
                  href="/solutions/branded#fuel-we-provide"
                  aria-label={`View ${fuel.name} on the Fuels page`}
                  className="group rounded-xl border border-white/15 bg-white/5 px-5 py-5 flex items-center gap-4 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-lg">
                    {fuel.icon}
                  </div>
                  <div className="text-sm md:text-base font-semibold">{fuel.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}