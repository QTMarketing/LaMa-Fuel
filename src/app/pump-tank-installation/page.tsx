"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, ShieldCheck, Clock3, CheckCircle2, ArrowRight } from "lucide-react";
import AboutCTA from "@/components/AboutCTA";

const valueCards = [
  {
    title: "Safety & Compliance",
    description: "Execution aligned with compliance-first operating standards to reduce risk and downtime.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Timelines",
    description: "Transparent scheduling and coordinated field execution to minimize site disruption.",
    icon: Clock3,
  },
  {
    title: "Quality Execution",
    description: "Installation built for long-term reliability in real station operating conditions.",
    icon: CheckCircle2,
  },
];

const process = [
  { step: "01", title: "Site Assessment", description: "We review layout, equipment needs, and compliance requirements." },
  { step: "02", title: "Project Planning", description: "We define scope, schedule, and execution sequencing." },
  { step: "03", title: "Installation", description: "Field teams execute with documented quality and safety checks." },
  { step: "04", title: "Handover Support", description: "We confirm readiness and provide operational follow-through." },
];

export default function PumpTankInstallationPage() {
  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="relative overflow-hidden min-h-[52vh] md:min-h-[58vh]">
          <div className="absolute inset-0">
            <Image src="/photos/pump 8.jpg" alt="Pump and tank installation services" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="relative site-container min-h-[52vh] md:min-h-[58vh] flex items-center">
            <div className="max-w-3xl text-white">
              <p className="eyebrow text-orange-200">Pump & Tank Installation</p>
              <h1
                className="service-hero-title mt-3 text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]"
                style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "0.01em" }}
              >
                Installation Services Built
                <br className="hidden md:block" />
                for Safe, Reliable Operations
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85">
                Built for compliance-first execution, practical timelines, and long-term reliability.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Request Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-slate-200/70">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-orange-600">Why This Service</p>
            <h2 className="h2 mt-3">Built for Reliability at Every Stage</h2>
            <p className="body mt-4">We focus on risk reduction, clean execution, and clear communication from planning to handover.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="card p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="site-container">
          <p className="eyebrow text-orange-600">Process</p>
          <h2 className="h2 mt-3">How We Deliver Installation Projects</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <article key={item.step} className="card p-6">
                <div className="text-sm font-bold tracking-[0.12em] text-orange-600">{item.step}</div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutCTA />
    </main>
  );
}

