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
    <section className="section bg-white">
      <div className="site-container grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-orange-600">FAQ</p>
          <h2 className="mt-3 text-slate-900 text-[clamp(2.2rem,3.5vw,4rem)] font-extrabold !tracking-tight !leading-[1.06]">
            <span className="hidden md:block whitespace-nowrap">You Have Questions,</span>
            <span className="hidden md:block whitespace-nowrap">We Have Answers</span>
            <span className="md:hidden">You Have Questions, We Have Answers</span>
          </h2>
          <p className="body mt-4">
            Clear answers on service scope, eligibility, and how we support your operations.
          </p>
        </div>
        <div className="md:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="card rounded-lg p-4 md:p-5">
                  <Disclosure.Button className="w-full flex justify-between items-center gap-4 text-left">
                    <span className="text-base md:text-lg font-semibold text-slate-900">{faq.question}</span>
                    <span className={`text-2xl text-orange-600 transition-transform duration-300 ${open ? 'transform rotate-45' : ''}`}>+</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
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


