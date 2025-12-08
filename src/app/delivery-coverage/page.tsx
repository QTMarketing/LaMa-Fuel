import Link from "next/link";

export default function DeliveryCoveragePage() {
  return (
    <div className="bg-white">
      <section className="section-container">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828]">
            Delivery & Coverage
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl">
            Learn where LaMa Fuel can deliver today and access the QuickTrack portal to monitor
            loads, invoices, and activity in real time.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="font-heading font-bold text-xl tracking-wider text-[#101828]">
                Service Area
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                We provide scheduled and on-demand deliveries across our active regions. Talk with
                our team to confirm coverage for your exact location and volume needs.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="font-heading font-bold text-xl tracking-wider text-[#101828]">
                QuickTrack Portal
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Use the QuickTrack portal to view deliveries, track balances, and download reports
                for your sites.
              </p>
              <a
                href="https://www.quicktrackfuel.net/account/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-md bg-orange-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition"
              >
                Open QuickTrack Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


