"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

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
    <section className="bg-white py-16 sm:py-20">
      <div className="w-full px-0">
        
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies Globally
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of leading companies that trust our platform for their fuel distribution and fleet management needs.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden mb-12 w-full">
          <div className="flex animate-marquee w-max">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.alt}-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                <div className="h-20 w-44 flex items-center justify-center">
                  <Image
                    src={`/partners/${partner.file}`}
                    alt={partner.alt}
                    width={120}
                    height={48}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-orange-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto">
            <span>Ready to Join Them?</span>
          </button>
          <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5" />
            Talk with our Team
          </button>
        </div>

      </div>
    </section>
  );
}