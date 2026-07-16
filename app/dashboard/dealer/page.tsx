"use client";

import { motion } from 'motion/react';
import { LayoutDashboard, Users, CalendarDays, DollarSign, Image as ImageIcon, Settings, LogOut, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function DealerDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col md:flex-row pt-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-[#111] p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
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
          <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl text-sm font-medium border border-white/5">
            <LayoutDashboard className="w-5 h-5 text-[#6A38FF]" /> Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <CalendarDays className="w-5 h-5" /> Bookings
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Users className="w-5 h-5" /> Clients
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <ImageIcon className="w-5 h-5" /> Portfolio
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
            <h1 className="text-3xl font-serif font-bold text-white mb-1">Partner Dashboard</h1>
            <p className="text-gray-400">Manage your bookings, portfolio, and earnings.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors">
              View Public Profile
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Earnings', value: '₹42.5L', trend: '+12%', icon: DollarSign, color: 'text-green-400' },
            { label: 'Active Events', value: '8', trend: '+2', icon: CalendarDays, color: 'text-[#6A38FF]' },
            { label: 'Pending Requests', value: '14', trend: 'New', icon: Users, color: 'text-[#D4AF37]' },
            { label: 'Profile Views', value: '1,240', trend: '+18%', icon: TrendingUp, color: 'text-blue-400' }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">{stat.trend}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1 relative z-10">{stat.label}</p>
              <h3 className="text-3xl font-bold text-white relative z-10">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Requests Table */}
        <h2 className="text-xl font-serif font-bold text-white mb-6">Recent Booking Requests</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111] border-b border-white/10">
                  <th className="p-4 text-sm font-medium text-gray-400">Client</th>
                  <th className="p-4 text-sm font-medium text-gray-400">Event Type</th>
                  <th className="p-4 text-sm font-medium text-gray-400">Date</th>
                  <th className="p-4 text-sm font-medium text-gray-400">Budget Estimate</th>
                  <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="p-4 text-sm font-medium text-gray-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Priya Sharma', event: 'Wedding', date: 'Dec 15, 2026', budget: '₹15L - ₹50L', status: 'Pending', color: 'text-yellow-400 bg-yellow-400/10' },
                  { name: 'TechCorp Ltd', event: 'Corporate', date: 'Nov 10, 2026', budget: '₹5L - ₹15L', status: 'Approved', color: 'text-green-400 bg-green-400/10' },
                  { name: 'Rohan Gupta', event: 'Anniversary', date: 'Oct 05, 2026', budget: '₹1L - ₹5L', status: 'Declined', color: 'text-red-400 bg-red-400/10' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-white">{row.name}</div>
                      <div className="text-xs text-gray-500">Mumbai</div>
                    </td>
                    <td className="p-4 text-gray-300">{row.event}</td>
                    <td className="p-4 text-gray-300">{row.date}</td>
                    <td className="p-4 text-gray-300">{row.budget}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-[#6A38FF] hover:text-white text-sm font-medium transition-colors">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
