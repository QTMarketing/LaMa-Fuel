import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import IncentivesHighlight from "@/components/IncentivesHighlight";
import TwoPathsComparison from "@/components/TwoPathsComparison";
import DeliveryLogistics from "@/components/DeliveryLogistics";
import Testimonials from "@/components/Testimonials";
import CalculatorSection from "@/components/CalculatorSection";
import PartnersSection from "@/components/PartnersSection";
import BlogNews from "@/components/BlogNews";
import WhyBrandSection from "@/components/WhyBrandSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="animate-fade-up" style={{animationDelay:'0ms'}}>
        <Hero />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'120ms'}}>
        <PartnersSection />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'240ms'}}>
        <MissionSection />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'300ms'}}>
        <IncentivesHighlight />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'360ms'}}>
        <WhyBrandSection />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'480ms'}}>
        <TwoPathsComparison />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'520ms'}}>
        <DeliveryLogistics />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'560ms'}}>
        <CalculatorSection />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'600ms'}}>
        <BlogNews />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'600ms'}}>
        <ContactSection />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'640ms'}}>
        <Testimonials />
      </div>
    </div>
  );
}


