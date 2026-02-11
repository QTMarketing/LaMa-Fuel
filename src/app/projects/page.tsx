"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Project data - matching the gallery items
const projects = [
  {
    id: 1,
    title: "Our Fleet",
    description: "Professional fuel delivery fleet",
    image: "/commitment/team-main.jpg",
    fullDescription: "Our extensive fleet of modern fuel delivery trucks ensures reliable and timely fuel distribution across all regions. Each vehicle is maintained to the highest standards, featuring state-of-the-art safety systems and efficient fuel transportation capabilities.",
    photos: [
      "/commitment/team-main.jpg",
      "/commitment/1.jpg",
      "/commitment/4.jpg",
    ],
  },
  {
    id: 2,
    title: "Fuel Operations",
    description: "Efficient fuel distribution",
    image: "/commitment/1.jpg",
    fullDescription: "We operate a comprehensive fuel distribution network that ensures efficient delivery and optimal fuel management. Our operations include strategic storage facilities, advanced logistics systems, and real-time monitoring to guarantee seamless fuel supply.",
    photos: [
      "/commitment/1.jpg",
      "/commitment/team-main.jpg",
      "/commitment/6.jpg",
    ],
  },
  {
    id: 3,
    title: "Modern Facilities",
    description: "State-of-the-art fuel storage",
    image: "/commitment/2.jpg",
    fullDescription: "Our modern fuel storage facilities feature cutting-edge technology and safety measures. Equipped with advanced monitoring systems, automated controls, and comprehensive security protocols, these facilities represent the pinnacle of fuel storage infrastructure.",
    photos: [
      "/commitment/2.jpg",
      "/commitment/3.jpg",
      "/commitment/team-main.jpg",
    ],
  },
  {
    id: 4,
    title: "Service Excellence",
    description: "Dedicated customer service",
    image: "/commitment/3.jpg",
    fullDescription: "Our commitment to service excellence drives everything we do. We provide dedicated customer support, personalized solutions, and proactive assistance to ensure our clients receive the highest level of service at every interaction.",
    photos: [
      "/commitment/3.jpg",
      "/commitment/1.jpg",
      "/commitment/2.jpg",
    ],
  },
  {
    id: 5,
    title: "Fuel Delivery",
    description: "Reliable delivery services",
    image: "/commitment/4.jpg",
    fullDescription: "Our fuel delivery services are designed for reliability and precision. With a fleet of specialized vehicles and experienced drivers, we ensure on-time delivery, accurate quantities, and safe transportation of fuel to your location.",
    photos: [
      "/commitment/4.jpg",
      "/commitment/team-main.jpg",
      "/commitment/6.jpg",
    ],
  },
  {
    id: 6,
    title: "Gas Station Network",
    description: "Wide coverage across regions",
    image: "/commitment/6.jpg",
    fullDescription: "Our extensive network of gas stations provides comprehensive coverage across multiple regions. Each station is strategically located, fully equipped, and staffed with trained professionals to serve our customers with excellence.",
    photos: [
      "/commitment/6.jpg",
      "/commitment/1.jpg",
      "/commitment/2.jpg",
      "/commitment/3.jpg",
    ],
  },
  {
    id: 7,
    title: "Supply Network",
    description: "Reliable coverage and logistics",
    image: "/features/support.jpg",
    fullDescription: "Our supply network is built around reliable delivery, compliance-first operations, and responsive support to keep independent operators stocked and protected.",
    photos: [
      "/features/support.jpg",
      "/commitment/6.jpg",
      "/commitment/team-main.jpg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="site-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-none text-[#101828] mb-4 animate-rise-text">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects showcasing our expertise in fuel operations, fleet management, and service excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-[#101828] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block bg-orange-gradient text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 active:scale-95 transition"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
