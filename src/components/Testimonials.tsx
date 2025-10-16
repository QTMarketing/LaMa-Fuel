"use client";

import { motion } from "framer-motion";
import { QuoteIcon, Star } from "lucide-react";
import Link from "next/link";

type Testimonial = {
  name: string;
  station: string;
  location: string;
  text: string;
  rating?: number;
};

const testimonialsRowA: Testimonial[] = [
  {
    name: "Ravi P.",
    station: "Sunview Fuel",
    location: "Houston, TX",
    text: "Switched to LaMa last year — margins improved and deliveries are on time.",
    rating: 5,
  },
  {
    name: "Melissa G.",
    station: "QuickPump #12",
    location: "San Antonio, TX",
    text: "Their team handles the details so I can focus on the store.",
    rating: 5,
  },
  {
    name: "Juan D.",
    station: "Lone Star Fuel",
    location: "Dallas, TX",
    text: "Transparent dispatch and no runouts — exactly what we needed.",
    rating: 4,
  },
  {
    name: "Amy K.",
    station: "SpeedyMart",
    location: "El Paso, TX",
    text: "Incentives helped us upgrade dispensers and signage fast.",
    rating: 5,
  },
];

const testimonialsRowB: Testimonial[] = [
  {
    name: "Vik S.",
    station: "Bluebonnet Fuel",
    location: "Austin, TX",
    text: "Loyalty programs boosted repeat visits at our branded site.",
    rating: 5,
  },
  {
    name: "Nina L.",
    station: "Pioneer Gas",
    location: "Fort Worth, TX",
    text: "Pricing guidance and promos increased our inside sales.",
    rating: 4,
  },
  {
    name: "Harsh P.",
    station: "Ridge Fuel",
    location: "Plano, TX",
    text: "Reliable drops even during peak weekends — big difference.",
    rating: 5,
  },
  {
    name: "Lauren T.",
    station: "Canyon Mart",
    location: "Waco, TX",
    text: "The process was smooth from setup to supply.",
    rating: 4,
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="w-[420px] min-h-[170px] rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 flex-shrink-0">
      <QuoteIcon className="w-6 h-6 text-[#FF6B35]" />
      <p className="mt-3 text-gray-700 leading-relaxed line-clamp-3">{t.text}</p>
      <div className="mt-5">
        <div className="font-semibold text-gray-900">{t.name}</div>
        <div className="text-sm text-gray-500">{t.station} — {t.location}</div>
      </div>
      {t.rating && (
        <div className="mt-3">
          <Stars rating={t.rating} />
        </div>
      )}
    </div>
  );
}

function InfiniteRow({ items, direction = "ltr" }: { items: Testimonial[]; direction?: "ltr" | "rtl" }) {
  const duplicated = [...items, ...items];
  const animateX = direction === "ltr" ? [0,  -1200] : [ -1200, 0];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: animateX }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="w-full px-0">
        <div className="text-center max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Trusted by Partners Across Texas</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Real results from independent operators who grew their business with LaMa.</p>
        </div>

        <div className="mt-10">
          {/* Single Row: LTR */}
          <InfiniteRow items={[...testimonialsRowA, ...testimonialsRowB]} direction="ltr" />
        </div>

        <div className="mt-12 text-center px-6 lg:px-8">
          <Link href="/brand-application">
            <button className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
              <span>Join Our Network</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


