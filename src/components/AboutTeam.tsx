"use client";
import Image from "next/image";

export default function AboutTeam() {
  const team = [
    { name: "David Lawrence", role: "Chief Executive Officer", img: "/team/team-member-1.jpg" },
    { name: "Sarah Chen", role: "Operations Director", img: "/team/team-member-2.jpg" },
    { name: "Marcus Thorne", role: "Head of Supply Chain", img: "/team/team-member-3.jpg" },
    { name: "Elena Rodriguez", role: "Strategic Partnerships", img: "/team/team-member-4.jpg" },
  ];

  return (
    <section className="bg-white text-slate-900 py-14">
      <div className="site-container">
        <p className="eyebrow text-orange-600">The Team</p>
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3">Visionary Leadership</h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Our executive team brings decades of experience in fuel logistics,
              distribution, and retail operations.
            </p>
          </div>
          <a href="#" className="text-xs text-orange-600 hover:text-orange-500 hidden md:inline-flex items-center gap-1">
            View Entire Board <span>→</span>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="relative h-56 w-full">
                <Image src={m.img} alt={m.name} fill className="object-cover" unoptimized />
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-500">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


