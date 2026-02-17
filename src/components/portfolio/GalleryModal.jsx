import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCarousel from "@/components/portfolio/GalleryCarousel";

export default function GalleryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0" onClick={onClose}></div>
          <motion.div
            className="relative z-10 mx-auto my-4 w-[min(1200px,92vw)] max-h-[92vh] overflow-hidden rounded-3xl border border-red-600/20 bg-gradient-to-br from-[#0f131f] to-[#080910] shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-red-600/20">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-red-300/70">Gallery</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Certificates & Visuals
                </h2>
              </div>
              <button
                onClick={onClose}
                className="h-10 w-10 rounded-full border border-red-600/30 text-red-200 hover:text-white hover:bg-red-600/30 transition"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5 mx-auto" />
              </button>
            </div>

            <div className="px-6 pb-2">
              <GalleryCarousel />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
