import React from "react";
import { motion } from "framer-motion";

export default function TeslaSection({ title, description }) {
  return (
    <section className="relative w-full h-auto min-h-screen snap-start flex items-center justify-center overflow-hidden text-white">
      {/* Dark Background Base */}
      <div className="absolute inset-0 bg-[#0b0b0f]" />
      
      {/* Red & White Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_70px] opacity-20" />
      
      {/* Light Sweep Animation */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl px-6 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          {title}
        </h2>
        <p className="mt-6 text-gray-300 text-xl leading-relaxed">{description}</p>
      </motion.div>
    </section>
  );
}
