"use client";

import { useState } from 'react';
import { Search as SearchIcon, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { planners } from '@/data/mock';
import PlannerCard from '@/components/ui/PlannerCard';
import { motion, AnimatePresence } from 'motion/react';

export default function SearchPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(planners); // Mock initial results
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsSearching(true);
    // Mock API call delay
    setTimeout(() => {
      setIsSearching(false);
      // Mock filtering logic - just shuffle or slice for demo
      setResults([...planners].sort(() => 0.5 - Math.random()).slice(0, 4));
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-32 pb-24">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#6A38FF]/10 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#6A38FF]">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">AI Assistant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Find Your <span className="text-gradient-purple">Perfect Match</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-16 relative z-20">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6A38FF] via-[#D4AF37] to-[#6A38FF] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative flex flex-col md:flex-row items-center bg-[#151515] border border-white/10 rounded-2xl p-2 md:pl-6 shadow-2xl">
              <SearchIcon className="hidden md:block w-6 h-6 text-gray-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your event, budget, location..."
                className="w-full bg-transparent border-none outline-none text-white text-lg px-4 py-4 placeholder:text-gray-600 focus:ring-0"
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="w-full md:w-auto bg-gradient-to-r from-[#6A38FF] to-[#9D7DFF] text-white px-8 py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:shadow-[0_0_20px_rgba(106,56,255,0.5)] transition-all disabled:opacity-70"
              >
                {isSearching ? 'Analyzing...' : 'Search'}
                {!isSearching && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>

        {/* Results Area */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center pt-20"
              >
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-[#D4AF37] animate-spin" />
                  <div className="absolute inset-2 rounded-full border-r-2 border-b-2 border-[#6A38FF] animate-spin-reverse" />
                  <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-white animate-pulse" />
                </div>
                <p className="text-gray-400 mt-6 font-medium animate-pulse">Our AI is finding the best matches for you...</p>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-medium text-white flex items-center gap-2">
                    <span className="text-[#D4AF37]">{results.length}</span> Matches Found
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                    <Filter className="w-4 h-4" /> Filter
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((planner, index) => (
                    <PlannerCard key={planner.id} planner={planner} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
