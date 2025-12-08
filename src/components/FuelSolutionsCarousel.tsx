"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Fuel Solutions",
    subtitle: "Fuel solutions overview",
    description:
      "See all LaMa Fuel programs in one place—from unbranded supply to branded options.",
    image: "/features/increase-profit.jpg",
    href: "/solutions/unbranded",
    cta: "View Details",
  },
  {
    title: "Delivery",
    subtitle: "Delivery trucks and coverage map",
    description:
      "Review our delivery footprint and access your QuickTrack logistics portal.",
    image: "/delivery/coverage-map.jpg",
    href: "/delivery",
    cta: "View Details",
  },
  {
    title: "Brand Programs",
    subtitle: "Major fuel brand logos",
    description:
      "Explore branded fuel options with partners like Exxon, Mobil, Chevron, and more.",
    image: "/partners/chevron.jpg",
    href: "/solutions/branded",
    cta: "View Details",
  },
];

export default function FuelSolutionsCarousel() {

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8">
        {/* Title and Description Section */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-4">
            Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Discover the core services LaMa Fuel offers to grow your business—from flexible supply
            and reliable delivery to national brand programs, fuel card solutions, and a simple path
            to get started.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          className="border-[0.5px] border-gray-300/75 rounded-2xl p-6 md:p-8 lg:p-10"
          style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.045), inset 0 0 0 0.5px rgba(0, 0, 0, 0.0375)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group bg-white flex flex-col hover:shadow-lg transition-shadow duration-300 p-6"
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
                  <div className="text-center pb-2">
                    <Link
                      href={card.href}
                      className="inline-flex items-center justify-center bg-orange-gradient px-10 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm hover:opacity-90 active:scale-95 transition-all no-underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


