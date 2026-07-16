"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  
  useGSAP(() => {
    if (!countRef.current) return;
    
    // We create a proxy object to tween
    const counter = { val: 0 };
    
    gsap.to(counter, {
      val: end,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (countRef.current) {
          // Format with commas
          const formatted = Math.floor(counter.val).toLocaleString('en-US');
          countRef.current.innerText = formatted + suffix;
        }
      }
    });
  }, [end, suffix, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}
