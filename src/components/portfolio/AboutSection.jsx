
import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Cloud, Brush, PenTool, GitBranch, Terminal, Layers,Brain } from "lucide-react";
import SkillCard from "./SkillCard";
import { FaJava } from "react-icons/fa6";
import { SiThealgorithms,SiMongodb,SiExpress,SiJavascript } from "react-icons/si";
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
    { name: "Data Structure & Algorithm", icon: SiThealgorithms },
    { name: "AI", icon: Brain }    

  ];

  return (
    <section id="about" className="section-padding bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold gradient-text mb-6 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Learner & Aspiring Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a technology enthusiast and student, currently pursuing my degree in Computer Science. I love turning complex problems into simple, 
              beautiful designs. When I'm not coding, you'll find me exploring new technologies, 
              participating in hackathons, or contributing to open-source projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech started with curiosity, and has 
              evolved into a passion for creating seamless user experiences that make 
              people's lives easier and more enjoyable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "10+", label: "Tech Skills" },
                { number: "10+", label: "Certifications" }
              ].map((stat, index) => (
                <Card key={index} className="!bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold gradient-text text-white">{stat.number}</div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-0">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name}
                  icon={skill.icon}
                  title={skill.name}
                  delay={index * 100}
                />
              ))}
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-4 pt-4">
              {[
                { skill: "Frontend Development", level: 95 },
                { skill: "Backend Development", level: 90 },
                { skill: "UI/UX Design", level: 85 },
                { skill: "AI & ML", level: 60 }
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2 fade-in-up" style={{ animationDelay: `${200 + index * 100}ms`}}>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-purple-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full glow-effect progress-animated"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
