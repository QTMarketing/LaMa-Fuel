"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden min-h-[50vh] md:min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src="/photos/pump3.jpg"
            alt="Fuel logistics operations"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/45 via-transparent to-black/25" />
        </div>

        <div className="relative site-container min-h-[50vh] md:min-h-[55vh] flex flex-col items-center justify-center text-center text-white">
          <span className="eyebrow inline-flex items-center rounded-full border border-orange-400/50 bg-orange-500/10 px-3 py-1 text-orange-200">
            Established Excellence
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Driving Excellence in{" "}
            <span className="text-orange-300">LaMa Fuel Fuel</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/85 max-w-3xl mx-auto">
            Empowering independent retailers and industrial partners with high‑quality,
            reliable fuel solutions through a modernized supply chain.
          </p>
        </div>
      </div>

      <div className="site-container pb-24 mt-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div className="relative h-[340px] md:h-[420px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="/commitment/2.jpg"
              alt="Fuel storage and distribution"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="eyebrow text-orange-600">Our Mission</p>
            <h2 className="h2 mt-2">
              Fueling the Future with Unwavering Reliability
            </h2>
            <p className="body mt-3">
              At LaMa Fuel, we bridge the gap between heavy industrial refining
              and localized distribution. Our mission is to provide an uninterrupted
              flow of unbranded fuel products that meet the highest industry standards.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">450M+</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wide">
                  Gallons Distributed
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">12</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wide">
                  Active Terminals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


