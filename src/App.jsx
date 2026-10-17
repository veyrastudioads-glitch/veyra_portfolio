import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import WhyVeyra from './components/WhyVeyra';
import Process from './components/Process';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#FBFBF9] text-[#111111] studio-canvas relative selection:bg-[#111111] selection:text-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9', color: '#111111' }}
    >
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Landmark */}
      <main id="main-content" className="bg-[#FBFBF9]" style={{ backgroundColor: '#FBFBF9' }}>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Selected Work */}
        <SelectedWork />

        {/* 03 — Services */}
        <Services />

        {/* 04 — Why Veyra */}
        <WhyVeyra />

        {/* 05 — Process */}
        <Process />

        {/* 06 — About */}
        <About />

        {/* 07 — Final CTA */}
        <FinalCTA />

        {/* 08 — Contact (Visual Prototype) */}
        <Contact />
      </main>

      {/* 09 — Footer */}
      <Footer />
    </div>
  );
}
