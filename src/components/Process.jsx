import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business, audience and goals.',
      description: 'We explore your brand positioning, audience expectations, competitors and strategic objectives.',
      icon: Search,
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'Develop the visual direction and user experience.',
      description: 'We craft high-fidelity art directions, editorial typography hierarchies and responsive wireframes.',
      icon: PenTool,
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Turn the approved direction into a responsive website.',
      description: 'Clean modern code, snappy animations, and seamless responsive behavior across all viewports.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Refine, test and deliver the final experience.',
      description: 'Comprehensive cross-device QA, speed optimization, and deployment with ongoing peace of mind.',
      icon: Rocket,
    },
  ];

  return (
    <section
      id="process"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Process"
    >
      {/* Section Header */}
      <div className="mb-20 sm:mb-28 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-0.5 bg-[#C58A55]"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
            THE PROCESS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6">
          From idea to experience.
        </h2>
        <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed max-w-2xl font-normal">
          A lean, collaborative framework designed to move from concept to live deployment with precision and velocity.
        </p>
      </div>

      {/* Desktop Horizontal Process with connecting line */}
      <div className="hidden lg:block relative">
        {/* Subtle continuous connecting line behind the steps */}
        <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#111111]/12 -z-0" />

        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="group flex flex-col">
                {/* Step node & Number indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#FBFBF9] border-2 border-[#111111]/15 group-hover:border-[#C58A55] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                    <span className="font-mono text-xs font-bold text-[#111111] group-hover:text-[#C58A55]">
                      {step.number}
                    </span>
                  </div>
                  <div className="h-[2px] flex-1 bg-[#111111]/10 group-hover:bg-[#C58A55]/40 transition-colors" />
                </div>

                {/* Stage Title */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#C58A55] transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-[#111111] mb-3">
                  {step.subtitle}
                </p>

                {/* Stage description */}
                <p className="text-xs text-[#5C5B56] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Vertical Timeline */}
      <div className="lg:hidden relative pl-6 sm:pl-8 border-l border-[#111111]/15 flex flex-col gap-12 sm:gap-14">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-[#FBFBF9] border-2 border-[#111111] flex items-center justify-center">
                <span className="font-mono text-[10px] font-bold text-[#111111]">
                  {step.number}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C58A55] block mb-1">
                  STAGE {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-semibold text-[#111111] mb-2">
                  {step.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#5C5B56] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
