"use client";

import { motion } from 'motion/react';
import { Category } from '@/data/mock';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <Link href={`/planners?category=${category.id}`} className="block group">
      <motion.div
        ref={ref as any}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full"
      >
        {/* Animated Gradient Border Layer */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-br",
          category.gradient
        )} />
        
        {/* Main Card */}
        <div className="relative h-full p-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
          <div className="h-full bg-[#0B0B0B]/80 backdrop-blur-xl rounded-xl p-6 border border-white/5 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* Hover Glow Effect inside */}
            <div className={cn(
              "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br",
              category.gradient
            )} />

            {/* Icon with floating animation */}
            <motion.div 
              className="text-5xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              {category.icon}
            </motion.div>
            
            <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              {category.name}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              {category.description}
            </p>
            
            <div className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
              {category.count}+ Events
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
