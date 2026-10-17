import React from 'react';
import { Layers, Smartphone, Compass } from 'lucide-react';

export default function WhyVeyra() {
  const principles = [
    {
      name: 'CUSTOM',
      description: 'No one-size-fits-all templates.',
      detail: 'Every brand has an authentic visual tone. We craft bespoke interfaces calibrated to your exact business presence.',
      icon: Layers,
    },
    {
      name: 'RESPONSIVE',
      description: 'Designed to work beautifully across devices.',
      detail: 'From high-resolution desktop displays to hand-held smartphone screens, every breakpoint is tested with obsessive care.',
      icon: Smartphone,
    },
    {
      name: 'INTENTIONAL',
      description: 'Every layout and interaction has a purpose.',
      detail: 'We reject decorative bloat. Typography, negative space, and micro-interactions work together to guide customer decisions.',
      icon: Compass,
    },
  ];

  return (
    <section
      id="why-veyra"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Why Veyra"
    >
      {/* Editorial Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 sm:mb-32">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-0.5 bg-[#C58A55]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
              WHY VEYRA
            </span>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#84837E]">
            THE STUDIO PHILOSOPHY
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05] mb-8">
            Small studio.<br />
            <span className="text-[#C58A55]">Serious</span> attention to detail.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#5C5B56] leading-relaxed font-normal max-w-3xl">
            Veyra Studio combines thoughtful design, modern web technology and AI-assisted creative production to create digital experiences that feel distinctive without feeling complicated.
          </p>
        </div>
      </div>

      {/* 3 Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-12 border-t border-[#111111]/8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;

          return (
            <div
              key={principle.name}
              className="group p-8 sm:p-10 rounded-2xl bg-[#F5F5F0]/60 border border-[#111111]/6 hover:border-[#111111]/15 transition-all duration-300 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FBFBF9] border border-[#111111]/8 flex items-center justify-center mb-8 text-[#111111] group-hover:text-[#C58A55] transition-colors">
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono font-semibold text-[#84837E]">
                  0{index + 1}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#111111]">
                  {principle.name}
                </h3>
              </div>

              <p className="text-base sm:text-lg font-medium text-[#111111] mb-3">
                {principle.description}
              </p>

              <p className="text-xs sm:text-sm text-[#5C5B56] leading-relaxed font-normal">
                {principle.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
