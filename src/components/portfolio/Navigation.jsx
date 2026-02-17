
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import image8 from '@/assets/WasiLogo.png'

export default function Navigation({ onGalleryOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Workshops", href: "#workshops" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleGalleryClick = () => {
    if (onGalleryOpen) {
      onGalleryOpen();
    } else {
      handleNavClick("#gallery");
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-red-600/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-red-600/30">
              <img
                src={image8}
                alt="Wasi logo"
                className="w-8 h-8 rounded-full"
              />
            </span>
            <span className="hidden sm:inline text-sm uppercase text-red-200">
              Wasi Haider
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-200/80 hover:text-red-400 transition-colors relative group cursor-pointer text-sm uppercase tracking-[0.2em]"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={handleGalleryClick}
              className="px-4 py-2 rounded-full border border-red-500/70 text-red-200 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:text-white hover:bg-red-600/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.45)]"
            >
              Gallery
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-xl border-b border-red-600/30">
            <div className="px-6 py-5 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-200 hover:text-red-400 transition-colors py-2 text-sm uppercase tracking-[0.25em]"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleGalleryClick}
                className="block w-full text-left py-2 text-sm uppercase tracking-[0.25em] text-red-200 border border-red-500/60 rounded-full px-4 hover:text-white hover:bg-red-600/20 hover:shadow-[0_0_18px_rgba(220,38,38,0.45)] transition-all duration-300"
              >
                Gallery
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
