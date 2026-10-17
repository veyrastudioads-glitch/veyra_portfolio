import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FBFBF9]/90 backdrop-blur-md ${
          scrolled
            ? 'py-3.5 border-b border-[#111111]/8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.04)]'
            : 'py-5 sm:py-6 border-b border-[#111111]/4'
        }`}
        style={{ backgroundColor: 'rgba(251, 251, 249, 0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="group flex items-center gap-2.5 text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            aria-label="Veyra Studio Home"
          >
            <span className="font-bold tracking-[-0.03em] text-xl sm:text-2xl text-[#111111] transition-transform duration-200 group-hover:opacity-80">
              VEYRA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C58A55] transition-transform duration-300 group-hover:scale-125"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.16em] text-[#5C5B56] hover:text-[#111111] transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              id="nav-start-project-btn"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] px-4 py-2.5 rounded-full border border-[#111111]/15 text-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#FBFBF9] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 -mr-2 text-[#111111] hover:text-[#C58A55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FBFBF9] md:hidden transition-all duration-300 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#84837E]">
            Menu
          </p>
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111] hover:text-[#C58A55] transition-colors flex items-center justify-between border-b border-[#111111]/8 pb-4"
              >
                <span>{link.name}</span>
                <span className="text-xs uppercase tracking-widest text-[#84837E]">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#111111]/8 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] w-full py-4 rounded-xl bg-[#111111] text-[#FBFBF9] hover:bg-[#222222] transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-center tracking-[0.16em] uppercase text-[#84837E]">
            WEB · AI · CREATIVE
          </p>
        </div>
      </div>
    </>
  );
}
