"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon, ArrowTrendingUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from "@/lib/utils";
import { FeatureSteps } from "@/components/ui/feature-section";

// 1. UPDATED DATA: Color classes are now semi-transparent for the glass effect.
const features = [
  {
    title: "Instant Brand Recognition",
    description: "Leverage the power of nationally recognized fuel brands like Mobil, Chevron, and Sunoco. By aligning with these trusted names, your business gains immediate credibility and access to a loyal customer base.",
    image: "/features/brand-recognition.jpg",
    color: "bg-brand/80", // Increased opacity for better readability
  },
  {
    title: "Increase Your Profit",
    description: "Gain a competitive edge with access to our extensive supplier network, ensuring favorable pricing on fuel. Our streamlined credit card processing system reduces transaction fees and boosts your bottom line.",
    image: "/features/increase-profit.jpg",
    color: "bg-brand-dark-blue/80", // Increased opacity for better readability
  },
  {
    title: "Marketing & Operational Support",
    description: "You're not just a client; you're a partner. We provide a full suite of marketing materials and offer ongoing operational guidance on everything from compliance to customer service best practices.",
    image: "/features/support.jpg",
    color: "bg-brand/80", // Increased opacity for better readability
  },
  {
    title: "Hassle-Free Set-Up",
    description: "From initial consultation to your grand opening, we manage the entire branding process. A dedicated project manager handles permits, coordinates with suppliers, and ensures your team is fully trained.",
    image: "/features/setup.jpg",
    color: "bg-brand-dark-blue/80", // Increased opacity for better readability
  },
];

export default function WhyBrandSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const featureStepsData = features.map((f, i) => ({
    step: `Step ${i + 1}`,
    title: f.title,
    content: f.description,
    image: f.image,
  }));
  return (
    <section id="why-brand" className="relative overflow-hidden bg-orange-gradient">

      <div className="relative z-10 py-10 sm:py-10">
        <div className="mx-auto max-w-[1600px] px-3 lg:px-4">

          <div className="mx-auto max-w-[1600px]">
            <div id="why-0"></div>
            <div id="why-1"></div>
            <div id="why-2"></div>
            <div id="why-3"></div>
            <FeatureSteps
              features={featureStepsData}
              className="bg-white rounded-2xl mx-auto"
              title="Why Brand With Us?"
              autoPlayInterval={null}
              imageHeight="h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}