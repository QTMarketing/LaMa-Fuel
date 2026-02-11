"use client";

export default function AboutMissionVision() {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="site-container flex flex-col gap-8 text-left">
        {/* Vision Card */}
        <div className="bg-white text-[#101828] p-8 rounded-2xl">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] items-center">
          <h3
            className="font-heading font-bold text-3xl tracking-[0.08em]"
            style={{ color: "#FF6B35" }}
          >
            Our Vision
          </h3>
          <p className="text-lg md:text-xl text-[#101828]">
            We aim to set the standard for reliable fuel distribution with transparent processes, consistent supply, and trusted partnerships that help operators make confident decisions.
          </p>
          </div>
        </div>
        {/* Mission Card */}
        <div className="bg-white text-[#101828] p-8 rounded-2xl">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] items-center">
          <h3
            className="font-heading font-bold text-3xl tracking-[0.08em]"
            style={{ color: "#FF6B35" }}
          >
            Our Mission
          </h3>
          <p className="text-lg md:text-xl text-[#101828]">
            We deliver flexible fuel programs, operational support, and responsive service so our partners can grow sustainably and keep their locations running without disruption.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}


