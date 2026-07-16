"use client";

import { planners } from '@/data/mock';
import PlannerCard from '../ui/PlannerCard';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PlannersPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const featuredPlanners = planners.slice(0, 3); // Get top 3

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            ref={ref as any}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Premium <span className="text-gradient-gold">Event Partners</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Work with the industry's most awarded and verified event planners. Handpicked for excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/planners"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors group"
            >
              <span className="font-medium">View All Planners</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlanners.map((planner, index) => (
            <PlannerCard key={planner.id} planner={planner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
