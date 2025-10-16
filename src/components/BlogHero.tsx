"use client";

export default function BlogHero() {
  return (
    <section className="pt-20 pb-10 bg-gradient-to-r from-[#ECFEFF] to-[#FFF7ED]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="bg-primary-gradient text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Blog</span>
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Fuel Insights & Industry News
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Stay informed with the latest trends, practical advice, and industry updates from LaMa Fuel. Explore our guides on fuel management, safety practices, and sustainability.
        </p>
      </div>
    </section>
  );
}
