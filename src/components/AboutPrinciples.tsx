"use client";

import {
  EyeIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const principles = [
  {
    title: "Transparency",
    description: "No hidden fees. Just honest tools for your needs.",
    icon: EyeIcon,
  },
  {
    title: "Security First",
    description: "Your trust is our foundation.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Empowerment",
    description:
      "We design every feature to help you make smarter decisions.",
    icon: BoltIcon,
  },
  {
    title: "Innovation",
    description: "Driven by data, shaped by your needs.",
    icon: SparklesIcon,
  },
];

export default function AboutPrinciples() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-[0.06em] leading-tight text-[#101828] text-center mb-12">
          Built on Principles That Matter
        </h2>
        <div className="grid md:grid-cols-[1.2fr_1.8fr] gap-8 lg:gap-12 items-center">
          {/* Left: 2x2 Grid of Hover Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white text-[#101828] border border-gray-200 rounded-lg shadow-sm px-2.5 py-2 flex flex-col gap-1 transition-transform transition-shadow hover:-translate-y-1 hover:shadow-lg hover:border-orange-400"
                >
                  <div className="flex flex-col items-center gap-1 text-center mt-1">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-600 mx-auto">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h4 className="font-semibold text-[12px] md:text-sm uppercase tracking-wide text-orange-gradient">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[12px] md:text-[13px] leading-tight text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Right: Video Player */}
          <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-2xl shadow-md overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/principles-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}


