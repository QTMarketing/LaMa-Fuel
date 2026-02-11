"use client";
import Image from "next/image";
import {
  FireIcon,
  TruckIcon,
  CogIcon,
  StarIcon,
  BeakerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
export default function FuelsWeProvide() {
  const fuels = [
    {
      name: "Gasoline",
      description: "For retail stations and commercial fleets.",
      icon: FireIcon,
      image: "/photos/pump3.jpg",
    },
    {
      name: "On-Road Diesel",
      description: "Ultra-low sulfur for commercial trucks.",
      icon: TruckIcon,
      image: "/commitment/4.jpg",
    },
    {
      name: "Biodiesel",
      description: "A sustainable, renewable diesel alternative.",
      icon: FireIcon,
      image: "/commitment/2.jpg",
    },
    {
      name: "Off-Road Diesel",
      description: "For agriculture and construction machinery.",
      icon: CogIcon,
      image: "/commitment/3.jpg",
    },
    {
      name: "E85 (Ethanol Blend)",
      description: "A high-performance, lower-emission blend.",
      icon: StarIcon,
      image: "/photos/pump12.jpg",
    },
    {
      name: "DEF",
      description: "Essential for modern diesel emission systems.",
      icon: BeakerIcon,
      image: "/features/support.jpg",
    },
    {
      name: "Ethanol",
      description: "Pure and blended for various fuel applications.",
      icon: GlobeAltIcon,
      image: "/features/section-bg.jpg",
    },
  ];

  return (
    <section id="fuel-we-provide" className="bg-slate-50 py-16 md:py-20">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Fuels</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">Fuel We Provide</h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            A concise overview of the fuel types we supply for retail, fleet, and commercial operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fuels.map((fuel, i) => {
            const IconComponent = fuel.icon;
            return (
              <div
                key={i}
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={fuel.image}
                    alt={fuel.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                </div>
                <div className="px-5 py-4 text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mx-auto">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="mt-3 text-[18px] md:text-[22px] font-bold text-slate-900">
                    {fuel.name}
                  </h4>
                  <p className="mt-1.5 text-sm md:text-base text-slate-600 leading-relaxed">
                    {fuel.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

