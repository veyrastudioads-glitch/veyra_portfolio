import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Monitor, Smartphone, Maximize2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function SelectedWork() {
  const [activePreview, setActivePreview] = useState(null);

  const projects = [
    {
      number: '01',
      id: 'ember-oak',
      category: 'CAFÉ · WEBSITE CONCEPT',
      title: 'EMBER & OAK',
      description:
        'A warm, contemporary café website concept focused on atmosphere, menu discovery and reservations.',
      status: 'CONCEPT PROJECT',
      url: 'https://ember-and-oak-cafe.onrender.com/index.html',
      desktopImage: '/projects/ember-oak-preview.jpg',
      mobileImage: '/projects/ember-oak-mobile.jpg',
      tags: ['Atmosphere & Storytelling', 'Curated Menu UX', 'Instant Table Reservations'],
      palette: ['#1C1613', '#C58A55', '#EFECE6'],
      layout: 'standard', // Left content, right dominant visual
    },
    {
      number: '02',
      id: 'elane',
      category: 'BEAUTY · WEBSITE CONCEPT',
      title: 'ÉLANE',
      description:
        'A refined beauty studio website concept combining editorial visuals, service discovery and appointment-focused UX.',
      status: 'CONCEPT PROJECT',
      url: 'https://salon-new-ezc2.onrender.com/',
      desktopImage: '/projects/elane-preview.jpg',
      mobileImage: '/projects/elane-mobile.jpg',
      tags: ['Editorial Aesthetics', 'Signature Services', 'Seamless Booking Journey'],
      palette: ['#1A1918', '#D4AF87', '#F6F3EE'],
      layout: 'editorial-reversed', // Alternating unique composition as required by prompt
    },
  ];

  return (
    <section
      id="work"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Selected Work"
    >
      {/* Section Header */}
      <div className="mb-20 sm:mb-28 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-0.5 bg-[#C58A55]"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
            SELECTED WORK
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6">
          A few things we've designed.
        </h2>
        <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed max-w-2xl font-normal">
          Concept projects exploring how thoughtful design can transform a business's digital presence.
        </p>
      </div>

      {/* Projects Presentation - Large Editorial Layouts */}
      <div className="flex flex-col gap-28 sm:gap-36 lg:gap-44">
        {/* Project 01: Ember & Oak */}
        <article className="group relative" id="project-ember-oak">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Meta & Info column (Cols 1-5) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between h-full">
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#111111]">
                    [ 01 ]
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#84837E]">
                    CAFÉ · WEBSITE CONCEPT
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-5 transition-transform duration-300 group-hover:translate-x-1">
                  EMBER & OAK
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed font-normal mb-8">
                  A warm, contemporary café website concept focused on atmosphere, menu discovery and reservations.
                </p>

                {/* Concept project tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F4F0] border border-[#111111]/8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5C5B56] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55]"></span>
                  <span>CONCEPT PROJECT</span>
                </div>

                {/* Project highlights / exploration tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#111111]/10 text-[#5C5B56] bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#111111]/8">
                {/* Primary External CTA */}
                <a
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-[#FBFBF9] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#262626] transition-all duration-300 group/btn shadow-sm"
                  aria-label="View Ember & Oak Live Project in new tab"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#C58A55]" />
                </a>

                {/* In-page preview modal button */}
                <button
                  type="button"
                  onClick={() => setActivePreview(projects[0])}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#111111]/15 text-[#111111] bg-transparent hover:bg-[#F5F5F0] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#84837E]" />
                  <span>Quick Preview</span>
                </button>
              </div>
            </div>

            {/* Dominant Visual Presentation (Cols 6-12) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ECECE8] border border-[#111111]/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)]"
              >
                {/* Mockup browser frame header */}
                <div className="px-4 py-3 bg-[#F4F4F0] border-b border-[#111111]/8 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                  </div>
                  <div className="text-[11px] font-mono text-[#84837E] truncate max-w-[200px] sm:max-w-xs">
                    ember-and-oak-cafe.onrender.com
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#84837E]" />
                </div>

                {/* Main Project Image with subtle scale */}
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9.5] bg-[#E5E4DE]">
                  <img
                    src={projects[0].desktopImage}
                    alt="Ember & Oak Café Website Concept Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle hover gradient scrim */}
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Mobile Preview Inset floating badge */}
                <div className="hidden sm:flex absolute bottom-5 right-5 items-center gap-2.5 px-4 py-2 rounded-xl bg-[#111111]/90 text-[#FBFBF9] backdrop-blur-md text-[11px] font-medium tracking-wider shadow-lg">
                  <Smartphone className="w-3.5 h-3.5 text-[#C58A55]" />
                  <span>Responsive Mobile Experience</span>
                </div>
              </a>
            </div>
          </div>
        </article>

        {/* Project 02: ÉLANE — Unique Editorial Composition */}
        <article className="group relative" id="project-elane">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Dominant Visual Presentation (Cols 1-7) - Asymmetric flipped placement */}
            <div className="lg:col-span-7 order-1">
              <a
                href={projects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ECECE8] border border-[#111111]/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)]"
              >
                {/* Mockup browser frame header */}
                <div className="px-4 py-3 bg-[#F4F4F0] border-b border-[#111111]/8 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                  </div>
                  <div className="text-[11px] font-mono text-[#84837E] truncate max-w-[200px] sm:max-w-xs">
                    salon-new-ezc2.onrender.com
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#84837E]" />
                </div>

                {/* Main Project Image with subtle scale */}
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9.5] bg-[#E5E4DE]">
                  <img
                    src={projects[1].desktopImage}
                    alt="ÉLANE Beauty Studio Website Concept Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle hover gradient scrim */}
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Editorial Floating Tag */}
                <div className="hidden sm:flex absolute bottom-5 left-5 items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FBFBF9]/95 text-[#111111] backdrop-blur-md text-[11px] font-semibold tracking-wider shadow-lg border border-[#111111]/10">
                  <Monitor className="w-3.5 h-3.5 text-[#C58A55]" />
                  <span>High-Fidelity Studio Layout</span>
                </div>
              </a>
            </div>

            {/* Meta & Info column (Cols 8-12) */}
            <div className="lg:col-span-5 order-2 flex flex-col justify-between h-full">
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
                  <span className="text-xs font-mono font-semibold tracking-wider text-[#111111]">
                    [ 02 ]
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#84837E]">
                    BEAUTY · WEBSITE CONCEPT
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-5 transition-transform duration-300 group-hover:translate-x-1">
                  ÉLANE
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed font-normal mb-8">
                  A refined beauty studio website concept combining editorial visuals, service discovery and appointment-focused UX.
                </p>

                {/* Concept project tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F4F0] border border-[#111111]/8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5C5B56] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55]"></span>
                  <span>CONCEPT PROJECT</span>
                </div>

                {/* Project highlights / exploration tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {projects[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#111111]/10 text-[#5C5B56] bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#111111]/8">
                {/* Primary External CTA */}
                <a
                  href={projects[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-[#FBFBF9] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#262626] transition-all duration-300 group/btn shadow-sm"
                  aria-label="View Élane Live Project in new tab"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#C58A55]" />
                </a>

                {/* In-page preview modal button */}
                <button
                  type="button"
                  onClick={() => setActivePreview(projects[1])}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#111111]/15 text-[#111111] bg-transparent hover:bg-[#F5F5F0] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#84837E]" />
                  <span>Quick Preview</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Modal for Quick Preview */}
      {activePreview && (
        <ProjectModal
          project={activePreview}
          onClose={() => setActivePreview(null)}
        />
      )}
    </section>
  );
}
