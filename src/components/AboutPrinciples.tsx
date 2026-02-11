"use client";

import { ShieldCheckIcon, BoltIcon, SparklesIcon } from "@heroicons/react/24/outline";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency, accountability, and trust in every partnership.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Innovation",
    description:
      "We leverage modern logistics and data to keep supply efficient and reliable.",
    icon: BoltIcon,
  },
  {
    title: "Safety",
    description:
      "Compliance-first operations protect our partners, people, and communities.",
    icon: SparklesIcon,
  },
];

export default function AboutPrinciples() {
  return (
    <section className="bg-orange-gradient text-white py-24 core-values">
      <div className="site-container text-center">
        <p className="eyebrow text-orange-200">Foundational Pillars</p>
        <h2 className="text-5xl md:text-6xl font-semibold mt-3 mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="rounded-xl border border-white/30 bg-white p-7 text-left text-slate-900 shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
              >
                <div className="h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mx-auto">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg md:text-xl font-semibold text-slate-900 text-center">
                  {v.title}
                </div>
                <p className="mt-2 text-[17px] !text-slate-900/90 text-center">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


