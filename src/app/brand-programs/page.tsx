import Link from "next/link";

export default function BrandProgramsPage() {
  return (
    <div className="bg-white">
      <section className="section-container">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.06em] leading-none text-[#101828] animate-slide-text">
            Fuels Programs (Optional)
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl">
            LaMa Fuel supply is our primary focus. If your market requires a national brand, we can help evaluate
            optional branded programs that fit your goals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="font-heading font-bold text-xl tracking-wider text-[#101828]">
                Explore Fuels
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Review branded options, image standards, and program support when it makes sense for your market.
              </p>
              <Link
                href="/solutions/branded"
                className="mt-5 inline-flex items-center rounded-md bg-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
              >
                View Fuels Details
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="font-heading font-bold text-xl tracking-wider text-[#101828]">
                Talk with Our Team
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Not sure if branded supply is right for your trade area? Our team can walk you through
                options and economics.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center rounded-md border border-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Contact LaMa Fuel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


