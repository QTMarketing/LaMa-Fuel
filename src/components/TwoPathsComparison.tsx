"use client";

import Link from "next/link";
import { BadgeDollarSign, Gauge } from "lucide-react";

export default function TwoPathsComparison() {
  return (
    <section className="w-full bg-orange-gradient py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-10">Choose your profit path</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: LaMa Fuel */}
          <div className="group relative rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-8 flex flex-col items-center justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-md min-h-[360px]">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#FF6B35]">
                <BadgeDollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">LaMa Fuel</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 text-left max-w-xs">
                <li>• Higher CPG margin potential</li>
                <li>• Full price & promo control</li>
                <li>• Your image, your brand</li>
                <li>• Backed by our reliable delivery</li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/solutions/unbranded">
                <button className="btn-orange-gradient text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 active:scale-95 transition min-w-[200px]">
                  <span>Explore LaMa Fuel</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Branded Fuel */}
          <div className="group relative rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-8 flex flex-col items-center justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-md min-h-[360px]">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#FF6B35]">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Branded Fuel</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 text-left max-w-xs">
                <li>• Brand-loyal traffic + national marketing</li>
                <li>• Modern image package & standards</li>
                <li>• Loyalty programs that drive repeat visits</li>
                <li>• We manage brand setup + ongoing supply</li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/solutions/branded">
                <button className="btn-orange-gradient text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 active:scale-95 transition min-w-[200px]">
                  <span>Explore Branded Fuel</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


