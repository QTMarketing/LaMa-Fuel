"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full h-[420px] md:h-[520px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/mission-image.jpg" alt="Modern fuel storage tanks and pipelines for LaMa Fuel" width={900} height={600} className="w-full h-full object-cover" unoptimized />
            </div>
            <div>
                <span className="bg-primary-gradient/10 text-primary-gradient text-xs font-bold px-3 py-1 rounded-full">ABOUT</span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6 section-title">Company history and mission statement.</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                    Mastering the art of distribution involves more than just maintaining supply; it’s about cultivating a sense of pride and reliability. Consistent service reflects attention to detail and significantly impacts customer confidence.
                </p>
                <button className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
                    Learn More
                </button>
            </div>
        </div>
    </section>
  );
}


