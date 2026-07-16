"use client";

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                Event<span className="text-gradient-gold">Luxe</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Creating memories beyond imagination. India's premier luxury event management and planner discovery platform.
            </p>
            <div className="flex items-center gap-4">
              {['FB', 'TW', 'IG', 'YT'].map((platform, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-[#D4AF37] hover:bg-white/10 transition-all border border-white/5 hover:border-[#D4AF37]/30">
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Planners', 'Venues', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Luxury Weddings', 'Corporate Events', 'Social Gatherings', 'Destination Events', 'Virtual Events'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6A38FF]/30 group-hover:bg-[#6A38FF] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest luxury event trends and exclusive offers.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black w-10 flex items-center justify-center rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EventLuxe. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
