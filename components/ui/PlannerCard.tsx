"use client";

import { motion } from 'motion/react';
import { Planner } from '@/data/mock';
import Link from 'next/link';
import { Star, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import GlassCard from './GlassCard';

interface PlannerCardProps {
  planner: Planner;
  index: number;
}

export default function PlannerCard({ planner, index }: PlannerCardProps) {
  return (
    <GlassCard delay={index * 0.1} hoverEffect className="group flex flex-col h-full">
      {/* Top Section - Image/Logo Placeholder (Using gradients for mock) */}
      <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
        {/* Placeholder for planner image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" 
             style={{ backgroundImage: `url('https://source.unsplash.com/random/800x600/?wedding,event,${index}')` }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
        
        {/* Verified Badge */}
        {planner.verified && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-medium text-white">Verified</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
              {planner.company}
            </h3>
            <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {planner.city}
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-2 py-1 rounded text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-sm font-bold">{planner.rating}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">({planner.reviewCount})</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4 line-clamp-2">
          {planner.about}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
          <div className="bg-white/5 rounded-lg p-3 border border-white/5">
            <div className="text-xs text-gray-500 mb-1">Experience</div>
            <div className="font-semibold text-white">{planner.yearsExperience} Years</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/5">
            <div className="text-xs text-gray-500 mb-1">Events</div>
            <div className="font-semibold text-white">{planner.completedEvents}+</div>
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 mb-0.5">Starting at</div>
            <div className="font-bold text-lg text-[#D4AF37]">
              {formatCurrency(planner.startingPrice)}
            </div>
          </div>
          
          <Link 
            href={`/planners/${planner.id}`}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#D4AF37] transition-colors group/btn"
          >
            View Profile
            <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
