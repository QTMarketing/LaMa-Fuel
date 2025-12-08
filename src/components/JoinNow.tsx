"use client";
import Link from "next/link";

export default function JoinNow() {
  return (
    <section className="py-20 bg-white text-center">
      <p className="text-xl md:text-22xl text-dark max-w-3xl mx-auto mb-6">
        LaMa Fuel isn’t just another distributor — it’s a smarter way to manage and protect your fleet expenses.
      </p>
      <Link href="/brand-application" className="bg-primary-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 active:scale-95 transition inline-block">
        <span>Join Now</span>
      </Link>
    </section>
  );
}


