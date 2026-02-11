"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  TruckIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const heroImage = "/hero2.png";
  const heroAlt = "Fuel delivery and storage operations";

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <Head>
        <title>LaMa Fuel | LaMa Fuel Supply</title>
        {heroImage && <link rel="preload" as="image" href={heroImage} />}
      </Head>

      <Image src={heroImage} alt={heroAlt} fill className="object-cover" />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />

      <div className="relative site-container min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl -translate-y-6 md:-translate-y-10">
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight leading-tight">
            Fuel Smarter Grow Faster
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl">
            Gain full control with real-time monitoring, advanced analytics, and
            smarter operations. LaMa Fuel provides the tools you need to reduce
            costs and drive efficiency.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="btn-primary text-base md:text-lg px-8 py-4">
              Join Us
            </Link>
            <Link href="/services" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-base md:text-lg px-8 py-4">
              Our Services
            </Link>
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-[60%] w-[520px]">
          <div className="rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 shadow-[0_35px_80px_rgba(0,0,0,0.6)] p-9 text-white space-y-6">
            <p className="eyebrow text-white/70">Incentive Program</p>
            <h3 className="text-2xl font-semibold leading-snug">
              Brand sign-up incentives — up to{" "}
              <span className="inline-flex items-center px-2 py-1 bg-orange-gradient text-white rounded-md text-sm">
                $1,000,000*
              </span>
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              Ask our team how your site can qualify for capital support and image upgrades.
            </p>
            <Link href="/brand-application" className="btn-primary w-full justify-center">
              Contact Us
            </Link>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Higher Margins", Icon: ArrowTrendingUpIcon },
                { label: "Flexible Supply", Icon: ArrowsRightLeftIcon },
                { label: "Reliable Delivery", Icon: TruckIcon },
                { label: "No Franchise Fees", Icon: NoSymbolIcon },
              ].map(({ label, Icon }) => (
                <Link
                  key={label}
                  href="/#why-unbranded"
                  className="group rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-center text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
                >
                  <Icon className="mx-auto mb-2 h-5 w-5 text-white/90 transition group-hover:text-white" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
