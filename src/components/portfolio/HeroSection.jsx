// import React from "react";
// import { motion } from "framer-motion";
// import ParticlesBackground from "./ParticlesBackground";
// import { Download } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full snap-start overflow-hidden">

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/assets/tesla-bg.mp4" type="video/mp4" />
//       </video>

//       {/* Luxury Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]" />

//       {/* 3D Particles */}
//       <div className="absolute inset-0">
//         <ParticlesBackground />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

//         {/* Small Premium Label */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mb-6 tracking-[0.5em] text-xs text-gray-400 uppercase font-medium"
//         >
//           Software Engineering
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
//         >
//           Engineering the
//           <span className="block bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
//             Future.
//           </span>
//         </motion.h1>

//         {/* Animated Accent Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "120px" }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="h-[2px] bg-red-600 mt-8 mb-8"
//         />

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
//         >
//           I design automation-first systems that scale with precision,
//           performance and clean engineering standards.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-12 flex gap-6"
//         >
//           {/* Primary Button */}
//           <button className="relative px-10 py-3 uppercase tracking-widest text-sm font-semibold overflow-hidden group border border-red-600">
//             <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
//             <span className="relative z-10 group-hover:text-white transition-colors duration-500">
//               Explore Work
//             </span>
//           </button>

//           {/* Resume Button */}
//           <a
//             href="/Wasi_Haider_Resume_Software_Engineering.pdf"
//             download
//             className="flex items-center px-10 py-3 border border-gray-600 uppercase tracking-widest text-sm font-semibold text-gray-300 hover:border-white hover:text-white transition-all duration-300"
//           >
//             <Download className="w-4 h-4 mr-2" />
//             Resume
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { Download } from "lucide-react";

export default function HeroSection() {

  // Scroll to Projects Section
  const handleScrollToWork = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full snap-start overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/tesla-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[2px]" />

      {/* Particles */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Intro Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 tracking-[0.5em] text-xs text-gray-400 uppercase font-medium"
        >
          Software Engineer
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Hi, I’m </span>
          <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent animate-gradient-x">
            WASI HAIDER
          </span>
        </motion.h1>
        {/* Full Stack Developer Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-2xl md:text-3xl font-bold"
        >
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </motion.div>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I engineer intelligent digital systems where logic meets creativity —
          delivering scalable, automation-driven solutions that combine refined
          design, seamless user experience, and high-performance architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex gap-6"
        >

          {/* View Work Button */}
          <button
            onClick={handleScrollToWork}
            className="relative px-10 py-3 uppercase tracking-widest text-sm font-semibold overflow-hidden group border border-red-600"
          >
            <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              View My Work
            </span>
          </button>

          {/* Resume Button */}
          <a
            href="/Wasi_Haider_Resume_Software_Engineering.pdf"
            download
            className="flex items-center px-10 py-3 border border-gray-600 uppercase tracking-widest text-sm font-semibold text-gray-300 hover:border-white hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>

        </motion.div>

      </div>
    </section>
  );
}
