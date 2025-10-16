import AboutHero from "@/components/AboutHero";
import AboutOverview from "@/components/AboutOverview";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutTeam from "@/components/AboutTeam";
import AboutFAQ from "@/components/AboutFAQ";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="animate-fade-up" style={{animationDelay:'0ms'}}>
        <AboutHero />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'120ms'}}>
        <AboutOverview />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'240ms'}}>
        <AboutMissionVision />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'360ms'}}>
        <AboutPrinciples />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'480ms'}}>
        <AboutTeam />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'600ms'}}>
        <AboutFAQ />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'720ms'}}>
        <AboutCTA />
      </div>
    </div>
  );
}
