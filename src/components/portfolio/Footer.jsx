
import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-6">
      {/* Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

      <div className="container mx-auto px-6 py-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-1">
              Wasi Haider
            </h3>
            <p className="text-gray-300 text-sm">
              Made with{" "}
              <Heart className="w-3 h-3 inline text-red-600 mx-1 animate-pulse" />{" "}
              using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} Wasi Haider. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="control-button w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-600/20 border border-red-600/50 shadow-[0_0_25px_rgba(220,38,38,0.2)] hover:bg-red-600/30 hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
