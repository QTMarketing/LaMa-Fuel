"use client";

import Link from "next/link";
import { MapPinned, ShieldCheck, Truck } from "lucide-react";

export default function IncentivesHighlight() {
  return (
    <section className="w-full bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Supply Network &amp; Coverage
        </div>
        <h2 className="text-slate-900 text-[26px] sm:text-[32px] md:text-[38px] font-extrabold leading-tight tracking-tight whitespace-normal break-words">
          Operational proof you can count on.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
          Consistent delivery, transparent dispatch updates, and compliance-first processes designed to keep your site stocked and
          running without disruption.
        </p>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <li className="flex items-center justify-center gap-3 text-slate-700 text-[14px] sm:text-[16px] font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <MapPinned className="w-5 h-5 text-[#FF6B35]" />
            </span>
            <span>Regional coverage and flexible schedules</span>
          </li>
          <li className="flex items-center justify-center gap-3 text-slate-700 text-[14px] sm:text-[16px] font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <Truck className="w-5 h-5 text-[#FF6B35]" />
            </span>
            <span>On-time drops with proactive dispatch updates</span>
          </li>
          <li className="flex items-center justify-center gap-3 text-slate-700 text-[14px] sm:text-[16px] font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
            </span>
            <span>Compliance-first operations and safety support</span>
          </li>
        </ul>

        <div className="mt-10">
          <Link
            href="/delivery-coverage"
            className="inline-flex items-center justify-center rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
          >
            View Coverage
          </Link>
        </div>
      </div>
    </section>
  );
}


