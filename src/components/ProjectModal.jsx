import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Smartphone, Monitor, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [viewMode, setViewMode] = useState('desktop');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#111111]/80 backdrop-blur-md transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#FBFBF9] rounded-2xl sm:rounded-3xl border border-[#111111]/15 shadow-2xl flex flex-col overflow-hidden z-10 animate-fade-in-up">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#111111]/10 flex items-center justify-between bg-[#F5F5F0]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#111111]">
              [{project.number}]
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#111111]" id="modal-project-title">
              {project.title}
            </span>
            <span className="hidden sm:inline-block text-[10px] font-semibold tracking-[0.2em] px-2.5 py-0.5 rounded bg-[#111111]/8 text-[#5C5B56]">
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 bg-[#ECECE8] rounded-lg border border-[#111111]/10">
              <button
                type="button"
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-[#111111] text-[#FBFBF9] shadow-sm'
                    : 'text-[#5C5B56] hover:text-[#111111]'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-[#111111] text-[#FBFBF9] shadow-sm'
                    : 'text-[#5C5B56] hover:text-[#111111]'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Launch live site button */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111111] text-[#FBFBF9] text-xs font-semibold uppercase tracking-wider hover:bg-[#262626] transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C58A55]" />
            </a>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#5C5B56] hover:text-[#111111] hover:bg-[#111111]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#111111]"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Preview Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#EEEEEC] flex justify-center items-start min-h-[400px]">
          {viewMode === 'desktop' ? (
            <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-xl border border-[#111111]/10 bg-white">
              <div className="px-4 py-2.5 bg-[#F5F5F0] border-b border-[#111111]/10 flex items-center justify-between text-xs text-[#84837E]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/20"></div>
                </div>
                <span className="font-mono text-[11px] truncate max-w-sm">{project.url}</span>
                <span className="text-[11px] uppercase tracking-wider">Concept Preview</span>
              </div>
              <img
                src={project.desktopImage}
                alt={`${project.title} Desktop Preview`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="w-full max-w-[375px] rounded-[36px] overflow-hidden shadow-2xl border-[8px] border-[#111111] bg-white my-4">
              <div className="h-6 bg-[#111111] flex items-center justify-center">
                <div className="w-24 h-3.5 bg-black rounded-b-xl"></div>
              </div>
              <img
                src={project.mobileImage}
                alt={`${project.title} Mobile Preview`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="p-4 sm:p-5 border-t border-[#111111]/10 bg-[#FBFBF9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5C5B56]">
          <p className="max-w-xl font-normal leading-relaxed">
            {project.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#84837E]">
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
