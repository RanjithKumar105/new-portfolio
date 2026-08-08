"use client";

import React from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Engineering Profile"
          title="About Ranjith Kumar"
          subtitle="A dedicated problem solver engineering intelligent AI systems and high-throughput software architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Two Staggered Glassmorphic Photos with 3D Tilt Hover */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] sm:aspect-square flex items-center justify-center">
              {/* Photo 1: Background Staggered Top-Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-[68%] aspect-[4/5] rounded-3xl p-2 bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl group overflow-hidden"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={portfolioData.personal.images.aboutImage1}
                    alt="Ranjith Kumar in Lab"
                    fallbackText="RK Photo 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      AI & Vision Research
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Photo 2: Foreground Staggered Bottom-Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute bottom-0 right-0 w-[68%] aspect-[4/5] rounded-3xl p-2 bg-slate-900/90 border border-white/15 shadow-2xl backdrop-blur-xl group overflow-hidden z-10"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/images/about-1.jpeg"
                    alt="Ranjith Kumar"
                    fallbackText="Ranjith Kumar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                      Full Stack Systems
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Center Decorative Accent Orb */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Bio Narrative & Stats Grid */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Engineering at the Intersection of{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Machine Learning & Production Code
                </span>
              </h3>

              {portfolioData.personal.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {portfolioData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {stat.value}
                    <span className="text-xs font-semibold text-slate-400 ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
