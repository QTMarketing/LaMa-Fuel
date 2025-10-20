"use client";

import Link from "next/link";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Gauge, Brush, BadgeDollarSign, Star, CreditCard, MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function BrandedBody({ showWhy = true }: { showWhy?: boolean }) {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col">
      {/* 1️⃣ Benefits / Features Section */}
      {showWhy && (
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Why go Branded Fuel</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Modern programs that lift traffic, curb appeal, and total profit.</p>

          <div className="mt-12 space-y-8">
            {[
              {
                title: "Traffic & Brand Loyalty",
                text: "Brand-loyal traffic and national advertising to drive repeat visits. With national campaigns, consistent quality, and a trusted badge on your canopy, branded customers make your station a planned stop — not a convenience.",
                Icon: Gauge,
                image: "/features/brand-recognition.jpg",
              },
              {
                title: "Image Upgrades",
                text: "Modern image packages that lift curb appeal and attract customers. Updated canopies, LED price signs, forecourt lighting, and dispenser overlays project a clean, modern look that converts drive-bys into drive-ins.",
                Icon: Brush,
                image: "/features/support.jpg",
              },
              {
                title: "Incentives",
                text: "Eligible sites may qualify for brand support toward image upgrades and marketing. Structured programs help offset capital expenses — so you can upgrade faster, with less out-of-pocket.",
                Icon: BadgeDollarSign,
                image: "/features/increase-profit.jpg",
              },
              {
                title: "Loyalty Platforms",
                text: "Loyalty programs designed to increase repeat visits. Powerful app and card ecosystems drive return traffic with rewards, fuel discounts, and integrated promotions across national networks.",
                Icon: Star,
                image: "/features/setup.jpg",
              },
            ].map((c, idx) => (
              <div
                key={c.title}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch rounded-2xl bg-white p-6 md:p-8 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
              >
                {/* Text */}
                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <c.Icon className="h-6 w-6 text-[#FF6B35]" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">{c.text}</p>
                </div>
                {/* Image */}
                <div className={`relative h-56 md:h-64 w-full overflow-hidden rounded-xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image src={c.image} alt={c.title} fill className="object-cover" />
                  <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="#lead" className="inline-flex items-center gap-2 rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95">
              <span>Check Eligibility</span>
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* 3️⃣ Comparison Section (Optional) */}
      <section className="bg-orange-gradient py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">LaMa Fuel vs Branded Fuel</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "LaMa Fuel",
                rows: [
                  ["Primary goal", "Maximize margin flexibility"],
                  ["Traffic driver", "Price leadership, local marketing"],
                  ["Price flexibility", "High"],
                  ["Image standards", "Flexible"],
                  ["Typical investment", "Lower"],
                  ["Incentives", "None/limited"],
                ],
              },
              {
                title: "Branded Fuel",
                rows: [
                  ["Primary goal", "Increase brand-loyal traffic"],
                  ["Traffic driver", "National brand & loyalty"],
                  ["Price flexibility", "Moderate"],
                  ["Image standards", "Required (brand image)"],
                  ["Typical investment", "Higher (with brand support)"],
                  ["Incentives", "Available for qualified sites"],
                ],
              },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg ring-1 ring-gray-200 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-primary-gradient">{col.title}</h3>
                <div className="mt-4 space-y-3">
                  {col.rows.map(([k, v], i) => (
                    <div key={k} className="flex items-start justify-between gap-6">
                      <span className="text-gray-600">{k}</span>
                      <span className="font-medium text-gray-900">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Social Proof / Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">What operators say</h2>

          <div className="mt-10 space-y-6">
            {/* Row 1 (left -> right) */}
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-4 animate-marquee">
                {[
                  { i: "JS", c: "Dallas, TX", t: "Branding lifted our traffic and inside sales." },
                  { i: "KM", c: "Baton Rouge, LA", t: "Image package made a huge curb appeal difference." },
                  { i: "RT", c: "Phoenix, AZ", t: "Loyalty program keeps customers coming back." },
                  { i: "AL", c: "Orlando, FL", t: "Support through the incentive process was excellent." },
                ].map((x) => (
                  <div key={x.i + x.c} className="min-w-[260px] rounded-xl bg-white p-4 shadow ring-1 ring-gray-200">
                    <div className="text-sm font-semibold text-gray-900">{x.i} · <span className="text-gray-600">{x.c}</span></div>
                    <p className="mt-2 text-gray-700 text-sm">{x.t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 (right -> left) */}
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-4 animate-marquee" style={{ animationDirection: "reverse" }}>
                {[
                  { i: "BN", c: "Mobile, AL", t: "The brand brought new customers we couldn’t reach before." },
                  { i: "CP", c: "El Paso, TX", t: "Great guidance on image standards and timelines." },
                  { i: "DG", c: "San Jose, CA", t: "Incentives helped offset our upgrade costs." },
                  { i: "WF", c: "Tulsa, OK", t: "Smooth process end-to-end with clear communication." },
                ].map((x) => (
                  <div key={x.i + x.c} className="min-w-[260px] rounded-xl bg-white p-4 shadow ring-1 ring-gray-200">
                    <div className="text-sm font-semibold text-gray-900">{x.i} · <span className="text-gray-600">{x.c}</span></div>
                    <p className="mt-2 text-gray-700 text-sm">{x.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


