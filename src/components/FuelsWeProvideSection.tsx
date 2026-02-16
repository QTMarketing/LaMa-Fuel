"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FuelsWeProvideSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="bg-white pt-12 md:pt-16 pb-0">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="eyebrow text-orange-500">Our Solutions</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 text-slate-900">
            Fuel Solutions
          </h2>
        </div>

        {/* LaMa Fuel - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200">
            <Image
              src="/photos/pump13.jpg"
              alt="LaMa Fuel supply"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-8">
            <div className="h-1 w-10 bg-orange-500 rounded-full" />
            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-900">
              LaMa Fuel
            </h3>
            <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
              Unbranded fuel supply built for flexibility, higher margins, and full pricing control. 
              Designed for operators who want brand-level reliability without franchise fees or long-term lock-ins.
            </p>
            <div className="mt-6">
              <Link href="/solutions/unbranded" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Branded Fuel - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="h-1 w-10 bg-orange-500 rounded-full" />
            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-900">
              Branded Fuel
            </h3>
            <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
              Access national brands, image programs, and loyalty tools with local operational support. 
              Partner with trusted fuel brands while maintaining operational flexibility.
            </p>
            <div className="mt-6">
              <Link href="/solutions/branded" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200 order-1 lg:order-2">
            <Image
              src="/photos/pump12.jpg"
              alt="Branded fuel supply"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Partners Logo Marquee - Full Width, No Title */}
      <div className="mt-4 pt-8 pb-8 border-b border-gray-200">
        <div 
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredIndex(null);
          }}
        >
          <div 
            className={`flex items-center gap-6 w-max ${isHovered ? '' : 'animate-marquee'}`}
          >
            {[
              { file: "mobil.jpg", alt: "Mobil", url: "https://www.mobil.com/en" },
              { file: "exxon.jpg", alt: "Exxon", url: "https://www.exxonmobilchemical.com/en" },
              { file: "chevron.jpg", alt: "Chevron", url: "https://www.chevron.com/" },
              { file: "citgo.jpg", alt: "Citgo", url: "https://www.citgo.com/" },
              { file: "phillips.jpg", alt: "Phillips 66", url: "https://www.phillips66.com/" },
              { file: "sunoco.jpg", alt: "Sunoco", url: "https://www.sunoco.com/" },
              { file: "texco.jpg", alt: "Texaco", url: "https://www.sunoco.texaco/" },
              { file: "alon-asf.jpg", alt: "Alon ASF", url: "https://alonfuel.com/" },
              { file: "mobil.jpg", alt: "Mobil", url: "https://www.mobil.com/en" },
              { file: "exxon.jpg", alt: "Exxon", url: "https://www.exxonmobilchemical.com/en" },
              { file: "chevron.jpg", alt: "Chevron", url: "https://www.chevron.com/" },
              { file: "citgo.jpg", alt: "Citgo", url: "https://www.citgo.com/" },
              { file: "phillips.jpg", alt: "Phillips 66", url: "https://www.phillips66.com/" },
              { file: "sunoco.jpg", alt: "Sunoco", url: "https://www.sunoco.com/" },
              { file: "texco.jpg", alt: "Texaco", url: "https://www.sunoco.texaco/" },
              { file: "alon-asf.jpg", alt: "Alon ASF", url: "https://alonfuel.com/" },
            ].map((partner, index) => {
              const uniqueId = `${partner.alt}-${index}`;
              return (
                <div 
                  key={uniqueId}
                  className="flex-shrink-0 flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                >
                  <div className="h-20 w-56 flex items-center justify-center">
                    <Link
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={`/partners/${partner.file}`}
                        alt={partner.alt}
                        width={220}
                        height={80}
                        className={`h-20 w-auto object-contain transition-all duration-200 ${
                          hoveredIndex === index 
                            ? 'filter-none opacity-100' 
                            : 'filter grayscale opacity-80'
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
