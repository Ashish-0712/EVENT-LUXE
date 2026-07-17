"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Calendar, Heart, Bell, Settings, LogOut, MessageSquare, Clock, MapPin, CheckCircle, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row pt-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-[#0f0f0f] p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            A
          </div>
          <div>
            <h3 className="font-medium text-white">Ashish</h3>
            <p className="text-xs text-[#D4AF37]">Premium Member</p>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button onClick={() => setActiveTab('quotes')} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'quotes' ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <div className="flex items-center gap-3"><FileText className="w-5 h-5" /> Compare Quotes</div>
            <span className="bg-[#6A38FF] text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">3 NEW</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Calendar className="w-5 h-5" /> My Bookings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Heart className="w-5 h-5" /> Saved Planners
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <MessageSquare className="w-5 h-5" /> Messages
          </button>
        </nav>

        <div className="mt-auto space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#0a0a0a]">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-1">
              {activeTab === 'quotes' ? 'Quotation Comparison' : 'Welcome back, Ashish'}
            </h1>
            <p className="text-gray-400">
              {activeTab === 'quotes' ? 'Review offers from planners for your upcoming beach wedding.' : 'Here\'s what\'s happening with your events.'}
            </p>
          </div>
          <Link href="/booking" className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all inline-block text-center">
            Plan New Event
          </Link>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4"><h3 className="text-gray-400 font-medium">Active Bookings</h3><Calendar className="w-5 h-5 text-[#D4AF37]" /></div>
                  <p className="text-3xl font-bold text-white">1</p>
                </div>
                <div className="bg-gradient-to-br from-[#6A38FF]/20 to-[#111] border border-[#6A38FF]/30 rounded-2xl p-6 cursor-pointer hover:border-[#6A38FF]/50 transition-colors" onClick={() => setActiveTab('quotes')}>
                  <div className="flex items-center justify-between mb-4"><h3 className="text-[#9D7DFF] font-medium">Received Quotes</h3><FileText className="w-5 h-5 text-[#9D7DFF]" /></div>
                  <div className="flex items-end gap-3">
                    <p className="text-3xl font-bold text-white">3</p>
                    <p className="text-sm text-gray-400 mb-1">Action Required</p>
                  </div>
                </div>
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4"><h3 className="text-gray-400 font-medium">Saved Planners</h3><Heart className="w-5 h-5 text-pink-400" /></div>
                  <p className="text-3xl font-bold text-white">12</p>
                </div>
              </div>

              {/* Upcoming Event */}
              <div>
                <h2 className="text-xl font-serif font-bold text-white mb-6">Confirmed Bookings</h2>
                <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                  <div className="w-full md:w-48 h-48 rounded-xl bg-cover bg-center shrink-0 border border-white/10" style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?wedding')" }} />
                  <div className="flex-1 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider"><CheckCircle className="w-3 h-3" /> Confirmed</div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">The Grand Wedding</h3>
                    <p className="text-gray-400 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Taj Lands End, Mumbai</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div><p className="text-xs text-gray-500 mb-1">Date</p><p className="font-medium text-white">Dec 15, 2026</p></div>
                      <div><p className="text-xs text-gray-500 mb-1">Planner</p><p className="font-medium text-white">Royal Celebrations</p></div>
                      <div><p className="text-xs text-gray-500 mb-1">Guests</p><p className="font-medium text-white">500+</p></div>
                      <div><p className="text-xs text-gray-500 mb-1">Balance</p><p className="font-medium text-white text-[#D4AF37]">₹ 2,50,000</p></div>
                    </div>
                  </div>
                  <div className="shrink-0 w-full md:w-auto z-10">
                    <button className="w-full md:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors">Manage Event</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'quotes' && (
            <motion.div key="quotes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10 mb-8 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Request: <span className="text-white">REQ-8892</span></div>
                  <h3 className="text-xl font-bold text-white">Luxury Beach Wedding in Goa</h3>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Budget Range</div>
                  <div className="text-xl font-bold text-[#D4AF37]">₹15L - ₹50L</div>
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  { planner: 'Elite Gatherings', rating: 4.7, quote: '₹22,50,000', match: 98, msg: "We'd love to host this! Includes fire dancers and drone shoot.", tag: 'BEST MATCH' },
                  { planner: 'Sunset Planners', rating: 4.5, quote: '₹18,00,000', match: 85, msg: "Budget-friendly option focusing on elegant floral decor." },
                  { planner: 'Royal Celebrations', rating: 4.9, quote: '₹45,00,000', match: 72, msg: "Premium end-to-end package including celebrity artist." }
                ].map((offer, i) => (
                  <div key={i} className="bg-[#0f0f0f] border border-white/10 hover:border-[#6A38FF]/50 rounded-2xl p-6 transition-colors group">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 border-r border-white/10 pr-6">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white">{offer.planner}</h4>
                          {offer.tag && <span className="text-[10px] bg-[#D4AF37] text-black font-bold px-2 py-0.5 rounded uppercase">{offer.tag}</span>}
                        </div>
                        <div className="text-sm text-gray-400 flex items-center gap-1 mb-4"><span className="text-[#D4AF37]">★ {offer.rating}</span> • 150+ Events</div>
                        <div className="text-green-400 font-bold text-sm">Match Score: {offer.match}%</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Estimated Quotation</p>
                            <p className="text-2xl font-bold text-[#D4AF37]">{offer.quote}</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white"><MessageSquare className="w-5 h-5" /></button>
                            <button className="px-6 py-2 bg-gradient-to-r from-[#6A38FF] to-[#9D7DFF] text-white font-bold rounded-lg hover:shadow-[0_0_15px_rgba(106,56,255,0.4)] transition-shadow">Accept Offer</button>
                          </div>
                        </div>
                        <div className="bg-[#151515] p-4 rounded-xl border border-white/5 text-sm text-gray-300 italic">
                          "{offer.msg}"
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
