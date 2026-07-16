"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bookingSteps } from '@/data/mock';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const steps = gsap.utils.toArray('.timeline-step') as HTMLElement[];
    const lines = gsap.utils.toArray('.timeline-line') as HTMLElement[];

    // Animate each step as it comes into view
    steps.forEach((step, i) => {
      gsap.from(step, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Animate the line connecting to the next step
      if (lines[i]) {
        gsap.fromTo(lines[i], 
          { height: 0 },
          { 
            height: '100%', 
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto py-10">
      {bookingSteps.map((step, index) => (
        <div key={step.step} className="timeline-step relative flex gap-8 mb-12 last:mb-0">
          
          {/* Timeline Connector Line */}
          {index < bookingSteps.length - 1 && (
            <div className="absolute left-[27px] top-14 bottom-[-48px] w-0.5 bg-white/10 rounded-full overflow-hidden">
              <div className="timeline-line w-full h-full bg-gradient-to-b from-[#D4AF37] to-[#6A38FF]" />
            </div>
          )}

          {/* Icon Circle */}
          <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#0B0B0B] border-2 border-white/20 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#6A38FF]/20 blur-md -z-10" />
            {step.icon}
          </div>

          {/* Content Card */}
          <div className="flex-grow pt-2">
            <div className="glass-card p-6 border-l-4 border-l-[#D4AF37]">
              <div className="text-sm font-semibold text-[#D4AF37] mb-1">
                STEP {step.step}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
