"use client";
import Image from "next/image";

export default function AboutTeam() {
  const teamImages = [
    { src: "/team/team-member-1.jpg", alt: "Team Member 1" },
    { src: "/team/team-member-2.jpg", alt: "Team Member 2" },
    { src: "/team/team-member-3.jpg", alt: "Team Member 3" },
    { src: "/team/team-member-4.jpg", alt: "Team Member 4" },
    { src: "/team/team-member-5.jpg", alt: "Team Member 5" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">Built by Experts, Backed by Passion</h2>
        <div className="flex justify-center items-center space-x-[-2rem] mb-12">
          {teamImages.map((member, i) => (
            <div key={i} className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white ${ i === 2 ? 'z-10 transform scale-110' : '' }`}>
              <Image src={member.src} alt={member.alt} layout="fill" className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our diverse team of fuel industry engineers, logistics experts, and client strategists share one goal: to build a better future for fuel management. With backgrounds from top institutions and startups alike, we blend precision with creativity in everything we do.
        </p>
      </div>
    </section>
  );
}


