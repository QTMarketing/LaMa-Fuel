"use client";
import { useState } from "react";

export default function BlogFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Fuel Tips", "Industry News", "Safety", "Sustainability"];

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary-gradient text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
