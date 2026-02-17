import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Projects } from "@/entities/Project";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/portfolio/ParticlesBackground";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const filters = ["all", "web", "AI", "Desktop", "Design"];

  useEffect(() => {
    setProjects(Projects);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [projects, activeFilter]);

  return (
    <section
      id="projects"
      className="relative w-full py-28 overflow-hidden bg-black"
    >
      {/* 🔥 Floating Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* 🔥 Content */}
      <div className="container mx-auto px-6 relative z-20">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Featured <span className="text-red-600">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[2px] bg-red-600 mx-auto mb-8"
          />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of advanced web systems, AI-powered tools,
            and engineered digital experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-red-600/20 text-red-100 border border-red-500/60 shadow-[0_0_25px_rgba(220,38,38,0.4)]"
                  : "border-white/10 text-gray-300 hover:border-red-500/60 hover:text-red-200"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white/5 animate-pulse">
                <div className="aspect-video bg-white/10 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/40 hover:bg-white/10 transition-all duration-500 group overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.05)] hover:shadow-[0_0_60px_rgba(255,0,0,0.2)]">

                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-red-500/20 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-red-400" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-500"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <Badge
                            key={i}
                            className="bg-white/5 text-gray-200 border border-red-600/20 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

