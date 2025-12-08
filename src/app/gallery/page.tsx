"use client";

import Image from "next/image";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images - you can add more images here
  const galleryImages = [
    {
      src: "/commitment/vision-widget.jpg",
      alt: "Our Fleet",
      category: "Fleet"
    },
    {
      src: "/commitment/1.jpg",
      alt: "Fuel Operations",
      category: "Operations"
    },
    {
      src: "/commitment/2.jpg",
      alt: "Facility",
      category: "Facilities"
    },
    {
      src: "/commitment/3.jpg",
      alt: "Service",
      category: "Services"
    },
    {
      src: "/commitment/4.jpg",
      alt: "Delivery",
      category: "Delivery"
    },
    {
      src: "/commitment/6.jpg",
      alt: "Gas Station",
      category: "Facilities"
    },
    {
      src: "/features/brand-recognition.jpg",
      alt: "Brand Recognition",
      category: "Brand"
    },
    {
      src: "/features/increase-profit.jpg",
      alt: "Growth",
      category: "Operations"
    },
    {
      src: "/features/support.jpg",
      alt: "Support",
      category: "Services"
    },
    {
      src: "/features/setup.jpg",
      alt: "Setup",
      category: "Operations"
    },
    {
      src: "/hero2.png",
      alt: "Hero Image",
      category: "Facilities"
    },
    {
      src: "/mission-image.jpg",
      alt: "Mission",
      category: "Operations"
    },
  ];

  const categories = ["All", "Fleet", "Operations", "Facilities", "Services", "Delivery", "Brand"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="subheading bg-primary-gradient/10 text-primary-gradient px-3 py-1 rounded-full">
            GALLERY
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] leading-none text-[#101828] mt-4 mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our fleet, facilities, and operations through our photo gallery.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-orange-gradient text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}
