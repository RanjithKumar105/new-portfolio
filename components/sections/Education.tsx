"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Calendar, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Academic Background"
          title="Education Timeline"
          subtitle="Strong mathematical foundations, computer science principles, and artificial intelligence specialization."
        />

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10">
          {portfolioData.education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                {item.icon === "GraduationCap" && (
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                )}
                {item.icon === "BookOpen" && (
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                )}
                {item.icon === "School" && (
                  <School className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-3">
                  <span className="font-medium text-slate-200">{item.institution}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md text-xs">
                    <Award className="w-3 h-3" />
                    {item.grade}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
