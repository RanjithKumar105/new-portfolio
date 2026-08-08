"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Work History"
          title="Industry Experience"
          subtitle="Hands-on internship experience in machine learning pipelines, cloud AI, and model deployment."
        />

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                  <span className="font-medium text-slate-200">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
