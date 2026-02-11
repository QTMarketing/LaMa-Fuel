"use client";

import Link from "next/link";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Gauge, Brush, BadgeDollarSign, Star, CreditCard, MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function BrandedBody({ showWhy = true }: { showWhy?: boolean }) {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col">
      {/* 1️⃣ Benefits / Features Section */}
      {showWhy && (
      <section className="bg-white !bg-white pt-12 pb-20">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-orange-600">Optional Fuels Programs</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
              Why partner with us?
            </h2>
            <p className="mt-3 text-gray-600">
              If a national brand fits your market, we can support a branded rollout without losing operational focus.
            </p>
          </div>

          {(() => {
            const items = [
              {
                title: "Brand Recognition",
                text: "National marketing and brand awareness can help attract repeat traffic in markets where brand loyalty matters.",
                Icon: Gauge,
                image: "/features/brand-recognition.jpg",
              },
              {
                title: "Image Standards",
                text: "Optional image packages and standards that can improve curb appeal and drive credibility.",
                Icon: Brush,
                image: "/features/support.jpg",
              },
              {
                title: "Program Support",
                text: "Eligible sites may qualify for program support toward upgrades and marketing.",
                Icon: BadgeDollarSign,
                image: "/features/increase-profit.jpg",
              },
              {
                title: "Loyalty Platforms",
                text: "Optional loyalty programs that can increase repeat visits through rewards and discounts.",
                Icon: Star,
                image: "/features/setup.jpg",
              },
            ];
            const [hero, ...rest] = items;
            const HeroIcon = hero.Icon;

            return (
              <>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      Optional national brand rollout
                    </div>
                    <h3 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                      Build brand recognition without sacrificing operational control.
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                      Access national marketing, image upgrades, and loyalty programs while keeping the same responsive
                      supply support and compliance-first execution.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="text-[#FF6B35] text-xl font-bold">+20%</div>
                        <div className="text-xs text-slate-500">Curb Appeal Lift</div>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="text-[#FF6B35] text-xl font-bold">National</div>
                        <div className="text-xs text-slate-500">Brand Programs</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
                    <Image src={hero.image} alt={hero.title} fill className="object-cover" />
                    <div className="absolute top-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35] shadow-sm">
                      <HeroIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {rest.map((c) => {
                    const IconComponent = c.Icon;
                    return (
                      <div
                        key={c.title}
                        className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h4>
                        <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95">
              <span>Discuss Fuels</span>
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* 5️⃣ Social Proof / Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="site-container">
          <h2 className="font-extrabold text-gray-900 text-center text-[34px] md:text-[38px]">What operators say</h2>
        </div>

        <div className="mt-10 space-y-6">
          {/* Row 1 (left -> right) */}
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max gap-4 animate-marquee">
                {[
                  { i: "JS", c: "Dallas, TX", t: "Delivery consistency improved our margins." },
                  { i: "KM", c: "Baton Rouge, LA", t: "Dispatch updates keep our tanks on schedule." },
                  { i: "RT", c: "Phoenix, AZ", t: "Compliance support made onboarding smooth." },
                  { i: "AL", c: "Orlando, FL", t: "Operational support is responsive and clear." },
                ].concat([
                  { i: "JS", c: "Dallas, TX", t: "Delivery consistency improved our margins." },
                  { i: "KM", c: "Baton Rouge, LA", t: "Dispatch updates keep our tanks on schedule." },
                  { i: "RT", c: "Phoenix, AZ", t: "Compliance support made onboarding smooth." },
                  { i: "AL", c: "Orlando, FL", t: "Operational support is responsive and clear." },
                ]).map((x, index) => (
                  <div key={`row1-${x.i}-${x.c}-${index}`} className="min-w-[260px] rounded-xl bg-white p-4 shadow ring-1 ring-gray-200">
                    <div className="text-sm font-semibold text-gray-900">{x.i} · <span className="text-gray-600">{x.c}</span></div>
                    <p className="mt-2 text-gray-700 text-sm">{x.t}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Row 2 (right -> left) */}
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max gap-4 animate-marquee" style={{ animationDirection: "reverse" }}>
                {[
                  { i: "BN", c: "Mobile, AL", t: "Reliable supply helped us avoid runouts." },
                  { i: "CP", c: "El Paso, TX", t: "Clear communication throughout the process." },
                  { i: "DG", c: "San Jose, CA", t: "Competitive pricing with flexible terms." },
                  { i: "WF", c: "Tulsa, OK", t: "Support team is quick and practical." },
                ].concat([
                  { i: "BN", c: "Mobile, AL", t: "Reliable supply helped us avoid runouts." },
                  { i: "CP", c: "El Paso, TX", t: "Clear communication throughout the process." },
                  { i: "DG", c: "San Jose, CA", t: "Competitive pricing with flexible terms." },
                  { i: "WF", c: "Tulsa, OK", t: "Support team is quick and practical." },
                ]).map((x, index) => (
                  <div key={`row2-${x.i}-${x.c}-${index}`} className="min-w-[260px] rounded-xl bg-white p-4 shadow ring-1 ring-gray-200">
                    <div className="text-sm font-semibold text-gray-900">{x.i} · <span className="text-gray-600">{x.c}</span></div>
                    <p className="mt-2 text-gray-700 text-sm">{x.t}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


