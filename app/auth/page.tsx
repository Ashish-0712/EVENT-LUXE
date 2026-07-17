"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, ArrowRight, User, Building, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  const [isDealer, setIsDealer] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row relative overflow-hidden">
      
      {/* Back to Home */}
      <Link href="/" className="absolute top-8 left-8 z-50 text-white/50 hover:text-white flex items-center gap-2 transition-colors">
        &larr; Back to Home
      </Link>

      {/* Background Elements */}
      <div className={`absolute top-0 w-full md:w-1/2 h-full transition-all duration-1000 ease-in-out ${isDealer ? 'left-0 md:left-1/2' : 'left-0'}`}>
        <AnimatePresence mode="wait">
          {isDealer ? (
            <motion.div 
              key="dealer-bg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1080&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent md:bg-gradient-to-l" />
            </motion.div>
          ) : (
            <motion.div 
              key="customer-bg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1080&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0B0B]/80 to-[#0B0B0B] md:bg-gradient-to-r" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="w-full h-screen flex relative z-10">
        
        {/* Toggle Panel (Desktop) */}
        <div className={`hidden md:flex w-1/2 h-full flex-col justify-center items-center p-12 transition-all duration-1000 ${isDealer ? 'order-1' : 'order-2'}`}>
          <div className="text-center max-w-md">
            <Sparkles className={`w-12 h-12 mx-auto mb-6 ${isDealer ? 'text-[#6A38FF]' : 'text-[#D4AF37]'}`} />
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              {isDealer ? "Looking to Plan?" : "Are you an Event Partner?"}
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              {isDealer 
                ? "Discover the best planners, venues, and decorators for your dream event." 
                : "Join our exclusive network of premium event professionals and grow your business."}
            </p>
            <button 
              onClick={() => setIsDealer(!isDealer)}
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              {isDealer ? "I'm a Customer" : "I'm an Event Planner"}
            </button>
          </div>
        </div>

        {/* Form Panel */}
        <div className={`w-full md:w-1/2 h-full flex items-center justify-center p-6 sm:p-12 transition-all duration-1000 ${isDealer ? 'order-2' : 'order-1'}`}>
          
          {/* Mobile Toggle */}
          <div className="absolute top-24 left-0 right-0 flex justify-center md:hidden z-20">
            <div className="bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 flex">
              <button onClick={() => setIsDealer(false)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isDealer ? 'bg-white/10 text-white shadow-lg' : 'text-gray-400'}`}>Customer</button>
              <button onClick={() => setIsDealer(true)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isDealer ? 'bg-white/10 text-white shadow-lg' : 'text-gray-400'}`}>Partner</button>
            </div>
          </div>

          <motion.div 
            key={isDealer ? 'dealer-form' : 'customer-form'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md mt-16 md:mt-0"
          >
            <div className="text-center md:text-left mb-10">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-400">
                {isDealer ? "Dealer Portal Access" : "Customer Portal Access"}
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {isDealer ? <Building className="h-5 w-5 text-gray-500" /> : <User className="h-5 w-5 text-gray-500" />}
                  </div>
                  <input 
                    type="text" 
                    placeholder={isDealer ? "Company Name" : "Full Name"}
                    className="block w-full pl-11 pr-3 py-4 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="block w-full pl-11 pr-3 py-4 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="password" 
                  placeholder="Password"
                  className="block w-full pl-11 pr-3 py-4 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className={`text-sm hover:underline ${isDealer ? 'text-[#6A38FF]' : 'text-[#D4AF37]'}`}>
                    Forgot your password?
                  </a>
                </div>
              )}

              <button 
                type="submit"
                className={`w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-black bg-gradient-to-r hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all ${
                  isDealer ? 'from-[#6A38FF] to-[#9D7DFF] text-white' : 'from-[#D4AF37] to-[#F3E5AB]'
                }`}
              >
                {isLogin ? "Sign In" : "Sign Up"} <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className={`ml-2 font-medium hover:underline ${isDealer ? 'text-[#6A38FF]' : 'text-[#D4AF37]'}`}
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}
