import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Site Evaluation",
    detail: "Review traffic profile, market fit, and operational readiness for branded participation.",
  },
  {
    id: "02",
    title: "Program Matching",
    detail: "Align your site with suitable brand options, eligibility criteria, and growth targets.",
  },
  {
    id: "03",
    title: "Launch Planning",
    detail: "Define image scope, compliance checkpoints, and rollout sequencing with clear ownership.",
  },
  {
    id: "04",
    title: "Go-Live Support",
    detail: "Execute launch with supply coordination, partner support, and ongoing performance oversight.",
  },
];

export default function BrandedProcessSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange-600">Implementation Process</p>
          <h2 className="h2 mt-3 text-slate-900">From Evaluation to Launch in Four Steps</h2>
          <p className="body mt-4">
            Structured implementation keeps the program rollout clear, accountable, and operationally stable.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.id} className="card p-5">
              <div className="text-xs font-semibold tracking-widest text-orange-600">{step.id}</div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn-secondary">
            Talk to Brand Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
