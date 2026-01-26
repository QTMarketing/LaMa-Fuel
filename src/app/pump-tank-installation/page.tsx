"use client";

import Link from "next/link";
import { Wrench, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function PumpTankInstallationPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] leading-none text-[#101828] mb-6 animate-slide-text">
                Pump &amp; Tank Installation Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                End-to-end installation support designed for safety, compliance, and long-term reliability.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-gradient px-8 py-3 rounded-md text-white font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
              >
                Request a Quote
              </Link>
            </div>

            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Wrench className="w-24 h-24 mx-auto mb-4" />
                <p className="text-sm">Installation Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828]">
              Built for reliability
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Practical, site-ready execution with clear communication at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">
                Safety &amp; Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Processes aligned to reduce risk and support compliant site operations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">
                Clear Timelines
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent scheduling and coordination to minimize operational disruption.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">
                Quality Execution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Installation support designed to last—built for real-world station demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
            Ready to plan an installation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Share your project details and our team will follow up with next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-gradient px-10 py-4 rounded-md text-white font-semibold text-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

