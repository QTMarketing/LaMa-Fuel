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
    <div className="flex flex-col justify-between items-center w-40 mx-auto mb-6 overflow-hidden bg-black/60 rounded-tl-2xl rounded-bl-2xl md:backdrop-blur-sm px-2.5 py-3.5">
      <div className="flex flex-row md:flex-col gap-1.5 md:gap-2.5 w-full text-center">
        {stats.map((stat, index) => {
          const { value, suffix } = parseStatNumber(stat.number);
          return (
            <div
              key={index}
              className={`${index < stats.length - 1 ? 'border-r md:border-r-0 md:border-b border-white/20 pr-1.5 md:pr-0 md:pb-3 md:mb-3' : ''} flex-shrink-0 flex-1 md:w-full`}
            >
              <p className="text-xs md:text-2xl font-bold text-white leading-none text-center">
                <AnimatedNumber to={value} />
                {suffix}
              </p>
              <p className="text-[8px] md:text-[10px] text-neutral-300 mt-0.5 md:mt-1 text-center leading-tight">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


