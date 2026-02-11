"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Zap, Shield, Droplet, Wrench, Leaf, Wallet } from "lucide-react";

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import AboutCTA from "@/components/AboutCTA";

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="bg-white">
      {/* Section 1: Services Hero (About-style) */}
      <section className="bg-white">
        <div className="relative overflow-hidden min-h-[50vh] md:min-h-[55vh]">
          <div className="absolute inset-0">
            <Image
              src="/photos/pump12.jpg"
              alt="Fuel logistics operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-bl from-black/45 via-transparent to-black/25" />
          </div>

          <div className="relative site-container min-h-[50vh] md:min-h-[55vh] flex flex-col items-center justify-center text-center text-white">
            <span className="eyebrow inline-flex items-center rounded-full border border-orange-400/50 bg-orange-500/10 px-3 py-1 text-orange-200">
              Services
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              LaMa Fuel supply with operational clarity
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/85 max-w-3xl mx-auto">
              We simplify fuel logistics so independent operators get reliable supply, compliant operations, and
              responsive support.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                <span>Request Fuel</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (Core Competencies) */}
      <section className="bg-white py-20">
        <div className="site-container">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-orange-600">Core Competencies</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900">
                Elite infrastructure for high-demand operations.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900 inline-flex items-center gap-2"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
            <Link
              href="/fuel-solutions"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-[320px] md:h-[360px] lg:h-full">
                <Image
                  src="/commitment/6.jpg"
                  alt="Supply chain excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 text-white shadow-md">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Supply Chain Excellence</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-md">
                    Strategic end-to-end fuel management with real-time monitoring.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs text-orange-200">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">24/7 Support</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Our mission control team operates around the clock to ensure zero downtime.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Droplet className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Quality Control</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Rigorous lab testing and molecular markers ensure compliance.
                  </p>
                  <div className="mt-4 text-[10px] tracking-[0.2em] uppercase text-orange-600/80">
                    ISO 9001 Certified
                  </div>
                </div>

                <div className="rounded-2xl border border-orange-400/60 bg-orange-gradient p-6 text-white">
                  <div className="text-4xl font-bold">99%</div>
                  <div className="mt-1 text-xs tracking-[0.2em] uppercase text-white/80">Network Uptime</div>
                  <div className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-slate-50 py-16">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-orange-600">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 whitespace-nowrap">
              Built to keep your operation running
            </h2>
            <p className="mt-3 text-slate-600 text-base md:text-lg leading-relaxed">
              Each service is designed to protect uptime, compliance, and performance at every location.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
              <div className="relative h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                <Image src="/photos/pump13.jpg" alt="Pump and tank installation" fill className="object-cover" />
              </div>
              <div className="lg:pl-4">
                <div className="h-1 w-10 bg-orange-500 rounded-full" />
                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">Pump &amp; Tank Installation</h3>
                <p className="mt-3 text-lg md:text-xl text-slate-700 leading-relaxed">
                  Install with confidence—safe, compliant setup built for long-term reliability.
                </p>
                <div className="mt-4 space-y-2 text-base md:text-lg text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Compliance-first installation standards
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Turnkey project coordination
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/pump-tank-installation" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-start">
              <div className="lg:pr-4">
                <div className="h-1 w-10 bg-orange-500 rounded-full" />
                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">Fuel Delivery</h3>
                <p className="mt-3 text-lg md:text-xl text-slate-700 leading-relaxed">
                  Dependable delivery with clear communication and fast issue resolution.
                </p>
                <div className="mt-4 space-y-2 text-base md:text-lg text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Proactive dispatch updates
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Coverage built for peak demand
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/delivery" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                <Image src="/photos/pump12.jpg" alt="Fuel delivery" fill className="object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
              <div className="relative h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                <Image src="/photos/pump11.jpg" alt="Maintenance services" fill className="object-cover" />
              </div>
              <div className="lg:pl-4">
                <div className="h-1 w-10 bg-orange-500 rounded-full" />
                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">Maintenance</h3>
                <p className="mt-3 text-lg md:text-xl text-slate-700 leading-relaxed">
                  Prevent downtime with proactive service and responsive repairs.
                </p>
                <div className="mt-4 space-y-2 text-base md:text-lg text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Scheduled inspections and compliance
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Rapid response for critical fixes
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/maintenance" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="pt-14 pb-20 bg-white relative overflow-visible">
        <InteractiveBentoGallery
          mediaItems={[
            {
              id: 1,
              type: "image",
              title: "Our Fleet",
              desc: "Professional fuel delivery fleet",
              url: "/photos/pump15.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 2,
              type: "image",
              title: "Fuel Operations",
              desc: "Efficient fuel distribution",
              url: "/photos/pump12.jpg",
              span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
              id: 3,
              type: "image",
              title: "Modern Facilities",
              desc: "State-of-the-art fuel storage",
              url: "/photos/pump11.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
            },
            {
              id: 4,
              type: "image",
              title: "Service Excellence",
              desc: "Dedicated customer service",
              url: "/photos/pump10.jpg",
              span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 5,
              type: "image",
              title: "Fuel Delivery",
              desc: "Reliable delivery services",
              url: "/photos/pump 9.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 6,
              type: "image",
              title: "Logistics Hub",
              desc: "Operational coverage across regions",
              url: "/photos/pump 8.jpg",
              span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 7,
              type: "image",
              title: "Supply Network",
              desc: "Reliable logistics coverage",
              url: "/photos/pump7.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
          ]}
          title="Our Gallery"
          description="Explore our fleet, facilities, and operations through interactive gallery"
        />
      </section>

      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <AboutCTA />
      </div>

      {/* NEW Section 2: Our Services Showcase */}
      <section className="bg-brand-dark-blue py-24 sm:py-32 hidden">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-up">
            <h2 className="text-base font-semibold leading-7 text-brand">FEATURED SERVICES</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore Our Services</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our Services to quality, reliability, and efficient service delivery.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Fuel Card Program",
                subheading: "Control & Security",
                description:
                  "Empower your fleet with our secure fuel cards. Set spending limits, restrict purchase types, and get detailed reports to prevent fraud and manage your budget effectively.",
                image: "/commitment/service-fuel-card.jpg",
              },
              {
                title: "Transaction Monitoring",
                subheading: "Real-Time Protection",
                description:
                  "Our AI-powered system analyzes every transaction, flagging suspicious activity instantly. Protect your business from theft and unauthorized usage with automated alerts.",
                image: "/commitment/service-monitoring.jpg",
              },
              {
                title: "Gasoline Handling Tips",
                subheading: "Safety First Training",
                description:
                  "Access our comprehensive safety resources and training modules. Ensure your team follows best practices for handling gasoline to prevent accidents and ensure compliance.",
                image: "/commitment/service-gas-handling.jpg",
              },
              {
                title: "Diesel Maintenance Guide",
                subheading: "Longevity & Performance",
                description:
                  "Prolong the life of your diesel vehicles with our expert guides. Learn preventative maintenance strategies to reduce downtime, lower repair costs, and maximize performance.",
                image: "/commitment/service-diesel-maintenance.jpg",
              },
              {
                title: "E85 Benefits Guide",
                subheading: "Sustainable Fueling",
                description:
                  "Discover the environmental and performance benefits of E85 fuel. Our guide provides everything you need to know about integrating this cost-effective, high-octane alternative.",
                image: "/commitment/service-e85-benefits.jpg",
              },
              {
                title: "Cost-Effective Solutions",
                subheading: "Optimize Your Budget",
                description:
                  "We analyze your entire fuel supply chain to identify opportunities for savings. From bulk purchasing to optimized delivery routes, we tailor solutions that directly impact your bottom line.",
                image: "/commitment/service-cost-solutions.jpg",
              },
            ].map((service, index) => (
              <div key={service.title} className="space-y-4 animate-fade-up" style={{ animationDelay: `${index * 120}ms` }}>
                {/* Accordion Header (toggle) */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="group w-full rounded-lg border border-white/10 bg-white/5 p-6 text-left hover:bg-white transition-colors"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-dark-blue">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 group-hover:text-brand-dark-blue">{service.subheading}</p>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 text-white group-hover:text-brand-dark-blue transition-transform ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`relative h-[22rem] w-full rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-last" : ""}`} style={{ borderRadius: "0.5rem" }}>
                      <Image src={service.image} alt={service.title} fill className="object-cover" style={{ borderRadius: "0.5rem" }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    {/* Description Cards */}
                    <div className={`flex flex-col gap-6 h-[22rem] ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                      <div className="group rounded-lg bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white" style={{ borderRadius: "0.5rem" }}>
                        {(() => {
                          const subIcons = [Shield, Zap, Droplet, Wrench, Leaf, Wallet];
                          const SubIcon = subIcons[index % subIcons.length];
                          return (
                            <div className="flex items-center gap-2">
                              <SubIcon className="h-5 w-5 text-white transition-colors group-hover:text-[#FF6B35]" />
                              <h4 className="font-semibold text-white transition-colors group-hover:text-primary-gradient">{service.subheading}</h4>
                            </div>
                          );
                        })()}
                      </div>
                      <div className="rounded-lg bg-white p-6 shadow-lg flex-1 flex flex-col" style={{ borderRadius: "0.5rem" }}>
                        <p className="text-base text-gray-600">{service.description}</p>
                        <div className="mt-auto pt-6">
                          <Link
                            href="/contact"
                            className="rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                          >
                            <span>Book a Service</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

