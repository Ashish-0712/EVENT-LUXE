"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Planners', path: '/planners' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'AI Search', path: '/search' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-navbar py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="w-6 h-6 text-[#D4AF37] group-hover:animate-pulse" />
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                Event<span className="text-gradient-gold">Luxe</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#D4AF37] relative ${
                    pathname === link.path ? 'text-[#D4AF37]' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/auth" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Sign In
              </Link>
              <Link
                href="/booking"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold text-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-shadow"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#0B0B0B] border-l border-white/10 z-50 md:hidden p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-serif font-bold">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium ${
                      pathname === link.path ? 'text-[#D4AF37]' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <Link
                  href="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center border border-white/20 rounded-full font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black rounded-full font-semibold"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
