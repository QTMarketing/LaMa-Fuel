"use client";
import Link from "next/link";
import { useState } from "react";

export default function FooterSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim();

    if (!email) {
      setSubmitState("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Newsletter Subscriber",
          email,
          message: "Newsletter subscription request.",
          formType: "newsletter",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
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
      console.error("Newsletter subscription failed", error);
      setSubmitState("error");
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">LaMa Fuel</h3>
            <p className="text-white/70 text-sm">Reliable fuel supply and fleet solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <address className="not-italic text-sm text-white/80 leading-relaxed">
              1501 Pipeline Rd E Ste B,<br />Bedford, TX 76022
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Home</Link>
              <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Commitment</Link>
              <Link href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Gallery</Link>
              <Link href="/projects" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Projects</Link>
              <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Contact</Link>
              <Link href="/delivery" className="text-gray-300 hover:text-orange-500 transition-colors no-underline">Delivery</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-gradient"
                required
              />
              <button
                type="submit"
                className="btn-orange-gradient text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={submitState === "submitting"}
              >
                <span>{submitState === "submitting" ? "Subscribing..." : "Subscribe"}</span>
              </button>
            </form>
            {submitState === "success" && (
              <p className="mt-2 text-xs text-green-200">Thanks! You're subscribed.</p>
            )}
            {submitState === "error" && (
              <p className="mt-2 text-xs text-red-200">{errorMessage || "Something went wrong. Please try again."}</p>
            )}
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} LaMa Fuel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


