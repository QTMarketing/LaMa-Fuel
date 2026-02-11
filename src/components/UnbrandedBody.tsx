"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeDollarSign, Gauge, Brush, Star } from "lucide-react";

export default function UnbrandedBody() {
  return (
    <div className="flex flex-col">

      {/* Why choose LaMa Fuel - stacked cards over images */}
      <section className="relative bg-[#F8FAFC] pt-20 pb-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="dots-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#CBD5E1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-grid)" />
          </svg>
        </div>

        <div className="relative site-container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-[#FF6B35] px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              The Logistics Advantage
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Why Choose <span className="text-[#FF6B35]">LaMa Fuel</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Independent doesn't mean alone. We provide the modern tools, strategic support,
              and supply strength you need to lead the market.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                Margin + Control + Visibility
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Operational clarity that protects your margins.
              </h3>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                We pair reliable unbranded supply with real-time visibility, smarter pricing controls, and
                logistics coverage that scales with your portfolio.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[#FF6B35] text-xl font-bold">24/7</div>
                  <div className="text-xs text-slate-500">Live Monitoring</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[#FF6B35] text-xl font-bold">15%</div>
                  <div className="text-xs text-slate-500">Avg. Shrink Reduction</div>
                </div>
              </div>
            </div>
            <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
              <Image src="/features/section-bg.jpg" alt="Operational visibility" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Margin Control",
                text: "Dynamic pricing tools and direct supplier access without franchise fees.",
                Icon: BadgeDollarSign,
              },
              {
                title: "Operational Visibility",
                text: "Real-time dashboards to reduce shrink and optimize delivery.",
                Icon: Gauge,
              },
              {
                title: "Marketing Freedom",
                text: "Local promo control and rapid price sign updates.",
                Icon: Brush,
              },
              {
                title: "Scalable Support",
                text: "Fast onboarding and dedicated account guidance as you grow.",
                Icon: Star,
              },
            ].map((c) => {
              const IconComponent = c.Icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center text-xs uppercase tracking-widest text-gray-400">
            Trusted by independent operators nationwide
          </div>
        </div>
      </section>

      {/* Comparison - reuse same layout as branded page (assumed present in page import) */}
    </div>
  );
}


