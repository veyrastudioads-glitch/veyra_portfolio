import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-20 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#FBFBF9]" aria-label="Footer">
      <div className="flex flex-col gap-16">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold tracking-tight text-[#111111]">
                VEYRA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55]"></span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
              WEB · AI · CREATIVE
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.16em] text-[#5C5B56] hover:text-[#111111] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5C5B56] hover:text-[#111111] transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <div className="w-7 h-7 rounded-full border border-[#111111]/15 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-[#FBFBF9] group-hover:border-[#111111] transition-all">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Bottom Tier: Copyright & Meta */}
        <div className="pt-8 border-t border-[#111111]/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono tracking-wider text-[#84837E]">
          <p>© 2026 Veyra Studio. All rights reserved.</p>
          <p className="text-[11px] uppercase tracking-widest text-[#A9A8A1]">
            BOUTIQUE DIGITAL PRACTICE
          </p>
        </div>
      </div>
    </footer>
  );
}
