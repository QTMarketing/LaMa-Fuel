"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPinned, Clock4, Truck } from "lucide-react";

export default function DeliveryLogistics() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Supply coverage you can trust</h2>
            <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-2xl">
              Scheduled and on-demand drops, proactive dispatch updates, and wet-stock best practices to prevent runouts.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3 text-gray-900">
              <li className="flex items-center gap-3"><MapPinned className="w-5 h-5 text-[#FF6B35]" /> <span>Regional service areas with flexible schedules</span></li>
              <li className="flex items-center gap-3"><Clock4 className="w-5 h-5 text-[#FF6B35]" /> <span>Transparent dispatch updates</span></li>
              <li className="flex items-center gap-3"><Truck className="w-5 h-5 text-[#FF6B35]" /> <span>On-time drops backed by compliance standards</span></li>
            </ul>

            <div className="mt-8">
              <Link href="/delivery-coverage">
                <button className="btn-orange-gradient text-white px-7 py-3 rounded-md font-semibold hover:opacity-90 active:scale-95 transition">
                  <span>View Coverage</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/delivery/coverage-map.jpg"
              alt="LaMa Fuel tanker delivery coverage"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}


