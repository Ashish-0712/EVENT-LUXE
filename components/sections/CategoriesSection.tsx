"use client";

import { categories } from '@/data/mock';
import CategoryCard from '../ui/CategoryCard';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';

export default function CategoriesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 relative z-10 bg-[#0B0B0B] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6A38FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref as any}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Curated <span className="text-gradient-purple">Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover specialized planners for every milestone. From intimate gatherings to grand celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
