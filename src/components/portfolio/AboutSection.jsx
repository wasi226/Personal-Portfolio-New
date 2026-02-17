import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { Code, Server, Brush, PenTool, GitBranch, Brain } from "lucide-react";
import SkillCard from "./SkillCard";
import { FaJava } from "react-icons/fa";
import { SiThealgorithms, SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export default function AboutSection() {
  const skills = [
    { name: "React / Next.js", icon: Code },
    { name: "HTML", icon: TiHtml5 },
    { name: "Tailwind CSS", icon: PenTool },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "UI/UX Design", icon: Brush },
    { name: "Git & GitHub", icon: GitBranch },
    { name: "Java", icon: FaJava },
    { name: "DSA", icon: SiThealgorithms },
    { name: "AI / ML", icon: Brain }
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-32 bg-black overflow-hidden"
    >
      {/* Softer Particles */}
      <div className="absolute inset-0 opacity-50">
        <ParticlesBackground />
      </div>

      {/* Cinematic Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-red-600/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-white">About </span>
            <span className="text-red-500">Me</span>
          </motion.h2>

          <div className="h-[2px] w-24 bg-red-600 mx-auto mt-6" />
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            {/* Top Content */}
            <div className="space-y-10">
              <h3 className="text-3xl font-semibold text-white leading-snug">
                Engineering Intelligent & Scalable Systems
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                I am a Computer Science student dedicated to building
                automation-driven, scalable digital systems that combine
                clean architecture with seamless user experience.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                My work focuses on system design, performance optimization,
                and leveraging modern technologies to create impactful,
                production-ready applications.
              </p>

              {/* Premium Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-red-600/30 via-transparent to-red-600/30"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 group-hover:border-red-500/40">

                  <div className="absolute inset-0 rounded-2xl bg-red-600/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                  <h4 className="text-lg font-semibold text-white mb-3 relative z-10">
                    Current Focus
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    Building scalable MERN stack applications and exploring
                    AI-driven automation systems with production-grade
                    architecture.
                  </p>

                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "15+", label: "Projects Built" },
                { number: "12+", label: "Technologies" },
                { number: "8+", label: "Certifications" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-500"
                >
                  <div className="text-3xl font-bold text-red-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            {/* Skills */}
            <div className="space-y-10">
              <h3 className="text-2xl font-semibold text-white">
                Technologies & Expertise
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    title={skill.name}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {[
                { skill: "Frontend Engineering", level: 95 },
                { skill: "Backend Systems", level: 90 },
                { skill: "UI/UX Design", level: 85 },
                { skill: "AI & ML", level: 65 }
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-red-400">{item.level}%</span>
                  </div>

                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      className="h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
