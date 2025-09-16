import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import image8 from '@/assets/WasiLogo.png'


export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 glow-effect"
          >
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
              <img src={image8} alt="" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-text-gradient">
              WASI HAIDER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Driven by a passion for technology, I blend logic with{" "}
            <span className="text-purple-400 font-semibold">
            creativity to engineer digital tools
            </span>{" "}
            that merge
            <span className="text-purple-400 font-semibold">
              {" "}
            beautiful design, seamless usability,
            </span>{" "}
            and
            <span className="text-pink-400 font-semibold">
              {" "}
            impactful functionality.
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-2 text-lg glow-effect transition-all duration-300 hover:scale-105 shimmer-effect cursor-pointer"
          >
            View My Work
          </Button>
          <a
            href="/Wasi_Haider_Resume_Software_Engineering.pdf"
            download="Wasi_Haider_Resume_Software_Engineering.pdf"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-10 py-2 text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer rounded-lg border"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/wasi226",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/wasi226/",
              label: "LinkedIn",
            },
            {
              icon: SiLeetcode,
              href: "https://leetcode.com/u/wasi226/",
              label: "Leetcode",
            },
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/___haider___dotaxe22/",
              label: "Instagram",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 glow-effect"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
