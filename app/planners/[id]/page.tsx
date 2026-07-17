import { planners } from '@/data/mock';
import { notFound } from 'next/navigation';
import { Star, MapPin, CheckCircle, Award, CalendarDays, ChevronRight, Video, Camera } from 'lucide-react';
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
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full bg-[#111] group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${planner.image}')` }} />
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
                href={`/booking?plannerId=${planner.id}`}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 text-center flex items-center gap-2"
              >
                Book This Planner <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area (Left 2/3) */}
          <div className="lg:col-span-2 space-y-20">
            
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
            <section className="grid md:grid-cols-2 gap-8 bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-4">Specializations</h3>
                <ul className="space-y-3">
                  {planner.specializations.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-[#6A38FF]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              {planner.awards && planner.awards.length > 0 && (
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-4">Awards & Recognition</h3>
                  <ul className="space-y-3">
                    {planner.awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Detailed Portfolio / Showcases */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                <Camera className="w-8 h-8 text-[#D4AF37]" /> Event Showcases
              </h2>
              
              <div className="space-y-12">
                {planner.portfolio.map((item, i) => (
                  <div key={i} className="bg-black border border-white/10 rounded-3xl overflow-hidden group">
                    <div className="grid md:grid-cols-2 gap-1">
                      {item.images.slice(0, 2).map((img, idx) => (
                        <div key={idx} className="relative h-64 md:h-80 overflow-hidden">
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }} />
                        </div>
                      ))}
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-[#6A38FF] text-sm font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                          <h3 className="text-2xl font-serif font-bold text-white">{item.title}</h3>
                        </div>
                        <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                          {item.location}
                        </span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>

                    {/* Before & After if available */}
                    {item.beforeAfterImages && item.beforeAfterImages.length > 0 && (
                      <div className="border-t border-white/10 p-8 bg-[#0a0a0a]">
                        <h4 className="text-[#D4AF37] font-semibold mb-6 uppercase tracking-widest text-sm">Transformation Showcase</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative rounded-xl overflow-hidden group/ba">
                            <img src={item.beforeAfterImages[0].before} alt="Before" className="w-full h-48 object-cover" />
                            <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur text-white text-xs font-bold rounded-md uppercase tracking-wider">Before</div>
                          </div>
                          <div className="relative rounded-xl overflow-hidden group/ba">
                            <img src={item.beforeAfterImages[0].after} alt="After" className="w-full h-48 object-cover" />
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37]/90 backdrop-blur text-black text-xs font-bold rounded-md uppercase tracking-wider">After</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Cinematic Highlights Video Section Placeholder */}
            {planner.droneFootageAvailable && (
              <section className="relative rounded-3xl overflow-hidden bg-[#111] p-12 text-center border border-white/10 group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1920x1080/?drone,wedding,event')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#D4AF37]/20 backdrop-blur border border-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Cinematic Highlights</h3>
                  <p className="text-gray-300">Watch our breathtaking drone footage and event movies.</p>
                </div>
              </section>
            )}

            {/* Setup Process */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                Our Process
                <div className="h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent flex-grow" />
              </h2>
              <div className="flex flex-wrap gap-4">
                {planner.setupProcess.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full">
                    <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <span className="text-white font-medium">{step}</span>
                  </div>
                ))}
              </div>
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
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
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
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6A38FF] to-black overflow-hidden flex items-center justify-center border-2 border-[#D4AF37]">
                    <span className="text-3xl font-bold text-white">{planner.ownerName.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{planner.ownerName}</h4>
                    <p className="text-sm text-[#D4AF37]">Founder & Lead Planner</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/40 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-2">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-xl font-bold">{planner.rating}</span>
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">{planner.reviewCount} Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-black/40 rounded-2xl border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">{planner.completedEvents}+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Events</div>
                  </div>
                </div>
              </div>

              {/* Themes Available */}
              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <h4 className="font-serif font-bold text-white mb-6">Signature Themes</h4>
                <div className="space-y-3">
                  {planner.decorationThemes.map((theme, i) => (
                    <div key={i} className="px-4 py-3 bg-white/5 rounded-xl text-gray-300 text-sm border border-white/5">
                      {theme}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact/Availability */}
              <div className="bg-gradient-to-br from-[#120a24] to-[#0B0B0B] border border-[#6A38FF]/30 rounded-3xl p-8">
                <h4 className="font-serif font-bold text-white mb-6 flex items-center gap-2">
                  <CalendarDays className="w-6 h-6 text-[#6A38FF]" /> Available Dates
                </h4>
                <div className="flex flex-col gap-3 mb-8">
                  {planner.availableDates.slice(0, 4).map((date, i) => (
                    <div key={i} className="px-4 py-3 bg-[#6A38FF]/10 border border-[#6A38FF]/30 rounded-xl text-center text-[#9D7DFF] font-medium">
                      {new Date(date).toLocaleDateString('en-IN', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  ))}
                </div>
                <Link 
                  href={`/booking?plannerId=${planner.id}`}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#6A38FF] to-[#9D7DFF] rounded-xl text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(106,56,255,0.4)]"
                >
                  <span>Request Booking</span>
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
