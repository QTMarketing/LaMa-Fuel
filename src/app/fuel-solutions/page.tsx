import Link from "next/link";
import Image from "next/image";

export default function FuelSolutionsPage() {
  return (
    <div className="bg-white">
      <section className="section-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Title, Description, and Cards */}
            <div className="space-y-8">
              <div>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] animate-slide-text">
                  Fuel Solutions
                </h1>
                <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
                  View all LaMa Fuel supply options in one place. Compare unbranded programs that
                  maximize your flexibility with branded programs that bring national recognition.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/solutions/unbranded"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-4 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <h2 className="font-heading font-bold text-lg md:text-xl tracking-wider text-[#101828]">
                    LaMa Fuel
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Keep full control of your site while gaining reliable supply, pricing support, and modern monitoring tools.
                  </p>
                  <span className="mt-3 inline-flex items-center rounded-md bg-orange-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-sm group-hover:opacity-90 active:scale-95 transition">
                    View Program
                  </span>
                </Link>

                <Link
                  href="/solutions/branded"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-4 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <h2 className="font-heading font-bold text-lg md:text-xl tracking-wider text-[#101828]">
                    Branded Fuel
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Tap into national brands like Exxon, Mobil, and Chevron to drive traffic and increase customer trust.
                  </p>
                  <span className="mt-3 inline-flex items-center rounded-md border border-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-900 transition group-hover:bg-gray-900 group-hover:text-white">
                    View Programs
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/photos/pump12.jpg"
                  alt="LaMa Fuel solutions - fuel station and delivery services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


