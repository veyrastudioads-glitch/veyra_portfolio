import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="About Veyra"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Label */}
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-0.5 bg-[#C58A55]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
              ABOUT VEYRA
            </span>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#84837E]">
            INDEPENDENT PRACTICE
          </p>
        </div>

        {/* Right Column: Statement & Editorial Narrative */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-8">
              Good design should make a business feel more valuable.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5C5B56] leading-relaxed font-normal">
              Veyra Studio is an independent digital creative studio focused on modern websites, AI-assisted creative work and visual experiences for businesses that want to present themselves better online.
            </p>
          </div>

          {/* Architectural Studio Visual Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111111] text-[#FBFBF9] p-8 sm:p-12 border border-[#111111]/10">
            <div className="relative z-10 max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C58A55] block mb-3">
                STUDIO ETHOS
              </span>
              <p className="text-base sm:text-lg font-light text-[#E5E5E0] leading-relaxed mb-6">
                We believe digital presence is the highest-leverage touchpoint for modern businesses. When your website feels premium, customers perceive your service with greater confidence.
              </p>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10 text-xs font-mono tracking-wider text-[#A9A8A1]">
                <div>
                  <span className="text-white block font-sans font-semibold text-sm">Web & Experience</span>
                  <span>Bespoke Engineering</span>
                </div>
                <div>
                  <span className="text-white block font-sans font-semibold text-sm">Visual Direction</span>
                  <span>AI-Assisted Production</span>
                </div>
                <div>
                  <span className="text-white block font-sans font-semibold text-sm">Conversion UX</span>
                  <span>Trust-Driven Architecture</span>
                </div>
              </div>
            </div>

            {/* Subtle atmospheric background gradient */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C58A55]/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
