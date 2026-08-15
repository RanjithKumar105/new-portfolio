"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Maximize2, FileText } from 'lucide-react';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export function ResumeViewer({ isOpen, onClose, resumeUrl }: ResumeViewerProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  // When closing, also reset minimize state after animation
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsMinimized(false);
    }, 300);
  };

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Prevent body scroll when open and not minimized
  useEffect(() => {
    if (isOpen && !isMinimized) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, isMinimized]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (only visible when not minimized) */}
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
          )}

          {/* Viewer Container */}
          {isMinimized ? (
            /* Minimized Floating Card */
            <motion.div
              key="minimized"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-[70] bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[340px] h-[400px] sm:h-[480px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-black text-white shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="font-semibold text-xs sm:text-sm tracking-wide">Resume</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setIsMinimized(false)}
                    className="p-1.5 hover:bg-white/20 rounded-md transition-colors focus:outline-none"
                    aria-label="Restore"
                    title="Restore"
                  >
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-red-500/80 hover:text-white rounded-md transition-colors focus:outline-none"
                    aria-label="Close"
                    title="Close"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 w-full bg-gray-100 relative">
                <iframe
                  src={`${resumeUrl}#toolbar=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          ) : (
            /* Full-screen Viewer */
            <motion.div
              key="fullscreen"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-[70] inset-2 sm:inset-4 md:inset-6 flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 max-w-5xl mx-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-black text-white shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="font-semibold text-xs sm:text-sm tracking-wide">Resume</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1.5 hover:bg-white/20 rounded-md transition-colors focus:outline-none"
                    aria-label="Minimize"
                    title="Minimize"
                  >
                    <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-red-500/80 hover:text-white rounded-md transition-colors focus:outline-none"
                    aria-label="Close"
                    title="Close"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 w-full bg-gray-100 relative">
                <iframe
                  src={`${resumeUrl}#toolbar=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
