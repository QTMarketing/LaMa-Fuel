"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] mb-6 animate-rise-text">
          Driving Energy for Everyday Life
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          We’re redefining how businesses manage fuel, with smart tools, reliable data, and trusted guidance.
        </p>
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <Image src="/about-hero.jpg" alt="The LaMa Fuel team of professional delivery drivers" width={1200} height={500} className="w-full h-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  );
}


