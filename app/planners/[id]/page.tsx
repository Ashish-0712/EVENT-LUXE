import { planners } from '@/data/mock';
import { notFound } from 'next/navigation';
import { Star, MapPin, CheckCircle, Award, CalendarDays, ChevronRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default async function PlannerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const planner = planners.find(p => p.id === id);
  
  if (!planner) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] pb-24">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full bg-[#111]">
        {/* Placeholder for planner hero image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?luxury,event,${planner.id}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
        
        {/* Banner Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {planner.verified && (
                <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-white">Verified Partner</span>
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 shadow-black drop-shadow-md">
                {planner.company}
              </h1>
              <p className="text-xl text-gray-300 flex items-center gap-2 shadow-black drop-shadow-md">
                <MapPin className="w-5 h-5 text-[#D4AF37]" /> {planner.city}, India
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area (Left 2/3) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                About {planner.company}
                <div className="h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent flex-grow" />
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {planner.about}
              </p>
            </section>

            {/* Specializations & Awards */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Specializations</h3>
                <ul className="space-y-3">
                  {planner.specializations.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              {planner.awards && planner.awards.length > 0 && (
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Awards & Recognition</h3>
                  <ul className="space-y-3">
                    {planner.awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Packages */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                Pricing Packages
                <div className="h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent flex-grow" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {planner.packages.map((pkg, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${pkg.popular ? 'bg-gradient-to-b from-[#1a1508] to-[#0B0B0B] border border-[#D4AF37]/50 relative shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/5 border border-white/10'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    )}
                    <h4 className="text-xl font-serif font-bold text-white mb-2">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-6">
                      {formatCurrency(pkg.price)}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#D4AF37]/70 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Right 1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              {/* Stats Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black overflow-hidden flex items-center justify-center border-2 border-[#D4AF37]">
                    <span className="text-xl font-bold text-gray-500">{planner.ownerName.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{planner.ownerName}</h4>
                    <p className="text-sm text-gray-400">Founder & Lead Planner</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-black/30 rounded-xl border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{planner.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{planner.reviewCount} Reviews</div>
                  </div>
                  <div className="text-center p-3 bg-black/30 rounded-xl border border-white/5">
                    <div className="font-bold text-white mb-1">{planner.completedEvents}+</div>
                    <div className="text-xs text-gray-500">Events Managed</div>
                  </div>
                </div>
              </div>

              {/* Quick Contact/Availability */}
              <div className="bg-gradient-to-br from-[#120a24] to-[#0B0B0B] border border-[#6A38FF]/30 rounded-2xl p-6">
                <h4 className="font-serif font-bold text-white mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#6A38FF]" /> Next Available Dates
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {planner.availableDates.slice(0, 4).map((date, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#6A38FF]/20 border border-[#6A38FF]/30 rounded-md text-sm text-[#9D7DFF]">
                      {new Date(date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/booking"
                  className="w-full flex items-center justify-between px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-colors"
                >
                  <span className="font-medium">Check Full Calendar</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
