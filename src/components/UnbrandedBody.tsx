"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeDollarSign, Gauge, Brush, Star } from "lucide-react";

export default function UnbrandedBody() {
  return (
    <div className="flex flex-col">

      {/* Why choose LaMa Fuel - split cards with images */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-extrabold text-[#FF6B35] text-center why-choose-heading">Why choose LaMa Fuel</h2>
          <p className="mt-3 text-center text-gray-600 max-w-3xl mx-auto">Independent doesn't mean alone—get modern tools, support, and supply strength.</p>

          <div className="mt-12 space-y-8">
            {[
              { title: "Margin Control", text: "Stay nimble with price flexibility, direct supplier access, and real-time controls to protect profits.", image: "/features/increase-profit.jpg", Icon: BadgeDollarSign },
              { title: "Operational Visibility", text: "Real-time dashboards and alerts to spot anomalies, reduce shrink, and optimize deliveries.", image: "/features/section-bg.jpg", Icon: Gauge },
              { title: "Marketing Freedom", text: "Run promos tailored to your market—fast updates across price signs and forecourt signage.", image: "/features/support.jpg", Icon: Brush },
              { title: "Scalable Support", text: "Tap into LaMa's logistics, analytics, and card programs as you grow—without brand constraints.", image: "/features/setup.jpg", Icon: Star },
            ].map((c, idx) => {
              const IconComponent = c.Icon;
              return (
              <div key={c.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch rounded-2xl bg-white p-6 md:p-8 shadow-md ring-1 ring-gray-200 transition hover:shadow-lg`}>
                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-[#FF6B35] flex-shrink-0" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 m-0 leading-none">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">{c.text}</p>
                </div>
                <div className={`relative h-56 md:h-64 w-full overflow-hidden rounded-xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image src={c.image} alt={c.title} fill className="object-cover" />
                  <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison - reuse same layout as branded page (assumed present in page import) */}
    </div>
  );
}


