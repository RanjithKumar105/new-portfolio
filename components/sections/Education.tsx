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

        <div className="relative border-l border-black/20 ml-4 sm:ml-8 space-y-10">
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
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md shadow-black/10">
                {item.icon === "GraduationCap" && (
                  <GraduationCap className="w-3.5 h-3.5 text-black" />
                )}
                {item.icon === "BookOpen" && (
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                )}
                {item.icon === "School" && (
                  <School className="w-3.5 h-3.5 text-black" />
                )}
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 transition-all shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-black text-black group-hover:text-gray-600 transition-colors uppercase tracking-tight">
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-black/5 text-gray-800 border border-black/10">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 font-medium mb-3">
                  <span className="font-bold text-black">{item.institution}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 font-bold text-black bg-black/5 px-2 py-0.5 rounded-md text-xs">
                    <Award className="w-3 h-3" />
                    {item.grade}
                  </span>
                </div>

                <p className="text-gray-600 font-medium text-sm leading-relaxed">
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
