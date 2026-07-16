"use client";

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradientBorder?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className, 
  hoverEffect = true,
  gradientBorder = false,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden glass-card",
        hoverEffect && "glass-card-hover",
        gradientBorder && "before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-br before:from-[#6A38FF] before:to-[#D4AF37] before:rounded-2xl before:-z-10",
        className
      )}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
