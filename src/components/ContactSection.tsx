"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();

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
          message,
          formType: "contact",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
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
      console.error("Contact request submission failed", error);
      setSubmitState("error");
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">
        
        {/* Left Column: Information */}
        <div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-lg">
            We're here to help! Whether you have a question about our fuel services, need assistance with an account, or want to provide feedback, our team is ready to assist you.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-heading font-bold tracking-wider text-[#101828] text-lg">Email:</h3>
              <a href="mailto:hello@lamafuel.com" className="hover:text-primary-gradient transition-colors">hello@lamafuel.com</a>
            </div>
            <div>
              <h3 className="font-heading font-bold tracking-wider text-[#101828] text-lg">Phone:</h3>
              <a href="tel:+1234567890" className="hover:text-primary-gradient transition-colors">+1 (234) 567-890</a>
            </div>
             <div>
              <h3 className="font-heading font-bold tracking-wider text-[#101828] text-lg">Address:</h3>
              <p>1501 Pipeline Rd E Ste B, Bedford, TX 76022</p>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              Available Monday – Friday • 9 AM – 6 PM CST
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-primary-gradient"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="btn-orange-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={submitState === "submitting"}
              >
                <span>{submitState === "submitting" ? "Sending..." : "Send Message"}</span>
              </button>
            </div>

            {submitState === "success" && (
              <div className="text-center text-sm font-semibold text-green-700">
                Thanks! Your message has been received.
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
    </section>
  );
}

