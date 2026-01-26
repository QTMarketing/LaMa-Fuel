"use client";
import { 
  FireIcon, 
  TruckIcon, 
  CogIcon, 
  StarIcon, 
  BeakerIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function FuelsWeProvide() {
  const fuels = [
    { name: "Gasoline", description: "For retail stations and commercial fleets.", icon: FireIcon },
    { name: "On-Road Diesel", description: "Ultra-low sulfur for commercial trucks.", icon: TruckIcon },
    { name: "Biodiesel", description: "A sustainable, renewable diesel alternative.", icon: FireIcon },
    { name: "Off-Road Diesel", description: "For agriculture and construction machinery.", icon: CogIcon },
    { name: "E85 (Ethanol Blend)", description: "A high-performance, lower-emission blend.", icon: StarIcon },
    { name: "DEF", description: "Essential for modern diesel emission systems.", icon: BeakerIcon },
    { name: "Ethanol", description: "Pure and blended for various fuel applications.", icon: GlobeAltIcon },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 text-center lg:text-left">
          <span className="bg-primary-gradient/10 text-primary-gradient text-xs font-bold px-3 py-1 rounded-full">FUELS</span>
          <h2 className="font-heading font-bold text-4xl tracking-[0.06em] leading-tight text-[#101828] mt-4 mb-4">Fuel We Provide</h2>
          <p className="text-gray-600 text-lg mb-8">A descriptive paragraph that tells clients how good you are and proves that they've made the right choice.</p>
          <Link href="/delivery">
            <button className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"><span>Ask for Delivery</span></button>
          </Link>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {fuels.map((fuel, i) => {
              const IconComponent = fuel.icon;
              return (
                <div key={i} className="group fuel-card bg-white border border-gray-200 rounded-lg shadow-sm h-40 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-orange-gradient p-4">
                  <IconComponent className="w-8 h-8 text-[#FF6B35] transition-colors group-hover:text-white mb-3" />
                  <h4 className="font-heading font-bold tracking-wider text-[#101828] transition-colors group-hover:text-white mb-2 leading-tight">{fuel.name}</h4>
                  <p className="fuel-card-description text-gray-600 text-sm transition-colors group-hover:text-white leading-snug">{fuel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

