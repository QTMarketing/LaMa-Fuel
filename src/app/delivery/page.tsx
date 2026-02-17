"use client";

import { Phone, Mail, MapPin, Clock3, Route, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const supportCards = [
  { title: "Phone Support", description: "24/7 delivery coordination and issue handling.", value: "+1 (800) 000-000", icon: Phone },
  { title: "Email Support", description: "Fast follow-up from delivery operations.", value: "delivery@lama.com", icon: Mail },
  { title: "Coverage Office", description: "Regional team support and route planning.", value: "Texas Service Region", icon: MapPin },
];

const proofCards = [
  { title: "98%", subtitle: "On-Time Delivery", icon: Clock3 },
  { title: "200+", subtitle: "Sites Supported", icon: Route },
  { title: "24/7", subtitle: "Operations Support", icon: Headphones },
];

export default function DeliveryPage() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("fullName") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!fullName || !email || !phone || !message) {
      setSubmitState("error");
      setErrorMessage("Please complete the required fields before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          message,
          formType: "fuel_delivery",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/delivery",
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const errorMsg = errorBody.error || errorBody.message || "Something went wrong. Please try again.";
        const hint = errorBody.hint ? ` ${errorBody.hint}` : "";
        const details = errorBody.details ? ` Details: ${errorBody.details}` : "";
        throw new Error(errorMsg + hint + details);
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      console.error("Fuel delivery request submission failed", error);
      setSubmitState("error");
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="relative overflow-hidden min-h-[52vh] md:min-h-[58vh]">
          <div className="absolute inset-0">
            <Image src="/delivery/coverage-map.jpg" alt="Delivery coverage map" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="relative site-container min-h-[52vh] md:min-h-[58vh] flex items-center">
            <div className="max-w-3xl text-white">
              <p className="eyebrow text-orange-200">Fuel Delivery</p>
              <h1
                className="service-hero-title mt-3 text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]"
                style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "0.01em" }}
              >
                Reliable Delivery, Every
                <br className="hidden md:block" />
                Single Day
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85">
                Built for route visibility, accurate scheduling, and responsive operations.
              </p>
              <div className="mt-8">
                <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Request Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-slate-200/70">
        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-6">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="card p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-slate-600">{card.description}</p>
                  <p className="mt-3 font-semibold text-slate-900">{card.value}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="site-container">
          <p className="eyebrow text-orange-600">Delivery Performance</p>
          <h2 className="h2 mt-3">What Makes Our Delivery Dependable</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="card p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-3xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.subtitle}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="card p-6 md:p-8 h-full flex flex-col">
              <p className="eyebrow text-orange-600">Request Delivery</p>
              <h2 className="h3 mt-2">Delivery Service Request</h2>
              <p className="mt-3 text-slate-600">Tell us your delivery requirements and timeline.</p>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <input name="fullName" required placeholder="Full Name" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
                <input name="phone" required placeholder="Phone" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
                <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
                <textarea name="message" required rows={5} placeholder="Tell us about your delivery needs" className="w-full px-4 py-3 border border-slate-300 rounded-md resize-none" />

                <button type="submit" disabled={submitState === "submitting"} className="btn-primary w-full">
                  {submitState === "submitting" ? "Submitting..." : "Submit Request"}
                </button>

                {submitState === "success" && <p className="text-sm font-semibold text-green-700 text-center">Thanks! Your request has been received.</p>}
                {submitState === "error" && <p className="text-sm font-semibold text-red-600 text-center">{errorMessage || "Something went wrong."}</p>}
              </form>
            </div>

            <div className="relative h-full min-h-[560px] rounded-xl overflow-hidden border border-slate-200">
              <Image src="/photos/pump12.jpg" alt="Fuel delivery operations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

