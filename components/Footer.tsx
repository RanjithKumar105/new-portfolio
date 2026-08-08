"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
            RK
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {portfolioData.personal.name}
            </p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved. Crafted with Next.js & Tailwind.
            </p>
          </div>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.social.email}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Email Ranjith"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
