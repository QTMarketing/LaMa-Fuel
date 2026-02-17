"use client";

import Image from "next/image";
import { BadgeDollarSign, Brush, Gauge, Star } from "lucide-react";

const items = [
  {
    title: "Brand Recognition",
    text: "National brand visibility can increase repeat traffic where brand preference is strong.",
    Icon: Gauge,
    image: "/features/brand-recognition.jpg",
  },
  {
    title: "Image Standards",
    text: "Optional image standards and upgrade pathways improve curb appeal and customer confidence.",
    Icon: Brush,
    image: "/features/support.jpg",
  },
  {
    title: "Program Support",
    text: "Eligible locations may qualify for support tied to upgrades, launch activities, and growth plans.",
    Icon: BadgeDollarSign,
    image: "/features/increase-profit.jpg",
  },
  {
    title: "Loyalty Platforms",
    text: "Brand-linked loyalty tools can increase repeat visits through points, offers, and retention campaigns.",
    Icon: Star,
    image: "/features/setup.jpg",
  },
];

export default function BrandedBenefitsSection() {
  const [hero, ...rest] = items;
  const HeroIcon = hero.Icon;

  return (
    <section className="bg-white pt-12 pb-16">
      <div className="site-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-orange-600">Why Branded</p>
          <h2 className="h2 mt-3 text-slate-900">What Branded Partnership Improves</h2>
          <p className="body mt-3">
            Access national brand programs while keeping operational responsiveness and execution discipline.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              Outcome-focused value
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Build stronger retail performance without losing operational control.
            </h3>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Deploy branding, loyalty, and presentation upgrades with structured support for compliance, supply,
              and execution quality.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-[#FF6B35] text-xl font-bold">+20%</div>
                <div className="text-xs text-slate-500">Curb Appeal Lift</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-[#FF6B35] text-xl font-bold">National</div>
                <div className="text-xs text-slate-500">Program Access</div>
              </div>
            </div>
          </div>

          <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
            <Image src={hero.image} alt={hero.title} fill className="object-cover" />
            <div className="absolute top-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35] shadow-sm">
              <HeroIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((c) => {
            const IconComponent = c.Icon;
            return (
              <div key={c.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35]">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
