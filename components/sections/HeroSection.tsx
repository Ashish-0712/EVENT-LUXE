"use client";

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

// Dynamically import the 3D scene to avoid SSR issues
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0B0B0B]" />
});

export default function HeroSection() {
  const parallax = useParallax(30);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-20">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
            India's Premium Event Marketplace
          </span>
        </motion.div>

        {/* Main Heading with Mouse Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            x: parallax.x * 0.5, 
            y: parallax.y * 0.5 
          }}
          className="mb-6 relative"
        >
          {/* Background blur behind text for readability */}
          <div className="absolute inset-0 bg-[#0B0B0B]/30 blur-3xl -z-10 rounded-[100%]" />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight">
            Creating Memories <br className="hidden md:block" />
            <span className="text-gradient-gold">Beyond Imagination</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            x: parallax.x * 0.2, 
            y: parallax.y * 0.2 
          }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Find the perfect event planner for luxury weddings, corporate events, baby showers, and extraordinary celebrations.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-lg mx-auto"
        >
          {/* Search/Explore Button */}
          <Link 
            href="/search"
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Search className="w-5 h-5 relative z-10" />
            <span className="relative z-10 text-base">Find Planners</span>
          </Link>

          {/* Direct Booking Button */}
          <Link 
            href="/booking"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#D4AF37] text-white font-semibold rounded-full backdrop-blur-md transition-all duration-300"
          >
            <span>Book Your Event</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
