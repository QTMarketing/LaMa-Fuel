"use client";

import { Wrench, Mail, Clock3, Settings, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const maintenanceCards = [
  {
    title: "Preventive Maintenance",
    description: "Routine service checks that reduce failures and improve equipment life.",
    icon: Settings,
  },
  {
    title: "Emergency Repairs",
    description: "Fast response for urgent failures to keep your operation online.",
    icon: AlertTriangle,
  },
  {
    title: "Equipment Inspections",
    description: "Detailed inspections to identify risk before it becomes downtime.",
    icon: CheckCircle,
  },
];

export default function MaintenancePage() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!fullName || !email || !message) {
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
          formType: "maintenance",
          message,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : undefined,
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
      console.error("Maintenance request submission failed", error);
      setSubmitState("error");
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="relative overflow-hidden min-h-[52vh] md:min-h-[58vh]">
          <div className="absolute inset-0">
            <Image src="/features/support.jpg" alt="Maintenance services and support" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="relative site-container min-h-[52vh] md:min-h-[58vh] flex items-center">
            <div className="max-w-3xl text-white">
              <p className="eyebrow text-orange-200">Maintenance</p>
              <h1
                className="service-hero-title mt-3 text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]"
                style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "0.01em" }}
              >
                Professional Maintenance
                <br className="hidden md:block" />
                Services for Fuel Operations
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85">
                Built for preventive stability, rapid repair response, and long-term equipment health.
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
            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Service Support</h3>
              <p className="mt-2 text-slate-600">Direct access to maintenance support coordination.</p>
              <p className="mt-3 font-semibold text-slate-900">maintenance@lama.com</p>
            </article>

            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Clock3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Service Hours</h3>
              <p className="mt-2 text-slate-600">Planned support coverage with emergency escalation paths.</p>
              <p className="mt-3 font-semibold text-slate-900">Mon-Fri: 8AM-6PM</p>
            </article>

            <article className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Field Execution</h3>
              <p className="mt-2 text-slate-600">Qualified support for preventive and corrective maintenance.</p>
              <p className="mt-3 font-semibold text-slate-900">Regional Coverage</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="site-container">
          <p className="eyebrow text-orange-600">Maintenance Scope</p>
          <h2 className="h2 mt-3">What Makes Our Maintenance Reliable</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {maintenanceCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="card p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white">
        <div className="site-container max-w-4xl">
          <div className="text-center mb-8">
            <p className="eyebrow text-orange-600">Request Service</p>
            <h2 className="h2 mt-3">Maintenance Service Request</h2>
            <p className="body mt-4">Send your request details and our team will contact you promptly.</p>
          </div>

          {submitState === "success" && (
            <div className="mb-6 rounded-md border border-green-200 bg-green-50 px-5 py-4 text-base text-green-800">
              Thanks! Your maintenance request has been submitted.
            </div>
          )}
          {submitState === "error" && (
            <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-5 py-4 text-base text-red-800">
              {errorMessage || "We couldn't submit your request. Please try again."}
            </div>
          )}

          <form className="card p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
            <input id="name" name="name" required placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-slate-300" />
            <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-slate-300" />
            <textarea id="message" name="message" rows={6} required placeholder="Tell us about your maintenance needs" className="w-full px-4 py-3 rounded-md border border-slate-300" />
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitState === "submitting" ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

