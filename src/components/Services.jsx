import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      number: '01',
      title: 'WEB DESIGN',
      description: 'Modern responsive websites designed around your brand and customers.',
      deliverables: ['Custom Layouts', 'Art Direction', 'Interactive UX', 'High Conversion Strategy'],
    },
    {
      number: '02',
      title: 'BUSINESS WEBSITES',
      description: 'Professional websites for cafés, salons, restaurants, studios and growing businesses.',
      deliverables: ['Fast Loading', 'Mobile-First', 'Booking & Menus', 'Google Search Optimised'],
    },
    {
      number: '03',
      title: 'AI & CREATIVE',
      description: 'AI-assisted visual production, creative concepts and digital content.',
      deliverables: ['Visual Generation', 'Editorial Imagery', 'Prompt Engineering', 'Brand Assets'],
    },
    {
      number: '04',
      title: 'PRODUCT & UGC',
      description: 'Product visuals, promotional concepts and social-first creative content.',
      deliverables: ['Product Showcases', 'Social Content', 'Visual Mockups', 'Campaign Assets'],
    },
  ];

  return (
    <section
      id="services"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Services"
    >
      {/* Section Header */}
      <div className="mb-20 sm:mb-28 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-0.5 bg-[#C58A55]"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
            WHAT WE DO
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6">
          Digital experiences built around your business.
        </h2>
        <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed max-w-2xl font-normal">
          We combine contemporary aesthetics, clean code and AI-powered production to give forward-thinking businesses a distinct advantage online.
        </p>
      </div>

      {/* Editorial Service Rows */}
      <div className="border-t border-[#111111]/12 flex flex-col">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-[#111111]/12 py-10 sm:py-14 transition-all duration-300 cursor-default"
            >
              {/* Expanding Accent Underline on hover */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C58A55] transition-all duration-500 ease-out ${
                  isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#84837E] group-hover:text-[#C58A55] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] transition-transform duration-300 group-hover:translate-x-1.5">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-base sm:text-lg text-[#5C5B56] group-hover:text-[#111111] font-normal leading-relaxed transition-colors duration-200">
                    {service.description}
                  </p>

                  {/* Micro-tags on hover */}
                  <div
                    className={`flex flex-wrap gap-2 mt-4 transition-all duration-300 ${
                      isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#F4F4F0] text-[#5C5B56] border border-[#111111]/8 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="md:col-span-1 flex justify-start md:justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#111111]/12 flex items-center justify-center transition-all duration-300 group-hover:bg-[#111111] group-hover:border-[#111111] group-hover:text-[#FBFBF9]">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C58A55]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
