"use client";

export default function AboutMissionVision() {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-orange-gradient text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-white/80">
            To become the most trusted energy partner for businesses, delivering clarity, control, and confidence as a standard.
          </p>
        </div>
        {/* Mission Card */}
        <div className="bg-orange-gradient text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-white/80">
            To help businesses build sustainable growth by delivering intuitive fuel solutions that adapt to their needs.
          </p>
        </div>
      </div>
    </section>
  );
}


