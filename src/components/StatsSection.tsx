"use client";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function StatsSection() {
  const stats = [
    { number: "20", label: "Years of Experience" },
    { number: "100+", label: "Successful Properties" },
    { number: "100+", label: "Projects Completed" },
    { number: "100k+", label: "Satisfied Clients" },
  ];

  // Helper function to parse number and suffix
  const parseStatNumber = (numberStr: string) => {
    const hasPlus = numberStr.includes('+');
    const hasK = numberStr.toLowerCase().includes('k');
    
    // Extract numeric value
    let numericValue = parseInt(numberStr.replace(/[^0-9]/g, ''));
    
    // Do not scale 'k' values; AnimatedNumber should receive the base number only
    
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

  return (
    <div className="flex flex-col justify-between items-center w-full mx-auto mb-10 overflow-x-hidden bg-black/50 rounded-lg md:backdrop-blur-sm p-3 sm:p-4">
      <div className="flex flex-row md:flex-col gap-2 md:gap-4 w-full text-center md:text-center">
        {stats.map((stat, index) => {
          const { value, suffix } = parseStatNumber(stat.number);
          return (
            <div
              key={index}
              className={`${index < stats.length - 1 ? 'border-r md:border-r-0 md:border-b border-white/20 pr-2 md:pr-0 md:pb-4 md:mb-4' : ''} flex-shrink-0 flex-1 md:w-full`}
            >
              <p className="text-sm md:text-4xl font-bold text-white leading-none text-center">
                <AnimatedNumber to={value} />
                {suffix}
              </p>
              <p className="text-[8px] md:text-sm text-neutral-300 mt-1 md:mt-2 text-center">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


