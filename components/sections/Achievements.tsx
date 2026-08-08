"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Lightbulb, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hackathon":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "Ideathon":
        return <Lightbulb className="w-5 h-5 text-blue-400" />;
      default:
        return <Users className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Honors & Social Impact"
          title="Achievements & Leadership"
          subtitle="Hackathon distinctions, technical ideathon presentations, and community leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-400 font-medium">
                  {item.organizer} • {item.date}
                </p>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Category</span>
                <span className="text-slate-300 font-medium">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
