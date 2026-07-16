import { galleryEvents, galleryCategories } from '@/data/mock';
import { Maximize2, Play } from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            The EventLuxe <span className="text-gradient-purple">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Immerse yourself in our collection of extraordinary celebrations. Get inspired for your next big event.
          </p>
        </div>

        {/* Categories Tab (Visual only for now) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {galleryCategories.map((cat, i) => (
            <button 
              key={i}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                i === 0 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryEvents.map((item, index) => {
            // Determine random heights for masonry effect
            const heights = ['h-64', 'h-80', 'h-96', 'h-[28rem]', 'h-[32rem]'];
            const randomHeight = heights[index % heights.length];
            const hasVideo = index % 4 === 0;

            return (
              <div 
                key={item.id} 
                className={`relative w-full ${randomHeight} rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid`}
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('https://source.unsplash.com/random/800x1200/?${item.category.replace(' ', ',')},luxury,${index}')` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />

                {/* Video Icon */}
                {hasVideo && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 border border-white/40">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110">
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
                      {item.location} • {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-400 mb-8">Ready to create your own masterpiece?</p>
          <Link 
            href="/booking"
            className="inline-block px-10 py-5 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-[#D4AF37] text-white font-bold rounded-full transition-all"
          >
            Start Planning Now
          </Link>
        </div>

      </div>
    </main>
  );
}
