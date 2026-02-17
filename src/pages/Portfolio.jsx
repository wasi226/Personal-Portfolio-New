import React, { useState } from "react";

import Navigation from "../components/portfolio/Navigation";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import CertificationsSection from "../components/portfolio/CertificationsSection";
import GalleryModal from "../components/portfolio/GalleryModal";
import WorkshopsSection from "../components/portfolio/WorkshopsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="relative w-full bg-black text-white">

      {/* Navigation stays fixed */}
      <Navigation onGalleryOpen={() => setIsGalleryOpen(true)} />

      <div className="particles-overlay pointer-events-none fixed inset-0 z-[5]" />

      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Main Scroll Container */}
      <main className="w-full overflow-y-auto scroll-smooth pt-16">

        {/* HERO */}
        <section className="snap-start h-screen relative">
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section className="snap-start min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <AboutSection />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="snap-start min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <ProjectsSection />
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="snap-start min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <CertificationsSection />
          </div>
        </section>

        {/* WORKSHOPS */}
        <section className="snap-start min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <WorkshopsSection />
          </div>
        </section>

        {/* CONTACT */}
        <section className="snap-start min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <ContactSection />
          </div>
        </section>

        {/* FOOTER */}
        <section className="snap-start relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0b0b0f] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)] z-1" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20 z-2" />
          <div className="relative z-20">
            <Footer />
          </div>
        </section>

      </main>
    </div>
  );
}
