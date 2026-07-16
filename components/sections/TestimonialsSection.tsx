"use client";

import TestimonialCarousel from '../ui/TestimonialCarousel';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';

export default function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-[#050505]">
      {/* Abstract light burst in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-transparent via-[#6A38FF]/10 to-transparent blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div 
            ref={ref as any}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Stories of <span className="text-gradient-purple">Joy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from those who have experienced the EventLuxe standard.
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
