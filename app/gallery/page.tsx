"use client";

import { useState } from 'react';
import { galleryEvents, galleryCategories } from '@/data/mock';
import { Maximize2, Play } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Lightbox from '@/components/ui/Lightbox';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredEvents = activeCategory === "All" 
    ? galleryEvents 
    : galleryEvents.filter(e => e.category === activeCategory);

  const openLightbox = (eventIdx: number) => {
    setCurrentEventIndex(eventIdx);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const currentEvent = filteredEvents[currentEventIndex];

  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Premium <span className="text-gradient-purple">Event Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore our curated portfolio of breathtaking celebrations, from royal palace weddings to electrifying corporate events.
          </motion.p>
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto justify-start md:justify-center gap-3 mb-16 pb-4 hide-scrollbar snap-x">
          {galleryCategories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap snap-center shrink-0",
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 perspective-[1200px]">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((item, index) => {
              const heights = ['h-64', 'h-80', 'h-96', 'h-[28rem]', 'h-[32rem]'];
              const randomHeight = heights[index % heights.length];

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  key={item.id} 
                  className={cn(
                    "relative w-full rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid transform-gpu hover:z-10 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all duration-500",
                    randomHeight
                  )}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between transform translate-z-10">
                    <div className="flex justify-end">
                      <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-110 border border-white/20">
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2 block drop-shadow-md">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-gray-400 mb-8">Ready to create your own masterpiece?</p>
          <Link 
            href="/booking"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-1"
          >
            Start Planning Now
          </Link>
        </motion.div>

      </div>

      {currentEvent && (
        <Lightbox 
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={currentEvent.images || [currentEvent.image]}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
          title={currentEvent.title}
          category={currentEvent.category}
        />
      )}
    </main>
  );
}
