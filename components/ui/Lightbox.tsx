"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  title?: string;
  category?: string;
}

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate, title, category }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md"
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
            <div>
              {category && <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">{category}</span>}
              {title && <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>}
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-12 md:p-24">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={images[currentIndex]}
                alt="Gallery view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 overflow-x-auto max-w-[90vw] hide-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`relative w-16 h-16 rounded-md overflow-hidden shrink-0 transition-all duration-300 ${idx === currentIndex ? 'border-2 border-[#D4AF37] scale-110' : 'opacity-50 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
