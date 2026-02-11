"use client";

import { Phone, Mail, MapPin, Clock, Store, Route, Headphones } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title + subtitle */}
            <div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] leading-none text-[#101828] mb-6 animate-slide-text">
                Reliable Delivery, Every Single Day
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fast, accurate, and hassle-free delivery support for all our partner locations.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-orange-gradient px-8 py-3 rounded-md text-white font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
              >
                Start a Conversation
              </Link>
            </div>
            {/* Right side: Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
              <Image
                src="/delivery/coverage-map.jpg"
                alt="Delivery coverage map"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/85 backdrop-blur px-3 py-2 ring-1 ring-black/5">
                <Route className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-semibold text-gray-800">Delivery Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ CONTACT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Phone */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 delivery assistance for all partner locations.
              </p>
              <p className="font-semibold text-gray-900 text-lg">+1 (800) 000-000</p>
            </div>

            {/* Card 2 - Email */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Get a quick response from our delivery operations team.
              </p>
              <p className="font-semibold text-gray-900 text-lg">delivery@lama.com</p>
            </div>

            {/* Card 3 - Address */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-gradient/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-[#101828] mb-2">Office Address</h3>
              <p className="text-gray-600 mb-4">
                Visit or schedule a meeting with our delivery team.
              </p>
              <p className="font-semibold text-gray-900 text-lg">Your address here</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ DELIVERY PROMISE — VALUE POINTS */}
      <section className="py-20 bg-orange-gradient">
        <div className="site-container">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-white text-center mb-12">
            What Makes Our Delivery Dependable
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-white mb-2">98%</h3>
              <p className="text-white/90">On-Time Delivery Rate</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl tracking-wider text-white mb-2">200+</h3>
              <p className="text-white/90">Stores Supported Across Texas</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Route className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl tracking-wider text-white mb-2">Active Monitoring</h3>
              <p className="text-white/90">Route Tracking</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl tracking-wider text-white mb-2">24/7 Support</h3>
              <p className="text-white/90">For Delivery Issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ INQUIRY FORM SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Illustration placeholder */}
            <div className="w-full h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Mail className="w-24 h-24 mx-auto mb-4" />
                <p className="text-sm">Contact Illustration</p>
              </div>
            </div>

            {/* Right side: Form card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-heading font-bold text-3xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
                Fuel Delivery Request
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your delivery needs"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-gradient text-white px-8 py-3 rounded-md font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitState === "submitting"}
                  >
                    {submitState === "submitting" ? "Submitting..." : "Submit Request"}
                  </button>
                </div>

                {submitState === "success" && (
                  <div className="text-center text-sm font-semibold text-green-700">
                    Thanks! Your fuel delivery request has been received.
                  </div>
                )}
                {submitState === "error" && (
                  <div className="text-center text-sm font-semibold text-red-600">
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA FOOTER */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
            Ready to optimize your store's delivery experience?
          </h2>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-orange-gradient px-10 py-4 rounded-md text-white font-semibold text-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

