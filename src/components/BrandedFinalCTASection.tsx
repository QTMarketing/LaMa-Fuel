import Link from "next/link";

export default function BrandedFinalCTASection() {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="site-container">
        <div className="rounded-2xl bg-orange-gradient px-8 py-10 text-center text-white shadow-md">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Assess Your Site for Branded Fuel Supply
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Talk with our team to evaluate eligibility, program fit, and launch readiness for your location.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/brand-application" className="btn-secondary bg-white text-orange-600 border-white">
              Check Eligibility
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Talk to Brand Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
