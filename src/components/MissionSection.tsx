"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-14 md:py-16 bg-white">
        <div className="site-container grid md:grid-cols-2 gap-16 items-center">
            <div className="column-padding">
                <span className="subheading bg-primary-gradient/10 text-primary-gradient px-3 py-1 rounded-full">ABOUT</span>
                <h2 className="h2 mt-4 text-[#101828] section-title">
                  Fuel Supply Built for Reliability
                </h2>
                <p className="text-gray-700 mt-4 mb-8">
                  We combine dependable supply, compliance-first operations, and
                  responsive support so independent operators can protect margins
                  without risking uptime.
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


