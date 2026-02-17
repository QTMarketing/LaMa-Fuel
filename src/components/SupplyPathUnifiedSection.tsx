"use client";

import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "LaMa Fuel",
    description:
      "Keep pricing control and protect margin with unbranded supply. Built for operators who want reliable deliveries without franchise constraints or long-term lock-ins.",
    bullets: [
      "Higher margin flexibility",
      "No franchise constraints",
      "Reliable delivery support",
    ],
    href: "/solutions/unbranded",
    image: "/photos/pump13.jpg",
    imageAlt: "LaMa Fuel supply",
  },
  {
    title: "Branded Fuel",
    description:
      "Access major fuel brands, image programs, and loyalty tools with hands-on operational support. Grow brand trust while staying agile in your market.",
    bullets: [
      "Brand trust at the pump",
      "Programs and image support",
      "Agile market positioning",
    ],
    href: "/solutions/branded",
    image: "/photos/pump12.jpg",
    imageAlt: "Branded fuel supply",
  },
];

const logos = [
  { file: "mobil.jpg", alt: "Mobil", url: "https://www.mobil.com/en" },
  { file: "exxon.jpg", alt: "Exxon", url: "https://www.exxonmobilchemical.com/en" },
  { file: "chevron.jpg", alt: "Chevron", url: "https://www.chevron.com/" },
  { file: "citgo.jpg", alt: "Citgo", url: "https://www.citgo.com/" },
  { file: "phillips.jpg", alt: "Phillips 66", url: "https://www.phillips66.com/" },
  { file: "sunoco.jpg", alt: "Sunoco", url: "https://www.sunoco.com/" },
  { file: "texco.jpg", alt: "Texaco", url: "https://www.sunoco.texaco/" },
  { file: "alon-asf.jpg", alt: "Alon ASF", url: "https://alonfuel.com/" },
];
const duplicatedLogos = [...logos, ...logos];

export default function SupplyPathUnifiedSection() {
  return (
    <section className="section bg-white">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-orange-500">Supply Paths</p>
          <h2 className="h2 mt-3">Choose Your Supply Path</h2>
          <p className="body mt-4">
            Compare unbranded and branded programs to match your margin goals,
            location strategy, and day-to-day operations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {paths.map((item) => {
            const isBranded = item.title === "Branded Fuel";

            return (
              <article key={item.title} className="card overflow-hidden">
                <div className="relative h-56 md:h-64">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="h3">{item.title}</h3>
                  <p className="body mt-3 text-slate-700">{item.description}</p>
                  {!isBranded && (
                    <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {isBranded && (
                    <div className="mt-6 rounded-xl border border-orange-300 bg-orange-gradient p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
                        Incentive for Branded Programs
                      </p>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-base md:text-lg font-extrabold text-white">
                          Up to $1,000,000*
                        </p>
                        <p className="text-sm text-white/90">
                          Available for qualifying branded applications.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={item.href} className="btn-secondary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 border-y border-slate-200 py-6">
          <p className="text-center text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Trusted Brands We Support
          </p>
          <div className="group mt-4 overflow-hidden">
            <div className="flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]">
              {duplicatedLogos.map((logo, index) => (
                <Link
                  key={`${logo.alt}-${index}`}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 min-w-[160px] items-center justify-center rounded-md hover:bg-slate-50 transition"
                >
                  <Image
                    src={`/partners/${logo.file}`}
                    alt={logo.alt}
                    width={176}
                    height={64}
                    className="h-14 w-auto object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
