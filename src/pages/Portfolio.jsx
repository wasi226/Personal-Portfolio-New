
import React, { useEffect } from "react";
import Navigation from "../components/portfolio/Navigation";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import CertificationsSection from "../components/portfolio/CertificationsSection";
import WorkshopsSection from "../components/portfolio/WorkshopsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-gray-900 bg-particles">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
          <WorkshopsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
