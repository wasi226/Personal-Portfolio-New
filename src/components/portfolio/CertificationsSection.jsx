import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, ExternalLink } from "lucide-react";
import { Certifications } from "@/entities/Certification";

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    try {
      setCertifications(Certifications); // Static array
    } catch (error) {
      console.error("Error loading certifications:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="certifications" className="w-full py-20 text-white">
      <div className="container mx-auto px-6 relative z-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Certifications &<span className="text-red-600"> Awards</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-red-600 mx-auto"
          ></motion.div>
        </div>

        {/* Loader Skeleton */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card
                key={i}
                className="bg-white/5 border-cyan-500/10 animate-pulse rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-white/10 rounded-lg mb-4"></div>
                  <div className="h-5 bg-white/10 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className="group relative overflow-hidden 
                           bg-gradient-to-br from-[#0f131f]/70 to-[#0b0d14]/40 
                           backdrop-blur-xl border border-red-600/20 
                           rounded-2xl shadow-lg hover:shadow-red-600/20
                           transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Certificate Image (Hover Reveal) */}
                {cert.certificate_img && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                    <img
                      src={cert.certificate_img}
                      alt={cert.title}
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                  </div>
                )}

                {/* Card Content */}
                <CardContent className="relative p-6 z-10">
                  <div className="flex justify-between items-start mb-5">
                    {cert.logo_url ? (
                      <img
                        src={cert.logo_url}
                        alt={cert.issuer}
                        className="h-12 w-auto bg-white/90 p-2 rounded-xl shadow-md"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    )}
                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-red-400 text-sm font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-red-600/30 text-gray-200 bg-white/5 rounded-lg"
                  >
                    Issued {format(new Date(cert.issue_date), "MMM yyyy")}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

