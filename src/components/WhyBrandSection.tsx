"use client";

const features = [
  {
    title: "Instant Brand Recognition",
    description: "Leverage the power of nationally recognized fuel brands like Mobil, Chevron, and Sunoco to gain immediate credibility and access to a loyal customer base.",
  },
  {
    title: "Increase Your Profit",
    description: "Gain a competitive edge with access to our extensive supplier network and streamlined credit card processing that reduces transaction fees.",
  },
  {
    title: "Marketing & Operational Support",
    description: "We provide a full suite of marketing materials and ongoing operational guidance on everything from compliance to customer service best practices.",
  },
  {
    title: "Hassle-Free Set-Up",
    description: "We manage the entire branding process from initial consultation to grand opening, with a dedicated project manager handling permits, supplier coordination, and team training.",
  },
];

export default function WhyBrandSection() {
  return (
    <section id="why-brand" className="relative overflow-hidden bg-[#F8F9FB]">
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title */}
            <div className="flex items-center justify-center border-r border-gray-300 pr-12 h-full">
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-normal">
                Why Brand With Us?
              </h2>
            </div>

            {/* Right side: Features list */}
            <div className="space-y-8 pl-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-gradient flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl md:text-2xl tracking-wider mb-2">
                      {feature.title}
                    </h3>
                    <p className="why-brand-description text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}