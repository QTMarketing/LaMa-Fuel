"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type QuickTopic =
  | "Station Locations"
  | "Fuel Prices"
  | "Promotions & Discounts"
  | "Payment Options"
  | "Place an Order / Leave a Query";

type Step = "idle" | "faq" | "capture_name" | "capture_contact" | "capture_type" | "capture_details" | "submitted";

type Message =
  | { role: "assistant"; text: string }
  | { role: "user"; text: string };

function getFaqAnswer(topic: QuickTopic) {
  switch (topic) {
    case "Station Locations":
      return "Station locations and timings vary by location. Tell me your city/state (or nearest intersection) and I’ll point you to the closest option.";
    case "Fuel Prices":
      return "Fuel prices change frequently by location. Tell me your nearest city/state and the fuel type you want, and I’ll take a request for our team to confirm pricing.";
    case "Promotions & Discounts":
      return "Promotions and discounts vary by location and season. Tell me your city/state and what you’re looking for, and I’ll take a request for our team to confirm current offers.";
    case "Payment Options":
      return "Payment options vary by location. Tell me your preferred payment method (cash, card, fleet card, etc.) and your city/state, and I’ll take a request for our team to confirm.";
    case "Place an Order / Leave a Query":
      return "Sure — I can take your request. I’ll ask for your name, contact info, type of request, and details.";
  }
}

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! Click a quick option below or leave a query and we’ll follow up.",
    },
  ]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [requestType, setRequestType] = useState("");
  const [details, setDetails] = useState("");

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const quickTopics: QuickTopic[] = useMemo(
    () => [
      "Station Locations",
      "Fuel Prices",
      "Promotions & Discounts",
      "Payment Options",
      "Place an Order / Leave a Query",
    ],
    []
  );

  useEffect(() => {
    if (!open) return;
    // Focus input when opened
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // Keep scrolled to bottom when messages change
    if (!open) return;
    const el = panelRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  function pushAssistant(text: string) {
    setMessages((m) => [...m, { role: "assistant", text }]);
  }

  function pushUser(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
  }

  function handleTopic(topic: QuickTopic) {
    pushUser(topic);
    const answer = getFaqAnswer(topic);
    pushAssistant(answer);

    if (topic === "Place an Order / Leave a Query") {
      setStep("capture_name");
      pushAssistant("What’s your name?");
    } else {
      setStep("faq");
      // Offer fallback capture
      pushAssistant("If you want, I can take your query and have our team contact you. Just type “leave a query”.");
    }
  }

  function beginCapture() {
    setStep("capture_name");
    pushAssistant("Sure — what’s your name?");
  }

  async function submitCapture(payload: {
    fullName: string;
    contact: string;
    requestType: string;
    details: string;
  }) {
    const hasEmail = payload.contact.includes("@");
    const email = hasEmail ? payload.contact : "unknown@lamafuel.com";
    const phone = hasEmail ? undefined : payload.contact;
    const message = `Type: ${payload.requestType}\nDetails: ${payload.details}\nContact: ${payload.contact}`;

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: payload.fullName || "Website Visitor",
          email,
          phone,
          message,
          formType: "other",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const errorMsg = errorBody.error || errorBody.message || "Something went wrong while saving your request.";
        const hint = errorBody.hint ? ` ${errorBody.hint}` : "";
        const details = errorBody.details ? ` Details: ${errorBody.details}` : "";
        throw new Error(errorMsg + hint + details);
      }
    } catch (error) {
      console.error("Chat widget submission failed", error);
      pushAssistant("We received your message, but had trouble saving it. Please try again or use the contact form.");
    }
  }

  function submitCurrentInput() {
    const value = input.trim();
    if (!value) return;
    setInput("");
    pushUser(value);

    if (step === "idle" || step === "faq") {
      if (/leave a query|order|request/i.test(value)) {
        beginCapture();
        return;
      }
      pushAssistant("I’m not sure about that. Can I take your query and have our team contact you? Type “leave a query”.");
      return;
    }

    if (step === "capture_name") {
      setName(value);
      setStep("capture_contact");
      pushAssistant("Thanks. What’s the best contact info (email or phone)?");
      return;
    }

    if (step === "capture_contact") {
      setContact(value);
      setStep("capture_type");
      pushAssistant("What type of query/order is this? (e.g., pricing, delivery, branding, support)");
      return;
    }

    if (step === "capture_type") {
      setRequestType(value);
      setStep("capture_details");
      pushAssistant("Please share the details of your query/order.");
      return;
    }

    if (step === "capture_details") {
      setDetails(value);
      setStep("submitted");
      pushAssistant(`Thanks, ${name || "there"}! Your request has been received. Our team will contact you shortly.`);
      submitCapture({
        fullName: name,
        contact,
        requestType,
        details: value,
      });
      return;
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      {/* Tooltip */}
      <div className="group relative flex items-center justify-end">
        {!open && (
          <div className="pointer-events-none absolute bottom-1/2 translate-y-1/2 right-14 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="rounded-md bg-gray-900 text-white text-xs px-3 py-2 shadow-lg whitespace-nowrap">
              Hi! Click here to chat with LaMa Fuel Assistant.
            </div>
          </div>
        )}

        {/* Icon Button (slightly bigger + orange gradient stroke ring) */}
        <div className="rounded-full bg-orange-gradient p-px shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition">
          <button
            type="button"
            aria-label={open ? "Close chat" : "Open chat"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group relative h-[68px] w-[68px] rounded-full bg-white active:scale-95 transition flex items-center justify-center"
          >
            {/* simple chat glyph */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
              <defs>
                <linearGradient id="lamaChatGrad" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6B35" />
                  <stop offset="1" stopColor="#FFA84B" />
                </linearGradient>
              </defs>
              <path
                d="M7 18l-3 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7z"
                stroke="url(#lamaChatGrad)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M8 8h8M8 11h6" stroke="url(#lamaChatGrad)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Panel */}
      {open && (
        <div className="mt-3 w-[320px] sm:w-[360px] rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">LaMa Fuel Assistant</span>
              <span className="text-xs text-gray-600">How can we help?</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={panelRef} className="max-h-[320px] overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={m.role === "assistant" ? "flex justify-start" : "flex justify-end"}
              >
                <div
                  className={
                    m.role === "assistant"
                      ? "max-w-[85%] rounded-2xl rounded-tl-md bg-gray-100 text-gray-900 text-sm px-3 py-2"
                      : "max-w-[85%] rounded-2xl rounded-tr-md bg-orange-gradient text-white text-sm px-3 py-2"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-3">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickTopics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleTopic(t)}
                  className="text-xs px-3 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
                >
                  {t}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitCurrentInput();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={step.startsWith("capture") ? "Type your answer…" : "Type a message…"}
                className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400/60"
              />
              <button
                type="submit"
                className="rounded-md btn-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
              >
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

