"use client";

import { useEffect, useState } from "react";

type AnimatedStatProps = {
  value: string; // e.g., "20+", "100+", "100k+"
  className?: string;
};

export default function AnimatedStat({ value, className = "" }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    const hasPlus = val.includes('+');
    const hasK = val.toLowerCase().includes('k');
    
    // Extract numeric value
    const numericValue = parseInt(val.replace(/[^0-9]/g, '')) || 0;
    
    // Determine suffix
    let suffix = '';
    if (hasK && hasPlus) {
      suffix = 'k+';
    } else if (hasK) {
      suffix = 'k';
    } else if (hasPlus) {
      suffix = '+';
    }
    
    return { value: numericValue, suffix };
  };

  const { value: targetValue, suffix } = parseValue(value);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    // Start animation after component mounts
    const timer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const stepValue = targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.round(stepValue * currentStep), targetValue);
        setDisplayValue(newValue);

        if (currentStep >= steps || newValue >= targetValue) {
          setDisplayValue(targetValue);
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      }, stepDuration);
    }, 300); // Small delay to ensure page is loaded

    return () => {
      clearTimeout(timer);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [targetValue]);

  return (
    <span className={`font-extrabold ${className}`}>
      {displayValue}{suffix}
    </span>
  );
}