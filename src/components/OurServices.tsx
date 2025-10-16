"use client";
import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const services = [
  { title: "Fuel Card Program", description: "Secure fuel cards for controlled spending and convenience.", detailedDescription: "Our comprehensive fuel card program offers unmatched control and security. Set spending limits per driver or vehicle, track every transaction in real-time, and eliminate the risk of unauthorized purchases." },
  { title: "Transaction Monitoring", description: "Real-time alerts on suspicious or unusual usage to protect your business.", detailedDescription: "With our advanced transaction monitoring system, you get instant alerts for any activity that falls outside your set parameters, helping you stop fraud before it happens." },
  { title: "Gasoline Handling Tips", description: "Safe and effective gasoline handling practices to prevent accidents.", detailedDescription: "Safety is our top priority. We provide expert training and resources on the best practices for gasoline handling, storage, and dispensing to ensure your team and your site remain safe and compliant." },
  { title: "Diesel Maintenance Guide", description: "Best practices to prolong the lifespan of your vehicles and equipment.", detailedDescription: "Proper diesel maintenance is key to extending the life of your fleet. Our guides and support help you implement a proactive maintenance schedule, reducing downtime and costly repairs." },
  { title: "E85 Benefits Guide", description: "Explore the environmental and economic benefits of using E85 fuel.", detailedDescription: "Considering a switch to a more sustainable fuel? Our E85 benefits guide breaks down the cost savings, emission reductions, and performance characteristics to help you make an informed decision." },
  { title: "Cost-Effective Solutions", description: "Optimize your fuel management and reduce operational expenses.", detailedDescription: "We specialize in creating tailored solutions that drive down costs. From optimizing delivery schedules to leveraging fuel market data, we work with you to find every opportunity to reduce your operational expenses." },
];

export default function OurServices() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#ECFEFF] to-[#FFF7ED] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary-gradient font-semibold text-sm">FEATURED SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Our Company Provide The Best Fuel Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A descriptive paragraph that tells clients about the quality and reliability of your services.</p>
          </div>
          <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
            {services.map((service, i) => (
              <div key={i} onClick={() => setSelectedService(service)} className="group relative bg-white rounded-lg shadow-lg p-8 flex-shrink-0 w-80 h-48 flex flex-col justify-center cursor-pointer transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <ArrowDownIcon className="w-5 h-5" />
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-6"></div>
          </div>
          <div className="text-right mt-4"><p className="text-sm italic text-gray-500">Slide for more &gt;&gt;</p></div>
        </div>
      </section>

      {selectedService && (
        <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1"><h3 className="text-2xl font-bold text-dark">{selectedService.title}</h3></div>
                <div className="md:col-span-2"><p className="text-gray-600 leading-relaxed">{selectedService.detailedDescription}</p></div>
            </div>
        </section>
      )}
    </>
  );
}