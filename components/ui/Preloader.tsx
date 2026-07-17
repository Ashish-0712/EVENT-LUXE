"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#D4AF37]/10 via-[#6A38FF]/10 to-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Sparkle Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <Sparkles className="w-12 h-12 text-[#D4AF37]" />
            </motion.div>

            {/* Event Luxe Text Reveal */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="text-5xl md:text-7xl font-serif font-bold text-white tracking-widest text-center"
              >
                EVENT<span className="text-[#D4AF37]">LUXE</span>
              </motion.h1>
            </div>

            {/* Subtitle Reveal */}
            <div className="overflow-hidden mt-4">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="text-gray-400 tracking-[0.3em] uppercase text-sm"
              >
                Beyond Imagination
              </motion.p>
            </div>

            {/* Golden Loading Line */}
            <div className="w-64 h-[1px] bg-white/10 mt-12 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
