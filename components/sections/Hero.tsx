"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { portfolioData } from "@/data/portfolio";

const titles = [
  "AI & ML Engineer",
  "Computer Vision Enthusiast",
  "Full Stack Developer",
  "Autonomous Systems Builder",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullText) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-300">
              {portfolioData.personal.availability}
            </span>
          </div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 sm:h-8 ml-1 bg-blue-400 animate-pulse inline-block" />
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-full transition-all duration-200 shadow-md shadow-white/10 hover:shadow-white/25 hover:scale-[1.02]"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social Icons Quick Row */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-400">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.email}
              className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-emerald-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="h-4 w-px bg-white/10 mx-1" />
            <span className="text-xs text-slate-500 font-medium">
              SIT Mangaluru &apos;27 • AI & ML
            </span>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Image with Floating Glowing Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative group">
            {/* Animated Gradient Glow Ring Behind Image */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-md transition duration-500 animate-spin-slow" />

            {/* Circular Floating Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-slate-950 border border-white/15 shadow-2xl animate-float overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src={portfolioData.personal.images.heroImage}
                  alt={portfolioData.personal.name}
                  fallbackText="Ranjith Kumar"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Floating Experience / Tech Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 px-4 py-2 rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Academic Focus
                </p>
                <p className="text-xs font-bold text-white">
                  B.E. AI & ML (CGPA 8.53)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About Section">
          <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
