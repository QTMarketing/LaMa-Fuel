"use client";

import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Partner with LaMa Fuel Today
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Learn how we can help improve your fleet’s efficiency, reduce costs, and prevent fuel losses.
        </p>
        <button onClick={() => window.dispatchEvent(new Event("open-brand-app"))} className="bg-primary-gradient text-white px-10 py-4 rounded-md font-semibold text-lg hover:opacity-90 active:scale-95 transition">
          <span>Join Us</span>
        </button>
      </div>
    </section>
  );
}


