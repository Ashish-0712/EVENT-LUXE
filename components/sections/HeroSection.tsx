import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import Link from 'next/link';

const HeroScene = dynamic(() => import('../3d/HeroScene'), { ssr: false });

// Celebration Particles Component
const CelebrationParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/60 shadow-[0_0_10px_#D4AF37]"
          initial={{
            opacity: 0,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: (typeof window !== 'undefined' ? window.innerHeight : 1080) + 100,
            scale: Math.random() * 1.5 + 0.5,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: -100,
            x: `calc(${Math.random() * 100}vw - 50vw)`,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <CelebrationParticles />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0B0B0B] z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }} // Delay for preloader
          className="max-w-4xl"
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm font-bold mb-6 block drop-shadow-md">
            India's Premier Event Marketplace
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Create Memories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
              Beyond Imagination
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Discover world-class planners, explore premium galleries, and book your dream event seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/booking"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Start Planning
            </Link>
            <Link 
              href="/gallery"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              Explore Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
