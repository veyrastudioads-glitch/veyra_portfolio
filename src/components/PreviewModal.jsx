import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, ArrowUpRight, X } from 'lucide-react';

export default function PreviewModal({ isOpen, onClose, url, title }) {
  const [deviceView, setDeviceView] = useState('desktop');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setDeviceView('desktop');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
    >
      <div className="w-full h-full max-w-[1400px] mx-auto bg-[#0E0E12] border border-white/20 rounded-2xl flex flex-col overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-3.5 sm:px-5 bg-[#14141A] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6875rem] px-2 py-0.5 bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] font-bold rounded-[2px] tracking-wider hidden sm:inline-block">
              LIVE SANDBOX
            </span>
            <h3 id="preview-modal-title" className="font-display text-sm font-semibold text-[#F5F5F7] truncate max-w-[220px] sm:max-w-md">
              {title || 'Concept Project Preview'}
            </h3>
          </div>

          {/* Viewport Switcher Buttons */}
          <div className="hidden md:flex items-center gap-1 bg-[#0E0E12] p-1 rounded-md border border-white/10">
            <button
              type="button"
              onClick={() => setDeviceView('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs rounded transition-all ${
                deviceView === 'desktop'
                  ? 'bg-[#14141A] text-[#D4FF00] border border-white/20 font-bold'
                  : 'text-[#9E9EA8] hover:text-[#F5F5F7]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceView('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs rounded transition-all ${
                deviceView === 'tablet'
                  ? 'bg-[#14141A] text-[#D4FF00] border border-white/20 font-bold'
                  : 'text-[#9E9EA8] hover:text-[#F5F5F7]'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceView('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs rounded transition-all ${
                deviceView === 'mobile'
                  ? 'bg-[#14141A] text-[#D4FF00] border border-white/20 font-bold'
                  : 'text-[#9E9EA8] hover:text-[#F5F5F7]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (390px)</span>
            </button>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#F5F5F7] bg-[#0E0E12] border border-white/10 rounded-md hover:border-white/25 hover:bg-[#1A1A22] transition-colors"
            >
              <span>Open in New Tab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-md bg-[#0E0E12] border border-white/10 text-[#9E9EA8] hover:text-[#F5F5F7] hover:border-[#D4FF00] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div className="flex-1 bg-[#070709] relative flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-[#0E0E12] flex flex-col items-center justify-center gap-3 z-10 transition-opacity">
              <div className="w-8 h-8 rounded-full border-2 border-white/15 border-t-[#D4FF00] animate-spin-custom"></div>
              <span className="font-mono text-xs text-[#9E9EA8]">Loading concept sandbox...</span>
            </div>
          )}

          <div
            className={`w-full h-full bg-black rounded-md overflow-hidden relative shadow-2xl transition-all duration-300 ${
              deviceView === 'desktop'
                ? 'max-w-full'
                : deviceView === 'tablet'
                ? 'max-w-[768px] h-[95%] border border-white/20 rounded-xl'
                : 'max-w-[390px] h-[95%] border-2 border-white/25 rounded-2xl'
            }`}
          >
            <iframe
              src={url}
              title={title}
              onLoad={() => setLoading(false)}
              className="w-full h-full border-0 bg-[#0A0A0C]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
