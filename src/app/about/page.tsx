import AboutHero from "@/components/AboutHero";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutTeam from "@/components/AboutTeam";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
        <AboutHero />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
        <AboutPrinciples />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
        <AboutTeam />
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "360ms" }}>
        <AboutCTA />
      </div>
    </div>
  );
}
