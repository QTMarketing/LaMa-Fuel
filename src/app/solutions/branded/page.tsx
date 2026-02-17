import BrandedHero from "@/components/BrandedHero";
import { PremiumBlendSection } from "@/components/PartnersSection";
import BrandedBenefitsSection from "@/components/BrandedBenefitsSection";
import BrandedFinalCTASection from "@/components/BrandedFinalCTASection";
import BrandedFitSnapshotSection from "@/components/BrandedFitSnapshotSection";
import BrandedProcessSection from "@/components/BrandedProcessSection";
import BrandedProofSection from "@/components/BrandedProofSection";
import Link from "next/link";

export default function BrandedPage() {
  return (
    <main>
      <BrandedHero />
      <PremiumBlendSection />
      <BrandedProofSection />
      <section className="bg-orange-gradient text-white py-10 md:py-12">
        <div className="site-container">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/80">Incentive</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white">
              Qualified Sites May Access
              <span className="ml-2 inline-flex items-center rounded-xl bg-white px-4 py-2 text-orange-600 shadow-lg -translate-y-1">
                $1,000,000*
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/90">
              Eligibility depends on location profile, volume, and program terms.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/brand-application"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-orange-600 shadow-md hover:brightness-95 transition"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>
      <BrandedFitSnapshotSection />
      <BrandedBenefitsSection />
      <BrandedProcessSection />
      <BrandedFinalCTASection />
    </main>
  );
}


