"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { searchSuggestions } from '@/data/mock';
import { useRouter } from 'next/navigation';

export default function AISearchSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic abstract background */}
      <div className="absolute inset-0 bg-[#0B0B0B] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-r from-[#6A38FF]/20 via-[#D4AF37]/20 to-[#6A38FF]/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">AI-Powered Discovery</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Just describe your <br />
            <span className="text-gradient-purple">Dream Event</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Our intelligent search understands natural language. Tell us exactly what you want, your budget, and location.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6A38FF] via-[#D4AF37] to-[#6A38FF] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative flex items-center bg-[#151515] border border-white/10 rounded-full p-2 pl-6 shadow-2xl">
              <Search className="w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., I need a beach wedding planner in Goa under ₹5 lakhs"
                className="flex-grow bg-transparent border-none outline-none text-white text-lg px-4 py-4 placeholder:text-gray-600 focus:ring-0"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#6A38FF] to-[#9D7DFF] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(106,56,255,0.5)] transition-all"
              >
                Search <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Floating Suggestions */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {searchSuggestions.slice(0, 5).map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                onClick={() => setQuery(suggestion)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm text-gray-300 transition-colors cursor-pointer"
              >
                "{suggestion}"
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
