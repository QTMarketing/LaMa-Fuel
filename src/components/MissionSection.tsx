"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gray-50">
        <div className="site-container grid md:grid-cols-2 gap-16 items-center">
            <div className="column-padding">
                <span className="subheading bg-primary-gradient/10 text-primary-gradient px-3 py-1 rounded-full">ABOUT</span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.04em] leading-tight text-[#101828] section-title">
                  LaMa Fuel supply built for reliability.
                </h2>
                <p className="text-gray-700 mb-8">
                  We focus on dependable supply, compliance-first operations, and responsive support so independent
                  operators can protect margins without sacrificing uptime.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold transition hover:opacity-90 active:scale-95"
                >
                  Learn More
                </a>
            </div>
            <div className="w-full h-[420px] md:h-[520px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/mission-image.jpg" alt="Modern fuel storage tanks and pipelines for LaMa Fuel" width={900} height={600} className="w-full h-full object-cover" unoptimized />
            </div>
        </div>
    </section>
  );
}


