"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Driving Energy for Everyday Life
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          We’re redefining how businesses manage fuel, with smart tools, reliable data, and trusted guidance.
        </p>
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <Image src="/about-hero.jpg" alt="The LaMa Fuel team of professional delivery drivers" width={1200} height={500} className="w-full h-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  );
}


