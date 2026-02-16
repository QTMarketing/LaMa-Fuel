"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Higher Margins",
    description: "Keep full pricing control and capture more margin without franchise fees.",
    image: "/photos/pump12.jpg",
    href: "/fuel-solutions",
  },
  {
    title: "Flexible Supply",
    description: "Choose the supply model that fits your volume and growth goals.",
    image: "/photos/new/store4.png",
    href: "/fuel-solutions",
  },
  {
    title: "Reliable Delivery",
    description: "Consistent delivery schedules with proactive dispatch updates.",
    image: "/photos/pump13.jpg",
    href: "/delivery",
  },
  {
    title: "No Franchise Fees",
    description: "Operate independently without brand constraints or franchise costs.",
    image: "/photos/new/store7.png",
    href: "/solutions/unbranded",
  },
];

export default function FuelSolutionsCarousel() {
  return (
    <section className="bg-slate-50 section">
      <div className="site-container">
        {/* Title and Description Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="eyebrow text-orange-500">Essential</p>
          <h2 className="h2 mt-3 whitespace-nowrap">
            What Makes LaMa Fuel Different
          </h2>
          <p className="body mt-4">
            We build fuel for those who refuse shortcuts. Every gallon meets the highest standards of purity and performance.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2" style={{ scrollSnapType: "x mandatory" }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="card flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative h-52 md:h-56 overflow-hidden bg-gray-100 ring-1 ring-orange-200/40">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="px-6 pt-4 pb-6 text-center">
                <h3 className="h3 text-orange-500">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-slate-500 inline-flex items-center gap-2 justify-center w-full">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-slate-300">↔</span>
          <span>Scroll for more</span>
        </div>

      </div>
    </section>
  );
}


