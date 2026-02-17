"use client";

import BrandedBenefitsSection from "@/components/BrandedBenefitsSection";

export default function BrandedBody({ showWhy = true }: { showWhy?: boolean }) {
  if (!showWhy) return null;
  return <BrandedBenefitsSection />;
}


