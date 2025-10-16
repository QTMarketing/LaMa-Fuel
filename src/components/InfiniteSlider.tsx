"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export function InfiniteSlider({ 
  children, 
  duration = 40, 
  className = "" 
}: InfiniteSliderProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {/* Render children twice for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </motion.div>
    </div>
  );
}
