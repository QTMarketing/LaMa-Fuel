"use client";
import { 
  FireIcon, 
  TruckIcon, 
  CogIcon, 
  BoltIcon, 
  StarIcon, 
  WrenchIcon, 
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
    { name: "Kerosene", description: "Clean-burning for heating and industrial use.", icon: BoltIcon },
    { name: "E85 (Ethanol Blend)", description: "A high-performance, lower-emission blend.", icon: StarIcon },
    { name: "Lubricants", description: "Premium oils to protect your engines.", icon: WrenchIcon },
    { name: "DEF", description: "Essential for modern diesel emission systems.", icon: BeakerIcon },
    { name: "Ethanol", description: "Pure and blended for various fuel applications.", icon: GlobeAltIcon },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 text-center lg:text-left">
          <span className="bg-primary-gradient/10 text-primary-gradient text-xs font-bold px-3 py-1 rounded-full">FUELS</span>
          <h2 className="text-4xl font-bold text-dark mt-4 mb-4">Fuels We Provide</h2>
          <p className="text-gray-600 mb-8">A descriptive paragraph that tells clients how good you are and proves that they've made the right choice.</p>
          <Link href="/contact">
            <button className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"><span>Schedule a Service</span></button>
          </Link>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {fuels.map((fuel, i) => {
              const IconComponent = fuel.icon;
              return (
                <div key={i} className="group fuel-card bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center h-48 flex flex-col justify-center items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                  <IconComponent className="w-8 h-8 text-[#FF6B35] mb-3 transition-colors group-hover:text-white" />
                  <h4 className="font-semibold text-dark text-lg mb-1 transition-colors group-hover:text-white">{fuel.name}</h4>
                  <p className="text-xs text-gray-500 transition-colors group-hover:text-white/80">{fuel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

