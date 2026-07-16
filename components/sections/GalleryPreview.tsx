"use client";

import { galleryEvents } from '@/data/mock';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GalleryPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const previewItems = galleryEvents.slice(0, 6);

  return (
    <section className="py-24 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            ref={ref as any}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              A Glimpse of <span className="text-gradient-purple">Magic</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore our portfolio of breathtaking events that set new standards in luxury.
            </p>
          </motion.div>
        </div>

        {/* 3D Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 perspective-[1000px]">
          {previewItems.map((item, index) => {
            // Create varied heights for masonry look
            const isTall = index === 0 || index === 3 || index === 4;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, rotateX: 20, y: 50, z: -100 }}
                animate={isInView ? { opacity: 1, rotateX: 0, y: 0, z: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                className={cn(
                  "relative group rounded-2xl overflow-hidden cursor-pointer transform-gpu transition-all duration-700 hover:z-10 hover:shadow-[0_20px_50px_rgba(106,56,255,0.3)]",
                  isTall ? "h-[400px] md:h-[500px]" : "h-[300px] md:h-[400px]",
                  // Make first item span 2 columns on tablet
                  index === 0 && "md:col-span-2 lg:col-span-1"
                )}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Image Placeholder with Parallax effect on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('https://source.unsplash.com/random/800x${isTall ? 1000 : 800}/?wedding,party,luxury,${index}')` }}
                />
                
                {/* Dark Overlay that fades on hover */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/20" />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between transform translate-z-10">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <span className={cn(
                      "text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg backdrop-blur-md bg-gradient-to-r",
                      item.gradient
                    )}>
                      {item.category}
                    </span>
                    
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 transform translate-y-4 group-hover:translate-y-0">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Bottom Text */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 shadow-black drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-black drop-shadow-md line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#6A38FF] text-white font-semibold rounded-full transition-all duration-300"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
