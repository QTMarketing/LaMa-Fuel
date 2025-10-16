"use client";

const principles = [
  { title: "Transparency", description: "No hidden fees. Just honest tools for your needs." },
  { title: "Security First", description: "Your trust is our foundation." },
  { title: "Empowerment", description: "We design every feature to help you make smarter decisions." },
  { title: "Innovation", description: "Driven by data, shaped by your needs." },
];

export default function AboutPrinciples() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Built on Principles That Matter</h2>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left: 2x2 Grid of Cards */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {principles.map((item, i) => (
              <div key={i} className="bg-dark text-white p-6 rounded-xl shadow-md flex flex-col">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-white/70 flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Right: Video Player */}
          <div className="w-full h-full bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/principles-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}


