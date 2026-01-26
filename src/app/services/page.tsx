"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Zap,
  Shield,
  Droplet,
  Wrench,
  Leaf,
  Wallet,
} from "lucide-react";

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="bg-white">
      {/* Section 1: Our Vision */}
      <section
        className="bg-gray-50"
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          paddingBottom: "3rem",
        }}
      >
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:items-start h-full">
          <div className="flex flex-col px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="w-full max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-slide-text">
                Powering Progress with Precision
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are dedicated to transforming fuel logistics, turning complex supply chains into seamless,
                efficient operations with unparalleled reliability.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md btn-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>
            </div>
            {/* Bottom Widgets Section - REPLACEMENT BLOCK */}
            <div className="mt-8 w-full">
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                {/* Card 1: Existing Text Card */}
                <div
                  className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">Company Milestone</p>
                    <Link href="/blog" className="rounded-full bg-orange-gradient px-3 py-1 text-xs font-semibold text-white">
                      Read More
                    </Link>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Founded in 2024</span>
                  </div>
                  <p className="mt-4 text-base text-gray-800">
                    Our Services to excellence has positioned us as a leader in modern fuel distribution.
                  </p>
                </div>

                {/* Card 2: Existing Image Card */}
                <Link
                  href="/gallery"
                  className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5 block group cursor-pointer transition-transform hover:scale-105"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <Image src="/commitment/team-main.jpg" alt="Our Fleet" fill className="object-cover" style={{ borderRadius: "0.5rem" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm font-semibold text-white">Our Fleet</p>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs text-white group-hover:underline">
                      View Capabilities <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 3: Image Card */}
                <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5" style={{ borderRadius: "0.5rem" }}>
                  <Image src="/commitment/2.jpg" alt="Fuelling Solutions" fill className="object-cover" style={{ borderRadius: "0.5rem" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-lg font-semibold text-white">Fuelling Solutions</h3>
                    <Link href="/fuel-solutions" className="mt-2 inline-flex items-center gap-2 text-sm text-white hover:underline">
                      Discover More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Card 4: Image Card */}
                <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5" style={{ borderRadius: "0.5rem" }}>
                  <Image src="/blog/image22.jpg" alt="Blogs" fill className="object-cover" style={{ borderRadius: "0.5rem" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-lg font-semibold text-white">Our Blog</h3>
                    <Link href="/blog" className="mt-2 inline-flex items-center gap-2 text-sm text-white hover:underline">
                      Read Insights <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-start p-8 pt-12 lg:pt-20">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ borderRadius: "0.5rem" }}>
              <div className="relative w-full" style={{ height: "calc(100vh - 10rem)", maxHeight: "680px" }}>
                <Image src="/commitment/6.jpg" alt="Modern logistics hub" fill className="object-cover" style={{ borderRadius: "0.5rem" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (Discovery Hub) */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-orange-gradient" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-white">
              Services Overview
            </h2>
            <p className="mt-4 text-white/90 text-base md:text-lg">
              Explore our services and solutions, then dive into the details that fit your operation.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {/* Featured: Fuel Solutions */}
            <Link
              href="/fuel-solutions"
              className="group block rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Fuel Solutions (2 options: LaMa Fuel and Branded Fuel)"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr]">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                        <span className="w-2 h-2 rounded-full bg-orange-gradient" aria-hidden />
                        2 Options
                      </span>
                      <span className="text-xs text-gray-600">
                        <span className="font-medium text-gray-700">LaMa Fuel</span> ·{" "}
                        <span className="font-medium text-gray-700">Branded Fuel</span>
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  </div>

                  <h3 className="mt-4 font-heading font-bold text-3xl md:text-4xl tracking-[0.06em] leading-tight text-[#101828]">
                    Fuel Solutions
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                    Compare flexible supply programs and choose the model that fits your station goals.
                  </p>
                </div>

                <div className="relative min-h-[180px] md:min-h-full bg-gray-100">
                  <Image
                    src="/features/section-bg.jpg"
                    alt="Fuel solutions overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Link>

            {/* Secondary: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pump & Tank Installation */}
              <Link
                href="/pump-tank-installation"
                className="group rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Pump & Tank Installation"
              >
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src="/commitment/efficiency.jpg"
                    alt="Pump and tank installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center ring-1 ring-black/5">
                    <Wrench className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-heading font-bold text-xl tracking-wider text-[#101828]">
                      Pump &amp; Tank Installation
                    </h4>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    Install with confidence—safe, compliant setup built for long-term reliability.
                  </p>
                </div>
              </Link>

              {/* Fuel Delivery */}
              <Link
                href="/delivery"
                className="group rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Fuel Delivery"
              >
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src="/commitment/4.jpg"
                    alt="Fuel delivery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center ring-1 ring-black/5">
                    <Droplet className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-heading font-bold text-xl tracking-wider text-[#101828]">Fuel Delivery</h4>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    Dependable delivery with clear communication and fast issue resolution.
                  </p>
                </div>
              </Link>

              {/* Maintenance */}
              <Link
                href="/maintenance"
                className="group rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Maintenance"
              >
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src="/features/support.jpg"
                    alt="Maintenance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center ring-1 ring-black/5">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-heading font-bold text-xl tracking-wider text-[#101828]">Maintenance</h4>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    Prevent downtime with proactive service and responsive repairs.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-24 sm:py-32 bg-white relative overflow-visible">
        <InteractiveBentoGallery
          mediaItems={[
            {
              id: 1,
              type: "image",
              title: "Our Fleet",
              desc: "Professional fuel delivery fleet",
              url: "/commitment/6.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 2,
              type: "image",
              title: "Fuel Operations",
              desc: "Efficient fuel distribution",
              url: "/commitment/1.jpg",
              span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
              id: 3,
              type: "image",
              title: "Modern Facilities",
              desc: "State-of-the-art fuel storage",
              url: "/commitment/2.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
            },
            {
              id: 4,
              type: "image",
              title: "Service Excellence",
              desc: "Dedicated customer service",
              url: "/commitment/3.jpg",
              span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 5,
              type: "image",
              title: "Fuel Delivery",
              desc: "Reliable delivery services",
              url: "/commitment/4.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 6,
              type: "image",
              title: "Logistics Hub",
              desc: "Operational coverage across regions",
              url: "/commitment/6.jpg",
              span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
            },
            {
              id: 7,
              type: "image",
              title: "Brand Recognition",
              desc: "Trusted fuel brands",
              url: "/features/brand-recognition.jpg",
              span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
          ]}
          title="Our Projects"
          description="Explore our fleet, facilities, and operations through interactive gallery"
        />
      </section>

      {/* NEW Section 2: Our Services Showcase */}
      <section className="bg-brand-dark-blue py-24 sm:py-32 hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

