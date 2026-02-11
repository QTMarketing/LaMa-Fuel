"use client";

import Image from "next/image";

const features = [
  {
    title: "Higher Margin Potential",
    description: "Keep full pricing control and capture more margin without franchise fees or brand pricing constraints.",
  },
  {
    title: "Flexible Supply Terms",
    description: "Choose the supply model that fits your volume and growth goals, with options tailored to your market.",
  },
  {
    title: "Reliable, On-Time Drops",
    description: "Consistent delivery schedules with proactive dispatch updates so you can avoid runouts and stay stocked.",
  },
  {
    title: "Faster Onboarding",
    description: "Streamlined setup with a dedicated team focused on compliance, safety, and operational readiness.",
  },
];

export default function WhyBrandSection() {
  return (
    <section id="why-unbranded" className="relative overflow-hidden bg-[#F8F9FB] mt-0">
      <div className="relative z-0">
        <div className="sticky top-0 h-[40vh] w-full">
          <Image
            src="/photos/pump2.jpg"
            alt="Fuel supply network"
            fill
            className="object-cover animate-slow-zoom opacity-80"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/60 via-transparent to-black/35" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6 text-white">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                More Than Just Fuel
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                When you’re on the road, you need more than just supply. We support your locations with
                reliable service, responsive dispatch, and the operational tools that keep customers moving.
              </p>
              <div className="mt-6">
                <a href="/contact" className="btn-primary">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}