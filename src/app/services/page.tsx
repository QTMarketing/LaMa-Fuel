"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Droplet, Wrench, Clock3, CheckCircle2 } from "lucide-react";
import AboutCTA from "@/components/AboutCTA";

const serviceCards = [
  {
    serviceType: "Installation",
    title: "Pump & Tank Installation",
    description:
      "Install with confidence through compliance-first planning, safe execution, and long-term reliability standards.",
    bullets: ["Compliance-first installation standards", "Turnkey project coordination"],
    image: "/photos/pump13.jpg",
    alt: "Pump and tank installation",
    href: "/pump-tank-installation",
    icon: Wrench,
  },
  {
    serviceType: "Delivery",
    title: "Fuel Delivery",
    description:
      "Dependable delivery with proactive communication, route consistency, and fast issue resolution.",
    bullets: ["Proactive dispatch updates", "Coverage built for peak demand"],
    image: "/photos/pump12.jpg",
    alt: "Fuel delivery",
    href: "/delivery",
    icon: Droplet,
  },
  {
    serviceType: "Maintenance",
    title: "Maintenance",
    description:
      "Prevent downtime with scheduled service plans and rapid support for critical operational fixes.",
    bullets: ["Scheduled inspections and compliance", "Rapid response for urgent fixes"],
    image: "/photos/pump11.jpg",
    alt: "Maintenance services",
    href: "/maintenance",
    icon: Shield,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Operational Assessment",
    description: "We assess demand profile, storage setup, and delivery patterns for a practical supply plan.",
  },
  {
    step: "02",
    title: "Service Planning",
    description: "We align logistics, compliance checkpoints, and timelines with your site operations.",
  },
  {
    step: "03",
    title: "Execution & Delivery",
    description: "Our team executes installation, delivery, and support workflows with clear accountability.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "You get responsive service, issue handling, and continuity support as operations scale.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="relative overflow-hidden min-h-[52vh] md:min-h-[58vh]">
          <div className="absolute inset-0">
            <Image
              src="/photos/pump12.jpg"
              alt="Fuel logistics operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
          </div>

          <div className="relative site-container min-h-[52vh] md:min-h-[58vh] flex flex-col items-center justify-center text-center text-white">
            <span className="eyebrow inline-flex items-center rounded-full border border-orange-400/50 bg-orange-500/10 px-3 py-1 text-orange-200">
              Services
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
              Fuel Supply Services Built for Uptime and Control
            </h1>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/85">
              We support independent operators with reliable delivery, compliant infrastructure,
              and responsive maintenance so your operation runs without interruption.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Request Fuel
              </Link>
              <Link href="#services-grid" className="btn-secondary border-white/40 text-white hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="section bg-white border-b border-slate-200/70">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-orange-600">Core Competencies</p>
            <h2 className="h2 mt-3">Enterprise-Grade Service Standards</h2>
            <p className="body mt-4">
              Our service model is designed around consistency, compliance, and response speed.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Compliance & Safety</h3>
              <p className="mt-2 text-slate-600">
                Compliance-first installation and operating standards that reduce risk and improve continuity.
              </p>
            </article>

            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Clock3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Responsive Support</h3>
              <p className="mt-2 text-slate-600">
                Fast service response and active communication to protect uptime during daily operations.
              </p>
            </article>

            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Droplet className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Supply Reliability</h3>
              <p className="mt-2 text-slate-600">
                Structured delivery workflows and regional coverage aligned to high-demand locations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Services details */}
      <section id="services-grid" className="section bg-slate-50">
        <div className="site-container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow text-orange-600">Our Services</p>
            <h2 className="h2 mt-2">Built to Keep Operations Running</h2>
            <p className="body mt-3">
              Every service is scoped for reliability, clear execution, and measurable operational value.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="card overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md">
                  <div className="relative h-56 w-full">
                    <Image src={service.image} alt={service.alt} fill className="object-cover" />
                  </div>

                  <div className="p-6 flex flex-col flex-1 min-h-[340px]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-orange-600">
                        {service.serviceType}
                      </div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-slate-600 text-[17px] leading-relaxed">{service.description}</p>

                    <div className="mt-4 space-y-2">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-slate-700 text-sm md:text-base">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-orange-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-2">
                      <Link href={service.href} className="group btn-secondary inline-flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-orange-600">How We Work</p>
            <h2 className="h2 mt-3">A Clear Service Delivery Process</h2>
            <p className="body mt-4">
              We use a simple operational framework that keeps communication and execution aligned.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <article key={step.step} className="card p-6">
                <div className="text-sm font-bold tracking-[0.12em] text-orange-600">{step.step}</div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="section bg-slate-50 border-y border-slate-200/70">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">24/7</div>
              <div className="mt-1 text-slate-600">Operational Support</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">99%</div>
              <div className="mt-1 text-slate-600">Service Uptime</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">Fast</div>
              <div className="mt-1 text-slate-600">Issue Resolution</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">Regional</div>
              <div className="mt-1 text-slate-600">Coverage Network</div>
            </div>
          </div>
        </div>
      </section>

      <AboutCTA />

    </main>
  );
}

