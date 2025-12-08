"use client";

import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-[0.06em] leading-tight text-[#101828] mb-4">
          Partner with LaMa Fuel Today
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Learn how we can help improve your fleet's efficiency, reduce costs, and prevent fuel losses.
        </p>
        <Link href="/brand-application" className="bg-primary-gradient text-white px-10 py-4 rounded-md font-semibold text-lg hover:opacity-90 active:scale-95 transition inline-block">
          <span>Join Us</span>
        </Link>
      </div>
    </section>
  );
}


