import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="final-cta"
      className="py-28 sm:py-36 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 text-center bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Call to Action"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle eyebrow mark */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55]"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
            NEW INITIATIVES
          </span>
        </div>

        {/* Main CTA Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.04] mb-8">
          Have a business that deserves a better website?
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#5C5B56] font-normal leading-relaxed max-w-2xl mb-12">
          Let's create something simple, memorable and built around your business.
        </p>

        {/* Action Button */}
        <div>
          <a
            href="#contact"
            onClick={scrollToContact}
            id="final-cta-start-btn"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#111111] text-[#FBFBF9] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] hover:bg-[#262626] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#C58A55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
