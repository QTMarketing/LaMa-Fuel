"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-10 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] mb-3 animate-rise-text">
          Driving Energy for Everyday Life
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4"></p>
        <div className="-mt-16 w-full h-[420px] md:h-[520px] lg:h-[600px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <Image src="/photos/pump3.jpg" alt="LaMa Fuel hero image" width={1200} height={500} className="w-full h-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  );
}


