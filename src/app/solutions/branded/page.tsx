import BrandedHero from "@/components/BrandedHero";
import BrandedBody from "@/components/BrandedBody";
import FuelsWeProvide from "@/components/FuelsWeProvide";
import PartnersSection from "@/components/PartnersSection";
import AboutCTA from "@/components/AboutCTA";

export default function BrandedPage() {
  return (
    <main>
      <BrandedHero />
      <FuelsWeProvide />
      <PartnersSection />
      <BrandedBody />
      <AboutCTA />
    </main>
  );
}


