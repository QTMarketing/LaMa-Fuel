import AboutHero from "@/components/AboutHero";
import AboutOverview from "@/components/AboutOverview";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutTeam from "@/components/AboutTeam";
import AboutFAQ from "@/components/AboutFAQ";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutOverview />
      <AboutPrinciples />
      <AboutTeam />
      <AboutFAQ />
      <AboutCTA />
    </div>
  );
}
