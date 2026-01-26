"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const cards = [
  {
    title: "Fuel Solutions",
    subtitle: "Fuel solutions overview",
    description:
      "See all LaMa Fuel programs in one place—from unbranded supply to branded options.",
    image: "/commitment/Lama.jpg",
    href: "/fuel-solutions",
    cta: "View Details",
  },
  {
    title: "Pump & Tank Installation",
    subtitle: "Pump and tank installation services",
    description:
      "Install with confidence—safe, compliant setup built for long-term reliability.",
    image: "/commitment/efficiency.jpg",
    href: "/pump-tank-installation",
    cta: "View Details",
  },
  {
    title: "Fuel Delivery",
    subtitle: "Delivery trucks and coverage map",
    description:
      "Dependable delivery with clear communication and fast issue resolution.",
    image: "/commitment/4.jpg",
    href: "/delivery",
    cta: "View Details",
  },
  {
    title: "Maintenance",
    subtitle: "Equipment maintenance and support",
    description:
      "Comprehensive maintenance services to keep your fuel equipment running smoothly and efficiently.",
    image: "/features/support.jpg",
    href: "/maintenance",
    cta: "View Details",
  },
];

export default function FuelSolutionsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.card-item')?.clientWidth || 0;
      const gap = 32; // gap-8 = 2rem = 32px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.card-item')?.clientWidth || 0;
      const gap = 32; // gap-8 = 2rem = 32px
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8">
        {/* Title and Description Section */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-4">
            Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Discover the core services LaMa Fuel provides to support your operation—from fuel solutions and
            installation to dependable delivery and maintenance.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          className="bg-gray-50 border-[0.5px] border-gray-300/75 rounded-2xl p-6 md:p-8 lg:p-10 relative"
          style={{ boxShadow: 'inset 0 2px 8px 4px rgba(0, 0, 0, 0.045), inset 0 0 0 0.5px rgba(0, 0, 0, 0.0375)' }}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 lg:gap-10 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="card-item group bg-white flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={card.image}
                    alt={card.subtitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center mb-4 flex-1">
                    {card.description}
                  </p>
                  <div className="text-center pb-2 w-full">
                    <Link
                      href={card.href}
                      className="inline-flex items-center justify-center bg-orange-gradient w-full px-10 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm hover:opacity-90 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 no-underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={scrollLeft}
              className="p-2 bg-white rounded-full shadow-md hover:bg-orange-gradient hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent group"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-white rounded-full shadow-md hover:bg-orange-gradient hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent group"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


