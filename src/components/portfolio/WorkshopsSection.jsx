// src/components/portfolio/WorkshopsSection.jsx

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Users, Award } from "lucide-react";
import { Workshops } from "@/entities/Workshop";

export default function WorkshopsSection() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the static array directly
    setWorkshops(Workshops);
    setLoading(false);
  }, []);

  return (
    <div id="workshops" className="w-full py-20 text-white">
      <div className="container mx-auto px-6 relative z-20 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Workshops &<span className="text-red-600"> Hackathons</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-red-600 mx-auto"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="space-y-8">
              {[...Array(2)].map((_, i) => (
                <Card key={i} className="bg-white/5 border-red-600/10 animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600 hidden md:block"></div>
              <div className="space-y-8">
                {workshops.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative pl-12 md:pl-16 fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-1.5 top-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full glow-effect"></div>
                    <Card className="bg-white/5 backdrop-blur-sm border-red-600/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(new Date(item.date), "MMM yyyy")}
                          </div>
                        </div>
                        <div className="flex items-center text-red-400 font-medium mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          {item.organization}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        {item.certificate_url && (
                          <a
                            href={item.certificate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Award className="w-4 h-4 mr-2" /> View Certificate
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
