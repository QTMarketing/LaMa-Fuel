import UnbrandedHero from "@/components/UnbrandedHero";
import UnbrandedBody from "@/components/UnbrandedBody";
import BrandedBody from "@/components/BrandedBody";
import AboutCTA from "@/components/AboutCTA";

export default function UnbrandedPage() {
  return (
    <main>
      <UnbrandedHero />
      <UnbrandedBody />
      {/* Reuse comparison and testimonials from branded page */}
      <BrandedBody showWhy={false} />
      <AboutCTA />
    </main>
  );
}


