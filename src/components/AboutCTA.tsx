"use client";

import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-white py-16">
      <div className="site-container">
        <div className="rounded-2xl bg-orange-gradient px-8 py-10 text-center text-white shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold">
            Join Our Journey Towards Energy Reliability
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Whether you’re an independent station or a large industrial consumer,
            we deliver reliable unbranded supply with transparent support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-secondary bg-white text-orange-600 border-white">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


