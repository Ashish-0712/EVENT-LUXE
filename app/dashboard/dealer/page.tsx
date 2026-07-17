"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Users, CalendarDays, DollarSign, Image as ImageIcon, Settings, LogOut, TrendingUp, Filter, CheckCircle, XCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { mockMarketplaceRequests } from '@/data/mock';

export default function DealerDashboard() {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row pt-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-[#0f0f0f] p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A38FF] to-[#9D7DFF] flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-[0_0_15px_rgba(106,56,255,0.4)]">
            R
          </div>
          <div>
            <h3 className="font-medium text-white truncate w-32">Royal Celebrations</h3>
            <p className="text-xs text-[#D4AF37] flex items-center gap-1">Verified Partner</p>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Overview
          </button>
          <button onClick={() => setActiveTab('requests')} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'requests' ? 'bg-[#6A38FF]/10 text-[#9D7DFF] border border-[#6A38FF]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <div className="flex items-center gap-3"><CalendarDays className="w-5 h-5" /> New Requests</div>
            <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">2</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Users className="w-5 h-5" /> Clients
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <ImageIcon className="w-5 h-5" /> Portfolio Manager
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <DollarSign className="w-5 h-5" /> Revenue Analytics
          </button>
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
      <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#0a0a0a]">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-1">Lead Management</h1>
            <p className="text-gray-400">Review marketplace broadcasts and send custom quotations.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors">
              Update Availability
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Pending Requests', value: '14', trend: 'New Leads', icon: Users, color: 'text-[#D4AF37]' },
            { label: 'Active Events', value: '8', trend: 'This Month', icon: CalendarDays, color: 'text-[#6A38FF]' },
            { label: 'Total Revenue', value: '₹42.5L', trend: '+12%', icon: DollarSign, color: 'text-green-400' },
            { label: 'Profile Views', value: '1,240', trend: '+18%', icon: TrendingUp, color: 'text-blue-400' }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">{stat.trend}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* New Requests Feed */}
        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#151515]">
            <h2 className="text-xl font-serif font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Marketplace Leads
            </h2>
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" /> Filter Matches
            </button>
          </div>
          
          <div className="divide-y divide-white/10">
            {mockMarketplaceRequests.map((req, i) => (
              <div key={i} className="p-8 hover:bg-white/[0.02] transition-colors flex flex-col lg:flex-row gap-8">
                
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Customer: <span className="text-white font-medium">{req.customer}</span></div>
                      <h3 className="text-xl font-bold text-white mb-2">{req.eventType}</h3>
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4 text-[#D4AF37]" /> {req.date}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#6A38FF]" /> {req.venue}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-green-400" /> Budget: {req.budget}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/20 uppercase tracking-wider">
                      {req.status}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Requested Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {req.requirements.map((reqItem, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-md text-xs text-gray-300">
                          {reqItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-72 shrink-0 bg-[#0a0a0a] rounded-xl p-5 border border-white/5 flex flex-col">
                  <h4 className="text-sm font-medium text-white mb-4">Quick Response</h4>
                  <input type="text" placeholder="Enter quote amount (₹)" className="w-full bg-[#151515] border border-white/10 rounded-lg p-3 text-white text-sm mb-3 focus:border-[#6A38FF] outline-none" />
                  <textarea rows={2} placeholder="Brief message..." className="w-full bg-[#151515] border border-white/10 rounded-lg p-3 text-white text-sm mb-4 focus:border-[#6A38FF] outline-none resize-none" />
                  
                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded-lg text-sm transition-colors border border-transparent hover:border-red-500/30">
                      <XCircle className="w-4 h-4" /> Decline
                    </button>
                    <button className="flex items-center justify-center gap-1 py-2 bg-gradient-to-r from-[#6A38FF] to-[#9D7DFF] text-white font-bold rounded-lg hover:shadow-[0_0_15px_rgba(106,56,255,0.4)] transition-all">
                      <Send className="w-4 h-4" /> Quote
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
