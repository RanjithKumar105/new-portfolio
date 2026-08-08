"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Brain, Cloud, Code, Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Credentials & Mastery"
          title="Professional Certifications"
          subtitle="Accredited certifications in Cloud Computing, AI Foundations, Machine Learning, and Web Technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                  {cert.name}
                </h3>

                <p className="mt-1.5 text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Issued by {cert.issuer}
                </p>
              </div>

              {cert.url && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Verify Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500">
                    Official Issuer
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
