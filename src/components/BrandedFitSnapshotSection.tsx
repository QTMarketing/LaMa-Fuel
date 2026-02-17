import Link from "next/link";

const fitSignals = [
  "High daily volume corridors",
  "Markets where brand loyalty influences pump choice",
  "Sites planning image upgrades within 12-18 months",
  "Operators seeking loyalty-platform participation",
];

const cautionSignals = [
  "Low-throughput locations with limited brand pull",
  "Sites not ready for image-standard commitments",
];

export default function BrandedFitSnapshotSection() {
  return (
    <section id="eligibility" className="bg-white py-12 md:py-14">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange-600">Fit Snapshot</p>
          <h2 className="h2 mt-3 text-slate-900">
            Is Branded Fuel Right for Your Location?
          </h2>
          <p className="body mt-4">
            Branded programs perform best in locations where visibility, repeat traffic, and
            strong retail presentation can convert into consistent margin lift.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fitSignals.map((item) => (
            <div key={item} className="card p-5">
              <p className="text-sm md:text-base text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm font-semibold text-amber-900">Not ideal when:</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {cautionSignals.map((item) => (
              <span key={item} className="text-sm text-amber-800">
                • {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/brand-application" className="btn-primary">
            Check Eligibility
          </Link>
        </div>
      </div>
    </section>
  );
}
