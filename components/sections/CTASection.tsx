"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, CalendarHeart } from 'lucide-react';

export default function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] to-[#120a24] -z-20" />
      
      {/* Golden glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-60 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative glass-card p-12 md:p-20 rounded-3xl border border-[#D4AF37]/20"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#D4AF37]/40 rounded-tl-3xl m-4" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#D4AF37]/40 rounded-tr-3xl m-4" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#D4AF37]/40 rounded-bl-3xl m-4" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#D4AF37]/40 rounded-br-3xl m-4" />

          <CalendarHeart className="w-16 h-16 text-[#D4AF37] mx-auto mb-8 animate-pulse" />
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Ready to Plan Your <br className="hidden md:block" />
            <span className="text-gradient-gold">Next Big Event?</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Join thousands of happy customers who have celebrated their milestones with our verified luxury planners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/booking"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-lg">Start Planning</span>
              <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/auth"
              className="text-white font-medium hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-1"
            >
              Are you an Event Planner? Partner with us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
