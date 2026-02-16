import BrandedHero from "@/components/BrandedHero";
import BrandedBody from "@/components/BrandedBody";
import { PremiumBlendSection } from "@/components/PartnersSection";
import AboutCTA from "@/components/AboutCTA";

export default function BrandedPage() {
  return (
    <main>
      <BrandedHero />
      <PremiumBlendSection />
      <BrandedBody />
      <AboutCTA />
    </main>
  );
}


