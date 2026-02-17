import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon, X, Plus, Minus, RefreshCw } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GalleryItems } from "@/entities/Gallery";

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleClose = () => {
    setActiveIndex(null);
    setZoomLevel(1);
  };

  const handleOpen = (index) => {
    setActiveIndex(index);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev + 1) % GalleryItems.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev - 1 + GalleryItems.length) % GalleryItems.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  const activeItem = activeIndex !== null ? GalleryItems[activeIndex] : null;

  const previewOverlay = useMemo(() => {
    if (!activeItem) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0" onClick={handleClose}></div>
          <motion.div
            className="relative z-10 mx-auto my-10 w-[min(1100px,92vw)] max-h-[85vh]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -top-10 right-0 flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="h-10 w-10 rounded-full border border-red-500/40 bg-black/60 text-red-200 hover:text-white hover:bg-red-600/30 transition"
                aria-label="Zoom out"
              >
                <Minus className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleZoomReset}
                className="h-10 w-10 rounded-full border border-red-500/40 bg-black/60 text-red-200 hover:text-white hover:bg-red-600/30 transition"
                aria-label="Reset zoom"
              >
                <RefreshCw className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleZoomIn}
                className="h-10 w-10 rounded-full border border-red-500/40 bg-black/60 text-red-200 hover:text-white hover:bg-red-600/30 transition"
                aria-label="Zoom in"
              >
                <Plus className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleClose}
                className="h-10 w-10 rounded-full border border-red-500/40 bg-black/60 text-red-200 hover:text-white hover:bg-red-600/30 transition"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5 mx-auto" />
              </button>
            </div>
            <div className="overflow-hidden rounded-3xl border border-red-600/30 bg-black/40 shadow-2xl">
              <div className="flex items-center justify-center bg-black/40">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full max-h-[85vh] object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-red-200/80">
                {activeItem.type}
              </p>
              <h4 className="text-xl font-semibold text-white">
                {activeItem.title}
              </h4>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 rounded-full border border-red-500/40 bg-black/40 px-4 py-2 text-sm uppercase tracking-[0.25em] text-red-200 hover:text-white hover:bg-red-600/20 transition"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Prev
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 rounded-full border border-red-500/40 bg-black/40 px-4 py-2 text-sm uppercase tracking-[0.25em] text-red-200 hover:text-white hover:bg-red-600/20 transition"
                aria-label="Next image"
              >
                Next
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }, [activeItem, handleClose, handleNext, handlePrev, handleZoomIn, handleZoomOut, handleZoomReset, zoomLevel]);

  return (
    <div className="w-full flex items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl"
      >
        <div className="pointer-events-none absolute -top-12 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl"></div>
        <Swiper
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
          className="h-[440px] w-[320px]"
        >
          {GalleryItems.map((item, index) => (
            <SwiperSlide key={item.id} className="rounded-[28px] overflow-hidden">
              <button
                type="button"
                onClick={() => handleOpen(index)}
                className="group relative h-full w-full text-left"
                aria-label={`Open ${item.title}`}
              >
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-80"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="rounded-full border border-red-500/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-red-200">
                    {item.type}
                  </span>
                </div>

                <div className="absolute bottom-0 w-full px-6 pb-6 pt-16">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                      Gallery Highlight
                    </p>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-next after:hidden text-white">
            <div className="rounded-full border border-red-500/50 bg-black/40 p-2 shadow-lg shadow-red-600/20 backdrop-blur">
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="swiper-button-prev after:hidden text-white">
            <div className="rounded-full border border-red-500/50 bg-black/40 p-2 shadow-lg shadow-red-600/20 backdrop-blur">
              <ChevronLeftIcon className="h-5 w-5" />
            </div>
          </div>
        </Swiper>
      </motion.div>

      {typeof document !== "undefined" && previewOverlay
        ? createPortal(previewOverlay, document.body)
        : null}
    </div>
  );
}
