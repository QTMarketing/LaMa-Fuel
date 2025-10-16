"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type AnimatedNumberProps = {
  to: number;
};

export default function AnimatedNumber({ to }: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2, // Animation duration in seconds
      ease: "easeOut",
    });

    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}
