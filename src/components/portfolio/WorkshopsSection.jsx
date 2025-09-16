// src/components/portfolio/WorkshopsSection.jsx

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="workshops" className="section-padding bg-black/20 backdrop-blur-sm py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Workshops & Hackathon
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="space-y-8">
              {[...Array(2)].map((_, i) => (
                <Card key={i} className="bg-gray-800/30 border-gray-700 animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>
              <div className="space-y-8">
                {workshops.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative pl-12 md:pl-16 fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-1.5 top-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full glow-effect"></div>
                    <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(new Date(item.date), "MMM yyyy")}
                          </div>
                        </div>
                        <div className="flex items-center text-purple-400 font-medium mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          {item.organization}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        {item.certificate_url && (
                          <a
                            href={item.certificate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
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
    </section>
  );
}
