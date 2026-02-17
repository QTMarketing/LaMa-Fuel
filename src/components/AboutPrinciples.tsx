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
    <section className="section bg-slate-50 core-values">
      <div className="site-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-orange-600">Foundational Pillars</p>
          <h2 className="h2 mt-3 text-slate-900">Our Core Values</h2>
          <p className="body mt-4">
            The principles that shape every decision, partnership, and delivery commitment.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="card p-6 text-center h-full"
              >
                <div className="h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mx-auto">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-base text-slate-600">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


