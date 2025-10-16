"use client";
import { Disclosure } from '@headlessui/react';

export default function AboutFAQ() {
  const faqs = [
    { question: "Who can benefit from LaMa Fuel's services?", answer: "Our services are designed for businesses of all sizes with vehicle fleets, including logistics, construction, agriculture, and public services that require reliable fuel supply and management." },
    { question: "What solutions does LaMa Fuel offer?", answer: "We offer wholesale fuel distribution, advanced fleet fuel management with tracking and analytics, bulk storage solutions, and emergency fuel services to cover all your operational needs." },
    { question: "How does LaMa Fuel improve operational efficiency?", answer: "By providing real-time data, automated reporting, and fraud detection, we help you reduce waste, control costs, and simplify your fuel management processes from start to finish." },
    { question: "How can I schedule a consultation with LaMa Fuel?", answer: "You can schedule a consultation by filling out the contact form on our website or by calling our sales team directly. We're ready to help you find the best solution for your business." },
    { question: "Can LaMa Fuel help reduce fuel costs?", answer: "Absolutely. Our fuel management solutions help you optimize routes, monitor consumption, prevent theft, and access competitive pricing, all of which contribute to significant cost savings." }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#ECFEFF] to-[#FFF7ED]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <p className="text-sm font-bold text-primary-gradient mb-2">[ FAQ ]</p>
          <h2 className="text-3xl font-bold text-dark">You Have Questions, We Have Answers</h2>
        </div>
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="bg-white border-2 border-dark rounded-lg p-4 shadow-sm">
                  <Disclosure.Button className="w-full flex justify-between items-center text-left">
                    <span className="font-semibold text-dark">{faq.question}</span>
                    <span className={`text-2xl text-primary-gradient transition-transform duration-300 ${open ? 'transform rotate-45' : ''}`}>+</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}


