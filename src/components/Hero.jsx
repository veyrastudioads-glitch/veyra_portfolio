import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Veyra Studio Hero"
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-8 opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#111111] h-full" />
        ))}
      </div>

      {/* Top spacing & Eyebrow */}
      <div className="pt-4 sm:pt-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#111111]/10 bg-[#F5F5F0]/80 text-[#5C5B56] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55] animate-pulse"></span>
          <span>VEYRA STUDIO · DIGITAL CREATIVE STUDIO</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="my-auto py-12 sm:py-16 max-w-5xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold tracking-[-0.035em] text-[#111111] leading-[1.04] sm:leading-[1.02] mb-8 sm:mb-10 animate-fade-in-up">
          Websites that make <br className="hidden sm:inline" />
          businesses look <span className="underline decoration-[#C58A55]/40 decoration-2 underline-offset-8">premium</span>.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#5C5B56] font-normal leading-relaxed max-w-3xl mb-10 sm:mb-12 animate-fade-in-up [animation-delay:150ms]">
          Modern websites, digital experiences and creative content designed to help businesses stand out, build trust and turn attention into action.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up [animation-delay:300ms]">
          {/* Primary CTA */}
          <a
            href="#work"
            onClick={scrollToWork}
            id="hero-view-work-btn"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#111111] text-[#FBFBF9] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#262626] transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>View Our Work</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-[#C58A55]" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            onClick={scrollToContact}
            id="hero-start-project-btn"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-[#111111]/15 text-[#111111] bg-transparent hover:bg-[#F5F5F0] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#5C5B56] group-hover:text-[#111111]" />
          </a>
        </div>
      </div>

      {/* Supporting Bottom Label & Details */}
      <div className="pt-8 border-t border-[#111111]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E] animate-fade-in [animation-delay:450ms]">
        <div className="flex items-center gap-3">
          <span className="text-[#111111]">WEB · AI · CREATIVE</span>
          <span className="text-[#111111]/20">/</span>
          <span>BOUTIQUE STUDIO</span>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.15em] text-[#84837E]">
          <span className="hidden md:inline">CRAFTED FOR CONVERSION & PRESTIGE</span>
          <span className="hidden sm:inline">2026 EDITION</span>
        </div>
      </div>
    </section>
  );
}
