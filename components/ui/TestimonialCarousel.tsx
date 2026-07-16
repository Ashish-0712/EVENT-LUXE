"use client";

import { useState, useEffect } from 'react';
import { testimonials } from '@/data/mock';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlassCard from './GlassCard';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto rotate
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-10"
         onMouseEnter={() => setAutoplay(false)}
         onMouseLeave={() => setAutoplay(true)}>
      
      <div className="relative h-[400px] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {testimonials.map((testimonial, index) => {
            // Calculate distance from current index
            let distance = index - currentIndex;
            if (distance < -testimonials.length / 2) distance += testimonials.length;
            if (distance > testimonials.length / 2) distance -= testimonials.length;
            
            // Only show cards that are close
            if (Math.abs(distance) > 2) return null;

            const isActive = distance === 0;
            const xOffset = distance * 200;
            const zOffset = -Math.abs(distance) * 150;
            const scale = isActive ? 1 : 0.8;
            const opacity = isActive ? 1 : 0.4;
            const zIndex = 10 - Math.abs(distance);

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.8, x: xOffset, z: zOffset }}
                animate={{ opacity, scale, x: xOffset, z: zOffset }}
                exit={{ opacity: 0, scale: 0.8, z: -300 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="absolute w-full max-w-xl"
                style={{ zIndex }}
              >
                <GlassCard 
                  hoverEffect={isActive} 
                  gradientBorder={isActive}
                  className={`p-8 md:p-10 ${!isActive && 'pointer-events-none'}`}
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-200 italic mb-8 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <h4 className="font-serif font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#D4AF37]">{testimonial.event}</p>
                      <p className="text-xs text-gray-500">by {testimonial.planner}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#D4AF37] transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#D4AF37] transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
