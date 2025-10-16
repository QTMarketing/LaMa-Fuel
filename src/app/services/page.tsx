import ServicesHero from "@/components/ServicesHero";
import OurServices from "@/components/OurServices";
import FuelsWeProvide from "@/components/FuelsWeProvide";
import WhyChooseUs from "@/components/WhyChooseUs";
import JoinNow from "@/components/JoinNow";

export default function ServicesPage() {
  return (
    <div>
      <div className="animate-fade-up" style={{animationDelay:'0ms'}}>
        <ServicesHero />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'120ms'}}>
        <OurServices />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'240ms'}}>
        <FuelsWeProvide />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'360ms'}}>
        <WhyChooseUs />
      </div>
      <div className="animate-fade-up" style={{animationDelay:'480ms'}}>
        <JoinNow />
      </div>
    </div>
  );
}