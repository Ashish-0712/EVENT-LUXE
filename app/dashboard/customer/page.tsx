"use client";

import { motion } from 'motion/react';
import { LayoutDashboard, Calendar, Heart, Bell, Settings, LogOut, Search, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row pt-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-[#111] p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black font-bold text-xl">
            A
          </div>
          <div>
            <h3 className="font-medium text-white">Ashish</h3>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl text-sm font-medium border border-white/5">
            <LayoutDashboard className="w-5 h-5 text-[#D4AF37]" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Calendar className="w-5 h-5" /> My Bookings
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Heart className="w-5 h-5" /> Saved Planners
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Bell className="w-5 h-5" /> Notifications <span className="ml-auto bg-[#D4AF37] text-black text-[10px] px-2 py-0.5 rounded-full font-bold">2</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-2">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-1">Welcome back, Ashish</h1>
            <p className="text-gray-400">Here's what's happening with your events.</p>
          </div>
          <Link href="/booking" className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all inline-block text-center">
            Plan New Event
          </Link>
        </header>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Active Bookings</h3>
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <p className="text-3xl font-bold text-white">1</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Pending Requests</h3>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white">2</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Saved Planners</h3>
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <p className="text-3xl font-bold text-white">12</p>
          </motion.div>
        </div>

        {/* Upcoming Event */}
        <h2 className="text-xl font-serif font-bold text-white mb-6">Your Upcoming Event</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#D4AF37]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="w-full md:w-48 h-48 rounded-xl bg-cover bg-center shrink-0 border border-white/10" style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?wedding')" }} />
          
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Confirmed</div>
            <h3 className="text-3xl font-serif font-bold text-white mb-2">The Grand Wedding</h3>
            <p className="text-gray-400 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Taj Lands End, Mumbai</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Date</p>
                <p className="font-medium text-white">Dec 15, 2026</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Planner</p>
                <p className="font-medium text-white">Royal Celebrations</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Guests</p>
                <p className="font-medium text-white">500+</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Balance</p>
                <p className="font-medium text-white text-[#D4AF37]">₹ 2,50,000</p>
              </div>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-medium rounded-xl transition-colors">
              Manage Event
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
