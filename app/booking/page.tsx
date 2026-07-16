"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Calendar as CalendarIcon, Users, MapPin, IndianRupee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps + 1)); // +1 for success screen
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {step <= totalSteps ? (
          <>
            {/* Header & Progress */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Book Your <span className="text-gradient-gold">Event</span>
              </h1>
              
              <div className="flex items-center justify-center gap-2 max-w-xl mx-auto">
                {[...Array(totalSteps)].map((_, i) => (
                  <div key={i} className="flex-1 flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      i + 1 === step ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 
                      i + 1 < step ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500 border border-white/10'
                    }`}>
                      {i + 1 < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                      <div className={`flex-1 h-1 mx-2 rounded-full transition-colors duration-300 ${
                        i + 1 < step ? 'bg-white/20' : 'bg-white/5'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Area */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: EVENT TYPE */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">What type of event are you planning?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['Wedding', 'Birthday', 'Corporate', 'Anniversary', 'Baby Shower', 'Other'].map(type => (
                        <button key={type} className="p-4 border border-white/10 rounded-xl hover:border-[#D4AF37] hover:bg-white/5 transition-all text-left group focus:border-[#D4AF37] focus:bg-white/10">
                          <div className="w-4 h-4 rounded-full border border-gray-500 group-focus:border-[#D4AF37] group-focus:bg-[#D4AF37] mb-3 transition-colors" />
                          <span className="text-white font-medium">{type}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DETAILS */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">Event Details</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 flex items-center gap-2"><CalendarIcon className="w-4 h-4" /> Date</label>
                        <input type="date" className="w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-[#D4AF37] outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location/City</label>
                        <input type="text" placeholder="e.g. Mumbai, Goa" className="w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-[#D4AF37] outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 flex items-center gap-2"><Users className="w-4 h-4" /> Guest Count</label>
                        <select className="w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-[#D4AF37] outline-none appearance-none">
                          <option>50 - 100</option><option>100 - 300</option><option>300 - 500</option><option>500+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 flex items-center gap-2"><IndianRupee className="w-4 h-4" /> Estimated Budget</label>
                        <select className="w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-[#D4AF37] outline-none appearance-none">
                          <option>₹1L - ₹5L</option><option>₹5L - ₹15L</option><option>₹15L - ₹50L</option><option>₹50L+</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: PREFERENCES */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">Services Required</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {['Venue Decoration', 'Catering', 'Photography', 'Videography', 'Entertainment', 'Makeup/Styling', 'Logistics', 'Full Management'].map(service => (
                        <label key={service} className="flex items-center gap-3 p-3 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5">
                          <input type="checkbox" className="w-4 h-4 accent-[#D4AF37]" />
                          <span className="text-sm text-gray-300">{service}</span>
                        </label>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Additional Notes</label>
                      <textarea rows={4} className="w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-[#D4AF37] outline-none resize-none" placeholder="Tell us more about your vision..."></textarea>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: REVIEW */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">Review Details</h2>
                    <div className="bg-[#111] rounded-xl p-6 space-y-4 border border-white/10 mb-6">
                      <div className="flex justify-between border-b border-white/5 pb-4">
                        <span className="text-gray-400">Event Type</span>
                        <span className="text-white font-medium">Wedding</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-4">
                        <span className="text-gray-400">Date & Location</span>
                        <span className="text-white font-medium">Dec 15, 2026 • Mumbai</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-4">
                        <span className="text-gray-400">Budget Estimate</span>
                        <span className="text-white font-medium">₹15L - ₹50L</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Services</span>
                        <span className="text-white font-medium text-right">Full Management, Decor, Photo</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center">By confirming, our top matching planners will review your request and contact you shortly.</p>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
                <button 
                  onClick={handlePrev}
                  className={`px-6 py-3 font-medium text-white transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-[#D4AF37]'}`}
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2 transition-all"
                >
                  {step === totalSteps ? 'Confirm Request' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* SUCCESS SCREEN */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden max-w-2xl mx-auto mt-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent opacity-60" />
            
            <div className="w-24 h-24 bg-[#D4AF37] rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] relative z-10">
              <CheckCircle className="w-12 h-12 text-black" />
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-white mb-4 relative z-10">Request Received!</h2>
            <p className="text-gray-300 text-lg mb-10 relative z-10">
              Your event details have been sent to our premium planners. You will receive tailored proposals in your dashboard within 24 hours.
            </p>
            
            <Link href="/" className="inline-block px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors relative z-10">
              Return to Home
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}
