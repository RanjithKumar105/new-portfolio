import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Maximize2 } from 'lucide-react';

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
          <motion.div
            initial={
              isMinimized
                ? { opacity: 0, scale: 0.8, y: 20 }
                : { opacity: 0, scale: 0.95, y: 20 }
            }
            animate={
              isMinimized
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    right: 24,
                    bottom: 24,
                    width: 350,
                    height: 500,
                    top: "auto",
                    left: "auto",
                    transformOrigin: "bottom right",
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    top: 24,
                    left: 24,
                    right: 24,
                    bottom: 24,
                    width: "auto",
                    height: "auto",
                    transformOrigin: "center",
                  }
            }
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-[70] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 ${
              isMinimized ? "" : "m-auto max-w-5xl"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black text-white shrink-0">
              <span className="font-semibold text-sm tracking-wide">Resume</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/20 rounded-md transition-colors focus:outline-none"
                  aria-label={isMinimized ? "Restore" : "Minimize"}
                  title={isMinimized ? "Restore" : "Minimize"}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-red-500/80 hover:text-white rounded-md transition-colors focus:outline-none"
                  aria-label="Close"
                  title="Close"
                >
                  <X className="w-4 h-4" />
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
        </>
      )}
    </AnimatePresence>
  );
}
