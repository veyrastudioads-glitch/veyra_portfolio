import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 border-b border-white/8 relative overflow-hidden bg-gradient-to-b from-[#08080A] via-[#0E0E12]/40 to-[#08080A]" id="cta" aria-labelledby="cta-heading">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
        <div className="max-w-[820px] mx-auto flex flex-col items-center">
          <h2 id="cta-heading" className="text-[2.25rem] sm:text-[3.5rem] lg:text-[4rem] font-bold text-[#F5F5F7] tracking-[-0.035em] leading-[1.1] mb-5">
            Have a business that deserves a better website?
          </h2>
          <p className="text-[1.0625rem] sm:text-[1.2rem] text-[#9E9EA8] max-w-[580px] mb-10 leading-relaxed">
            Let’s discuss your vision, audit your current digital presence, and create an experience that elevates your brand above the competition.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 text-[1.0625rem] font-bold rounded-md bg-[#D4FF00] text-[#08080A] hover:bg-[#E2FF4D] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,255,0,0.35)] transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
