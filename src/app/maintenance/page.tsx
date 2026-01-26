"use client";

import { Wrench, Phone, Mail, Clock, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title + subtitle */}
            <div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] leading-none text-[#101828] mb-6 animate-slide-text">
                Professional Maintenance Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Keep your fuel equipment running smoothly with our comprehensive maintenance and support services.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-orange-gradient px-8 py-3 rounded-md text-white font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
              >
                Schedule Maintenance
              </Link>
            </div>
            {/* Right side: Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
              <Image
                src="/features/support.jpg"
                alt="Maintenance services and operational support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/85 backdrop-blur px-3 py-2 ring-1 ring-black/5">
                <Wrench className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-semibold text-gray-800">Maintenance Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ CONTACT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Phone */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 maintenance assistance for all equipment issues.
              </p>
              <p className="font-semibold text-gray-900 text-lg">maintenance@lama.com</p>
            </div>

            {/* Card 2 - Email */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Get a quick response from our maintenance operations team.
              </p>
              <p className="font-semibold text-gray-900 text-lg">maintenance@lama.com</p>
            </div>

            {/* Card 3 - Location */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Service Hours</h3>
              <p className="text-gray-600 mb-4">
                Visit or schedule a meeting with our maintenance team.
              </p>
              <p className="font-semibold text-gray-900 text-lg">Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ MAINTENANCE SERVICES — VALUE POINTS */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-orange-gradient" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-white mb-4">
              What Makes Our Maintenance Reliable
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Professional maintenance services to keep your fuel equipment operating at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-4">Preventive Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular scheduled maintenance to prevent equipment failures and extend the lifespan of your fuel systems.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-4">Emergency Repairs</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast response times for urgent repairs to minimize downtime and keep your operations running smoothly.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-4">Equipment Inspections</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive inspections to identify potential issues before they become costly problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ CONTACT FORM SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-4">
              Request Maintenance Service
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our maintenance team will get back to you promptly.
            </p>
          </div>

          {submitState === "success" && (
            <div className="mb-6 rounded-md border border-green-200 bg-green-50 px-5 py-4 text-base text-green-800">
              Thanks! Your maintenance request has been submitted. Our team will contact you shortly.
            </div>
          )}
          {submitState === "error" && (
            <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-5 py-4 text-base text-red-800">
              {errorMessage || "We couldn't submit your request. Please try again."}
            </div>
          )}

          <form className="bg-gray-50 rounded-xl p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Maintenance Request Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tell us about your maintenance needs"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="bg-orange-gradient text-white px-8 py-3 rounded-md font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitState === "submitting" ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5️⃣ CTA SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
            Ready to optimize your equipment maintenance?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our maintenance team today to schedule a service or learn more about our maintenance programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-gradient px-8 py-3 rounded-md text-white font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

