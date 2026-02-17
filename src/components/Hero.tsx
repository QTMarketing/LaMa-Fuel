"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PartnerLogo = { file: string; alt: string };

type AnimatedStatValueProps = {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

function AnimatedStatValue({
  end,
  suffix = "",
  duration = 1400,
  delay = 0,
}: AnimatedStatValueProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let startTime = 0;

    const animate = (now: number) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cancelAnimationFrame(frameId);
    };
  }, [delay, duration, end]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

function LogoMarquee({ items }: { items: PartnerLogo[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [dupCount, setDupCount] = useState(2);

  useEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const baseWidth = measureRef.current.scrollWidth;
    if (!containerWidth || !baseWidth) return;

    // Always use exactly 2 duplicates for seamless loop with -50% animation
    // The gap-6 class ensures consistent spacing between all logos including at loop points
    setDupCount(2);
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative h-8 w-full overflow-hidden">
      {/* Invisible measurement row */}
      <div
        ref={measureRef}
        className="absolute -left-full top-0 flex items-center gap-10 opacity-0 pointer-events-none"
      >
        {items.map((partner) => (
          <Image
            key={`measure-${partner.alt}`}
            src={`/partners/new/${encodeURIComponent(partner.file)}`}
            alt={partner.alt}
            width={72}
            height={24}
            className="h-6 w-auto object-contain"
          />
        ))}
      </div>

      {/* Visible marquee track - gap-10 ensures consistent spacing between all logos including at loop points */}
      <div className="absolute inset-0">
        <div
          className="flex items-center gap-10"
          style={{
            width: "max-content",
            animation: "logo-marquee 20s linear infinite",
          }}
        >
          {Array.from({ length: dupCount }).map((_, dupIndex) =>
            items.map((partner, index) => (
              <Image
                key={`${partner.alt}-${dupIndex}-${index}`}
                src={`/partners/new/${encodeURIComponent(partner.file)}`}
                alt={partner.alt}
                width={72}
                height={24}
                className="h-6 w-auto object-contain opacity-90"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroImage = "/hero2.png";
  const heroAlt = "Fuel delivery and storage operations";
  const heroPartners = [
    { file: "mobil 1.png", alt: "Mobil" },
    { file: "exxon 1.png", alt: "Exxon" },
    { file: "chevron 1.png", alt: "Chevron" },
    { file: "citgo 1.png", alt: "Citgo" },
    { file: "phillips 1.png", alt: "Phillips 66" },
    { file: "sunoco 1.png", alt: "Sunoco" },
    { file: "texco 1.png", alt: "Texaco" },
    { file: "alon-asf 1.png", alt: "Alon ASF" },
  ];
  const heroPartnersMarquee = heroPartners;
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <Head>
        <title>LaMa Fuel | LaMa Fuel Supply</title>
        {heroImage && <link rel="preload" as="image" href={heroImage} />}
      </Head>

      <Image src={heroImage} alt={heroAlt} fill className="object-cover" />

      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />

      <div className="relative site-container min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl -translate-y-16 md:-translate-y-24">
          <h1 className="h1 text-white text-5xl md:text-6xl lg:text-7xl font-extrabold md:whitespace-nowrap">
            Fuel Smarter Grow Faster
          </h1>
          <p className="mt-5 body text-white/85 max-w-2xl">
            Gain full control with real-time monitoring, advanced analytics, and
            smarter operations. LaMa Fuel provides the tools you need to reduce
            costs and drive efficiency.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Join Us
            </Link>
            <Link
              href="/services"
              className="btn-secondary border-white/30 text-white hover:bg-white/10 px-8 py-4"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Floating stats panel on the right for large screens, flush with viewport edge */}
      <div className="pointer-events-none hidden lg:flex absolute top-36 right-0">
        <div className="pointer-events-auto w-[200px] max-w-full">
          <div className="rounded-l-2xl rounded-r-none bg-black/45 backdrop-blur-md border border-white/15 border-r-0 shadow-[0_35px_80px_rgba(0,0,0,0.6)] px-4 py-6 space-y-4">
            {[
              { end: 20, suffix: "+", label: "Years of Experience" },
              { end: 100, suffix: "+", label: "Successful Properties" },
              { end: 100, suffix: "+", label: "Projects Completed" },
              { end: 100, suffix: "k+", label: "Satisfied Clients" },
            ].map((item, idx, arr) => (
              <div key={item.label}>
                <div className="text-3xl font-extrabold leading-none text-white">
                  <AnimatedStatValue
                    end={item.end}
                    suffix={item.suffix}
                    delay={idx * 120}
                  />
                </div>
                <div className="mt-1 text-sm text-white/80">
                  {item.label}
                </div>
                {idx < arr.length - 1 && (
                  <div className="mt-3 pt-3 border-t border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom floating solution cards */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 md:bottom-12">
        <div className="pointer-events-auto site-container">
          <div className="w-full max-w-[90rem] flex flex-col md:flex-row gap-6 justify-start items-stretch">
            {/* Unbranded Fuel card - compact */}
            <div className="w-full md:flex-1 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 shadow-[0_18px_40px_rgba(0,0,0,0.5)] px-5 pt-6 pb-4 flex flex-col gap-1.5">
              <h3 className="text-base md:text-lg font-black text-white">
                Unbranded Fuel (LaMa Fuel)
              </h3>
              <p className="mt-1 text-xs md:text-sm text-white/80">
                Unbranded fuel supply built for flexibility, higher margins, and full pricing control. Designed for operators who want brand-level reliability without franchise fees or long-term lock‑ins.
              </p>
              <div className="mt-auto flex justify-center">
                <Link
                  href="/solutions/unbranded"
                  className="btn-primary w-full max-w-lg py-3 text-xs md:text-sm justify-center"
                >
                  View Unbranded Fuel
                </Link>
              </div>
            </div>

            {/* Branded Fuel card with compact logo marquee */}
            <div className="w-full md:flex-1 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 shadow-[0_18px_40px_rgba(0,0,0,0.5)] px-5 pt-6 pb-4 flex flex-col gap-1.5">
              <h3 className="text-base md:text-lg font-black text-white">
                Branded Fuel
              </h3>
              <p className="mt-1 text-xs md:text-sm text-white/80">
                Our trusted partners
              </p>

              {/* Centered logo marquee */}
              <div className="mt-2 flex justify-center">
                <div className="h-8 w-full max-w-2xl">
                  <LogoMarquee items={heroPartners} />
                </div>
              </div>

              <div className="mt-auto flex justify-center">
                <Link
                  href="/solutions/branded"
                  className="btn-secondary border-white/40 text-white hover:bg-white/10 w-full max-w-lg py-3 text-xs md:text-sm justify-center"
                >
                  View Branded Fuel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
