"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroImage = "/hero2.png";
  const heroAlt = "Modern LaMa Fuel facility at dusk";

  return (
    <section className="relative flex flex-col items-center text-white min-h-[70vh] overflow-hidden">
      <Head>
        <title>LaMa Fuel | Fuel Smarter Grow Faster</title>
        {heroImage && <link rel="preload" as="image" href={heroImage} />}
      </Head>

      <Image
        src={heroImage}
        alt={heroAlt}
        fill
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/65 z-10"></div>

      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-6 sm:px-8 min-h-[70vh] flex items-center py-10 sm:py-12">
        <div className="grid gap-4 lg:gap-6 md:grid-cols-[1.05fr_1fr] items-center">
          <div className="space-y-6 text-center md:text-left md:pl-12 lg:pl-16">
            <h1 className="hero-headline font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] leading-tight drop-shadow-lg">
              Fuel Smarter Grow Faster
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-white/90 leading-relaxed">
              Gain full control with real-time monitoring, advanced analytics, and powerful theft detection. LaMa Fuel provides the tools you need to reduce costs and drive efficiency.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/brand-application"
                className="rounded-md btn-orange-gradient px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:opacity-90 active:scale-95 transition inline-flex items-center justify-center min-w-[140px]"
              >
                <span>Join Us</span>
              </Link>
              <Link
                href="/about"
                className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-md border border-white/40 bg-white/5 font-semibold text-white/90 hover:bg-white/10 hover:text-white transition inline-flex items-center justify-center min-w-[140px]"
              >
                About us
              </Link>
            </div>
          </div>

          <div>
            <div className="mx-auto w-full max-w-lg rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.55)] p-7 text-white space-y-4">
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">Incentive Program</p>
              <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-[0.05em] leading-snug">
                Brand sign-up incentives — up to{' '}
                <span className="inline-flex items-center px-2 py-1 bg-orange-gradient text-white rounded-md text-sm">
                  $1,000,000*
                </span>
              </h3>
              <p className="text-sm text-white/80 leading-tight">
                Ask our team how your site can qualify for capital support and image upgrades.
              </p>
              <Link
                href="/brand-application"
                className="inline-flex items-center justify-center w-full rounded-md btn-orange-gradient px-4 py-3 font-semibold text-white shadow-lg hover:opacity-90 active:scale-95 transition"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
