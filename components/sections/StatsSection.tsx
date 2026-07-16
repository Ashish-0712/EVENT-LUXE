"use client";

import { statistics } from '@/data/mock';
import AnimatedCounter from '../ui/AnimatedCounter';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';

export default function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#1a0b2e] to-[#0B0B0B] -z-20" />
      
      {/* Animated subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as any} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {stat.icon}
              </div>
              
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-gradient-gold transition-colors">
                {isInView && (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
                {!isInView && `0${stat.suffix}`}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
