"use client";

import Image from "next/image";

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
    <section className="bg-white pb-16 sm:pb-20">
      {/* Part 2: Logo Marquee - Full Width */}
      <div className="relative overflow-hidden mb-6 md:mb-8 w-full">
        <div className="flex animate-marquee w-max">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.alt}-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
              <div className="h-20 w-44 flex items-center justify-center">
                <Image
                  src={`/partners/${partner.file}`}
                  alt={partner.alt}
                  width={120}
                  height={48}
                  className="h-16 w-auto object-contain filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Text Section */}
        <div className="text-center mb-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-[0.06em] leading-tight text-[#101828]">
            Trusted by Leading Companies Globally
          </h2>
        </div>

        {/* Part 3: CTA Button */}
        <div className="flex items-center justify-center">
          <button className="btn-orange-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto">
            <span>Ready to Join Us</span>
          </button>
        </div>

      </div>
    </section>
  );
}