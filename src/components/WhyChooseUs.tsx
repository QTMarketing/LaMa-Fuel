"use client";
import { GlobeAltIcon, WrenchScrewdriverIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function WhyChooseUs() {
  const solutions = [
    { title: "Gasoline Handling Tips", description: "Learn about safe and effective gasoline handling practices to ensure smooth operations and prevent accidents.", icon: <GlobeAltIcon className="w-8 h-8 text-primary-gradient" /> },
    { title: "Diesel Maintenance Guide", description: "Discover the best practices for diesel maintenance to prolong the lifespan of your vehicles and equipment.", icon: <WrenchScrewdriverIcon className="w-8 h-8 text-primary-gradient" /> },
    { title: "E85 Benefits Guide", description: "Explore the environmental and economic benefits of using E85 fuel as a sustainable alternative in your operations.", icon: <EyeIcon className="w-8 h-8 text-primary-gradient" /> },
    { title: "Cost-Effective Solutions", description: "Find cost-effective solutions and strategies to optimize your fuel management and reduce operational expenses.", icon: <HeartIcon className="w-8 h-8 text-primary-gradient" /> },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Fueling Solutions Made Easy</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12">Our guides offer valuable insights and tips on fuel management, storage, and best practices to optimize your fuel-related operations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, i) => (
            <div key={i} className="bg-white p-8 rounded-lg text-center transition transform hover:-translate-y-2 hover:shadow-lg">
              <div className="flex justify-center mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{solution.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}