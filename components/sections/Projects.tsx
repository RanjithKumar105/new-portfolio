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
      {/* Background Grid */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />

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
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 uppercase tracking-wider ${
                filter === category
                  ? "bg-black text-white shadow-md shadow-black/10"
                  : "bg-black/5 text-gray-500 hover:text-black hover:bg-black/10 border border-black/10"
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
              className="group relative rounded-3xl p-7 sm:p-8 bg-black border-2 border-transparent hover:border-gray-500 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Glow Effect */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all pointer-events-none" />

              <div>
                {/* Header with Badges & Action Links */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                      <FolderGit2 className="w-4 h-4" />
                    </span>
                    {project.status && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                          project.status === "Ongoing"
                            ? "bg-white/10 text-gray-300 border-white/20"
                            : "bg-white/10 text-white border-white/20"
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
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gray-300 transition-colors tracking-tight uppercase">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-gray-400 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Technology Badges */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors"
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
