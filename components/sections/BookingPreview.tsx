"use client";

import Timeline from '../ui/Timeline';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';

export default function BookingPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 relative z-10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            ref={ref as any}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Seamless <span className="text-gradient-gold">Booking Journey</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From discovering the perfect planner to finalizing the details, our process is designed to be as stress-free as your event should be.
            </p>
          </motion.div>
        </div>

        <Timeline />
        
        <div className="mt-16 text-center">
          <Link 
            href="/booking"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
