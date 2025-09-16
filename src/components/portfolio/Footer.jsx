
import React from "react";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm border-t border-gray-700/50 py-12">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2 text-white">
              Wasi Haider
            </h3>
            <p className="text-gray-400">
              Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500 mx-1 animate-pulse" />{" "}
              using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Wasi Haider. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/40 animate-bounce-slow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
