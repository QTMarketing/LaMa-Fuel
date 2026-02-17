import Image from "next/image";
import Link from "next/link";

const partners = [
  { file: "alon-asf 1.png", alt: "Alon ASF", url: "https://alonfuel.com/" },
  { file: "exxon 1.png", alt: "Exxon", url: "https://www.exxonmobilchemical.com/en" },
  { file: "sunoco 1.png", alt: "Sunoco", url: "https://www.sunoco.com/" },
  { file: "chevron 1.png", alt: "Chevron", url: "https://www.chevron.com/" },
  { file: "mobil 1.png", alt: "Mobil", url: "https://www.mobil.com/en" },
  { file: "phillips 1.png", alt: "Phillips 66", url: "https://www.phillips66.com/" },
  { file: "texco 1.png", alt: "Texaco", url: "https://www.sunoco.texaco/" },
  { file: "citgo 1.png", alt: "Citgo", url: "https://www.citgo.com/" },
];

export default function BrandedProofSection() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange-600">Connected Brand Network</p>
          <h2 className="h2 mt-3 text-slate-900">Fuel Brands We Work With</h2>
          <p className="body mt-3">
            Access recognized fuel brands through one supply partner, with structured support for rollout and day-to-day operations.
          </p>
        </div>

        <div className="mt-8 card p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-700">Connected fuel brands</p>
            <span className="text-xs text-slate-500">Click any logo to visit the partner site</span>
          </div>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <Link
                key={partner.alt}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 rounded-lg border border-slate-200 bg-white px-3 py-2 flex items-center justify-center hover:border-orange-300 hover:shadow-sm transition"
              >
                <div className="relative h-10 w-32">
                  <Image
                    src={`/partners/new/${encodeURIComponent(partner.file)}`}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs text-orange-700">
            Need help choosing the right brand program for your site?
            <Link href="/contact" className="ml-1 font-semibold underline underline-offset-2">
              Talk to a brand advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
