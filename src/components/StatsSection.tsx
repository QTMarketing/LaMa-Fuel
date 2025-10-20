"use client";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function StatsSection() {
  const stats = [
    { number: "20", label: "Years of Experience" },
    { number: "100+", label: "Successful Properties" },
    { number: "100+", label: "Projects Completed" },
    { number: "10k+", label: "Satisfied Clients" },
  ];

  // Helper function to parse number and suffix
  const parseStatNumber = (numberStr: string) => {
    const hasPlus = numberStr.includes('+');
    const hasK = numberStr.toLowerCase().includes('k');
    
    // Extract numeric value
    let numericValue = parseInt(numberStr.replace(/[^0-9]/g, ''));
    
    // Convert 'k' to thousands
    if (hasK) {
      numericValue = numericValue * 1000;
    }
    
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
    <div className="w-fit ml-auto mr-0 rounded-xl bg-black/50 backdrop-blur-sm shadow-lg ring-1 ring-white/10 p-6">
      <div className="grid grid-cols-1 gap-6 text-right divide-y divide-white/20">
        {stats.map((stat, index) => {
          const { value, suffix } = parseStatNumber(stat.number);
          return (
            <div key={index} className="pt-4 first:pt-0">
              <p className="text-4xl font-bold text-white leading-none">
                <AnimatedNumber to={value} />
                {suffix}
              </p>
              <p className="text-sm text-neutral-300 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


