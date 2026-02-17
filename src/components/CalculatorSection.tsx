"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function CalculatorSection() {
  const [gallons, setGallons] = useState<string>("");
  const [fuelMargin, setFuelMargin] = useState<string>("");
  const [insideSales, setInsideSales] = useState<string>("");

  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
            Estimate your supply impact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Enter monthly gallons and inside sales for an illustrative comparison.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-6 sm:p-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Monthly fuel gallons</label>
              <input
                type="number"
                inputMode="numeric"
                value={gallons}
                onChange={(e) => setGallons(e.target.value)}
                placeholder="e.g. 120,000"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Avg fuel margin (¢/gal)</label>
              <input
                type="number"
                inputMode="numeric"
                value={fuelMargin}
                onChange={(e) => setFuelMargin(e.target.value)}
                placeholder="e.g. 18"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Inside sales & margin (%)</label>
              <input
                type="number"
                inputMode="numeric"
                value={insideSales}
                onChange={(e) => setInsideSales(e.target.value)}
                placeholder="e.g. 12"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
              />
            </div>
          </div>

          {/* Outputs preview */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500">Unbranded Fuel Supply</div>
              <div className="mt-1 text-2xl font-extrabold text-gray-900">
                $
                <AnimatedNumber to={24800} />
                /mo
              </div>
              <div className="mt-1 text-xs text-gray-500">Higher CPG margin; full price control</div>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500">Branded Fuel</div>
              <div className="mt-1 text-2xl font-extrabold text-gray-900">
                $
                <AnimatedNumber to={23100} />
                /mo
              </div>
              <div className="mt-1 text-xs text-gray-500">Optional programs with brand-specific terms</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="btn-orange-gradient text-white px-7 py-3 rounded-md font-semibold hover:opacity-90 active:scale-95 transition inline-block"
            >
              <span>Request Fuel</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


