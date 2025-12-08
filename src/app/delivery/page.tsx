"use client";

import { Phone, Mail, MapPin, Clock, Store, Route, Headphones } from "lucide-react";
import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title + subtitle */}
            <div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] leading-none text-[#101828] mb-6">
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
            {/* Right side: Illustration placeholder */}
            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Route className="w-24 h-24 mx-auto mb-4" />
                <p className="text-sm">Delivery Route Illustration</p>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              <h2 className="font-heading font-bold text-3xl tracking-[0.06em] leading-tight text-[#101828] mb-6">Submit Inquiry</h2>
              <form className="space-y-6">
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
                    className="bg-orange-gradient text-white px-8 py-3 rounded-md font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
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

