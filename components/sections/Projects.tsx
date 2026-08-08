"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, FolderGit2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "AI/ML" | "Full Stack">("All");

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "AI/ML") {
      return (
        project.tags.includes("Python") ||
        project.tags.includes("YOLOv8") ||
        project.tags.includes("OpenCV") ||
        project.tags.includes("NLP")
      );
    }
    if (filter === "Full Stack") {
      return (
        project.tags.includes("Node.js") ||
        project.tags.includes("MongoDB") ||
        project.tags.includes("Blockchain")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Engineering"
          title="Engineered Projects"
          subtitle="Real-world autonomous vision systems, disaster response platforms, and healthcare AI."
        />

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {(["All", "AI/ML", "Full Stack"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                filter === category
                  ? "bg-white text-slate-950 shadow-md shadow-white/10"
                  : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Glow Effect */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

              <div>
                {/* Header with Badges & Action Links */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                      <FolderGit2 className="w-4 h-4" />
                    </span>
                    {project.status && (
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          project.status === "Ongoing"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        }`}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                        aria-label="View Live Project"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology Badges */}
              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
