"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Project data - matching the gallery items
const projects = [
  {
    id: 1,
    title: "Our Fleet",
    description: "Professional fuel delivery fleet",
    image: "/commitment/vision-widget.jpg",
    fullDescription: "Our extensive fleet of modern fuel delivery trucks ensures reliable and timely fuel distribution across all regions. Each vehicle is maintained to the highest standards, featuring state-of-the-art safety systems and efficient fuel transportation capabilities.",
    secondParagraph: "We continuously invest in upgrading our fleet to incorporate the latest technology and safety features, ensuring optimal performance and environmental compliance.",
    photos: [
      "/commitment/vision-widget.jpg",
      "/commitment/1.jpg",
      "/commitment/4.jpg",
      "/commitment/6.jpg",
    ],
  },
  {
    id: 2,
    title: "Fuel Operations",
    description: "Efficient fuel distribution",
    image: "/commitment/1.jpg",
    fullDescription: "We operate a comprehensive fuel distribution network that ensures efficient delivery and optimal fuel management. Our operations include strategic storage facilities, advanced logistics systems, and real-time monitoring to guarantee seamless fuel supply.",
    secondParagraph: "Our team of experts works around the clock to maintain operational excellence and meet the diverse needs of our clients.",
    photos: [
      "/commitment/1.jpg",
      "/commitment/vision-widget.jpg",
      "/commitment/6.jpg",
      "/commitment/2.jpg",
    ],
  },
  {
    id: 3,
    title: "Modern Facilities",
    description: "State-of-the-art fuel storage",
    image: "/commitment/2.jpg",
    fullDescription: "Our modern fuel storage facilities feature cutting-edge technology and safety measures. Equipped with advanced monitoring systems, automated controls, and comprehensive security protocols, these facilities represent the pinnacle of fuel storage infrastructure.",
    secondParagraph: "We ensure compliance with all environmental and safety regulations while maintaining the highest operational standards.",
    photos: [
      "/commitment/2.jpg",
      "/commitment/3.jpg",
      "/commitment/vision-widget.jpg",
      "/commitment/1.jpg",
    ],
  },
  {
    id: 4,
    title: "Service Excellence",
    description: "Dedicated customer service",
    image: "/commitment/3.jpg",
    fullDescription: "Our commitment to service excellence drives everything we do. We provide dedicated customer support, personalized solutions, and proactive assistance to ensure our clients receive the highest level of service at every interaction.",
    secondParagraph: "Our customer service team is trained to handle all inquiries promptly and professionally, ensuring customer satisfaction.",
    photos: [
      "/commitment/3.jpg",
      "/commitment/1.jpg",
      "/commitment/2.jpg",
      "/commitment/6.jpg",
    ],
  },
  {
    id: 5,
    title: "Fuel Delivery",
    description: "Reliable delivery services",
    image: "/commitment/4.jpg",
    fullDescription: "Our fuel delivery services are designed for reliability and precision. With a fleet of specialized vehicles and experienced drivers, we ensure on-time delivery, accurate quantities, and safe transportation of fuel to your location.",
    secondParagraph: "We utilize advanced routing software and real-time tracking to optimize delivery routes and minimize transit times.",
    photos: [
      "/commitment/4.jpg",
      "/commitment/vision-widget.jpg",
      "/commitment/6.jpg",
      "/commitment/1.jpg",
    ],
  },
  {
    id: 6,
    title: "Gas Station Network",
    description: "Wide coverage across regions",
    image: "/commitment/6.jpg",
    fullDescription: "Our extensive network of gas stations provides comprehensive coverage across multiple regions. Each station is strategically located, fully equipped, and staffed with trained professionals to serve our customers with excellence.",
    secondParagraph: "We continuously expand our network to better serve our customers and improve accessibility to quality fuel services.",
    photos: [
      "/commitment/6.jpg",
      "/commitment/1.jpg",
      "/commitment/2.jpg",
      "/commitment/3.jpg",
      "/commitment/vision-widget.jpg",
    ],
  },
  {
    id: 7,
    title: "Brand Recognition",
    description: "Trusted fuel brands",
    image: "/features/brand-recognition.jpg",
    fullDescription: "We partner with the most trusted fuel brands in the industry, ensuring quality, reliability, and customer satisfaction. Our brand partnerships enable us to offer premium fuel products that meet the highest industry standards.",
    secondParagraph: "Through these partnerships, we deliver exceptional value to our customers while maintaining our commitment to excellence.",
    photos: [
      "/features/brand-recognition.jpg",
      "/commitment/6.jpg",
      "/commitment/vision-widget.jpg",
      "/commitment/1.jpg",
    ],
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="bg-white min-h-screen py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="inline-block bg-orange-gradient text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Title */}
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] mb-6">
          {project.title}
        </h1>

        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            {project.fullDescription}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {(project as any).secondParagraph || ''}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-[0.06em] leading-tight text-[#101828] mb-6">
            Project Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo}
                  alt={`${project.title} - Photo ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedPhoto(null)}
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="w-8 h-8" />
                </motion.button>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-5xl max-h-[90vh] w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selectedPhoto}
                    alt={project.title}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
