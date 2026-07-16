import { planners } from '@/data/mock';
import PlannerCard from '@/components/ui/PlannerCard';
import { Search, Filter } from 'lucide-react';

export default function PlannersPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-32 pb-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#6A38FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Discover <span className="text-gradient-gold">Event Partners</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our curated list of India's most prestigious and verified event planners. Filter by category, location, and budget.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search planners by name, city, or specialty..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar shrink-0">
            <button className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold rounded-xl shrink-0">
              <Filter className="w-4 h-4" />
              All Categories
            </button>
            <button className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium shrink-0 transition-colors">
              Luxury Weddings
            </button>
            <button className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium shrink-0 transition-colors">
              Corporate
            </button>
            <button className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium shrink-0 transition-colors">
              Under ₹5L
            </button>
            <select className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium shrink-0 transition-colors outline-none cursor-pointer appearance-none">
              <option value="">Select City</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="goa">Goa</option>
              <option value="jaipur">Jaipur</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planners.map((planner, index) => (
            <PlannerCard key={planner.id} planner={planner} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/10 hover:border-[#D4AF37] transition-all">
            Load More Planners
          </button>
        </div>

      </div>
    </main>
  );
}
